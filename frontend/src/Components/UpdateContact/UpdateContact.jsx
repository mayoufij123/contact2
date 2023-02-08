import React,{useEffect, useState} from 'react'
import "./UpdateContact.css"
import {updateContact,getUniqueUser} from '../../api/contact'
import { useNavigate,useParams } from 'react-router';
import './UpdateContact.css'
const UpdateContact = () => {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [age,setAge]=useState(0)
const navigate = useNavigate()
const {id}=useParams()
const handeUpdat=async(idcon,values)=>{
await updateContact(idcon,values)
navigate('/list')
}
return (
    <div className='jaber'>
    <div class="center">
  <h1>Add contact for</h1>
  <form>
    <div class="inputbox">
      <input type="text" required="required"  value={name}  onChange={(e)=>setName(e.target.value)}   />
      <span>name</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required"value={age}  onChange={(e)=>setAge(e.target.value)}   />
      <span>age</span>
    </div>
    
    
    <div class="inputbox">
      <input type="text" required="required"value={email}  onChange={(e)=>setEmail(e.target.value)}    />
      <span>Email</span>
    </div>
    <div class="inputbox">
    <button onClick={()=>handeUpdat(id,{name,age,email})}  >update New Contact</button>

    
    </div>
  </form>
</div>
  </div> )
}

export default UpdateContact
