import { Post as HttpPost, PostToken as HttpPostToken } from 'utils/httpHelper'
import jwt_decode from 'jwt-decode'
import { ToastStore } from 'react-toasts'

const accountService = {
  login,
  logout,
  controlTokenExpiry,
  changePassword,
  tokenUserInfo
};
 
function tokenUserInfo() {
  var token = localStorage.getItem('userToken');
  var decoded = jwt_decode(token);

  return {
    companyId: decoded.CompanyId,
    userName: decoded.UserName
  }
}

function controlTokenExpiry(token)
{
  let result = false;
  var decoded = jwt_decode(token);
  //console.log('decode token: ', token)
  if(decoded.exp)
  {
    var now = new Date();
    var expiryDate = new Date(decoded.exp*1000);
    //console.log('token expry date: ', decoded.exp*1000)
    //console.log('now date: ', now.getTime())
    if(expiryDate < now) // expiry
    {
      result = true;
      this.logout();
      // Todo: refresh token ile tekrar login edilecek
    }
    else
      result = false;
  }

  return result;
}

function login(username, password) {

  const user = {
    username: username,
    password: password
  }

  return HttpPost('account/login', user)
    .then(res => {
      const result = JSON.stringify(res);
      const resultObj = JSON.parse(result);
      //console.log(resultObj.isSucceed)
      // login successful if there's a token in the response
      if (res.isSucceed == false) {
        ToastStore.error(res.message, 5000);
      }
      else
      {
        // store user details and basic auth credentials in local storage 
        localStorage.setItem('userToken', res.token);
      }

      return res;
    });
}

function changePassword(username, oldPassword, newPassword) {

  const newPass = {
    username: username,
    oldPassword: oldPassword,
    newPassword: newPassword
  }

  return HttpPostToken('account/changePassword', newPass)
    .then(res => {
      const result = JSON.stringify(res);
      const resultObj = JSON.parse(result);
      if (resultObj.isSucceed) {
        // store user details and basic auth credentials in local storage 
        localStorage.removeItem('userToken');
        localStorage.setItem('userToken', res.token);
      }
      else {
        ToastStore.error(res.message, 5000);
      }

      return res;
    });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('userToken');
}

export default accountService