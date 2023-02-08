import React from 'react'
import { useNavigate } from 'react-router-dom'
import './CardContact.css'


function CardContact({users,getContact}) {
  const navigate=useNavigate()
  const navupdate=()=>{
navigate(`/update/${users._id}`)
  }
  return (
    <div>
      <div className='jaber'>
    <div class="center">
  <h1>Add contact for</h1>
  <form>
    <div class="inputbox">
      <input type="text" required="required"/>
      <span>{users.name}</span>
    </div>
    <div class="inputbox">
      <input type="text" required="required"/>
      <span>{users.age}</span>
    </div>
    
    
    <div class="inputbox">
      <input type="text" required="required"/>
      <span>{users.email}</span>
    </div>
    <div class="inputbox">
    <a href="#"><button onClick={()=>navupdate()} >Update</button></a>
        <a href="#"><button>Delete</button></a>
    </div>
  </form>
</div>
  </div>
      
      
    </div>
  )
}

export default CardContact
