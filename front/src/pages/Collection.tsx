import { useState } from "react";
import { useAuth } from "../contexts/Auth";


interface AlcoholResponse {
  name: string;
  url: string;
  date: Date;
}

export const Collection = () => {
  const { user } = useAuth();
  const [data, setData] = useState<AlcoholResponse[]>();
  user?.getIdToken()
    .then((idToken) => {
      return fetch(`${process.env.REACT_APP_API_URL}/alcohol`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      const data = responseJson as AlcoholResponse[];
      setData(data);
      // console.log(responseJson);
    });

  return (
    <div>
      {data?.map((d) => <p>{d.name}</p>)}
      {data?.map((d) => <img src ={d.url} alt = ""/>)}
    </div>
  )
};
