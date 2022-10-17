import FormSection from "./Form/FormSection";
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import ScrollLoaderSection from "./ScrollLoaderSection";
import BrushSection from "./brush/BrushSection";
import GlassElement from "../GlassElement";


const Sidebar: React.FC = () => {
    const [showStateOfForm, setNewShowStateOfForm] = useState('unvisible');
    const [showStateOfBrush, setNewShowStateOfBrush] = useState('unvisible');
    const classnamesOfSidebarElement = cn('mx-auto', 'mt-5', 'cursor-pointer');

    const handlerOfShowStateOfForm = (type: string): void => {
        if (type === 'visible' && showStateOfBrush === 'visible') {
            setNewShowStateOfBrush('unvisible')
        };
        setNewShowStateOfForm(type);
    }
    const handlerOfShowStateOfBrush = (type: string): void => {
        if (type === 'visible' && showStateOfForm === 'visible') {
            setNewShowStateOfForm('unvisible')
        };
        setNewShowStateOfBrush(type);
    }
    return (
        <GlassElement
            classesOfContainer="col-1 shadow-lg"
            classesOfFrontFace="pt-1 d-flex flex-column justify-content-start gap-5"
            stylesOfContainer={{ 'zIndex': '1000' }}
            stylesOfFrontFace={{
                'background': 'var(--color-sidebar)',
                'color': 'var(--color-text)'
            }}
        >
            <FormSection showStateOfForm={showStateOfForm} />
            <BrushSection showStateOfBrush={showStateOfBrush} />

            <div
                className={classnamesOfSidebarElement}
                style={{ 'color': 'var(--color-text)' }}
                onClick={() => {
                    return showStateOfForm === 'visible'
                        ? handlerOfShowStateOfForm('unvisible')
                        : handlerOfShowStateOfForm('visible')
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>

            </div>
            <div
                className={classnamesOfSidebarElement}
                style={{ 'color': 'var(--color-text)' }}
                onClick={() => {
                    return showStateOfBrush === 'visible'
                        ? handlerOfShowStateOfBrush('unvisible')
                        : handlerOfShowStateOfBrush('visible')
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-brush" viewBox="0 0 16 16">
                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />
                </svg>

            </div>
            <div
                className={classnamesOfSidebarElement}
                style={{ 'color': 'var(--color-text)' }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill='currentColor' className="position absolute bi bi-star" viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>

            </div>
            <ScrollLoaderSection />
        </GlassElement>
    )
}

export default Sidebar;