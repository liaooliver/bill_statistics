import React, { useState, useContext } from 'react';
import { BillListContext } from '../context/BillListContext';

const Import = () => {

    const { postBillFile } = useContext(BillListContext)
    const [isFileIn, setIsFileIn] = useState(false)

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
    const handleDrop = e => {
        e.preventDefault();
        e.stopPropagation();
        // remove boder dash color
        setIsFileIn(false)
        postBillFile(e.nativeEvent.dataTransfer.files[0]).then(response => console.log(response))
    };
    const change = (e) => {
        e.preventDefault();
        e.stopPropagation();
        postBillFile(e.nativeEvent.target.files[0]).then(response => console.log(response))
    }

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0">
                <div className="mb-24">
                    <label className="block text-sm font-medium text-gray-700">
                        Cover photo</label>
                    {/* upload form style */}
                    <form
                        onDrop={e => handleDrop(e)}
                        onDragOver={e => handleDragOver(e)}
                        onDragEnter={e => handleDragEnter(e)}
                        onDragLeave={e => handleDragLeave(e)}
                        className={`${isFileIn ? "border-red-600" : ""} mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md`}
                    >
                        <div className="space-y-1 text-center" >
                            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    {/* input for upload */}
                                    <input id="file-upload" name="file-upload" type="file" onChange={change} className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">Excel xlsx</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Import;