import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { User } from './models/user.model';
import { Admin, Analytics, Dashboard, Home, Landing } from './pages';


function App() {
  const [user, setUser] = useState({});
  const angel = new User(1, 'Angel');
  const login = () => {
    setUser(angel);
  };
  const logout = () => {
    setUser({});
  };

  return (
    <BrowserRouter>
      <Navigation />

      {
        Object.keys(user).length != 0 ? (
          <button onClick={logout}>Logout</button>
        ) :
          <button onClick={login}>Login</button>
      }

      <Routes>
        <Route index element={<Landing />} />
        <Route path='/landing' element={<Landing />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path='/home' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

function Navigation() {
  return <nav>
    <ul>
      <li>
        <Link to='/landing'>Landing</Link>
      </li>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link to='/analytics'>Analytics</Link>
      </li>
      <li>
        <Link to='/admin'>Admin</Link>
      </li>
    </ul>
  </nav>
}

export default App;