const { ApolloServer, gql } = require('apollo-server');
const fs = require('fs');


const typeDefs = gql`
  type Post {
    Body:String
    Description:String
    Title:String
    Tags:String
  }
  type Query {
    posts: [Post]
  }
`;


function getFileNames(){
    var fileNames = []
    fs.readdirSync('../Database/').forEach(file => {
            fileNames.push(file)
        });
    return fileNames
}

function readJsonPosts(){
    var posts = []
    getFileNames().forEach((file)=>{
        console.log(file)
        let data = fs.readFileSync(`../Database/${file}`,{encoding:'utf8', flag:'r'})
        posts.push(JSON.parse(data))
    })
    return posts
}



const posts = readJsonPosts()


const resolvers = {
    Query: {
      posts: () => posts,
    },
  };


const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
})

