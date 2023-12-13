import {Navigate} from 'react-router-dom';
import {useAppSelector} from 'components/use-app/use-app.tsx';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const auth = useAppSelector((state) => state.authorizationStatus);
  return (
    auth ? props.children : <Navigate to={'/login'}/>
  );
}

export default PrivateRoute;
