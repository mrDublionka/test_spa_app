import st from "@/styles/Header.module.scss"
import {strings} from "@/utils/constants.tsx";
import {CommonPropsInterface} from "@/typing/common_props.ts";
import {Sides} from "@/typing/enums.ts";

interface Props {
    common_props: CommonPropsInterface
}

const Header:React.FC<Props> = ({common_props}) => {

    const {active_side} = common_props

    return (
        <div className={st.header}>
            <div className={st.header__left}>
                <span className={st.header__side_label}>
                    {strings[Sides.Products]}
                </span>
            </div>

            <div className={st.header__right}>
                <span className={st.header__side_label}>
                    {strings[Sides.Feedback]}
                </span>
            </div>
        </div>
    )
}

export default Header