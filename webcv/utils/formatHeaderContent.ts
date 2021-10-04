const formatHeaderContent = (resultData: any) => {
  const { name, role, avatar, social_links: socialLinks, _editable } = resultData.data.story.content.content[0];

  return {
    name,
    role,
    avatar: avatar.filename,
    socialLinks: socialLinks.map((item: any) => {
      return {
        label: item.label,
        icon: [ 'fab', item.icon ],
        link: item.url.url
      };
    }),
    _editable
  }
};

export default formatHeaderContent;
