import React from 'react';

const IntrpCard = ({ img, alt, title, content, extraContent }) => {
    return (
        <div className="w-full p-3 md:w-1/2 md:p-6">
            <div className="bg-white p-4 h-full rounded-lg shadow">
                <div className="">
                    <img className="mx-auto" src={img} alt={alt} />
                </div>
                <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900 text-center">{ title }</dt>
                    <dd className="mt-2 text-base text-gray-500 md:w-4/5 m-auto text-center">
                        {content}
                        {
                            extraContent && <p className="font-medium text-xs text-red-400 ">{extraContent}</p> 
                        }
                    </dd>

                </div>
            </div>
        </div>
    );
}

export default IntrpCard;