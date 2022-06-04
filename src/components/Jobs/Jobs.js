import React,{useState,useEffect} from 'react'
import axios from "axios"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {BiTimeFive,BiRocket} from "react-icons/bi"
import {GoLocation} from "react-icons/go"

const Jobs = ({input}) => {
  let cancelToken;
  const [jobs, setJobs] = useState([]);

  if(typeof cancelToken != typeof undefined) {
     cancelToken.cancel('Canceling Previous calls');
  }

  cancelToken = axios.CancelToken.source();

  useEffect(() => {
      const getJobsData = async() => {
        await axios.get("https://refertest.pythonanywhere.com/job/openings",{cancelToken:cancelToken.token})
        .then((response) => {
          setJobs(response.data.data)
        })
      }  

      getJobsData();
  }, [])
  
  // console.log(jobs)
  const filteredData = jobs.filter((item) => {
    if(input === ' '){
      return item;
    }else{
      return item.designation.toLowerCase().includes(input)
    }
  })

  return (
    <>
      <div >
        
        <Grid container className='flex justify-center items-center py-6 px-6 md:px-40 mt-6'>
        {filteredData.map((items) => (
          <Grid items xs={12} lg={3} xl={6}>
            <Card elevation={0} className="cards mx-2 md:mx-6 my-6">
              <CardContent>
                <p className='font-dm font-medium text-md text-slate-500' >
                  {items.company}
                </p>
                <p className='font-b612  text-lg font-bold text-black'>
                  {items.designation}
                </p>
                
                
                <div className='pt-5 font-dm flex flex-col gap-1'>
                  <p className='flex items-center gap-2 text-black font-medium'><BiTimeFive />
                    {items.min_experience <= 0 ? 'Fresher' : items.min_experience +' year'}
                  </p>
                  <p className='flex items-center gap-2 font-medium'><GoLocation />{items.location}</p>
                  <p className='flex items-center gap-2 font-medium'>
                    <BiRocket />
                    Skill(s) Required
                  </p>
                  <ul className='flex flex-wrap gap-2'>
                    {items.skills.map((item) => (
                          <li className='border text-sm text-white py-1 px-3 rounded-full border-3 border-blue-400 bg-blue-400'>{item}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardActions>
                <button className='flex justify-center font-dm items-center border border-2 py-2 px-8 border-blue-400 rounded  hover:border-black transtion-all duration-300'>Apply</button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        
        </Grid>

      </div>
    </>
  )
}

export default Jobs