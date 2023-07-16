import React, { ChangeEvent, useState } from "react";

const FileUploadComponent: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // アップロード処理を行うためのコードを追加する
      console.log("Uploading file:", selectedFile.name);
      // ここに実際のアップロード処理を実装する
      const reader = new FileReader();
      reader.onload = () => {
        const fileData = reader.result as string;
        const base64Data = fileData.split(",")[1]; // Base64データ部分を取得
        const fileExtension = selectedFile.name.split(".").pop(); // 拡張子を取得

        const jsonData = {
          base64: base64Data,
          extension: fileExtension
        };

        console.log("JSON data:", jsonData);
        // ここでJSONデータの利用や送信処理を行う

        // リセットする場合はコメントを外してください
        // setSelectedFile(null);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
        <h1>aaaaaaaaaaaaaaaa</h1>
    </div>
  );
};

export default FileUploadComponent;
