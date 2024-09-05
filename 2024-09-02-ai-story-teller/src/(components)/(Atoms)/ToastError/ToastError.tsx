import { Dispatch, SetStateAction, useEffect } from "react";
import styles from "./ToastError.module.scss";

type TypeToast = "error";

interface ToastProps {
  message: string;
  type: TypeToast;
  setAction: Dispatch<SetStateAction<boolean>>;
}
function Toast({ message, type, setAction }: ToastProps) {
  useEffect(() => {
    const timeoutId = setTimeout(() => setAction(false), 5000);
    return () => clearTimeout(timeoutId);
  }, [setAction]);

  return (
    <div className={styles.toast}>
      <p>{message}</p>
      <p onClick={() => setAction(false)} className={styles.close}>
        x
      </p>
      <div className={styles.progressBar}>
        <div className={styles.fill}></div>
      </div>
    </div>
  );
}

export default Toast;
