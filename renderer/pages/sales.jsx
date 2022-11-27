import React from "react";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineHome, AiOutlineBook, AiOutlineLogout } from "react-icons/ai";
import { IoMdExit } from "react-icons/io";
import { APP_NAME } from "../../structure/constants";
import { useRouter } from "next/router";

// Side Menu
const MenuIconButton = ({ Icon, onClick }) => {
  return (
    <button
      onClick={onClick || (() => {})}
      className="group flex items-center justify-center flex-grow aspect-square border border-r-0 border-t-0 border-black p-3 lg:p-5 hover:cursor-pointer hover:bg-yellow-200 transform focus:outline-none"
    >
      <Icon className="transform group-hover:scale-110" />
    </button>
  );
};
const SideMenu = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col w-3/12 bg-white">
      <div className="flex flex-row text-4xl lg:text-5xl">
        <MenuIconButton Icon={AiOutlineHome} />
        <MenuIconButton Icon={AiOutlineBook} />
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
          <input type="text" className="border border-gray-900 rounded focus:border-white w-10/12 px-2 py-1 md:text-lg lg:text-2xl text-center"
          />
        </div>

        <button className="text-btn text-white bg-blue-500">Orden QR</button>
        <button className="text-btn text-white bg-pink-500">Servicios</button>
      </div>

      <div className="flex flex-col items-center border-l border-t border-black py-4">
        <button className="text-btn text-white bg-green-500"> Efectivo </button>
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
        <div className="flex-grow w-full h-[30vh] my-3 md:my-5 lg:my-6 relative overflow-y-scroll">
          <table className="w-full text-center text-xl lg:text-3xl">
            <tbody>
              <tr>
                <th>Nombre</th>
                <th>Precio Unitario</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
              <tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr>              <tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr>              <tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr><tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr>              <tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr>              <tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr>              <tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr>              <tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr>              <tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr>              <tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr>              <tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr>              <tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr>              <tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr>              <tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr>              <tr>
                <td>Botella</td>
                <td>10.00</td>
                <td>2</td>
                <td>20.00</td>
              </tr>
            </tbody>  
          </table>
        </div>

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
  return (
    <React.Fragment>
      <Head>
        <title>{ APP_NAME }</title>
      </Head>
      <div className="flex flex-row w-full min-h-screen bg-gray-700">
        <SalesSection />
        <SideMenu />
      </div>
    </React.Fragment>
  );
};

export default Sales;
