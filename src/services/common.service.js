import { Post as HttpPost, PostToken as HttpPostToken } from '../util/httpHelper'
import { apiServiceUrl  } from '../util/const'
import { ToastStore } from 'react-toasts'

const commonService = {
  getLocations,
  getListForDropdown,
  getUserListForDropdown
};

 
function getListForDropdown(list)
{
  let _list = [];
  _list.push({id: -1, name: "Seçiniz" })
  list.forEach(function (item) {
    var _item = {}
    _item.id = item.id !== undefined ? item.id : item.value;
    _item.name = item.name !== undefined ? item.name : item.text;
    _list.push(_item);
  })

  return _list;
}

function getUserListForDropdown(list)
{
  let _list = [];
  _list.push({id: -1, name: "Seçiniz" })
  list.forEach(function (item) {
    var _item = {}
    _item.id = item.id;
    _item.name = item.firstName + " " + item.lastName;
    _list.push(_item);
  })

  return _list;
}

function getLocations(_request) {
  return HttpPostToken(apiServiceUrl.locationList, _request)
    .then(res => {
      if (res.isSucceed == false) {
        ToastStore.error(res.message, 5000);
      }

      return res;
  });
}


export default commonService