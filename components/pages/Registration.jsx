const React = require('react');

// компоненты
const Layout = require('../Layout');
const RegForm = require('../ui/RegForm');

module.exports = function Registration({ faculties }) {
  return (
    <>
      <Layout title={'Регистрация'}>
        <RegForm formClass='registration' faculties={faculties}></RegForm>
      </Layout>
    </>
  );
};
