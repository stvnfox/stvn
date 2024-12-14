import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2024-04-13","projectId":"4xy3zla7","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
