export type Styles = {
    header: string,
    link: string,
    list: string,
    nav: string,
    item: string,
    container: string,
    hamburger: string,
    active: string,
    open: string,
};

export type ClassName = keyof Styles;

declare const s: Styles;

export default s;