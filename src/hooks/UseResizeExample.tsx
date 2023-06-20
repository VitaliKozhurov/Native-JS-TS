import React, {useRef} from 'react';
import {useResize} from './useResize/useResize';


export const UseResizeExample = () => {
    const container = useRef<HTMLDivElement>(null)
    const {squareSize} = useResize(container);


    return (
        <>
            <div ref={container} style={{width: '100%', height: '100vh'}}>
                <div style={{
                    background: 'green',
                    width: `${squareSize}px`,
                    height: `${squareSize}px`
                }}></div>
            </div>
        </>
    )
};