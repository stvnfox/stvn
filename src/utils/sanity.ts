import { sanityClient } from "sanity:client";

type IntroductionResponse = {
  title: string;
  content: [];
};

type WorkItem = {
  label: string;
  explanation: [];
  _key: string;
}

type WorkResponse = {
  label: string;
  workItems: WorkItem[];
}

type ProjectItem = {
  label: string;
  explanation: [];
  link: string;
  ariaLabel: string;
  _key: string;
}

type ProjectsResponse = {
  label: string
  projectItems: ProjectItem[]
}

const baseFetch = sanityClient.fetch(`*[slug == "home"]`);

export const getIntroduction = async (): Promise<IntroductionResponse> => {
  const response = await baseFetch;

  return response[0].introduction;
};

export const getWork = async (): Promise<WorkResponse> => {
  const response = await baseFetch;

  return response[0].work
}

export const getProjects = async (): Promise<ProjectsResponse> => {
  const response = await baseFetch;
  
  return response[0].projects
}