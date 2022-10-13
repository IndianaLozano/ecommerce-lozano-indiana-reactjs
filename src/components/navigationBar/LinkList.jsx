import React from 'react';
import { Link } from 'react-router-dom';

const LinkList = () => {
    return (
        <ul className="nav-list">
            <Link to="/">All products</Link>
            <Link to="/category/cuadros">Adventure</Link>
            <Link to="/category/macetas">Survival</Link>
        </ul>
    );
};

export default LinkList;