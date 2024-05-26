import React from 'react';

// компоненты
const Layout = require('../Layout');

// стили
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

module.exports = function Files({ files, user }) {
  return (
    <Layout title={'Файлы'} user={user}>
      <div className='profile'>
        <Form method='GET' action='/search/sortedFiles'>
          <Form.Select
            className='sort-select mb-2'
            name='sort'
            id='sortSelect'
            aria-label='Default select example'
            size='lg'
          >
            <option>Сортировка</option>
            <option value='1'>По названию</option>
            <option value='2'>По автору</option>
            <option value='3'>По дате</option>
          </Form.Select>
          <div id='sortOrder' style={{ display: 'none' }}>
            <Form.Check
              type='radio'
              name='sortOrder'
              id='ascending'
              value='ascending'
              label='По возрастанию'
            />
            <Form.Check
              type='radio'
              name='sortOrder'
              id='descending'
              value='descending'
              label='По убыванию'
            />
            <Button variant='primary' className='m-2' type='submit'>
              Показать
            </Button>
          </div>
        </Form>
        <ul className='files-list'>
          {files[0] ? (
            files.map((file) => (
              <li key={file.id} className='file'>
                <a href={`/file/${file.id}`}>
                  {file.name} | {file.Teacher.name}
                </a>
              </li>
            ))
          ) : (
            <>
              <div className='no-files'>Файлов нет</div>
            </>
          )}
        </ul>
      </div>
    </Layout>
  );
};
