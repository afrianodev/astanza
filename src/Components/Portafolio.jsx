import React from 'react'

function Portafolio() {
  return (
    <div className='bg-customBrown py-6 px-4 md:px-12 flex flex-col gap-4 justify-center' id='portafolio'>
        <h2 className='mb-4 text-2xl font-bold text-center'>Portafolio</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
            <img src="https://i.imgur.com/GPwb2hR.jpg" alt="foto del portafolio"
            className='hover:scale-[102%] transition-transform rounded-md' />
            <img src="https://i.imgur.com/RKLGtj6.jpg" alt="foto del portafolio"
            className='hover:scale-[102%] transition-transform rounded-md'/>
            <img src="https://i.imgur.com/zZHpHro.jpg" alt="foto del portafolio"
            className='hover:scale-[102%] transition-transform rounded-md'/>
            <img src="https://i.imgur.com/9RrBhpN.jpg" alt="foto del portafolio"
            className='hover:scale-[102%] transition-transform rounded-md'/>
            <img src="https://i.imgur.com/4r9ZZtl.jpg" alt="foto del portafolio"
            className='hover:scale-[102%] transition-transform rounded-md'/>
            <img src="https://i.imgur.com/PIkn1eX.jpg" alt="foto del portafolio"
            className='hover:scale-[102%] transition-transform rounded-md'/>
            <img src="https://i.imgur.com/TSwkaNq.jpg" alt="foto del portafolio"
            className='hover:scale-[102%] transition-transform rounded-md'/>
            <img src="https://i.imgur.com/OjcTm7n.jpg" alt="foto del portafolio"
            className='hover:scale-[102%] transition-transform rounded-md'/>
        </div>
    </div>
  )
}

export default Portafolio
