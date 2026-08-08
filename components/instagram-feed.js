import Head from 'next/head';
import Instagram from 'instagram-web-api';

export default function InstagramFeed({ posts }) {
    return (
        <div >
            <Head>
                <title>Instagram Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Instagram Posts</h1>
            <ul>
                {posts.map(({ node }, i) => {
                    return (
                        <li key={i}>
                            <img src={node.display_resources[0].src} />
                            <p>{node.edge_media_to_caption.edges[0]?.node.text}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export async function getStaticProps(context) {
    // const instagram = await client.getUserByUsername({ username: 'STRONGARMDETAIL' })
    // const me = await client.getUserByUsername({ username: client.credentials.username })


    const client = new Instagram({ username: 'urbomarketing@gmail.com', password: 'UrboPlatform2021%@'});
    await client.login();


    const response = await client.getPhotosByUsername({
        username: 'meucandidato.site',
    });

    return {
        props: {
            posts: response.user.edge_owner_to_timeline_media.edges,
        }, // will be passed to the page component as props
    };
}
