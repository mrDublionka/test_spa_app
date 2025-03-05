import Header from "@/components/Header.tsx";
import {Sides} from "@/typing/enums.ts";
import {useState} from "react";
import {CommonPropsInterface} from "@/typing/common_props.ts";
import Body from "@/components/Body.tsx";


const MainComponent = () => {
    const storage_value = 'active_side'

    let default_active_side = localStorage.getItem(storage_value) as Sides | null || Sides.Products;

    if (default_active_side !== Sides.Feedback && default_active_side !== Sides.Products) {
        default_active_side = Sides.Products;
    }

    const [active_side, set_active_side] = useState<Sides>(default_active_side)


    const active_handler = (x:Sides) => {
        set_active_side(x)
        localStorage.setItem(storage_value, x)
    }

    const common_props:CommonPropsInterface = {active_side, active_handler}

    return (
        <main>
            <Header common_props={common_props} />
            <Body common_props={common_props}/>
        </main>
    )
}

export default MainComponent