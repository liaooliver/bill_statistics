import React, { createContext, useReducer } from 'react';
import SettingReduce from '../reducer/SettingReduce';

export const SettingContext = createContext();

export const SettingContextProvider = ({ children }) => {

    // global state
    const [keynames, keynamesDispatch] = useReducer(SettingReduce, [
        { keyname: '高鐵', category: '吃飯' },
        { keyname: '基金會', category: '吃飯' }
    ])

    const addKeyNames = (value) => {
        keynamesDispatch({ type: "SUCCESS_FETCH", payload: value })
    }

    // keynamesDispatch({ "KEY", payload })

    return (
        <SettingContext.Provider value={{
            keynames, addKeyNames
        }}>{children}</SettingContext.Provider>
    )

}