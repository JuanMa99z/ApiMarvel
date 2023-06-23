import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import CardComic from "./Cards/CardComic";

function MainCharacters({ searchInputComic }) {
    const [comic, setCard] = useState([]);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        getComicMarvel();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchInputComic]);
       const getComicMarvel = async () => {
        setLoading(true)
        let url
        if (searchInputComic !== '') {
            url = `http://gateway.marvel.com/v1/public/comics?TitleStartWith=${searchInputComic}&ts=1000&apikey=a00b1731d90037b001eea36719c623aa&hash=7ff1e7c9c4aed14accaa2e8806447d7b&limit=20`;
        } else {
            url = `http://gateway.marvel.com/v1/public/comics?ts=1000&apikey=a00b1731d90037b001eea36719c623aa&hash=7ff1e7c9c4aed14accaa2e8806447d7b&limit=20`;
        }
        const response = await fetch(url)
        const data = await response.json()
        setCard(data.data.results)
        setLoading(false)
    }
    function LoadingCard() {
        return (
            <div className="spinnerContent">
                <Spinner animation="border" variant="light" role="status">
                </Spinner>
                <h1>CARGANDO...</h1>
            </div>
        );
    }

    return (

        <div className="contentCard">
            {isLoading ? (<LoadingCard />) : (<Container>
                <Row xs="auto">
                    {comic.map(function (element) {
                        return (<CardComic comic={element} key={'CardM_' + element.id} />)
                    })}
                </Row>
            </Container>)}
        </div>
    )
}

export default MainCharacters;