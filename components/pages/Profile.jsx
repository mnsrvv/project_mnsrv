const React = require('react');

// компоненты
const Layout = require('../Layout');

// стили
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

module.exports = function Profile({ user, files, subjects }) {
  return (
    <>
      <Layout title={'Личный кабинет'} user={user}>
        <div className='profile'>
          <div className='user-info'>
            <p>ФИО: {user.name}</p>
            <p>Почта: {user.email}</p>
          </div>
          <form
            method='post'
            action='/api/profile/upload'
            className='file-upload'
            encType='multipart/form-data'
          >
            <Form.Group className='mb-3'>
              <Form.Label>Название</Form.Label>
              <Form.Control
                type='text'
                name='name'
                placeholder='Введите название файла'
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Описание</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                name='description'
                placeholder='Введите описание файла'
                required
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Label>Предмет</Form.Label>
              <Form.Select
                name='subjectId'
                aria-label='Default select example'
                required
              >
                <option value=''>Выберите Предмет</option>
                {subjects.map((subject) => (
                  <option key={subject.Subject.id} value={subject.Subject.id}>
                    {subject.Subject.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group controlId='formFile' className='mb-3'>
              <Form.Label>Добавить файл</Form.Label>
              <Form.Control type='file' name='file' required />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Загрузить
            </Button>
          </form>
          <div className='user-files'>
            {files ? (
              <>
                {files.map((file) => (
                  <a key={file.id} href={file.path} download>
                    {file.name}
                  </a>
                ))}
              </>
            ) : (
              <>
                <div>Файлов пока нет</div>
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};
