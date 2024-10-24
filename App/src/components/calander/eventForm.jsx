// EventForm.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export const EventForm = ({ show, handleClose, handleSave, selectedEvent, selectedDate}) => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  // Effect to set the form fields when selectedEvent changes
  useEffect(() => {
    if (selectedEvent) {
      setTitle(selectedEvent.title);
      setStart(selectedEvent.start);
      setEnd(selectedEvent.end);
      // Assuming your extendedProps contains client info
      setName(selectedEvent.extendedProps.clientName || '');
      setNumber(selectedEvent.extendedProps.clientNumber || '');
      setEmail(selectedEvent.extendedProps.clientEmail || '');
      setNotes(selectedEvent.extendedProps.notes || '');
    }
  }, [selectedEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave({
      title,
      start,
      end,
      clientName: name,
      clientNumber: number,
      clientEmail: email,
      notes,
    });
    handleClose();
    // Reset state if necessary
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedEvent ? 'Edit Event' : 'Add Event'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEventTitle">
            <Form.Label>Event Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEventStart">
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              type="datetime-local"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEventEnd">
            <Form.Label>End Time</Form.Label>
            <Form.Control
              type="datetime-local"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEventClient">
            <Form.Label>Client Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEventNumber">
            <Form.Label>Client Phone Number</Form.Label>
            <Form.Control
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEventEmail">
            <Form.Label>Client Email</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEventNotes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {selectedEvent ? 'Update Event' : 'Save Event'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EventForm;
