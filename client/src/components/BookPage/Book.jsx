import axios from 'axios'
import { useEffect, useState } from 'react';
import "../../style/book.css";
import { Bookcast } from './Bookcast';
import { Bookcrew } from './Bookcrew';
import { nanoid } from 'nanoid'
import { Slicker } from './Slicker';
import { Booklike } from './Booklike';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Menubar from '../menubar/Menubar';

import Modal from 'react-bootstrap/Modal';
import Login from '../Login/Login';

import { isLoggedIn } from '../../utils/userUtil';
import { useRef } from 'react';
export const Book = () => {
    const [movies, setMovies] = useState([]);
    const [allmovies, setAllmovies] = useState([]);
    const history = useNavigate();
    const arr = [{ text: "#Awesome story", id: 4490 }, { text: "#Great Acting", id: 5580 }, { text: "#Wow Music", id: "8698" }, { text: "#Must Watch", id: "6682" }];

    const { id } = useParams();
    const reference = useRef();



    const [showLogin, setShowLogin] = useState(false);
    function handleClose(e) {
        setShowLogin(false);
    }



    useEffect(() => {
        getData();
        getAllData();


        reference.current.focus();
        if (isLoggedIn()) {
            window.scroll({ top: 0, behavior: 'smooth' })
        }
        else {
            setShowLogin(true);
        }

    }, [id])

    const getData = async () => {
        try {
            let { data } = await axios.get(`http://localhost:5000/movies/${id}`);
            setMovies(data)
        }
        catch (err) {

        }

    }
    // console.log("movie",movies)
    const getAllData = async () => {
        try {
            let { data } = await axios.get(`http://localhost:5000/movies`);
            setAllmovies(data)
        }
        catch (err) {

        }
    }

    const bookingDetail = async (id) => {
        try {
            let user = JSON.parse(localStorage.getItem("user"))
            // console.log(user)
            let { data } = await axios.get(`http://localhost:5000/movies/${id}`);
            let payload = {
                uid: user.uid,
                email: user.email,
                movieid: data[0]._id,
                name: user.displayName
            }
            let resp = await axios.post("http://localhost:5000/book/create", payload)
            console.log(resp.data);

            localStorage.setItem('currentBooking', JSON.stringify(resp.data));

        }
        catch (err) {

        }

    }
    return (
        <div className="book-cont" ref={reference}>



            <Modal size="sm" show={showLogin} onHide={handleClose} style={{}} aria-labelledby="contained-modal-title-vcenter"
            >

                <Modal.Body>
                    <Login hide={setShowLogin} />
                </Modal.Body>



            </Modal>
            <Navbar />
            <Menubar />
            {
                movies.map((item) => (

                    <div className='book grad' style={{ backgroundImage: `url(${item.bg_img})`, backgroundSize: "cover" }} key={nanoid(5)}>
                        <div className='heading-cont'>
                            <div className='movie-img-cont'> <img src={item.img_url} /> </div>
                            <div className='movie-detail'>
                                <h1 className='text-white'>{item.title}</h1>
                                <p className='text-white'><img src={`${process.env.PUBLIC_URL}/heart.png`} className='me-1' /><span className='me-2'>{item.likes}</span><span>{item.ratings}ratings</span></p>
                                <div className='rating-box mb-2'>
                                    <div>
                                        <div className='add-rating-text'>Add your ratings and reviews</div>
                                        <div>Your ratings matter</div>
                                    </div>
                                    <div className='rate-now-btn'><button className='btn'>Rate now</button></div>
                                </div>
                                <div><button className='btn bg-white mt-2 mb-2'>{item.view.map((vw) => (<span className='me-1'>{vw}</span>))}</button></div>
                                <div><button className='btn bg-white'>{item.language.map((lang) => (<span className='me-1'>{lang}</span>))}</button></div>
                                <div className='text-white movie-duration mt-2'><span className='m-2'>{item.duration}</span>{item.genre.map((action) => (<span className='m-1'>{action},</span>))}<span className='m-2'>{item.certificate}</span>{item.release}<span></span></div>
                                <button className='btn book-btn mt-3'
                                    onClick={() => {
                                        bookingDetail(item._id)
                                        //console.log("ibookd",item._id)

                                        let bookingId = JSON.parse(localStorage.getItem('currentBooking'))._id;
                                        history(`/slot/${item._id}/${bookingId}`);
                                    }}
                                >Book Tickets</button>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                ))
            }
            <div>
                <h1 className='text-start about-movie-text'>About the movie</h1>
                <p className='movies-description'>Based on Jack Kirby`s Eternals, Marvel Studios brings yet another thrilling superhero flick with the saga of The Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.</p>
            </div>

            {/* --   ---         --    --   casting section-------- */}
            <div className='row cast-section'>
                <h1 className='text-start mb-4'>Cast</h1>
                {movies.map((item) => (
                    <Bookcast item={item.cast} key={nanoid(5)} />
                ))}
            </div>

            {/* ------------crew section---------------- */}

            <div className='row cast-section'>
                <h1 className='text-start mb-4'>Crew</h1>
                {movies.map((item) => (
                    <Bookcrew item={item.crew} key={nanoid(5)}  />
                ))}
            </div>

            {/* -------------top reviews section------------- */}
            <div className='top-review-section'>
                <h1>Top reviews</h1>
                <h1>10.6K reviews</h1>
                <p className='mt-2'>Summary of 10.6K reviews</p>
                <div className='row'>
                    {arr.map((item) => (
                        <div className='col me-2 pt-2  top-review-col' style={{ paddingLeft: "30px" }} key={nanoid(5)}>
                            <span className='me-4' style={{ color: "#E94362" }}>{item.text}</span><span className='text-end '>{item.id}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ----------------slicker section of reviews------------- */}
            <Slicker />
            {/* --------You might also like----------- */}
            <div>
                <Booklike allmovies={allmovies} />
            </div>

            <Footer />
        </div>


    )
}

