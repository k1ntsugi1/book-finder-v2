import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import GlassElement from "../GlassElement";

import { ReactComponent as EmojiFrown } from '../../assets/svg/emoji-frown.svg';

const EmptyResultOfSearching: React.FC = () => {

    const { t } = useTranslation();
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const text = textRef.current!.innerHTML;
        const lengthOfText = text.length - 1;

        const idsOfTimeouts: (ReturnType<typeof setTimeout>)[] = [];

        const printText = (position: number) => {
            textRef.current!.innerHTML = text.substring(0, position);
        }
        
        const setTimeoutes = (position: number) => {
            if (lengthOfText === 0 || position > lengthOfText) return;
            const idOfTimeout: ReturnType<typeof setTimeout> = setTimeout(() => printText(position), (position + 1) * 150);
            idsOfTimeouts.push(idOfTimeout);
            setTimeoutes(position + 1);
        };

        setTimeoutes(0);

        return () => { idsOfTimeouts.forEach(id => clearTimeout(id)) }
    })
    return (
        <GlassElement
            className='color-text align-self-center border rounded'
            style={{
                'width': '200px',
                'height': '100px',
            }}
        >
            <div className="h-100 centered-content border rounded">
                <EmojiFrown width="25" height="25"/>
                <span className="ps-3" ref={textRef}>{t("mainField.emptyResult")}</span>
                <span
                    className="background-color-text blinking"
                    style={{
                        'width': '3px',
                        'height': '1rem'
                    }}></span>
            </div>

        </GlassElement>
    )
};

export default EmptyResultOfSearching;