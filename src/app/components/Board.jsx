"use client";
import { useEffect, useState } from "react";
import TicketList from "./TicketList";
import StatusFilter from "./StatusFilter";
import MyQueueSummary from "./MyQueueSummary";



export default function TicketBoard() {
    const [ tickets, setTickets ] = useState([]);
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [queue, setQueue] = useState([]);

    useEffect(() => {
        fetch('/api/tickets')
            .then(response => response.json())
            .then(data => setTickets(data))
            .catch(error => console.error('Error fetching tickets:', error));
    }, []);
 


useEffect(() => {
    const interval = setInterval(() => {
        setTickets(prevTickets => {
            if (prevTickets.length === 0) return prevTickets;
            const index=Math.floor(Math.random() * prevTickets.length);
            const ticket = {...prevTickets[index]};
            if (Math.random() < 0.5) {
                const statusFlow = ["Open", "In Progress", "On Hold", "Resolved", "Closed"];
                const currentIndex = statusFlow.indexOf(ticket.status);
                ticket.status = 
                    currentIndex < statusFlow.length - 1
                        ? statusFlow[currentIndex + 1]
                        : statusFlow[currentIndex];
                    
            } else {
                const priorityFlow = ["Low", "Medium", "High", "Critical"];
                const currentIndex = priorityFlow.indexOf(ticket.priority);
                ticket.priority = 
                    currentIndex < priorityFlow.length - 1
                        ? priorityFlow[currentIndex + 1]
                        : priorityFlow[currentIndex];
            }
            ticket.updatedAt = new Date().toISOString();
            return prevTickets.map((t, i) => (i === index ? ticket : t));
      });
    }, Math.floor(Math.random() * 4000) + 6000);
    return () => clearInterval(interval);
}, []);
const filteredTickets = tickets.filter(ticket =>
     selectedStatus === "All" || ticket.status === selectedStatus
);

function addToQueue(ticket) {
    console.log(`Adding ticket ${ticket.id} to queue`);
    setQueue(prevQueue => [...prevQueue, ticket]);
}
function removeFromQueue(ticket) {
    setQueue(prev => prev.filter(t => t.id !== ticket.id));
}

function clearQueue() {
    setQueue([]);
}


return (
    <div>
        <StatusFilter 
            selectedStatus={selectedStatus} 
            onStatusChange={setSelectedStatus} 
        />  
<TicketList tickets={filteredTickets} onAddToQueue={addToQueue} />
<MyQueueSummary queue={queue}
    onRemoveFromQueue={removeFromQueue} 
    onClearQueue={clearQueue} />
</div>
);
}
