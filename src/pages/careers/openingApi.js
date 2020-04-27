const OpeningAPI = {
  players: [
    {
      jobId: 0,
      jobDescription: 'Designer / Art Director',
      jobTitle: "Look at this! It's a full time job.",
      jobIntro:
        "We're looking for a cross between David Bowie and Lady Gaga for their Creative Director - Freelance or full time position in Mumbai, India. Must love print and pixels.",
      jobAbout:
        'As a Visual Designer, you’ll be responsible for taking design projects from brief to completion by partnering closely with our Marketing team. To be successful in this role, you will collaborate cross-functionally with User Acquisition, CRM and other teams on a daily basis in order to work on digital marketing assets through to physical marketing assets like in-theater posters and Out-Of-Home advertising. This is a great career opportunity for a passionate designer eager to work on a wide range of projects within a fast-growing company. This role reports to the Creative Director.',
      jobRole: [
        'Concept and execute assets for paid and owned digital channels (banners and social)',
        'Concept and execute print materials from billboards, posters and leaflets and newsletters',
        'Work closely with the Marketing team to create strong concepts from the initial briefing',
        'Create and own innovative ideas to drive highest performing campaigns from formal & informal briefs',
        'Understand design principles and be plugged in to the latest design trends and new technologies',
        'Work with CRM team to strategize, concept and design compelling email campaigns',
        'Production design work for print and web.'
      ],
      experience: '1-3 years',
      skills: '2D, Adobe Illustrator, Adobe Photoshop, Art Direction, Sketch'
    },

    {
      jobId: 1,
      jobDescription: 'Copy Writer',
      jobTitle: "Look at this! It's a full time job.",
      jobIntro:
        "We're looking for a cross between David Bowie and Lady Gaga for their Creative Director - Freelance or full time position in Mumbai, India. Must love print and pixels.",
      jobAbout:
        'As a Visual Designer, you’ll be responsible for taking design projects from brief to completion by partnering closely with our Marketing team. To be successful in this role, you will collaborate cross-functionally with User Acquisition, CRM and other teams on a daily basis in order to work on digital marketing assets through to physical marketing assets like in-theater posters and Out-Of-Home advertising. This is a great career opportunity for a passionate designer eager to work on a wide range of projects within a fast-growing company. This role reports to the Creative Director.',
      jobRole: [
        'Concept and execute assets for paid and owned digital channels (banners and social)',
        'Concept and execute print materials from billboards, posters and leaflets and newsletters',
        'Work closely with the Marketing team to create strong concepts from the initial briefing',
        'Create and own innovative ideas to drive highest performing campaigns from formal & informal briefs',
        'Understand design principles and be plugged in to the latest design trends and new technologies',
        'Work with CRM team to strategize, concept and design compelling email campaigns',
        'Production design work for print and web.'
      ],
      experience: '5-8 years',
      skills: '2D, Adobe Illustrator, Adobe Photoshop, Art Direction, Sketch'
    },

    {
      jobId: 3,
      jobDescription: 'Project Manager',
      jobTitle: "Look at this! It's a full time job.",
      jobIntro:
        "We're looking for a cross between David Bowie and Lady Gaga for their Creative Director - Freelance or full time position in Mumbai, India. Must love print and pixels.",
      jobAbout:
        'As a Visual Designer, you’ll be responsible for taking design projects from brief to completion by partnering closely with our Marketing team. To be successful in this role, you will collaborate cross-functionally with User Acquisition, CRM and other teams on a daily basis in order to work on digital marketing assets through to physical marketing assets like in-theater posters and Out-Of-Home advertising. This is a great career opportunity for a passionate designer eager to work on a wide range of projects within a fast-growing company. This role reports to the Creative Director.',
      jobRole: [
        'Concept and execute assets for paid and owned digital channels (banners and social)',
        'Concept and execute print materials from billboards, posters and leaflets and newsletters',
        'Work closely with the Marketing team to create strong concepts from the initial briefing',
        'Create and own innovative ideas to drive highest performing campaigns from formal & informal briefs',
        'Understand design principles and be plugged in to the latest design trends and new technologies',
        'Work with CRM team to strategize, concept and design compelling email campaigns',
        'Production design work for print and web.'
      ],
      experience: '1-3 years',
      skills: '2D, Adobe Illustrator, Adobe Photoshop, Art Direction, Sketch'
    },

    {
      jobId: 4,
      jobDescription: 'Business Development',
      jobTitle: "Look at this! It's a full time job.",
      jobIntro:
        "We're looking for a cross between David Bowie and Lady Gaga for their Creative Director - Freelance or full time position in Mumbai, India. Must love print and pixels.",
      jobAbout:
        'As a Visual Designer, you’ll be responsible for taking design projects from brief to completion by partnering closely with our Marketing team. To be successful in this role, you will collaborate cross-functionally with User Acquisition, CRM and other teams on a daily basis in order to work on digital marketing assets through to physical marketing assets like in-theater posters and Out-Of-Home advertising. This is a great career opportunity for a passionate designer eager to work on a wide range of projects within a fast-growing company. This role reports to the Creative Director.',
      jobRole: [
        'Concept and execute assets for paid and owned digital channels (banners and social)',
        'Concept and execute print materials from billboards, posters and leaflets and newsletters',
        'Work closely with the Marketing team to create strong concepts from the initial briefing',
        'Create and own innovative ideas to drive highest performing campaigns from formal & informal briefs',
        'Understand design principles and be plugged in to the latest design trends and new technologies',
        'Work with CRM team to strategize, concept and design compelling email campaigns',
        'Production design work for print and web.'
      ],
      experience: '3-7 years',
      skills: '2D, Adobe Illustrator, Adobe Photoshop, Art Direction, Sketch'
    },

    {
      jobId: 5,
      jobDescription: 'Social Media Strategist',
      jobTitle: "Look at this! It's a full time job.",
      jobIntro:
        "We're looking for a cross between David Bowie and Lady Gaga for their Creative Director - Freelance or full time position in Mumbai, India. Must love print and pixels.",
      jobAbout:
        'As a Visual Designer, you’ll be responsible for taking design projects from brief to completion by partnering closely with our Marketing team. To be successful in this role, you will collaborate cross-functionally with User Acquisition, CRM and other teams on a daily basis in order to work on digital marketing assets through to physical marketing assets like in-theater posters and Out-Of-Home advertising. This is a great career opportunity for a passionate designer eager to work on a wide range of projects within a fast-growing company. This role reports to the Creative Director.',
      jobRole: [
        'Concept and execute assets for paid and owned digital channels (banners and social)',
        'Concept and execute print materials from billboards, posters and leaflets and newsletters',
        'Work closely with the Marketing team to create strong concepts from the initial briefing',
        'Create and own innovative ideas to drive highest performing campaigns from formal & informal briefs',
        'Understand design principles and be plugged in to the latest design trends and new technologies',
        'Work with CRM team to strategize, concept and design compelling email campaigns',
        'Production design work for print and web.'
      ],
      experience: '5-8 years',
      skills: '2D, Adobe Illustrator, Adobe Photoshop, Art Direction, Sketch'
    }
  ],
  all: () => OpeningAPI.players,
  get: id => {
    const isPlayer = p => p.jobId === id;
    return OpeningAPI.players.find(isPlayer);
  }
};

export default OpeningAPI;
