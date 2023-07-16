import { useSwipeable } from 'react-swipeable'
import MycomponentProps from '../component/display'
import { getData } from '../getData/getData'

function Thread() {
  const data = getData()

  const serializedJson = JSON.stringify(data)
  const parsedJson = JSON.parse(serializedJson)
  console.log(parsedJson)
  
  const handlers = useSwipeable({
    onSwiped: (event) => {
      console.log(event)
      if (event.dir === 'Up') {
        //左にスワイプしたときに発火するイベント
        //hogehoge()
        console.log('Up')
      }
      if (event.dir === 'Down') {
        //右にスワイプしたときに発火するイベント
        //hogehoge
        console.log('Down')
      }
    },
    trackMouse: true, //マウス操作でのスワイプを許可する場合はtrue
  })
  return (
    <div {...handlers}>
      {data.map((data) => (
      <MycomponentProps img_url={data.img_url} reply_id={data.reply_id} />
      ))}
    </div>
  )
}

export default Thread
