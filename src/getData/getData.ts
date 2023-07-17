import { useEffect, useState } from 'react'

interface Thread {
  img_url: string
  reply_id: number
  thread_id: number
  thread_name: string
}

export const getData = () => {
  const [threads, setThreads] = useState<Thread[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://megatter-func.azurewebsites.net/api/GetReelTrigger?code=3qROsI3SfE1CYAZBZMfKppmPC2gsZ-nzICNXRF0OkFgUAzFuIS2OeA==',
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

  return threads
}
