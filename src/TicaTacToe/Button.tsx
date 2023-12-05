import React from "react";

interface ButtonProps {
    text: string,
    onClickHandler: () => void
    className?: string,
    disabled?: boolean,
}

const Button: React.FC<ButtonProps> = ({text, onClickHandler, className, disabled}) => {
    return (<button onClick={onClickHandler} className={className} disabled={disabled}>{text}</button>)
}

export default Button;