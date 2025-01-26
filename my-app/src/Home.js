import React from "react";
import "./Home.css";

const cars = [
  {
    id: 1,
    name: "Mercedes CLE 53",
    description: "Mercedes cle 53",
    imageUrl: "../public/amg-cle-53.jpg",
    link: "/mercedes-glc"
  },
  {
    id: 2,
    name: "BMW X5",
    description: "Sleek and sophisticated",
    imageUrl: "/images/bmw-x5.jpg",
    link: "/bmw-x5"
  },
  {
    id: 3,
    name: "Audi Q7",
    description: "Comfort and style combined",
    imageUrl: "/images/audi-q7.jpg",
    link: "/audi-q7"
  },
  {
    id: 4,
    name: "Mercedes GLC 300",
    description: "Luxurious and powerful SUV",
    imageUrl: "/images/mercedes-glc.jpg",
    link: "/mercedes-glc"
  },
  {
    id: 5,
    name: "BMW X5",
    description: "Sleek and sophisticated",
    imageUrl: "/images/bmw-x5.jpg",
    link: "/bmw-x5"
  },
  {
    id: 6,
    name: "Audi Q7",
    description: "Comfort and style combined",
    imageUrl: "/images/audi-q7.jpg",
    link: "/audi-q7"
  },
  {
    id: 7,
    name: "BMW X5",
    description: "Sleek and sophisticated",
    imageUrl: "/images/bmw-x5.jpg",
    link: "/bmw-x5"
  },
  {
    id: 8,
    name: "Audi Q7",
    description: "Comfort and style combined",
    imageUrl: "/images/audi-q7.jpg",
    link: "/audi-q7"
  }
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>Car Collection</h1>
      <div className="card-container">
        {cars.map((car) => (
          <div className="card" key={car.id}>
            <img src={car.imageUrl} alt={car.name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{car.name}</h3>
              <p className="card-description">{car.description}</p>
              <a href={car.link} className="card-link">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
