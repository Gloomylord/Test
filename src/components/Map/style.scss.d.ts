export type Styles = {
    container: string,
    map: string,
};

export type ClassName = keyof Styles;

declare const s: Styles;

export default s;