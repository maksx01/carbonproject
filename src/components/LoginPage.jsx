import "./Style.css"
import { Link } from "react-router-dom"
import Hidden from "./img/hidden.png"
import Show from "./img/show.png"
import { useState } from "react"

const LoginPage = () => {
    const [visible, setVisible] = useState(false)
    const handleShow = () => {
        setVisible(true)
        if(visible){
            setVisible(false)
        }
    }

    return (
    <div className="box">
        <div className="login-form">
            <form>
                <input className="input" type="email" id="email" name="email" placeholder="Email" required></input>
                <div className="password-input-box">
                <input className="password-input" type={visible?"text":"password"} id="password" name="password" placeholder="Password" required></input>
                <img className="eye-icon" src={visible?Show: Hidden} alt="" onClick={handleShow}></img>
                </div>
                    <Link to={"/form"}><button className="login-button" type="submit">Login</button></Link>
            </form>
            <div className="links">
                <Link className="a-forget">Sign up</Link>
                <Link className="a-forget">Forget password?</Link>
            </div>
        </div>
    </div>
    );
}

export default LoginPage;
