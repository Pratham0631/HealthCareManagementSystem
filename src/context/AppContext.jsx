import { createContext } from "react";

export const AppContext=createContext()

const AppContextProvider=(props)=>{

const value= [
    {
        _id:1,
      image: "doc1.png",
      available: "Available",
      name: "Dr. Richard James",
      spec: "General physician",
    },
    {
        _id:2,
      image: "doc2.png",
      available: "Available",
      name: "Dr. Emily Larson",
      spec: "Gynecologist",
    },
    {
        _id:3,
      image: "doc3.png",
      available: "Available",
      name: "Dr. Sarah Patel",
      spec: "Dermatologist",
    },
    {
        _id:4,
      image: "doc4.png",
      available: "Available",
      name: "Dr. Christopher Lee",
      spec: "Pediatricians",
    },
    {
        _id:5,
      image: "doc6.png",
      available: "Available",
      name: "Dr. Jennifer Garcia",
      spec: "Neurologist",
    },
  ];
  return(
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider