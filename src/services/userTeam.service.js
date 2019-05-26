import { PostToken as HttpPost } from '../util/httpHelper'
import { apiServiceUrl  } from '../util/const'
import { ToastStore } from 'react-toasts'

const userTeamService = {
  insertUserToTeam,
  frezeeUserTeam,
  deleteUserTeam
};

function insertUserToTeam(_request) {

  return HttpPost(apiServiceUrl.userTeamInsert, _request)
  .then(res => {
    if (res.isSucceed == false) {
      ToastStore.error(res.message, 5000);
    }

    return res
  });
}

function frezeeUserTeam(_request) {

  return HttpPost(apiServiceUrl.userTeamUpdate, _request)
  .then(res => {
    if (res.isSucceed == false) {
      ToastStore.error(res.message, 5000);
    }

    return res
  });
}

function deleteUserTeam(_request)
{
  return HttpPost(apiServiceUrl.userTeamDelete, _request)
  .then(res => {
    if (res.isSucceed == false) {
      ToastStore.error(res.message, 5000);
    }

    return res
  });
}

export default userTeamService