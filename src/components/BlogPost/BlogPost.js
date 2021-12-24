import { gql, useQuery } from '@apollo/client';
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
    const { loading, error, data } = useQuery(GET_POSTS);
    
    if (loading) return <p>Loading...</p>;
    if (error) return `Error! ${error}`;
    return (
      <div className='BlogPost'>
        hello
          <h1>{data.posts[0].Title}</h1>
      </div>
    );
  }
  
  export default BlogPost;