import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import css from './Login.module.css'
import {useNavigate} from "react-router-dom";
import {setUser} from '../../redux'
import {loginValidator} from "../../validators";
import {useState} from "react";

const LoginPage = () => {
    const {handleSubmit, register, reset, formState:{errors, isValid} } = useForm(
        {mode:"onTouched", resolver: joiResolver(loginValidator)}
    )

    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const login = (data) => {
        const auth = getAuth();

        signInWithEmailAndPassword(auth, data.email, data.password).
        then(({user})=> {
            dispatch(setUser({
                email: user.email,
                token: user.accessToken
            }))
            reset();
            navigate('/',{replace:true})
        })
            .catch(()=>setError(errors));
    }

    return (
        <div className={css.box}>
            <div className={css.loginBox}>
                <h2>Login Form</h2>

                <form onSubmit={handleSubmit(login)}>
                    <div className={css.userBox}>
                        <input type="text" {...register("email")}/>

                        {error ?
                            <label>Invalid email </label>
                            : errors.email ? <span>{errors.email.message}</span> : <label>email</label>
                        }
                    </div>
                    <div className={css.userBox}>
                        <input type="text" {...register("password")}/>

                        {error ?
                            <label>Invalid password </label>
                            : errors.password ? <span>{errors.password.message}</span> : <label>password</label>
                        }

                    </div>

                    {isValid ? <button className={css.a}>Login</button> :
                        <button className={css.button}>
                            <p>is not valid!</p>
                        </button>}

                </form>

            </div>
        </div>

);
};

export {LoginPage};