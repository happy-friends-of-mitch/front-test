import { useSwipeable } from "react-swipeable";

function Thread() {
    const image = "aa"
    const handlers = useSwipeable({
        onSwiped: (event) => {
            console.log(event);
            if (event.dir == "Up") {
                //左にスワイプしたときに発火するイベント
                //hogehoge()
                console.log("Up")
            }
            if (event.dir == "Down") {
                //右にスワイプしたときに発火するイベント
                //hogehoge
                console.log("Down")
            }
        },
        trackMouse: true, //マウス操作でのスワイプを許可する場合はtrue
    });
    return(
        <div {...handlers}>
            <h2>{image}</h2>
        </div>          
    )
}

export default Thread;