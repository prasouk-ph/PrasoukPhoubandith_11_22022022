import React from 'react';
import './Tag.css';

function Tag({name}: {name: string}) {
    return (
    <div className='tag'>
        <h2 className='tag-title'>{name}</h2>
    </div>
    );
}

export default Tag;