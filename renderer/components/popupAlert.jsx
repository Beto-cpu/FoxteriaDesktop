const PopupAlert = ({text1, text2, disableCancel, onCancel, onAcept}) => {
    return (
        <div className="flex items-center justify-center absolute w-screen h-screen bg-black bg-opacity-20">
            <div className="flex flex-col bg-white text-2xl items-center p-8 rounded-xl gap-y-3 text-center">
                <p className="max-w-2xl font-semibold">{ text1 }</p>
                <p>{ text2 }</p>
                <div className="flex flex-row w-full justify-around mt-2 gap-x-3">
                    { !disableCancel && <button onClick={onCancel} className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg transform hover:scale-105 hover:opacity-70">Cancelar</button> }
                    <button onClick={onAcept} className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg transform hover:scale-105 hover:opacity-70">Aceptar</button>
                </div>
            </div>
        </div>
    );
}

export default PopupAlert;