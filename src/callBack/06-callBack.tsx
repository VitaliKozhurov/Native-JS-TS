import React, {MouseEvent} from 'react';

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name);
    }

    const saveUser = () => {
        alert('User was saved')
    }
    const onNameChangeHandler = () => {
        console.log('Name is changed')
    }
    const onBlurHandler = () => {
        console.log('Teaxtarea is blur')
    }
    return (
        <>
            <h1>Hello I'm Vitali</h1>
            <textarea onChange={onNameChangeHandler} onBlur={onBlurHandler}>Dimych</textarea>
            <button name={'delete'} onClick={deleteUser}>Delete</button>
            <button name={'save'} onDoubleClick={deleteUser}>Save</button>
        </>
    )
};