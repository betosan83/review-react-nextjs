import Lista from '../../components/Lista'
import Item from '../../components/Item'

export default function componenteComFilhos() {
    return(
        <div>
            <Lista>
                <Item content='Item 01'></Item>
            </Lista>
        </div>
    )
}