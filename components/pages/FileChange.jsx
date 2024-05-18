import React from 'react';

// компоненты
const Layout = require('../Layout');

// стили
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

module.exports = function FileChange({ user, file, subjects }) {
  return (
    <Layout title={'Редактирование'} user={user}>
      <div className='file-view' data-id={file.id}>
        <form
          method='post'
          action={`/api/file/update/${file.id}`}
          className='file-upload'
          encType='multipart/form-data'
        >
          <Form.Group className='mb-3'>
            <Form.Label>Название</Form.Label>
            <Form.Control
              type='text'
              name='name'
              placeholder='Введите название файла'
              defaultValue={file.name}
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
              defaultValue={file.description}
              required
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Предмет</Form.Label>
            <Form.Select
              name='subjectId'
              aria-label='Default select example'
              defaultValue={file.subjectId}
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
            <Form.Control type='file' name='file' />
          </Form.Group>
          <Button variant='success' type='submit'>
            Сохранить
          </Button>
        </form>
      </div>
    </Layout>
  );
};
