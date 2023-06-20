import {useCallback, useEffect, useState} from 'react';

export const useResize = (ref: any) => {
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const [squareSize, setSquareSize] = useState<number>(0);

    const handleResize = useCallback(() => {
        console.log('resize')
        if (ref.current) {
            setWidth((ref.current.offsetWidth))
            setHeight((ref.current.offsetWidth))
            setSquareSize((ref.current.offsetWidth))
        }

    }, [ref])

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])

    return {
        width,
        height,
        squareSize
    }
}