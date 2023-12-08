import React from 'react';
import hambergIcon from '../assets/hamberg_icon.png';
import youtube from '../assets/youtube.png';
import userIcon from '../assets/userIcon.png';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className='p-1 grid grid-flow-col shadow-md justify-between'>
        <div className='flex grid-cols-1'>
            <img onClick={()=>toggleMenuHandler()} className='m-2 h-9 cursor-pointer' alt="hamberg_icon" src={hambergIcon}/>
            <img className='m-2 h-9' alt="youtube_icon" src={youtube}/>
        </div>
        <div className='m-3 grid-cols-10'>
            <input className='w-80 p-1 border rounded-l-full' type="text" id="search"></input>
            <button className='rounded-r-full pt-2 pb-2.5 px-3 bg-slate-200' type="button">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
            </button>
        </div>
        <div className='grid-cols-1'>
            <img className='m-2 h-9 place-items-end' alt="user_icon" src={userIcon}/>
        </div>
    </div>
    
  )
}

export default Header;
