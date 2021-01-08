// Talks to Sanity using the sanity client package
import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "9q4l5ejv",
    dataset: "production"
})