
import React,{useEffect,useState} from 'react'
import axios from "axios"
import Avatar from '@mui/material/Avatar';
import {VscReferences}  from 'react-icons/vsc'
const Header = () => {
    let cancelToken;
    const [user, setUser] = useState([]);

    if(typeof cancelToken != typeof undefined) {
        cancelToken.cancel('Canceling Previous Request..');
    }

    cancelToken = axios.CancelToken.source()
   
    useEffect(() => {
        const getUserData = async() => {
            await axios.get("https://refertest.pythonanywhere.com/user/data",{cancelToken :cancelToken.token})
            .then((response) => {
                setUser(response.data.data)
            })
            
        };

        getUserData(); 
 // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    console.log(user)
    

    

  return (
      
        <div className='flex top-0 left-0 right-0 z-10 backdrop-blur fixed shadow-sm justify-between items-center py-3 px-5 md:px-20 md:py-6 text-black'>

            <div className='flex justify-center items-center gap-2'>
                <VscReferences className='md:text-4xl' />
                <h1 className='font-dm text-xl font-bold md:text-4xl '>Refer <span className='text-blue-400'>Me</span></h1>
            </div>
            
                <div className='flex items-center justify-center gap-2 font-dm text-sm'>
                <Avatar alt={user.name} src={user.pictureUrl} />
                <div>
                    <p>{user.name}</p>
                    <p>{user.college}</p>
                </div>
            </div>
           
        </div>
      
    
  )
}

export default Header