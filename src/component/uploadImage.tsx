import React, { ChangeEvent, useState } from 'react'
import SendIcon from '@mui/icons-material/Send'
import {InputAdornment, Input, IconButton } from '@mui/material';
import MyButton from './myBotton';


interface IdComponentProps {
  thread_id: number
  reply_id: number
}

const FileUploadComponent: React.FC<IdComponentProps> = ({
  thread_id,
  reply_id,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    setSelectedFile(file || null)
  }

  const handleUpload = () => {
    if (selectedFile) {
      // アップロード処理を行うためのコードを追加する
      console.log('Uploading file:', selectedFile.name)
      // ここに実際のアップロード処理を実装する
      const reader = new FileReader()
      reader.onload = () => {
        const fileData = reader.result as string
        const base64Data = fileData.split(',')[1] // Base64データ部分を取得
        const fileExtension = selectedFile.name.split('.').pop() // 拡張子を取得

        const jsonData = {
          base64: base64Data,
          extension: fileExtension,
          thread_id: thread_id,
          reply_id: reply_id,
        }

        console.log('JSON data:', jsonData)
        // ここでJSONデータの利用や送信処理を行う

        // リセットする場合はコメントを外してください
        // setSelectedFile(null);
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  return (
    <div>
      <Input
        type="file" 
        onChange={handleFileChange}
        placeholder='Button'
        startAdornment={
          <InputAdornment position='start'>
            <IconButton>
              <SendIcon />
            </IconButton>
          </InputAdornment>
        } 
      />
      {/* <Button onClick={handleUpload} disabled={!selectedFile} variant="contained" endIcon={<SendIcon />}>
        Upload
      </Button> */}
      <MyButton text="Upload" onClick={handleUpload} />
    </div>
  )
}

export default FileUploadComponent
