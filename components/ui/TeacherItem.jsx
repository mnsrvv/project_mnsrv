const React = require('react');
import { Button, Card } from 'react-bootstrap';

function TeacherItem({ teacher, user }) {
  return (
    <Card body className='card-teacher mb-3'>
      {teacher.name}
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
    </Card>
  );
}

export default TeacherItem;
