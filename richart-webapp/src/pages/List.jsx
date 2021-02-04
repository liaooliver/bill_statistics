import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import { BillListContext } from '../context/BillListContext';

const List = (props) => {

    // from global state
    const { billList, getBillList } = useContext(BillListContext);

    useEffect(() => {
        getBillList(0, 10);
    }, [])

    return (
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0">
                <Table billList={billList} />
            </div>
        </div>
    );
}

export default List;