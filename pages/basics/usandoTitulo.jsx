import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
    return (
        <div>
            <Titulo principal="Página de cadastro"
                    secundario="Incluir, alterar"
                    pequeno>
            </Titulo>
            <Titulo principal="Página de cadastro"
                    secundario="Incluir, alterar"
                    pequeno={false}>
            </Titulo>
        </div>
    )
}