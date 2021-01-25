import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import { BillListContext } from '../context/BillListContext';

const List = () => {

    // from global state
    const { billList, getBillList } = useContext(BillListContext);

    useEffect(()=> {
        getBillList()
        console.log("billList => ", billList)
    }, [])

    return (
        !billList.isloading ?
            <>
                <Table billList={billList} />
            </> : <p>Loading</p>

    );
}

export default List;