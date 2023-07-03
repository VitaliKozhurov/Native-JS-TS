import React from 'react';
import {Formik, Form, Field, ErrorMessage, FieldArray, FieldArrayRenderProps} from 'formik';
import * as Yup from 'yup';
import s from './Form.module.css'
import {ErrorField} from './ErrorField';
import {ArrayHelpers} from 'formik/dist/FieldArray';


type FormType = {
    name: string
    email: string
    channel: string
}

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
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
                <div className={s.inputForm}>
                    <label htmlFor="name">Name</label>
                    <Field type="text" id="name" name="name" />
                    {/*Используем атрибут компонент для того, чтобы обернуть ErrorMessage в тег или компонент children-ом для которого будет ErrorMessage*/}
                    <ErrorMessage name="name" component={ErrorField} />
                </div>

                <div className={s.inputForm}>
                    <label htmlFor="email">E-mail</label>
                    <Field type="text" id="email" name="email" />
                    <ErrorMessage name="email" component={ErrorField} />
                </div>

                <div className={s.inputForm}>
                    <label htmlFor="channel">Channel</label>
                    <Field type="text" id="channel" name="channel" />
                    <ErrorMessage name="channel" component={ErrorField} />
                </div>

                <div className={s.inputForm}>
                    <label htmlFor="comments">Comments</label>
                    {/*Для того чтобы сделать текстовое поле, необходимо прописать as='textarea', тем самым мы определяем поле как текстовое */}
                    <Field as="textarea" id="comments" name="comments" />
                </div>


                {/*<div className={s.inputForm}>*/}
                {/*    <label htmlFor="address">Address</label>*/}
                {/*    /!*Можно так же передать в children функцию коллбек, которая будет принимать объект пропс с методами и свойствами formik*!/*/}
                {/*    <Field name="address">*/}
                {/*        {(props: {*/}
                {/*            field: FieldProps['field'];*/}
                {/*            form: FieldProps['form'];*/}
                {/*            meta: FieldProps['meta'];*/}
                {/*        }) => {*/}
                {/*            const {field, form, meta} = props;*/}
                {/*            // field -- name, value, onChange, onBlur*/}
                {/*            // meta -- error, initialError, initialTouched, initialValue, touched, value*/}
                {/*            return <div>*/}
                {/*                <input id={'address'} {...field} />*/}
                {/*                {meta.touched && meta.error*/}
                {/*                    ? <div>{meta.error}</div>*/}
                {/*                    : null}*/}
                {/*            </div>*/}
                {/*        }}*/}
                {/*    </Field>*/}
                {/*</div>*/}

                {/*Можно группировать данные формы в отдельные объекты, теперь при сабмите в поле social будет поле facebook и twitter*/}
                <div className={s.inputForm}>
                    <label htmlFor="facebook">Facebook profile</label>
                    <Field type="text" id="facebook" name="social.facebook" />
                </div>
                <div className={s.inputForm}>
                    <label htmlFor="twitter">Twitter profile</label>
                    <Field type="text" id="twitter" name="social.twitter" />
                </div>


                {/*Массив данных, можно сгруппировать данные в массив*/}
                <div className={s.inputForm}>
                    <label htmlFor="primaryPh">Primary phone number</label>
                    <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
                </div>
                <div className={s.inputForm}>
                    <label htmlFor="secondaryPh">Secondary phone number</label>
                    <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
                </div>

                {/*Создание динамических полей*/}
                <div className={s.inputForm}>
                    <label>List of phone numbers</label>
                    <FieldArray name="phNumbers">
                        {
                            (fieldArrProps: FieldArrayRenderProps) => {
                                const {push, remove, form} = fieldArrProps;
                                const {values} = form;
                                const phNumbers = values.phNumbers as string[];
                                // push позволяет добавить поле для ввода
                                // remove удаляет поле
                                return <div>
                                    {phNumbers.map((phNumber, index) => <div key={index}>
                                        <Field name={`phNumbers[${index}]`} />
                                        <button style={{
                                            padding: '10px',
                                        }}
                                                type={'button'}
                                                onClick={() => push('')}>+
                                        </button>
                                        {/*Если индекс равен 0 то удалять поле ввода нельзя, если больше, то можно добавлять и удалять поля*/}
                                        {index > 0 && <button style={{
                                            padding: '10px 12px',
                                        }}
                                                              type={'button'}
                                                              onClick={() => remove(index)}>-
                                        </button>}
                                    </div>)}
                                </div>
                            }
                        }
                    </FieldArray>
                </div>

                <button className={s.button} type={'submit'}>Submit</button>
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