import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const PrivateRoute = ({element}) => {
  const isAuth = useSelector((state) => state.isAuth);
  const navigate = useNavigate();

  if (isAuth) {
    return element;
  } else {
    navigate("/");
    return null;
  }
}

export default PrivateRoute