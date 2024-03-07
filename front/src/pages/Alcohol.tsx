import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import { ToHome } from "../components/Button";

export const Alcohol = () => {
	const [image, setImage] = useState<File>();
	const { user } = useAuth();
	const navigate = useNavigate();

	const handleImage = (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;
		if (!files) {
			return;
		}

		// FileListのままだとforEachが使えないので配列に変換する
		const fileArray = Array.from(files);
		const file = fileArray[0];
		setImage(file);
	};

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!image) {
			console.log("ファイルが選択されていません");
			return;
		}

		if (!user) {
			console.error("ログインしていません．");
			return;
		}

		const storage = getStorage();
		const storageRef = ref(storage, `/user/${user.uid}/${image.name}`);

		// アップロード処理
		const snapshot = await uploadBytes(storageRef, image);
		const downloadUrl = await getDownloadURL(snapshot.ref);
		// API にPOSTする
		const method = "POST";

		const idToken = await user.getIdToken();
		await fetch("http://localhost:8787/alcohol", {
			method,
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${idToken}`,
			},
			body: JSON.stringify({ name: image.name, url: downloadUrl }),
		})
			.then((response) => response.json())
			// .then((responseJson) => {
			//   console.log(responseJson);
			// })
			.catch((error) => {
				console.error(error);
			});

		// Homeにリダイレクト
		navigate("/");
	};

	return (
		<div className="App">
			<h1>Form</h1>
			<form onSubmit={onSubmit}>
				<input type="file" onChange={handleImage} />
				<button type="submit">Upload</button>
				<ToHome />
			</form>
		</div>
	);
};
