import React from "react";
import SearchResultCard from "./SearchResultCard";

//might be able to get away a
//<SearchResultDisplay searchResult=this.state.searchResult>
export default function SearchResultDisplay(props) {
  //the props to be passed here are search results

  //no search results found
  if (props.searchResult.count == 0) {
    return <h2 className="NoResult">No results found</h2>;
  }

  //one search result found
  if (props.searchResult.count == 1) {
    return (
      <div>
        {/*  -name
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
    -vehicles - array */}
        <SearchResultCard searchResultCard={props.searchResult.results[0]} />
      </div>
    );
  }

  //if search result found, display list of possible people
  return (
    <div className="container">
      {props.searchResult.results.map((result) => (
        <div>
          <SearchResultCard searchResultCard={result} />
        </div>
      ))}
    </div>
  );
}
