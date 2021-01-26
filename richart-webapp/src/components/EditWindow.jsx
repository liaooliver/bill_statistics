import React, { useContext, useRef } from 'react';

import { InteractiveContext } from '../context/InteractiveContext';

import EditTable from './EditTable';

const EditWindow = () => {

    const { openEditMode, setOpenEditMode } = useContext(InteractiveContext);

    const maskEl = useRef(null);

    const mockClick = () => {
        if (maskEl['current']['id'] === 'mask') {
            setOpenEditMode(false);
        }
    }

    return (
        <>
            {
                openEditMode ? <div id="mask" className="fixed w-full h-screen overflow-auto bg-gray-400 bg-opacity-40" onClick={()=>mockClick()} ref={maskEl}>
                    <EditTable />
                </div> : null
            }
        </>
    );
}

export default EditWindow;