const React = require('react');

// компоненты
const Layout = require('../Layout');

// стили
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';

module.exports = function Main({ user }) {
  return (
    <>
      <Layout title={'Главная'} user={user}>
        <Stack gap={2} className='col-md-5 mx-auto main-stack'>
          <h1>Поиск</h1>
          <form action='/search/results' className='file-search'>
            <Form.Group className='mb-3'>
              <Form.Label>Автор</Form.Label>
              <Form.Control
                type='text'
                name='author'
                placeholder='Введите автора'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Название</Form.Label>
              <Form.Control
                type='text'
                name='name'
                placeholder='Введите название'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Ключевое слово</Form.Label>
              <Form.Control
                type='text'
                name='words'
                placeholder='Введите ключевое слово'
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Предмет</Form.Label>
              <Form.Control
                type='text'
                name='subject'
                placeholder='Введите предмет'
              />
            </Form.Group>
            <Button type='submit' variant='primary'>
              Найти
            </Button>
          </form>
        </Stack>
      </Layout>
    </>
  );
};
