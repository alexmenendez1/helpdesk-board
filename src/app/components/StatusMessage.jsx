"use client";

let statusMessage = "";

if (!tickets) {
  // tickets haven't loaded yet
  statusMessage = "Loading…";
} else if (tickets.length === 0) {
  // API returned no tickets
  statusMessage = "Unable to load tickets.";
} else if (filteredTickets.length === 0) {
  // tickets exist but filters remove all of them
  statusMessage = "No tickets match your filters.";
} else {
  statusMessage = ""; // tickets exist and filtered list has results
}
