import React from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner/Banner'
import Weekly from './components/Weekly/Weekly'
import Visa from './components/Visa/Visa'
import Destination from './components/Destination/Destination'
import Visit from './components/Visit'
import Reservation from './components/Reservation'
import Info from './components/Info'
import Map from './components/Map'
import Form from './components/Form'
import Footer from './components/Footer'
import Best from './components/Best'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Banner />
        <Weekly/>
        <Visa/>
        <Destination/>
        <Visit/>
        <Best/>
        <Reservation/>
        <Info/>
        <Map/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default App