const person=[
    {
        name:"harry",
        proffession:"chemist"
    }
     ,
    {
        name:"john",
        proffession:"mathematician"
    },
    {
        name:"sarah",
        proffession:"chemist"
    },
    {
        name:"atlanta",
        proffession:"physist"
    }

]


export default function List(){


    const ChemFilter= person.filter(person=> person.proffession==="chemist")

      const ChemLIst= ChemFilter.map((person=>
      <li>{person.name}</li>  ))
      const OtherFilter=person.filter((person=> person.proffession !== "chemist"))
      const OtherList= OtherFilter.map((person=>
      <li>{person.name}</li>  ))

      return(
        <> 
        <h1>Chemist</h1>
        <ul>{ChemLIst}</ul>
        <h1>others</h1>
        <ul>{OtherList}</ul>
        </>
      )
}
