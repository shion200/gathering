import styles from "./Button.module.css";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

export const Button = () => {
   const navigate = useNavigate();
   const handleSubmit = () => {
        navigate("/alcohol");
    };
   return <button type = "button" className={styles.button} onClick = {handleSubmit}>お酒の追加</button>;
 };
