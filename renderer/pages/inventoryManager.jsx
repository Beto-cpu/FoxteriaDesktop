import { useRouter } from "next/router";
import { TbArrowBackUp } from "react-icons/tb";
import EditProductPreview from "../components/editProductPreview";

const InventoryManager = () => {
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
            <div className="flex flex-col w-full flex-shrink bg-white rounded-md border border-gray-900 py-3 px-4">
                <h1 className="text-center font-bold text-lg lg:text-2xl mb-4">Modificar Inventario</h1>

                <div className="grid grid-cols-3 lg:grid-cols-4 text-lg lg:text-xl overflow-y-scroll pr-2 h-[50vh] lg:h-[65vh]">
                    {
                        [1,2,3,4,5,6,7,8,9,10].map(()=>(<EditProductPreview />))
                    }
                </div>

                <div className="flex flex-row flex-shrink justify-end w-full">
                    <button onClick={createProductHandler} className="bg-green-400 text-white font-semibold rounded py-1 px-2 w-64 mt-5 hover:opacity-75 transform hover:scale-105">Agregar Producto</button>
                </div>
            </div>

            {/* Create */}

          </div>
        </div>
      );
}

export default InventoryManager;