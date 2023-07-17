import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import List from '@mui/material/List';
import { ListItem, ListItemText } from '@mui/material';
import Card from '@mui/material/Card'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface Thread {
  thread_id: number
  thread_name: string
}

const ThreadList = () => {
  const [threads, setThreads] = useState<Thread[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://megatter-func.azurewebsites.net/api/ThreadGetTrigger?code=vtKLazXGp9PijcCcU2-powkTd4gFVOSCQQvFuKGsgfK0AzFumLtnBA==',
          {
            method: 'GET',
            redirect: 'follow',
          }
        )
        const data = await response.json()
        setThreads(data)
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1>スレッド一覧</h1>
      <List>
        {threads.map((thread) => (
          <Link to="/thread"
            style={{color:'black', textDecoration:'none', margin: '30%', textAlign: 'center'}}
          >
            <Card>
            <ListItem 
                key={thread.thread_id}
                style={{margin: '2%, auto, 2%, auto'}}
            >
                <OpenInNewIcon />
                {thread.thread_name}
                </ListItem>
            </Card>
          </Link>
        ))}
      </List>
    </div>
  )
}

export default ThreadList
