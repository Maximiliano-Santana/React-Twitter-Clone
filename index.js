import React from "https://esm.sh/react@18.2.0"//Se importa react dese la web sin tener que descargar nada

import ReactDom from "https://esm.sh/react-dom@18.2.0/client" 


const appDomElement = document.getElementById('App'); //Se importa el div donde se va renderizar el componente

//En react vamos a generar un arbol de elementos, toda la aplicacion sera hecha a partir de componentes y a continuacion crearemos la base de toda la app
const root = ReactDom.createRoot(appDomElement);

const button = React.createElement('button', {'data-id': 1}, 'Like');  //Se crea un elemento de react (elemento, atributos, texto)
const button1 = React.createElement('button', {'data-id': 2}, 'Like'); 
const button2 = React.createElement('button', {'data-id': 3}, 'Like'); 

const App = React.createElement(React.Fragment, null, [button, button1, button2]) //Como no podemos renderizar mas de un elemento a la vez en root.render, se puede arreglar envolviendo los elementos dentro de uno unico a renderizar. Para no envolverlo con un elemento que no queremos en el html, React tiene un componente propio para hacer esta labor con React.Fragment.

root.render(App); //Esto renderiza el valor que se le pase y por eso existen los elementos de react.

//Este codigo anterior es comlejo y no llega a ser declarativo, por lo que etamos todo el rato creando objeto por objeto y para evitar esto existe JSX, que es una extension de ECMAScript basada en XML y nos permite crear de forma declarativa los elementos y la interfaz que se quiere crear de la siguiente manera:

//En JSX esto seria exactamente lo mismo que todo el codigo anterior y de ahi es la magia que esta ocurriendo por dentras. De estas transformaciones se encargan herramientas como SWC o Babel. Estos transpilan el codigo de JSX a Javascript puro, por lo que lo anterior se hace de forma automatica y nosotros solo nos preocupamos por escribir en JSX.
{/* <React.Fragment>
    <button data-id="1"></button>
    <button data-id="2"></button>
    <button data-id="3"></button>
</React.Fragment> */}

//Sobre JSX cosas que hay que saber 

//Cuando pones entre llaves algo estas diciendo quiero que evalues esta expresion, por lo tanto solo expresiones y no declaraciones, o sea cosas que devuelvan un valor (un if al ser una declaracion no se puede).
//puede haber expreciones y funciones, por ejemplo:
// const name = 'Max';
// <h1>Hola {name}</h1> //poniendo la constante entre llaves 
// <h2>Numero aleatorio {Math.random()}</h2> 

//Para especificar atributos es muy parecido a como lo hacemos en html, como en javascript y no html, los atributos se utilizan como si fuesen camellcase
{/* <button data-id=""></button> */}







// const button = document.querySelector('button');

// button.addEventListener('click', ()=>{    
    
//     const id = button.getAttribute('data-id');
    
//     if(button.classList.contains('liked')){
//         button.classList.remove('liked');
//         button.innerText = 'Like'
//     } else {
//         button.classList.add('liked');
//         button.innerText = 'Remove Like'
//     }
// })

