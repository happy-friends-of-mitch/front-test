import React, { Component } from 'react'
import Button from '@mui/material/Button'
import IconButtom from '@mui/material/IconButton'
import AddCircleIcon from '@mui/icons-material/AddCircle'

interface MyButtonProps {
  text: String
  onClick?: () => void
}

const MyButton: React.FC<MyButtonProps> = ({ text, onClick }) => {
  return (
    <Button onClick={onClick} variant="contained" color="primary">
      <IconButtom>
        <AddCircleIcon />
      </IconButtom>
      {text}
    </Button>
  )
}

export default MyButton
