import React from "react";
import { Modal, Button } from "react-bootstrap";

function PopUp(props) {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.body}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary">Atras</Button>
        <Button variant="outline-secondary">Continuar</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default PopUp;
