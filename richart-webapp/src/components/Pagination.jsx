import React, { useEffect, useState, useContext } from 'react';
import { BillListContext } from '../context/BillListContext';

const Pagination = ({ totalPage, limit }) => {

    const [items, setItems] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const { reloadBill } = useContext(BillListContext);

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
        reloadBill(page, 10)
        const tempItems = [...items];
        tempItems.forEach(item => {
            item['current'] = false;
        });
        tempItems[page]['current'] = true;
        setCurrentPage(page);
        setItems(tempItems);
    }

    const nextPage = () => {
        if (currentPage + 1 >= totalPage) return;
        changePage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage === 0) return;
        changePage(currentPage - 1);
    };

    const firstPage = () => {
        if (currentPage === 0) return;
        changePage(0);
    };

    const lastPage = () => {
        if (currentPage + 1 >= totalPage) return;
        changePage(totalPage - 1);
    };

    return (
        // <!-- This example requires Tailwind CSS v2.0+ -->
        <div className="bg-white py-3 flex items-center justify-center border-t border-gray-200">
            <div className="flex-1 flex justify-between sm:hidden">
                <a href="/#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                    Previous
                </a>
                <a href="/#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                    Next
                </a>
            </div>
            
            <div className="hidden sm:flex sm:justify-center sm:items-center">

                <button onClick={() => firstPage()} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>
                    
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                </button>

                <button onClick={() => prevPage()} className="relative inline-flex items-center px-2 py-2 ml-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Previous</span>

                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </button>

                <p className="mx-4">{totalPage ? currentPage + 1 : 0 } / {totalPage}</p>
                
                <button onClick={() => nextPage()} className="relative inline-flex items-center px-2 py-2 mr-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>

                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>

                <button onClick={() => lastPage()} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    <span className="sr-only">Next</span>

                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Pagination;