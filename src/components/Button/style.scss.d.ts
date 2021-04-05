export type Styles = {
    button: string,
};

export type ClassName = keyof Styles;

declare const s: Styles;

export default s;