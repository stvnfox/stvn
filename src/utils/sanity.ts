import { sanityClient } from "sanity:client";

type IntroductionResponse = {
  title: string;
  content: [];
};

export const getIntroduction = async (): Promise<IntroductionResponse> => {
  const response = await sanityClient.fetch(`*[slug == "home"]`);

  return response[0].introduction;
};
