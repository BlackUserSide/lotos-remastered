import {CHANGE_HEADER_LINK} from "./actionConst";

export  const changeActiveLink = (activeLink: string) => {
    return {
        type: CHANGE_HEADER_LINK,
        payload: activeLink
    }
}