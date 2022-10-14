import FormSection from "./Form/FormSection";
import { useState } from 'react';
import SearchSVG from '../../assets/svg/search.svg'
import BrushSVG from '../../assets/svg/brush.svg'
import cn from 'classnames';
import ViewOfScrollSection from "./ViewOfScrollSection";
import BrushSection from "./brush/BrushSection";

const Sidebar: React.FC = () => {
    const [showStateOfForm, setNewShowStateOfForm] = useState('unvisible');
    const [showStateOfBrush, setNewShowStateOfBrush] = useState('unvisible');
    const classnamesOfSearchElement = cn('mx-auto', 'mt-5');

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
        <>
            <div className="back-face-of-glass b-rad-10 "></div>
            <div className="d-flex flex-column justify-content-start gap-5 front-face-of-glass" style={{'background': 'var(--color-sidebar)'}}>
                <FormSection showStateOfForm={showStateOfForm}/>
                <BrushSection showStateOfBrush={showStateOfBrush}/>

                <div className={classnamesOfSearchElement}>
                    <img src={SearchSVG}
                        alt="searchSVG"
                        onClick={() => {
                            return showStateOfForm === 'visible'
                                ? handlerOfShowStateOfForm('unvisible')
                                : handlerOfShowStateOfForm('visible')
                    }}/>
                </div>
                <div className={classnamesOfSearchElement}>
                    <img src={BrushSVG}
                        alt="BrushSVG"
                        onClick={() => {
                            return showStateOfBrush === 'visible'
                                ? handlerOfShowStateOfBrush('unvisible')
                                : handlerOfShowStateOfBrush('visible')
                    }}/>
                </div>
                <ViewOfScrollSection />
            </div>
        </>
    )
}

export default Sidebar;