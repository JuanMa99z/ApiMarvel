import { useState } from "react"
import React from "react";
import MainCharacters from "./MainCharacters";
import MainComic from "./MainComic";
import NavMarvel from "./SearchNav/NavMarvel";
import NavMarvelComic from "./SearchNav/NavMarvelComic";

function CharactersPages(){
    const [searchInput, setSearchInput] = useState("")
  
    return (
      <div>
        <NavMarvel searchInput={searchInput} setSearchInput={setSearchInput} />
        <MainCharacters searchInput={searchInput}/>
      </div>
    )
  }

  function ComicPages(){
    const [searchInputComic, setSearchInputComic] = useState("")

    return(
        <div>
            <NavMarvelComic searchInputComic={searchInputComic} setSearchInputComic={setSearchInputComic} />
            <MainComic searchInputComic={searchInputComic} />
        </div>
    )
  }

class Characters extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        mostrarMainCharacters: false,
        mostrarMainComic: false
      };
    }
  
    charactersPage() {
      this.setState({ mostrarMainCharacters: true });
    }
    comicPage() {
        this.setState({ mostrarMainComic: true });
      }
  
    render() {
      if (this.state.mostrarMainCharacters) {
        return <CharactersPages/>;
      }
      if (this.state.mostrarMainComic) {
        return <ComicPages />;
      }

  
      return (
        <>
      <div className="container-fluid">
  <div className="row">
    <div className="BoxContainerCharacters col-12 col-md-12">
      <div className="characters" onClick={() => this.charactersPage()}>
        <h1 className="MainText">characters</h1>
      </div>
    </div>
    <div className="BoxContainerComics col-12 col-md-12">
      <div className="comics" onClick={() => this.comicPage()}>
        <h1 className="MainText">comics</h1>
      </div>
    </div>
  </div>
</div>
        </>
      );
    }
  }

  export default Characters;
  