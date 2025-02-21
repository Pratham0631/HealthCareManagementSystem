import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctor = () => {
  const {speciality}=useParams()
  const value=useContext(AppContext)
  const [filterDoc,setFilterDoc]=useState([])

  const applyFilter=()=>{
    if(speciality){
      setFilterDoc(value.filter(doc=>doc.speciality===speciality))
      console.log(filterDoc)
    }
    else{
      setFilterDoc(value)
    }
  }

  useEffect(()=>{
    console.log(filterDoc)
  },[filterDoc])
  useEffect(()=>{
    applyFilter()
  },[value,speciality])

  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <div>
          <p>General physician</p>
          <p>Dermatologist</p>
          <p>Gynecologist</p>
          <p>Pediatricians</p>
          <p>Neurologist</p>
        </div>

        <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 flex-wrap justify-center mt-16 pt-5 gap-y-6 px-3 sm:px-0">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => {
                navigate(`/appointment/${item._id}`);
              }}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              {/* FIX: Wrap the image in a div with a fixed height */}
              <div className="w-full h-40 bg-blue-50 flex items-center justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 rounded-full bg-green-500"></p>
                  <p>{item.available}</p>
                </div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm font-light">{item.spec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctor