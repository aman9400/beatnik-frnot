import React, { useState } from 'react';
import styles from './../../../SigninCover/SigninCover.module.css';
import Link from 'next/link';
import { Button, Grid, Select, MenuItem } from '@material-ui/core';

const Form = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [passsword, setPasssword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [joinAs, setJoinAs] = useState();
  const [aboutMe, setAboutMe] = useState();
  const [message, setMessage] = useState();
  const [age, setAge] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  var myHeaders = new Headers();
  myHeaders.append(
    'Cookie',
    'ci_session=49fe10b4cceee7e74b43eb3c532e8afda6658230',
  );
  const UserLogin = async e => {
    // var formdata = new FormData();
    // formdata.append('name', name);
    // formdata.append('email', email);
    // formdata.append('passsword', passsword);
    // formdata.append('phoneNumber', phoneNumber);
    // formdata.append('joinAs', joinAs);
    // formdata.append('aboutMe', aboutMe);
    var data = JSON.stringify({
      name: name,
      email: email,
      passsword: passsword,
      phoneNumber: phoneNumber,
      joinAs: joinAs,
      aboutMe: aboutMe,
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow',
    };
    e.preventDefault();
    try {
      const res = await fetch(
        'https://app.whyuru.com/api/beatnikSignup',
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
          <h5>Name</h5>
          <div className={styles.sign__input}>
            <input
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="name"
              placeholder="Enter Your Name"
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.sign__input_wrapper}>
          <h5>Email</h5>
          <div className={styles.sign__input}>
            <input
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              placeholder="Enter Your Email"
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
              type="password"
              placeholder="Enter Your Password"
              onChange={e => setPasssword(e.target.value)}
            />
          </div>
        </div>

        <Grid container spacing={1}>
          <Grid item xs={6} spacing={3}>
            <div className={styles.sign__input_wrapper}>
              <h5>
                Phone Number <small> (Optional)</small>
              </h5>
              <div className={styles.sign__input}>
                <input
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="phone number"
                  placeholder="Phone Number"
                  type="number"
                  onChange={e => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={6} spacing={3}>
            <div className={styles.sign__input_wrapper}>
              <h5>
                I want to join as? <small> (Optional)</small>
              </h5>
              <div className={styles.sign__input}>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  placeholder="I want to join as?(Optional)"
                  onChange={e => setJoinAs(e.target.value)}
                >
                  <MenuItem value="Hobby">Hobby</MenuItem>
                  <MenuItem value="Org">Org</MenuItem>
                  <MenuItem value="Artist">Artist</MenuItem>
                </Select>
                {/* <input
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="email"
                  placeholder="I want to join as?(Optional)"
                  onChange={e => setJoinAs(e.target.value)}
                /> */}
              </div>
            </div>
          </Grid>
        </Grid>
        <div className={styles.sign__input_wrapper}>
          <h5>About Me</h5>
          <div className={styles.sign__input}>
            <textarea
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="about me"
              placeholder="About Me"
              onChange={e => setAboutMe(e.target.value)}
            />
          </div>
        </div>
        <p>{message}</p>

        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={styles.w_btn}
          onClick={UserLogin}
        >
          <span></span> Sign Up
        </Button>
        <div className={styles.divider}>
          <span></span>
          <b>OR</b>
        </div>
        <div
          style={{ marginTop: '0px !important' }}
          className={styles.sign__new}
        >
          <p>
            Already have an account ?
            <Link href="/signin">
              <p>Sign In</p>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Form;
