import React from 'react'
import Container from '../utils/Container'

const Map = () => {
  return (
    <div className='mt-28 rounded-3xl overflow-hidden'>
        <Container>
        <iframe className='w-full rounded-t-3xl shadow-card' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.8252448935756!2d69.29537753666203!3d41.31910462366305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDEuMzE5MTA0NiA2OS4yOTUzNzc1MzY2NjIwMw!5e0!3m2!1sen!2s!4v1716202628458!5m2!1sen!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Container>
    </div>
  )
}

export default Map