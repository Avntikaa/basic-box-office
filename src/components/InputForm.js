import React, { useState} from 'react'
import { useStateContext } from '../store/StateContext';
import './InputForm.css'
const InputForm = (props) => {
    const cxt=useStateContext();
    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const[date,setDate]=useState('');
    const addtitle=(e)=>{
        setTitle(e.target.value);
    }
    const addPrice=(e)=>{
        setDesc(e.target.value);
    }
    const addDate=(e)=>{
        setDate(e.target.value);
    }

    const onSubmitFormDeatils=(e)=>{
        console.log('kfnkj');
        e.preventDefault();
        const newmovie={
            title:title,
            desc:desc,
            Date:date
        }
try{
fetch('https://react-box-58c06-default-rtdb.firebaseio.com/movies.json',{
    method:'POST',
    body:JSON.stringify(newmovie)
})
cxt.setMovies((prev)=>[...prev,newmovie])
console.log('post success');
}
catch(error){
    console.log(error);
}
   }

    const onCancel=()=>{
        props.openFormDiv();
    }
  return (
<div className="form-style-6" id='formdiv'>
<form>
<input type="text"  onChange={addtitle} placeholder="Enter title" />
<textarea type="text" onChange={addPrice} placeholder="Enter Opening Text" />
<input type="date"  onChange={addDate} placeholder="Enter Release Date" />

<button  type="submit" onClick={onSubmitFormDeatils}>SUBMIT</button>
<button type="submit" id='cancelbtn' onClick={onCancel}>CANCEL</button>

</form>
</div>
  )
  }

export default InputForm