import {useForm} from "react-hook-form";

import css from './Login.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {authAction} from "../../redux";
import {joiResolver} from "@hookform/resolvers/joi";
import {loginValidator} from "../../validators";

const LoginPage = () => {

    const {handleSubmit, register, reset, formState:{errors, isValid} } = useForm(
        {mode:"onTouched", resolver: joiResolver(loginValidator)}
    )
    const navigate = useNavigate();

    const [user, setUser] = useState();

    const dispatch = useDispatch()
    const {login: loginAuth} = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(authAction.login(user))
    }, [dispatch,user])

    const login = (data) => {
        setUser(data)
        reset();
        navigate('/',{replace:true})
    }

    return (
  <div className={css.loginBox}>
<h2>Login Form</h2>
      <form onSubmit={handleSubmit(login)}>
          <div className={css.userBox}>
              <input type="text" {...register("email")}/>
              {errors.email ? <span>{errors.email.message}</span> : <label>email</label>}
          </div>
          <div className={css.userBox}>
              <input type="text" {...register("password")}/>
              {errors.password ? <span>{errors.password.message}</span> : <label>password</label>}

          </div>
          {isValid ? <button className={css.a}>Login</button> :
              <button className={css.button}>
              <p>is not valid!</p>
          </button>}
      </form>

  </div>
);
};

export {LoginPage};