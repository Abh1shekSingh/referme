import React,{useState} from 'react'
import Jobs from "../Jobs/Jobs"
import left from "../../assets/quoteLeft.svg"
import right from "../../assets/quoteRight.svg"
const Filter = () => {

    const [inputText, setInputText] = useState("")

    const handleChange = (e) => {
        e.preventDefault();
        var lowerCaseText = e.target.value.toLowerCase();
        setInputText(lowerCaseText)

    }

  return (
      <>
        <div className='heading-span mt-20 md:pt-20 mx-auto flex justify-center items-center'>
            <img src={left} alt="left quote " className='md:w-14 w-11' />
            <h1 className=' text-black leading-normal text-center md:text-6xl font-b612 text-3xl font-bold px-6'>Jobs that Might <br></br>Interest You</h1>
            <img src={right} alt="left quote " className='md:w-14 w-11' />
        </div>
        <div className='flex justify-center items-center my-8'>
            <input 
                type="search" 
                className='border-2 border-blue-400 font-dm text-lg py-2 px-6 rounded outline-none' 
                placeholder='Search Job Title' 
                onChange={handleChange} 
            />
        </div>
        <Jobs input = {inputText} />
    </>
  )

  
}

export default Filter