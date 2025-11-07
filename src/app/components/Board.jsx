"use client";
import { useEffect, useState } from "react";
export default function TicketBoard() {
    const [ tickets, setTickets ] = useState([]);
    
    useEffect(() => {
        fetch('/api/tickets')
            .then(response => response.json())
            .then(data => setTickets(data))
            .catch(error => console.error('Error fetching tickets:', error));
    }, []);
    return (
        <ul>
            {tickets.map(ticket => (
                <li key={ticket.id}>
                    <h3>{ticket.title}</h3>
                    <p>{ticket.description}</p>
                    <p>Priority: {ticket.priority}</p>
                    <p>Status: {ticket.status}</p>
                    <p>Assignee: {ticket.assignee}</p>
                    <p>Last Updated: {new Date(ticket.updatedAt).toLocaleString()}</p>
                </li>
            ))}
        </ul>
    );
}
