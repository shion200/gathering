import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const Alcohol = () => {
  const [image, setImage] = useState<File>();
  const [imageUrl, setImageUrl] = useState("");

  const storage = getStorage();
  const storageRef = ref(storage, 'beer.jpg');

  const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) {
      return;
    }

    // FileListのままだとforEachが使えないので配列に変換する
    const fileArray = Array.from(files);
    const file = fileArray[0];
    setImage(file)
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!image) {
      console.log("ファイルが選択されていません");
      return
    }
    // アップロード処理
    uploadBytes(storageRef, image)
      .then(async (snapshot) => {
        const downloadUrl = await getDownloadURL(snapshot.ref);
        console.log(downloadUrl);
      })
      .catch((e) => {
        console.error(e);
      })

    // const next = snapshot => {
    //   // 進行中のsnapshotを得る
    //   // アップロードの進行度を表示
    //   const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //   console.log(percent + "% done");
    //   console.log(snapshot);
    // };
    // const error = error => {
    //   // エラーハンドリング
    //   console.log(error);
    // };

    // const complete = () => {
    //   // 完了後の処理
    //   // 画像表示のため、アップロードした画像のURLを取得
    //   storage
    //     .ref("images")
    //     .child(image.name)
    //     .getDownloadURL()
    //     .then(fireBaseUrl => {
    //       setImageUrl(fireBaseUrl);
    //     });
  };

  return (
    <div className="App">
      <h1>Form</h1>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={handleImage} />
        <button>Upload</button>
      </form>
      <img src={imageUrl} alt="uploaded" />
    </div>
  );
};
