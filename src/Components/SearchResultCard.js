import React, { useState, useEffect } from "react";

//<SearchResultCard searchResultCard = result>
//This will take a result annd give

/*  -name
    -birth_year
    -eye_color
    -gender
    -hair_color
    -height
    -mass
    -skin_color
    -homeworld - this will be a url
    -films - this will be a url array
    -species - array
    -starships - array
    -vehicles - array */

export default function SearchResultCard(props) {
  //adding hook
  const [homeWorld, setHomeWorld] = useState("");
  const [films, setFilms] = useState("");
  const [species, setSpecies] = useState("");
  const [starships, setStarships] = useState("");
  const [vehicles, setVehicles] = useState("");

  //typeOfArray can be "films", "species", "starships", "vehicles"
  async function createStringFromArray(array, typeOfArray) {
    //put array of urls in here
    if (typeOfArray == "films") {
      let res;
      let data;
      let filmString = "";
      array.map(async (url) => {
        res = await fetch(url);
        data = await res.json();
        if (filmString === "") {
          filmString = await data.title;
        } else {
          filmString = filmString + ", " + (await data.title);
        }
        setFilms(filmString);
      });
    } else if (typeOfArray == "species") {
      if (array.length) {
        let res;
        let data;
        let speciesString = "";
        array.map(async (url) => {
          res = await fetch(url);
          data = await res.json();
          if (speciesString === "") {
            speciesString = await data.name;
          } else {
            speciesString = speciesString + ", " + (await data.name);
          }
          setSpecies(speciesString);
        });
      }
    } else if (typeOfArray == "starships") {
      if (array.length) {
        let res;
        let data;
        let starshipsString = "";
        array.map(async (url) => {
          res = await fetch(url);
          data = await res.json();
          if (starshipsString === "") {
            starshipsString = await data.name;
          } else {
            starshipsString = starshipsString + ", " + (await data.name);
          }
          setStarships(starshipsString);
        });
      }
    } else if (typeOfArray == "vehicles") {
      if (array.length) {
        let res;
        let data;
        let vehiclesString = "";
        array.map(async (url) => {
          res = await fetch(url);
          data = await res.json();
          if (vehiclesString === "") {
            vehiclesString = await data.name;
          } else {
            vehiclesString = vehiclesString + ", " + (await data.name);
          }
          setVehicles(vehiclesString);
        });
      }
    }
  }

  //similar to componentDidMount apparently
  useEffect(() => {
    updateExtras();
  }, []); //with empty array, this will only run once

  //typeOfArray can be "films", "species", "starships", "vehicles"
  async function updateExtras() {
    //update homeworld
    //homeworld url will be in props
    const homeWorldURL = props.searchResultCard.homeworld;
    const homeWorldRes = await fetch(homeWorldURL);
    const homeWorldData = await homeWorldRes.json();
    setHomeWorld(await homeWorldData.name);

    createStringFromArray(props.searchResultCard.films, "films");
    createStringFromArray(props.searchResultCard.species, "species");
    createStringFromArray(props.searchResultCard.starships, "starships");
    createStringFromArray(props.searchResultCard.vehicles, "vehicles");
  }

  return (
    <div className="card text-white bg-warning mb-3 m-3">
      <div className="card-header">
        <h4>{props.searchResultCard.name}</h4>
      </div>
      <div className="card-body">
        <h5 className="card-title">{"Film Appearances: " + films}</h5>
        <h5 className="card-title">
          {"Birth Year: " + props.searchResultCard.birth_year}
        </h5>
        <h5 className="card-title">{"Home World: " + homeWorld}</h5>
        <div>
          {props.searchResultCard.species.length ? (
            <h5 className="card-title">{"Species: " + species}</h5>
          ) : (
            ""
          )}
        </div>
        <h5 className="card-title">
          {"Eye Color: " + props.searchResultCard.eye_color}
        </h5>
        <h5 className="card-title">
          {"Gender: " + props.searchResultCard.gender}
        </h5>
        <h5 className="card-title">
          {"Hair Color: " + props.searchResultCard.hair_color}
        </h5>
        <h5 className="card-title">
          {"Height: " + props.searchResultCard.height + " cm"}
        </h5>
        <h5 className="card-title">
          {"Mass: " + props.searchResultCard.mass + " kg"}
        </h5>
        <h5 className="card-title">
          {"Skin Color: " + props.searchResultCard.skin_color}
        </h5>
        <div>
          {props.searchResultCard.starships.length ? (
            <h5 className="card-title">{"Starships: " + starships}</h5>
          ) : (
            ""
          )}
        </div>
        <div>
          {props.searchResultCard.vehicles.length ? (
            <h5 className="card-title">{"Vehicles: " + vehicles}</h5>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
