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

const baseFetch = sanityClient.fetch(`*[slug == "home"]`);

export const getIntroduction = async (): Promise<IntroductionResponse> => {
  const response = await baseFetch;

  return response[0].introduction;
};

export const getWork = async (): Promise<WorkResponse> => {
  const response = await baseFetch;

  return response[0].work
}
