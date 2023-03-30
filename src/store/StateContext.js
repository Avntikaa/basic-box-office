import React, { useContext, useState, createContext,useCallback} from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [movies,setMovies]=useState([]);
const[isLoading,setIsLoading]=useState(false);
const[error,setError]=useState();

function stopRetrying(){
setIsLoading(false);
}
 
  const fetchMovieHandler=useCallback(async() =>{
    console.log('bhjcb');
    setIsLoading(true);
    try{
 const response=await fetch('https://react-box-58c06-default-rtdb.firebaseio.com/movies.json')
     const data=await response.json();
 if(!response.ok)
 {
  throw new Error('Something went Wrong......retrying');
 }
 for(const key in data){
  console.log(data[key]);
  let obj=data[key];
obj={...obj,id:key}
    setMovies((prev)=>[...prev,obj]);
           setIsLoading(false);
    }
  }
  catch(error){
    setError(error.message);
    setTimeout(fetchMovieHandler,5000);
  }

  },[])

  return (
    <Context.Provider
      value={{
        error,movies,isLoading,stopRetrying,fetchMovieHandler,setMovies
        }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);