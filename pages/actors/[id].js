import React from "react";
import Pagina from "../../components/Pagina";
import apiMovies from "../../services/apiMovies";
import { Card, Col, Row } from "react-bootstrap";

const Actors = ({ filmesAtores, infAtores, imgAtores }) => {
    return (
        <Pagina titulo={infAtores.name}>
            <Row>
                <Col md={3}>
                    <Card.Img style={{ Width: '100%', height: '100%' }} variant="top" src={'https://image.tmdb.org/t/p/w500/' + infAtores.profile_path} />

                </Col>
                <Col md={9}>
                    <h3>Biografia</h3>
                    <p>{infAtores.biography}</p>
                    <p><strong>Data de Nascimento: </strong>{infAtores.birthday}</p>
                    <p><strong>Nascido em: </strong>{infAtores.place_of_birth}</p>
                    <p><strong>Departamento: </strong>{infAtores.known_for_department}</p>

                </Col>
            </Row>
        </Pagina>
    );
};

export default Actors;

export async function getServerSideProps(context) {

    const id = context.params.id

    const infAtor = await apiMovies.get('/person/' + id + '?language=pt-BR')
    const ImgAtor = await apiMovies.get('/person/' + id + '/images?language=pt-BR')
    const AtorFilmes = await apiMovies.get('/person/' + id + '/movie_credits?language=pt-BR')

    const filmesAtores = AtorFilmes.data
    const infAtores = infAtor.data
    const imgAtores = ImgAtor.data
   

    return {
        props: { filmesAtores, infAtores, imgAtores },
    }
}