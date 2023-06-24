import React from 'react';
import {useFormik} from 'formik';
import {log} from 'util';


type FormType = {
    name: string
    email: string
    channel: string
}

export const Form = () => {
    const initialValues = {
        name: '',
        email: '',
        channel: ''
    }

    const onFormSubmit = (values: FormType) => {
        // Отправка данных формы на сервер
        console.log(values);
    }

    const validateForm = (values: FormType) => {
        const errors = {
            name: '',
            email: '',
            channel: ''
        }
        // Валидация имени
        if (!values.name) {
            errors.name = 'This field is required'
        }
        // Валидация email
        if (!values.email) {
            errors.email = 'This field is required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(values.email)) {
            console.log('email error')
            errors.email = 'Incorrect email'
        }
        // Валидация канала
        if (!values.channel) {
            errors.channel = 'This field is required'
        }

        return errors
    }

    const formik = useFormik<FormType>({
        // инициализационное значение для формы
        initialValues,
        // обязательно необходимо прописать обработчик на отправку формы
        onSubmit: onFormSubmit,
        // Функция для валидации формы
        validate: validateForm
    })
    console.log('Error', formik.errors)

    return (
        <div>
            <form className={'form'} onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
                <div className={'error'}>
                    {!!formik.errors.name && formik.errors.name}
                </div>

                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                <div className={'error'}>
                    {!!formik.errors.email && formik.errors.email}
                </div>

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" onChange={formik.handleChange}
                       value={formik.values.channel} />
                <div className={'error'}>
                    {!!formik.errors.channel && formik.errors.channel}
                </div>


                <button type={'submit'}>Submit</button>
            </form>
        </div>
    )
};