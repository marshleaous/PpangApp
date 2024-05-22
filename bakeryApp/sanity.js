import { createClient } from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const client = createClient({
    projectId: 'swrqw2iy',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-03-07',
})

const builder = imageBuilder(client);

export const urlFor = source=>  builder.image(source);

export default client;