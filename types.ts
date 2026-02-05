export interface Project {
  project_title: string;
  project_type: string;
  description: string;
  focus_areas: string[];
  image_url?: string;
  link?: string;
}

export interface ProfileData {
  personal_information: {
    full_name: string;
    location: string;
    email: string;
    phone: string;
    work_type: string[];
  };
  professional_identity: {
    primary_title: string;
    alternate_titles: string[];
  };
  professional_summary: {
    universal_summary: string;
    portfolio_about_me: string;
  };
  skills: {
    generative_ai: string[];
    product_and_development: string[];
    creative_and_problem_solving: string[];
  };
  tools_and_platforms: {
    ai_image_and_video: string[];
    ai_development_and_prototyping: string[];
    research_and_intelligence: string[];
  };
  projects: Project[];
  education: {
    highest_qualification: string;
    details: string;
  };
  certifications: {
    name: string;
    link: string;
  }[];
}