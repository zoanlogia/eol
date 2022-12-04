import Dropdown from 'react-bootstrap/Dropdown';



const DropdownLanguages = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-languages">
        <img className='me-2 rounded-circle' src="./assets/icons/fr.svg" style={{ width: '25px' }} alt="" />
        <span>Français</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">
          <img className='me-2 rounded-circle' src="./assets/icons/en.svg" style={{ width: '25px' }} alt="" />
          <span>English</span>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">
          <img className='me-2 rounded-circle' src="./assets/icons/de.svg" style={{ width: '25px' }} alt="" />
          <span>Deutsch</span>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          <img className='me-2 rounded-circle' src="./assets/icons/es.svg" style={{ width: '25px' }} alt="" />
          <span>Spanish</span>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-4">
          <img className='me-2 rounded-circle' src="./assets/icons/ru.svg" style={{ width: '25px' }} alt="" />
          <span>Russian</span>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownLanguages;
