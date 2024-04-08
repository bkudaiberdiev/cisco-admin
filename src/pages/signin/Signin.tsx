import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { authImageSVG } from "../../assets/icons";
import InputField from "../../components/fields/InputField";
import classes from "./Signin.module.scss";

function Signin() {
  const navigate = useNavigate();
  const handleChange = (e: any) => {};
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className={classes.signin}>
      <div className={classes.signin__form_wrapper}>
        <form>
          <h2>Вход</h2>
          <InputField onChange={handleChange} label="Логин" />
          <InputField onChange={handleChange} label="Пароль" type="password" />
          <Button onClick={handleClick} text="Войти" className={classes.signin__btn} />
          <p className={classes.signin__has_account}>
            У вас нет аккаунта? <Link to="/signup">Зарегистрироваться</Link>
          </p>
        </form>
      </div>
      <div className={classes.signin__image}>
        <img src={authImageSVG} alt="" />
      </div>
    </div>
  );
}

export default Signin;
