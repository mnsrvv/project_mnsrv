const React = require('react');

// компоненты
const Layout = require('../Layout');

// стили
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

module.exports = function TeacherChange({ user, teacher, faculties }) {
  return (
    <>
      {user.role === 'admin' ? (
        <>
          <Layout title={'Панель Администратора'} user={user}>
            <Stack gap={2} className='col-md-5 mx-auto main-stack'>
              <form
                className='add-teacher'
                action={`/api/admin/${teacher.id}`}
                method='POST'
              >
                <Form.Group className='mb-3'>
                  <Form.Label>ФИО</Form.Label>
                  <Form.Control
                    type='text'
                    name='name'
                    required
                    defaultValue={teacher.name}
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Почта</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    placeholder='Почта'
                    defaultValue={teacher.email}
                    required
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type='password'
                    name='pass'
                    defaultValue='*******'
                    required
                  />
                </Form.Group>
                <Form.Label>Факультет</Form.Label>
                <Form.Select
                  name='facultyId'
                  aria-label='Default select example'
                  defaultValue={teacher.facultyId}
                  required
                >
                  {faculties.map((faculty) => (
                    <option key={faculty.id} value={faculty.id}>
                      {faculty.name}
                    </option>
                  ))}
                </Form.Select>
                <Button type='submit' className='mt-3'>
                  Сохранить
                </Button>
              </form>
            </Stack>
          </Layout>
        </>
      ) : (
        <div>
          {' '}
          <h1>404</h1>
        </div>
      )}
    </>
  );
};
