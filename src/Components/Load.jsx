import React from 'react';
import ReactLoading from "react-loading";

const Load = () => {
    return (
        <div className='screenLoad'>
            <ReactLoading
            className='icon-loading'
            type={"bubbles"}
            color={"#1e6d94"}
            width={"75px"}
            height={"75px"}
            />
      </div>
    )
}

export default Load