import { gql, useQuery } from '@apollo/client';
import {useParams} from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {vscDarkPlus} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { MathJax, MathJaxContext } from "better-react-mathjax";
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
            
                <ReactMarkdown 
                className='remark'
                children={posts[postId].Body}
                components={{
                  p({node, inline, className, children, ...props}) {
                    return(
                    <MathJaxContext>
                      <p>
                        <MathJax> 
                          {children}
                        </MathJax>
                      </p> 
                    </MathJaxContext>)
                },
                  code({node, inline, className, children, ...props}) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={vscDarkPlus}
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