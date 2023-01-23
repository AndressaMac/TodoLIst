 import Logo from '../assets/Logo.png'
 import style from '../Components/Header.module.css'
 
 export default function Header(){
return(
  <header className={style.header}>
    <img src={Logo}  />
  </header>
)

 }