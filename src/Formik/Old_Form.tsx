import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

type FormType = {
    name: string
    email: string
    channel: string
}

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

// Задаем схему валидации
const validationSchema = Yup.object({
    name: Yup.string().required('This field is required!'),    // Задаем тип данных в поле name, указываем, что оно обязательное, и указываем сообщение с ошибкой
    email: Yup.string().email('Invalid email format!').required('This field is required!'),
    channel: Yup.string().required('This field is required!')
})

export const Form = () => {

    const formik = useFormik<FormType>({
        // инициализационное значение для формы
        initialValues,
        // обязательно необходимо прописать обработчик на отправку формы
        onSubmit: onFormSubmit,
        // Функция для валидации формы
        //validate: validateForm,                // Эта схема которую мы описали вручную
        validationSchema: validationSchema        // Эта схема написанная при помощи библиотеки Yup
    })
    console.log('Toched field', formik.touched)

    return (
        <div>
            <form className={'form'} onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}
                       onBlur={formik.handleBlur} />
                <div className={'error'}>
                    {/*formik.touched.name проверяет было ли данное поле в списке посещенных, если поле было посещено и валидация выдает
                    ошибку то будет выведено сообщение с ошибкой*/}
                    {formik.touched.name && formik.errors.name && formik.errors.name}
                </div>

                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}
                       onBlur={formik.handleBlur} />
                <div className={'error'}>
                    {formik.touched.email && formik.errors.email && formik.errors.email}
                </div>

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" onChange={formik.handleChange}
                       value={formik.values.channel} onBlur={formik.handleBlur} />
                <div className={'error'}>
                    {formik.touched.channel && formik.errors.channel && formik.errors.channel}
                </div>


                <button type={'submit'}>Submit</button>
            </form>
        </div>
    )
};