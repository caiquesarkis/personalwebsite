import { gql, useQuery } from '@apollo/client';
import {Link} from 'react-router-dom'


import './styles/Blog.css'

function Blog() {
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


  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return `Error! ${error}`;
  console.log(data)
  return (
    <div className="Blog">
      <h1>Articles</h1>
      <ul>
        {data.posts.map((post,index) => {
          return (<li>
              <h1 id="post-title">
                {post.Title}
              </h1>
              <p id="post-description">{post.Description}</p>
              <p id="post-tags">{post.Tags}</p>

              <Link to={`/blog/${index+1}`} className='post-link'>Leia mais...</Link>
          </li>)
        })}
      </ul>
    </div>
  );
}

export default Blog;
