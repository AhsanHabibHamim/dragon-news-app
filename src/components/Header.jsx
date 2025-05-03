import React from 'react';
import Logo from '../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
        return (
        <div className='flex justify-center flex-col items-center mt-8'>
            <img src={Logo} alt="" className='' />
            <p className='text-sm text-[#706F6F] font-semibold'>Journalism Without Fear or Favour</p>
            <h5 className='text-md text-[#706F6F] font-bold'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</h5>
        </div>
    );
};

export default Header;