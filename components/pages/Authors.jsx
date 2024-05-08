import React from 'react';

// компоненты
const Layout = require('../Layout');

module.exports = function Authors({ faculties, user }) {
  return (
    <Layout title={'Авторы'} user={user}>
      <ul className='faculty-list'>
        {faculties.map((faculty) => (
          <li key={faculty.id} className='faculty'>
            {faculty.name}
            <ul className='teacher-list'>
              {faculty.Teachers.map((teacher) => (
                <li key={teacher.id} className='teacher'>
                  • {teacher.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  );
};
