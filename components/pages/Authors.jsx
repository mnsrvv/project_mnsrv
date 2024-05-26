import React from 'react';

// компоненты
const Layout = require('../Layout');

// стили
import Stack from 'react-bootstrap/Stack';

module.exports = function Authors({ faculties, user }) {
  return (
    <Layout title={'Авторы'} user={user}>
      <Stack gap={2} className='col-md-5 mx-auto'>
        {' '}
        <ul className='faculty-list'>
          {faculties.map((faculty) => (
            <li key={faculty.id} className='faculty'>
              {faculty.name}
              <ul className='teacher-list'>
                {faculty.Teachers.map((teacher) => (
                  <li key={teacher.id} className='teacher'>
                    •{' '}
                    <a href={`/search/authors/${teacher.id}`}>{teacher.name}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Stack>
    </Layout>
  );
};
