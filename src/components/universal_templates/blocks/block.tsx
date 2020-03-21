import React from 'react';

export default function (props: {
    children?: any
}) {
    return (
        <section className="block__element_indent">
            { props.children }
        </section>
    )
}