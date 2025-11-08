"use client";
import React from "react";
export default function TicketCard({ ticket }) {
    return (
        <div className="ticket-card">
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>Priority: {ticket.priority}</p>
            <p>Status: {ticket.status}</p>
            <p>Assignee: {ticket.assignee}</p>
            <p>Last Updated: {new Date(ticket.updatedAt).toLocaleString()}</p>
        </div>
    );
}