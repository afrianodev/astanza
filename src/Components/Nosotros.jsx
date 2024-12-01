import React from 'react'

function Nosotros() {
  return (
    <div className='bg-customBrown p-6 flex gap-4 justify-center' id='nosotras'>
      <img src="https://i.imgur.com/fpseKiB.jpg" alt="imagen de pinceles en un taller" className='h-full object-cover' />
      <div className='w-[50%] h-full flex flex-col justify-center items-center'>
        <h2 className='mb-4 text-2xl font-bold text-center'>Nosotras</h2>
        <div className='flex flex-col flex-1 justify-between space-y-4'>
            <p>Elizabeth y Jessica son restauradoras con más de 10 años de experiencia, egresadas de la Universidad de San Luis Potosí. Su trayectoria profesional las ha llevado a especializarse en la restauración de pintura, escultura, pintura mural y retablos, trabajando en proyectos de gran relevancia histórica y cultural.</p>
            <p>Entre sus destacados trabajos se encuentran la restauración en el Palacio de Cortés en Cuernavaca, la Iglesia de la Asunción de María en la Ciudad de México y el Monumento del Papa Pío en Jamaica, entre muchos otros.</p>
            <p>Lo que las distingue es su excepcional profesionalismo y su atención al detalle, cualidades que garantizan resultados de la más alta calidad y respeto por el valor histórico de cada pieza.</p>
            <p>Con sede en la Ciudad de México, su taller atiende tanto a clientes particulares como a instituciones públicas y privadas en toda la República Mexicana y a nivel internacional. Elizabeth y Jessica son una garantía de excelencia en la conservación del patrimonio cultural.</p>
        </div>
      </div>
    </div>
  )
}

export default Nosotros
