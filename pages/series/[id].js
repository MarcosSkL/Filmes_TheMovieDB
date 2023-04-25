import { Card, Col, Row } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiMovies from '../../services/apiMovies'
import Link from 'next/link'

const Series = ({ filme, atores, series }) => {

    return (
        <Pagina titulo={series.name}>
            <Row>
                <Col md={3}>
                    <Card.Img style={{ Width: '100%', height: '100%' }} variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.poster_path} />

                </Col>
                <Col md={9}>
                    <h3>Sinopse</h3>
                    <p>{series.overview}</p>
                    <p><strong>Data de Lançamento: </strong>{series.first_air_date}</p>
                    <p><strong>Nota: </strong>{series.vote_average}</p>
                

                </Col>
            </Row>

            <h3 className='pt-5'>Atores</h3>

            <Row className='p-3'>

                {atores.cast.map(item => (
                    <Col md={2}>


                        <img style={{ Width: '500px', height: '200px' }} variant="top" src={'https://image.tmdb.org/t/p/w500/' + item.profile_path} />
                        <Link href={'/actors/' + item.id} style={{ textDecoration: "none"}} ><p><em>{item.name}</em></p></Link>
                    </Col>

                ))}



            </Row>
        </Pagina>
    )
}

export default Series

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiMovies.get('/movie/' + id + '?language=pt-BR')
    const ator = await apiMovies.get('/movie/' + id + '/credits' + '?language=pt-BR')
    const seriesAtor = await apiMovies.get('/tv/' + id + '/credits?language=pt-BR')

    const filme = resultado.data
    const atores = ator.data
    const series = seriesAtor.data

    return {
        props: { filme, atores, series }
    }
}