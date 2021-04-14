import React, { useState } from 'react';

const InputText = ({ register, errors, setValue, attr }) => {

    const [initplaceholder] = useState({
        color: '消費類別',
        keyword: '關鍵字'
    })

    const [initKey] = useState({
        color: 'category',
        keyword: 'keyname'
    })

    return (
        <div className="w-full relative">
            <input placeholder={ initplaceholder[attr] }
                type="text"
                name={initKey[attr]}
                id={initKey[attr]}
                ref={register({ required: "必填" })}
                className="w-full h-full rounded md:rounded-l md:rounded-r-none border p-2 mb-3 md:mb-0 focus:outline-none focus:border-0 focus:ring-2 focus:ring-indigo-400 focus:ring-inset" />
            <p className="text-red-500 text-sm absolute">{errors.keyname && errors.keyname.message}</p>
            <input placeholder={ initplaceholder[attr] }
                type="text"
                name="type"
                id="type"
                ref={register({
                    setValueAs: () => attr,
                  })}
                className="hidden" />
        </div>
    )
}
 
export default InputText;