'use client'
import CustomSpinner from '@/app/components/CustomLoader';
import axios from 'axios';
import React, {useEffect , useState} from 'react'

function Home() {
  const [userData, setData]= React.useState([]);
  const [loading,setLoading] = useState(false)

  const getAllUsers = async ()=>{
    setLoading(true)
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')

      const data = await res.data

      setData(data)
      setLoading(false)
    } catch (error) {
        setLoading(false)
    }finally{
      setLoading(false)
    }
      

  }


  const handleFilter = (e)=>{
    console.log(e.target.value,'value')

    if(e.target.value === ''){
      getAllUsers()
    }else{

      const copydata = [...userData]
  
      const data = copydata?.filter(item=>  item.username.includes(e.target.value))
  
      console.log(data,'data')
        setData(data)
    }
  }

 useEffect(()=>{
  getAllUsers()
 },[])

  return (
    <CustomSpinner spinning={loading}>
            <input class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="search" 
            onChange={(e)=> handleFilter(e)}
            />

            {
              userData.length <=0 ? <p>No data</p> :

    <table class="table-auto border">
  <thead className=' border'>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>userName</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
  </thead>
  <tbody>
    {
      userData?.map((item)=><tr key={item?.id}>
      <td className=' border'>{item?.id}</td>
      <td className=' border'>{item?.name}</td>
      <td className=' border'>{item?.username}</td>
      <td className=' border'>{item?.email}</td>
      <td className=' border'>{item?.phone}</td>
    </tr>)
    }
    
   
  
  </tbody>
</table>
            }

</CustomSpinner>
  )
}

export default Home