//CONTENTFUL
import { createClient } from 'contentful';


export default function({ myprops }) {
    console.log(myprops);

    return (
        <div> Hello World </div>
    )
}



export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    })

    const res = await client.getEntries({ content_type: "recipe" })

    return {
        props: {
            myprops: res.items
        }
    }
}