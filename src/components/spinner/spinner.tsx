import styles from './spinner.module.css';

const Spinner = () => (
  <div className={styles.box}>
    <div className={styles.main}></div>
    <div>Идет загрузочка...</div>
  </div>
);

export default Spinner;
