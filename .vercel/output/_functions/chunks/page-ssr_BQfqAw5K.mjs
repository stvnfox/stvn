import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2025-02-27","projectId":"4xy3zla7","dataset":"production","useCdn":true}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
