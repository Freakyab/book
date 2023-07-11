import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./Seating.css";
// import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
var array = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
];
var array1 = [
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
];
var A = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var a = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];

var B = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var b = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];

var C = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var c = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];

var D = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var d = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];

var E = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var e = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];

var F = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var f = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];

var G = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var g = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];

var H = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var h = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];

var I = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var i = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];

var J = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var j = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];
var K = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var k = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];

var L = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var l = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];

var M = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var m = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];

var N = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var n = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];

var O = [
  { id: nanoid(), num: 1 },
  { id: nanoid(), num: 2 },
  { id: nanoid(), num: 3 },
  { id: nanoid(), num: 4 },
  { id: nanoid(), num: 5 },
  { id: nanoid(), num: 6 },
  { id: nanoid(), num: 7 },
  { id: nanoid(), num: 8 },
];
var o = [
  { id: nanoid(), num: 9 },
  { id: nanoid(), num: 10 },
  { id: nanoid(), num: 11 },
  { id: nanoid(), num: 12 },
  { id: nanoid(), num: 13 },
  { id: nanoid(), num: 14 },
  { id: nanoid(), num: 15 },
  { id: nanoid(), num: 16 },
];

export function Seating() {
  const [ids, setIds] = useState([]);
  const [seatNumber, setSeatNumber] = useState([]);
  const [price, setPrice] = useState(1);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const { id } = useParams();
  const [bookingData, setBookingData] = useState({});
  const history = useNavigate();

  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  };

  const time = new Date().toLocaleTimeString("en-US", options);

  useEffect(() => {
    fetch(`http://localhost:5000/book/getBooking/` + id)
      .then(async (res) => {
        setBookingData(await res.json());
      })
      .catch((e) => {
        console.log(e);
      });
  });
  // const months =  new Date().toLocaleDateString("en-US",options);

  const handleColor = (el, letter, price) => {
    setIds([...ids, el.id]);
    setPrice(price);
    setSelectedPrices([...selectedPrices, price]);
    setSeatNumber([...seatNumber, letter + "" + el.num]);
  };

  async function updateBookingWithSeats() {
    if (seatNumber.length != bookingData.howmanySeats) {

    } else {
      console.log({seats: seatNumber,
        amount:
          selectedPrices.length > 0
            ? selectedPrices.reduce((ac, el) => ac + el)
            : 0,});
      fetch(`http://localhost:5000/book/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          seats: seatNumber,
          amount:
            selectedPrices.length > 0
              ? selectedPrices.reduce((ac, el) => ac + el)
              : 0,
        }),
      }).then(async (resp) => {
        let data = await resp.json();
        console.log(data);
        history(`/summary/` + id);
      });
    }
  }

  // const handleClick = ()=>{
  //     const requestOptions = {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({ title: 'React POST Request Example' })
  //     };
  //     fetch('https://reqres.in/api/posts', requestOptions)
  //         .then(response => response.json())
  //         .then(data => this.setState({ postId: data.id }));
  // }
  return (
    <div>
      {/* <button onClick={handleClick}></button> */}

      <div className="UpperBaar">
        <div className="moviesTheaterName">
          <div>
            <img
              alt=""
              onClick={() => {
                history(-1);
              }}
              className="img-fluid"
              src={`${process.env.PUBLIC_URL}/vectorLeft.png`}></img>
            <span>{bookingData?.movieid?.title}</span>
            <br />
            <span style={{ marginLeft: "10px" }}>
              {bookingData?.theater?.name}
            </span>
          </div>
        </div>
        <div className="clossse">
          <div className="numbrOfTicket">
            <div>{bookingData?.howmanySeats} Tickets</div>
            <div>
              <img alt="" src={`${process.env.PUBLIC_URL}/vectorUpper.png`} />
            </div>
          </div>
          <div>
            <img alt="" src={`${process.env.PUBLIC_URL}/vectorCross.png`} />
          </div>
        </div>
      </div>
      {/* <h1>{seatNumber},{price},{selectedPrices.length > 0  ? selectedPrices.reduce((ac,el)=>ac+el) : 0}</h1>  */}
      <div className="timeDate">
        <p> {time}</p>
      </div>
      <div className="reclinerMovie">
        <div className="recliner3D">3D RECLINER Rs.360.00</div>
        <div className="rRow">
          <div className="namingSeat">R</div>
          <div className="lRowBox">
            {array.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "R", 360);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
          <div className="rRowBox">
            {array1.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "R", 360);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="reclinerMovie">
        <div className="recliner3D">3D PRIME Rs.220.00</div>

        <div className="rRow">
          <div className="namingSeat">P</div>
          <div className="pRowBox">
            {A.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "P", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>

          <div className="pRRowBox">
            {a.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "P", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>

        <div className="rRow">
          <div className="namingSeat">O</div>
          <div className="pRowBox">
            {B.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "O", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
          <div className="pRRowBox">
            {b.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "O", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>

        <div className="rRow">
          <div className="namingSeat">N</div>
          <div className="pRowBox">
            {C.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "N", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
          <div className="pRRowBox">
            {c.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "N", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>

        <div className="rRow">
          <div className="namingSeat">M</div>
          <div className="pRowBox">
            {D.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "M", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
          <div className="pRRowBox">
            {d.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "M", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>

        <div className="rRow">
          <div className="namingSeat">L</div>
          <div className="pRowBox">
            {E.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "L", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
          <div className="pRRowBox">
            {e.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "L", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="reclinerMovie">
        <div className="recliner3D">3D CLASSIC Rs.200.00</div>

        <div className="rRow">
          <div className="namingSeat">J</div>
          <div className="pRowBox">
            {F.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "J", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>

          <div className="pRRowBox">
            {f.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "J", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>

        <div className="rRow">
          <div className="namingSeat">I</div>
          <div className="pRowBox">
            {G.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "I", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
          <div className="pRRowBox">
            {g.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "I", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>

        <div className="rRow">
          <div className="namingSeat">H</div>
          <div className="pRowBox">
            {H.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "H", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
          <div className="pRRowBox">
            {h.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "H", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>

        <div className="rRow">
          <div className="namingSeat">G</div>
          <div className="pRowBox">
            {I.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "G", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
          <div className="pRRowBox">
            {i.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "G", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>

        <div className="rRow">
          <div className="namingSeat">F</div>
          <div className="pRowBox">
            {J.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "F", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
          <div className="pRRowBox">
            {j.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "F", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>

        <div className="rRow">
          <div className="namingSeat">E</div>
          <div className="pRowBox">
            {K.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "E", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
          <div className="pRRowBox">
            {k.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "E", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>

        <div className="rRow">
          <div className="namingSeat">D</div>
          <div className="pRowBox">
            {L.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "D", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
          <div className="pRRowBox">
            {l.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "D", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>

        <div className="rRow">
          <div className="namingSeat">C</div>
          <div className="pRowBox">
            {M.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "C", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
          <div className="pRRowBox">
            {m.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "C", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>

        <div className="rRow">
          <div className="namingSeat">B</div>
          <div className="pRowBox">
            {N.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "B", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
          <div className="pRRowBox">
            {n.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "B", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>

        <div className="rRow">
          <div className="namingSeat">A</div>
          <div className="pRowBox">
            {O.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "A", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
          <div className="pRRowBox">
            {o.map((el) => (
              <span
                onClick={(e) => {
                  handleColor(el, "A", 220);
                }}
                style={{
                  backgroundColor: ids.includes(el.id) ? "#00B240" : "#EEEEEE",
                }}
                className="numberBox">
                {el.num}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="imageScreen">
        <img src={`${process.env.PUBLIC_URL}/screen.png`} />
        <p>All eyes this way please!</p>
      </div>

      <div className="availabilityImage">
        <div className="seatsChecking">
          <div className="soldSeats">
            <img src={`${process.env.PUBLIC_URL}/sold.png`} />
            <div>Sold</div>
          </div>

          <div className="soldSeats">
            <img src={`${process.env.PUBLIC_URL}/available.png`} />
            <div>Available</div>
          </div>
          <div className="soldSeats">
            <img src={`${process.env.PUBLIC_URL}/selected.png`} />
            <div>Selected</div>
          </div>
        </div>
      </div>

      <div className="center">
        {selectedPrices.length == 0 ? (
          <button
            disabled
            onClick={updateBookingWithSeats}
            className="btn btn-danger btn-lg"
            style={{ border: "0px" }}>
            Proceed
          </button>
        ) : (
          <button
            onClick={updateBookingWithSeats}
            className="btn btn-danger btn-lg"
            style={{ border: "0px" }}>
            Proceed
          </button>
        )}
      </div>
    </div>
  );
}
