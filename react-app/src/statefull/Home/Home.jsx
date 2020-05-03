import React, { useState, useEffect } from 'react';
import './Home.scss';
import List from '../../stateless/list/List';
import core from '../../services/core';
export default function Home() {

    const [list, setList] = useState([]);

    useEffect(() => {
        core.getList().then(data => {
            setList([...data]);
        });
    }, []);


    return <><div className="div">List</div><List list={list} /></>;
}