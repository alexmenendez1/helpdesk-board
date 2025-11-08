"use client";
import React from "react";

export default function MyQueueSummary({ queue, onRemoveFromQueue, onClearQueue }) {
    if (queue.length === 0) {
        return <div><p>Your queue is empty.</p></div>;

    }
    return (
        <div>
        <h2>Queue Summary</h2>
        <ul>
            {queue.map((ticket, index) => (
                <li key={index}>
                    <span> 
                    <strong>{ticket.title}</strong> - Status: {ticket.status} | {ticket.priority}                    
                </span>
                <button onClick={() => onRemoveFromQueue(ticket)}>Remove</button>
                </li>

            ))}
        </ul>
        <button onClick={onClearQueue} style={{ marginTop: "10px" }}>
                Clear Queue
            </button>
        </div>
    );
}