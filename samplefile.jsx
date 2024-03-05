

// in react we cannot return multiple html tags by simply adding them, instead we must wrap the content(html tags) , inside a react wrapper(<> </>) or simply a  div(<div>  </div>) //

function Sample(){
     return (
       <div className="container">
         <svg>
       <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
     </svg>
       </div>
     )
}

export default Sample