import React, { useContext } from 'react';

import { InteractiveContext } from '../context/InteractiveContext';

import EditTable from './EditTable';

const EditWindow = () => {

    const { openEditMode, setOpenEditMode } = useContext(InteractiveContext);

    const mockClick = (event) => {
        if (event.target.id === 'mask') {
            setOpenEditMode(false);
        }
    }

    return (
        <>
            {
                openEditMode ?
                    <div id="mask"
                        className="fixed w-full h-screen overflow-auto bg-gray-400 bg-opacity-40 z-10"
                        onClick={($event) => mockClick($event)}>
                        <EditTable />
                    </div> : null
            }
        </>
    );
}

export default EditWindow;