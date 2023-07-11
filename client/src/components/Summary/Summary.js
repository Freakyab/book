import "./Summary.css"
import Product from "./product_comp";


import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Navbar from "../navbar/Navbar";
import Menubar from "../menubar/Menubar";
import Footer from "../footer/Footer";
import { FaBackward } from 'react-icons/fa';
import { AppContext } from "../../contexts/AppContext";

function Summary() {

    const [bookingData, setBookingData] = useState({});

    const { id } = useParams();
    const [show, setShow] = useState(false);
    const history = useNavigate();
    const { city, setCity } = useContext(AppContext);


    useEffect(() => {

        fetch(`http://localhost:5000/book/getBooking/${id}`).then(async (data) => {
            let resp = await data.json();
            setBookingData(resp);
            console.log({ bookingData });
            
        }).catch((e) => {

            console.log("Error", e);

        });


    }, []);


    return (
        <>
            <div>
                <Navbar />
                <Menubar />
                <div className="border border-primary" style={{ height: '100vh' }}>


                    <div className="maindiv">

                        <div>
                            <div className="Top_first_div">


                                <p className="pt-3">{bookingData?.movieid?.title}</p>
                                <p className="pt-0">{bookingData?.theater?.name}</p>


                            </div>
                        </div>

                        <div className="Top_second_div">
                            <p>{bookingData?.howmanySeats} Tickets</p>
                        </div>

                    </div>

                    {/* top */}

                    {/* mid */}
                    <div className="middiv">
                        {/* left */}
                        <div className="mid_left_div ">
                            <div className="mid_left_text">
                                <h1>Grab a <span style={{ color: "red", fontWeight: "10" }}>bite!</span></h1>
                                <p style={{ marginTop: "20px" }}>Prebook Your Meal and Save More!</p>
                            </div>
                            <div className="top_button">
                                <button>ALL</button>
                                <button>BEVERAGES</button>
                                <button>COMBOS</button>
                                <button>SNACKS</button>
                                <button>POPCORN</button>
                            </div>

                            <div className="product_item">
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                                <Product />
                            </div>
                        </div>

                        {/* right */}
                        <div className="mid_right_div">
                            <h4 style={{ color: "red", marginLeft: "30px" }}>BOOKING SUMMARY</h4>
                            <div className="price_1">
                                <span>EXEC - {bookingData?.seats?.map((el) => <span>{el}</span>)}{bookingData?.howmanySeats} Ticket(s)</span>
                                <span>Rs {bookingData?.amount}</span>
                            </div>

                            <div className="price_2">
                                <span>Convenience fees</span>
                                <span>Rs. {(bookingData?.amount) * 0.18}</span>
                            </div>
                            <hr></hr>
                            <div className="total">
                                <span>Sub total</span>
                                <span>Rs. {((bookingData?.amount) * 0.18) + bookingData?.amount + 1} </span>
                            </div>

                            <div className="discount">

                                <div className="p-2">
                                    <p style={{ color: "black", fontWeight: "bold" }}>Contribution to BookASmile</p>
                                    <p style={{ color: "gray" }} className="p-2">(₹1 per ticket has been added)</p>
                                    <span style={{ color: "gray" }}>VIEW T&C</span>
                                </div>

                                <div>
                                    <p style={{ color: "black", fontWeight: "bold" }}>Re. 1</p>
                                    <p style={{ color: "red" }}>Remove</p>
                                </div>

                            </div>
                            <span style={{ marginLeft: "40px" }}>Your current city is <span style={{ color: "red", fontWeight: "bold" }}>{city}</span> </span>

                            <div className="Amount p-3" onClick={() => {
                                setShow(true)

                                setTimeout(() => {
                                    history('/');
                                }, 2000);
                            }}>
                                <p style={{ fontWeight: "bold" }}>TOTAL: Rs. {((bookingData?.amount) * 0.18) + bookingData?.amount + 1}</p>
                                <p style={{ fontWeight: "bold" }}>Proceed</p>
                            </div>
                        </div>


                        <Modal show={show} onHide={() => {
                            setShow(false)

                        }}>
                            <Modal.Header closeButton>
                                <Modal.Title>Congrats, Your tickets are booked successfully</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Order ID : {bookingData?._id}</Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                        </Modal>


                    </div>


                    {/* mid */}
                </div>

            </div>
            <Footer />
        </>

    )
}
export default Summary;