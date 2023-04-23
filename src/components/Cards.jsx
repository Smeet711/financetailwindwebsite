import React from 'react'
import CardUI from './CardUI'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <>
    <div className='w-full py-[10rem] px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
    <CardUI img={Single} user="Single User"/>
    <CardUI img={Double} user="Double User"/>
    <CardUI img={Triple} user="Triple User"/>
    </div>
    </div>

    </>
  )
}

export default Cards