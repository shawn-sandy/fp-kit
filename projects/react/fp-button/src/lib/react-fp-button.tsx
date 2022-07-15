import styles from "./react-fp-button.module.scss"

/* eslint-disable-next-line */
export interface ReactFpButtonProps {}

export function ReactFpButton(props: ReactFpButtonProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to ReactFpButton!</h1>
    </div>
  )
}

export default ReactFpButton
