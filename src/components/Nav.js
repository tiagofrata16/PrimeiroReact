import styles from './Nav.module.css'

function Nav() {
  return (
    <nav className = {styles.nav}>
        <a href="localhost:3000">Home</a>
        <a href="localhost:3000">New</a>
        <a href="localhost:3000">Popular</a>
        <a href="localhost:3000">Trending</a>
        <a href="localhost:3000">Categories</a>
    </nav>
  );
}

export default Nav;