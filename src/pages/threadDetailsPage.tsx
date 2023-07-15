function ThreadDetail() {
  const data = {
    img_url: "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/200c4a78-9b24-11e6-902c-00163ed833e7/541012800/mega-sync-screenshot.png",
    reply_id: 123456789,
    thread_id: 987654321,
    thread_name: "Sample Thread"
  };
  
  const serializedJson = JSON.stringify(data);
  const parsedJson = JSON.parse(serializedJson);
  console.log(parsedJson.thread_name);
    
  return(
    <div>
      <h2>Thread Name: {parsedJson.thread_name}</h2>
      <img
        src={parsedJson.img_url}
        alt="サンプル画像"
      />
    </div>
  )
}

export default ThreadDetail
