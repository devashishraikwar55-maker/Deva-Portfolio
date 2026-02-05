export interface Project {
  project_title: string;
  project_type: string;
  description: string;
  focus_areas: string[];
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
    technical_skills: string[];
    soft_skills: string[];
  };
  tools_and_platforms: {
    ai_image_tools: string[];
    ai_video_tools: string[];
    ai_assisted_development_tools: string[];
    research_tools: string[];
  };
  projects: Project[];
  education: {
    highest_qualification: string;
    details: string;
  };
  certifications: string[];
}
