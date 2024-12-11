import { Welcome } from './HomePage/Welcom';
import { Carusel } from './HomePage/Carusel';
import { Context } from './HomePage/Context';
import { Service } from './HomePage/Service';

export const HomePage = () => {
    return (
        <>
            <Welcome />
            <Carusel />
            <Context />
            <Service />
        </>
    )
};