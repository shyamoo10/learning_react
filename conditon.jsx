



function Item({name,ispacked}){
    return(
        <li>{ispacked ?  (
            <del>
                {name + "X"}
            </del>
        ) : (
            name
        )}</li>
    )
}

export default function PackingList(){
    return (
        <>
         <h1>Sally Ride's Packing List</h1>
         <ul>
        <Item
            ispacked={true}
            name="number1"
        />
        <Item
            ispacked={false}
            name="number2"
        />
        <Item
            ispacked={false}
            name="number3"
            />
        <Item
            ispacked={true}
            name="number4"
          />
        </ul>
        </>
    )
}