import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { TbArrowBackUp } from "react-icons/tb";
import { IoIosReturnLeft } from "react-icons/io";
import { QrScanner } from "@yudiel/react-qr-scanner";
import ResponsiveTable from "../components/responsiveTable";
import { data } from "autoprefixer";

const OrderQr = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState(0);

  const goBackHandler = (e) => {
    e.preventDefault;
    router.back();
  };
  const closeListHandler = (e) => {
    e.preventDefault();

    setProducts([]);
  } 
  const readQrHandler = (result) => {
    setOrder(result);

    fetch("http://localhost:8080/api/orderItem/?order_id=" + result)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data)
      });

      if(!data.length){
        alert('QR NO VALIDO')
      }
  };
  const giveOrderHandler = (e) => {
    e.preventDefault();

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 1 })
    };

    fetch('http://localhost:8080/api/orders/' + order, requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));

    setProducts([]);
    setOrder(0);
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-700 p-4 md:p-7 lg:p-10">
      <div className="flex flex-col flex-grow rounded-lg p-4 md:p-7 lg:p-10">
        {/* Tabs */}
        <div className="flex flex-row">
          <button onClick={goBackHandler}>
            <TbArrowBackUp className="text-white" size={30} />
          </button>
        </div>

        {/* Inventory */}
        <div className="flex items-center justify-center w-full flex-shrink bg-white rounded-md border border-gray-900 py-3 px-4">
          <div className="w-[40rem]">
            {!products.length && <QrScanner
              onDecode={readQrHandler}
              onError={(error) => console.log(error?.message)}
            />}
          </div>
        </div>

        {products.length && (
          <div className="absolute top-0 z-10 flex flex-col justify-center items-center w-full h-screen overflow-hidden bg-gray-700 py-3">
            <div className="">
              {/* Header menu */}
              <div className="flex flex-row w-full justify-center relative">
                <button
                  onClick={closeListHandler}
                  className="absolute left-0 text-5xl text-white"
                >
                  <IoIosReturnLeft />
                </button>
                <h1 className="text-3xl font-bold text-white pb-3">
                  Pago efectivo
                </h1>
              </div>

              {/* Box */}
              <div className="flex flex-col items-center bg-white py-8 px-6 rounded-2xl">
                <ResponsiveTable headers={[ "Nombre", "Cantidad" ]}  rows = { products.map((prod) => ( [prod.title, prod.quantity] ) ) } border={true}/>

                <button onClick={giveOrderHandler} className="py-2 px-3 rounded-md bg-green-500 text-white font-semibold text-lg transform hover:scale-105 hover:opacity-80">Entregar orden</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderQr;
