import React from "react";
import SearchResultCard from "./SearchResultCard";

//might be able to get away a
//<SearchResultDisplay searchResult=this.state.searchResult>
export default function SearchResultDisplay(props) {
  //the props to be passed here are search results

  //no search results found
  if (props.searchResult.count === 0) {
    return <h2 className="NoResult">No results found</h2>;
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
