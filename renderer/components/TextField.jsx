import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

const TextField = ({ name, label, isPassword, vertical }) => {

    const [ showPassword, setShowPassword ] = useState(false);

    const toggleShowHandler = (e) => {
        e.preventDefault();

        setShowPassword(!showPassword);
    }

    return (
        <div className="flex flex-row justify-between text-2xl space-x-3 w-full">
            <label className='font-semibold' htmlFor={name}>{ label }</label>
            <div className='relative'>
                <input name={name} type={(showPassword || !isPassword)? "text" : "password"}  className="border border-gray-400 rounded px-3 py-1"/>
                {
                    isPassword &&
                    <button onClick={toggleShowHandler} className='absolute right-2 top-[calc(50%-16px)] rounded-full p-1 active:bg-gray-500 active:text-yellow-400 hover:cursor-pointer outline-none transition-all'>
                        {showPassword? <AiOutlineEyeInvisible size={26}/> : <AiOutlineEye size={26}/>}
                    </button> 
                }
            </div>
        </div>
    );
}

export default TextField;