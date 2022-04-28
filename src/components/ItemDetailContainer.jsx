import { useEffect, useState } from "react";
import data from "./DataProduct";
import {customFetch} from "../utils/customFetch"

const ItemDetailContainer = () =>{
    const [datos, setDatos] = useState({});

    useEffect(() => {
        customFetch(2000, data[3])
        .then(result => setDatos(result))
        .catch(error => console.log(error))
    }, []);

    return(
        <itemDetail item={datos} />
    )
}

export default ItemDetailContainer;