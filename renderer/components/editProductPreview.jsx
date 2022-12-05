import { useRouter } from "next/router";

const EditProductPreview = ({ product }) => {
    const router = useRouter();

    console.log(product)

    const editProductHandler = (e) => {
        e.preventDefault();
        router.push('/editProduct?id=' + product.id);
      }

    return (
        <div className="flex flex-col items-center border pb-5 pt-3">
            <div className="aspect-square w-[50%]">
                <img className="aspect-square" src={product.image}/>
            </div>

            <span className="max-w-[15rem] font-semibold text-center">{product.title}</span>
            <span>$ {product.price?.toFixed(2)}</span>
            <button onClick={editProductHandler} className="text-white bg-purple-500 py-1 px-2 rounded mt-2 hover:opacity-75 transform hover:scale-105">Editar</button>
        </div>
    );
}

export default EditProductPreview;