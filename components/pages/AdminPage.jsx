const React = require('react');

// компоненты
const Layout = require('../Layout');

// стили
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TeacherItem from '../ui/TeacherItem';

module.exports = function AdminPage({ user, teachers, faculties }) {
  return (
    <>
      {user.role === 'admin' ? (
        <>
          <Layout title={'Панель Администратора'} user={user}>
            <div className='profile'>
              <div className='user-info'>
                <p> Добавить преподавателя</p>
              </div>
              <form className='add-teacher' action='/api/admin' method='POST'>
                <Form.Group className='mb-3'>
                  <Form.Label>ФИО</Form.Label>
                  <Form.Control
                    type='text'
                    name='name'
                    placeholder='ФИО преподавателя'
                    required
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Почта</Form.Label>
                  <Form.Control
                    type='email'
                    name='email'
                    placeholder='Почта'
                    required
                  />
                </Form.Group>
                <Form.Group className='mb-3'>
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type='password'
                    name='pass'
                    placeholder='Пароль'
                    required
                  />
                </Form.Group>
                <Form.Label>Факультет</Form.Label>
                <Form.Select
                  name='facultyId'
                  aria-label='Default select example'
                  required
                >
                  <option value=''>Выберите факультет</option>
                  {faculties.map((faculty) => (
                    <option key={faculty.id} value={faculty.id}>
                      {faculty.name}
                    </option>
                  ))}
                </Form.Select>
                <Button type='submit' className='mt-3 mb-5'>
                  Добавить
                </Button>
              </form>
              <div>
                <div className='user-info'>
                  <p>Список преподавателей</p>
                </div>
                <div className='admin-teachers-list'>
                  {teachers.map((teacher) => (
                    <TeacherItem teacher={teacher} key={teacher.id} />
                  ))}
                </div>
              </div>
            </div>
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
