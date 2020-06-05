import jwt from 'jwt-simple';

export const loadState = () => {
  try {
    const tokenRememberMe = localStorage.getItem('_id');
    const serializedState = localStorage.getItem('state');
    const tokenRememberMe2 = sessionStorage.getItem('_id');
    const serializedState2 = sessionStorage.getItem('state');
    let userState;
    let state;
    if (serializedState == null) {
      // return undefined;
    } else {
      state = JSON.parse(serializedState);
    }
    if (serializedState2 == null) {
      // return undefined;
    } else {
      state = JSON.parse(serializedState2);
    }
    if (tokenRememberMe == null) {
      // return undefined;
    } else {
      const tokenDecode = JSON.parse(tokenRememberMe);
      userState = jwt.decode(tokenDecode.token, 'xxx');
    }
    if (tokenRememberMe2 == null) {
      // return undefined;
    } else {
      const tokenDecode = JSON.parse(tokenRememberMe2);
      userState = jwt.decode(tokenDecode.token, 'xxx');
    }
    const newState = {
      auth: {
        isLoggedIn: state.auth.isLoggedIn,
        token: state.auth.token,
        post: userState,
        isChecked: state.auth.isChecked,
        isLoading: state.auth.isLoading,
      },
    };
    return newState;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  const { isLoggedIn, token, post, isChecked, isLoading } = state.auth;
  const newState = {
    auth: {
      isLoggedIn: isLoggedIn,
      token: token,
      isChecked: isChecked,
      isLoading: isLoading,
    },
  };
  try {
    const serializedState = JSON.stringify(newState);
    const token = jwt.encode(post, 'xxx');
    if (isChecked) {
      localStorage.setItem('state', serializedState);
      localStorage.setItem('_id', JSON.stringify({ token: token }));
      sessionStorage.removeItem('state');
      sessionStorage.removeItem('_id');
    }
    if (isChecked === false) {
      localStorage.removeItem('state');
      localStorage.removeItem('_id');
      sessionStorage.setItem('state', serializedState);
      sessionStorage.setItem('_id', JSON.stringify({ token: token }));
    }
    console.log(isChecked);
  } catch (err) {
    //
  }
};
