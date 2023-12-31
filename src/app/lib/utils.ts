import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function classnames(...inputs:ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function chatHrefConstructor(id1:string, id2: string) {
    const sortIds = [id1,id2].sort()
    return `${sortIds[0]}--${sortIds[1]}`
}