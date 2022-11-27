import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { APP_NAME } from '../../structure/constants';
import TextInput from '../components/TextField';
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();

  const [foxCounter, setFoxCounter] = useState(0);

  const submitHandler = (e) => { 
    e.preventDefault();
    router.push("/sales");
  }

  const clickFoxHandler = (e) => {
    e.preventDefault();

    setFoxCounter(foxCounter + 1);
  }


  return (
    <React.Fragment>
      <Head>
        <title>{APP_NAME }</title>
      </Head>
      <div className='flex items-center justify-center w-full min-h-screen bg-gray-700 p-1'>
        <div className='flex flex-col bg-white rounded-3xl p-6 lg:p-12 z-10'>
          <div className='flex flex-row mb-9 items-center justify-center'>
            <img onClick={clickFoxHandler} className='active:brightness-0 pointer-events-none' src='/images/logo.png' width={150}/>
            <span className='uppercase font-bold text-3xl'>{ APP_NAME }</span>
          </div>

          <form className='flex flex-col items-center space-y-6'>
            <TextInput label={"Usuario"} type={"text"} name={"username"}/>
            <TextInput label={"Contraseña"} isPassword={true} name={"user_password"}/>

            <button onClick={submitHandler} className='text-2xl py-3 px-12 font-semibold bg-yellow-400 hover:bg-yellow-300 transform hover:scale-105 mt-10 rounded-lg' type="submit">Iniciar Sesión</button>
        </form>
        </div>
        <img className={`absolute ${foxCounter > 12 ? "sm:left-[10%] md:left-[13%] lg:left-[20%]" : "left-[50%]"} transition-all duration-1000 w-100 pointer-events-none`} src='/images/vibingFox.gif' width={150}/>
      </div>
    </React.Fragment>
  );
}

export default Login;
