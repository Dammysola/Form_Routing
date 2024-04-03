import { useState } from "react"
import Style from './Navbar.module.css'


function LogIn() {
  const [UserDetails, SetUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    Image: ""
  })

  const [validation, SetValidation] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    Image: false
  })

  const Details = (e) => {
    const name = e.target.name
    const value = e.target.value

    SetUserDetails(
      (prevState) => ({
        ...prevState,
        [name]: value
      }
      ))

      
    handleValidation(e)
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    
    handleValidation(e)
    console.log(UserDetails.firstName, UserDetails.lastName, UserDetails.email, UserDetails.password);
  }


  const handleValidation = (e) => {
    const { firstName, lastName, email, password, Image } = validation;

    // console.log("message");
    let firstVal = UserDetails.firstName.length > 3 ? false : true;
    let lastVal = UserDetails.lastName.length  > 3 ? false : true;
    let emailVal = UserDetails.email.includes("@") && UserDetails.email.includes(".") ? false : true
    let passVal = UserDetails.password.length  > 8 ? false : true;
    let imageVal = Image

    
    const name = e.target.name

    SetValidation({
      ...validation,
      firstName: firstVal,
      email: emailVal,
      lastName: lastVal,
      password: passVal,
    })
  }




  return (
    <>
      <form onSubmit={HandleSubmit}>
        <div id={Style.main_div}>
          <h2 id={Style.sign_up}>LOG IN</h2>
          <div id={Style.Name_div}>

            <div className={Style.Input_div}>
              <label>First Name</label>
              <input className={Style.Input} type="text" name='firstName' placeholder='First Name'
                value={UserDetails.firstName} onChange={Details} /> <br /> 
                {validation.firstName && <div id={Style.val_text}> *FirstName too short</div> }
            </div><br />

            <div className={Style.Input_div}>
              <label>Last Name </label>
              <input className={Style.Input} type="text" name='lastName' placeholder='Last Name'
                value={UserDetails.lastName} onChange={Details} />
                 {validation.lastName && <div id={Style.val_text}> *LastName too short</div> }
            </div>
          </div><br />

          <div className={Style.Input_div}>
            <label>Email </label>
            <input className={Style.Input} type="email" name='email' placeholder="Email"
              value={UserDetails.email} onChange={Details} /> 
                {validation.email && <div id={Style.val_text}> *Error on email</div> }
          </div><br />

          <div className={Style.Input_div}>
            <label>Password </label>
            <input className={Style.Input} type="password" placeholder="Password" name='password'
              value={UserDetails.password} onChange={Details} />
              {validation.email && <div id={Style.val_text}> *Characters too short</div> }
          </div><br />

          <div className={Style.Input_div}>
            <label>Image</label>
            <input id={Style.Input} type="file" name="Image" value={UserDetails.Image} onChange={Details} />
          </div> <br />

          <div id={Style.Button_div}>
            <button type='submit' id={Style.SubmitButton} onSubmit={HandleSubmit}>LOG IN</button>
          </div>

        </div>

      </form>
    </>
  )
}

export default LogIn
