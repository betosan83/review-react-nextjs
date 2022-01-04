import Filho from './Filho'

export default function Pai(props) {
    return (
        <div>
            <Filho nome='Beto' familia={props.familia}></Filho>
        </div>
    )
}