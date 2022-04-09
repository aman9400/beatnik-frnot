import React, { useState } from 'react';
import styles from './../../../SigninCover/SigninCover.module.css';
import Link from 'next/link';
import { Button } from '@material-ui/core';

const ResetForm = () => {
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
      ).then(response => response.json());
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

        <div className={styles.sign__action}>
          <div className={styles.sign__agree}>
            <small>
              <em>We will send passsword rest link to your email.</em>
            </small>
          </div>
        </div>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={styles.w_btn}
          onClick={UserLogin}
        >
          <span></span> Reset Password
        </Button>
        <div className={styles.sign__new}>
          <p>
            <Link href="/signin">
              <p>Go Back</p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetForm;
