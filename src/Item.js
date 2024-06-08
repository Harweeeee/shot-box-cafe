import React from 'react'

export default function Item(props) {
    return (
        <span>
            {props.name}{' '}
            <img src={props.src} alt={props.alt} className="productIcon" />
        </span>
    )
}
