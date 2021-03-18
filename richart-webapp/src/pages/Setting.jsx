import React from 'react';
import { useForm } from 'react-hook-form';
import Title from '../components/setting/Title';

const Setting = () => {

    const { register, handleSubmit, reset } = useForm();

    return ( 
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 md:pr-3">
                    <div className="border shadow p-3">
                        <Title title="增加消費類別" />
                        <div className="flex">
                            <form></form>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 md:pl-3">
                    <div className="border shadow p-3">
                        <Title title="增加自動分類關鍵字" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Setting;