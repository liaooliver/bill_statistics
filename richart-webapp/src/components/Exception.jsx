import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import maintenance from '../assets/streamline-icon-maintenance-2@200x200.png';
import error from '../assets/streamline-icon-asking-question-1@200x200.png';

const Exception = () => {

    const location = useLocation();
    const [image, setImage] = useState()
    const [quote, setQuote] = useState()

    useEffect(() => {
        if (location.pathname.match('/404')) {
            setImage(maintenance)
            setQuote('Oops!! 找不到您的頁面 ( 404 ) ')
        } else {
            setImage(error)
            setQuote('Oops!! 伺服器異常 ( 500 ) ')
        }
    }, [location])

    return (<div className="w-full p-10">
        <div className="w-48 md:w-1/4 m-auto">
            <img width="100%" src={image} alt="404" />
            <div className="m-auto">
                <h4 className="text-center text-xl">{ quote }</h4>
            </div>
        </div>
    </div> );
}
 
export default Exception;