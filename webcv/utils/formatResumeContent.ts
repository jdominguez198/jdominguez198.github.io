const formatResumeContent = (content: any) => {
  const {
    about_me_title: aboutMeTitle,
    about_me_title_icon: aboutMeTitleIcon,
    about_me_description: aboutMeDescription,
    about_me_highlights: aboutMeHighlights,
    education_title: educationTitle,
    education_title_icon: educationTitleIcon,
    education_timeline: educationTimeline,
    experience_title: experienceTitle,
    experience_title_icon: experienceTitleIcon,
    experience_timeline: experienceTimeline,
    certificates_title: certificatesTitle,
    certificates_title_icon: certificatesTitleIcon,
    certificates_items: certificatesItems
  } = content;

  return {
    aboutMeTitle,
    aboutMeTitleIcon,
    aboutMeDescription,
    aboutMeHighlights,
    educationTitle,
    educationTitleIcon,
    educationTimeline: educationTimeline[0].content.map((event: any) => {
      return {
        id: event._uid,
        date: event.date,
        title: event.title,
        subtitle: event.subtitle
      };
    }),
    experienceTitle,
    experienceTitleIcon,
    experienceTimeline: experienceTimeline[0].content.map((event: any) => {
      return {
        id: event._uid,
        date: event.date,
        title: event.title,
        children: event.children.map((childEvent: any) => {
          return {
            id: childEvent._uid,
            title: childEvent.title,
            subtitle: childEvent.subtitle,
            description: childEvent.description,
            stack: childEvent.extra.map((stack: any) => {
              return {
                id: stack._uid,
                label: stack.label,
                icon: stack.icon
              };
            })
          };
        })
      };
    }),
    certificatesTitle,
    certificatesTitleIcon,
    certificatesItems: certificatesItems.map((certificate: any) => {
      return {
        id: certificate._uid,
        title: certificate.title,
        subtitle: certificate.subtitle,
        date: certificate.date
      };
    })
  }
};

export default formatResumeContent;
