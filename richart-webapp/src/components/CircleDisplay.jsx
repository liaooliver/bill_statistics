import React from 'react';

const CircleDisplay = ({ icon, size, title, alt, position }) => {

    return (
        <div className={`flex flex-col justify-center ${position}`}>
            <span className="w-16 h-16 border-2 ring-2 rounded-full flex justify-center items-center">
                <img width={size} src={icon} alt={alt} />
            </span>
            <p className="py-1 uppercase font-medium">{ title }</p>
        </div>
    );
}

export default CircleDisplay;