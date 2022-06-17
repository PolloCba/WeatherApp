import React from 'react';
import Card from './Card'
import s from './Cards.module.css'

export default function Cards({ cities, onClose }) {

  return (
  <div className={s.cards}>
    {cities.map(city => (
      <Card
          key={city.id}
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          id= {city.id}
          onClose={() => onClose(city.id)}
        />
    ))}
  </div>
  );
};