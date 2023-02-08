import React,{useState} from 'react'
import'./AddContact.css'
import {PostContact} from '../../api/contact'
import { useNavigate } from 'react-router';


function AddContact() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [age,setAge]=useState(0)
  const navigate = useNavigate()
const handelAdd=async(values)=>{
 await PostContact(values)
 navigate('/list')}
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
    <button onClick={()=>handelAdd({name,age,email})} >Add New Contact</button>

    
    </div>
  </form>
</div>
  </div>
      
    
  )
}

export default AddContact
