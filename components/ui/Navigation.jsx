const React = require('react');

// стили
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

module.exports = function Navigation({ user }) {
  return (
    <>
      <Navbar bg='primary' data-bs-theme='dark' className='navbar'>
        <Container>
          <Navbar.Brand href='/'>Библиотека СПбГМТУ</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            className='justify-content-start'
            id='basic-navbar-nav'
          >
            <Nav>
              <Nav.Link href='/search/authors'>Авторы</Nav.Link>
              <Nav.Link href='/search/files'>Файлы</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {user ? (
            user.role === 'teacher' ? (
              <Navbar.Collapse className='justify-content-end'>
                <Nav>
                  <Nav.Link href='/profile'>Личный кабинет</Nav.Link>
                  <Nav.Link href='/api/auth/logout'>Выйти</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            ) : user.role === 'admin' ? (
              <Navbar.Collapse className='justify-content-end'>
                <Nav>
                  <Nav.Link href='/admin'>Панель админа</Nav.Link>
                  <Nav.Link href='/api/auth/logout'>Выйти</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            ) : (
              <Navbar.Collapse className='justify-content-end'>
                <Nav>
                  <Nav.Link href='/api/auth/logout'>Выйти</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            )
          ) : (
            <Navbar.Collapse className='justify-content-end'>
              <Nav>
                <Nav.Link href='/auth/sign-in'>Вход</Nav.Link>
                <Nav.Link href='/auth/sign-up'>Регистрация</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </>
  );
};
