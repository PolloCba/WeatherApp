import React from 'react';
import s from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card({max ,min, name, img, onClose, id}) {
  return (
  <div className={s.principal}>
    <Link to={`/ciudad/${id}`} >
  <h5 className="card-title">{name}</h5>
    </Link>
    <button onClick={onClose} className={s.btn}>X</button>
      <div>
        <span className={s.cardTitle}>{name}</span>
      </div>
      <div className= {s.medio}>
        <div className={s.temp}>
          <span className={s.tempName}>Min</span>
          <span className={s.minTemp}>{min}°</span>
        </div>
        <div className={s.temp}>
          <span className={s.tempName}>Max</span>
          <span className={s.maxTemp}>{max}°</span>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={`clima-${img}`}/>
        </div>
      </div>
  </div>
  )
};