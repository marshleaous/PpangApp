import { createClient } from '@sanity/client';
import imageBuilder from '@sanity/image-url';

const postClient = createClient({
    projectId: 'swrqw2iy',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2024-04-20',
    token: 'sku8WUXKWMVwt4jqTeMl5BhZDlXqx6IIoAbcy3qh767gtjdUMvlxi5abco9VNlZ9DAvLJwoqAKsaYbuYFDEoanfttgeXfCxSIMqQ4Vtb38J261Be8TWDp5ngrn9kENgVkiedzuGN99Lk9Awz4ncF0CXMnIyrmZ7lfLeoFTfgEAbeez8KDvIa'
})
export default postClient;