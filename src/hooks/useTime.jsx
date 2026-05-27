import React from "react";
import { useState, useEffect } from "react";

export function useTime() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = () => {
        return time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
    };

    const formatDate = () => {
        return time.toLocaleDateString([], {weekday: 'short', month: 'short', day: 'numeric'});
    };

    return { time: formatTime(), date: formatDate()};
}