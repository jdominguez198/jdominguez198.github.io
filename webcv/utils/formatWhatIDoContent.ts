const formatWhatIDoContent = (content: any) => {
  const {
    last_projects_title: lastProjectsTitle,
    last_projects_title_icon: lastProjectsTitleIcon,
    technologies_title: myStackTitle,
    technologies_title_icon: myStackTitleIcon,
    technologies_items: technologies
  } = content;

  return {
    lastProjectsTitle,
    lastProjectsTitleIcon,
    myStackTitle,
    myStackTitleIcon,
    myStackTechnologies: technologies[0].content.map((technology: any) => {
      return {
        name: technology.name,
        icon: [ 'fab', technology.icon ]
      }
    })
  };
};

export default formatWhatIDoContent;
