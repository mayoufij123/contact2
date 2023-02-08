import React from 'react'
import { useEffect } from 'react'
import { useDispatch,} from 'react-redux'
import { useSelector } from 'react-redux'
import {fetchContact} from '../../api/contact'
import {setContact} from '../../store/contactSlice'
import CardContact from './CardContact'

function ListContact() {
    const contact=useSelector(state=>state.contact)
    console.log('contact',contact)
    const dispatch=useDispatch()
    const getContact=async()=>{
        const data= await fetchContact()
        console.log(data.cont,'data get user')
        dispatch(setContact(data.cont))
        
    }
    useEffect(()=>{
getContact()
    },[])
return(
 <div>
     {
        contact.map((e)=> <CardContact users={e} getContact={getContact}  /> )
      }
 </div>

)
}

export default ListContact
