import React from 'react';

export default function (props: {
    children?: Array<any>
}) {
    return (
        <section className = "block__wrapper">
            {props.children?.map((value, index:number) => {
                return <article key = { index } className = "block__element">{value}</article>
            })}
        </section>
    )
}