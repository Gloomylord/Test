export type Styles = {
    container: string,
    mapContainer: string,
    map: string,
    title: string,
    subtitle: string,
    mapTitle: string,
    form: string,
    inputs: string,
    contact : string,
    input: string,
    message: string,
    button: string
};

export type ClassName = keyof Styles;

declare const s: Styles;

export default s;