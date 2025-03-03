import {ReactNode} from "react";

export default interface GridData {
    name: string
    label: 'sunny_orange' | 'deep_blue' | 'floral_green' | 'interstellar_gray'
    img: ReactNode
}