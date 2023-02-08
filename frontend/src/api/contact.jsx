import axios from 'axios'
export const fetchContact = async()=>{
    const {data}=  await axios.get('http://localhost:5000/api/user/getuser')
    return data

}
export const PostContact= async(values)=>{
    const addingContact= await axios.post('http://localhost:5000/api/user/add',{...values})
}
export const updateContact=async(id,values)=>{
    const update=await axios.put(`http://localhost:5000/api/user/updateuser/${id}`,values)
}
export const deleteContact=async (id,values)=>{

    const deletuser= await axios.delete(`http://localhost:5000/api/user/deleteuser/${id}`,values)
}

export const getUniqueuser=async (id,values)=>{

    const {data}= await axios.get(`http://localhost:5000/api/user/getuser/${id}`,values)
    return data
}
