import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Navigation = () => {

    const [isOpen, setOpen] = useState(false)
    const [links, setLinks] = useState([
        {
            url: '/',
            text: '首頁',
            isActive: false
        },{
            url: '/list',
            text: '帳單明細',
            isActive: false
        },{
            url: '/analysis',
            text: '帳單分析',
            isActive: false
        },{
            url: '/import',
            text: '匯入功能',
            isActive: false
        },{
            url: '/setting',
            text: '設定功能',
            isActive: false
        }
    ])

    const activeChange = (index) => {
        const oldStatus = [...links];
        oldStatus.forEach(item => item.isActive = false);
        oldStatus[index]['isActive'] = true;
        setLinks(oldStatus)
    }

    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                        </div>
                        {/* Link */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {
                                    links.map((item, index) => <Link key={uuidv4()} to={item.url} onClick={()=>{activeChange(index)}}
                                        className={`${item.isActive ? 'bg-gray-900' : ''} btn-link-base`}>
                                        {item.text}
                                    </Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        {/* <!-- Mobile menu button --> */}
                        <button onClick={()=>setOpen(!isOpen)} className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {
                        links.map((item, index) => <Link key={uuidv4()} to={item.url} onClick={()=>{activeChange(index)}}
                                className={`${item.isActive ? 'bg-gray-900' : ''} btn-link-base block`}>
                                {item.text}
                            </Link>
                        )
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navigation;