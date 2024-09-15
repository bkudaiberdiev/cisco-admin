import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { loginAction } from "../../store/auth/actions";
import Button from "../../components/button/Button";
import { authImageSVG, flagSVG, logoSVG, studentsSVG } from "../../assets/icons";
import InputField from "../../components/fields/InputField";
import classes from "./Signin.module.scss";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(loginAction({ formData, cb: () => navigate("/") }));
  };
  return (
    <div className={classes.signin}>
      <div className={classes.signin__image}>
        <img src={logoSVG} alt="" />
        <p>
          Ваш путеводитель по топовым <br /> университетам США и мира!
        </p>
        <img className={classes.signin__image_item} src={flagSVG} alt="" />
        <img className={classes.signin__image_item} src={studentsSVG} alt="" />
      </div>
      <div className={classes.signin__form_wrapper}>
        <form onSubmit={handleSubmit}>
          <h2>Вход</h2>
          <InputField onChange={handleChange} label="Логин" name="email" />
          <InputField onChange={handleChange} label="Пароль" name="password" type="password" />
          <Button type="submit" text="Войти" className={classes.signin__btn} />
          <p className={classes.signin__has_account}>
            У вас нет аккаунта? <Link to="/signup">Зарегистрироваться</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;
