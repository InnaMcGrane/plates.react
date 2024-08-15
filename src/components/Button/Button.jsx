import styles from "./button.module.css"

function Button({type, text, handler}) {
    return <button className={`${styles["btn"]} ${styles[`btn--${type}`]}`} onClick={() => handler()}>{text}</button>;
}

export default Button;