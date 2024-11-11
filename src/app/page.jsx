"use client"

import React, { useState } from 'react'
import '@/app/styles.css'
import { Envelope } from '@/components/Envelope';
import { Buttons } from '@/components/Buttons';


const Page = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen)
  }

  const resetEnvelope = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <Envelope isOpen={isOpen} toggleEnvelope={toggleEnvelope} />
      <Buttons toggleEnvelope={toggleEnvelope} resetEnvelope={resetEnvelope} />
    </div>
  )
}

export default Page