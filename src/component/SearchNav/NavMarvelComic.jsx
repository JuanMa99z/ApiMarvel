import Container from 'react-bootstrap/Container';

function NavMarvelComic({ searchInputComic, setSearchInputComic }) {
    const handleChanges = (e) => {
        setSearchInputComic(e.target.value)
    }
    return (
        <> 
                <Container>
                    <section className="search">
                        <input type="search"
                            placeholder="Buscar Comics"
                            className="form-control me-2" 
                            aria-label="Search"
                            autoFocus
                            value={searchInputComic}
                            onChange={handleChanges} />
                    </section>
                </Container>
        </>
    );
}

export default NavMarvelComic;