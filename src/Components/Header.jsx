import React from 'react'
import { TiThMenu } from "react-icons/ti";

function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='bg-customBrown flex justify-between items-center px-4 md:px-12 py-2 sticky top-0 z-10'>
      <img src="https://i.imgur.com/ngJgWxj.jpg" alt="logo astanza casa restauradora"
      className='w-[90px] md:w-[200px]' />
      <TiThMenu className='flex text-2xl md:hidden' />
      <ul className='hidden md:flex gap-8 font-bold tracking-widest text-lg'>
        <li className='select-none cursor-pointer hover:text-slate-800' onClick={scrollToTop}>Inicio</li>
        <li className='select-none cursor-pointer hover:text-slate-800'   onClick={() => {
    const element = document.getElementById('nosotras');
    if (element) {
      const rect = element.getBoundingClientRect(); // Get the element's position relative to the viewport
      const offsetTop = window.scrollY + rect.top - 100; // Calculate the target scroll position
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }}>Nosotras</li>
        <li className='select-none cursor-pointer hover:text-slate-800' onClick={() => {
    const element = document.getElementById('servicios');
    if (element) {
      const rect = element.getBoundingClientRect(); // Get the element's position relative to the viewport
      const offsetTop = window.scrollY + rect.top - 100; // Calculate the target scroll position
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }}>Servicios</li>
        <li className='select-none cursor-pointer hover:text-slate-800' onClick={() => {
    const element = document.getElementById('portafolio');
    if (element) {
      const rect = element.getBoundingClientRect(); // Get the element's position relative to the viewport
      const offsetTop = window.scrollY + rect.top - 100; // Calculate the target scroll position
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }}>Portafolio</li>
        <li className='select-none cursor-pointer hover:text-slate-800' onClick={() => {
    const element = document.getElementById('contacto');
    if (element) {
      const rect = element.getBoundingClientRect(); // Get the element's position relative to the viewport
      const offsetTop = window.scrollY + rect.top - 100; // Calculate the target scroll position
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }}>Contacto</li>
      </ul>
    </div>
  )
}

export default Header
