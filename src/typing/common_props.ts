import {Sides} from "@/typing/enums.ts";

export interface CommonPropsInterface {
    active_side: Sides,
    active_handler(x:Sides):void
}