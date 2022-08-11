import styles from "./styles.module.scss";

export function QRCodeCard() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="image-qr-code.png" alt="QR Code" />
      </div>
      <div className={styles.textContainer}>
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}
