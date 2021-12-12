const formatWhatIDoContent = (content: any) => {
  const {
    last_projects_title: lastProjectsTitle,
    last_projects_title_icon: lastProjectsTitleIcon,
    last_projects_repositories: lastProjectsRepositories,
    technologies_title: myStackTitle,
    technologies_title_icon: myStackTitleIcon,
    technologies_items: technologies
  } = content;

  return {
    lastProjectsTitle,
    lastProjectsTitleIcon,
    lastProjectsRepositories: lastProjectsRepositories.map((repository: any) => {
      return {
        id: repository._uid,
        name: repository.name,
        url: repository.url.url || '',
        languages: repository.languages.map((language: any) => {
          return {
            id: language._uid,
            name: language.name,
            color: language.color.color || null,
          }
        })
      }
    }),
    myStackTitle,
    myStackTitleIcon,
    myStackTechnologies: technologies[0].content.map((technology: any) => {
      return {
        id: technology._uid,
        name: technology.name,
        icon: [ 'fab', technology.icon ]
      }
    })
  };
};

export default formatWhatIDoContent;
