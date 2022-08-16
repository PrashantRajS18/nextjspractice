import headerstyle from '../styles/Header.module.css'


function Header() {
  return (
    <div className={headerstyle.title}>
    <h1>Prashant <span>Next js </span>Practice</h1>
    </div>
  )
}

export default Header