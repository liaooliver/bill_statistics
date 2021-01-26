import React, { useEffect, useState, useContext } from 'react';
import { BillListContext } from '../context/BillListContext';

const Pagination = ({ total, totalPage, page, limit }) => {

    const [items, setItems] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const { getBillList } = useContext(BillListContext);

    useEffect(() => {
        let tempItems = []
        for (let i = 0; i < totalPage; i++) {
            tempItems.push({
                page: i,
                limit,
                current: i === 0 ? true : false
            })
        }
        setItems(tempItems)
    }, [totalPage, limit]);
    
    const changePage = (page) => {
        getBillList(page, 10);
        const tempItems = [...items];
        tempItems.forEach(item => {
            item['current'] = false;
        });
        tempItems[page]['current'] = true;
        setCurrentPage(page);
        setItems(tempItems);
    }

    const nextPage = () => { 
        if (currentPage+1 >= totalPage) return;
        changePage(currentPage + 1);
    };
    
    const prevPage = () => { 
        if (currentPage === 0) return;
        changePage(currentPage - 1);
    };

    return (
        // <!-- This example requires Tailwind CSS v2.0+ -->
        <div className="bg-white py-3 flex items-center justify-between border-t border-gray-200">
            <div className="flex-1 flex justify-between sm:hidden">
                <a href="/#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                    Previous
                </a>
                <a href="/#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                    Next
                </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">Showing
                        <span className="font-medium px-1">1</span>to
                        <span className="font-medium px-1">10</span>of
                        <span className="font-medium px-1">{total}</span>results
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex shadow-sm -space-x-px" aria-label="Pagination">
                        <button onClick={()=>prevPage()} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Previous</span>
                            {/* <!-- Heroicon name: chevron-left --> */}
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {
                            items && items.map((item, index) => (
                                <button onClick={()=>changePage(item.page)} key={item.page} className={`relative inline-flex items-center px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 ${item.current ? 'bg-gray-100': ''}`}>
                                    {item.page + 1}
                                </button>
                            ))
                        }
                        <button onClick={()=>nextPage()} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Next</span>
                            {/* <!-- Heroicon name: chevron-right --> */}
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Pagination;