import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import { BillListContext } from '../context/BillListContext';

const List = () => {

    // from global state
    const { billList, getBillList } = useContext(BillListContext);

    useEffect(()=> {
        getBillList(0, 10);
    }, [])

    return (
        !billList.isloading ? <Table billList={billList} /> : <p>Loading</p>
    );
}

export default List;