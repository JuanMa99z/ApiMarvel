import Container from 'react-bootstrap/Container';

function NavMarvel({ searchInput, setSearchInput }) {
    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    return (
        <> 
                <Container>
                    <section className="search">
                        <input type="search"
                            placeholder="Buscar Personaje"
                            className="form-control me-2" 
                            aria-label="Search"
                            autoFocus
                            value={searchInput}
                            onChange={handleChange} />
                    </section>
                </Container>
        </>
    );
}

export default NavMarvel;
