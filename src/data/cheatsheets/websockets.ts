import { Wifi } from 'lucide-react';

export const websocketsCheatsheet = {
    id: 'websockets',
    name: 'WebSockets',
    description: 'Complete WebSockets reference: real-time apps, Socket.IO, scaling, security, and production deployment',
    icon: Wifi,
    colorTheme: 'purple' as const,
    sections: [
        // BEGINNER LEVEL
        {
            title: 'Installation & Setup',
            commands: [
                {
                    command: 'Install Native WebSockets',
                    description: 'Install WebSocket package',
                    usage: 'npm install ws',
                    example: `# Native WebSockets
npm install ws`,
                },
                {
                    command: 'Install Socket.IO',
                    description: 'Install Socket.IO package',
                    usage: 'npm install socket.io',
                    example: `# Socket.IO
npm install socket.io`,
                },
                {
                    command: 'Install with TypeScript',
                    description: 'Install WebSocket packages with TypeScript support',
                    usage: 'npm install ws socket.io @types/ws @types/socket.io',
                    example: `# With TypeScript
npm install ws socket.io @types/ws @types/socket.io`,
                },
                {
                    command: 'Install React Client',
                    description: 'Install Socket.IO client for React',
                    usage: 'npm install socket.io-client',
                    example: `# For React clients
npm install socket.io-client`,
                },
                {
                    command: 'Basic WebSocket Server',
                    description: 'Create basic WebSocket server',
                    usage: 'const WebSocket = require("ws");',
                    example: `const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected");
  
  ws.on("message", (message) => {
    console.log("Received:", message);
    ws.send(\`Echo: \${message}\`);
  });
  
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:8080");`,
                },
                {
                    command: 'Browser WebSocket Client',
                    description: 'Create WebSocket client in browser',
                    usage: 'const ws = new WebSocket("ws://localhost:8080");',
                    example: `# Browser client
const ws = new WebSocket("ws://localhost:8080");

ws.onopen = () => {
  console.log("Connected to server");
  ws.send("Hello Server!");
};

ws.onmessage = (event) => {
  console.log("Received:", event.data);
};

ws.onclose = () => {
  console.log("Disconnected from server");
};`,
                },
                {
                    command: 'Node.js WebSocket Client',
                    description: 'Create WebSocket client in Node.js',
                    usage: 'const WebSocket = require("ws");',
                    example: `# Node.js client
const WebSocket = require("ws");
const ws = new WebSocket("ws://localhost:8080");

ws.on("open", () => {
  ws.send("Hello from Node.js client");
});`,
                },
                {
                    command: 'WebSocket with Express Setup',
                    description: 'Setup Express with WebSocket integration',
                    usage: 'const server = http.createServer(app);',
                    example: `const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });`,
                },
                {
                    command: 'Express HTTP Route',
                    description: 'Add HTTP route to Express server',
                    usage: 'app.get("/", (req, res) => {...})',
                    example: `app.get("/", (req, res) => {
  res.send("HTTP server running");
});`,
                },
                {
                    command: 'WebSocket Broadcast',
                    description: 'Broadcast messages to all clients',
                    usage: 'wss.clients.forEach()',
                    example: `wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});`,
                },
                {
                    command: 'Express Server Start',
                    description: 'Start Express server with WebSockets',
                    usage: 'server.listen(3000, callback)',
                    example: `server.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
                },
            ],
        },
        {
            title: 'WebSocket Basics',
            commands: [
                {
                    command: 'WebSocket Connection Events',
                    description: 'Handle WebSocket connection lifecycle',
                    usage: 'ws.onopen, ws.onclose, ws.onerror',
                    example: `const ws = new WebSocket("ws://localhost:8080");

# Connection events
ws.onopen = (event) => {
  console.log("Connection opened:", event);
};

ws.onclose = (event) => {
  console.log("Connection closed:", event.code, event.reason);
};

ws.onerror = (error) => {
  console.error("WebSocket error:", error);
};`,
                },
                {
                    command: 'WebSocket Message Handling',
                    description: 'Handle incoming WebSocket messages',
                    usage: 'ws.onmessage with JSON parsing',
                    example: `# Message events
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log("Message received:", data);
  
  # Handle different message types
  switch(data.type) {
    case "chat":
      displayChatMessage(data.payload);
      break;
    case "notification":
      showNotification(data.payload);
      break;
  }
};`,
                },
                {
                    command: 'Send Text Message',
                    description: 'Send text message via WebSocket',
                    usage: 'ws.send("text message")',
                    example: `# Send text message
ws.send("Hello World!");`,
                },
                {
                    command: 'Send JSON Message',
                    description: 'Send JSON data via WebSocket',
                    usage: 'ws.send(JSON.stringify(object))',
                    example: `# Send JSON data
const message = {
  type: "chat",
  user: "John",
  text: "Hello everyone!",
  timestamp: Date.now()
};
ws.send(JSON.stringify(message));`,
                },
                {
                    command: 'Send Binary Data',
                    description: 'Send binary data via WebSocket',
                    usage: 'Buffer, ArrayBuffer, Blob',
                    example: `# Send binary data
const buffer = Buffer.from("Binary message");
ws.send(buffer);

# Send array buffer
const arrayBuffer = new ArrayBuffer(8);
ws.send(arrayBuffer);

# Send blob (browser)
const blob = new Blob(["Hello"], { type: "text/plain" });
ws.send(blob);`,
                },
                {
                    command: 'WebSocket Ready States',
                    description: 'Check WebSocket connection states',
                    usage: 'ws.readyState constants',
                    example: `# WebSocket ready states
const WebSocket = require("ws");

# Check connection state
function getConnectionState(ws) {
  switch(ws.readyState) {
    case WebSocket.CONNECTING:
      return "Connecting...";
    case WebSocket.OPEN:
      return "Connected";
    case WebSocket.CLOSING:
      return "Closing...";
    case WebSocket.CLOSED:
      return "Closed";
    default:
      return "Unknown";
  }
}`,
                },
                {
                    command: 'Safe Message Sending',
                    description: 'Safely send messages checking connection state',
                    usage: 'Check ws.readyState before sending',
                    example: `# Safe message sending
function safeSend(ws, message) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(message);
  } else {
    console.error("WebSocket is not open");
  }
}`,
                },
                {
                    command: 'Wait for Connection',
                    description: 'Wait for WebSocket to connect before sending',
                    usage: 'Check connection or wait for open event',
                    example: `# Wait for connection
function waitForConnection(ws, callback) {
  if (ws.readyState === WebSocket.OPEN) {
    callback();
  } else {
    ws.onopen = callback;
  }
}`,
                },
                {
                    command: 'Chat Server Setup',
                    description: 'Setup basic chat server with client tracking',
                    usage: 'Set() to track connected clients',
                    example: `# Server - chat.js
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

const clients = new Set();

wss.on("connection", (ws) => {
  clients.add(ws);
  
  # Broadcast new user joined
  broadcast({
    type: "system",
    message: "New user joined the chat",
    timestamp: Date.now()
  });`,
                },
                {
                    command: 'Chat Message Handling',
                    description: 'Handle chat messages and broadcast',
                    usage: 'Parse JSON and broadcast to all clients',
                    example: `  ws.on("message", (data) => {
    const message = JSON.parse(data);
    broadcast({
      type: "chat",
      user: message.user,
      text: message.text,
      timestamp: Date.now()
    });
  });`,
                },
                {
                    command: 'Chat Disconnect Handling',
                    description: 'Handle client disconnection in chat',
                    usage: 'Remove client from Set() and broadcast',
                    example: `  ws.on("close", () => {
    clients.delete(ws);
    broadcast({
      type: "system",
      message: "User left the chat",
      timestamp: Date.now()
    });
  });
});`,
                },
                {
                    command: 'Chat Broadcast Function',
                    description: 'Broadcast messages to all connected clients',
                    usage: 'Iterate through clients and send message',
                    example: `function broadcast(message) {
  const data = JSON.stringify(message);
  clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
}`,
                },
                {
                    command: 'Chat Client Setup',
                    description: 'Setup chat client with message handling',
                    usage: 'WebSocket client with DOM interaction',
                    example: `# Client - chat.html
const ws = new WebSocket("ws://localhost:8080");

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);
  displayMessage(message);
};`,
                },
                {
                    command: 'Chat Send Message',
                    description: 'Send chat message from client',
                    usage: 'Get input values and send JSON',
                    example: `function sendMessage() {
  const input = document.getElementById("messageInput");
  const user = document.getElementById("userInput").value;
  
  ws.send(JSON.stringify({
    type: "chat",
    user: user,
    text: input.value
  }));
  
  input.value = "";
}`,
                },
            ],
        },
        // INTERMEDIATE LEVEL
        {
            title: 'Socket.IO Basics',
            commands: [
                {
                    command: 'Socket.IO Server Setup',
                    description: 'Setup Socket.IO server with Express',
                    usage: 'const io = require("socket.io")(server);',
                    example: `const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});`,
                },
                {
                    command: 'Socket.IO Route Handler',
                    description: 'Add route handler to Express app',
                    usage: 'app.get("/", (req, res) => {...})',
                    example: `app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});`,
                },
                {
                    command: 'Socket.IO Connection Handler',
                    description: 'Handle Socket.IO connections',
                    usage: 'io.on("connection", (socket) => {...})',
                    example: `io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});`,
                },
                {
                    command: 'Socket.IO Server Start',
                    description: 'Start Socket.IO server',
                    usage: 'server.listen(3000, callback)',
                    example: `server.listen(3000, () => {
  console.log("Server running on port 3000");
});`,
                },
                {
                    command: 'Socket.IO Client Include',
                    description: 'Include Socket.IO client library',
                    usage: '<script src="/socket.io/socket.io.js"></script>',
                    example: `# Include Socket.IO client
<script src="/socket.io/socket.io.js"></script>`,
                },
                {
                    command: 'Socket.IO Client Connection',
                    description: 'Connect to Socket.IO server',
                    usage: 'const socket = io("http://localhost:3000");',
                    example: `# Connect to server
const socket = io("http://localhost:3000");`,
                },
                {
                    command: 'Socket.IO Client Events',
                    description: 'Handle Socket.IO client events',
                    usage: 'socket.on("connect", callback)',
                    example: `# Connection events
socket.on("connect", () => {
  console.log("Connected to server:", socket.id);
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
});

socket.on("connect_error", (error) => {
  console.error("Connection error:", error);
});`,
                },
                {
                    command: 'Socket.IO Custom Events',
                    description: 'Handle custom Socket.IO events',
                    usage: 'socket.on("message", callback)',
                    example: `# Custom events
socket.on("message", (data) => {
  console.log("Received message:", data);
});`,
                },
                {
                    command: 'Socket.IO Send Events',
                    description: 'Send events to Socket.IO server',
                    usage: 'socket.emit("event", data)',
                    example: `# Send events
socket.emit("message", "Hello Server!");
socket.emit("chat", { user: "John", text: "Hello!" });`,
                },
                {
                    command: 'Socket.IO Server Custom Events',
                    description: 'Handle custom events on server',
                    usage: 'socket.on("event", callback)',
                    example: `# Server events
io.on("connection", (socket) => {
  # Handle custom events
  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    socket.emit("joined-room", roomId);
  });`,
                },
                {
                    command: 'Socket.IO Send Message Event',
                    description: 'Handle send message event',
                    usage: 'socket.on("send-message", callback)',
                    example: `  socket.on("send-message", (data) => {
    io.to(data.room).emit("new-message", {
      user: data.user,
      message: data.message,
      timestamp: Date.now()
    });
  });`,
                },
                {
                    command: 'Socket.IO Typing Events',
                    description: 'Handle typing indicators',
                    usage: 'socket.to(room).emit()',
                    example: `  socket.on("typing", (data) => {
    socket.to(data.room).emit("user-typing", data.user);
  });
  
  socket.on("stop-typing", (data) => {
    socket.to(data.room).emit("user-stop-typing", data.user);
  });
});`,
                },
                {
                    command: 'Socket.IO Client Room Events',
                    description: 'Handle room events on client',
                    usage: 'socket.on("joined-room", callback)',
                    example: `# Client events
const socket = io("http://localhost:3000");

socket.on("joined-room", (roomId) => {
  console.log("Joined room:", roomId);
});

socket.on("new-message", (data) => {
  displayMessage(data);
});

socket.on("user-typing", (user) => {
  showTypingIndicator(user);
});`,
                },
                {
                    command: 'Socket.IO Client Send Functions',
                    description: 'Client functions to send events',
                    usage: 'socket.emit() functions',
                    example: `# Send events
function joinRoom(roomId) {
  socket.emit("join-room", roomId);
}

function sendMessage(room, user, message) {
  socket.emit("send-message", { room, user, message });
}`,
                },
                {
                    command: 'Socket.IO Join Room',
                    description: 'Join room and notify others',
                    usage: 'socket.join() and socket.to()',
                    example: `# Server - room management
io.on("connection", (socket) => {
  # Join room
  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    
    # Notify others in room
    socket.to(roomId).emit("user-joined", {
      userId: socket.id,
      message: "New user joined"
    });`,
                },
                {
                    command: 'Socket.IO Room Info',
                    description: 'Send room information to user',
                    usage: 'io.sockets.adapter.rooms.get()',
                    example: `    # Send room info to user
    const clients = io.sockets.adapter.rooms.get(roomId);
    socket.emit("room-info", {
      roomId,
      userCount: clients ? clients.size : 0
    });
  });`,
                },
                {
                    command: 'Socket.IO Leave Room',
                    description: 'Leave room and notify others',
                    usage: 'socket.leave() and notification',
                    example: `  # Leave room
  socket.on("leave-room", (roomId) => {
    socket.leave(roomId);
    socket.to(roomId).emit("user-left", {
      userId: socket.id,
      message: "User left"
    });
  });`,
                },
                {
                    command: 'Socket.IO Room Message',
                    description: 'Send message to specific room',
                    usage: 'io.to(roomId).emit()',
                    example: `  # Send to room
  socket.on("room-message", (data) => {
    io.to(data.roomId).emit("room-message", {
      userId: socket.id,
      message: data.message,
      timestamp: Date.now()
    });
  });`,
                },
                {
                    command: 'Socket.IO Get Rooms',
                    description: 'Get list of rooms for socket',
                    usage: 'socket.rooms and filtering',
                    example: `  # Get room list
  socket.on("get-rooms", () => {
    const rooms = Array.from(socket.rooms).filter(room => room !== socket.id);
    socket.emit("rooms-list", rooms);
  });
});`,
                },
            ],
        },
        {
            title: 'Advanced WebSocket Features',
            commands: [
                {
                    command: 'WebSocket Authentication Setup',
                    description: 'Setup WebSocket authentication with JWT',
                    usage: 'verifyClient option in WebSocket.Server',
                    example: `# WebSocket authentication
const jwt = require("jsonwebtoken");
const WebSocket = require("ws");

const wss = new WebSocket.Server({
  port: 8080,
  verifyClient: (info) => {
    const token = info.req.headers["sec-websocket-protocol"];
    
    if (!token) {
      return false;
    }
    
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      info.req.user = decoded;
      return true;
    } catch (err) {
      return false;
    }
  }
});`,
                },
                {
                    command: 'Authenticated WebSocket Handler',
                    description: 'Handle authenticated WebSocket connections',
                    usage: 'Access user from req object',
                    example: `wss.on("connection", (ws, req) => {
  const user = req.user;
  console.log(\`Authenticated user: \${user.id}\`);
  
  ws.on("message", (data) => {
    const message = JSON.parse(data);
    message.userId = user.id;
    broadcast(message);
  });
});`,
                },
                {
                    command: 'Socket.IO Authentication Middleware',
                    description: 'Setup Socket.IO authentication middleware',
                    usage: 'io.use() middleware function',
                    example: `# Socket.IO authentication
io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return next(new Error("Authentication error"));
    socket.user = decoded;
    next();
  });
});`,
                },
                {
                    command: 'Socket.IO Authenticated Connection',
                    description: 'Handle authenticated Socket.IO connections',
                    usage: 'Access socket.user in connection handler',
                    example: `io.on("connection", (socket) => {
  console.log(\`Authenticated: \${socket.user.id}\`);
});`,
                },
                {
                    command: 'WebSocket Server Error Handling',
                    description: 'Handle WebSocket server errors',
                    usage: 'ws.on("error", callback)',
                    example: `# Server error handling
wss.on("connection", (ws) => {
  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
    # Attempt graceful recovery
    try {
      ws.close(1011, "Internal server error");
    } catch (e) {
      console.error("Error closing connection:", e);
    }
  });`,
                },
                {
                    command: 'WebSocket Message Error Handling',
                    description: 'Handle message parsing errors',
                    usage: 'try-catch around JSON.parse',
                    example: `  ws.on("message", (data) => {
    try {
      const message = JSON.parse(data);
      processMessage(message);
    } catch (error) {
      console.error("Message parsing error:", error);
      ws.send(JSON.stringify({
        type: "error",
        message: "Invalid message format"
      }));
    }
  });
});`,
                },
                {
                    command: 'WebSocket Client Error Handling',
                    description: 'Handle client-side WebSocket errors',
                    usage: 'ws.onerror and reconnection logic',
                    example: `# Client error handling
const ws = new WebSocket("ws://localhost:8080");

ws.onerror = (error) => {
  console.error("WebSocket error:", error);
  # Implement reconnection
  setTimeout(() => {
    reconnect();
  }, 1000);
};`,
                },
                {
                    command: 'WebSocket Client Reconnection',
                    description: 'Implement client reconnection logic',
                    usage: 'Handle unexpected disconnections',
                    example: `ws.onclose = (event) => {
  if (event.code !== 1000) {
    console.log("Unexpected close, reconnecting...");
    reconnect();
  }
};

function reconnect() {
  const newWs = new WebSocket("ws://localhost:8080");
  # Copy event handlers
  newWs.onopen = ws.onopen;
  newWs.onmessage = ws.onmessage;
  newWs.onerror = ws.onerror;
  newWs.onclose = ws.onclose;
  ws = newWs;
}`,
                },
                {
                    command: 'Redis Message Storage',
                    description: 'Store messages for offline users with Redis',
                    usage: 'Redis LPUSH and LREMRANGE',
                    example: `# Message queuing with Redis
const redis = require("redis");
const client = redis.createClient();

# Store message for offline user
async function storeMessage(userId, message) {
  const key = \`messages:\${userId}\`;
  await client.lpush(key, JSON.stringify(message));
  await client.expire(key, 86400); # 24 hours
}`,
                },
                {
                    command: 'Send Queued Messages',
                    description: 'Send queued messages to reconnected user',
                    usage: 'LRANGE and DEL Redis commands',
                    example: `# Send queued messages on connection
async function sendQueuedMessages(socket, userId) {
  const key = \`messages:\${userId}\`;
  const messages = await client.lrange(key, 0, -1);
  
  messages.forEach(message => {
    socket.send(message);
  });
  
  await client.del(key);
}`,
                },
                {
                    command: 'WebSocket Message Queue Logic',
                    description: 'Handle online/offline message routing',
                    usage: 'Check online users and queue if offline',
                    example: `# Server implementation
wss.on("connection", (ws, req) => {
  const userId = getUserIdFromRequest(req);
  
  # Send queued messages
  sendQueuedMessages(ws, userId);
  
  # Handle new messages
  ws.on("message", async (data) => {
    const message = JSON.parse(data);
    
    # Send to online users
    const onlineUsers = getOnlineUsers(message.recipientId);
    
    if (onlineUsers.length > 0) {
      onlineUsers.forEach(socket => {
        socket.send(JSON.stringify(message));
      });
    } else {
      # Queue for offline user
      await storeMessage(message.recipientId, message);
    }
  });
});`,
                },
                {
                    command: 'Send File Metadata',
                    description: 'Send file metadata before binary data',
                    usage: 'JSON metadata with file info',
                    example: `# Send binary data
const ws = new WebSocket("ws://localhost:8080");

# Send file
function sendFile(file) {
  const reader = new FileReader();
  
  reader.onload = (event) => {
    const arrayBuffer = event.target.result;
    
    # Send file metadata first
    ws.send(JSON.stringify({
      type: "file-start",
      name: file.name,
      size: file.size,
      type: file.type
    }));`,
                },
                {
                    command: 'Send File Chunks',
                    description: 'Send file data in chunks',
                    usage: 'ArrayBuffer.slice() and setTimeout',
                    example: `    # Send file data in chunks
    const chunkSize = 8192;
    let offset = 0;
    
    function sendChunk() {
      if (offset < arrayBuffer.byteLength) {
        const chunk = arrayBuffer.slice(offset, offset + chunkSize);
        ws.send(chunk);
        offset += chunkSize;
        
        setTimeout(sendChunk, 10); # Small delay to prevent blocking
      } else {
        # File sent
        ws.send(JSON.stringify({ type: "file-end" }));
      }
    }
    
    sendChunk();
  };
  
  reader.readAsArrayBuffer(file);
}`,
                },
                {
                    command: 'Receive Binary Data',
                    description: 'Handle incoming binary data and file chunks',
                    usage: 'ArrayBuffer detection and Blob creation',
                    example: `# Receive binary data
let currentFile = null;
let fileData = [];

ws.onmessage = (event) => {
  if (event.data instanceof ArrayBuffer) {
    # Binary chunk received
    fileData.push(new Uint8Array(event.data));
  } else {
    # JSON message
    const data = JSON.parse(event.data);
    
    switch(data.type) {
      case "file-start":
        currentFile = data;
        fileData = [];
        break;
        
      case "file-end":
        # Reassemble file
        const blob = new Blob(fileData, { type: currentFile.type });
        downloadFile(blob, currentFile.name);
        break;
    }
  }
};`,
                },
            ],
        },
        // Continue with more sections...
    ],
};
