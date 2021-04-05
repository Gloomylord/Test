export type Styles = {
    aboutUs: string,
    container: string,
    title: string,
    subtitle: string,
    card: string,
    cardImage: string,
    cardTitle: string,
    cardSubtitle: string,
    cardText: string,
    description: string,
    links: string,
    link: string,
    cards: string
};

export type ClassName = keyof Styles;

declare const s: Styles;

export default s;