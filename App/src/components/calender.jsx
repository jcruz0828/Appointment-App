// CalendarComponent.jsx
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import interactionPlugin from '@fullcalendar/interaction';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { EventForm } from '../components/calander/eventForm'; // Import the EventForm component
import '../styles/calendar.css';

const Calendar = () => {
  const [events, setEvents] = useState([
    { id: '1', title: 'Event 1', start: '2024-10-30T10:00:00', end: '2024-10-30T12:00:00' },
    { id: '3', title: 'Event 2', start: '2024-10-31T13:00:00', end: '2024-10-31T14:00:00' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event); // Set the clicked event for editing
    setShowModal(true);
  };
  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr); // Store the clicked date
    setShowModal(true); // Show the modal when a date is clicked
  };

  const handleSaveEvent = (event) => {
    if (event.id) {
      // If an event ID exists, update the event
      const updatedEvents = events.map((evt) => 
        evt.id === event.id ? { ...evt, ...event } : evt
      );
      setEvents(updatedEvents);
    } else {
      // If no ID, it's a new event
      const newEvent = {
        id: String(events.length + 1), // Generate a simple ID
        title: event.title,
        start: event.start,
        end: event.end,
        extendedProps: {
          clientName: event.clientName,
          clientNumber: event.clientNumber,
          clientEmail: event.clientEmail,
          notes: event.notes,
        },
      };
      setEvents([...events, newEvent]);
    }
    setShowModal(false); // Close the modal
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, bootstrap5Plugin, interactionPlugin]}
        themeSystem="bootstrap5"
        initialView="timeGridWeek"
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'timeGridWeek,dayGridMonth,timeGridDay,listWeek',
        }}
        events={events}
        dateClick={handleDateClick} // Correctly set up dateClick handler
        eventClick={handleEventClick}
        editable={true}
        selectMirror={true}
      />
      <EventForm
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSaveEvent}
        selectedEvent={selectedEvent} // Pass selected event for editing
        selectedDate = {selectedDate}
      />
    </>
  );
};

export default Calendar;
