import MyComponentProps from '../component/display'
import FileUploadComponent from '../component/uploadImage'
import { getData } from '../getData/getData'

function ThreadDetail() {
  const data = getData()

  const serializedJson = JSON.stringify(data)
  const parsedJson = JSON.parse(serializedJson)
  console.log(parsedJson)

  return (
    <div>
      {parsedJson.thread_name}
      {data.map((data) => (
        <MyComponentProps img_url={data.img_url} reply_id={data.reply_id} />
      ))}
      <FileUploadComponent />
    </div>
  )
}

export default ThreadDetail
