import React, {useEffect, useLayoutEffect} from 'react';


const longTask = () => {
    for (let i = 0; i < 100000000; i++) {
        console.log()
    }
}

export const UseLayoutEffect = () => {
    // похож на useEffect, но отличие в том что они вызываются на разных этапах жизненного цикла компоненты
    // вызывается до useEffect (выполняется до отрисовки)
    // если там будет долгоиграющая функция, то она будет блокировать отрисовку контента
    // обычно считает размеры элементов до их первой отрисовки
    console.log('start component')

    // Вызовется вторым
    useEffect(() => {
        console.log('useEffect')
    }, [])

    // Вызовется первым
    useLayoutEffect(() => {
        longTask()
        console.log('useLayoutEffect')
    }, [])

    return (
        <>
            <h1>Use Layout Effect</h1>
        </>
    )
};