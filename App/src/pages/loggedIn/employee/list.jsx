// ListView.jsx
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import listPlugin from "@fullcalendar/list";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import interactionPlugin from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { EventForm } from "../../../components/calander/eventForm"; // Import the EventForm component
import "../../../styles/calendar.css";

const ListView = () => {
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Event 1",
      start: "2024-10-30T10:00:00",
      end: "2024-10-30T12:00:00",
    },
    {
      id: "3",
      title: "Event 2",
      start: "2024-10-31T13:00:00",
      end: "2024-10-31T14:00:00",
    },
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
    setShowModal(true);
  };

  const handleSaveEvent = (event) => {
    if (event.id) {
      const updatedEvents = events.map((evt) =>
        evt.id === event.id ? { ...evt, ...event } : evt
      );
      setEvents([...updatedEvents]); // Ensure a new array reference
    } else {
      const newEvent = {
        id: String(events.length + 1),
        title: event.title,
        start:
          event.start instanceof Date ? event.start.toISOString() : event.start,
        end: event.end instanceof Date ? event.end.toISOString() : event.end,
        extendedProps: {
          clientName: event.clientName,
          clientNumber: event.clientNumber,
          clientEmail: event.clientEmail,
          notes: event.notes,
        },
      };
      setEvents([...events, newEvent]);
    }
    setShowModal(false); // Close the modal after saving
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedEvent(null); // Clear selected event on close
    setSelectedDate(null); // Clear selected date on close
  };

  // Function to open modal for adding a new event
  const handleAddNewEvent = () => {
    setSelectedEvent(null);
    setSelectedDate(null);
    setShowModal(true);
  };

  return (
    <>
      <FullCalendar
        plugins={[listPlugin, bootstrap5Plugin, interactionPlugin]}
        themeSystem="bootstrap5"
        initialView="listWeek" // Set the initial view to list week
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "listDay,listWeek,listMonth", // List view options
        }}
        buttonText={{
          listDay: "Day",
          listWeek: "Week",
          listMonth: "Month",
        }}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        selectMirror={true}
      />
      <EventForm
        show={showModal}
        handleClose={handleClose}
        handleSave={handleSaveEvent}
        selectedEvent={selectedEvent}
        selectedDate={selectedDate}
      />
      
      {/* Floating action button */}
      <button
        className="btn btn-primary plus-button"
        onClick={handleAddNewEvent}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        +
      </button>
    </>
  );
};

export default ListView;
