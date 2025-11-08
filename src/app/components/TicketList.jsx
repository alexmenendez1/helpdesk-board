"use client";
import React from "react";
import TicketCard from "./TicketCard";
export default function TicketList({ tickets }) {
   return (
        <div>
            {tickets.map(ticket => (
                <TicketCard key={ticket.id} ticket={ticket} />
            ))}
        </div>
    );
}