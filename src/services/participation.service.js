import { PostToken as HttpPost } from '../util/httpHelper'
import { apiServiceUrl  } from '../util/const'
import { ToastStore } from 'react-toasts'

const participationsService = {
  getEntityHeader,
  getParticipationDetail,
  getParticipationDetailWithHeader,
  getParticipationsHeader,
  getParticipations,
  insertOrUpdateParticipation,
  deleteParticipation,
  updateUserParticipation,
  updateManagerControlParticipation
};

 
function getParticipations(_request) {

  return HttpPost(apiServiceUrl.participationDetailedList, _request)
    .then(res => {
      if (res.isSucceed == false) {
        ToastStore.error(res.message, 5000);
      }

      return res;
  });
}

function getParticipationsHeader(_request) {

  return HttpPost(apiServiceUrl.participationsHeader, _request)
  .then(res => {
    if (res.isSucceed == false) {
      ToastStore.error(res.message, 6000);
    }

    return res;
  });
}

function getParticipationDetailWithHeader(_request) {

  return HttpPost(apiServiceUrl.participationDetailWithHeader, _request)
  .then(res => {
    if (res.isSucceed == false) {
      ToastStore.error(res.message, 6000);
    }

    return res;
  });
}

function getEntityHeader(_request) {

  return HttpPost(apiServiceUrl.participationHeader, _request)
  .then(res => {
    if (res.isSucceed == false) {
      ToastStore.error(res.message, 5000);
    }

    return res
  });
}

function getParticipationDetail(_request) {

  return HttpPost(apiServiceUrl.participationDetail, _request)
  .then(res => {
    if (res.isSucceed == false) {
      ToastStore.error(res.message, 6000);
    }

    return res;
  });
}

function insertOrUpdateParticipation(_request, toUrl)
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

function deleteParticipation(_request)
{
  return HttpPost(apiServiceUrl.participationDelete, _request)
  .then(res => {
    if (res.isSucceed == true) {
      ToastStore.success("Katılım detayı silindi.");
    }
    else {
      ToastStore.error(res.message, 6000);
    }

    return res
  });
}

function updateUserParticipation(_request)
{
  return HttpPost(apiServiceUrl.userParticipationUpdate, _request)
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

function updateManagerControlParticipation(_request)
{
  return HttpPost(apiServiceUrl.managerControlParticipationUpdate, _request)
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

export default participationsService