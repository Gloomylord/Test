import React, {useCallback, useEffect, useState} from "react";
import {YMaps, Map} from 'react-yandex-maps';
import s from "./style.scss";

interface IPoint {
    title: string,
    descr: string,
    coords: [number, number]
}

const point: IPoint = {
    title: "Placemark 1",
    descr: "Some description",
    coords: [55.831903, 37.411961]
};

const CustomMap: React.FC = () => {
    const [map, setMap] = useState(null);
    const [ymaps, setYMaps] = useState(null);

    useEffect(() => {
        if (map && ymaps) {
            console.log("ymaps", ymaps, "map", map);
            //@ts-ignore
            const multiRoute1 = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    "Москва, Колодезный переулок д.2а",
                    "метро Сокольники",
                ],
                params: {
                    results: 2,
                    routingMode: 'pedestrian'
                }
            }, {
                wayPointStartVisible:false,
                routeStrokeWidth: 2,
                routeStrokeColor: "#000088",
                routeActiveStrokeWidth: 6,
                routeActiveStrokeColor: "#E63E92",
            });
            //@ts-ignore
            const multiRoute2 = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    "Москва, Колодезный переулок д.2а",
                    "Преображенская площадь",
                ],
                wayPointStart: {
                    opacity: 0
                },
                params: {
                    results: 2,
                    routingMode: 'pedestrian'
                }
            }, {});
            //@ts-ignore
            map.geoObjects.add(multiRoute1);
            //@ts-ignore
            map.geoObjects.add(multiRoute2);
        }
    }, [map, ymaps]);

    const onLoad = useCallback((ymaps: any) => {
        setYMaps(ymaps);
    }, [setYMaps]);

    return (
        <YMaps className={s.map} height="100%" width="100%" query={{apikey: '1dcc3b36-feae-4c08-8be9-9ab219dff524',}}>
            <Map className={s.map}
                 onLoad={onLoad}

                 instanceRef={(ref: any) => setMap(ref)}
                 style={{width: "100%", height: "100%"}}
                 defaultState={
                     {
                         center: [55.79587221808857,37.69608372090148], zoom: 13.5,
                         controls: ['zoomControl', 'fullscreenControl'],
                         multiRouter: ['MultiRoute']
                     }
                 }
                 modules={['control.ZoomControl', 'control.FullscreenControl', "multiRouter.MultiRoute"]}>
            </Map>
        </YMaps>
    )
};

export default CustomMap;
