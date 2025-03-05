import {CommonPropsInterface} from "@/typing/common_props.ts";
import st from "@/styles/MainBody.module.scss"
import React from "react";
import clsx from 'clsx';
import ProductsGrid from "@/components/ProductsGrid.tsx";
import FeedbackForm from "@/components/FeedbackForm.tsx";
import {Sides} from "@/typing/enums.ts";


interface Props {
    common_props: CommonPropsInterface
}





const Body:React.FC<Props> = ({common_props}) => {

    const {active_side} = common_props

    return (
        <div className={st.main_body}>
            <div
                className={clsx(
                    st.main_body__left,
                    st.main_body__sides,
                    active_side === Sides.Products && st.active
                )}
            >
                <ProductsGrid />
            </div>

            <div
                className={clsx(
                    st.main_body__right,
                    st.main_body__sides,
                    active_side === Sides.Feedback && st.active
                )}>
                <FeedbackForm />
            </div>
        </div>
    )
}

export default Body