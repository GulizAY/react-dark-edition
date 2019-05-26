import { PostToken as HttpPost } from '../util/httpHelper'
import { apiServiceUrl  } from '../util/const'
import { ToastStore } from 'react-toasts'

const userService = {
  getEntityHeader,
  getUserDetail,
  getUserDetailWithHeader,
  getUsers,
  insertOrUpdateUser,
  deleteUser
};

 
function getUsers(_request) {

  return HttpPost(apiServiceUrl.userList, _request)
    .then(res => {
      if (res.isSucceed == false) {
        ToastStore.error(res.message, 5000);
      }

      return res;
  });
}

function getUserDetailWithHeader(_request) {

  return HttpPost(apiServiceUrl.userDetailWithHeader, _request)
  .then(res => {
    if (res.isSucceed == false) {
      ToastStore.error(res.message, 6000);
    }

    return res;
  });
}

function getEntityHeader(_request) {

  return HttpPost(apiServiceUrl.userHeader, _request)
  .then(res => {
    if (res.isSucceed == false) {
      ToastStore.error(res.message, 5000);
    }

    return res
  });
}

function getUserDetail(_request) {

  return HttpPost(apiServiceUrl.userDetail, _request)
  .then(res => {
    if (res.isSucceed == false) {
      ToastStore.error(res.message, 6000);
    }

    return res;
  });
}

function insertOrUpdateUser(_request, toUrl)
{
  return HttpPost(toUrl, _request)
    .then(res => {
      if (res.isSucceed == true) {
        ToastStore.success("İşlem başarılı.");
      }
      else {
        ToastStore.error(res.message, 6000);
      }
      return res
  });
}

function deleteUser(_request)
{
  return HttpPost(apiServiceUrl.userDelete, _request)
  .then(res => {
    if (res.isSucceed == true) {
      ToastStore.success("Kullanıcı silindi.");
    }
    else {
      ToastStore.error(res.message, 6000);
    }

    return res
  });
}

export default userService