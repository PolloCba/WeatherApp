import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { Route } from "react-router-dom";
import About from "./components/About.jsx";
import City from "./components/City.jsx";

const API_KEY = "7255db7793802f2a696a5c4e2a1e9b45";

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function addCity(city) {
    setCities((prevCities) => {
      return [city, ...prevCities];
    });
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          const oldCity = cities.find((city) => city.id === ciudad.id);
          if (!oldCity) {
            addCity(ciudad);
          } else {
            alert("La ciudad ya fue proporcionada");
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    const cityToSearch = cities.find(function (city) {
      return city.id === parseInt(ciudadId);
    });

    // if(cityToSearch){
    //   return cityToSearch
    // }else {
    //   return null
    // }
    // return cityToSearch  ? cityToSearch : undefined
    return cityToSearch;
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Route exact path="/">
        <div>
          <Cards cities={cities} onClose={onClose} />
        </div>
      </Route>
      <Route path="/about" component={About} />
      <Route
        path="/city/:cityId"
        render={function (props) {
          return (
            <City
              city={onFilter(props.match.params.cityId)}
              //  params={props.match.params.cityId}
            />
          );
        }}
      ></Route>
    </div>
  );
}

export default App;
