import React, { createContext } from 'react';

export const StatisticsContext = createContext();

export const StatisticsContextProvider = ({ children }) => {
    
    const getFilterByCategory = async () => {
        return await fetch('subsidiaryLedger/filter_by_category')
            .then(response => response.json())
    }

    const getFilterByMonthly = async () => {
        return await fetch('subsidiaryLedger/filter_by_monthly')
            .then(response => response.json())
    }

    return (
        <StatisticsContext.Provider value={{
            getFilterByCategory,
            getFilterByMonthly
        }}>{children}</StatisticsContext.Provider>
    )
}