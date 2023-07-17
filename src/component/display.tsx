import React, { useState } from 'react'

interface MyComponentProps {
  img_url: string
  reply_id: number
}

export const display: React.FC<MyComponentProps> = ({ img_url, reply_id }) => {
  const imageStyle = {
    width: '300px',
    height: 'auto',
  }
  const [isDisplayed] = useState(reply_id != 0)
  console.log(reply_id == 0)

  return (
    <div>
      {isDisplayed && (
        <p>
          {'>> '}
          {reply_id}
        </p>
      )}
      <img src={img_url} alt="サンプル画像" style={imageStyle} />
    </div>
  )
}

export default display
