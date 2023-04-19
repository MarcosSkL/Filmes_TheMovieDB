import { Card, Col, Row } from 'react-bootstrap'
import Pagina from '../../components/Pagina'
import apiMovies from '../../services/apiMovies'

const Detalhes = ({ filme }) => {

    return (
        <Pagina titulo={filme.title}>
            <Row className='md-5'>
                <Col>
                    <Card.Img style={{ Width: '100%', height: '100%' }} variant="top" src={'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path} />
                    
                </Col>
            </Row>
        </Pagina>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiMovies.get('/movie/' + id)
    const filme = resultado.data

    return {
        props: { filme }
    }
}