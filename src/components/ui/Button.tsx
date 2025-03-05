import React, {ReactNode} from "react";
import styles from "@/styles/UI.module.scss"
import clsx from "clsx";


interface Props {
    disabled?:boolean
    variant:"primary" | "secondary"
    children:ReactNode
    className?:string
    onClick?(e?:any):void
    type?:"button" | "submit"
}

const Button:React.FC<Props> = (props) => {

    const {
        disabled,
        variant,
        children,
        className,
        onClick,
        type
    } = props




    return (
        <button
            onClick={onClick}
            disabled={disabled}
            type={type}
            className={clsx(
                styles.standart_button,
                className,
                styles[variant]
            )}
        >
            {children}
        </button>
    )
}

export default Button