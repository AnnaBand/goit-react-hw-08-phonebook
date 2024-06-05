import { NavLink } from 'react-router-dom';

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
};
  
  const Home = () => {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Welcome to Phonebook </h1>
        <p>Please <NavLink to="/register" style={({ isActive }) => isActive ? styles.linkActive : styles.link}>Register</NavLink> or 
        <NavLink to="/login" style={({ isActive }) => isActive ? styles.linkActive : styles.link}> Login</NavLink> to continue.
        </p>
      </div>
    );
  };
  
  export default Home;