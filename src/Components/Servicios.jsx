import React from 'react'

function Servicios() {
  return (
    <div className='relative w-full overflow-hidden pb-8' id='servicios'>
      <img src="https://i.imgur.com/vx3VPHL.jpg" alt="background image"
      className='absolute top-0 left-0 object-cover w-full h-full z-[-2]' />
      <div className='absolute top-0 left-0 bg-black/70 w-full h-full z-[-1]'></div>
      <div className='flex flex-col w-full h-full justify-center items-center'>
        <h2 className='text-white mt-8 my-4 text-2xl font-bold'>Servicios</h2>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-2'>
          <div className='flex flex-col justify-center items-center gap-2 hover:scale-105 transition-transform'>
            <img src="https://i.imgur.com/Frxzwc3.png" alt="icono de restauración de arte"
            className='w-20' />
            <h3 className='text-white'>Restauración de Arte</h3>
          </div>
          <div className='flex flex-col justify-center items-center gap-2 hover:scale-105 transition-transform'>
            <img src="https://i.imgur.com/HCEXlRU.png" alt="icono de restauración de arte"
            className='w-20' />
            <h3 className='text-white'>Restauración de Esculturas</h3>
          </div>
          <div className='flex flex-col justify-center items-center gap-2 hover:scale-105 transition-transform'>
            <img src="https://i.imgur.com/f0aU3HQ.png" alt="icono de restauración de arte"
            className='w-20' />
            <h3 className='text-white'>Pintura Mural</h3>
          </div>
          <div className='flex flex-col justify-center items-center gap-2 hover:scale-105 transition-transform'>
            <img src="https://i.imgur.com/6l0wMZU.png" alt="icono de restauración de arte"
            className='w-20' />
            <h3 className='text-white'>Asesoría</h3>
          </div>
          <div className='flex flex-col justify-center items-center gap-2 hover:scale-105 transition-transform col-span-2 md:col-span-1'>
            <img src="https://i.imgur.com/tXJ9vrw.png" alt="icono de restauración de arte"
            className='w-20' />
            <h3 className='text-white'>Conservación preventiva</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Servicios
