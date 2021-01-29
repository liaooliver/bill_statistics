import React, { createContext, useState } from 'react';

export const InteractiveContext = createContext();

export const InteractiveContextProvider = ({ children }) => {

    const [openEditMode, setOpenEditMode] = useState(false)
    const [billDetail, setBillDetail] = useState(null);

    return (
        <InteractiveContext.Provider value={{
            openEditMode,
            setOpenEditMode,
            billDetail,
            setBillDetail
        }}>
            {children}
        </InteractiveContext.Provider>
    );
};