import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 700,
    fontSize: 50,
    textAlign: 'center',
    margin: 30,
    color: '#3a3a3a',
    textShadow: '2px 2px 2px rgba(0, 0, 0, 0.3)',
  },
  link: {
    margin: '0 5px',
    color: '#3a3a3a',
    textDecoration: 'none',
    fontWeight: 600,
  },
  linkActive: {
    color: '#3a3a3a',
    fontWeight: 700,
  },
};

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Phonebook </h1>
      {!isLoggedIn && (
        <p>
          Please <NavLink to="/register" style={({ isActive }) => isActive ? styles.linkActive : styles.link}>Register</NavLink> or 
          <NavLink to="/login" style={({ isActive }) => isActive ? styles.linkActive : styles.link}> Login</NavLink> to continue.
        </p>
      )}
    </div>
  );
};

export default Home;