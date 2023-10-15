import { createSlice } from '@reduxjs/toolkit';
import { TOKEN_INFO } from 'constant';
import jwt_decode from 'jwt-decode';

const initialState = {
  sub: '',
  role: '',
  isLogin: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      const accessToken = localStorage.getItem(TOKEN_INFO.accessToken);
      var decoded = jwt_decode(accessToken);
      return {
        sub: decoded.sub,
        role: decoded.authrities[0].authority,
        isLogin: action.payload.isLogin,
      };
    },
    logout: (state, action) => {
      localStorage.removeItem(TOKEN_INFO.accessToken);
      localStorage.removeItem(TOKEN_INFO.refreshToken);
      return initialState;
    },
  },
});
const { reducer, actions } = authSlice;

export const { setAuth, logout } = actions;
export default reducer;
