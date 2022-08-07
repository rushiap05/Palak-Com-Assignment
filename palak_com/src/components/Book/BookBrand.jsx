import { useState } from "react";
import "./BookBrand.css"
import OneBook from "./OneBook";

const BookBrand = (props) => {
    const { BookData = {} } = props;
    const { data = [] } = BookData;

    const [cartArray, setCartArray] = useState([]);


    return (
        <div>
            {data.map((data,index) => {
                const { name, productList = [] } = data;
                return (
                    <div key={index}>
                        <div className="headings">{name}</div>
                        <OneBook productList={productList} setCartArray={setCartArray} cartArray={cartArray}/>
                    </div>
                )
            })}
        </div>
    )
}

export default BookBrand;