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
                    command: 'Install GraphQL Core',
                    description: 'Install GraphQL core packages',
                    usage: 'npm install graphql',
                    example: `npm install graphql`,
                },
                {
                    command: 'Install GraphQL with TypeScript',
                    description: 'Install GraphQL with TypeScript support',
                    usage: 'npm install graphql @types/graphql',
                    example: `# Install with TypeScript
npm install graphql @types/graphql`,
                },
                {
                    command: 'Install Apollo Server',
                    description: 'Install Apollo Server package',
                    usage: 'npm install @apollo/server graphql',
                    example: `# Install Apollo Server
npm install @apollo/server graphql`,
                },
                {
                    command: 'Install GraphQL.js Reference',
                    description: 'Install GraphQL.js reference implementation',
                    usage: 'npm install graphql',
                    example: `# Install GraphQL.js (reference implementation)
npm install graphql`,
                },
                {
                    command: 'Basic GraphQL Server Setup',
                    description: 'Create basic GraphQL server with GraphQL Yoga',
                    usage: 'import { createYoga } from "graphql-yoga"',
                    example: `import { createServer } from "http";
import { schema } from "./schema";
import { createYoga } from "graphql-yoga";

const yoga = createYoga({ schema });

const server = createServer(yoga);

server.listen(4000, () => {
  console.log("GraphQL server running on http://localhost:4000/graphql");
});`,
                },
                {
                    command: 'Apollo Server Express Setup',
                    description: 'Setup Apollo Server with Express',
                    usage: 'import { ApolloServer } from "@apollo/server"',
                    example: `import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import { typeDefs, resolvers } from "./schema";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

await server.start();

app.use("/graphql", expressMiddleware(server));

app.listen(4000, () => {
  console.log("Apollo Server running on http://localhost:4000/graphql");
});`,
                },
                {
                    command: 'GraphQL Playground Built-in',
                    description: 'Use built-in GraphQL playground',
                    usage: 'Visit Apollo Server playground URL',
                    example: `# Apollo Server includes GraphQL Playground
# Visit: http://localhost:4000/graphql`,
                },
                {
                    command: 'GraphQL IDE Installation',
                    description: 'Install standalone GraphQL IDE',
                    usage: 'npm install -g graphql-playground-react',
                    example: `# Alternative: GraphQL IDE
# Install GraphQL Playground
npm install -g graphql-playground-react`,
                },
                {
                    command: 'Run GraphQL Playground',
                    description: 'Start GraphQL Playground',
                    usage: 'graphql-playground command',
                    example: `# Run playground
graphql-playground`,
                },
            ],
        },
        {
            title: 'GraphQL Basics',
            commands: [
                {
                    command: 'Schema Definition Example',
                    description: 'Define GraphQL schema with types',
                    usage: 'const typeDefs = `type Query { ... }`',
                    example: `const typeDefs = \`#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }
  
  type Query {
    users: [User!]!
    user(id: ID!): User
  }
  
  type Mutation {
    createUser(name: String!, email: String!): User!
  }
\`;`,
                },
                {
                    command: 'Query All Users',
                    description: 'Write GraphQL query to get all users',
                    usage: 'query { users { id name } }',
                    example: `# Query all users
query {
  users {
    id
    name
    email
  }
}`,
                },
                {
                    command: 'Query Specific User',
                    description: 'Write GraphQL query to get specific user',
                    usage: 'query { user(id: "1") { ... } }',
                    example: `# Query specific user
query {
  user(id: "1") {
    id
    name
    email
    age
  }
}`,
                },
                {
                    command: 'Query with Variables',
                    description: 'Write GraphQL query with variables',
                    usage: 'query GetUser($id: ID!) { user(id: $id) { ... } }',
                    example: `# Query with variables
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
  }
}`,
                },
                {
                    command: 'Create User Mutation',
                    description: 'Write GraphQL mutation to create user',
                    usage: 'mutation { createUser(...) { ... } }',
                    example: `# Create user
mutation {
  createUser(name: "John Doe", email: "john@example.com") {
    id
    name
    email
  }
}`,
                },
                {
                    command: 'Mutation with Variables',
                    description: 'Write GraphQL mutation with variables',
                    usage: 'mutation CreateUser($name: String!, $email: String!)',
                    example: `# Mutation with variables
mutation CreateUser($name: String!, $email: String!) {
  createUser(name: $name, email: $email) {
    id
    name
    email
  }
}`,
                },
                {
                    command: 'Query Resolvers',
                    description: 'Implement GraphQL query resolvers',
                    usage: 'const resolvers = { Query: { ... } }',
                    example: `const resolvers = {
  Query: {
    users: () => [
      { id: "1", name: "John", email: "john@example.com" },
      { id: "2", name: "Jane", email: "jane@example.com" }
    ],
    user: (parent, { id }) => {
      return users.find(user => user.id === id);
    }
  },
  Mutation: {
    createUser: (parent, { name, email }) => {
      const newUser = { id: String(Date.now()), name, email };
      users.push(newUser);
      return newUser;
    }
  }
};`,
                },
            ],
        },
        // INTERMEDIATE LEVEL
        {
            title: 'Advanced Types & Schema Design',
            commands: [
                {
                    command: 'Custom Scalar Schema',
                    description: 'Define custom scalar types in schema',
                    usage: 'scalar Date\nscalar Email',
                    example: `# Schema definition
scalar Date
scalar Email

type User {
  id: ID!
  name: String!
  email: Email!
  createdAt: Date!
}`,
                },
                {
                    command: 'Custom Scalar Resolver Date',
                    description: 'Implement Date scalar resolver',
                    usage: 'new GraphQLScalarType for Date',
                    example: `# Resolver implementation
const resolvers = {
  Date: new GraphQLScalarType({
    name: "Date",
    serialize(value) {
      return value.toISOString();
    },
    parseValue(value) {
      return new Date(value);
    }
  }),`,
                },
                {
                    command: 'Custom Scalar Resolver Email',
                    description: 'Implement Email scalar resolver',
                    usage: 'new GraphQLScalarType for Email validation',
                    example: `  Email: new GraphQLScalarType({
    name: "Email",
    serialize(value) {
      return value;
    },
    parseValue(value) {
      if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value)) {
        throw new Error("Invalid email format");
      }
      return value;
    }
  })
};`,
                },
                {
                    command: 'Interface Definition',
                    description: 'Define GraphQL interface',
                    usage: 'interface Node { id: ID! }',
                    example: `# Interface definition
interface Node {
  id: ID!
  createdAt: String!
}`,
                },
                {
                    command: 'Interface Implementation',
                    description: 'Implement interface in types',
                    usage: 'type User implements Node { ... }',
                    example: `type User implements Node {
  id: ID!
  createdAt: String!
  name: String!
  email: String!
}

type Post implements Node {
  id: ID!
  createdAt: String!
  title: String!
  content: String!
}`,
                },
                {
                    command: 'Union Type Definition',
                    description: 'Define GraphQL union type',
                    usage: 'union SearchResult = User | Post',
                    example: `# Union type
union SearchResult = User | Post

type Query {
  search(term: String!): [SearchResult!]!
}`,
                },
                {
                    command: 'Union Type Resolver',
                    description: 'Implement union type resolver',
                    usage: '__resolveType function for unions',
                    example: `# Resolver implementation
const resolvers = {
  SearchResult: {
    __resolveType: (obj) => {
      if (obj.email) return "User";
      if (obj.title) return "Post";
      return null;
    }
  },
  Query: {
    search: (parent, { term }) => {
      // Search logic returning mixed results
      return [...users, ...posts];
    }
  }
};`,
                },
                {
                    command: 'Enum Definition Role',
                    description: 'Define enum for user roles',
                    usage: 'enum Role { USER ADMIN }',
                    example: `# Enum definition
enum Role {
  USER
  ADMIN
  MODERATOR
}`,
                },
                {
                    command: 'Enum Definition Status',
                    description: 'Define enum for user status',
                    usage: 'enum Status { ACTIVE INACTIVE }',
                    example: `enum Status {
  ACTIVE
  INACTIVE
  SUSPENDED
}`,
                },
                {
                    command: 'Input Type Definition',
                    description: 'Define input types for mutations',
                    usage: 'input CreateUserInput { ... }',
                    example: `# Input type definition
input CreateUserInput {
  name: String!
  email: String!
  role: Role = USER
  profile: UserProfileInput
}

input UserProfileInput {
  bio: String
  avatar: String
  age: Int
}`,
                },
                {
                    command: 'Mutation with Input Type',
                    description: 'Use input types in mutations',
                    usage: 'createUser(input: CreateUserInput!)',
                    example: `type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User
}`,
                },
                {
                    command: 'Mutation with Input Example',
                    description: 'Example mutation with input type',
                    usage: 'Complex input object in mutation',
                    example: `# Usage in mutation
mutation {
  createUser(input: {
    name: "John Doe"
    email: "john@example.com"
    role: ADMIN
    profile: {
      bio: "Software developer"
      age: 30
    }
  }) {
    id
    name
    role
  }
}`,
                },
                {
                    command: 'Non-Null Types',
                    description: 'Understand non-null types',
                    usage: 'String! (cannot be null)',
                    example: `# Non-null types (cannot be null)
type User {
  id: ID!        # Required
  name: String!   # Required
  email: String!  # Required
}`,
                },
                {
                    command: 'Nullable Types',
                    description: 'Understand nullable types',
                    usage: 'String (can be null)',
                    example: `# Nullable types
type User {
  bio: String     # Can be null
  age: Int        # Can be null
  posts: [Post]   # Can be null or empty
}`,
                },
                {
                    command: 'Non-Null Lists',
                    description: 'Non-null list types',
                    usage: '[User!]! (list and items non-null)',
                    example: `# Non-null lists
type User {
  friends: [User!]!   # List cannot be null, items cannot be null
  posts: [Post!]       # List can be null, items cannot be null
}`,
                },
                {
                    command: 'Nullable Lists',
                    description: 'Nullable list types',
                    usage: '[User] (list and items can be null)',
                    example: `# Nullable lists
type User {
  friends: [User]      # List can be null, items can be null
  posts: [Post]!       # List cannot be null, items can be null
}`,
                },
            ],
        },
        {
            title: 'Advanced Queries & Mutations',
            commands: [
                {
                    command: 'Query with Variables and Defaults',
                    description: 'Query with variables and default values',
                    usage: 'query GetUser($id: ID!, $withEmail: Boolean = false)',
                    example: `# Query with variables
query GetUser($id: ID!, $withEmail: Boolean = false) {
  user(id: $id) {
    id
    name
    email @include(if: $withEmail)
    age @skip(if: $withEmail)
  }
}`,
                },
                {
                    command: 'Variables JSON Example',
                    description: 'Variables object for GraphQL query',
                    usage: 'JSON variables object',
                    example: `# Variables JSON
{
  "id": "1",
  "withEmail": true
}`,
                },
                {
                    command: 'JavaScript GraphQL Query',
                    description: 'Execute GraphQL query in JavaScript',
                    usage: 'graphql(schema, query, null, null, variables)',
                    example: `# JavaScript usage
const query = \`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
    }
  }
\`;

const variables = { id: "1" };

const result = await graphql(schema, query, null, null, variables);`,
                },
                {
                    command: 'Conditional Fields with Directives',
                    description: 'Use @include and @skip directives',
                    usage: '@include(if: $condition) @skip(if: $condition)',
                    example: `# Conditional fields with directives
query GetUser($id: ID!, $includeEmail: Boolean!, $skipAge: Boolean!) {
  user(id: $id) {
    id
    name
    email @include(if: $includeEmail)
    age @skip(if: $skipAge)
    posts {
      title
      content @deprecated(reason: "Use summary instead")
      summary
    }
  }
}`,
                },
                {
                    command: 'Custom Directive Definition',
                    description: 'Define custom GraphQL directives',
                    usage: 'directive @auth(requires: Role!) on FIELD_DEFINITION',
                    example: `# Custom directive definition
directive @auth(requires: Role!) on FIELD_DEFINITION
directive @cache(ttl: Int) on FIELD
directive @transform(to: String!) on FIELD`,
                },
                {
                    command: 'Custom Directive Usage',
                    description: 'Use custom directives in schema',
                    usage: 'Apply directives to fields',
                    example: `# Usage in schema
type Query {
  users: [User!]! @cache(ttl: 300)
  adminUsers: [User!]! @auth(requires: ADMIN)
  userCount: Int! @transform(to: "String")
}`,
                },
                {
                    command: 'Fragment Definition',
                    description: 'Define reusable GraphQL fragments',
                    usage: 'fragment UserFields on User { ... }',
                    example: `# Define fragment
fragment UserFields on User {
  id
  name
  email
}`,
                },
                {
                    command: 'Fragment Usage in Query',
                    description: 'Use fragments in GraphQL queries',
                    usage: '...UserFields in query',
                    example: `# Use fragment in query
query {
  users {
    ...UserFields
  }
  user(id: "1") {
    ...UserFields
    age
  }
}`,
                },
                {
                    command: 'Inline Fragment for Interfaces',
                    description: 'Use inline fragments for interfaces',
                    usage: '... on Type { ... }',
                    example: `# Inline fragment for interfaces
query {
  search(term: "john") {
    ... on User {
      id
      name
      email
    }
    ... on Post {
      id
      title
      content
    }
  }
}`,
                },
                {
                    command: 'Named Fragment with Variables',
                    description: 'Fragment with variables',
                    usage: 'Fragment with variable arguments',
                    example: `# Named fragment with variables
fragment UserWithPosts on User {
  id
  name
  posts(limit: $limit) {
    title
  }
}`,
                },
                {
                    command: 'Field Aliases',
                    description: 'Use field aliases in queries',
                    usage: 'alias: field',
                    example: `# Field aliases
query {
  user: getUser(id: "1") {
    id
    fullName: name
    emailAddress: email
  }
  admin: getUser(id: "2") {
    id
    name
    email
  }
}`,
                },
                {
                    command: 'Arguments with Defaults',
                    description: 'Query arguments with default values',
                    usage: 'field(first: 10, after: "cursor")',
                    example: `# Arguments with defaults
query {
  users(first: 10, after: "cursor", orderBy: NAME) {
    edges {
      node {
        id
        name
      }
    }
  }
}`,
                },
                {
                    command: 'Complex Arguments',
                    description: 'Complex argument objects',
                    usage: 'Nested input objects as arguments',
                    example: `# Complex arguments
query {
  posts(
    filter: { status: PUBLISHED, authorId: "1" }
    sort: { field: CREATED_AT, direction: DESC }
    pagination: { limit: 20, offset: 0 }
  ) {
    id
    title
  }
}`,
                },
            ],
        },
        {
            title: 'Subscriptions',
            commands: [
                {
                    command: 'Subscription PubSub Setup',
                    description: 'Setup PubSub for subscriptions',
                    usage: 'import { PubSub } from "graphql-subscriptions"',
                    example: `import { PubSub } from "graphql-subscriptions";

const pubsub = new PubSub();`,
                },
                {
                    command: 'Subscription Schema Definition',
                    description: 'Define subscription schema',
                    usage: 'type Subscription { ... }',
                    example: `# Schema definition
type Subscription {
  postCreated: Post!
  userUpdated(userId: ID!): User!
  messageSent(chatId: ID!): Message!
}`,
                },
                {
                    command: 'Subscription Resolvers',
                    description: 'Implement subscription resolvers',
                    usage: 'pubsub.asyncIterator for subscriptions',
                    example: `# Resolver implementation
const resolvers = {
  Subscription: {
    postCreated: {
      subscribe: () => pubsub.asyncIterator(["POST_CREATED"]),
    },
    userUpdated: {
      subscribe: (_, { userId }) => 
        pubsub.asyncIterator([\`USER_UPDATED_\${userId}\`]),
    },
    messageSent: {
      subscribe: (_, { chatId }) => 
        pubsub.asyncIterator([\`MESSAGE_SENT_\${chatId}\`]),
    },
  },`,
                },
                {
                    command: 'Subscription Mutation Publisher',
                    description: 'Publish events in mutations',
                    usage: 'pubsub.publish("EVENT", { data: ... })',
                    example: `  Mutation: {
    createPost: (_, { input }) => {
      const post = createPost(input);
      pubsub.publish("POST_CREATED", { postCreated: post });
      return post;
    },
  }
};`,
                },
                {
                    command: 'Apollo Server WebSocket Setup',
                    description: 'Setup WebSocket server for subscriptions',
                    usage: 'WebSocketServer and graphql-ws',
                    example: `import { WebSocketServer } from "ws";
import { useServer } from "graphql-ws/lib/use/ws";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";

const app = express();`,
                },
                {
                    command: 'WebSocket Server Creation',
                    description: 'Create WebSocket server',
                    usage: 'new WebSocketServer with GraphQL path',
                    example: `# Create WebSocket server
const wsServer = new WebSocketServer({
  server: http.createServer(app),
  path: "/graphql",
});`,
                },
                {
                    command: 'WebSocket Server Setup',
                    description: 'Setup WebSocket server with schema',
                    usage: 'useServer with schema',
                    example: `# Server setup
const serverCleanup = useServer({ schema }, wsServer);`,
                },
                {
                    command: 'Apollo Server with WebSocket Plugin',
                    description: 'Configure Apollo Server for subscriptions',
                    usage: 'ApolloServer with WebSocket cleanup',
                    example: `const server = new ApolloServer({
  schema,
  plugins: [
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

await server.start();
app.use("/graphql", expressMiddleware(server));`,
                },
                {
                    command: 'JavaScript Subscription Client',
                    description: 'Subscribe to GraphQL from JavaScript',
                    usage: 'graphql-subscriptions-client',
                    example: `# JavaScript client subscription
import { gql, SubscriptionClient } from "graphql-subscriptions-client";

const subscriptionClient = new SubscriptionClient(
  "ws://localhost:4000/graphql",
  {
    reconnect: true,
    connectionParams: {
      authToken: "your-token",
    },
  }
);`,
                },
                {
                    command: 'GraphQL Subscription Query',
                    description: 'Define subscription query',
                    usage: 'subscription PostCreated { ... }',
                    example: `const subscription = gql\`
  subscription PostCreated {
    postCreated {
      id
      title
      author {
        name
      }
    }
  }
\`;`,
                },
                {
                    command: 'JavaScript Subscription Execution',
                    description: 'Execute subscription in JavaScript',
                    usage: 'subscriptionClient.request().subscribe()',
                    example: `subscriptionClient.request({ query: subscription }).subscribe({
  next: (data) => console.log("New post:", data),
  error: (err) => console.error("Subscription error:", err),
  complete: () => console.log("Subscription complete"),
});`,
                },
                {
                    command: 'Apollo Client Subscription Setup',
                    description: 'Setup Apollo Client subscriptions',
                    usage: 'useSubscription from @apollo/client',
                    example: `# Apollo Client subscription
import { gql, useSubscription } from "@apollo/client";

const POST_CREATED_SUBSCRIPTION = gql\`
  subscription PostCreated {
    postCreated {
      id
      title
      author {
        name
      }
    }
  }
\`;`,
                },
                {
                    command: 'React Subscription Hook',
                    description: 'Use subscription in React component',
                    usage: 'useSubscription hook',
                    example: `function PostList() {
  const { data, loading, error } = useSubscription(POST_CREATED_SUBSCRIPTION);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <div>New post: {data.postCreated.title}</div>;
}`,
                },
                {
                    command: 'Real-time Chat Schema',
                    description: 'Real-time chat subscription schema',
                    usage: 'Chat message subscriptions',
                    example: `# Real-time chat example
const CHAT_MESSAGE_SENT = "CHAT_MESSAGE_SENT";`,
                },
                {
                    command: 'Chat Subscription Resolver',
                    description: 'Chat subscription resolver',
                    usage: 'Subscribe to chat messages',
                    example: `const resolvers = {
  Subscription: {
    messageSent: {
      subscribe: (_, { chatId }) => 
        pubsub.asyncIterator([\`\${CHAT_MESSAGE_SENT}_\${chatId}\`]),
    },
  },`,
                },
                {
                    command: 'Chat Message Publisher',
                    description: 'Publish chat messages',
                    usage: 'Send message and notify subscribers',
                    example: `  Mutation: {
    sendMessage: (_, { chatId, content, userId }) => {
      const message = {
        id: generateId(),
        content,
        userId,
        chatId,
        timestamp: new Date().toISOString(),
      };
      
      # Save message
      saveMessage(message);
      
      # Notify subscribers
      pubsub.publish(\`\${CHAT_MESSAGE_SENT}_\${chatId}\`, {
        messageSent: message,
      });
      
      return message;
    },
  },
};`,
                },
                {
                    command: 'Real-time Notifications',
                    description: 'Real-time notification system',
                    usage: 'User-specific notifications',
                    example: `# Real-time notifications
const USER_NOTIFICATION = "USER_NOTIFICATION";

const sendNotification = (userId, notification) => {
  pubsub.publish(\`\${USER_NOTIFICATION}_\${userId}\`, {
    notificationSent: notification,
  });
};`,
                },
                {
                    command: 'Real-time Collaboration',
                    description: 'Real-time document collaboration',
                    usage: 'Document update notifications',
                    example: `# Real-time collaboration
const DOCUMENT_UPDATED = "DOCUMENT_UPDATED";

const updateDocument = (documentId, updates, userId) => {
  const document = updateDocumentInDB(documentId, updates);
  
  pubsub.publish(\`\${DOCUMENT_UPDATED}_\${documentId}\`, {
    documentUpdated: {
      document,
      updatedBy: userId,
      timestamp: new Date().toISOString(),
    },
  });
  
  return document;
};`,
                },
            ],
        },
        // Continue with more sections...
    ],
};
