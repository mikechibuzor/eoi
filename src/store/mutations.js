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
  resetState: (state) => {
    Window.localStorage.removeItem("formDetails")
    state = {
      email: null,
      fullName: null,
      gender: null,
      phoneNumber: null,
      stateOfResidence: null,
      educationLevel: null,
      interestedTechnicalSkill: null,
      basicKnowledgeInSkill: null,
      mostChallengingInField: null,
      detailsOnImpressedProject: null,
      techJourney: null,
      githubUrl: null,
      whyJoinNetwork: null,
      understandNotPaidJob: null,
    }
  },
}
