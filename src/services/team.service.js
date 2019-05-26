import { PostToken as HttpPost } from '../util/httpHelper'
import { apiServiceUrl  } from '../util/const'
import { ToastStore } from 'react-toasts'

const teamService = {
  getEntityHeader,
  getTeamDetail,
  getTeamDetailWithHeader,
  getTeamsHeader,
  getTeams,
  insertOrUpdateTeam,
  deleteTeam
};

 
function getTeams(_request) {

  return HttpPost(apiServiceUrl.teamDetailedList, _request)
    .then(res => {
      if (res.isSucceed == false) {
        ToastStore.error(res.message, 5000);
      }

      return res;
  });
}

function getTeamsHeader(_request) {

  return HttpPost(apiServiceUrl.teamsHeader, _request)
  .then(res => {
    if (res.isSucceed == false) {
      ToastStore.error(res.message, 6000);
    }

    return res;
  });
}

function getTeamDetailWithHeader(_request) {

  return HttpPost(apiServiceUrl.teamDetailWithHeader, _request)
  .then(res => {
    if (res.isSucceed == false) {
      ToastStore.error(res.message, 6000);
    }

    return res;
  });
}

function getEntityHeader(_request) {

  return HttpPost(apiServiceUrl.teamHeader, _request)
  .then(res => {
    if (res.isSucceed == false) {
      ToastStore.error(res.message, 5000);
    }

    return res
  });
}

function getTeamDetail(_request) {

  return HttpPost(apiServiceUrl.teamDetail, _request)
  .then(res => {
    if (res.isSucceed == false) {
      ToastStore.error(res.message, 6000);
    }

    return res;
  });
}

function insertOrUpdateTeam(_request, toUrl)
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

function deleteTeam(_request)
{
  return HttpPost(apiServiceUrl.teamDelete, _request)
  .then(res => {
    if (res.isSucceed == true) {
      ToastStore.success("Takım silindi.");
    }
    else {
      ToastStore.error(res.message, 6000);
    }

    return res
  });
}

export default teamService