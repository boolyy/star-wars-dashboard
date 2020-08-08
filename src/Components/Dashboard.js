import React from "react";
import SearchResultDisplay from "./SearchResultDisplay";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: {},
      loading: true,
      search: "", //this is what the user types in the search bar
      userSearchedOnce: false, //if user hasn't searched once then post some instructions
    };
    this.handleChange = this.handleChange.bind(this);
  }
  /* 
  This needs a search bar, User can search and a list of people will show.
  They can choose one. If search does not return anything, then it will say no result found
  */

  //create method for populating search Result
  async createSearchResult(search) {
    if (search === "") {
      this.setState({ searchResult: "", loading: false }); //assigns the whole response array to searchResult
    } else {
      const baseURL = "https://swapi.dev/api/people/?search="; //this is the base url used by SWAPI
      const searchURL = baseURL + search;
      const res = await fetch(searchURL);
      const data = await res.json();
      this.setState({ searchResult: data, loading: false }); //assigns the whole response array to searchResult
    }
  }

  handleChange(event) {
    this.setState({ search: event.target.value, userSearchedOnce: true });
    this.createSearchResult(this.state.search);
  }
  /* 
    Person Object returns these properties that I will use
    -name
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
    -vehicles - array
*/

  render() {
    //create result where it says no results found

    return (
      <div className="container">
        <h1 className="yellow Center m-4">
          🌌 Star Wars Character Database 🚀
        </h1>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <div className="Center">
          {!this.state.userSearchedOnce ? (
            <h2 className="yellow m-3">
              Type in the name of a character for some info on them!
            </h2>
          ) : this.state.loading || !this.state.searchResult ? (
            <div
              className="spinner-border text-light m-4"
              style={{ width: 3 + "em", height: 3 + "em" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <div>
              <SearchResultDisplay searchResult={this.state.searchResult} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
