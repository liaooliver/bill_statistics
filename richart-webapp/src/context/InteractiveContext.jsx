import React, { createContext, useReducer, useState } from 'react';

export const InteractiveContext = createContext();

export const InteractiveContextProvider = ({ children }) => {

    const [openEditMode, setOpenEditMode] = useState(false)

    return (
        <InteractiveContext.Provider value={{ openEditMode, setOpenEditMode }}>
            {children}
        </InteractiveContext.Provider>
    );
};