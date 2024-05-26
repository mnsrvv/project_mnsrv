import React from 'react';
import { format } from 'date-fns';

// компоненты
const Layout = require('../Layout');

// стили
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

module.exports = function FileView({ user, file }) {
  const formattedCreatedAt = format(
    new Date(file.createdAt),
    'dd.MM.yyyy HH:mm'
  );
  const formattedUpdatedAt = format(
    new Date(file.updatedAt),
    'dd.MM.yyyy HH:mm'
  );

  return (
    <Layout title={'Файл'} user={user}>
      <Stack gap={2} className='col-md-5 mx-auto main-stack' data-id={file.id}>
        <h1>{file.name}</h1>
        <Card body className='card mb-2'>
          {file.description}
        </Card>
        <h2 className='mb-2'>Автор: {file.Teacher.name}</h2>
        <>
          {formattedCreatedAt === formattedUpdatedAt ? (
            <h2 className='mb-5'>Дата публикации: {formattedCreatedAt}</h2>
          ) : (
            <h2 className='mb-5'>Обновлено: {formattedUpdatedAt}</h2>
          )}
        </>
        <div>
          {user?.role === 'admin' ||
          (user?.role === 'teacher' && user?.id === file.teacherId) ? (
            <>
              <a href={`${file.path}`} download>
                <Button variant='primary' className='m-2'>
                  Скачать
                </Button>
              </a>
              <a href={`/file/update/${file.id}`}>
                <Button variant='success' className='m-2'>
                  Изменить
                </Button>
              </a>
              <Button variant='danger' className='buttonDelete m-2'>
                Удалить
              </Button>
            </>
          ) : (
            <>
              {(user?.role === 'student' || user?.role === 'teacher') && (
                <a href={`${file.path}`} download>
                  <Button variant='primary' className='m-2'>
                    Скачать
                  </Button>
                </a>
              )}
            </>
          )}
        </div>
      </Stack>
    </Layout>
  );
};
