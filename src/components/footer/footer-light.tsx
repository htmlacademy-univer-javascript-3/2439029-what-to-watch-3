import {Link} from 'react-router-dom';
import {PATHS} from '@const/paths.ts';

function FooterLight() {
  return (
    <footer className="page-footer">
      <div className="logo">
        <Link to ={PATHS.Main()} className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default FooterLight;
