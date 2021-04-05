export type Styles = {
    brand: string,
    logo: string,
    title: string,
    subtitle: string,
    block: string
};

export type ClassName = keyof Styles;

declare const s: Styles;

export default s;