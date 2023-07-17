import React, { useState, useEffect } from 'react';
import { ListItemButton, ListItemText } from '@mui/material';

interface Thread {
    thread_id: number;
    thread_name: string;
}

const ThreadList = () => {
    const [threads, setThreads] = useState<Thread[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://megatter-func.azurewebsites.net/api/ThreadGetTrigger?code=vtKLazXGp9PijcCcU2-powkTd4gFVOSCQQvFuKGsgfK0AzFumLtnBA==", {
                    method: 'GET',
                    redirect: 'follow'
                });
                const data = await response.json();
                setThreads(data);
            } catch (error) {
                console.log('error', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>スレッド一覧</h1>
            <ul>
                {threads.map((thread) => (
                    <ListItemButton key={thread.thread_id} style={{ textAlign: 'center' }}>
                        <ListItemText primary={thread.thread_name} />
                    </ListItemButton>
                ))}
            </ul>
        </div>
    );
};

export default ThreadList;