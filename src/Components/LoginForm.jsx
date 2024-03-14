const LoginForm = ({handleClick}) => {
  return (
    <div>
        <h3>Debe loguearse</h3>
        <input role='email' type="email" />
        <input data-testid='password' type="password" />
        <button onClick={handleClick}>Enviar</button>
    </div>
  )
}

export default LoginForm