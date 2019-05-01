import React from 'react';
import ReactDom from 'react-dom';
import App3 from './App3';
import Ajax from './Ajax';
import DotNotation from './DotNotation';
import BarraNavegacion from './BarraNavegacion';

let obj = {
    nombre: 'Julio',
    apellido: 'rivero',
    edad: 35
}

/*
ReactDom.render(<DotNotation {...obj} />, 
        document.getElementById('root'));
*/

ReactDom.render(<BarraNavegacion />, 
        document.getElementById('root'));

