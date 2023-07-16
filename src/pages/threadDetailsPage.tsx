import MyComponentProps from '../component/display'
import FileUploadComponent from '../component/uploadImage'
import { getData } from '../getData/getData'
import { styled } from '@mui/system'
import Paper from '@mui/material/Paper'

const BottomButton = styled(FileUploadComponent)({
  position: 'fixed',
  top: 0, 
})

function ThreadDetail() {

  const data = getData()

  const serializedJson = JSON.stringify(data)
  const parsedJson = JSON.parse(serializedJson)
  console.log(parsedJson[0].reply_id)

  return (
    <div style={{marginBottom:'56px',padding:0}}>
      {parsedJson[0].thread_name}
      {data.map((data) => (
        <Paper>
          <MyComponentProps img_url={data.img_url} reply_id={data.reply_id} />
          <BottomButton thread_id={parsedJson[0].thread_id} reply_id={0} />
        </Paper>
      ))}
    </div>
  )
}

export default ThreadDetail
