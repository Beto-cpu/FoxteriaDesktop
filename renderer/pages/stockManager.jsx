import { useRouter } from "next/router";
import { useState } from 'react';
import { TbArrowBackUp } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import ResponsiveTable from "../components/responsiveTable";

const StockManager = () => {
  const router = useRouter();
  const [ managementMode, setManagementMode ] = useState(0);

  const goBackHandler = (e) => {
    e.preventDefault;
    router.back();
  };
  const settingButtonHandler = (e) => {
    e.preventDefault;

    router.push('inventoryManager')
  };
  const diminishModeButtonHandler = (e) => {
    e.preventDefault();

    setManagementMode(0);
  }
  const registerModeButtonHandler = (e) => {
    e.preventDefault();

    setManagementMode(1);
  }
  const refocusHandler = (e) => {
    e.target.focus();
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-700 p-4 md:p-7 lg:p-10">
      <div className="flex flex-col flex-grow rounded-lg p-4 md:p-7 lg:p-10">
        {/* Tabs */}
        <div className="flex flex-row">
          <button onClick={goBackHandler} className="border-b border-gray-900">
            <TbArrowBackUp className="text-white" size={30}/>
          </button>
          <button disabled={managementMode} onClick={registerModeButtonHandler} className={managementMode? "lg:text-lg bg-white rounded-t border-l border-r px-3 py-1 font-semibold" : "lg:text-lg bg-white rounded-t border border-gray-900 px-3 py-1" }>
            Altas
          </button>
          <button disabled={!managementMode} onClick={diminishModeButtonHandler} className={managementMode? "lg:text-lg bg-white rounded-t border border-gray-900 px-3 py-1" : "lg:text-lg bg-white rounded-t border-l border-r px-3 py-1 font-semibold" }>
            Mermas
          </button>
          <div className="flex-grow border-b border-gray-900"/>
          <button  className="border-b border-gray-900" onClick={settingButtonHandler}>
            <AiOutlineSetting className="text-white" size={30}/>
          </button>
        </div>

        {/* Container */}
        <div className="flex flex-col flex-grow items-center bg-white rounded-sm border border-t-0 border-ro border-gray-900 py-3 px-4 text-lg lg:text-xl">
          <div className="flex flex-row gap-x-3 items-center">
            <p className="font-semibold">Escanear</p>
            <input autoFocus onBlur={refocusHandler} type="text" maxLength={13} className="border border-gray-500 rounded py-1 px-2 text-center"></input>
          </div>
          <ResponsiveTable headers={[ "Nombre", "Precio Unitario", "Cantidad", "Precio" ]}  rows = { [ ["Botella", 10.00, 2, 20.00] ] } border={true}/>
          <div className="flex flex-row w-full justify-end space-x-6 text-2xl lg:text-4xl px-3 font-semibold">
            <p>Total:</p>
            <span>$375</span>
          </div>
        </div>

        {/* Button */}
        <button className={managementMode? "ml-auto text-btn text-white bg-blue-500 max-w-xs mt-2" : "ml-auto text-btn text-white bg-red-500 max-w-xs mt-2"}>Dar de {managementMode? "alta" : "baja"}</button>
      </div>
    </div>
  );
};

export default StockManager;
