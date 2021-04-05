import React, {useState, useCallback, useMemo, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import cn from "classnames";
import Button from "../Button";
import s from './style.scss';

type designType = 'web' | 'graphic' | 'flat';

interface IDesign {
    type: "all" | designType,
    text: string,
}

const ArrayDesign: Array<IDesign> = [
    {text: "all", type: 'all'},
    {text: "web design", type: 'web'},
    {text: "graphic design", type: 'graphic'},
    {text: "flat design", type: 'flat'}
];

interface ITool {
    type: designType,
    url: string,
    id: string
}

const ArrayTool: Array<ITool> = [
    {type: "web", url: '/assets/images/tool1.png', id: "1"},
    {type: "web", url: '/assets/images/tool2.png', id: "2"},
    {type: "flat", url: '/assets/images/tool3.png', id: "3"},
    {type: "graphic", url: '/assets/images/tool4.png', id: "4"},
    {type: "web", url: '/assets/images/tool5.png', id: "5"},
    {type: "flat", url: '/assets/images/tool6.png', id: "6"},
    {type: "graphic", url: '/assets/images/tool1.png', id: "7"},
    {type: "flat", url: '/assets/images/tool2.png', id: "8"},
];

const Portfolio: React.FC = () => {
    const [toolType, setToolType] = useState<"all" | designType>("all");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onClick = useCallback((e) => {
        setToolType(e.target.dataset.sortType);
        close();
    }, []);

    const tools = useMemo(() => {
        if (toolType === "all") return ArrayTool;
        else return ArrayTool.filter(({type}) => type === toolType);
    }, [toolType]);

    return (
        <section id="portfolio" className={s.portfolio}>
            <div className={s.container}>
                <h2 className={s.title}>Portfolio</h2>
                <h5 className={s.subtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
                <nav className={s.navFilter}>
                    <div>
                        {ArrayDesign.map(({type, text}, i) =>
                            <Button onClick={type == toolType ? toggle : onClick}
                                    key={i}
                                    Tag="button"
                                    data-sort-type={type}
                                    className={cn(s.button, {
                                        [s.selected]: type == toolType,
                                        [s.open]: !(type == toolType) && isOpen,
                                        [s.close]: !(type == toolType) && !isOpen,
                                    })}>
                                {text}
                            </Button>
                        )}
                    </div>
                </nav>
                <div className={s.tools}>
                    {tools.map(({url, id}) =>
                        <div key={id} className={s.tool}>
                            <div>
                                <img aria-hidden="true" className={s.back} alt={"tool" + id} src={url}/>
                                <a href="#" className={s.toolLink}>
                                    <FontAwesomeIcon className={s.icon} icon={faSearch}/>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
};

export default Portfolio;