import { useEffect } from "react";
import { useState } from "react";
import "./OneBook.css"

const OneBook = (props) => {
    const { productList = [], setCartArray, cartArray } = props;
    const [removeItem, setRemoveItem] = useState("no item");
    const [totalValue, setTotalValue] = useState(0);
    let [checkChanges, setCheckChanges] = useState(0);
    let counter = 1;

    const addToCart = (item) => {
        let checkItemCond = false
        cartArray.forEach(itemCheck => {
            if (itemCheck.id === item.id) {
                itemCheck.quantity++;
                checkItemCond = true;
                // console.log(itemCheck)
            }
        })

        if (checkItemCond === false) {
            item.quantity = 1;
            // console.log("working")
            // console.log(checkItemCond)
            setCartArray([...cartArray, item])
        }
        // setCheckItemCond(false);
        checkItemCond = false;
        setCheckChanges(counter++)

    }

    const removeFromCart = (item) => {
        setRemoveItem(item)
        setCartArray(() => {
            cartArray.forEach(removeItem => {
                if (removeItem.id === item.id) {
                    removeItem.quantity--;
                }
            })
            return cartArray.filter((removeNewItem) => {
                return removeNewItem.id != item.id;
            })
        })
        setCheckChanges(counter++)
    }

    useEffect(() => {
        let valueCal = 0;
        console.log(cartArray);
        cartArray.forEach(item => {
            valueCal = valueCal + (Number(item.price) * Number(item.quantity))
        })
        console.log(valueCal)
        setTotalValue(valueCal)
    }, [cartArray, checkChanges])

    useEffect(() => {
        console.log(removeItem)
    }, [removeItem])

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
            <div className="total-value">
                {totalValue}
            </div>
        </div>
    )
}

export default OneBook;