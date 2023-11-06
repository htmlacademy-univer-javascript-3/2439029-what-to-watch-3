import Logo from './logo.tsx';
import UserPage from './user-page.tsx';


function Header() {
  return (
    <header className="page-header user-page__head">
      <Logo/>
      <UserPage/>
    </header>
  );
}

export default Header;
