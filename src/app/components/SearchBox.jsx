"use client";
import React from "react";

export default function SearchBox({ searchQuery, onSearchChange }) {
    return (
        <input
            type="text"
            placeholder="Search tickets..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
                padding: "6px 10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                marginBottom: "10px",
                width: "100%",
            }}
        />
    );
}
