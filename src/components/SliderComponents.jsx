import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Arrow(props) {
  const { className, style, onClick } = className= ""props,
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SliderComponents() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ]
  };

  return (
    <div className="SliderComponents">
      <Slider {...settings}>
      <div className='card2'>
          <img src="/images/img1.png" alt="" className="w-100" />
          <div className="card-body">
            <h4>Air Freight</h4>
            <p>As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...</p>
            <p className="card-text"><a href="#" className="text-danger text-decoration-none">Read More</a></p>
          </div>  
        </div>
        <div className='card2'>
          <img src="/images/img2.png" alt="" className="w-100" />
          <div className="card-body">
            <h4>Sea Freight</h4>
            <p>Sea Freight plays perhaps the most vital role in most transportation and supply chain solutions...</p>
            <p className="card-text"><a href="#" className="text-danger text-decoration-none">Read More</a></p>
          </div>
        </div>
        <div className='card2'>
          <img src="/images/img3.png" alt="" className="w-100" />
          <div className="card-body">
            <h4>Land Freight</h4>
            <p>Cargo are transported at some stage of their journey along the world’s roads where we give...</p>
            <p className="card-text"><a href="#" className="text-danger text-decoration-none">Read More</a></p>
          </div>
        </div>
        <div className='card2'>
          <img src="/images/img4.png" alt="" className="w-100" />
          <div className="card-body">
            <h4>Warehousing</h4>
            <p>Package and store your things effectively and securely to make sure them in storage, have certif...</p>
            <p className="card-text"><a href="#" className="text-danger text-decoration-none">Read More</a></p>
          </div>
        </div>
        <div className='card2'>
          <img src="/images/img1.png" alt="" className="w-100" />
          <div className="card-body">
            <h4>Door to Door Delivery</h4>
            <p>Our expertise in transport management and planning allows us to design a solution. hand...</p>
            <p className="card-text"><a href="#" className="text-danger text-decoration-none">Read More</a></p>
          </div>
        </div>
        <div className='card2'>
          <img src="/images/img1.png" alt="" className="w-100" />
          <div className="card-body">
            <h4>Packaging & Storage</h4>
            <p>Package and store your things effectively and securely to make sure them in storage, We...</p>
            <p className="card-text"><a href="#" className="text-danger text-decoration-none">Read More</a></p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponents;