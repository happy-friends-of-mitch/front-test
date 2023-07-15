import { useSwipeable } from 'react-swipeable'

function Thread() {
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
      <img
        src="https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/200c4a78-9b24-11e6-902c-00163ed833e7/541012800/mega-sync-screenshot.png"
        alt="サンプル画像"
      />
    </div>
  )
}

export default Thread
