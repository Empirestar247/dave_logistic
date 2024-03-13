import React from "react"
import Card2 from './Card2'
import about2 from '../assets/about2.png'

function Services() {
  return (
    <div>
      <div className="bg-cover">
        <div className="text-center text-light">
          <h1 className='pt-5'>Service</h1>
          <p>Home<i className="fa fa-arrow-right ms-3 me-3"></i> Service</p>
        </div>
      </div>

      <div className="container mt-5"data-aos="fade-up" >
        <Card2/>

        <div className="row">
          <div className="col-md-6"data-aos="fade-up">
            <img src={about2} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-6"data-aos="fade-up">
              <h2>THE COMPLETE SOLUTION</h2>
              <div className="bg-red" data-aos="fade-up"></div>
              <p className="m-3"> Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Pleasure and praising pain was born and I will give you a complete account of system, and expound actual teachings occasionally circumstances.</p>              
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services