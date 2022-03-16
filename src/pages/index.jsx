import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      heigh: '100vh'
    }}>
        <Navegador texto="Estiloso" destino="/estiloso"/>
        <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>
        <Navegador texto="JSX" destino="/jsx" cor="crimson"/>
        <Navegador texto="Navegação #01" destino="/navegacao" cor="green"/>
        <Navegador texto="Navegação #02" destino="/cliente/braga/23" cor="green"/>
        <Navegador texto="Navegação #03" destino="/estado" cor="pink"/>
        <Navegador texto="Integração com api #01" destino="/integracao_1" cor="yellow"/>
    </div>
  
  
  )
}