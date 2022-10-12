import FormSection from "../FormSection";
import { useState } from 'react';
import SearchSVG from '../../assets/svg/search.svg'
import cn from 'classnames';

const Sidebar: React.FC = () => {
    const [showStateOfForm, setNewShowStateOfForm] = useState('visible');
    const classnamesOfSearchElement = cn('mx-auto')
    return (
        <>
            <div className="back-face-of-glass b-rad-10 " style={{background: 'transparent'}}></div>
            <div className="d-flex flex-column justify-content-around front-face-of-glass">
                <FormSection showStateOfForm={showStateOfForm}/>
            
                <div className={classnamesOfSearchElement}>
                    <img src={SearchSVG}
                        alt="searchSVG"
                        onClick={() => {
                            return showStateOfForm === 'visible'
                                ? setNewShowStateOfForm('unvisible')
                                : setNewShowStateOfForm('visible')
                    }}/>
                </div>
            </div>
        </>
    )
}

export default Sidebar;