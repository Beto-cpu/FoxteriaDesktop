import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineHome, AiOutlineBook, AiOutlineLogout } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import { APP_NAME } from "../../structure/constants";
import { useRouter } from "next/router";
import PaymentWindow from "../components/paymentWindow";
import ResponsiveTable from "../components/responsiveTable";

// Side Menu
const MenuIconButton = ({ Icon, onClick, disabled }) => {
  return (
    <button
      onClick={onClick || (() => {})}
      className={
        disabled
          ? "hover:cursor-default flex items-center justify-center flex-grow aspect-square border border-r-0 border-t-0 border-black p-3 lg:p-5 bg-yellow-200 "
          : "group flex items-center justify-center flex-grow aspect-square border border-r-0 border-t-0 border-black p-3 lg:p-5 hover:cursor-pointer hover:bg-yellow-200 transform focus:outline-none"
      }
    >
      <Icon className="transform group-hover:scale-110" />
    </button>
  );
};
const SideMenu = ({ payingState }) => {
  const router = useRouter();
  const [paying, setPaying] = payingState;

  const payButtonHandler = (e) => {
    e.preventDefault();

    setPaying(true);
  };
  const refocusHandler = (e) => {
    e.target.focus();
  }

  return (
    <section className="flex flex-col w-3/12 bg-white">
      <div className="flex flex-row text-4xl lg:text-5xl">
        <MenuIconButton Icon={AiOutlineHome} disabled={true} />
        <MenuIconButton
          Icon={AiOutlineBook}
          onClick={(e) => {
            e.preventDefault();
            router.push("/stockManager");
          }}
        />
        <MenuIconButton
          Icon={IoMdExit}
          onClick={(e) => {
            e.preventDefault();
            router.push("/login");
          }}
        />
      </div>

      <div className="flex flex-col w-full items-center flex-grow border-l border-black space-y-4 lg:space-y-8  py-1 lg:py-4">
        <div className="flex flex-col w-full items-center">
          <h2 className="text-2xl lg:text-3xl font-semibold">Escanear</h2>
          <img className="w-3/4 pointer-events-none" src="/images/scan.png" />
          <input
            type="text"
            maxLength={13}
            autoFocus
            onBlur={refocusHandler}
            className="border border-gray-900 rounded focus:border-white w-10/12 px-2 py-1 md:text-lg lg:text-2xl text-center"
          />
        </div>

        <button className="text-btn text-white bg-blue-500">Orden QR</button>
        <button className="disable-text-btn">Servicios</button>
      </div>

      <div className="flex flex-col items-center border-l border-t border-black py-4">
        <button
          className="text-btn text-white bg-green-500"
          onClick={payButtonHandler}
        >
          {" "}
          Efectivo{" "}
        </button>
      </div>
    </section>
  );
};

// Sales Main Section
const SalesSection = () => {
  return (
    <section className="flex p-4 md:p-7 lg:p-10 w-10/12">
      <div className="flex justify-between flex-grow flex-col bg-white rounded-2xl p-6 md:p-8 lg:p-10">
        <h2 className="text-xl lg:text-3xl font-semibold">
          Lista de artículos
        </h2>
        
        <ResponsiveTable headers={[ "Nombre", "Precio Unitario", "Cantidad", "Precio" ]}  rows = { [ ["Botella", 10.00, 2, 20.00] ] }/>

        <div className="flex flex-row justify-between bg-yellow-100 px-5 py-3 rounded-xl text-xl md:text-2xl lg:text-3xl font-semibold">
          <p>Total:</p>
          <span>20.00</span>
        </div>
      </div>
    </section>
  );
};

// Sales Screen
const Sales = () => {
  const [paying, setPaying] = useState(false);

  return (
    <React.Fragment>
      <Head>
        <title>{APP_NAME}</title>
      </Head>
      <div className="flex flex-row w-full min-h-screen bg-gray-700">
        <SalesSection />
        <SideMenu payingState={[paying, setPaying]} />

        {paying && <PaymentWindow payingState={[paying, setPaying]} />}
      </div>
    </React.Fragment>
  );
};

export default Sales;
