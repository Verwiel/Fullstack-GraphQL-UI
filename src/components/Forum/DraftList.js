import React from 'react'
import Post from './Post'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


export const DRAFTS_QUERY = gql`
  {
    postDrafts{
      id
      title
      content
      published
      author {
        name
      }
    }
  }
`

export default () => {
  return (
    <Query query={DRAFTS_QUERY}>
      
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>
        if (error) return <div>Error</div>
    
        const postsToRender = data.postDrafts
    
        return (
          <div>
            {postsToRender.map((post, index) => (
              <Post key={post.id} post={post} index={index}/>
            ))}
          </div>
        )
      }}       
    </Query>    
  )
}
