import React from 'react';
import pic1 from '../assets/img1.png';
import pic2 from '../assets/img2.png';
import pic3 from '../assets/img3.png';

function Card() {
  // Array of card data
  const cardData = [
    { Image: pic1, title: 'Air Freight', content: 'As a leader in global air freight forwarding, OIA Global excels in providing tailored transportation...' },
    { Image: pic2, title: 'Sea Freight', content: 'Sea Freight plays perhaps the most vital role in most transportation and supply chain solutions...' },
    { Image: pic3, title: 'Land Freight', content: 'Cargo is transported at some stage of their journey along the world’s roads where we give...' },
  ];

  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-md-4 mb-5" key={index}>
          <div className="card">
            <img src={card.Image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-title">{card.title}</h4>
              <p className="card-text">{card.content}<a href="" className="text-danger text-decoration-none">Read More</a></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;