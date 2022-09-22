import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import ModalForm from './components/ModalForm';
import Name from './components/Name';


function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [nameValue, setNameValue] = useState('name');

  const getValue = (name) => {
    setNameValue(name);
  }

  return (
    <div className="container m-5">

      <Button variant="primary" onClick={handleShow}>
        Enter your name
      </Button>

      {show && <ModalForm show={show} handleClose={handleClose} getValue={getValue}></ModalForm>}

      <Name name={nameValue}></Name>

    </div>
  );
}

export default App;
