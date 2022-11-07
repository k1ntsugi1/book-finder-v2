import { RefObject } from 'react';

interface IProps {
    (
        ref: RefObject<HTMLElement>,
        state: string
    ): void
}


const toggleVisibility: IProps = (ref, state) => {
    setTimeout(() => {
        if (state === 'unvisible') ref.current!.style.visibility = 'hidden';
    }, 400);
    if (state === 'visible') ref.current!.style.visibility = '';
}

export default toggleVisibility;