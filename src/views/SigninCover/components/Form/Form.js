import React, { useState } from 'react';
import styles from './../../../SigninCover/SigninCover.module.css';
import Link from 'next/link';
import { Button } from '@material-ui/core';

const Form = () => {
  const [email, setEmail] = useState();
  const [passsword, setPasssword] = useState();
  const [message, setMessage] = useState();
  var myHeaders = new Headers();
  myHeaders.append(
    'Cookie',
    'ci_session=49fe10b4cceee7e74b43eb3c532e8afda6658230',
  );
  const UserLogin = async e => {
    var formdata = new FormData();
    formdata.append('email', email);
    formdata.append('passsword', passsword);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };
    e.preventDefault();
    try {
      const res = await fetch(
        'https://app.whyuru.com/api/beatnikLogin',
        requestOptions,
      )
        .then(response => response.json())
      setMessage(res.result.message);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className={styles.sign__wrapper}>
        <div className={styles.sign__input_wrapper}>
          <h5>Email Address</h5>
          <div className={styles.sign__input}>
            <input
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              placeholder="Enter Email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.sign__input_wrapper}>
          <h5>Password</h5>
          <div className={styles.sign__input}>
            <input
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Enter Password"
              type="password"
              onChange={e => setPasssword(e.target.value)}
            />
          </div>
        </div>
        <p>{message}</p>
        <div className={styles.sign__action}>
          <div className={styles.sign__agree}>
            <input className="m-check-input" type="checkbox" id="m-agree" />
            <label className={styles.m_check_label} htmlFor="m-agree">
              Remember Me
            </label>
          </div>
          <div className={styles.sign__forgot}>
            <Link href="/forgot-password">
              <p>Forgot password?</p>
            </Link>
          </div>
        </div>
     
       
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={styles.w_btn}
          onClick={UserLogin}
          
        >
          <span></span> Log In
        </Button>
        <div className={styles.sign__new}>
          <p>
            Don't have an account ?
            <Link href="/signup">
              <p>Sign Up</p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
