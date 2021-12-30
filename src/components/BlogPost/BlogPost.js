import { gql, useQuery } from '@apollo/client';
import {useParams, Link} from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import './BlogPost.css'

function BlogPost() {
    const GET_POSTS = gql`
      query ExampleQuery {
        posts {
          Body
          Description
          Title
          Tags
        }
      }
    `;
    const postId = useParams().id-1
    const { loading, error, data } = useQuery(GET_POSTS);
    
    if (loading) return <p>Loading...</p>;
    if (error) return `Error! ${error}`;

    
    const posts = data.posts
    return (
      <>
      <div className='BlogPost'>
          <h1>{posts[postId].Title}</h1>
          {/* {posts[postId].Tags.split().map((Tag)=>{
            return <span id="post-tags">{Tag}</span>
          })} */}
          
          <ReactMarkdown className='remark'>
              {posts[postId].Body}
          </ReactMarkdown>
          <Link to={`/blog`}>Return to blog</Link>
      </div>
      </>
    );
  }
  
  export default BlogPost;