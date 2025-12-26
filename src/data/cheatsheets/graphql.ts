import { Triangle } from 'lucide-react';

export const graphqlCheatsheet = {
    id: 'graphql',
    name: 'GraphQL',
    description: 'Complete GraphQL reference: schema design, queries, mutations, subscriptions, Apollo Server, and advanced features',
    icon: Triangle,
    colorTheme: 'pink' as const,
    sections: [
        // BEGINNER LEVEL
        {
            title: 'Installation & Setup',
            commands: [
                {
                    command: 'Install GraphQL',
                    description: 'Install GraphQL core packages',
                    usage: 'npm install graphql',
                    example: 'npm install graphql\n# Install with TypeScript\nnpm install graphql @types/graphql\n\n# Install Apollo Server\nnpm install @apollo/server graphql\n\n# Install GraphQL.js (reference implementation)\nnpm install graphql',
                },
                {
                    command: 'Basic GraphQL Server',
                    description: 'Create basic GraphQL server',
                    usage: 'import { createServer } from "http";\nimport { schema } from "./schema";',
                    example: 'import { createServer } from "http";\nimport { schema } from "./schema";\nimport { createYoga } from "graphql-yoga";\n\nconst yoga = createYoga({ schema });\n\nconst server = createServer(yoga);\n\nserver.listen(4000, () => {\n  console.log("GraphQL server running on http://localhost:4000/graphql");\n});',
                },
                {
                    command: 'Apollo Server Setup',
                    description: 'Setup Apollo Server with Express',
                    usage: 'import { ApolloServer } from "@apollo/server";\nimport { expressMiddleware } from "@apollo/server/express4";',
                    example: 'import { ApolloServer } from "@apollo/server";\nimport { expressMiddleware } from "@apollo/server/express4";\nimport express from "express";\nimport { typeDefs, resolvers } from "./schema";\n\nconst app = express();\n\nconst server = new ApolloServer({\n  typeDefs,\n  resolvers,\n});\n\nawait server.start();\n\napp.use("/graphql", expressMiddleware(server));\n\napp.listen(4000, () => {\n  console.log("Apollo Server running on http://localhost:4000/graphql");\n});',
                },
                {
                    command: 'GraphQL Playground',
                    description: 'Setup GraphQL playground for testing',
                    usage: 'Use built-in playground or GraphQL IDE',
                    example: '# Apollo Server includes GraphQL Playground\n# Visit: http://localhost:4000/graphql\n\n# Alternative: GraphQL IDE\n# Install GraphQL Playground\nnpm install -g graphql-playground-react\n\n# Run playground\ngraphql-playground',
                },
            ],
        },
        {
            title: 'GraphQL Basics',
            commands: [
                {
                    command: 'Schema Definition',
                    description: 'Define GraphQL schema with types',
                    usage: 'const typeDefs = `type Query { ... }`',
                    example: 'const typeDefs = `#graphql\n  type User {\n    id: ID!\n    name: String!\n    email: String!\n    age: Int\n  }\n  \n  type Query {\n    users: [User!]!\n    user(id: ID!): User\n  }\n  \n  type Mutation {\n    createUser(name: String!, email: String!): User!\n  }\n`;',
                },
                {
                    command: 'Basic Query',
                    description: 'Write GraphQL queries',
                    usage: 'query { users { id name } }',
                    example: '# Query all users\nquery {\n  users {\n    id\n    name\n    email\n  }\n}\n\n# Query specific user\nquery {\n  user(id: "1") {\n    id\n    name\n    email\n    age\n  }\n}\n\n# Query with variables\nquery GetUser($id: ID!) {\n  user(id: $id) {\n    id\n    name\n  }\n}',
                },
                {
                    command: 'Basic Mutation',
                    description: 'Write GraphQL mutations',
                    usage: 'mutation { createUser(...) { ... } }',
                    example: '# Create user\nmutation {\n  createUser(name: "John Doe", email: "john@example.com") {\n    id\n    name\n    email\n  }\n}\n\n# Mutation with variables\nmutation CreateUser($name: String!, $email: String!) {\n  createUser(name: $name, email: $email) {\n    id\n    name\n    email\n  }\n}',
                },
                {
                    command: 'Basic Resolvers',
                    description: 'Implement GraphQL resolvers',
                    usage: 'const resolvers = { Query: { ... } }',
                    example: 'const resolvers = {\n  Query: {\n    users: () => [\n      { id: "1", name: "John", email: "john@example.com" },\n      { id: "2", name: "Jane", email: "jane@example.com" }\n    ],\n    user: (parent, { id }) => {\n      return users.find(user => user.id === id);\n    }\n  },\n  Mutation: {\n    createUser: (parent, { name, email }) => {\n      const newUser = { id: String(Date.now()), name, email };\n      users.push(newUser);\n      return newUser;\n    }\n  }\n};',
                },
            ],
        },
        // INTERMEDIATE LEVEL
        {
            title: 'Advanced Types & Schema Design',
            commands: [
                {
                    command: 'Custom Scalars',
                    description: 'Define custom scalar types',
                    usage: 'scalar Date\scalar Email',
                    example: '# Schema definition\nscalar Date\nscalar Email\n\ntype User {\n  id: ID!\n  name: String!\n  email: Email!\n  createdAt: Date!\n}\n\n# Resolver implementation\nconst resolvers = {\n  Date: new GraphQLScalarType({\n    name: "Date",\n    serialize(value) {\n      return value.toISOString();\n    },\n    parseValue(value) {\n      return new Date(value);\n    }\n  }),\n  Email: new GraphQLScalarType({\n    name: "Email",\n    serialize(value) {\n      return value;\n    },\n    parseValue(value) {\n      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {\n        throw new Error("Invalid email format");\n      }\n      return value;\n    }\n  })\n};',
                },
                {
                    command: 'Interfaces & Union Types',
                    description: 'Use interfaces and unions for polymorphism',
                    usage: 'interface Node { id: ID! } union SearchResult = User | Post',
                    example: '# Interface definition\ninterface Node {\n  id: ID!\n  createdAt: String!\n}\n\ntype User implements Node {\n  id: ID!\n  createdAt: String!\n  name: String!\n  email: String!\n}\n\ntype Post implements Node {\n  id: ID!\n  createdAt: String!\n  title: String!\n  content: String!\n}\n\n# Union type\nunion SearchResult = User | Post\n\ntype Query {\n  search(term: String!): [SearchResult!]!\n}\n\n# Resolver implementation\nconst resolvers = {\n  Node: {\n    __resolveType: (obj) => {\n      if (obj.email) return "User";\n      if (obj.title) return "Post";\n      return null;\n    }\n  },\n  SearchResult: {\n    __resolveType: (obj) => {\n      if (obj.email) return "User";\n      if (obj.title) return "Post";\n      return null;\n    }\n  },\n  Query: {\n    search: (parent, { term }) => {\n      // Search logic returning mixed results\n      return [...users, ...posts];\n    }\n  }\n};',
                },
                {
                    command: 'Enums & Input Types',
                    description: 'Use enums and input types for better schema design',
                    usage: 'enum Role { USER ADMIN } input CreateUserInput { ... }',
                    example: '# Enum definition\nenum Role {\n  USER\n  ADMIN\n  MODERATOR\n}\n\nenum Status {\n  ACTIVE\n  INACTIVE\n  SUSPENDED\n}\n\n# Input type definition\ninput CreateUserInput {\n  name: String!\n  email: String!\n  role: Role = USER\n  profile: UserProfileInput\n}\n\ninput UserProfileInput {\n  bio: String\n  avatar: String\n  age: Int\n}\n\ntype Mutation {\n  createUser(input: CreateUserInput!): User!\n  updateUser(id: ID!, input: UpdateUserInput!): User\n}\n\n# Usage in mutation\nmutation {\n  createUser(input: {\n    name: "John Doe"\n    email: "john@example.com"\n    role: ADMIN\n    profile: {\n      bio: "Software developer"\n      age: 30\n    }\n  }) {\n    id\n    name\n    role\n  }\n}',
                },
                {
                    command: 'Nullable vs Non-Null',
                    description: 'Understand nullable and non-null types',
                    usage: 'String! (non-null) vs String (nullable)',
                    example: '# Non-null types (cannot be null)\ntype User {\n  id: ID!        # Required\n  name: String!   # Required\n  email: String!  # Required\n}\n\n# Nullable types\ntype User {\n  bio: String     # Can be null\n  age: Int        # Can be null\n  posts: [Post]   # Can be null or empty\n}\n\n# Non-null lists\ntype User {\n  friends: [User!]!   # List cannot be null, items cannot be null\n  posts: [Post!]       # List can be null, items cannot be null\n}\n\n# Nullable lists\ntype User {\n  friends: [User]      # List can be null, items can be null\n  posts: [Post]!       # List cannot be null, items can be null\n}',
                },
            ],
        },
        {
            title: 'Advanced Queries & Mutations',
            commands: [
                {
                    command: 'Query Variables',
                    description: 'Use variables in GraphQL queries',
                    usage: 'query GetUser($id: ID!) { user(id: $id) { ... } }',
                    example: '# Query with variables\nquery GetUser($id: ID!, $withEmail: Boolean = false) {\n  user(id: $id) {\n    id\n    name\n    email @include(if: $withEmail)\n    age @skip(if: $withEmail)\n  }\n}\n\n# Variables JSON\n{\n  "id": "1",\n  "withEmail": true\n}\n\n# JavaScript usage\nconst query = `\n  query GetUser($id: ID!) {\n    user(id: $id) {\n      id\n      name\n    }\n  }\n`;\n\nconst variables = { id: "1" };\n\nconst result = await graphql(schema, query, null, null, variables);',
                },
                {
                    command: 'Query Directives',
                    description: 'Use @include, @skip, @deprecated directives',
                    usage: '@include(if: $condition) @skip(if: $condition)',
                    example: '# Conditional fields with directives\nquery GetUser($id: ID!, $includeEmail: Boolean!, $skipAge: Boolean!) {\n  user(id: $id) {\n    id\n    name\n    email @include(if: $includeEmail)\n    age @skip(if: $skipAge)\n    posts {\n      title\n      content @deprecated(reason: "Use summary instead")\n      summary\n    }\n  }\n}\n\n# Custom directive definition\ndirective @auth(requires: Role!) on FIELD_DEFINITION\ndirective @cache(ttl: Int) on FIELD\ndirective @transform(to: String!) on FIELD\n\n# Usage in schema\ntype Query {\n  users: [User!]! @cache(ttl: 300)\n  adminUsers: [User!]! @auth(requires: ADMIN)\n  userCount: Int! @transform(to: "String")\n}',
                },
                {
                    command: 'Fragments',
                    description: 'Use fragments for reusable query parts',
                    usage: 'fragment UserFields on User { ... }',
                    example: '# Define fragment\nfragment UserFields on User {\n  id\n  name\n  email\n}\n\n# Use fragment in query\nquery {\n  users {\n    ...UserFields\n  }\n  user(id: "1") {\n    ...UserFields\n    age\n  }\n}\n\n# Inline fragment for interfaces\nquery {\n  search(term: "john") {\n    ... on User {\n      id\n      name\n      email\n    }\n    ... on Post {\n      id\n      title\n      content\n    }\n  }\n}\n\n# Named fragment with variables\nfragment UserWithPosts on User {\n  id\n  name\n  posts(limit: $limit) {\n    title\n  }\n}',
                },
                {
                    command: 'Aliases & Arguments',
                    description: 'Use aliases and arguments in queries',
                    usage: 'query { user: getUser(id: "1") { ... } }',
                    example: '# Field aliases\nquery {\n  user: getUser(id: "1") {\n    id\n    fullName: name\n    emailAddress: email\n  }\n  admin: getUser(id: "2") {\n    id\n    name\n    email\n  }\n}\n\n# Arguments with defaults\nquery {\n  users(first: 10, after: "cursor", orderBy: NAME) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n\n# Complex arguments\nquery {\n  posts(\n    filter: { status: PUBLISHED, authorId: "1" }\n    sort: { field: CREATED_AT, direction: DESC }\n    pagination: { limit: 20, offset: 0 }\n  ) {\n    id\n    title\n  }\n}',
                },
            ],
        },
        {
            title: 'Subscriptions',
            commands: [
                {
                    command: 'Subscription Setup',
                    description: 'Setup GraphQL subscriptions',
                    usage: 'import { PubSub } from "graphql-subscriptions";',
                    example: 'import { PubSub } from "graphql-subscriptions";\n\nconst pubsub = new PubSub();\n\n# Schema definition\ntype Subscription {\n  postCreated: Post!\n  userUpdated(userId: ID!): User!\n  messageSent(chatId: ID!): Message!\n}\n\n# Resolver implementation\nconst resolvers = {\n  Subscription: {\n    postCreated: {\n      subscribe: () => pubsub.asyncIterator(["POST_CREATED"]),\n    },\n    userUpdated: {\n      subscribe: (_, { userId }) => \n        pubsub.asyncIterator([`USER_UPDATED_${userId}`]),\n    },\n    messageSent: {\n      subscribe: (_, { chatId }) => \n        pubsub.asyncIterator([`MESSAGE_SENT_${chatId}`]),\n    },\n  },\n  Mutation: {\n    createPost: (_, { input }) => {\n      const post = createPost(input);\n      pubsub.publish("POST_CREATED", { postCreated: post });\n      return post;\n    },\n  }\n};',
                },
                {
                    command: 'Apollo Server Subscription',
                    description: 'Setup subscriptions with Apollo Server',
                    usage: 'import { WebSocketServer } from "ws";\nimport { useServer } from "graphql-ws/lib/use/ws";',
                    example: 'import { WebSocketServer } from "ws";\nimport { useServer } from "graphql-ws/lib/use/ws";\nimport { ApolloServer } from "@apollo/server";\nimport { expressMiddleware } from "@apollo/server/express4";\nimport express from "express";\n\nconst app = express();\n\n# Create WebSocket server\nconst wsServer = new WebSocketServer({\n  server: http.createServer(app),\n  path: "/graphql",\n});\n\n# Server setup\nconst serverCleanup = useServer({ schema }, wsServer);\n\nconst server = new ApolloServer({\n  schema,\n  plugins: [\n    {\n      async serverWillStart() {\n        return {\n          async drainServer() {\n            await serverCleanup.dispose();\n          },\n        };\n      },\n    },\n  ],\n});\n\nawait server.start();\napp.use("/graphql", expressMiddleware(server));',
                },
                {
                    command: 'Client Subscription',
                    description: 'Subscribe to GraphQL updates from client',
                    usage: 'const subscription = client.subscribe({ ... })',
                    example: '# JavaScript client subscription\nimport { gql, SubscriptionClient } from "graphql-subscriptions-client";\n\nconst subscriptionClient = new SubscriptionClient(\n  "ws://localhost:4000/graphql",\n  {\n    reconnect: true,\n    connectionParams: {\n      authToken: "your-token",\n    },\n  }\n);\n\nconst subscription = gql`\n  subscription PostCreated {\n    postCreated {\n      id\n      title\n      author {\n        name\n      }\n    }\n  }\n`;\n\nsubscriptionClient.request({ query: subscription }).subscribe({\n  next: (data) => console.log("New post:", data),\n  error: (err) => console.error("Subscription error:", err),\n  complete: () => console.log("Subscription complete"),\n});\n\n# Apollo Client subscription\nimport { gql, useSubscription } from "@apollo/client";\n\nconst POST_CREATED_SUBSCRIPTION = gql`\n  subscription PostCreated {\n    postCreated {\n      id\n      title\n      author {\n        name\n      }\n    }\n  }\n`;\n\nfunction PostList() {\n  const { data, loading, error } = useSubscription(POST_CREATED_SUBSCRIPTION);\n  \n  if (loading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error.message}</div>;\n  \n  return <div>New post: {data.postCreated.title}</div>;\n}',
                },
                {
                    command: 'Real-time Updates',
                    description: 'Implement real-time features with subscriptions',
                    usage: 'pubsub.publish("EVENT", { data: ... })',
                    example: '# Real-time chat example\nconst CHAT_MESSAGE_SENT = "CHAT_MESSAGE_SENT";\n\nconst resolvers = {\n  Subscription: {\n    messageSent: {\n      subscribe: (_, { chatId }) => \n        pubsub.asyncIterator([`${CHAT_MESSAGE_SENT}_${chatId}`]),\n    },\n  },\n  Mutation: {\n    sendMessage: (_, { chatId, content, userId }) => {\n      const message = {\n        id: generateId(),\n        content,\n        userId,\n        chatId,\n        timestamp: new Date().toISOString(),\n      };\n      \n      # Save message\n      saveMessage(message);\n      \n      # Notify subscribers\n      pubsub.publish(`${CHAT_MESSAGE_SENT}_${chatId}`, {\n        messageSent: message,\n      });\n      \n      return message;\n    },\n  },\n};\n\n# Real-time notifications\nconst USER_NOTIFICATION = "USER_NOTIFICATION";\n\nconst sendNotification = (userId, notification) => {\n  pubsub.publish(`${USER_NOTIFICATION}_${userId}`, {\n    notificationSent: notification,\n  });\n};\n\n# Real-time collaboration\nconst DOCUMENT_UPDATED = "DOCUMENT_UPDATED";\n\nconst updateDocument = (documentId, updates, userId) => {\n  const document = updateDocumentInDB(documentId, updates);\n  \n  pubsub.publish(`${DOCUMENT_UPDATED}_${documentId}`, {\n    documentUpdated: {\n      document,\n      updatedBy: userId,\n      timestamp: new Date().toISOString(),\n    },\n  });\n  \n  return document;\n};',
                },
            ],
        },
        // ADVANCED LEVEL
        {
            title: 'Apollo Server Advanced',
            commands: [
                {
                    command: 'Apollo Server Configuration',
                    description: 'Advanced Apollo Server setup',
                    usage: 'new ApolloServer({ schema, plugins, context })',
                    example: 'import { ApolloServer } from "@apollo/server";\nimport { startServerAndCreateNextHandler } from "@as-integrations/next";\n\nconst server = new ApolloServer({\n  schema,\n  plugins: [\n    # Logging plugin\n    {\n      async requestDidStart() {\n        return {\n          async didResolveOperation(requestContext) {\n            console.log("Operation:", requestContext.request.operationName);\n          },\n          async didEncounterErrors(requestContext) {\n            console.error("Errors:", requestContext.errors);\n          },\n        };\n      },\n    },\n    # Apollo Studio plugin\n    require("apollo-server-plugin-response-cache")(),\n  ],\n  introspection: process.env.NODE_ENV !== "production",\n  csrfPrevention: true,\n  cache: "bounded",\n});\n\n# Context setup\nconst server = new ApolloServer({\n  schema,\n  context: async ({ req }) => {\n    const token = req.headers.authorization || "";\n    const user = await getUserFromToken(token);\n    return { user, db: databaseConnection };\n  },\n});',
                },
                {
                    command: 'Data Sources',
                    description: 'Use Apollo data sources for data fetching',
                    usage: 'class UserAPI extends RESTDataSource { ... }',
                    example: 'import { RESTDataSource } from "@apollo/datasource-rest";\n\nclass UserAPI extends RESTDataSource {\n  override baseURL = "https://api.example.com/users/";\n  \n  async getUser(id: string) {\n    return this.get(`${id}`);\n  }\n  \n  async getUsers() {\n    return this.get("");\n  }\n  \n  async createUser(userData: any) {\n    return this.post("", { body: userData });\n  }\n  \n  async updateUser(id: string, userData: any) {\n    return this.put(`${id}`, { body: userData });\n  }\n  \n  async deleteUser(id: string) {\n    return this.delete(`${id}`);\n  }\n}\n\nclass PostAPI extends RESTDataSource {\n  override baseURL = "https://api.example.com/posts/";\n  \n  async getPosts() {\n    return this.get("");\n  }\n  \n  async getPost(id: string) {\n    return this.get(`${id}`);\n  }\n  \n  async getPostsByAuthor(authorId: string) {\n    return this.get(`?author=${authorId}`);\n  }\n}\n\n# Use in resolvers\nconst resolvers = {\n  Query: {\n    user: async (_, { id }, { dataSources }) => {\n      return dataSources.userAPI.getUser(id);\n    },\n    posts: async (_, __, { dataSources }) => {\n      return dataSources.postAPI.getPosts();\n    },\n  },\n  User: {\n    posts: async (parent, _, { dataSources }) => {\n      return dataSources.postAPI.getPostsByAuthor(parent.id);\n    },\n  },\n};\n\n# Server setup with data sources\nconst server = new ApolloServer({\n  schema,\n  plugins: [ApolloServerPluginLandingPageLocalDefault()],\n});\n\nconst handler = startServerAndCreateNextHandler(server, {\n  context: async (req, res) => {\n    const { cache } = server;\n    return {\n      req,\n      res,\n      dataSources: {\n        userAPI: new UserAPI({ cache }),\n        postAPI: new PostAPI({ cache }),\n      },\n    };\n  },\n});',
                },
                {
                    command: 'Apollo Federation',
                    description: 'Setup Apollo Federation for microservices',
                    usage: 'buildSubgraphSchema({ typeDefs, resolvers })',
                    example: '# Subgraph 1: Users\nimport { buildSubgraphSchema } from "@apollo/subgraph";\n\nconst userTypeDefs = `#graphql\n  extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@shareable"])\n  \n  type User @key(fields: "id") {\n    id: ID!\n    name: String!\n    email: String!\n    posts: [Post!]!\n  }\n  \n  extend type Query {\n    users: [User!]!\n    user(id: ID!): User\n  }\n`;\n\nconst userResolvers = {\n  User: {\n    __resolveReference: (user) => {\n      return getUserById(user.id);\n    },\n    posts: (user) => {\n      return getPostsByUserId(user.id);\n    },\n  },\n  Query: {\n    users: () => getAllUsers(),\n    user: (_, { id }) => getUserById(id),\n  },\n};\n\nconst userServer = new ApolloServer({\n  schema: buildSubgraphSchema({ typeDefs: userTypeDefs, resolvers: userResolvers }),\n});\n\n# Subgraph 2: Posts\nconst postTypeDefs = `#graphql\n  extend schema @link(url: "https://specs.apollo.dev/federation/v2.0", import: ["@key", "@external"])\n  \n  type Post @key(fields: "id") {\n    id: ID!\n    title: String!\n    content: String!\n    author: User @provides(fields: "name")\n  }\n  \n  type User @key(fields: "id") @external {\n    id: ID!\n    name: String @external\n  }\n  \n  extend type Query {\n    posts: [Post!]!\n    post(id: ID!): Post\n  }\n`;\n\n# Gateway setup\nimport { ApolloGateway, IntrospectAndCompose } from "@apollo/gateway";\n\nconst gateway = new ApolloGateway({\n  supergraphSdl: new IntrospectAndCompose({\n    subgraphs: [\n      { name: "users", url: "http://localhost:4001/graphql" },\n      { name: "posts", url: "http://localhost:4002/graphql" },\n    ],\n  }),\n});\n\nconst gatewayServer = new ApolloServer({\n  gateway,\n  introspection: true,\n});',
                },
                {
                    command: 'Apollo Server Plugins',
                    description: 'Create custom Apollo Server plugins',
                    usage: 'const plugin = { requestDidStart() { ... } }',
                    example: '# Custom plugin for logging\nconst loggingPlugin = {\n  async requestDidStart(requestContext) {\n    console.log(`Request started: ${requestContext.request.operationName}`);\n    \n    return {\n      async didResolveOperation(requestContext) {\n        console.log("Operation resolved");\n      },\n      async willSendResponse(requestContext) {\n        console.log(`Response sent: ${requestContext.response.http.status}`);\n      },\n      async didEncounterErrors(requestContext) {\n        console.error("Errors encountered:", requestContext.errors);\n      },\n    };\n  },\n};\n\n# Plugin for caching\nconst responseCachePlugin = require("apollo-server-plugin-response-cache");\n\n# Plugin for metrics\nconst metricsPlugin = {\n  async requestDidStart() {\n    const start = Date.now();\n    \n    return {\n      async willSendResponse() {\n        const duration = Date.now() - start;\n        console.log(`Request duration: ${duration}ms`);\n      },\n    };\n  },\n};\n\n# Server setup with plugins\nconst server = new ApolloServer({\n  schema,\n  plugins: [\n    loggingPlugin,\n    responseCachePlugin({\n      ttl: 900, # 15 minutes\n    }),\n    metricsPlugin,\n  ],\n});',
                },
            ],
        },
        {
            title: 'GraphQL Clients',
            commands: [
                {
                    command: 'Apollo Client Setup',
                    description: 'Setup Apollo Client for React/Vue/Angular',
                    usage: 'new ApolloClient({ uri, cache })',
                    example: '# React Apollo Client setup\nimport { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";\n\nconst client = new ApolloClient({\n  uri: "http://localhost:4000/graphql",\n  cache: new InMemoryCache({\n    typePolicies: {\n      Query: {\n        fields: {\n          posts: {\n            merge(existing = [], incoming) {\n              return incoming;\n            },\n          },\n        },\n      },\n    },\n  }),\n  defaultOptions: {\n    watchQuery: {\n      errorPolicy: "all",\n    },\n    query: {\n      errorPolicy: "all",\n    },\n  },\n});\n\nfunction App() {\n  return (\n    <ApolloProvider client={client}>\n      <MyApp />\n    </ApolloProvider>\n  );\n}\n\n# Vue Apollo setup\nimport { createApolloProvider, ApolloClient } from "@vue/apollo-option";\nimport { InMemoryCache } from "@apollo/client/core";\n\nconst apolloClient = new ApolloClient({\n  uri: "http://localhost:4000/graphql",\n  cache: new InMemoryCache(),\n});\n\nconst provider = createApolloProvider({\n  defaultClient: apolloClient,\n});\n\n# Angular Apollo setup\nimport { ApolloModule, APOLLO_OPTIONS } from "apollo-angular";\nimport { HttpLink } from "apollo-angular/http";\nimport { InMemoryCache } from "@apollo/client/core";\n\n@NgModule({\n  imports: [ApolloModule],\n  providers: [\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory(httpLink: HttpLink) {\n        return {\n          link: httpLink.create({ uri: "http://localhost:4000/graphql" }),\n          cache: new InMemoryCache(),\n        };\n      },\n      deps: [HttpLink],\n    },\n  ],\n})',
                },
                {
                    command: 'Apollo Client Queries',
                    description: 'Execute queries with Apollo Client',
                    usage: 'useQuery(gql`...`, { variables })',
                    example: '# React useQuery hook\nimport { gql, useQuery } from "@apollo/client";\n\nconst GET_USERS = gql`\n  query GetUsers($limit: Int, $offset: Int) {\n    users(limit: $limit, offset: $offset) {\n      id\n      name\n      email\n      avatar\n    }\n  }\n`;\n\nfunction UserList() {\n  const { loading, error, data, refetch } = useQuery(GET_USERS, {\n    variables: { limit: 10, offset: 0 },\n    pollInterval: 30000, # Refetch every 30 seconds\n    notifyOnNetworkStatusChange: true,\n  });\n  \n  if (loading) return <div>Loading...</div>;\n  if (error) return <div>Error: {error.message}</div>;\n  \n  return (\n    <div>\n      {data.users.map(user => (\n        <div key={user.id}>\n          <h3>{user.name}</h3>\n          <p>{user.email}</p>\n        </div>\n      ))}\n      <button onClick={() => refetch()}>Refresh</button>\n    </div>\n  );\n}\n\n# Lazy query with useLazyQuery\nfunction SearchUsers() {\n  const [searchUsers, { loading, error, data }] = useLazyQuery(GET_USERS);\n  \n  const handleSearch = (term) => {\n    searchUsers({ variables: { search: term } });\n  };\n  \n  return (\n    <div>\n      <input onChange={(e) => handleSearch(e.target.value)} />\n      {data && <UserList users={data.users} />}\n    </div>\n  );\n}',
                },
                {
                    command: 'Apollo Client Mutations',
                    description: 'Execute mutations with Apollo Client',
                    usage: 'useMutation(gql`...`, { variables })',
                    example: '# React useMutation hook\nimport { gql, useMutation } from "@apollo/client";\n\nconst CREATE_USER = gql`\n  mutation CreateUser($input: CreateUserInput!) {\n    createUser(input: $input) {\n      id\n      name\n      email\n    }\n  }\n`;\n\nconst UPDATE_USER = gql`\n  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {\n    updateUser(id: $id, input: $input) {\n      id\n      name\n      email\n    }\n  }\n`;\n\nfunction CreateUserForm() {\n  const [createUser, { loading, error }] = useMutation(CREATE_USER, {\n    refetchQueries: [\n      {\n        query: GET_USERS,\n      },\n    ],\n    update: (cache, { data: { createUser } }) => {\n      cache.modify({\n        fields: {\n          users(existingUsers = []) {\n            const newUserRef = cache.writeFragment({\n              data: createUser,\n              fragment: gql`\n                fragment NewUser on User {\n                  id\n                  name\n                  email\n                }\n              `,\n            });\n            return [...existingUsers, newUserRef];\n          },\n        },\n      });\n    },\n  });\n  \n  const handleSubmit = async (e) => {\n    e.preventDefault();\n    const formData = new FormData(e.target);\n    \n    try {\n      await createUser({\n        variables: {\n          input: {\n            name: formData.get("name"),\n            email: formData.get("email"),\n          },\n        },\n      });\n      e.target.reset();\n    } catch (err) {\n      console.error("Mutation error:", err);\n    }\n  };\n  \n  return (\n    <form onSubmit={handleSubmit}>\n      <input name="name" placeholder="Name" required />\n      <input name="email" type="email" placeholder="Email" required />\n      <button type="submit" disabled={loading}>\n        {loading ? "Creating..." : "Create User"}\n      </button>\n      {error && <div>Error: {error.message}</div>}\n    </form>\n  );\n}',
                },
                {
                    command: 'Apollo Client Cache',
                    description: 'Manage Apollo Client cache',
                    usage: 'cache.modify(), cache.writeQuery(), cache.readQuery()',
                    example: '# Cache manipulation\nimport { useApolloClient } from "@apollo/client";\n\nfunction CacheExample() {\n  const client = useApolloClient();\n  \n  # Read from cache\n  const cachedData = client.readQuery({\n    query: GET_USERS,\n    variables: { limit: 10 },\n  });\n  \n  # Write to cache\n  const updateUserCache = (user) => {\n    client.writeQuery({\n      query: GET_USER,\n      variables: { id: user.id },\n      data: { user },\n    });\n  };\n  \n  # Modify cache\n  const removeUserFromCache = (userId) => {\n    client.modify({\n      id: `User:${userId}`,\n      fields: {\n        deleted: () => true,\n      },\n    });\n    \n    client.modify({\n      fields: {\n        users(existingRefs = [], { readField }) {\n          return existingRefs.filter(\n            ref => readField("id", ref) !== userId\n          );\n        },\n      },\n    });\n  };\n  \n  # Clear cache\n  const clearCache = () => {\n    client.clearStore();\n  };\n  \n  # Reset specific cache\n  const resetUserCache = () => {\n    client.resetStore({\n      discard: ["users"],\n    });\n  };\n  \n  return (\n    <div>\n      <button onClick={() => clearCache()}>Clear Cache</button>\n      <button onClick={() => resetUserCache()}>Reset Users</button>\n    </div>\n  );\n}\n\n# Cache policies\nconst client = new ApolloClient({\n  cache: new InMemoryCache({\n    typePolicies: {\n      Query: {\n        fields: {\n          posts: {\n            keyArgs: ["filter", "sort"],\n            merge(existing = [], incoming, { args }) {\n              if (args?.offset === 0) {\n                return incoming;\n              }\n              return [...existing, ...incoming];\n            },\n          },\n        },\n      },\n      User: {\n        fields: {\n          posts: {\n            merge(existing = [], incoming) {\n              return incoming;\n            },\n          },\n        },\n      },\n    },\n  }),\n});',
                },
            ],
        },
        // EXPERT LEVEL
        {
            title: 'Performance Optimization',
            commands: [
                {
                    command: 'Query Optimization',
                    description: 'Optimize GraphQL queries for performance',
                    usage: 'DataLoader, query batching, field resolvers',
                    example: '# DataLoader for N+1 problem\nimport DataLoader from "dataloader";\n\nconst userLoader = new DataLoader(async (ids) => {\n  const users = await db.users.findMany({\n    where: { id: { in: ids } },\n  });\n  \n  return ids.map(id => users.find(user => user.id === id));\n});\n\nconst postLoader = new DataLoader(async (ids) => {\n  const posts = await db.posts.findMany({\n    where: { id: { in: ids } },\n  });\n  \n  return ids.map(id => posts.find(post => post.id === id));\n});\n\n# Optimized resolvers\nconst resolvers = {\n  Query: {\n    users: async (_, { limit }) => {\n      return await db.users.findMany({ take: limit });\n    },\n  },\n  User: {\n    posts: async (parent) => {\n      return await postLoader.load(parent.id);\n    },\n    friends: async (parent) => {\n      const friendships = await db.friendships.findMany({\n        where: { userId: parent.id },\n      });\n      const friendIds = friendships.map(f => f.friendId);\n      return await userLoader.loadMany(friendIds);\n    },\n  },\n};\n\n# Query complexity analysis\nconst depthLimit = require("graphql-depth-limit");\nconst { createComplexityLimitRule } = require("graphql-validation-complexity");\n\nconst server = new ApolloServer({\n  schema,\n  validationRules: [\n    depthLimit(7),\n    createComplexityLimitRule(1000, {\n      onCost: (cost) => console.log("Query cost:", cost),\n      onComplete: (cost) => console.log("Query completed with cost:", cost),\n    }),\n  ],\n});',
                },
                {
                    command: 'Caching Strategies',
                    description: 'Implement caching at multiple levels',
                    usage: 'Apollo cache, Redis, HTTP caching',
                    example: '# Response caching plugin\nconst responseCachePlugin = require("apollo-server-plugin-response-cache");\n\nconst server = new ApolloServer({\n  schema,\n  plugins: [\n    responseCachePlugin({\n      ttl: 900, # 15 minutes\n      sessionId: (requestContext) => requestContext.request.http.headers.get("session-id"),\n    }),\n  ],\n});\n\n# Redis caching\nimport Redis from "ioredis";\n\nconst redis = new Redis(process.env.REDIS_URL);\n\nconst cacheResolver = {\n  Query: {\n    user: async (_, { id }) => {\n      const cacheKey = `user:${id}`;\n      const cached = await redis.get(cacheKey);\n      \n      if (cached) {\n        return JSON.parse(cached);\n      }\n      \n      const user = await getUserById(id);\n      await redis.setex(cacheKey, 300, JSON.stringify(user));\n      \n      return user;\n    },\n  },\n  Mutation: {\n    updateUser: async (_, { id, input }) => {\n      const user = await updateUser(id, input);\n      \n      # Invalidate cache\n      await redis.del(`user:${id}`);\n      \n      return user;\n    },\n  },\n};\n\n# HTTP caching headers\nconst server = new ApolloServer({\n  schema,\n  plugins: [\n    {\n      async requestDidStart() {\n        return {\n          async willSendResponse(requestContext) {\n            const { response, request } = requestContext;\n            \n            if (request.operationName === "GetUsers") {\n              response.http.headers.set("Cache-Control", "public, max-age=300");\n            }\n          },\n        };\n      },\n    },\n  ],\n});',
                },
                {
                    command: 'Query Batching',
                    description: 'Batch multiple queries into single request',
                    usage: 'Apollo Link batching, query deduplication',
                    example: '# Query batching with Apollo Link\nimport { BatchHttpLink } from "@apollo/client/link/batch-http";\nimport { InMemoryCache } from "@apollo/client";\n\nconst client = new ApolloClient({\n  link: new BatchHttpLink({\n    uri: "http://localhost:4000/graphql",\n    batchMax: 10, # Maximum batch size\n    batchInterval: 20, # Batch interval in ms\n  }),\n  cache: new InMemoryCache(),\n});\n\n# Server-side batching support\nconst { ApolloServer } = require("apollo-server-express");\nconst { graphqlBatchHTTPWrapper } = require("@apollo/server/dist/expressBatchHttp");\n\nconst server = new ApolloServer({ schema });\n\napp.use(\n  "/graphql",\n  express.json(),\n  graphqlBatchHTTPWrapper({ server })\n);\n\n# Query deduplication\nimport { from } from "@apollo/client";\nimport { DedupLink } from "@apollo/client/link/dedup";\nimport { HttpLink } from "@apollo/client/link/http";\n\nconst httpLink = new HttpLink({ uri: "/graphql" });\nconst dedupLink = new DedupLink();\n\nconst client = new ApolloClient({\n  link: from([dedupLink, httpLink]),\n  cache: new InMemoryCache(),\n});\n\n# Automatic persisted queries\nimport { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";\nimport { sha256 } from "crypto-hash";\n\nconst persistedQueriesLink = createPersistedQueryLink({\n  sha256,\n  generateHash: ({ query, variables }) => \n    sha256(JSON.stringify({ query, variables })),\n});\n\nconst client = new ApolloClient({\n  link: from([persistedQueriesLink, httpLink]),\n  cache: new InMemoryCache(),\n});',
                },
                {
                    command: 'Performance Monitoring',
                    description: 'Monitor GraphQL performance metrics',
                    usage: 'Apollo Studio, custom metrics, tracing',
                    example: '# Apollo Studio integration\nimport { ApolloServer } from "@apollo/server";\nimport { ApolloServerPluginInlineTrace } from "@apollo/server/plugin/inlineTrace";\n\nconst server = new ApolloServer({\n  schema,\n  plugins: [\n    ApolloServerPluginInlineTrace(),\n  ],\n});\n\n# Custom performance monitoring\nconst performancePlugin = {\n  async requestDidStart() {\n    const start = Date.now();\n    \n    return {\n      async didResolveOperation(requestContext) {\n        const complexity = calculateComplexity(requestContext.request.query);\n        console.log(`Query complexity: ${complexity}`);\n      },\n      async willSendResponse(requestContext) {\n        const duration = Date.now() - start;\n        console.log(`Request duration: ${duration}ms`);\n        \n        # Send metrics to monitoring service\n        await sendMetrics({\n          operation: requestContext.request.operationName,\n          duration,\n          complexity: calculateComplexity(requestContext.request.query),\n        });\n      },\n    };\n  },\n};\n\n# Query complexity calculation\nconst calculateComplexity = (query) => {\n  const ast = parse(query);\n  let complexity = 0;\n  \n  visit(ast, {\n    Field(node) {\n      complexity += 1;\n      if (node.name.value === "posts") {\n        complexity += 5; # Posts are more complex\n      }\n    },\n  });\n  \n  return complexity;\n};\n\n# Memory usage monitoring\nconst memoryPlugin = {\n  async requestDidStart() {\n    const startMemory = process.memoryUsage();\n    \n    return {\n      async willSendResponse() {\n        const endMemory = process.memoryUsage();\n        const memoryDiff = endMemory.heapUsed - startMemory.heapUsed;\n        \n        console.log(`Memory usage: ${memoryDiff / 1024 / 1024}MB`);\n      },\n    };\n  },\n};',
                },
            ],
        },
        {
            title: 'Testing GraphQL',
            commands: [
                {
                    command: 'Unit Testing Resolvers',
                    description: 'Test GraphQL resolvers with Jest',
                    usage: 'describe("User resolvers", () => { ... })',
                    example: '# Resolver unit tests\nimport { resolvers } from "../resolvers";\nimport { mockUsers, mockPosts } from "../mocks";\n\ndescribe("User resolvers", () => {\n  describe("Query.users", () => {\n    it("should return all users", async () => {\n      const result = await resolvers.Query.users();\n      expect(result).toEqual(mockUsers);\n    });\n    \n    it("should limit results", async () => {\n      const result = await resolvers.Query.users(null, { limit: 2 });\n      expect(result).toHaveLength(2);\n    });\n  });\n  \n  describe("Query.user", () => {\n    it("should return user by ID", async () => {\n      const result = await resolvers.Query.user(null, { id: "1" });\n      expect(result).toEqual(mockUsers[0]);\n    });\n    \n    it("should return null for non-existent user", async () => {\n      const result = await resolvers.Query.user(null, { id: "999" });\n      expect(result).toBeNull();\n    });\n  });\n  \n  describe("User.posts", () => {\n    it("should return user posts", async () => {\n      const user = mockUsers[0];\n      const result = await resolvers.User.posts(user);\n      \n      expect(result).toEqual(\n        mockPosts.filter(post => post.authorId === user.id)\n      );\n    });\n  });\n});\n\n# Mutation tests\ndescribe("User mutations", () => {\n  describe("Mutation.createUser", () => {\n    it("should create new user", async () => {\n      const input = {\n        name: "John Doe",\n        email: "john@example.com",\n      };\n      \n      const result = await resolvers.Mutation.createUser(null, { input });\n      \n      expect(result.id).toBeDefined();\n      expect(result.name).toBe(input.name);\n      expect(result.email).toBe(input.email);\n    });\n    \n    it("should throw error for invalid email", async () => {\n      const input = {\n        name: "John Doe",\n        email: "invalid-email",\n      };\n      \n      await expect(\n        resolvers.Mutation.createUser(null, { input })\n      ).rejects.toThrow("Invalid email format");\n    });\n  });\n});',
                },
                {
                    command: 'Integration Testing',
                    description: 'Test GraphQL API end-to-end',
                    usage: 'supertest, Apollo Server testing',
                    example: '# Integration tests with supertest\nimport request from "supertest";\nimport { ApolloServer } from "@apollo/server";\nimport { startServerAndCreateNextHandler } from "@as-integrations/next";\nimport { typeDefs, resolvers } from "../schema";\n\ndescribe("GraphQL API", () => {\n  let server;\n  let handler;\n  \n  beforeAll(async () => {\n    server = new ApolloServer({\n      typeDefs,\n      resolvers,\n    });\n    \n    handler = startServerAndCreateNextHandler(server);\n  });\n  \n  afterAll(async () => {\n    await server.stop();\n  });\n  \n  describe("Users API", () => {\n    it("should get users", async () => {\n      const query = `\n        query {\n          users {\n            id\n            name\n            email\n          }\n        }\n      `;\n      \n      const response = await request(handler)\n        .post("/graphql")\n        .send({ query })\n        .expect(200);\n      \n      expect(response.body.data.users).toBeDefined();\n      expect(response.body.data.users.length).toBeGreaterThan(0);\n    });\n    \n    it("should create user", async () => {\n      const mutation = `\n        mutation CreateUser($input: CreateUserInput!) {\n          createUser(input: $input) {\n            id\n            name\n            email\n          }\n        }\n      `;\n      \n      const variables = {\n        input: {\n          name: "Test User",\n          email: "test@example.com",\n        },\n      };\n      \n      const response = await request(handler)\n        .post("/graphql")\n        .send({ query: mutation, variables })\n        .expect(200);\n      \n      expect(response.body.data.createUser.name).toBe("Test User");\n      expect(response.body.data.createUser.email).toBe("test@example.com");\n    });\n    \n    it("should handle validation errors", async () => {\n      const mutation = `\n        mutation CreateUser($input: CreateUserInput!) {\n          createUser(input: $input) {\n            id\n            name\n            email\n          }\n        }\n      `;\n      \n      const variables = {\n        input: {\n          name: "",\n          email: "invalid-email",\n        },\n      };\n      \n      const response = await request(handler)\n        .post("/graphql")\n        .send({ query: mutation, variables })\n        .expect(200);\n      \n      expect(response.body.errors).toBeDefined();\n      expect(response.body.errors.length).toBeGreaterThan(0);\n    });\n  });\n});',
                },
                {
                    command: 'Testing Subscriptions',
                    description: 'Test GraphQL subscriptions',
                    usage: 'mock PubSub, subscription testing',
                    example: '# Subscription tests\nimport { PubSub } from "graphql-subscriptions";\nimport { withFilter } from "graphql-subscriptions";\n\ndescribe("GraphQL subscriptions", () => {\n  let pubsub;\n  \n  beforeEach(() => {\n    pubsub = new PubSub();\n  });\n  \n  describe("postCreated subscription", () => {\n    it("should emit post created events", async () => {\n      const POST_CREATED = "POST_CREATED";\n      \n      const subscription = pubsub.asyncIterator([POST_CREATED]);\n      \n      # Publish event\n      const postData = {\n        id: "1",\n        title: "Test Post",\n        content: "Test content",\n      };\n      \n      pubsub.publish(POST_CREATED, { postCreated: postData });\n      \n      # Subscribe to event\n      const result = await subscription.next();\n      \n      expect(result.value).toEqual({ postCreated: postData });\n    });\n    \n    it("should filter events with withFilter", async () => {\n      const MESSAGE_SENT = "MESSAGE_SENT";\n      \n      const filteredSubscription = withFilter(\n        () => pubsub.asyncIterator([MESSAGE_SENT]),\n        (payload, variables) => {\n          return payload.messageSent.chatId === variables.chatId;\n        }\n      );\n      \n      const iterator = filteredSubscription(null, { chatId: "chat1" });\n      \n      # Publish message for different chat\n      pubsub.publish(MESSAGE_SENT, {\n        messageSent: { chatId: "chat2", content: "Hello" },\n      });\n      \n      # Should not receive message\n      const result1 = await Promise.race([\n        iterator.next(),\n        new Promise(resolve => setTimeout(() => resolve({ timeout: true }), 100))\n      ]);\n      \n      expect(result1.timeout).toBe(true);\n      \n      # Publish message for correct chat\n      pubsub.publish(MESSAGE_SENT, {\n        messageSent: { chatId: "chat1", content: "Hello" },\n      });\n      \n      const result2 = await iterator.next();\n      expect(result2.value.messageSent.chatId).toBe("chat1");\n    });\n  });\n});\n\n# Integration test for subscriptions\nimport WebSocket from "ws";\n\ndescribe("Subscription integration", () => {\n  it("should handle WebSocket subscription", (done) => {\n    const ws = new WebSocket("ws://localhost:4000/graphql");\n    \n    ws.on("open", () => {\n      const subscriptionQuery = `\n        subscription {\n          postCreated {\n            id\n            title\n          }\n        }\n      `;\n      \n      ws.send(JSON.stringify({\n        id: "1",\n        type: "start",\n        payload: { query: subscriptionQuery },\n      }));\n    });\n    \n    ws.on("message", (data) => {\n      const message = JSON.parse(data.toString());\n      \n      if (message.type === "data") {\n        expect(message.data.postCreated).toBeDefined();\n        ws.close();\n        done();\n      }\n    });\n  });\n});',
                },
                {
                    command: 'Load Testing GraphQL',
                    description: 'Load test GraphQL APIs',
                    usage: 'Artillery, k6, custom load testing',
                    example: '# Artillery GraphQL load test\nconfig:\n  target: "http://localhost:4000"\n  phases:\n    - duration: 60\n      arrivalRate: 10\n    - duration: 120\n      arrivalRate: 50\n    - duration: 60\n      arrivalRate: 100\n\nscenarios:\n  - name: "GraphQL Queries"\n    weight: 70\n    flow:\n      - post:\n          url: "/graphql"\n          json:\n            query: |\n              query GetUsers($limit: Int) {\n                users(limit: $limit) {\n                  id\n                  name\n                  email\n                }\n              }\n            variables:\n              limit: 10\n          capture:\n            - json: "$.data.users[0].id"\n              as: "userId"\n      \n      - post:\n          url: "/graphql"\n          json:\n            query: |\n              query GetUser($id: ID!) {\n                user(id: $id) {\n                  id\n                  name\n                  posts {\n                    title\n                  }\n                }\n              }\n            variables:\n              id: "{{ userId }}"\n  \n  - name: "GraphQL Mutations"\n    weight: 30\n    flow:\n      - post:\n          url: "/graphql"\n          json:\n            query: |\n              mutation CreateUser($input: CreateUserInput!) {\n                createUser(input: $input) {\n                  id\n                  name\n                  email\n                }\n              }\n            variables:\n              input:\n                name: "Load Test User"\n                email: "loadtest{{ $randomInt() }}@example.com"\n\n# k6 GraphQL load test\nimport http from "k6/http";\nimport { check, sleep } from "k6";\n\nconst GRAPHQL_ENDPOINT = "http://localhost:4000/graphql";\n\nexport let options = {\n  stages: [\n    { duration: "2m", target: 100 },\n    { duration: "5m", target: 100 },\n    { duration: "2m", target: 200 },\n    { duration: "5m", target: 200 },\n    { duration: "2m", target: 0 },\n  ],\n};\n\nexport default function () {\n  const query = `\n    query {\n      users(limit: 10) {\n        id\n        name\n        email\n      }\n    }\n  `;\n  \n  const payload = JSON.stringify({ query });\n  const params = {\n    headers: {\n      "Content-Type": "application/json",\n    },\n  };\n  \n  let response = http.post(GRAPHQL_ENDPOINT, payload, params);\n  \n  check(response, {\n    "status is 200": (r) => r.status === 200,\n    "response time < 500ms": (r) => r.timings.duration < 500,\n    "has data": (r) => r.json("data") !== undefined,\n  });\n  \n  sleep(1);\n}',
                },
            ],
        },
        {
            title: 'Security Best Practices',
            commands: [
                {
                    command: 'Authentication & Authorization',
                    description: 'Secure GraphQL API with auth',
                    usage: 'JWT, context, custom directives',
                    example: '# JWT Authentication\nimport jwt from "jsonwebtoken";\n\nconst getUserFromToken = async (token) => {\n  if (!token) return null;\n  \n  try {\n    const decoded = jwt.verify(token, process.env.JWT_SECRET);\n    return await getUserById(decoded.userId);\n  } catch (err) {\n    return null;\n  }\n};\n\nconst server = new ApolloServer({\n  schema,\n  context: async ({ req }) => {\n    const token = req.headers.authorization?.replace("Bearer ", "");\n    const user = await getUserFromToken(token);\n    \n    return { user, db: databaseConnection };\n  },\n});\n\n# Custom auth directive\ntype AuthDirective = {\n  requires: Role;\n};\n\nconst authDirectiveTransformer = (schema: GraphQLSchema) => {\n  return mapSchema(schema, {\n    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {\n      const authDirectives = getDirectives(\n        schema,\n        fieldConfig\n      ).auth as AuthDirective[];\n      \n      if (authDirectives?.length) {\n        const { requires } = authDirectives[0];\n        const originalResolver = fieldConfig.resolve;\n        \n        fieldConfig.resolve = async (source, args, context, info) => {\n          if (!context.user) {\n            throw new AuthenticationError("You must be logged in");\n          }\n          \n          if (!hasRole(context.user, requires)) {\n            throw new ForbiddenError("You are not authorized");\n          }\n          \n          return originalResolver(source, args, context, info);\n        };\n      }\n      \n      return fieldConfig;\n    },\n  });\n};\n\n# Usage in schema\ntype Query {\n  users: [User!]! @auth(requires: ADMIN)\n  profile: User! @auth(requires: USER)\n  publicData: String!\n}\n\ntype Mutation {\n  createUser(input: CreateUserInput!): User! @auth(requires: ADMIN)\n  updateProfile(input: UpdateProfileInput!): User! @auth(requires: USER)\n}',
                },
                {
                    command: 'Input Validation & Sanitization',
                    description: 'Validate and sanitize GraphQL inputs',
                    usage: 'Custom scalars, validation rules',
                    example: '# Input validation with custom scalars\nconst EmailScalar = new GraphQLScalarType({\n  name: "Email",\n  description: "Email address scalar type",\n  serialize(value) {\n    return value;\n  },\n  parseValue(value) {\n    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {\n      throw new UserInputError("Invalid email format");\n    }\n    return value.toLowerCase();\n  },\n  parseLiteral(ast) {\n    if (ast.kind !== Kind.STRING) {\n      throw new UserInputError("Email must be a string");\n    }\n    \n    if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(ast.value)) {\n      throw new UserInputError("Invalid email format");\n    }\n    \n    return ast.value.toLowerCase();\n  },\n});\n\n# Input validation in resolvers\nconst resolvers = {\n  Mutation: {\n    createUser: async (_, { input }) => {\n      # Validate required fields\n      if (!input.name || input.name.trim().length < 2) {\n        throw new UserInputError("Name must be at least 2 characters");\n      }\n      \n      if (input.age && (input.age < 18 || input.age > 120)) {\n        throw new UserInputError("Age must be between 18 and 120");\n      }\n      \n      # Sanitize input\n      const sanitizedInput = {\n        ...input,\n        name: input.name.trim(),\n        bio: input.bio ? sanitizeHtml(input.bio) : null,\n      };\n      \n      return await createUser(sanitizedInput);\n    },\n  },\n};\n\n# Validation rules\nimport { validate } from "graphql";\n\nconst validationRules = [\n  # Query depth limit\n  depthLimit(7),\n  # Query complexity limit\n  createComplexityLimitRule(1000),\n  # Custom validation rule\n  (context) => ({\n    Field(node) {\n      if (node.name.value === "sensitiveField" && !context.user?.isAdmin) {\n        context.reportError(new GraphQLError("Access denied"));\n      }\n    },\n  }),\n];',
                },
                {
                    command: 'Rate Limiting & DDoS Protection',
                    description: 'Protect GraphQL API from abuse',
                    usage: 'Rate limiting, query complexity analysis',
                    example: '# Rate limiting with express-rate-limit\nimport rateLimit from "express-rate-limit";\n\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, # 15 minutes\n  max: 100, # limit each IP to 100 requests per windowMs\n  message: {\n    error: "Too many requests",\n    retryAfter: "15 minutes",\n  },\n  standardHeaders: true,\n  legacyHeaders: false,\n});\n\napp.use("/graphql", limiter);\n\n# GraphQL-specific rate limiting\nconst graphqlRateLimit = async (req, res, next) => {\n  const { query } = req.body;\n  \n  if (!query) return next();\n  \n  const complexity = calculateComplexity(query);\n  const cost = Math.ceil(complexity / 10); # 1 point per 10 complexity\n  \n  const key = `graphql:${req.ip}`;\n  const current = await redis.incr(key);\n  \n  if (current === 1) {\n    await redis.expire(key, 60); # 1 minute window\n  }\n  \n  if (current > 1000) { # 1000 points per minute\n    return res.status(429).json({\n      errors: [{ message: "Rate limit exceeded" }],\n    });\n  }\n  \n  next();\n};\n\napp.use("/graphql", graphqlRateLimit);\n\n# Query complexity analysis\nconst complexityLimitRule = createComplexityLimitRule(1000, {\n  onCost: (cost) => console.log(`Query cost: ${cost}`),\n  onComplete: (cost) => console.log(`Total cost: ${cost}`),\n  createError: (cost) => new GraphQLError(`Query cost ${cost} exceeds limit`),\n  estimators: [\n    simpleEstimator({ defaultComplexity: 1 }),\n    fieldConfigEstimator(),\n  ],\n});\n\nconst server = new ApolloServer({\n  schema,\n  validationRules: [complexityLimitRule],\n});',
                },
                {
                    command: 'Security Headers & HTTPS',
                    description: 'Secure GraphQL API with proper headers',
                    usage: 'Helmet, CORS, security middleware',
                    example: '# Security headers with Helmet\nimport helmet from "helmet";\n\napp.use(helmet({\n  contentSecurityPolicy: {\n    directives: {\n      defaultSrc: ["\'self\'"],\n      scriptSrc: ["\'self\'", "\'unsafe-inline\'"],\n      styleSrc: ["\'self\'", "\'unsafe-inline\'"],\n      imgSrc: ["\'self\'", "data:", "https:"],\n    },\n  },\n  hsts: {\n    maxAge: 31536000,\n    includeSubDomains: true,\n    preload: true,\n  },\n}));\n\n# CORS configuration\nimport cors from "cors";\n\napp.use(cors({\n  origin: process.env.ALLOWED_ORIGINS?.split(",") || ["http://localhost:3000"],\n  credentials: true,\n  optionsSuccessStatus: 200,\n}));\n\n# GraphQL-specific security\nconst securityMiddleware = (req, res, next) => {\n  # Block introspection in production\n  if (process.env.NODE_ENV === "production") {\n    const { query } = req.body;\n    \n    if (query && query.includes("introspection")) {\n      return res.status(403).json({\n        errors: [{ message: "Introspection disabled in production" }],\n      });\n    }\n  }\n  \n  # Set security headers\n  res.setHeader("X-Content-Type-Options", "nosniff");\n  res.setHeader("X-Frame-Options", "DENY");\n  res.setHeader("X-XSS-Protection", "1; mode=block");\n  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");\n  \n  next();\n};\n\napp.use("/graphql", securityMiddleware);\n\n# Request logging for security\nconst securityLogger = (req, res, next) => {\n  const logData = {\n    timestamp: new Date().toISOString(),\n    ip: req.ip,\n    userAgent: req.get("User-Agent"),\n    query: req.body.query?.substring(0, 100),\n    operationName: req.body.operationName,\n  };\n  \n  console.log("GraphQL Request:", logData);\n  \n  # Log suspicious activity\n  if (isSuspicious(req)) {\n    console.warn("Suspicious GraphQL request:", logData);\n    # Send alert to security team\n  }\n  \n  next();\n};\n\napp.use("/graphql", securityLogger);',
                },
            ],
        },
    ],
};
