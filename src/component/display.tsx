import React from 'react'

interface MyComponentProps {
  img_url: string
  reply_id: number
}

export const display: React.FC<MyComponentProps> = ({ img_url, reply_id }) => {
  return (
    <div>
      <p>Reply ID: {reply_id}</p>
      <img src={img_url} alt="サンプル画像" />
    </div>
  )
}

export default display
