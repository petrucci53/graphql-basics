import {GraphQLServer} from "graphql-yoga"

// Scalar Types - String, Boolean, Int, Float, ID

// Demo user data
const users = [
    {
        id: '1',
        name: 'Steve',
        email: 'steve.jobs@example.com',
        age: 55
    },
    {
        id: '2',
        name: 'Mark',
        email: 'mark.zuckerberg@example.com'
    },
    {
        id: '3',
        name: 'Elon',
        email: 'elon.musk@example.com'
    }
]

// Demo post data
const posts = [
    {
        id: '10',
        title: 'GraphQL 101',
        body: 'Welcome to GraphQL course',
        published: true
    },
    {
        id: '11',
        title: 'Node.js 101',
        body: 'Welcome to Node.js course',
        published: true
    },
    {
        id: '12',
        title: 'Angular 101',
        body: '',
        published: false
    },
]

// Type Definitions (schema)
const typeDefs = `
    type Query {
        users(query: String): [User!]!
        posts(query: String): [Post]!
        me: User!
        post: Post!
    }
    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }
`

// Resolvers
const resolvers = {
    Query: {
        users(parents, args, ctx, info) {
            if (!args.query) {
                return users
            }
            return users.filter((user) => {
                return user.name.toLowerCase().includes(args.query.toLowerCase())
            })
        },
        posts(parents, args, ctx, info) {
            if (!args.query) {
                return posts
            }
            return posts.filter((post) => {
                const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
                const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
                return  isTitleMatch || isBodyMatch
            })
        },
        me() {
            return {
                id: '123abc',
                name: 'John',
                email: 'john@doe.com',
                // age: 25
            }
        },
        post() {
            return {
                id: 'q2ewqw',
                title: 'GraphQL 101',
                body: 'Welcome',
                published: true
            }
        }
    }
}

const server = new GraphQLServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})

server.start(() => {
    console.log('The server is up on port 4000!');
})