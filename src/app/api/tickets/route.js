export async function GET() {

const tickets = [
    {
  id: "t-1001",
  title: "Cannot connect to VPN",
  description: "User reports intermittent VPN connectivity errors.",
  priority: "High",        
  status: "Open",          
  assignee: "Unassigned",  
  updatedAt: "2025-10-31T14:05:00Z"
},

{
    id: "t-1002",
    title: "Email not syncing",
    description: "User emails are not appearing on mobile device.",
    priority: "Medium",
    status: "In Progress",
    assignee: "Jane Doe",
    updatedAt: "2025-10-30T09:15:00Z"
  },
  {
    id: "t-1003",
    title: "Printer offline error",
    description: "Office network printer shows offline despite connection.",
    priority: "Low",
    status: "On Hold",
    assignee: "Unassigned",
    updatedAt: "2025-10-29T11:20:00Z"
  },
  {
    id: "t-1004",
    title: "Critical data breach detected",
    description: "Unauthorized access to sensitive records reported.",
    priority: "Critical",
    status: "Open",
    assignee: "John Smith",
    updatedAt: "2025-10-31T08:45:00Z"
  },
  {
    id: "t-1005",
    title: "Software update failed",
    description: "Automatic update for application failed with error code 503.",
    priority: "High",
    status: "Resolved",
    assignee: "Emily Taylor",
    updatedAt: "2025-10-28T16:00:00Z"
  },
  {
    id: "t-1006",
    title: "WiFi signal dropping",
    description: "User reports WiFi drops every 10 minutes.",
    priority: "Medium",
    status: "In Progress",
    assignee: "Unassigned",
    updatedAt: "2025-10-27T12:33:00Z"
  },
  {
    id: "t-1007",
    title: "Password reset link broken",
    description: "Reset link returns 404 error.",
    priority: "Low",
    status: "Open",
    assignee: "Michael Brown",
    updatedAt: "2025-10-26T14:17:00Z"
  },
  {
    id: "t-1008",
    title: "Application crash on startup",
    description: "App crashes immediately after launch for Mac users.",
    priority: "High",
    status: "On Hold",
    assignee: "Unassigned",
    updatedAt: "2025-10-30T10:05:00Z"
  },
  {
    id: "t-1009",
    title: "Database backup missed",
    description: "Scheduled backup didn’t run last night.",
    priority: "Critical",
    status: "Resolved",
    assignee: "Database Team",
    updatedAt: "2025-10-31T13:55:00Z"
  },
  {
    id: "t-1010",
    title: "File share access denied",
    description: "User can’t access shared folder on network drive.",
    priority: "Low",
    status: "In Progress",
    assignee: "Unassigned",
    updatedAt: "2025-10-25T09:40:00Z"
  },
  {
    id: "t-1011",
    title: "VPN latency high",
    description: "VPN connection is very slow for remote users.",
    priority: "Medium",
    status: "On Hold",
    assignee: "Network Team",
    updatedAt: "2025-10-30T09:00:00Z"
  },
  {
    id: "t-1012",
    title: "UI misalignment issue",
    description: "Buttons and fields misaligned on mobile version.",
    priority: "Low",
    status: "Resolved",
    assignee: "Front End Team",
    updatedAt: "2025-10-29T08:25:00Z"
  }
];
return new Response(JSON.stringify(tickets), {
    headers: { 'Content-Type': 'application/json' }
}
);
}
