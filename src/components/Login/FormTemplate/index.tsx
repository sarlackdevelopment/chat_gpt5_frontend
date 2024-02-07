import { Button, Form } from 'react-bootstrap';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../useAuth';

const FormTemplate = ({ caption }: { caption: string }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login } = useAuth();
    const onSubmit = (data: any) => {
        console.log(data);
        login(data);
    };
    return (
        <Form onSubmit={ handleSubmit(onSubmit) }>
            <Form.Group className="mb-3">
                <Form.Label>Электронная почта</Form.Label>
                <Form.Control
                    { ...register('username', { required: true }) }
                    placeholder="Введите имя пользователя"
                />
                { errors.username && <span className="text-danger">Это поле обязательно</span> }
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    type="password"
                    { ...register('password', { required: true }) }
                    placeholder="Пароль"
                />
                { errors.password && <span className="text-danger">Это поле обязательно</span> }
            </Form.Group>

            <Button variant="primary" type="submit">
                { caption }
            </Button>
        </Form>
    )
}

export default FormTemplate
