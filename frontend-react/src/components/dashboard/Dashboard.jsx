import axios from 'axios'
import { useEffect } from 'react'
import axiosInstance from '../../axiosInstance'

const Dashboard = () => {
    useEffect(()=>{
        const fetchProtectData = async () =>{
            try{
                const response = await axiosInstance.get('/protected-view/');
                console.log('success: ', response.data);
            }catch(error){
                console.error('Error fetching data:', error)
            }
        }
        fetchProtectData();
    }, [])
  return (
    <div className='text-light container'>Dashboard</div>
  )
}

export default Dashboard