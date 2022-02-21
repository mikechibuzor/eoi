export const getters = {
  getEmail: (state) => state.email,
  getFullName: (state) => state.fullName,
  getGender: (state) => state.gender,
  getPhoneNumber: (state) => state.phoneNumber,
  getStateOfResidence: (state) => state.stateOfResidence,
  getEducationLevel: (state) => state.educationLevel,
  getInterestedTechnicalSkill: (state) => state.interestedTechnicalSkill,
  getBasicKnowledgeInSkill: (state) => state.basicKnowledgeInSkill,
  getMostChallengingInField: (state) => state.mostChallengingInField,
  getDetailsOnImpressedProject: (state) => state.detailsOnImpressedProject,
  getTechJourney: (state) => state.techJourney,
  getGithubUrl: (state) => state.githubUrl,
  getWhyJoinNetwork: (state) => state.whyJoinNetwork,
  getUnderstandNotPaidJob: (state) => state.understandNotPaidJob,
  validateFormOne: (state) => {
    return state.email && state.fullname && state.gender && state.phoneNumber
  },
  //   validateFormTwo: (state) =>{

  //   }
}
