import React, { useContext } from 'react';
import EditTable from './EditTable';
import { InteractiveContext } from '../context/InteractiveContext';

const EditWindow = () => {

    const { openEditMode } = useContext(InteractiveContext)

    return (
        <>
            {
                openEditMode ? <div className="fixed w-full h-screen bg-gray-400 bg-opacity-40">
                    <EditTable />
                </div> : null
            }
        </>
    );
}

export default EditWindow;