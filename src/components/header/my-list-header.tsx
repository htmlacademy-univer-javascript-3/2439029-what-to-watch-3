import Logo from './logo.tsx';
import UserPage from './user-page.tsx';


function MyListHeader() {
  return (
    <header className="page-header user-page__head">
      <Logo/>
      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
      <UserPage/>
    </header>
  );
}

export default MyListHeader;
