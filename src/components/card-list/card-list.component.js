import { Component } from 'react'
import Card from '../card/card.component';
import './card-list.styles.css';

// class Cardlist extends Component {
//     render() {
//         const { monsters } = this.props;
//         return (
//             <div>
//                 <div className='card-list'>
//                     {monsters.map(monster => {
//                         return <Card key={monster.id} monster={monster} />
//                     })}
//                 </div>
//             </div>
//         )
//     }
// }

const Cardlist = ({ monsters }) => {
    return (
        <div>
            <div className='card-list'>
                {monsters.map(monster => {
                    return <Card key={monster.id} monster={monster} />
                })}
            </div>
        </div>
    )
}

export default Cardlist;