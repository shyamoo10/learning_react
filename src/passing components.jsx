


function Button({handleButtons, text}){
    return (
       <button onClick={()=> handleButtons("http://www.google.com")}>{text}</button>
    )
}


export default function App(){
    const handleButton =(url)=>{
        window.location.href= url
    }
     
    return (
        <Button  handleButtons={handleButton}  text="Click Me!"/>
    )
}