export type Styles = {
    portfolio: string,
    container: string,
    title: string,
    subtitle: string,
    navFilter: string,
    button: string,
    data: string,
    tools: string,
    tool: string,
    inner: string,
    toolLink: string,
    back: string,
    button: string,
    icon: string,
    selected: string,
    open: string,
    close: string,
};

export type ClassName = keyof Styles;

declare const s: Styles;

export default s;