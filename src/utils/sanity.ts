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

type ConnectItem = {
  label: string;
  link: string;
  ariaLabel: string;
  icon: string;
}

type ConnectResponse = {
  label: string;
  introduction: [];
  connectItems: ConnectItem[];
}

type Blog = {
  createdAt: string;
  id: string;
  excerpt: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      ref: string;
    };
  };
  body: [];
}

type BlogResponse = {
  blogs: Blog[];
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

export const getConnect = async (): Promise<ConnectResponse> => {
  const response = await baseFetch;

  return response[0].connect
}

export async function getPosts(): Promise<Blog[]> {
  return await sanityClient.fetch(
    `*[_type == "blogs"] | order(_createdAt desc)`
  );
}

export async function getPostContent(slug: string): Promise<Blog> {
  return await sanityClient.fetch(
    `*[_type == "blogs" && slug.current == $slug][0]`,
    { slug }
  );
}