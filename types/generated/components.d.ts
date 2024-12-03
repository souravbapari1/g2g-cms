import type { Schema, Struct } from '@strapi/strapi';

export interface AcademicsAcadeniesInfo extends Struct.ComponentSchema {
  collectionName: 'components_academics_acadenies_infos';
  info: {
    description: '';
    displayName: 'acadeniesInfo';
    icon: 'brush';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AcademicsYouthSummitTalks extends Struct.ComponentSchema {
  collectionName: 'components_academics_youth_summit_talks';
  info: {
    displayName: 'Youth Summit Talks';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    sortTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BannerAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_banner_advantages';
  info: {
    displayName: 'advantages';
    icon: 'cog';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BannerGroupImage extends Struct.ComponentSchema {
  collectionName: 'components_banner_group_images';
  info: {
    displayName: 'Group Image';
    icon: 'dashboard';
  };
  attributes: {
    center: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    left: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    right: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BannerHeader extends Struct.ComponentSchema {
  collectionName: 'components_banner_headers';
  info: {
    displayName: 'header';
    icon: 'picture';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface BrandsSponsors extends Struct.ComponentSchema {
  collectionName: 'components_brands_sponsors';
  info: {
    description: '';
    displayName: 'sponsors';
    icon: 'magic';
  };
  attributes: {
    brandImage: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardsAcademies extends Struct.ComponentSchema {
  collectionName: 'components_cards_academies';
  info: {
    displayName: 'Academies';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'link.link', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardsExperienceCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_experience_cards';
  info: {
    description: '';
    displayName: 'Experience Card';
    icon: 'cursor';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'link.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    topImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface CardsSessionsCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_sessions_cards';
  info: {
    displayName: 'Sessions Card';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    registerIndividualsSessionLink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    registerSessionLink: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardsSustainabilityRegisterCard
  extends Struct.ComponentSchema {
  collectionName: 'components_cards_sustainability_register_cards';
  info: {
    description: '';
    displayName: 'Sustainability Register Card';
    icon: 'file';
  };
  attributes: {
    info: Schema.Attribute.Component<'banner.header', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    registerBtn: Schema.Attribute.Component<'link.link', false> &
      Schema.Attribute.Required;
    sideImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    viewMoreBtn: Schema.Attribute.Component<'link.link', false> &
      Schema.Attribute.Required;
  };
}

export interface CardsUpcomingSession extends Struct.ComponentSchema {
  collectionName: 'components_cards_upcoming_sessions';
  info: {
    description: '';
    displayName: 'Upcoming Session';
    icon: 'bell';
  };
  attributes: {
    centerImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    leftImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    rightImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    sessionDateTime: Schema.Attribute.String & Schema.Attribute.Required;
    sessionInfo: Schema.Attribute.Text & Schema.Attribute.Required;
    subTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactAddress extends Struct.ComponentSchema {
  collectionName: 'components_contact_addresses';
  info: {
    displayName: 'Address';
    icon: 'cursor';
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    mapLocation: Schema.Attribute.String;
    mobileNo: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactEmail extends Struct.ComponentSchema {
  collectionName: 'components_contact_emails';
  info: {
    displayName: 'email';
    icon: 'bulletList';
  };
  attributes: {
    email: Schema.Attribute.Email & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactImpactContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_impact_contacts';
  info: {
    description: '';
    displayName: 'impactContact';
    icon: 'discuss';
  };
  attributes: {
    bookMeetLink: Schema.Attribute.String;
    email: Schema.Attribute.String & Schema.Attribute.Required;
    mobileNo: Schema.Attribute.String;
    personImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface HeaderHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
    icon: 'chartBubble';
  };
  attributes: {
    centerImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    leftImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    rightImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HeaderResearchesLabsHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_researches_labs_headers';
  info: {
    description: '';
    displayName: 'Researches labs Header';
    icon: 'bold';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    images: Schema.Attribute.Component<'banner.group-image', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    description: '';
    displayName: 'link';
  };
  attributes: {
    linkText: Schema.Attribute.String & Schema.Attribute.Required;
    linkUrl: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#'>;
    member: Schema.Attribute.Component<'list-cards.partenerships', false> &
      Schema.Attribute.Required;
  };
}

export interface ListCardsBenefit extends Struct.ComponentSchema {
  collectionName: 'components_list_cards_benefits';
  info: {
    displayName: 'Benefit';
    icon: 'emotionHappy';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListCardsContentList extends Struct.ComponentSchema {
  collectionName: 'components_list_cards_content_lists';
  info: {
    description: '';
    displayName: 'content list';
    icon: 'brush';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListCardsCurrentDepartments extends Struct.ComponentSchema {
  collectionName: 'components_list_cards_current_departments';
  info: {
    displayName: 'Current Departments';
    icon: 'dashboard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListCardsFaqs extends Struct.ComponentSchema {
  collectionName: 'components_list_cards_faqs';
  info: {
    displayName: 'faqs';
    icon: 'bulletList';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListCardsGiveYouthAVoice extends Struct.ComponentSchema {
  collectionName: 'components_list_cards_give_youth_a_voices';
  info: {
    displayName: 'Give youth a voice';
    icon: 'cup';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    RequesOfflineForm: Schema.Attribute.String & Schema.Attribute.Required;
    RequesOnlineFormLink: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListCardsIndustries extends Struct.ComponentSchema {
  collectionName: 'components_list_cards_industries';
  info: {
    displayName: 'Industries';
    icon: 'apps';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListCardsPartenerships extends Struct.ComponentSchema {
  collectionName: 'components_list_cards_partenerships';
  info: {
    description: '';
    displayName: 'Partenerships';
    icon: 'book';
  };
  attributes: {
    about: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    linkdinProfile: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    position: Schema.Attribute.String;
  };
}

export interface ListCardsResearchInfoList extends Struct.ComponentSchema {
  collectionName: 'components_list_cards_research_info_lists';
  info: {
    displayName: 'Research Info List';
    icon: 'bulletList';
  };
  attributes: {
    cards: Schema.Attribute.Component<'list-cards.content-list', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListCardsVerification extends Struct.ComponentSchema {
  collectionName: 'components_list_cards_verifications';
  info: {
    displayName: 'Verification';
    icon: 'connector';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListLanguages extends Struct.ComponentSchema {
  collectionName: 'components_list_languages';
  info: {
    description: '';
    displayName: 'languages';
    icon: 'connector';
  };
  attributes: {
    name: Schema.Attribute.Enumeration<['english', 'arbic']>;
  };
}

export interface ListMembersImagesList extends Struct.ComponentSchema {
  collectionName: 'components_list_members_images_lists';
  info: {
    displayName: 'Members Images List';
    icon: 'quote';
  };
  attributes: {
    member: Schema.Attribute.Component<'members.member-view-list', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ListTextList extends Struct.ComponentSchema {
  collectionName: 'components_list_text_lists';
  info: {
    description: '';
    displayName: 'Text list';
    icon: 'quote';
  };
  attributes: {
    members: Schema.Attribute.Component<'list-cards.partenerships', true>;
    tabName: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface ListTransparencyReports extends Struct.ComponentSchema {
  collectionName: 'components_list_transparency_reports';
  info: {
    displayName: 'Transparency Reports';
    icon: 'database';
  };
  attributes: {
    description: Schema.Attribute.Text;
    file: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MembersBoardMembers extends Struct.ComponentSchema {
  collectionName: 'components_members_board_members';
  info: {
    displayName: 'Board Members';
    icon: 'command';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    member: Schema.Attribute.Component<'list-cards.partenerships', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MembersMemberViewList extends Struct.ComponentSchema {
  collectionName: 'components_members_member_view_lists';
  info: {
    displayName: 'memberViewList';
    icon: 'dashboard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SlidesExperienceSlide extends Struct.ComponentSchema {
  collectionName: 'components_slides_experience_slides';
  info: {
    description: '';
    displayName: 'Experience Slide';
    icon: 'rocket';
  };
  attributes: {
    experienceCard: Schema.Attribute.Component<'cards.experience-card', true>;
    sortTitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SlidesHeaderBanner extends Struct.ComponentSchema {
  collectionName: 'components_slides_header_banners';
  info: {
    displayName: 'HeaderBanner';
    icon: 'apps';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SlidesTextSlides extends Struct.ComponentSchema {
  collectionName: 'components_slides_text_slides';
  info: {
    description: '';
    displayName: 'Text Slides';
    icon: 'picture';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Component<'list.text-list', true> &
      Schema.Attribute.Required;
  };
}

export interface StepsApplyInfoSteps extends Struct.ComponentSchema {
  collectionName: 'components_steps_apply_info_steps';
  info: {
    displayName: 'Apply Info Steps';
    icon: 'seed';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    howReviewsWork: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    howToApply: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    yourBenefits: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface VideoSectionActionSpeaks extends Struct.ComponentSchema {
  collectionName: 'components_video_section_action_speaks';
  info: {
    displayName: 'action speaks';
    icon: 'play';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    videoId: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface VideoSectionSpeechSoundLike extends Struct.ComponentSchema {
  collectionName: 'components_video_section_speech_sound_likes';
  info: {
    displayName: 'speech sound like';
    icon: 'crown';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    videoId: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'academics.acadenies-info': AcademicsAcadeniesInfo;
      'academics.youth-summit-talks': AcademicsYouthSummitTalks;
      'banner.advantages': BannerAdvantages;
      'banner.group-image': BannerGroupImage;
      'banner.header': BannerHeader;
      'brands.sponsors': BrandsSponsors;
      'cards.academies': CardsAcademies;
      'cards.experience-card': CardsExperienceCard;
      'cards.sessions-card': CardsSessionsCard;
      'cards.sustainability-register-card': CardsSustainabilityRegisterCard;
      'cards.upcoming-session': CardsUpcomingSession;
      'contact.address': ContactAddress;
      'contact.email': ContactEmail;
      'contact.impact-contact': ContactImpactContact;
      'header.header': HeaderHeader;
      'header.researches-labs-header': HeaderResearchesLabsHeader;
      'link.link': LinkLink;
      'list-cards.benefit': ListCardsBenefit;
      'list-cards.content-list': ListCardsContentList;
      'list-cards.current-departments': ListCardsCurrentDepartments;
      'list-cards.faqs': ListCardsFaqs;
      'list-cards.give-youth-a-voice': ListCardsGiveYouthAVoice;
      'list-cards.industries': ListCardsIndustries;
      'list-cards.partenerships': ListCardsPartenerships;
      'list-cards.research-info-list': ListCardsResearchInfoList;
      'list-cards.verification': ListCardsVerification;
      'list.languages': ListLanguages;
      'list.members-images-list': ListMembersImagesList;
      'list.text-list': ListTextList;
      'list.transparency-reports': ListTransparencyReports;
      'members.board-members': MembersBoardMembers;
      'members.member-view-list': MembersMemberViewList;
      'slides.experience-slide': SlidesExperienceSlide;
      'slides.header-banner': SlidesHeaderBanner;
      'slides.text-slides': SlidesTextSlides;
      'steps.apply-info-steps': StepsApplyInfoSteps;
      'video-section.action-speaks': VideoSectionActionSpeaks;
      'video-section.speech-sound-like': VideoSectionSpeechSoundLike;
    }
  }
}
