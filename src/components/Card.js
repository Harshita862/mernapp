import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
export default function Card(props) {

    let dispatch = useDispatchCart();
    let data =useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    const handleAddToCart = async () => {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price:finalPrice, qty: qty, size: size })
console.log(data)

    }

    let finalPrice = qty*parseInt(options[size]);
useEffect(() => {
    setSize(priceRef.current.value)
},[])

    return (
        <div>
            <div><div className="card mt-3" style={{ "width": "18rem", maxHeight: '360px' }}>
                {/* <img src="https://media.istockphoto.com/id/1339519723/photo/tandoori-paneer-cottage-cheese-marinated-with-yogurt-and-spices-and-shallow-fried-on-a.jpg?s=612x612&w=0&k=20&c=pRGKtguTTOEo6te9WsrCay15J_SHSQMEDmjT74EdUJg=" className="card-img-top" style={{height:'150px',objectFit:"fill"}} alt="food img" /> */}
                <img src={props.foodItem.img} className="card-img-top" style={{ height: '150px', objectFit: "fill" }} alt="food img" />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    {/* <p className="card-text">Some quick example text of the card's content.</p> */}
                    <div className='container w-100'></div>
                    <select className='m-2 h-100 bg-success' onChange={(e) => setQty(e.target.value)}>
                        {
                            Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })
                        }
                    </select>
                    <select className='m-2 h-100  bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                        {priceOptions.map((data) => {
                            return <option key={data} value={data}>{data}</option>
                        })}
                    </select>
                    <div className='d-inline fs-5 h-100'>
                      {finalPrice}/-
                        </div>
                </div>
                <hr />
                <button className={'btn bg-success justify-center w-50 mb-3 ms-3 text-black'} onClick={handleAddToCart}>Add to Cart</button>
            </div></div>
        </div>
    )
}