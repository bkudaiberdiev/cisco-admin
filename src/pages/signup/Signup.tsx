import { Link } from "react-router-dom";
import { useState } from "react";
import { registerAction } from "../../store/auth/actions";
import { useAppDispatch } from "../../hooks/redux";
import Button from "../../components/button/Button";
import { authImageSVG, flagSVG, logoSVG, signBgSVG, studentsSVG } from "../../assets/icons";
import InputField from "../../components/fields/InputField";
import classes from "../signin/Signin.module.scss";

const initalForm = {
  email: "",
  first_name: "",
  last_name: "",
  phone_number: "",
  password: "",
  password_confirmation: "",
};
function Signup() {
  const [formData, setFormData] = useState(initalForm);
  const dispatch = useAppDispatch();
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(registerAction(formData));
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
          <h2>Регистрация</h2>
          <InputField onChange={handleChange} value={formData.email} label="Почта" name="email" />
          <InputField
            onChange={handleChange}
            value={formData.first_name}
            label="Имя"
            name="first_name"
            required
          />
          <InputField
            onChange={handleChange}
            value={formData.last_name}
            label="Фамилия"
            name="last_name"
            required
          />
          <InputField
            onChange={handleChange}
            value={formData.phone_number}
            label="Номер"
            name="phone_number"
            required
          />
          <InputField
            onChange={handleChange}
            value={formData.password}
            name="password"
            label="Пароль"
            type="password"
            required
          />
          <InputField
            onChange={handleChange}
            value={formData.password_confirmation}
            name="password_confirmation"
            label="Потвердить пароль"
            type="password"
            required
          />
          <Button text="Зарегистрироваться" type="submit" className={classes.signin__btn} />
          <p className={classes.signin__has_account}>
            У вас есть аккаунт? <Link to="/signin">Войти</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
