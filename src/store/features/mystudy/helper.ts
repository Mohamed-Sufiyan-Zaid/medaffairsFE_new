export default {
  updateStudyListByStudy: (studies: any, data: any) => {
    return studies.map((study: any) => {
      if (study._id === data._id) {
        return { ...study, ...data }
      }
      return study;
    })
  },
}
