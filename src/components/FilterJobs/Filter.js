import React,{useState} from 'react'
import Jobs from "../Jobs/Jobs"
const Filter = () => {

    const [inputText, setInputText] = useState("")

    const handleChange = (e) => {
        e.preventDefault();

        var lowerCaseText = e.target.value.toLowerCase();
        setInputText(lowerCaseText)

    }


  return (
      <>
        <div className='flex justify-center items-center my-8'>
            <input 
                type="search" 
                className='border-2 border-green-300 py-2 px-6 rounded outline-none' 
                placeholder='Search Job Title' 
                onChange={handleChange} 
            />
        </div>
        <Jobs input = {inputText} />
    </>
  )

  
}

export default Filter