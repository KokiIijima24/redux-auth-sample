import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../store/auth'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const submit = async () => {
    await dispatch(login(username, password));
    history.push("/mypage");
  };

  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
    </>
  );
}

export default Login