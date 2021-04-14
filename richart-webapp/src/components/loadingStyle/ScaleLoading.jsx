import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

const ScaleLoading = () => {
    return (
        <div className="flex justify-center my-3">
            <ScaleLoader color="rgba(59, 130, 246, 1)" />
        </div>
    );
}

export default ScaleLoading;