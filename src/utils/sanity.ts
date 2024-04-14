import { sanityClient } from "sanity:client";

type IntroductionResponse = {
  title: string;
  content: [];
};

export const getIntroduction = async (): Promise<IntroductionResponse> => {
  const response = await sanityClient.fetch(`*[slug == "home"]`);
  console.log(response);
  return response[0].introduction;
};
