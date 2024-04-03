import Style from './Navbar.module.css'
import {Link} from 'react-router-dom'

const Nav =()=>{

    return(
        <>
            <div id={Style.container}>
             <img id={Style.logo} src="./src/assets/Logo.png" alt="" />
                <div  className={Style.navs}>
                    <Link id='link' to={'/'}>
                        <div className={Style.link}>Home</div>
                    </Link>
                    <Link to={'/about'}>
                        <div className={Style.link}>About</div>
                    </Link>
                    <Link to={'/service'}>
                        <div className={Style.link}>Service</div>
                    </Link>
                </div>
                <div>
                    <Link to={'/login'}>
                        
                        <button>Log In</button>
                    </Link> 
                    <Link to={'/*'}>
                        <button>LogOut</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Nav