function Login() {
    return (
        <form className="signup-signin-form">
            <h2 className="signup-signin-form__header">Вход</h2>
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
            <button className="signup-signin-form__submit-button" type="submit">Войти</button>
        </form>
    );
}

export default Login;