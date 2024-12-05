import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "./App.css"

const App = () => {

  const [entries, setEntries]  = useState([])
  // const [amount, setAmmount]  = useState(null)
  const [balance, setBalances] = useState([])

  useEffect(()=>{
    var b = []
    let credit = 0;
    let debit = 0;

    entries.forEach((item)=>{
      if(item.ttype === "credit"){
        credit += item.amount;
      }else{
        debit += item.amount;
      }
      b.push(credit - debit)
    });
    setBalances(b)
  }, [entries]);

  async function getEntries(){
    const response = await fetch("http://localhost:3001/api/v1/getentries");
    const data = await response.json();
    setEntries(data.data)
  }
  useEffect(()=> {getEntries()},[])


  return (
    <div>
      
      <table className='table'>
        <thead>
        <tr>
            <td>Office transactions</td>
            <td></td>
            <td></td>
            <td></td>
            <td><Link to="/add">+ add transction</Link></td>
            
          </tr>
        <tr>
          <th>date</th>
          <th>description</th>
          <th>credit</th>
          <th>debit</th>

          <th>Balance</th>
        </tr>
        </thead>
        <tbody>
         
          {entries.map((entry, idx)=>{
            const reverse = entries.length-1-idx;
            return(
              <tr key = {entries[reverse].id}>
              <td>{entries[reverse].date}</td>
              <td>{entries[reverse].description}</td>
              <td>{entries[reverse].ttype === "credit"? entries[reverse].amount: " "}</td>
              <td>{entries[reverse].ttype === "debit"? entries[reverse].amount: " "}</td>
              <td>{balance[reverse]}</td>
            </tr>
            )
           
})}
        </tbody>
      </table>
    </div>
  )
}

export default App