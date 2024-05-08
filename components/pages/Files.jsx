import React from 'react';

// компоненты
const Layout = require('../Layout');

module.exports = function Files({ files, user }) {
  return (
    <Layout title={'Файлы'} user={user}>
      <ul className='files-list'>
        {files[0] ? (
          files.map((file) => (
            <li key={file.id} className='file'>
              <a href={file.path} download>
                {file.name} | {file.Teacher.name}
              </a>
            </li>
          ))
        ) : (
          <>
            <div>Файлов нет</div>
          </>
        )}
      </ul>
    </Layout>
  );
};
