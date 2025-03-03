import st from "@/styles/MainBody.module.scss";
import clsx from "clsx";
import {getSafeString} from "@/utils/util_functions.ts";
import {grid_data} from "@/utils/constants.tsx";
import GridData from "@/typing/prod_interface.ts";

const ProductsGrid = () => {
    return (
        <div className={st.main_body__grid}>
            {grid_data.map((x:GridData) => {

                return (
                    <button className={clsx(st.grid_item, st[x.label])}>
                        {x.img}

                        <div className={st.inf}>
                            <h3>{x.name}</h3>

                            <span>{getSafeString(x.label)}</span>
                        </div>
                    </button>
                )
            })}
        </div>
    )
}

export default ProductsGrid