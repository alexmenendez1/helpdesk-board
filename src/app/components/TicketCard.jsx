"use client";
import React from "react";

export default function TicketCard({ ticket, onAddToQueue }) {
    return (
        <div
            style={{
                border: "1px solid #ccc",
                borderRadius: "6px",
                padding: "10px",
                margin: "10px 0",
                backgroundColor: "#f9f9f9",
            }}
        >
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>Priority: {ticket.priority}</p>
            <p>Status: {ticket.status}</p>
            <p>Assignee: {ticket.assignee}</p>
            <p>Last Updated: {new Date(ticket.updatedAt).toLocaleString()}</p>

            

            <button onClick={()=> onAddToQueue(ticket)}>Add to Queue</button>

        </div>
    );
}
