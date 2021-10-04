const formatWhatIDoRepositories = (repositories: any) => {
  return repositories.map((repository: any) => {
    return {
      name: repository.node.name,
      description: repository.node.description,
      url: repository.node.url,
      languages: repository.node.languages.edges.map((language: any) => {
        return {
          name: language.node.name,
          color: language.node.color
        };
      })
    };
  });
};

export default formatWhatIDoRepositories;
