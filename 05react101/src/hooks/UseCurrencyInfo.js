import { useState ,useEffect } from "react"


function Usecurrencyinfo(currency) {
  const [data , setdata] = useState({})
  useEffect(()=>{
   
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
          .then((res)=>res.json())
          .then((res) => setdata(res[currency] ))
          

  }, [currency])
  
  return data
  
  
}
export default Usecurrencyinfo