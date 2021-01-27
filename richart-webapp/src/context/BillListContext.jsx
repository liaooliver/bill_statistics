// 1.import createContext
import React, { createContext, useReducer } from 'react';
// import { getBillList } from '../services/list';
import FetchBillReduce from '../reducer/FetchBillReduce';

// 2.Create Context Object
export const BillListContext = createContext();

// 3.Create a provider for components to consume and subscribe to changes
export const BillListContextProvider = ({ children }) => {

    // global state
    const [billList, billListDispatch] = useReducer(FetchBillReduce, {
        isloading: true,
        isError: false,
        message: "",
        payload: [],
        page: null,
        limit: null,
        total: null,
        totalPage: null
    })

    const getBillList = async (page = 0, limit = 10) => {
        await fetch(`http://localhost:3001/readSheet?page=${page}&limit=${limit}`)
            .then(response => response.json())
            .then(response => {
                const payload = response;
                billListDispatch({ type: 'SUCCESS_FETCH', payload });
            })
            .catch(error => {
                billListDispatch({ type: 'FAIL_FETCH', payload: error });
            });
    };

    const reloadBill = (page, limit) => {
        billListDispatch({ type: 'RELOAD_FETCH' });
        getBillList(page, limit);
    }

    return (
        <BillListContext.Provider value={{ billList, getBillList, reloadBill }}>{ children }</BillListContext.Provider>
    )
}
