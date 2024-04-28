const React = require('react');

// компоненты
const Layout = require('../Layout');

// стили
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

module.exports = function Main() {
  return (
    <>
      <Layout title={'Главная'}>
        <Stack gap={2} className='col-md-5 mx-auto main-stack'>
          <h1>Поиск</h1>
          <Form className='form'>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Автор</Form.Label>
              <Form.Control type='text' placeholder='Введите автора' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Название</Form.Label>
              <Form.Control type='text' placeholder='Введите название' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Ключевое слово</Form.Label>
              <Form.Control type='text' placeholder='Введите ключевое слово' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Предмет</Form.Label>
              <Form.Control type='text' placeholder='Введите предмет' />
            </Form.Group>
            <Button type='submit' variant='primary'>
              Найти
            </Button>
          </Form>
        </Stack>
      </Layout>
    </>
  );
};
