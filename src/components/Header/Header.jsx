import React from 'react';
import "./Header.css"
import caffe from "../../assets/more/logo1.png"

const Header = () => {
  return (
    <div className='my-bg flex justify-center items-center'>
      <img className='w-12' src={caffe} alt="" />
      <h1 className='text-center text-white text-2xl py-4  font-bold'>Espresso Emporium</h1>
    </div>
  );
};

export default Header;