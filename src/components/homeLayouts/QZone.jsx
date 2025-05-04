import React from 'react';
import swim from "../../assets/swimming.png";
import classroom from "../../assets/class.png";
import play from "../../assets/playground.png"

const QZone = () => {
    return (
        <div className='bg-base-300 p-2 '>
            <h2 className='font-bold text-2xl mb-5'>QZone</h2>
            <div className='space-y-5 mx-auto w-auto'>
            <img src={swim} alt="" />
            <img src={classroom} alt="" />
            <img src={play} alt="" />
            </div>
        </div>
    );
};

export default QZone;