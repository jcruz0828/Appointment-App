// CalendarComponent.jsx
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import interactionPlugin from "@fullcalendar/interaction";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { EventForm } from "../../../components/calander/eventForm"; // Import the EventForm component
import "../../../styles/calendar.css";

const Calendar = () => {
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
    setSelectedEvent(clickInfo.event);
    setShowModal(true);
  };

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr); // Store the clicked date
    setShowModal(true);
  };

  const handleSaveEvent = (event) => {
    if (event.id) {
      // If an event ID exists, update the existing event
      const updatedEvents = events.map((evt) =>
        evt.id === event.id ? { ...evt, ...event } : evt
      );
      setEvents([...updatedEvents]); // Ensure a new array reference
    } else {
      // If no ID, create a new event
      const newEvent = {
        id: String(events.length + 1), // Generate a unique ID
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

  const handleEventDragStart = (info) => {
    const { event } = info;
    event.setProp("backgroundColor", "orange"); // Change color to indicate dragging
  };

  const handleEventDragStop = (info) => {
    const { event } = info;
    event.setProp("backgroundColor", event.extendedProps.originalColor || ""); // Reset color
  };

  const handleEventDrop = (info) => {
    const { event } = info;
    // Update the events state with the new start and end date
    setEvents((prevEvents) =>
      prevEvents.map((evt) =>
        evt.publicId === event.id
          ? { ...evt, start: event.startStr, end: event.endStr }
          : evt
      )
    );
    console.log(info);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedEvent(null); // Clear selected event on close
    setSelectedDate(null); // Clear selected date on close
  };

  return (
    <>
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          listPlugin,
          bootstrap5Plugin,
          interactionPlugin,
        ]}
        themeSystem="bootstrap5"
        initialView="timeGridWeek"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "timeGridDay,timeGridWeek,dayGridMonth"
        }}
        buttonText={{
          timeGridDay: "Day",
          timeGridWeek: "Week",
          dayGridMonth: "Month",
        }}
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        selectMirror={true}
        eventDragStart={handleEventDragStart}
        eventDragStop={handleEventDragStop}
        eventDrop={handleEventDrop}
      />
      <EventForm
        show={showModal}
        handleClose={handleClose}
        handleSave={handleSaveEvent}
        selectedEvent={selectedEvent}
        selectedDate={selectedDate}
      />
    </>
  );
};

export default Calendar;
