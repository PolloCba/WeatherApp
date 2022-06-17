import React from 'react';
import s from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  const buscar = (event)=>{
    event.preventDefault();
    const inputSearch = document.querySelector('#inputSearch')
    onSearch(inputSearch.value)
    inputSearch.focus()
    inputSearch.value = "";
  }
  return <form onSubmit ={buscar}>
    <input id="inputSearch" type="text" placeholder="Agrega una nueva ciudad..."/> 
    <button type="submit" className={s.btn}>Buscar</button>
    </form>
};