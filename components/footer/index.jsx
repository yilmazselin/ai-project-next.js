import styles from "./styles.module.scss";
import TwitterIcon from "../../assets/icons/twitter.svg"

function Footer() {
  return (
    <footer className={styles.footer}>
      <TwitterIcon />
      Footer
    </footer>
  );
}

export { Footer };
