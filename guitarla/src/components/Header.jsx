//importo Readt para no crar divs innecesarios para poder utlilizar mas de una etiqueta html
//import React from "react"

export default function Header (){

// const name = "Abdullah"
// const total = 100

return (
    //Dentro del return no puedo llamar a 2 etiquetas html pero si puedo llamar una y genreal y llamar a otras dentro de ella, por ejemplo llamo solo una vez al div pero dentro de el llamo varias etiquetas html
    //React.Fragment para no crar divs innecesarios y llamarlo ahi dentro
    //La opcion mas eficaz es poner lo siguiente "<> </> y asi se ahorrar a escribiir codigo innecesario y escribir las importaciones"
    <>
     {/* <h3>El nombre es {name} y viene de la variable const</h3>
   <h4> el valor total es de {total}</h4> */}
   <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                        <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            <p className="text-center">El carrito esta vacio</p>
                            <table className="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img className="img-fluid" src="./public/img/guitarra_02.jpg" alt="imagen guitarra" />
                                        </td>
                                        <td>SRV</td>
                                        <td className="fw-bold">
                                                $299
                                        </td>
                                        <td className="flex align-items-start gap-4">
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                            >
                                                -
                                            </button>
                                                1
                                            <button
                                                type="button"
                                                className="btn btn-dark"
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="btn btn-danger"
                                                type="button"
                                            >
                                                X
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <p className="text-end">Total pagar: <span className="fw-bold">$899</span></p>
                            <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    </>


)

}