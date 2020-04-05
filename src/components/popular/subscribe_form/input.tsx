import React from 'react';

export default function(props: {
    type?: string,
    className?: string
}){
    return (
        <input
            className = {
                props.className ? `${props.className} "input_submit" ` : '"input_submit" '
            }
            type={
            props.type ? props.type : "text"
        }/>
    )
}