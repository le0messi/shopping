import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const Add = (props) => {
    var[input,setinput]=useState(props.data);
    console.log(props.data)
    const inputhandler1 = (e) =>{
        const {name,value}=e.target
        setinput({...input,[name]:value})
    }
    const readvalues=()=>{
    console.log("clicked")
    if(props.method==="post"){
    axios.post(" http://localhost:3006/products",input)
    .then(response=>{
        alert("add success")
      })
    } else if(props.method==="put"){
      axios.put(" http://localhost:3006/products/"+input.id,input)
      .then(response=>{
        alert("updated successfully")
        window.location.reload(false)
      })
     .catch(err=>console.log(err))
  }
  }
  return (
    <div>
   
      <TextField   variant="filled" onChange={inputhandler1} label='name'
      name='name' value={input.name}> </TextField>  <br/>
      <TextField  id="filled-basic" label="brand" variant="filled" onChange={inputhandler1} 
      name='brand' value={input.brand} /><br/><br/>
       <TextField  id="filled-basic" label="quantity" variant="filled" onChange={inputhandler1} 
      name='quantity' value={input.quantity} /><br/><br/>
       <TextField  id="filled-basic" label="price" variant="filled" onChange={inputhandler1} 
      name='price' value={input.price} /><br/><br/>
      <Button variant="contained" onClick={readvalues}>save</Button><br/>
    </div>
  )
}

export default Add