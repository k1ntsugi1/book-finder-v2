import { useEffect, useRef } from "react";
import GlassElement from "../GlassElement";

const EmptyResultOfSearching: React.FC = () => {

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
            className='align-self-center border rounded'
            style={{
                'width': '200px',
                'height': '100px',
                'background': 'var(--color-sidebar)',
                'color': 'var(--color-text)'
            }}
        >
            <div className="h-100 centered-content border rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-emoji-frown" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                </svg>
                <span className="ps-3" ref={textRef}>Empty....</span>
                <span
                    className="blinking"
                    style={{
                        'background': 'var(--color-text)',
                        'width': '3px',
                        'height': '1rem'
                    }}></span>
            </div>

        </GlassElement>
    )
};

export default EmptyResultOfSearching;