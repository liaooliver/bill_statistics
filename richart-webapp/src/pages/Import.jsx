import React, { useState, useContext } from 'react';
import { BillListContext } from '../context/BillListContext';
import BounceLoader from "react-spinners/BounceLoader";

const Import = () => {

    const { postBillFile } = useContext(BillListContext)
    const [isFileIn, setIsFileIn] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [fail, setFail] = useState(false)

    // 1. listen Drag & Drop event for change input style (border dash color)
    const handleDragEnter = e => {
        e.preventDefault();
        e.stopPropagation();
        setIsFileIn(true)
    };
    const handleDragLeave = e => {
        e.preventDefault();
        e.stopPropagation();
        setIsFileIn(false)
    };
    const handleDragOver = e => {
        e.preventDefault();
        e.stopPropagation();
        setIsFileIn(true)
    };
    // 2. listen input change event & Drop event 
    const handleDrop = async (e) => {
        triggerAPI(e, e.nativeEvent.dataTransfer.files[0])
    };
    const change = (e) => {
        triggerAPI(e, e.nativeEvent.target.files[0])
    }
    // reuse post logic
    const triggerAPI = async (e, files) => {
        e.preventDefault();
        e.stopPropagation();
           
        resetState()

        postBillFile(files).then(response => {
            const { message } = response;
            setUploading(false)
            if (message === 'success') {
                setSuccess(true)
                sessionStorage.removeItem('StatisticsData')
            } else {
                setFail(true)
            }
        })
        
    }
    const resetState = () => {
        setIsFileIn(false)
        setUploading(true)
        setSuccess(false)
        setFail(false)
    }

    return (
        <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0">

                <div className="mb-24">
                    <form
                        onDrop={e => handleDrop(e)}
                        onDragOver={e => handleDragOver(e)}
                        onDragEnter={e => handleDragEnter(e)}
                        onDragLeave={e => handleDragLeave(e)}
                        className={`${isFileIn ? "border-gray-600" : ""} mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md relative`}
                    >
                        {
                            uploading && <div className="absolute inset-0 rounded-md z-10">
                                <div className="w-full h-full bg-gray-200 opacity-50"></div>
                                <div className="absolute top-0 w-full h-full flex justify-center items-center flex-col z-20">
                                    <BounceLoader />
                                    <span className="font-extrabold badge-red w-auto text-base">上傳中</span>
                                </div>
                            </div>
                        }

                        <div className="space-y-1 text-center">
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" onChange={change} className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">Excel xlsx</p>
                        </div>
                    </form>

                    {success && <span className="badge-green w-auto">上傳成功</span>}
                    {fail && <span className="badge-red w-auto">上傳失敗</span>}
                    <p className="font-medium text-xs text-red-400">*目前僅接受由台新數位銀行 Richart 所匯出的信用卡帳單 excel 檔案。</p>
                </div>
            </div>
        </div>
    );
}

export default Import;