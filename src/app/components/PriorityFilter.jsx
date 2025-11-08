"use client";

export default function PriorityFilter({selectedPriority, onPriorityChange}) {
    return (
        <select 
            value={selectedPriority}
            onChange={(e) => onPriorityChange(e.target.value)}
        >
            <option value="All">All</option>
            <option value="Low">Low</option>
            <option value=" Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
        </select>
    );
}