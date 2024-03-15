  import { useState } from "react"
   
   function Button(props){
     const title=props.title
    const [name , setName]=     useState("shyam")
    const buttonClick=()=>{
         setName("changed")
       
    }
      
     return(
        <div>
        <p>{name}</p>
        <button onClick={buttonClick}>{title}</button>
        </div>
     )
   }


 
 export  default function Home(){
    return(
        <Button title="Click Me!"/>
    )
}