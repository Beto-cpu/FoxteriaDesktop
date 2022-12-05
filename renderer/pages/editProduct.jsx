import { useState } from "react";
import { useRouter } from "next/router";
import { TbArrowBackUp } from "react-icons/tb";
import EditProductPreview from "../components/editProductPreview";
import { TfiMoney  } from "react-icons/tfi";

const EditProduct = () => {
    const router = useRouter();

    const goBackHandler = (e) => {
        e.preventDefault;
        router.back();
      };
    const createProductHandler = (e) => {
      e.preventDefault();
      router.push('/editProduct');
    }

    return (
        <div className="w-full h-screen overflow-hidden bg-gray-700 p-4 md:p-7 lg:p-10">
          <div className="flex flex-col flex-grow rounded-lg p-4 md:p-7 lg:p-10">
            {/* Tabs */}
            <div className="flex flex-row">
              <button onClick={goBackHandler}>
                <TbArrowBackUp className="text-white" size={30}/>
              </button>
            </div>
    
            {/* Inventory */}
            <div className="flex flex-col w-full flex-shrink bg-white rounded-md border border-gray-900 py-5 px-6">
                <h1 className="text-center text-3xl font-semibold">{"Editar"} producto</h1>

                <div className="grid grid-cols-2">
                    <div className="flex flex-col text-2xl gap-y-5">

                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="name">Nombre</label>
                            <input name="name" className="w-full border border-gray-400 rounded py-1 px-2"></input>
                        </div>

                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="description">Descripción</label>
                            <textarea name="description" cols="40" rows="5" className="w-full border border-gray-400 rounded py-1 px-2 resize-none"></textarea>
                        </div>

                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="category">Categoría</label>
                            <select name="category" className="w-full border border-gray-400 rounded py-1 px-2 hover:cursor-pointer">
                                <option value={"food"}>Comida</option>
                                <option value={"beverage"}>Bebidas</option>
                                <option value={"snacks"}>Botanas</option>
                            </select>
                        </div>

                        <div className="flex flex-col">
                            <label className="font-semibold" htmlFor="price">Precio</label>
                            <div className="relative">
                                <TfiMoney className="absolute top-[10px] left-1"/>
                                <input name="price" type="number" className="w-full border border-gray-400 rounded py-1 pr-2 pl-5"></input>                            
                            </div>
                        </div>


                    </div>

                    <div className="flex items-center justify-center border mx-20 my-2 p-5">
                        <img className="max-w-[40vh]" src="http://cdn.shopify.com/s/files/1/0270/4651/0663/products/7501198355536_1200x1200.png?v=1637172517"/>
                    </div>
                    
                </div>

                <div className="flex flex-row justify-around mt-5">
                    <button className="text-2xl text-white bg-red-500 rounded-md py-2 px-3 hover:opacity-70 transform hover:scale-105">Deshabilitar producto</button>
                    <button className="text-2xl text-white bg-green-500 rounded-md py-2 px-3 hover:opacity-70 transform hover:scale-105">Guardar cambios</button>
                </div>
            </div>

          </div>
        </div>
      );
}

export default EditProduct;