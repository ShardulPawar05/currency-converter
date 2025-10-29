import { useState } from "react";

export default function Dashboard() {
    const [amount, setAmount] = useState(1);
    const [convertAmount, setConvertAmount] = useState(88);
    const [fromCurrnecy, setFromCurrency] = useState("INR");
    const [convertcurrency, setconvertCurrency] = useState("USD");

    function handleAmount(event) {
        setAmount(event.target.value);
    }

    function handleFromCurrency(event) {
        setFromCurrency(event.target.value);
    }

    function handleConvertCurrency(event) {
        setconvertCurrency(event.target.value);
    }

    function handleConvert() {
        if (fromCurrnecy === "USD") {
            if (convertcurrency === "USD") {
                setConvertAmount(amount);
            }
            if (convertcurrency === "INR") {
                setConvertAmount(amount * 88);
            }
            if (convertcurrency === "EUR"){

            setConvertAmount(amount / 1.16);
        }
        }

        if (fromCurrnecy === "EUR") {
            if (convertcurrency === "EUR") {
                setConvertAmount(amount);
            }

            if (convertcurrency === "INR") {
                setConvertAmount(amount * 102.67);
            }
            if (convertcurrency === "USD") 
                {setConvertAmount(amount * 1.17);
                }
        }

        if (fromCurrnecy === "INR") {
            if (convertcurrency === "INR") {
                setConvertAmount(amount);
            }
            if (convertcurrency === "USD") {
                setConvertAmount(amount / 88);
            }
            if (convertcurrency === "EUR") 
                {
                    setConvertAmount(amount / 102.67);
                }
        }
    }

    console.log("Convetes\ amount:", convertAmount);

    return (
        <div>
            <h1>Currency Converter</h1>

            <label>Amount</label>
            <input type="number" value={amount} onChange={handleAmount} />

            <label>From Currency</label>
            <select value={fromCurrnecy} onChange={handleFromCurrency}>
                <option>INR</option>
                <option>USD</option>
                <option>EUR</option>
            </select>

            <label>To Currency</label>
            <select value={convertcurrency} onChange={handleConvertCurrency}>
                <option>INR</option>
                <option>USD</option>
                <option>EUR</option>
            </select>

            <button onClick={handleConvert}>Convert</button>

            <div>
                {amount} {fromCurrnecy} = {convertAmount} {convertcurrency}
            </div>
        </div>
    );
}
