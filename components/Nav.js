import navstyle from  '../styles/Nav.module.css'
import Link from 'next/link'
function Nav() {
  return (
    <nav className={navstyle.nav}>
    <ul>
        <li>
            <Link href='/'>Home</Link>
        </li>
        <li>
            <Link href='/articles'>
                Articles
            </Link>
        </li>
    </ul>


    </nav>
  )
}

export default Nav