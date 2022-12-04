import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropdownLanguages from '../DropdownLanguages/DropdownLanguages';
import FormDefault from '../Form/Form';

const CardDefault = () => {
  return (
    <Card className='w-100'>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <img className='shadow-sm' style={{ width: '80px' }} src="../../assets/img/logoEOL.png" alt="logo" />
          <DropdownLanguages />
        </div>
        <Card.Title className='text-center alert alert-primary bg-white border-0 mb-1'>
          <h4>Veuillez vous identifier</h4>
        </Card.Title>
        <FormDefault />
      </Card.Body>
    </Card>
  )
}

export default CardDefault
