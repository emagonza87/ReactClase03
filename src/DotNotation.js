import React from 'react';

function DotNotation(props) {
    return (
        <div>
            <h1>{props.nombre}</h1>
            <h1>{props.apellido}</h1>
            <h1>{props.edad}</h1>
        </div>
    );
}

export default DotNotation;