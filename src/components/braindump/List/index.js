import React from 'react'
import styles from './index.css';

const List = ({length, items}) => {
    return (
        <div className="braindump-container">

<ol key={length}>
    {items.map(_i => <li>{_i}</li>)}
</ol>
</div>
    )
}

export default List
