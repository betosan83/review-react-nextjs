import lista from '../../data/listaProduto'

export default function repeticao2() {
    function renderLinhas() {
        return lista.map((produto => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        }))
    }

    return (
        <div>
            <table style={{
                border: '1px solid #000'
            }}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderLinhas()}
                </tbody>
            </table>
        </div>
    )
}