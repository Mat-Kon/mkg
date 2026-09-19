import styles from './TestBox.module.scss';

export function TestBox() {
  return (
    <div className={styles.box}>
      <h1 className={styles.title}>SCSS Modules работают</h1>
      <button className={styles.button}>Проверить</button>
    </div>
  );
}