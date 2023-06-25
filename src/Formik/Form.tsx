import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
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

// Задаем схему валидации
const validationSchema = Yup.object({
    name: Yup.string().required('This field is required!'),    // Задаем тип данных в поле name, указываем, что оно обязательное, и указываем сообщение с ошибкой
    email: Yup.string().email('Invalid email format!').required('This field is required!'),
    channel: Yup.string().required('This field is required!')
})

export const FormWithFormik = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onFormSubmit}
        >
            <Form className={'form'}>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" />
                <div className={'error'}>
                    <ErrorMessage name="name" />
                </div>

                <label htmlFor="email">E-mail</label>
                <Field type="text" id="email" name="email" />
                <div className={'error'}>
                    <ErrorMessage name="email" />
                </div>

                <label htmlFor="channel">Channel</label>
                <Field type="text" id="channel" name="channel" />
                <div className={'error'}>
                    <ErrorMessage name="channel" />
                </div>

                <button type={'submit'}>Submit</button>
            </Form>
        </Formik>
    )
};


// Метод formik.getFieldProps принимает один аргумент - имя поля формы. Он возвращает объект, содержащий несколько свойств, которые должны быть распространены на компонент поля формы. Эти свойства включают:
//
//     name: Имя поля формы.
//     value: Текущее значение поля формы.
//     onChange: Функция, которая должна вызываться при изменении значения поля формы.
//     onBlur: Функция, которая должна вызываться при потере фокуса поля формы.
//     onFocus: Функция, которая должна вызываться при получении фокуса поля формы.
//     checked: Для полей ввода типа "checkbox" и "radio" указывает, выбрано ли поле или нет.
//     multiple: Для поля ввода типа "select" указывает, допускается ли множественный выбор.