import accountService from './account.service'
import userService from './user.service'
import userTeamService from './userTeam.service'
import teamService from './team.service'
import commonService from './common.service'
import participationsService from './participation.service'

const apiServices = {
  accountService: accountService,
  userService: userService,
  userTeamService: userTeamService,
  teamService: teamService,
  commonService: commonService,
  participationsService : participationsService
}

export default apiServices