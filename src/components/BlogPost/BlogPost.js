import { gql, useQuery } from '@apollo/client';
import {useParams, Link} from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
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
      <div className='blog-post-container'>
        <div className='BlogPost'>
            <h1>{posts[postId].Title}</h1>
            {/* {posts[postId].Tags.split().map((Tag)=>{
              return <span id="post-tags">{Tag}</span>
            })} */}
            
            <ReactMarkdown 
            className='remark'
            children={posts[postId].Body}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={atomDark}
                    language={match[1].toLocaleLowerCase()}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}>
            </ReactMarkdown>
            

        </div>
      </div>
    );
  }
  
  export default BlogPost;