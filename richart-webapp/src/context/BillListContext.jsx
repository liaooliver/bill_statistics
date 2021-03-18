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
        message: null,
        payload: [],
        page: null,
        limit: null,
        total: null,
        totalPage: 0
    })

    const postBillFile = async (file) => {
        const formData = new FormData() 
        formData.append('file', file)
        
        return await fetch(`uploadFile`, {
            method: 'POST',
            body: formData
        }).then(response => response.json())
        .catch(error => error)
        
    }

    const getBillList = async (page = 0, limit = 10) => {
        await fetch(`readSheet?page=${page}&limit=${limit}`)
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
    };

    const updateBill = async (data) => {
        return await fetch('updateSheet', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'content-type': 'application/json' }
        }).then(response => response.json())
    };

    return (
        <BillListContext.Provider value={{
            billList,
            getBillList,
            reloadBill,
            updateBill,
            postBillFile
        }}>{children}</BillListContext.Provider>
    )
}
