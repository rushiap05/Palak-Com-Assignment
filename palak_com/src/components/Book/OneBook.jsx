import { useEffect } from "react";
import { useState } from "react";
import "./OneBook.css"

const OneBook = (props) => {
    const { productList = [], setCartArray, cartArray } = props;
    const [removeItem, setRemoveItem] = useState("no item");

    const checkRemovedItem = (removeProduct) => {

    }

    const addToCart = (item) => {
        setCartArray([...cartArray,item])
    }

    const removeFromCart = (item) => {
        setRemoveItem(item)
        setCartArray(() => {
            return cartArray.filter((removeNewItem) => {
                return removeNewItem.name != item.name;
            })
        })
    }

    useEffect(() => {
        console.log(cartArray);
    },[cartArray])

    useEffect(() => {
        console.log(removeItem)
    },[removeItem])

    return (
        <div className="onebook_main_container">
            {
                productList.map((product, index) => {
                    const { name, price } = product;
                    return (
                        <div className="onebook_container" key={index}>
                            <div>Name: {name}</div>
                            <div>Price: {price}</div>
                            <button className="button_one" onClick={() => addToCart(product)}>Add to Cart</button>
                            <button className="button_two" onClick={() => removeFromCart(product)}>Remove From Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OneBook;