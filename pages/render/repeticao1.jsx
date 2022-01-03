export default function repeticao1() {
    const listaAprovados = [
        'João',
        'Beto'
    ]

    function renderList() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}