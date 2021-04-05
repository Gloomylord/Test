export type Styles = {
    home: string,
    title: string,
    subtitle: string,
    button: string,
    more: string,
    container: string,
    down: string
};

export type ClassName = keyof Styles;

declare const s: Styles;

export default s;