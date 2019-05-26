const urlConst =  {
  // remote
  WEB_ROOT_URL : 'http://185.86.4.121:91', 
  API_URL      : 'http://185.86.4.121:91/api/api'
  // local
  // WEB_ROOT_URL : 'http://localhost:51210', 
  // API_URL      : 'http://localhost:51210/api'
}

const valConst =  {
  // remote
  //COMPANY_ID   : 1
  // local - is yeri
  //COMPANY_ID   : 2
}

const apiServiceUrl = {
  usersHeader: 'user/UsersHeader',
  userList: 'user/UserList',
  userHeader: 'user/UserHeader',
  userDetail: 'user/UserDetail',
  userDetailWithHeader: 'user/UserDetailWithHeader',
  userInsert: 'user/UserInsert',
  userUpdate: 'user/UserUpdate',
  userDelete: 'user/UserDelete',
  teamsHeader: 'team/TeamsHeader',
  teamList: 'team/TeamList',
  teamDetailedList: 'team/TeamDetailedList',
  teamHeader: 'team/TeamHeader',
  teamDetail: 'team/TeamDetail',
  teamDetailWithHeader: 'team/TeamDetailWithHeader',
  teamInsert: 'team/TeamInsert',
  teamUpdate: 'team/TeamUpdate',
  teamDelete: 'team/TeamDelete',
  userTypeList: 'definition/UserTypeList',
  userTypeDetail: 'definition/UserTypeDetail',
  userTypeInsert: 'definition/UserTypeInsert',
  userTypeUpdate: 'definition/UserTypeUpdate',
  userTypeDelete: 'definition/UserTypeDelete',
  userTeamInsert: 'UserTeam/UserTeamInsert',
  userTeamUpdate: 'UserTeam/UserTeamUpdate',
  userTeamDelete: 'UserTeam/UserTeamDelete',
  participationsHeader: 'userparticipation/UserParticipationsHeader',
  participationList: 'userparticipation/UserParticipationList',
  participationDetailedList: 'userparticipation/UserParticipationDetailedList',
  participationHeader: 'userparticipation/UserParticipationHeader',
  participationDetail: 'userparticipation/UserParticipationDetail',
  participationDetailWithHeader: 'userparticipation/UserParticipationDetailWithHeader',
  participationInsert: 'userparticipation/UserParticipationInsert',
  participationUpdate: 'userparticipation/UserParticipationUpdate',
  participationDelete: 'userparticipation/UserParticipationDelete',
  userParticipationUpdate: 'userparticipation/UserParticipationUpdate',
  managerControlParticipationUpdate: 'userparticipation/ManagerControlParticipationUpdate',
}

export { urlConst, valConst, apiServiceUrl }