import Header from "@/components/Header.tsx";
import {Sides} from "@/typing/enums.ts";
import {useState} from "react";
import {CommonPropsInterface} from "@/typing/common_props.ts";
import Body from "@/components/Body.tsx";


const MainComponent = () => {

    const [active_side, set_active_side] = useState<Sides>(Sides.Products)

    const active_handler = (x:Sides) => {
        set_active_side(x)
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