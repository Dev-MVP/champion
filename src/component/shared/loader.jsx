import React from "react";
import FadeLoader from "react-loader-spinner";

export const PageLoader = (
    <div
        style={{ height: '100vh' }}
        className='text-center w-100   d-flex justify-content-center align-items-center'
    >
        <FadeLoader
            size={150}
            color={"#123abc"}
        />
    </div>
);
const Loader = () => {
    return (
        <div
            style={{ height: '100vh' }}
            className='text-center w-100   d-flex justify-content-center align-items-center'
        >
            <FadeLoader
                size={150}
                color={"#123abc"}
            />
        </div>
    )
}

export default Loader;
