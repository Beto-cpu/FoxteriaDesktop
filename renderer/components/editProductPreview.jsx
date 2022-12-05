import { useRouter } from "next/router";

const EditProductPreview = () => {
    const router = useRouter();

    const editProductHandler = (e) => {
        e.preventDefault();
        router.push('/editProduct');
      }

    return (
        <div className="flex flex-col items-center border pb-5 pt-3">
            <div className="aspect-square w-[50%]">
                <img className="" src="http://cdn.shopify.com/s/files/1/0270/4651/0663/products/7501198355536_1200x1200.png?v=1637172517"/>
            </div>

            <span>Dr Pepper</span>
            <span>$20.00</span>
            <button onClick={editProductHandler} className="text-white bg-purple-500 py-1 px-2 rounded mt-2 hover:opacity-75 transform hover:scale-105">Editar</button>
        </div>
    );
}

export default EditProductPreview;