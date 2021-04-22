import React from 'react';
import Pagination from '../components/Pagination';
import TableHeader from './TableHeader';
import TableBody from './TableBody';


const Table = ({ billList }) => {

    return (
        <div className="flex flex-col mt-3 mb-6">
            {
                !billList.isloading && billList.payload.length === 0 ? <div className="font-bold text-center text-md text-red-600 mb-3">Oops! 無資料！請先上傳檔案</div> : ''
            }
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <TableHeader />
                            <TableBody
                                loading={billList.isloading}
                                data={billList.payload}
                            />
                        </table>
                    </div>
                </div>
            </div>
            <Pagination
                total={billList.total}
                totalPage={billList.totalPage}
                page={billList.page}
                limit={billList.limit}
            />
        </div>
    );
}


export default Table;