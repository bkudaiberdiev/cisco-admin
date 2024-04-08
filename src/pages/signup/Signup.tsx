import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { authImageSVG } from "../../assets/icons";
import InputField from "../../components/fields/InputField";
import classes from "../signin/Signin.module.scss";

function Signup() {
  const handleChange = (e: any) => {};
  return (
    <div className={classes.signin}>
      <div className={classes.signin__form_wrapper}>
        <form>
          <h2>Регистрация</h2>
          <InputField label="Почта" />
          <InputField label="Имя" />
          <InputField label="Фамилия" />
          <InputField label="Номер" />
          <InputField onChange={handleChange} label="Пароль" type="password" />
          <InputField onChange={handleChange} label="Потвердить пароль" type="password" />
          <Button text="Зарегистрироваться" className={classes.signin__btn} />
          <p className={classes.signin__has_account}>
            У вас есть аккаунт? <Link to="/signin">Войти</Link>
          </p>
        </form>
      </div>
      <div className={classes.signin__image}>
        <img src={authImageSVG} alt="" />
      </div>
    </div>
  );
}

export default Signup;
