import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import CardMarvel from "./Cards/CardMarvel";

function MainCharacters({ searchInput }) {
    const [card, setCard] = useState([]);
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        getCardsMarvel();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchInput]);
       const getCardsMarvel = async () => {
        setLoading(true)
        let url
        if (searchInput !== '') {
            url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${searchInput}&ts=1000&apikey=a00b1731d90037b001eea36719c623aa&hash=7ff1e7c9c4aed14accaa2e8806447d7b&limit=20`;
        } else {
            url = `https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=a00b1731d90037b001eea36719c623aa&hash=7ff1e7c9c4aed14accaa2e8806447d7b&limit=20`;
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
                    {card.map(function (element) {
                        return (<CardMarvel card={element} key={'CardM_' + element.id} />)
                    })}
                </Row>
            </Container>)}
        </div>
    )
}

export default MainCharacters;