const React = require('react');
import { Button, Card } from 'react-bootstrap';

function TeacherItem({ teacher, user }) {
  return (
    <Card style={{ width: '18rem' }} className='m-2'>
      <Card.Body>
        <Card.Title>{teacher.name}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {teacher.Faculty.name}
        </Card.Subtitle>
        <Card.Subtitle className='mb-2 text-muted'>
          {teacher.email}
        </Card.Subtitle>
        <div className='buttons'>
          <a href={`/admin/update/${teacher.id}`}>
            <Button variant='success' className='mt-2'>
              Изменить
            </Button>
          </a>
          <form action={`/api/admin/${teacher.id}`} method='get'>
            <Button variant='danger' type='submit' className='m-2'>
              Удалить
            </Button>
          </form>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TeacherItem;
