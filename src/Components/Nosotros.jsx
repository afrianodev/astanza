import React from 'react'

function Nosotros() {
  return (
    <div className='bg-customBrown py-2 px-2 md:py-6 md:px-12 flex flex-col md:flex-row gap-4 justify-center' id='nosotras'>
      <div className='w-[100%] md:w-[70%] flex gap-4'>
        <img src="https://i.imgur.com/8sb5czx.jpg" alt="imagen de pinceles en un taller"
        className='mt-3 md:mt-0 h-[350px] md:h-full object-cover w-[50%] md:w-[40%] rounded-sm float-left' />
        <div className='w-[60%] h-full flex flex-col justify-center items-center'>
          <h2 className='mb-1 md:mb-4 text-2xl font-bold clear-left'>Nosotras</h2>
          <div className='flex flex-col flex-1 justify-between space-y-1 md:space-y-2'>
              <p>Elizabeth y Jessica son restauradoras con más de 10 años de experiencia, egresadas de la Universidad de San Luis Potosí. Su trayectoria profesional las ha llevado a especializarse en la restauración de pintura, escultura, pintura mural y retablos, trabajando en proyectos de gran relevancia histórica y cultural.</p>
              <p className='hidden md:flex'>Entre sus destacados trabajos se encuentran la restauración en el Palacio de Cortés en Cuernavaca, la Iglesia de la Asunción de María en la Ciudad de México y el Monumento del Papa Pío en Jamaica, entre muchos otros.</p>
              <p className='hidden md:flex'>Lo que las distingue es su excepcional profesionalismo y su atención al detalle, cualidades que garantizan resultados de la más alta calidad y respeto por el valor histórico de cada pieza.</p>
              <p className='hidden md:flex'>Con sede en la Ciudad de México, su taller atiende tanto a clientes particulares como a instituciones públicas y privadas en toda la República Mexicana y a nivel internacional. Elizabeth y Jessica son una garantía de excelencia en la conservación del patrimonio cultural.</p>
          </div>
      </div>
      </div>
      <p className='md:hidden'>Entre sus destacados trabajos se encuentran la restauración en el Palacio de Cortés en Cuernavaca, la Iglesia de la Asunción de María en la Ciudad de México y el Monumento del Papa Pío en Jamaica, entre muchos otros.</p>
      <p className='md:hidden'>Lo que las distingue es su excepcional profesionalismo y su atención al detalle, cualidades que garantizan resultados de la más alta calidad y respeto por el valor histórico de cada pieza.</p>
      <p className='md:hidden'>Con sede en la Ciudad de México, su taller atiende tanto a clientes particulares como a instituciones públicas y privadas en toda la República Mexicana y a nivel internacional. Elizabeth y Jessica son una garantía de excelencia en la conservación del patrimonio cultural.</p>
    </div>
  )
}

export default Nosotros
