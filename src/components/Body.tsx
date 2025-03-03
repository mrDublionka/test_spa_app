import {CommonPropsInterface} from "@/typing/common_props.ts";
import st from "@/styles/MainBody.module.scss"
import React from "react";
import clsx from 'clsx';
import ProductsGrid from "@/components/ProductsGrid.tsx";
import FeedbackForm from "@/components/FeedbackForm.tsx";


interface Props {
    common_props: CommonPropsInterface
}





const Body:React.FC<Props> = ({common_props}) => {


    return (
        <div className={st.main_body}>
            <div className={clsx(st.main_body__left, st.main_body__sides)}>
                <ProductsGrid />
            </div>

            <div className={clsx(st.main_body__right, st.main_body__sides)}>
                <FeedbackForm />
            </div>
        </div>
    )
}

export default Body