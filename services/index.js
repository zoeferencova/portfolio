import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProjects = async () => {
    const query = gql`
    query Projects {
        projects(orderBy: createdAt_ASC) {
          description {
            text
          }
          id
          links {
            id
            name
            url
          }
          image {
            url
          }
          slug
          subtitle
          title
          technologies {
            id
            name
            icon {
              url
            }
          }
        }
      }
    `

    const results = await request(graphqlAPI, query)
    return results.projects
}

