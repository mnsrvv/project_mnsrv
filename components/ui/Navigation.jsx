const React = require('react');
import { Container, Nav, Navbar } from 'react-bootstrap';

module.exports = function Navigation({ user }) {
  return (
    <>
      <Navbar bg='primary' data-bs-theme='dark' className='navbar'>
        <Container>
          <Navbar.Brand className='brand' href='/'>
            Библиотека СПбГМТУ
          </Navbar.Brand>
          <Nav className='flex-column flex-md-row'>
            <Nav.Link href='/search/authors'>Авторы</Nav.Link>
            <Nav.Link href='/search/files'>Файлы</Nav.Link>
          </Nav>
          <Nav className='flex-column flex-md-row'>
            {user ? (
              user.role === 'teacher' ? (
                <>
                  <Nav.Link href='/profile'>Личный кабинет</Nav.Link>
                  <Nav.Link href='/api/auth/logout'>Выйти</Nav.Link>
                </>
              ) : user.role === 'admin' ? (
                <>
                  <Nav.Link href='/admin'>Панель админа</Nav.Link>
                  <Nav.Link href='/api/auth/logout'>Выйти</Nav.Link>
                </>
              ) : (
                <Nav.Link href='/api/auth/logout'>Выйти</Nav.Link>
              )
            ) : (
              <>
                <Nav.Link href='/auth/sign-in'>Вход</Nav.Link>
                <Nav.Link href='/auth/sign-up'>Регистрация</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
