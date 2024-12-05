import React from 'react'
import { useEffect, useState } from 'react'

const AddTransaction = () => {
  const [amount, setAmount] = useState(null)
  const [description, setDescription]= useState(null)
  const [type, setType] = useState("credit")

  async function addEntry() {
    const date = new Date().toISOString();
    const response = await fetch ("http://localhost:3001/api/v1/add-entry",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        amount:Number(amount),
        description,
        ttype:type,
        date
      }),
    })
    const data = await response.json();
    alert("transction added successfully")
    console.log(data)
  }
  return (
    <>
    <input
    type = "text"
    placeholder="entry description"
    value={description}
    onChange={(e)=> setDescription(e.target.value)}
    >
    
    </input>

    <input
    type = "Number"
    placeholder="entry amount"
    value={amount}
    onChange={(e)=> setAmount(e.target.value)}
    >
    
    </input>

    <select value={type} onChange={(e)=>setType(e.target.value)}>
          <option value ={'credit'}>credit</option>
          <option value ={'debit'}>Debit</option>
    </select>
    <button onClick={()=>addEntry()}>Add Transection</button>

    
    </>
  )
}

export default AddTransaction