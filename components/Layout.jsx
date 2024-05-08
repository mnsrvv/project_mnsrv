const React = require('react');

// компоненты
const Navigation = require('./ui/Navigation');

// стили
import Container from 'react-bootstrap/Container';

module.exports = function Layout({ title, children, user }) {
  return (
    <>
      <html lang='en'>
        <head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
          ></link>
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
            integrity='sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN'
            crossOrigin='anonymous'
          />
          <link rel='stylesheet' href='/reset.css' />
          <link rel='stylesheet' href='/normalize.css' />
          <link rel='stylesheet' href='/style.css' />
          <script src='/scripts/auth.js' defer></script>
          <script src='/scripts/select.js' defer></script>
          <title>{title}</title>
        </head>
        <body>
          <Navigation user={user}/>
          <Container className='main'>{children}</Container>
        </body>
      </html>
    </>
  );
};
