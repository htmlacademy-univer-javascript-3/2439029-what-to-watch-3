import {Navigate} from 'react-router-dom';
import {useAppSelector} from '@components/use-app/use-app.tsx';
import {getAuthorizationStatus} from '@store/user/selections.ts';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const auth = useAppSelector(getAuthorizationStatus);
  return (
    auth ? props.children : <Navigate to={'/login'}/>
  );
}

export default PrivateRoute;
