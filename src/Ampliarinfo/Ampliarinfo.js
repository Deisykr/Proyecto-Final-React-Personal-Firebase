import { useLocation } from "react-router-dom"
export function Ampliarinfo(){

    let datosrecibidos=useLocation()

    let producto=datosrecibidos.state.productoSeleccionado
    console.log(producto)

    return(
        <>
        <h1>{producto.nombre}</h1>
     </>
    ) 
   
}