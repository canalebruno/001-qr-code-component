import type { NextPage } from "next";
import { QRCodeCard } from "../components/qrcode-card";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <QRCodeCard />
      <QRCodeCard />
      <QRCodeCard />
      <QRCodeCard />
      <QRCodeCard />
      <QRCodeCard />
      <QRCodeCard />
      <QRCodeCard />
    </div>
  );
};

export default Home;
