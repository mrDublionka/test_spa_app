import {strings} from "@/utils/constants.tsx";

export const getSafeString = (key: string): string  => {
    const format_key = key?.split(' ')?.join('_')
    if (key in strings ) {
        return strings[key as keyof typeof strings];
    }

    if (format_key in strings){
        return strings[format_key as keyof typeof strings]
    }

    return "-";
}
