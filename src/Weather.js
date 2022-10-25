import React from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  let Form = (
    <form onSubmit={changeForm}>
      <input type="search" onChange={changeCity} />
      <input type="submit" value="Search" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {Form}
        <ul className="showMe">
          <li>Temperature :{Math.round(temperature)} °C</li>
          <li>Wind : {Math.round(wind)} km/h</li>
          <li>Description :{description}</li>
          <li>Humidity :{Math.round(humidity)} %</li>
          <li>
            <img src={icon.Icon} alt={setDescription.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return Form;
  }
}
