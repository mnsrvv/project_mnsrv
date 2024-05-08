const React = require('react');

// компоненты
const Layout = require('../Layout');
const LogForm = require('../ui/LogForm');

module.exports = function Authorization() {
  return (
    <>
      <Layout title={'Вход'}>
        <LogForm formClass='login'></LogForm>
      </Layout>
    </>
  );
};
