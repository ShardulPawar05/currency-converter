import { logDOM } from "@testing-library/dom";
import axios from "axios";
import { useEffect, useState } from "react"
import { Constant } from "./Constant/Constant";
import './Dashboard.css';

export default function Dashboard() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState("88");
    const [rates, setRates] = useState({});
    function handleAmount(event) {
        setAmount(event.target.value);
    }
    function handleFromCurrency(event) {
        setFromCurrency(event.target.value);
    }
    function handleToCurrency(event) {
        setToCurrency(event.target.value);
    }
    useEffect(() => {
        axios.get("https://api.exchangerate-api.com/v4/latest/"+fromCurrency)
            .then((response) => {
                console.log(response.data);
                if (response.status === 200) {
                    setRates(response.data.rates)
                }
            })
            .catch((error) => {
                console.log("console error", error);

            })
        console.log("rates", rates);

    }, [fromCurrency]);
    function handleConvert(){
        setConvertedAmount(amount * rates[toCurrency]||0)
    }
    // useEffect(()=>{
    //     axios.get("https://api.exchangerate-api.com/v4/latest/",fromCurrency)
    //     .then((response)=>{
    //         console.log(response.data);
    //         if(response.status===200){
    //             setRates(response.data.rates)
    //         }

    //     })
    //     .catch((error)=>{
    //         console.log("console err",error);

    //     })
    // })
    //      useEffect(() => {
    //     axios
    //       .get("https://api.exchangerate-api.com/v4/latest/" + fromCurrency)
    //       .then((Response) => {
    //         console.log(Response.data);
    //         if (Response.status === 200) {
    //           setRates(Response.data.rates);
    //           console.log(rates);

    //         }
    //       })
    //       .catch((err) => console.error("API Error:", err));
    //   }, [fromCurrency]);
    // useEffect(()=>{
    //     axios.get("https://api.exchangerate-api.com/v4/latest/"+fromCurrency)
    //     .then((response)=>{
    //         console.log(response.data);

    //     })
    //     .catch((error)=>{
    //         console.log("vchj",error);

    //     })
    //     console.log("fzstgrdycfuj",fromCurrency);

    // },[fromCurrency])
    return (
        <div className="appborder">
            <h1 className="header">Currency Converter</h1>
            <div className="inputsection">
                <label>Amount</label>
                <input type="text" placeholder="Enter amount to convert"
                    value={amount}
                    onChange={handleAmount} />
            </div>
            <div className="inputsection lab">
                <label>fromCurrnecy</label>
                <select value={fromCurrency}  onChange={handleFromCurrency}>
                  {Constant.map((singleCurrency)=>(  <option>{singleCurrency}</option>))}
                    <option>USD</option>
                    <option>EURO</option>
                    <option>BTC</option>
                </select>
            </div>
            <div className="inputsection">
               <label> TOCurrnecy</label>
                <select value={toCurrency} onChange={handleToCurrency}>
                    <option>INR</option>
                    <option>USD</option>
                    <option>EURO</option>
                    <option>BTC</option>
                </select>
            </div>
            <button onClick={handleConvert} className="convertbutton">Convert</button>
            <div className="lastOutput">{amount}{fromCurrency} = {convertedAmount}{toCurrency}</div>

        </div>
    )
}
//    import { useState, useEffect } from "react";
// import axios from "axios";
// import "./Dashboard.css"; // make sure this file exists
// import { Constant } from "./Constant/Constant";

// export default function Dashboard() {
//   const [amount, setAmount] = useState(1);
//   const [convertAmount, setConvertAmount] = useState(88);
//   const [fromCurrnecy, setFromCurrency] = useState("INR");
//   const [convertcurrency, setconvertCurrency] = useState("USD");
//   const [rates, setRates] = useState({});

//   function handleAmount(event) {
//     setAmount(event.target.value);
//   }

//   function handleFromCurrency(event) {
//     setFromCurrency(event.target.value);
//   }

//   function handleConvertCurrency(event) {
//     setconvertCurrency(event.target.value);
//   }

//   useEffect(() => {
//     axios
//       .get("https://api.exchangerate-api.com/v4/latest/" + fromCurrnecy)
//       .then((Response) => {
//         console.log(Response.data);
//         if (Response.status === 200) {
//           setRates(Response.data.rates);
//         }
//       })
//       .catch((err) => console.error("API Error:", err));
//   }, [fromCurrnecy]);

//   function handleConvert() {
//     const rate = rates[convertcurrency];
//     if (rate) {
//       setConvertAmount(amount * rate);
//     } else {
//       setConvertAmount(0);
//     }
//   }

//   console.log("Converted amount:", convertAmount);

//   return (
//     <div className="dashboard">
//       <h1 className="title">Currency Converter</h1>

//       <div className="input-group">
//         <label>Amount</label>
//         <input type="number" value={amount} onChange={handleAmount} className="input-field" />
//       </div>

//       <div className="input-group">
//         <label>From Currency</label>
//         <select value={fromCurrnecy} onChange={handleFromCurrency} className="select-field">
//             {Constant.map((singleCurrency)=>(
//           <option>{singleCurrency.key}</option>))}
//           <option>USD</option>
//           <option>EUR</option>
//         </select>
//       </div>

//       <div className="input-group">
//         <label>To Currency</label>
//         <select value={convertcurrency} onChange={handleConvertCurrency} className="select-field">
//          {Constant.map((singleCurrency)=>( <option>{singleCurrency.key}</option>
//          ))}
//           <option>USD</option>
//           <option>EUR</option>
//         </select>
//       </div>

//       <button className="convert-btn" onClick={handleConvert}>
//         Convert
//       </button>

//       <div className="result">
//         {amount} {fromCurrnecy} = {convertAmount} {convertcurrency}
//       </div>
//     </div>
//   );
// }

