import React from 'react';
import { Card, Name } from './Styles';

function CharacterCard(props) {
    return (
        <Card>
            <Name>{props.info.name}</Name>
            <p>birth year: {props.info.birth_year}</p>
            <p>mass: {props.info.mass}</p>
            <p>{props.info.hair_color}</p>
            <p>{props.info.skin_color}</p>
        </Card>
    )
}

export default CharacterCard;