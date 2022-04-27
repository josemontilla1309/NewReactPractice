import Item from "./Item"


const itemList = ({products}) =>{
    console.log(products)
    return (
            <>
           <div>
                    {products.map((product) => (
                        <Item key={product.id} {...product} />
                    ))}
            </div>
            </>
    )
}

export default itemList