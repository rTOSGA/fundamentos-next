import Layout from "../components/Layout"

export default function Jsx() {
    const titulo = <h1>JSX é um conceito fundamental</h1>

    function subtitulo(params) {
        return <h2>{"muito fixe" .toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Entendendo o JSX">

        
        <div>
            {titulo}
            {subtitulo()}
            <p>
                {JSON.stringify({nome: "Ricardo"})}
            </p>
        </div>
        </Layout>
    )
}