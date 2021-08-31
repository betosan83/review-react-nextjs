import React from 'react'
export default function fragment() {
    return (
        //Não é possível criar dois elementos JSX adjacentes.
        <React.Fragment>
            <h1>Título</h1>
            <h2>Subtítulo</h2>
        </React.Fragment>

    )
}