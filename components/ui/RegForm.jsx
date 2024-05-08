const React = require('react');

// стили
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

module.exports = function RegForm({ faculties }) {
  return (
    <>
      <Stack gap={2} className='col-md-5 mx-auto main-stack'>
        <h1>Регистрация</h1>
        <Form method='post' className='form-auth registration'>
          <Form.Group className='mb-3'>
            <Form.Label>ФИО</Form.Label>
            <Form.Control
              type='text'
              name='name'
              placeholder='Введите свое ФИО'
              required
            />
          </Form.Group>
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
              placeholder='Введите пароль'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Подтвердите пароль</Form.Label>
            <Form.Control
              type='password'
              name='rPassword'
              placeholder='Введите пароль повторно'
              required
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='facultySelect'>
            <Form.Label>Факультет</Form.Label>
            <Form.Select name='faculty' aria-label='Default select example'>
              <option value=''>Выберите факультет</option>
              {faculties.map((faculty) => (
                <option key={faculty.id} value={faculty.id}>
                  {faculty.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className='mb-3' controlId='groupSelect'>
            <Form.Label>Номер группы</Form.Label>
            <Form.Select name='group' aria-label='Default select example'>
              <option value=''>Выберите номер группы</option>
            </Form.Select>
          </Form.Group>
          <Button type='submit' variant='primary'>
            Зарегистрироваться
          </Button>
        </Form>
      </Stack>
    </>
  );
};
