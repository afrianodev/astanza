import React from 'react'

function Header() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='bg-customBrown flex justify-between items-center px-12 py-2'>
      <img src="https://i.imgur.com/ngJgWxj.jpg" alt="logo astanza casa restauradora"
      className='w-[200px]' />
      <ul className='flex gap-8 font-bold tracking-widest text-lg'>
        <li className='select-none cursor-pointer hover:text-slate-800' onClick={scrollToTop}>Inicio</li>
        <li className='select-none cursor-pointer hover:text-slate-800' onClick={() => document.getElementById('nosotras').scrollIntoView({ behavior: 'smooth' })}>Nosotras</li>
        <li className='select-none cursor-pointer hover:text-slate-800' onClick={() => document.getElementById('nosotras').scrollIntoView({ behavior: 'smooth' })}>Servicios</li>
        <li className='select-none cursor-pointer hover:text-slate-800' onClick={() => document.getElementById('nosotras').scrollIntoView({ behavior: 'smooth' })}>Portafolio</li>
        <li className='select-none cursor-pointer hover:text-slate-800' onClick={() => document.getElementById('nosotras').scrollIntoView({ behavior: 'smooth' })}>Contacto</li>
      </ul>
    </div>
  )
}

export default Header
