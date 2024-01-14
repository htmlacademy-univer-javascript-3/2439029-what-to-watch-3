import {Link} from 'react-router-dom';
import styles from './not-found.module.css';

function NotFound() {
  return (
    <div className={styles.page}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.info}>Page not found</h2>
      <div className={styles.info}>The page does not exist or was
        deleted :(
      </div>
      <div className={styles.info}>Poke on
        <Link to={'/'} className={styles.link}>main page of the application</Link>!!!
      </div>
    </div>
  );
}

export default NotFound;
