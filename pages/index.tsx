import Image from 'next/image'
import { Inter } from 'next/font/google'
import Cabecalho from "../components/Cabecalho";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { Container } from "react-bootstrap";
import Pagina from "../components/Pagina";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Pagina titulo="Pagina Inicial">
        <Container>
          <h1>Hello World!</h1>
          <p>Paragrafo 1</p>
          <p>Paragrafo 2</p>
          <p>Paragrafo 3</p>
        </Container>
      </Pagina>
    </>
  )
}
