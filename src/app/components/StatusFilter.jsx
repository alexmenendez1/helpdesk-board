"use client";

export default function StatusFilter({selectedStatus, onStatusChange}) {
    return (
        <select 
            value={selectedStatus}
            onChange={(e) => onStatusChange(e.target.value)}
        >
            <option value="All">All</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="On Hold">On Hold</option>
            <option value="Resolved">Resolved</option>
            <option value="Closed">Closed</option>
        </select>
    );
}