export const mutations = {
  setEmail: (state, payload) => (state.email = payload),
  setFullName: (state, payload) => (state.fullName = payload),
  setGender: (state, payload) => (state.gender = payload),
  setPhoneNumber: (state, payload) => (state.phoneNumber = payload),
  setStateOfResidence: (state, payload) => (state.stateOfResidence = payload),
  setEducationLevel: (state, payload) => (state.educationLevel = payload),
  setInterestedTechnicalSkill: (state, payload) =>
    (state.interestedTechnicalSkill = payload),
  setBasicKnowledgeInSkill: (state, payload) =>
    (state.basicKnowledgeInSkill = payload),
  setMostChallengingInFeld: (state, payload) =>
    (state.mostChallengingInField = payload),
  setDetailsOnImpressedProject: (state, payload) =>
    (state.detailsOnImpressedProject = payload),
  setTechJourney: (state, payload) => (state.techJourney = payload),
  setGithubUrl: (state, payload) => (state.githubUrl = payload),
  setWhyJoinNetwork: (state, payload) => (state.whyJoinNetwork = payload),
  setUnderstandNotPaidJob: (state, payload) =>
    (state.understandNotPaidJob = payload),
}
