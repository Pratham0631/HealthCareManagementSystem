import React from 'react'
import { Link } from 'react-router-dom'

const Speciality = () => {
    const data=[
        {
            speciality:"General physician",
            image:"physician.svg"
        },
        {
            speciality:"Gynecologist",
            image:"Gynecologist.svg"
        },
        {
            speciality:"Dermatologist",
            image:"dermatologist.svg"
        },
        {
            speciality:"Pediatricians",
            image:"pediatrician.svg"
        },
        {
            speciality:"Neurologist",
            image:"Neurologist.svg"
        }
    ]
  return (
    <div className='flex flex-col items-center  gap-4 py-16 text-gray-800'>
        <h1 className='text-3xl font-medium'>Find by Speciality </h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
    
        <div className='flex justify-center items-center gap-8 pt-5 w-full flex-wrap  '>
            {
                data.map((item,index)=>
                    <Link key={index} to={`/doctor/${item.speciality}`} className='flex flex-col items-center hover:translate-y-[-10px] transition-all duration-500'>
                        <img src={item.image} alt="" className='w-16 mb-2 sm:w-24 ' />
                        <p className='text-center text-sm'>{item.speciality}</p>
                    </Link>
                )
            }
        </div>
    </div>
  )
}

export default Speciality