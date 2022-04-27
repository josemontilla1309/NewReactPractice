import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { getData } from "./DataProduct";
import ItemList from "./itemList";

const ItemListContainer = () =>{
    
    const [clothing, setClothing] = useState ([]);

    useEffect(() =>{
            async function takeDatos() {
                let giveDatos = await getData();
                setClothing(giveDatos)
            }
            takeDatos()
    }, [])

    
    return(
        <>
        <ItemList products={clothing} />
        </>
    )
}

export default ItemListContainer