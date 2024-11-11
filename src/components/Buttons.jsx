import React from 'react'
import '@/app/styles.css'

export const Buttons = ({ toggleEnvelope, resetEnvelope }) => {
  return (
    <div className='reset'>
      <button id='open' onClick={toggleEnvelope}>
        Abrir
      </button>
      <button id='reset' onClick={resetEnvelope}>
        Reiniciar
      </button>
    </div>
  )
}
