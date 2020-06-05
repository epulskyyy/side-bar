import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/modules/auth/actions';
import { Redirect } from 'react-router-dom';
import Loading from '../../containers/layout/loading';
import NavLogin from './NavLogin';
import CardLogin from './CardLogin';
import ReCaptcha from './RecaptchaLogin';
import ButtonLogin from './ButtonLogin';
import PanelCheckbox from './CheckBoxPanel';
import InputField from './InputField';

export default function Login(props) {
  const [user, setUser] = useState({
    email: '',
    password: '',
    isEmail: false,
    isPw: false,
    isChecked: false,
  });
  const auth = useSelector((state) => state.auth);
  const [isHuman, setIsHuman] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const setU = () => {
      if (auth.isChecked) {
        setUser({
          ...user,
          email: auth.post.email,
          password: auth.post.password,
          isChecked: auth.isChecked,
        });
      }
    };
    setU();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeRecaptha = (value) => {
    if (value != null) {
      setIsHuman(value);
    } else {
      setIsHuman(!isHuman);
    }
  };
  const handleInputChange = (event) => {
    event.persist();
    setUser((user) => ({ ...user, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.email === '') {
      setUser({ ...user, isEmail: true });
    } else if (user.password === '') {
      setUser({ ...user, isPw: true });
    } else if (isHuman === false) {
      alert(`verify if you is a human"`);
    } else {
      const newUser =
        user.email === '' && user.password === ''
          ? { email: e.target.email.value, password: e.target.password.value }
          : user;
      await dispatch(login(newUser, user.isChecked));
      await userSer();
    }
  };
  const userSer = () =>
    new Promise(() => {
      setUser({ ...user, password: '' });
    });

  const onCheckedHandler = (e) => {
    setUser({ ...user, isChecked: e.target.checked });
  };

  if (auth.isLoggedIn) {
    return <Redirect to="/" />;
  }
  console.log(auth.isLoading);
  if (auth.isLoading) {
    return <Loading />;
  }

  return (
    <div className="container__login">
      <div className="content-login row">
        <NavLogin />
        <div className="col-lg-5">
          <CardLogin>
            <div className="card-login-header text-center">
              <h2>Login</h2>
              <label>Log in to continue using Dashboard</label>
            </div>
            <div className="card-login-body">
              <form onSubmit={handleSubmit} noValidate>
                <InputField user={user} handleInputChange={handleInputChange} />
                <ReCaptcha onChangeRecaptha={onChangeRecaptha} />
                <ButtonLogin />
                <PanelCheckbox
                  checked={auth.isChecked}
                  onCheckedHandler={onCheckedHandler}
                />
              </form>
            </div>
          </CardLogin>
        </div>
        <div className="col-lg-7">
          <div className="login-bg">
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + '/login-bg.png'}
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
