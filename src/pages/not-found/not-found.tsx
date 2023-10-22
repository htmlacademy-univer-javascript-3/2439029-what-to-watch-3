import {Link} from 'react-router-dom';
import styles from './not-found.module.css';

function NotFound() {
  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.info}>Страница не найдена</h2>
        <div className={styles.info}>Страница не существует или была
          удалена:(
        </div>
        <div className={styles.info}>Тык на
          <Link to={'/'} className={styles.link}>главную страницу приложения</Link>!!!
        </div>
      </div>
    </>
  );
}

export default NotFound;
