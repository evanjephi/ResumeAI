export interface JobHistory {
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Resume {
  name: string;
  contactInfo: {
    email: string;
    phone: string;
    address: string;
  };
  jobHistory: JobHistory[];
  skills: string[];
  summary: string;
}

export interface JobPosting {
  title: string;
  company: string;
  description: string;
  requirements: string[];
}