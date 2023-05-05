import { Link } from "react-router-dom";

function Register() {
    return (
        <form className="signup-signin-form">
            <h2 className="signup-signin-form__header">Регистрация</h2>
            <input
                className="signup-signin-form__input"
                type="text"
                placeholder="Email"
                minLength="2"
                maxLength="40"
                required />
            <input
                className="signup-signin-form__input"
                type="password"
                placeholder="Пароль"
                minLength="2"
                maxLength="200"
                required />
            <button className="signup-signin-form__submit-button" type="submit">Зарегистрироваться</button>
            <p className="signup-signin-form__sign">Уже зарегистрированы? 
            <Link className="signup-signin-form__link" to="/sign-in">Войти</Link></p>
        </form>
    );
}

export default Register;