import React from 'react';
import './MasteryCard.css';
import { paramToChampion } from '../../../shared/utility';

const profileCard = (props) => {

    return (
        <div className='card-content'>
            <div className='card-header'>
                <img className='card-portrait' src={paramToChampion(props.id,'icon')} alt='champion portrait' />
                <div className='card-champ-desc'>
                    <p className='card-name'>{paramToChampion(props.id, 'name')}</p>
                    <p className='card-champ-title'>{paramToChampion(props.id, 'title')}</p>
                </div>
            </div>
            
            <div className='card-children'>
            <p>Mastery level: {props.championLevel}</p>
            <p>Mastery points: {props.championPoints}</p>
            </div>
        </div>
    );
}

export default profileCard