import styles from "./Button.module.css";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export const ToAl = () => {
   const navigate = useNavigate();
   const handleSubmit = () => {
        navigate("/alcohol");
    };
   return <button type = "button" className={styles.button} onClick = {handleSubmit}>お酒の追加</button>;
 };

 export const ToHome = () => {
   const navigate = useNavigate();
   const handleSubmit = () => {
        navigate("/");
    };
   return <button type = "button" className={styles.button} onClick = {handleSubmit}>戻る</button>;
 };

 export const ToCo = () => {
   const navigate = useNavigate();
   const handleSubmit = () => {
        navigate("/collection");
    };
   return <button type = "button" className={styles.button} onClick = {handleSubmit}>収集品</button>;
 };
