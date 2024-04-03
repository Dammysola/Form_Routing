import { Link } from 'react-router-dom'
import Style from './Page.module.css'

const LogOut =()=>{
  
    return (
      <>
       <div id={Style.LogOut_div}>
            <div className={Style.text}>You are Logged out </div>
            <Link to={'/login'}>
                <button id={Style.ClickHere_button}>Click here to log In</button>
            </Link>
       </div>
        
      </>
    )
}
export default LogOut