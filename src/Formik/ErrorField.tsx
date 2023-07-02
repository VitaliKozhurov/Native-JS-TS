import React from 'react';
import s from './Form.module.css'

type ErrorFieldPropsType = {
    children: string
}

export const ErrorField = (props: ErrorFieldPropsType) => {
    console.log(props)
    return (
        <div className={s.error}>
            {props.children}
        </div>
    )
};