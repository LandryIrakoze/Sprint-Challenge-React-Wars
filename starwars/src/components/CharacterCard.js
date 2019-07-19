import React from 'react';
import { useState, useEffect } from 'react';
import Data from './Data';
import { Container, Card } from './Styles';

function CharacterCard(props) {
    return (
        <Card>
            <p>{props.info.name}</p>
            <p>birth year: {props.info.birth_year}</p>
            <p>mass: {props.info.mass}</p>
            <p>{props.info.hair_color}</p>
            <p>{props.info.skin_color}</p>
        </Card>
    )
}

export default CharacterCard;