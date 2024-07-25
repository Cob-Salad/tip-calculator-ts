import React, { useState } from "react";


const Calculator = () =>{
    const [bill, setBill] = useState<number | string>("")
    const [tip, setTip] = useState<number | string>("")
    const [total, setTotal] = useState<number | string>(0)

    const handleBillChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (Number.isFinite(event.target.valueAsNumber)){
            setBill(event.target.valueAsNumber)
        } else if (event.target.value === ""){
            setBill(event.target.value)
        }
    }

    const handleTipChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (Number.isFinite(event.target.valueAsNumber)){
            setTip(event.target.valueAsNumber)
        } else if (event.target.value === ""){
            setTip(event.target.value)
        }
    }

    const calcTipAmount: React.FormEventHandler<HTMLFormElement> = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const tipPercent = Number(tip) / 100
        let totalAmount = Number(bill) * (1 + Number(tipPercent))
        console.log(totalAmount)
        setTotal(totalAmount.toFixed(2))
    }



    return (
        <form onSubmit={calcTipAmount}>
            <div id="calculator">
            
                <label htmlFor="bill">Bill Amount</label>
                <input 
                type="number"
                id="bill"
                value={bill}
                placeholder="0"
                onChange={handleBillChange} />
            
                <label htmlFor="tip">Tip Percent</label>
                <input
                type="number"
                id="tip"
                value={tip}
                placeholder="0"
                onChange={handleTipChange} />
            
                <button type="submit">Submit</button>
                
                <p>Your total will be ${total} after you tip</p>
            </div>
        </form>
    )
}

export default Calculator