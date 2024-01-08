import {useAppDispatch, useAppSelector} from '@components/use-app/use-app.tsx';
import {Link} from 'react-router-dom';
import {logout} from '@api/api-action.ts';
import {getAuthorizationStatus, getUserImage} from '@store/user/selections.ts';
import {Paths} from '@const/paths.ts';

function UserPage() {
  const auth = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const image = useAppSelector(getUserImage);
  const onClick = () => {
    if (auth) {
      dispatch(logout());
    }
  };
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={Paths.MyList()} >
          <div className="user-block__avatar">
            <img src={image} alt="User avatar" width="63" height="63"/>
          </div>
        </Link>
      </li>
      <li className="user-block__item">
        <Link to="/login" className="user-block__link" onClick={onClick}>{auth ? 'Sign out' : 'Sign In'}</Link>
      </li>
    </ul>
  );
}

export default UserPage;
