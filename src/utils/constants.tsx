import Helicopter from "@/svg/Helicopter.tsx";
import Plane from "@/svg/Plane.tsx";
import Rocket from "@/svg/Rocket.tsx";
import UFO from "@/svg/UFO.tsx";
import GridData from "@/typing/prod_interface.ts";

export const strings = {
    products: 'Products',
    feedback: 'Feedback',
    name: 'Name',
    phone_number: 'Phone number',
    email: 'Email',
    message: 'Message',
    submit: 'Submit',

    my_product: 'MyProduct',
    my_product_plus: 'MyProduct Plus',
    my_product_pro: 'MyProduct Pro',
    my_product_ultra: 'MyProduct Pro',

    sunny_orange: 'Sunny Orange',
    deep_blue: 'Deep Blue',
    floral_green: 'Floral Green',
    interstellar_gray: 'Interstellar Grey',
}


export const grid_data:GridData[] = [
    {
        name:strings.my_product,
        label: 'sunny_orange',
        img: <Helicopter />
    },
    {
        name:strings.my_product_plus,
        label: 'deep_blue',
        img: <Plane />
    },
    {
        name:strings.my_product_pro,
        label: 'floral_green',
        img: <Rocket />
    },
    {
        name:strings.my_product_ultra,
        label: 'interstellar_gray',
        img: <UFO />
    },
    {
        name:strings.my_product,
        label: 'sunny_orange',
        img: <Helicopter />
    },
    {
        name:strings.my_product_plus,
        label: 'deep_blue',
        img: <Plane />
    },
    {
        name:strings.my_product_pro,
        label: 'floral_green',
        img: <Rocket />
    },
    {
        name:strings.my_product,
        label: 'sunny_orange',
        img: <Helicopter />
    },
    {
        name:strings.my_product_ultra,
        label: 'interstellar_gray',
        img: <UFO />
    },
]