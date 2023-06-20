import React, {ChangeEvent, FC, forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';

export const UseImperativeHandle = () => {
    // он нужен для того чтобы кастомизировать значение, к которым может обратиться родительский компонент
    const [name, setName] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null)
    const onChange = (value: string) => {
        setName(value)
    }

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    return (
        <>
            <h1>UseImperativeHandle</h1>
            <CustomInput ref={inputRef} value={name} onChange={onChange} />
        </>
    )
};

type InputType = {
    value: string
    onChange: (value: string) => void
    ref: any
}

// useImperativeHandle используется вместе с forwardRef, который вторым аргументом будет принимать ref от родителя

const CustomInput: FC<InputType> = forwardRef(({value, onChange}, ref) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.value)
    }
    const input = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            if (input.current) {
                input.current.focus()
            }
        }
    }))


    return (
        <div>
            <input ref={input} type="text" value={value} onChange={onChangeHandler} />
        </div>
    )
})
