import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiMovies from '../../services/apiMovies'

const index = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        apiMovies.get("/movie/popular").then(resultado => {
            setFilmes(resultado.data.results)
        })
    }, [])

    return (

        <Pagina titulo="filmes">

            <Row className="px-5 mx-5">
                {filmes.map(item => (
                    <Col key={item.id} md={3} className="mb-4" >
                        <Card>
                            <Card.Img style={{ Width: '100%', height: '410px' }} variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <p>Lançamento: <strong>{item.release_date}</strong></p>
                                <div className="d-flex flex-column align-items-end">
                                    <Button variant="primary text-white" href="#">Detalhes</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}

export default index

