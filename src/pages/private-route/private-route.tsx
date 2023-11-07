import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  isAuthorize: boolean;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  return (
    props.isAuthorize ? props.children : <Navigate to={'/login'}/>
  );
}

export default PrivateRoute;
