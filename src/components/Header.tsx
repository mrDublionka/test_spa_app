import st from "@/styles/Header.module.scss"
import {strings} from "@/utils/constants.tsx";
import {CommonPropsInterface} from "@/typing/common_props.ts";
import {Sides} from "@/typing/enums.ts";
import clsx from "clsx";

interface Props {
    common_props: CommonPropsInterface
}

const Header:React.FC<Props> = ({common_props}) => {

    const {active_side, active_handler} = common_props

    return (
        <>

            <div className={clsx(st.header, st.desktop)}>
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

            <div className={clsx(st.header, st.mobile, st[active_side])}>
                <button
                    className={clsx(
                        st.header__left,
                        st.header__sides,
                        active_side===Sides.Products && st.active
                    )}
                    onClick={() => active_handler(Sides.Products)}
                >
                    <span className={st.header__side_label}>
                        {strings[Sides.Products]}
                    </span>
                </button>

                <button
                    onClick={() => active_handler(Sides.Feedback)}
                    className={clsx(
                        st.header__right,
                        st.header__sides,
                        active_side===Sides.Feedback && st.active
                    )}
                >
                    <span className={st.header__side_label}>
                        {strings[Sides.Feedback]}
                    </span>
                </button>
            </div>
        </>
    )
}

export default Header