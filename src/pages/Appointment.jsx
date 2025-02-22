import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appointment = () => {

  const {docId}=useParams()
  const navigate=useNavigate()
  const value=useContext(AppContext)

  const [docSlots,setDocSlots]=useState([])
  const [slotIndex,setSlotIndex]=useState(0)
  const [slotTime,setSlotTime]=useState('')
  const [docInfo,setdocInfo]=useState(null)

  const fetchInfo=async()=>{
    const docInfo=value.find(doc=>doc._id===docId)
    setdocInfo(docInfo)
    
  }

  const getAvailableSlot=()=>{
    setDocSlots([])

    let today=new Date()

    for(let i=0;i<7;i++){
      let currentDate=new Date(today)
      currentDate.setDate(today.getDate()+i)

      let endTime=new Date()
      endTime.setDate(today.getDate()+1)
      endTime.setHours(21,0,0,0)

      if(today.getDate()===currentDate.getDate()){
        currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours()+1 :10)
        currentDate.setMinutes(currentDate.getMinutes()>30?30:0)
      }else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let timeSlot=[]
      while(currentDate < endTime){
        let formattedTime=currentDate.toLocaleDateString([],{hour:'2-digit',minute:'2-digit'})

        timeSlot.push({
          datetime:new Date(currentDate),
          time:formattedTime
        })

        currentDate.setMinutes(currentDate.getMinutes()+30)
      }

      setDocSlots(prev=>([...prev,timeSlot]))
    }

    

    
  }


  useEffect(()=>{
    fetchInfo()
  },[value,docId])

  useEffect(()=>{
    getAvailableSlot()
  },[docInfo])

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])

  return docInfo && (
    <div>
        <div className='flex flex-col sm:flex-row gap-4'>
          <div>
            <img className='bg-blue-500 w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
          </div>

          <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white  mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
            <p className=' text-2xl font-medium text-gray-900'>{docInfo.name}</p>

            <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
              <p>{docInfo.degree}-{docInfo.spec}</p>
              <button className='py-0.5 px-2 border-2 text-xs rounded-full'>{docInfo.experience}</button>
            </div>

            <div className='text-sm font-medium text-gray-900 mt-3'>
              <p>About :</p>
              <p className='text-gray-500 max-w=[700px] mt-1'> {docInfo.about}</p>
            </div>

            <p className='text-sm mt-4 font-medium text-gray-800'>Appointment fees : {docInfo.fees}</p>

            <button onClick={()=>{navigate('/appform');scrollTo(0,0)}} className='bg-blue-500 px-6 py-2 rounded-full outline-none border-none text-white font-medium  mt-5'>Book Appointment</button>
          </div>


        </div>
    </div>
  )
}

export default Appointment