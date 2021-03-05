import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

const Loading = () => {
    return (
        <div className="flex justify-center my-24">
            <ScaleLoader color="rgba(59, 130, 246, 1)" />
        </div>
    );
}

export default Loading;