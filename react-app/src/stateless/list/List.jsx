import React from 'react';
import './List.scss';
import ListItem from '../list-item/ListItem';
export default function List(props) {
    const list = props.list || [];
    const items = list.map((item) => <ListItem key={item.id} item={item} />);
    return <section className="section">{items}</section>

}