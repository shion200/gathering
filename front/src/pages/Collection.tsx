import { useState,useEffect } from "react";
import { useAuth } from "../contexts/Auth";
import { ToHome } from "../components/Button";


interface AlcoholResponse {
  name: string;
  url: string;
  date: Date;
}

export const Collection = () => {
  const { user } = useAuth();
  const [data, setData] = useState<AlcoholResponse[]>();
  useEffect(() => {
    if (user) {
      user.getIdToken()
        .then((idToken) => {
          return fetch('http://localhost:8787/alcohol', {
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
        });
    }
  }, [user]);

  return (
    <div
      style={{
        margin: "auto",
        width: "50%",
      }}
    >
      <h1>収集品</h1>
      {/* {data?.map((d) => <p>{d.name}</p>)} */}
      {data?.map((d) => <img src ={d.url} height={200} />)}
      <p><ToHome /></p>
    </div>
  )
};
