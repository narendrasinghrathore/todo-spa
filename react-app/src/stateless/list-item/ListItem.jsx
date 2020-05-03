import React from 'react';
import './ListItem.scss';
export default function ListItem(props) {
    return <p className="p">{props.item.title}</p>
}