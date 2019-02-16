import React from 'react';

// const Button = (props) => (
//     <button onClick={props.onClick}>{props.children}</button>
// )

// export default Button;

const Button = ({
    onClick,
    children
}) => (
        <div>
            <button onClick={onClick}>{children}</button>
        </div>
    );

export default Button;