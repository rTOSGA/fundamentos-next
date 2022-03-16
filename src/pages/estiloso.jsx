import styles from '../styles/estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estiloso() {
    return(
        <Layout titulo="Exemplo de CSS modularizado">
            <div className={styles.roxo}>
                <h1>Estilo usando Módulos CSS</h1>
            </div>
        </Layout>
        
    )
}