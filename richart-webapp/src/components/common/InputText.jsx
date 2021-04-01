import React, { useState } from 'react';

const InputText = ({ register, errors, attr }) => {

    const [initplaceholder] = useState({
        color: '消費類別',
        keyword: '關鍵字'
    })

    return (
        <div className="w-full relative">
            <input placeholder={ initplaceholder[attr] }
                type="text"
                name="keyname"
                id="keyname"
                ref={register({ required: "必填" })}
                className="w-full h-full rounded-l border p-2 focus:outline-none focus:border-0 focus:ring-2 focus:ring-indigo-400 focus:ring-inset" />
            <p className="text-red-500 text-sm absolute">{errors.keyname && errors.keyname.message}</p>
        </div>
    )
}
 
export default InputText;