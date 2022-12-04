import { Link } from '@redwoodjs/router';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef } from 'react';


const FormDefault = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => { setPasswordShown(!passwordShown) }

  const studyInput = useRef(null);

  useEffect(() => {
    if (studyInput.current) {
      studyInput.current.focus();
    }
  }, []);

return (
  <Form className='w-100'>
    <Form.Group className="mb-3" controlId="formStudy" id="formStudy">
      <Form.Control type="text" placeholder="Code de l'étude" ref={studyInput} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formPassword">
      <Form.Control type="text" placeholder="N° de centre (ou login)" value={"1"} />
    </Form.Group>
    <Form.Group className="mb-3 position-relative" controlId="formPassword">
      <Form.Control type={passwordShown ? "text" : "password"} placeholder="Signature personnelle" value={"1235inv"} />
      <FontAwesomeIcon className='position-absolute top-50 translate-middle text-secondary end-0 bottom-0' icon={passwordShown ? faEyeSlash : faEye} onClick={togglePassword} />
    </Form.Group>
    <Link to='/Dashboard'>
      <Button className='w-100' variant="primary" type="submit">
        Envoyer
      </Button>
    </Link>
    <div className="d-flex justify-content-between">
      <Link to='/ForgotPassword' className='text-danger text-decoration-none'>
        <p className='mt-2'><small>Mot de passe oublié ?</small></p>
      </Link>
      <Link to='http://www.medsharing.fr' className='text-primary text-decoration-none'>
        <p className='mt-2'><small>Eol © Medsharing</small></p>
      </Link>
    </div>
  </Form>
);
}

export default FormDefault;
