import React from 'react'
import '@/app/styles.css'
import Image from 'next/image'

import foto1 from '../../public/img/foto1.jpg'
import foto2 from '../../public/img/foto2.jpg'
import foto3 from '../../public/img/foto3.jpg'

export const Envelope = ({ isOpen, toggleEnvelope }) => {
  return (
    <div className="envlope-wrapper">
      <div id="envelope" className={isOpen ? 'open' : 'close'} onClick={toggleEnvelope}>
        <div className="front flap"></div>
        <div className="front pocket"></div>
        <div className="letter">
          <div className="words line1"></div>
          <div className="words line2"></div>
          <div className="words line3"></div>
          <div className="words line4"></div>
        </div>
        <div className="hearts">
          <Image className='heart a1' alt='foto' width={90} height={130} src={foto1}/>
          <Image className='heart a2' alt='foto' width={90} height={130} src={foto2}/>
          <Image className='heart a3' alt='foto' width={90} height={130} src={foto3}/>
        </div>
      </div>
    </div>
  )
}
