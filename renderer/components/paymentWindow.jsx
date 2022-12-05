import TextField from "./TextField";
import { IoIosReturnLeft } from 'react-icons/io'
import { useEffect, useState } from "react";

const PaymentWindow = ({ payingState, totalState, exchangeState }) => {
  const [ paying, setPaying ] = payingState;
  const [ total, setTotal ] = totalState; 
  const [ paidQuantity, setPaidQuantity ] = useState(0);
  const [ exchange, setExchange ] = exchangeState;

  useEffect(()=>{
    if(paidQuantity >= total){
      setExchange(paidQuantity - total);
    }
  }, [paidQuantity])

  const returnButtonHandler = (e) => {
    e.preventDefault();

    setPaying(false);
  }
  const addBillMoneyHandler = (quantity) => {
    setPaidQuantity(paidQuantity + quantity)
  }
  const addArbritaryMoneyHandler = (e) => {
    if(e.key == "Enter"){
      setPaidQuantity(paidQuantity + parseFloat(e.target.value))

      e.target.value = "";
    }
  }
  

  return (
    <div className="absolute z-10 flex flex-col justify-center items-center w-full min-h-screen bg-gray-700 py-3">
      <div>

        {/* Header menu */}
        <div className="flex flex-row w-full justify-center relative">
          <button onClick={returnButtonHandler} className="absolute left-0 text-5xl text-white"><IoIosReturnLeft/></button>
          <h1 className="text-3xl font-bold text-white pb-3">Pago efectivo</h1>
        </div>

        {/* Box */}
        <div className="flex flex-col items-center bg-white py-8 px-6 rounded-2xl">

          {/* Total */}
          <div className="flex flex-row text-lg gap-x-10">
            <p>Total: </p>
            <span>$ {total.toFixed(2)}</span>
          </div>

          {/* Paid */}
          <div className="flex flex-row text-lg gap-x-10">
            <p>Pagado: </p>
            <span>$ { paidQuantity.toFixed(2) }</span>
          </div>

          {/* Remaining */}
          <div className="flex flex-row justify-between px-24 w-full text-3xl lg:text-5xl">
            <p>Restante: </p>
            <span>$ { total - paidQuantity }</span>
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">Entrada</h2>
            <div className="flex flex-row flex-wrap max-w-lg lg:max-w-3xl justify-center gap-x-3 gap-y-3">
              <button onClick={(e)=>{e.preventDefault;addBillMoneyHandler(20)}} className="bill-btn">
                <img
                  className="bill-img"
                  src="/images/bills/20_pesos.png"
                />
              </button>
              <button onClick={(e)=>{e.preventDefault;addBillMoneyHandler(50)}} className="bill-btn">
                <img
                  className="bill-img"
                  src="/images/bills/50_pesos.png"
                />
              </button>
              <button onClick={(e)=>{e.preventDefault;addBillMoneyHandler(100)}} className="bill-btn">
                <img
                  className="bill-img"
                  src="/images/bills/100_pesos.png"
                />
              </button>
              <button onClick={(e)=>{e.preventDefault;addBillMoneyHandler(200)}} className="bill-btn">
                <img
                  className="bill-img"
                  src="/images/bills/200_pesos.png"
                />
              </button>
              <button onClick={(e)=>{e.preventDefault;addBillMoneyHandler(500)}} className="bill-btn">
                <img
                  className="bill-img"
                  src="/images/bills/500_pesos.png"
                />
              </button>
            </div>
            <div className="flex flex-row mt-10">
              <TextField label={"Otra entrada:"} name="input" onKeyDown={addArbritaryMoneyHandler}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentWindow;
