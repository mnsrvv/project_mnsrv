const React = require('react');

// стили
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

module.exports = function LogForm() {
  return (
    <>
      <Stack gap={2} className='col-md-5 mx-auto main-stack'>
        <h1>Вход</h1>
        <Form method='post' className='form-auth authorization'>
          <Form.Group className='mb-3'>
            <Form.Label>Почта</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='Введите свою почту'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              type='password'
              name='password'
              placeholder='Введите свой пароль'
              required
            />
          </Form.Group>
          <Button type='submit' variant='primary'>
            Войти
          </Button>
        </Form>
      </Stack>
    </>
  );
};
