


 function  Animals(){
     return (
        <>
         <h1>Animals:</h1>
         <ul>
           {animals.map((animal)=>{
             return <li  key={animal}>{animal}</li>
           })}  
            
            </ul> 
        
        </>
     )

}

 function List(props){
     if(!props.animals){
         return <h1>Loading....</h1>
     }
     else if(props.animals.length===0){
        return <h1>There are no content</h1>
     }
     
         return(
            props.animals.map(animal=>{
                return animal.startsWith("l") ? <li key={animal}>{animal}</li>   :  null
            })
         )
           
        
     
 }



function App(){
    const animals=["lion","mango","lizzard"]
    return (

        <>
         <h1>Animals</h1>
         <List animals={animals} />
        </>
    )
}


    export default App