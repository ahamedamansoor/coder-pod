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
                    command: 'Install WebSocket Libraries',
                    description: 'Install WebSocket packages',
                    usage: 'npm install ws socket.io',
                    example: '# Native WebSockets\nnpm install ws\n\n# Socket.IO\nnpm install socket.io\n\n# With TypeScript\nnpm install ws socket.io @types/ws @types/socket.io\n\n# For React clients\nnpm install socket.io-client',
                },
                {
                    command: 'Basic WebSocket Server',
                    description: 'Create basic WebSocket server',
                    usage: 'const WebSocket = require("ws");\nconst wss = new WebSocket.Server({ port: 8080 });',
                    example: 'const WebSocket = require("ws");\n\nconst wss = new WebSocket.Server({ port: 8080 });\n\nwss.on("connection", (ws) => {\n  console.log("Client connected");\n  \n  ws.on("message", (message) => {\n    console.log("Received:", message);\n    ws.send(`Echo: ${message}`);\n  });\n  \n  ws.on("close", () => {\n    console.log("Client disconnected");\n  });\n});\n\nconsole.log("WebSocket server running on ws://localhost:8080");',
                },
                {
                    command: 'Basic WebSocket Client',
                    description: 'Create WebSocket client connection',
                    usage: 'const ws = new WebSocket("ws://localhost:8080");',
                    example: '# Browser client\nconst ws = new WebSocket("ws://localhost:8080");\n\nws.onopen = () => {\n  console.log("Connected to server");\n  ws.send("Hello Server!");\n};\n\nws.onmessage = (event) => {\n  console.log("Received:", event.data);\n};\n\nws.onclose = () => {\n  console.log("Disconnected from server");\n};\n\n# Node.js client\nconst WebSocket = require("ws");\nconst ws = new WebSocket("ws://localhost:8080");\n\nws.on("open", () => {\n  ws.send("Hello from Node.js client");\n});',
                },
                {
                    command: 'WebSocket with Express',
                    description: 'Integrate WebSockets with Express',
                    usage: 'const server = http.createServer(app);\nconst wss = new WebSocket.Server({ server });',
                    example: 'const express = require("express");\nconst http = require("http");\nconst WebSocket = require("ws");\n\nconst app = express();\nconst server = http.createServer(app);\nconst wss = new WebSocket.Server({ server });\n\napp.get("/", (req, res) => {\n  res.send("HTTP server running");\n});\n\nwss.on("connection", (ws) => {\n  ws.on("message", (message) => {\n    wss.clients.forEach((client) => {\n      if (client !== ws && client.readyState === WebSocket.OPEN) {\n        client.send(message);\n      }\n    });\n  });\n});\n\nserver.listen(3000, () => {\n  console.log("Server running on port 3000");\n});',
                },
            ],
        },
        {
            title: 'WebSocket Basics',
            commands: [
                {
                    command: 'WebSocket Events',
                    description: 'Handle WebSocket lifecycle events',
                    usage: 'ws.on("open", handler), ws.on("message", handler), ws.on("close", handler)',
                    example: 'const ws = new WebSocket("ws://localhost:8080");\n\n# Connection events\nws.onopen = (event) => {\n  console.log("Connection opened:", event);\n};\n\nws.onclose = (event) => {\n  console.log("Connection closed:", event.code, event.reason);\n};\n\nws.onerror = (error) => {\n  console.error("WebSocket error:", error);\n};\n\n# Message events\nws.onmessage = (event) => {\n  const data = JSON.parse(event.data);\n  console.log("Message received:", data);\n  \n  # Handle different message types\n  switch(data.type) {\n    case "chat":\n      displayChatMessage(data.payload);\n      break;\n    case "notification":\n      showNotification(data.payload);\n      break;\n  }\n};',
                },
                {
                    command: 'Send Messages',
                    description: 'Send different types of messages',
                    usage: 'ws.send(data), ws.send(JSON.stringify(object))',
                    example: '# Send text message\nws.send("Hello World!");\n\n# Send JSON data\nconst message = {\n  type: "chat",\n  user: "John",\n  text: "Hello everyone!",\n  timestamp: Date.now()\n};\nws.send(JSON.stringify(message));\n\n# Send binary data\nconst buffer = Buffer.from("Binary message");\nws.send(buffer);\n\n# Send array buffer\nconst arrayBuffer = new ArrayBuffer(8);\nws.send(arrayBuffer);\n\n# Send blob (browser)\nconst blob = new Blob(["Hello"], { type: "text/plain" });\nws.send(blob);',
                },
                {
                    command: 'WebSocket States',
                    description: 'Check WebSocket connection states',
                    usage: 'ws.readyState, WebSocket.CONNECTING, WebSocket.OPEN',
                    example: '# WebSocket ready states\nconst WebSocket = require("ws");\n\n# Check connection state\nfunction getConnectionState(ws) {\n  switch(ws.readyState) {\n    case WebSocket.CONNECTING:\n      return "Connecting...";\n    case WebSocket.OPEN:\n      return "Connected";\n    case WebSocket.CLOSING:\n      return "Closing...";\n    case WebSocket.CLOSED:\n      return "Closed";\n    default:\n      return "Unknown";\n  }\n}\n\n# Safe message sending\nfunction safeSend(ws, message) {\n  if (ws.readyState === WebSocket.OPEN) {\n    ws.send(message);\n  } else {\n    console.error("WebSocket is not open");\n  }\n}\n\n# Wait for connection\nfunction waitForConnection(ws, callback) {\n  if (ws.readyState === WebSocket.OPEN) {\n    callback();\n  } else {\n    ws.onopen = callback;\n  }\n}',
                },
                {
                    command: 'Simple Chat Application',
                    description: 'Build a basic real-time chat',
                    usage: 'Broadcast messages to all connected clients',
                    example: '# Server - chat.js\nconst WebSocket = require("ws");\nconst wss = new WebSocket.Server({ port: 8080 });\n\nconst clients = new Set();\n\nwss.on("connection", (ws) => {\n  clients.add(ws);\n  \n  # Broadcast new user joined\n  broadcast({\n    type: "system",\n    message: "New user joined the chat",\n    timestamp: Date.now()\n  });\n  \n  ws.on("message", (data) => {\n    const message = JSON.parse(data);\n    broadcast({\n      type: "chat",\n      user: message.user,\n      text: message.text,\n      timestamp: Date.now()\n    });\n  });\n  \n  ws.on("close", () => {\n    clients.delete(ws);\n    broadcast({\n      type: "system",\n      message: "User left the chat",\n      timestamp: Date.now()\n    });\n  });\n});\n\nfunction broadcast(message) {\n  const data = JSON.stringify(message);\n  clients.forEach(client => {\n    if (client.readyState === WebSocket.OPEN) {\n      client.send(data);\n    }\n  });\n}\n\n# Client - chat.html\nconst ws = new WebSocket("ws://localhost:8080");\n\nws.onmessage = (event) => {\n  const message = JSON.parse(event.data);\n  displayMessage(message);\n};\n\nfunction sendMessage() {\n  const input = document.getElementById("messageInput");\n  const user = document.getElementById("userInput").value;\n  \n  ws.send(JSON.stringify({\n    type: "chat",\n    user: user,\n    text: input.value\n  }));\n  \n  input.value = "";\n}',
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
                    example: 'const express = require("express");\nconst http = require("http");\nconst socketIo = require("socket.io");\n\nconst app = express();\nconst server = http.createServer(app);\nconst io = socketIo(server, {\n  cors: {\n    origin: "http://localhost:3000",\n    methods: ["GET", "POST"]\n  }\n});\n\napp.get("/", (req, res) => {\n  res.sendFile(__dirname + "/index.html");\n});\n\nio.on("connection", (socket) => {\n  console.log("User connected:", socket.id);\n  \n  socket.on("disconnect", () => {\n    console.log("User disconnected:", socket.id);\n  });\n});\n\nserver.listen(3000, () => {\n  console.log("Server running on port 3000");\n});',
                },
                {
                    command: 'Socket.IO Client Setup',
                    description: 'Connect to Socket.IO server',
                    usage: 'const socket = io("http://localhost:3000");',
                    example: '# Include Socket.IO client\n<script src="/socket.io/socket.io.js"></script>\n\n# Connect to server\nconst socket = io("http://localhost:3000");\n\n# Connection events\nsocket.on("connect", () => {\n  console.log("Connected to server:", socket.id);\n});\n\nsocket.on("disconnect", () => {\n  console.log("Disconnected from server");\n});\n\nsocket.on("connect_error", (error) => {\n  console.error("Connection error:", error);\n});\n\n# Custom events\nsocket.on("message", (data) => {\n  console.log("Received message:", data);\n});\n\n# Send events\nsocket.emit("message", "Hello Server!");\nsocket.emit("chat", { user: "John", text: "Hello!" });',
                },
                {
                    command: 'Socket.IO Events',
                    description: 'Handle custom Socket.IO events',
                    usage: 'socket.emit("event", data), socket.on("event", callback)',
                    example: '# Server events\nio.on("connection", (socket) => {\n  # Handle custom events\n  socket.on("join-room", (roomId) => {\n    socket.join(roomId);\n    socket.emit("joined-room", roomId);\n  });\n  \n  socket.on("send-message", (data) => {\n    io.to(data.room).emit("new-message", {\n      user: data.user,\n      message: data.message,\n      timestamp: Date.now()\n    });\n  });\n  \n  socket.on("typing", (data) => {\n    socket.to(data.room).emit("user-typing", data.user);\n  });\n  \n  socket.on("stop-typing", (data) => {\n    socket.to(data.room).emit("user-stop-typing", data.user);\n  });\n});\n\n# Client events\nconst socket = io("http://localhost:3000");\n\nsocket.on("joined-room", (roomId) => {\n  console.log("Joined room:", roomId);\n});\n\nsocket.on("new-message", (data) => {\n  displayMessage(data);\n});\n\nsocket.on("user-typing", (user) => {\n  showTypingIndicator(user);\n});\n\n# Send events\nfunction joinRoom(roomId) {\n  socket.emit("join-room", roomId);\n}\n\nfunction sendMessage(room, user, message) {\n  socket.emit("send-message", { room, user, message });\n}',
                },
                {
                    command: 'Socket.IO Rooms',
                    description: 'Manage rooms for group communication',
                    usage: 'socket.join(room), socket.leave(room), io.to(room).emit()',
                    example: '# Server - room management\nio.on("connection", (socket) => {\n  # Join room\n  socket.on("join-room", (roomId) => {\n    socket.join(roomId);\n    \n    # Notify others in room\n    socket.to(roomId).emit("user-joined", {\n      userId: socket.id,\n      message: "New user joined"\n    });\n    \n    # Send room info to user\n    const clients = io.sockets.adapter.rooms.get(roomId);\n    socket.emit("room-info", {\n      roomId,\n      userCount: clients ? clients.size : 0\n    });\n  });\n  \n  # Leave room\n  socket.on("leave-room", (roomId) => {\n    socket.leave(roomId);\n    socket.to(roomId).emit("user-left", {\n      userId: socket.id,\n      message: "User left"\n    });\n  });\n  \n  # Send to room\n  socket.on("room-message", (data) => {\n    io.to(data.roomId).emit("room-message", {\n      userId: socket.id,\n      message: data.message,\n      timestamp: Date.now()\n    });\n  });\n  \n  # Get room list\n  socket.on("get-rooms", () => {\n    const rooms = Array.from(socket.rooms).filter(room => room !== socket.id);\n    socket.emit("rooms-list", rooms);\n  });\n});',
                },
            ],
        },
        {
            title: 'Advanced WebSocket Features',
            commands: [
                {
                    command: 'Authentication',
                    description: 'Authenticate WebSocket connections',
                    usage: 'JWT tokens, middleware, socket handshake',
                    example: '# WebSocket authentication\nconst jwt = require("jsonwebtoken");\nconst WebSocket = require("ws");\n\nconst wss = new WebSocket.Server({\n  port: 8080,\n  verifyClient: (info) => {\n    const token = info.req.headers["sec-websocket-protocol"];\n    \n    if (!token) {\n      return false;\n    }\n    \n    try {\n      const decoded = jwt.verify(token, process.env.JWT_SECRET);\n      info.req.user = decoded;\n      return true;\n    } catch (err) {\n      return false;\n    }\n  }\n});\n\nwss.on("connection", (ws, req) => {\n  const user = req.user;\n  console.log(`Authenticated user: ${user.id}`);\n  \n  ws.on("message", (data) => {\n    const message = JSON.parse(data);\n    message.userId = user.id;\n    broadcast(message);\n  });\n});\n\n# Socket.IO authentication\nio.use((socket, next) => {\n  const token = socket.handshake.auth.token;\n  \n  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {\n    if (err) return next(new Error("Authentication error"));\n    socket.user = decoded;\n    next();\n  });\n});\n\nio.on("connection", (socket) => {\n  console.log(`Authenticated: ${socket.user.id}`);\n});',
                },
                {
                    command: 'Error Handling',
                    description: 'Handle WebSocket errors gracefully',
                    usage: 'try-catch, error events, reconnection logic',
                    example: '# Server error handling\nwss.on("connection", (ws) => {\n  ws.on("error", (error) => {\n    console.error("WebSocket error:", error);\n    # Attempt graceful recovery\n    try {\n      ws.close(1011, "Internal server error");\n    } catch (e) {\n      console.error("Error closing connection:", e);\n    }\n  });\n  \n  ws.on("message", (data) => {\n    try {\n      const message = JSON.parse(data);\n      processMessage(message);\n    } catch (error) {\n      console.error("Message parsing error:", error);\n      ws.send(JSON.stringify({\n        type: "error",\n        message: "Invalid message format"\n      }));\n    }\n  });\n});\n\n# Client error handling\nconst ws = new WebSocket("ws://localhost:8080");\n\nws.onerror = (error) => {\n  console.error("WebSocket error:", error);\n  # Implement reconnection\n  setTimeout(() => {\n    reconnect();\n  }, 1000);\n};\n\nws.onclose = (event) => {\n  if (event.code !== 1000) {\n    console.log("Unexpected close, reconnecting...");\n    reconnect();\n  }\n};\n\nfunction reconnect() {\n  const newWs = new WebSocket("ws://localhost:8080");\n  # Copy event handlers\n  newWs.onopen = ws.onopen;\n  newWs.onmessage = ws.onmessage;\n  newWs.onerror = ws.onerror;\n  newWs.onclose = ws.onclose;\n  ws = newWs;\n}',
                },
                {
                    command: 'Message Queuing',
                    description: 'Queue messages for offline clients',
                    usage: 'Redis, database, in-memory storage',
                    example: '# Message queuing with Redis\nconst redis = require("redis");\nconst client = redis.createClient();\n\n# Store message for offline user\nasync function storeMessage(userId, message) {\n  const key = `messages:${userId}`;\n  await client.lpush(key, JSON.stringify(message));\n  await client.expire(key, 86400); # 24 hours\n}\n\n# Send queued messages on connection\nasync function sendQueuedMessages(socket, userId) {\n  const key = `messages:${userId}`;\n  const messages = await client.lrange(key, 0, -1);\n  \n  messages.forEach(message => {\n    socket.send(message);\n  });\n  \n  await client.del(key);\n}\n\n# Server implementation\nwss.on("connection", (ws, req) => {\n  const userId = getUserIdFromRequest(req);\n  \n  # Send queued messages\n  sendQueuedMessages(ws, userId);\n  \n  # Handle new messages\n  ws.on("message", async (data) => {\n    const message = JSON.parse(data);\n    \n    # Send to online users\n    const onlineUsers = getOnlineUsers(message.recipientId);\n    \n    if (onlineUsers.length > 0) {\n      onlineUsers.forEach(socket => {\n        socket.send(JSON.stringify(message));\n      });\n    } else {\n      # Queue for offline user\n      await storeMessage(message.recipientId, message);\n    }\n  });\n});',
                },
                {
                    command: 'Binary Data Handling',
                    description: 'Handle binary data efficiently',
                    usage: 'Blob, ArrayBuffer, streams',
                    example: '# Send binary data\nconst ws = new WebSocket("ws://localhost:8080");\n\n# Send file\nfunction sendFile(file) {\n  const reader = new FileReader();\n  \n  reader.onload = (event) => {\n    const arrayBuffer = event.target.result;\n    \n    # Send file metadata first\n    ws.send(JSON.stringify({\n      type: "file-start",\n      name: file.name,\n      size: file.size,\n      type: file.type\n    }));\n    \n    # Send file data in chunks\n    const chunkSize = 8192;\n    let offset = 0;\n    \n    function sendChunk() {\n      if (offset < arrayBuffer.byteLength) {\n        const chunk = arrayBuffer.slice(offset, offset + chunkSize);\n        ws.send(chunk);\n        offset += chunkSize;\n        \n        setTimeout(sendChunk, 10); # Small delay to prevent blocking\n      } else {\n        # File sent\n        ws.send(JSON.stringify({ type: "file-end" }));\n      }\n    }\n    \n    sendChunk();\n  };\n  \n  reader.readAsArrayBuffer(file);\n}\n\n# Receive binary data\nlet currentFile = null;\nlet fileData = [];\n\nws.onmessage = (event) => {\n  if (event.data instanceof ArrayBuffer) {\n    # Binary chunk received\n    fileData.push(new Uint8Array(event.data));\n  } else {\n    # JSON message\n    const data = JSON.parse(event.data);\n    \n    switch(data.type) {\n      case "file-start":\n        currentFile = data;\n        fileData = [];\n        break;\n        \n      case "file-end":\n        # Reassemble file\n        const blob = new Blob(fileData, { type: currentFile.type });\n        downloadFile(blob, currentFile.name);\n        break;\n    }\n  }\n};',
                },
            ],
        },
        // ADVANCED LEVEL
        {
            title: 'Scaling WebSockets',
            commands: [
                {
                    command: 'Redis Adapter',
                    description: 'Scale Socket.IO with Redis adapter',
                    usage: 'const redisAdapter = require("socket.io-redis");',
                    example: 'const socketIo = require("socket.io");\nconst redisAdapter = require("socket.io-redis");\n\nconst io = socketIo(server, {\n  adapter: redisAdapter({ host: "localhost", port: 6379 })\n});\n\n# Multiple server instances\n# Server 1\nconst io1 = socketIo(server1, {\n  adapter: redisAdapter({ host: "localhost", port: 6379 })\n});\n\n# Server 2\nconst io2 = socketIo(server2, {\n  adapter: redisAdapter({ host: "localhost", port: 6379 })\n});\n\n# Messages are now shared across servers\nio1.on("connection", (socket) => {\n  socket.on("message", (data) => {\n    # This will be broadcast to clients on both servers\n    io1.emit("broadcast", data);\n  });\n});',
                },
                {
                    command: 'Load Balancing',
                    description: 'Load balance WebSocket connections',
                    usage: 'NGINX, HAProxy, sticky sessions',
                    example: '# NGINX configuration for WebSockets\nupstream websocket {\n    ip_hash; # Sticky sessions for Socket.IO\n    server 127.0.0.1:3000;\n    server 127.0.0.1:3001;\n    server 127.0.0.1:3002;\n}\n\nserver {\n    listen 80;\n    \n    location / {\n        proxy_pass http://websocket;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_read_timeout 86400;\n    }\n    \n    # Socket.IO specific\n    location /socket.io/ {\n        proxy_pass http://websocket;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_set_header Host $host;\n        proxy_cache_bypass $http_upgrade;\n    }\n}\n\n# HAProxy configuration\nfrontend websocket_frontend\n    bind *:80\n    default_backend websocket_backend\n    \nbackend websocket_backend\n    balance roundrobin\n    stick-table type string len 32 size 100k expire 30m\n    stick on req.cook(sessionid)\n    \n    server ws1 127.0.0.1:3000 check\n    server ws2 127.0.0.1:3001 check\n    server ws3 127.0.0.1:3002 check',
                },
                {
                    command: 'Horizontal Scaling',
                    description: 'Scale WebSocket servers horizontally',
                    usage: 'Docker, Kubernetes, service discovery',
                    example: '# Docker Compose for WebSocket scaling\nversion: "3.8"\nservices:\n  redis:\n    image: redis:alpine\n    ports:\n      - "6379:6379"\n      \n  ws-server-1:\n    build: .\n    environment:\n      - REDIS_URL=redis://redis:6379\n      - SERVER_ID=server-1\n    ports:\n      - "3001:3000"\n    depends_on:\n      - redis\n      \n  ws-server-2:\n    build: .\n    environment:\n      - REDIS_URL=redis://redis:6379\n      - SERVER_ID=server-2\n    ports:\n      - "3002:3000"\n    depends_on:\n      - redis\n      \n  nginx:\n    image: nginx:alpine\n    ports:\n      - "80:80"\n    volumes:\n      - ./nginx.conf:/etc/nginx/nginx.conf\n    depends_on:\n      - ws-server-1\n      - ws-server-2\n\n# Kubernetes deployment\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: websocket-server\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: websocket-server\n  template:\n    metadata:\n      labels:\n        app: websocket-server\n    spec:\n      containers:\n      - name: websocket-server\n        image: websocket-app:latest\n        ports:\n        - containerPort: 3000\n        env:\n        - name: REDIS_URL\n          value: "redis://redis-service:6379"',
                },
                {
                    command: 'Performance Monitoring',
                    description: 'Monitor WebSocket performance',
                    usage: 'Metrics, logging, health checks',
                    example: '# Performance metrics\nconst prometheus = require("prom-client");\n\n# Create metrics\nconst connectedClients = new prometheus.Gauge({\n  name: "websocket_connected_clients",\n  help: "Number of connected WebSocket clients"\n});\n\nconst messagesReceived = new prometheus.Counter({\n  name: "websocket_messages_received_total",\n  help: "Total number of messages received"\n});\n\nconst messagesSent = new prometheus.Counter({\n  name: "websocket_messages_sent_total",\n  help: "Total number of messages sent"\n});\n\n# Track metrics\nwss.on("connection", (ws) => {\n  connectedClients.inc();\n  \n  ws.on("message", (data) => {\n    messagesReceived.inc();\n    # Process message\n  });\n  \n  ws.on("close", () => {\n    connectedClients.dec();\n  });\n});\n\n# Health check endpoint\napp.get("/health", (req, res) => {\n  const uptime = process.uptime();\n  const memory = process.memoryUsage();\n  \n  res.json({\n    status: "healthy",\n    uptime,\n    memory,\n    connectedClients: wss.clients.size,\n    timestamp: new Date().toISOString()\n  });\n});\n\n# Metrics endpoint\napp.get("/metrics", async (req, res) => {\n  res.set("Content-Type", prometheus.register.contentType);\n  res.end(await prometheus.register.metrics());\n});',
                },
            ],
        },
        {
            title: 'Advanced Socket.IO Features',
            commands: [
                {
                    command: 'Socket.IO Middleware',
                    description: 'Use middleware for authentication and validation',
                    usage: 'io.use((socket, next) => { ... })',
                    example: '# Authentication middleware\nio.use(async (socket, next) => {\n  try {\n    const token = socket.handshake.auth.token;\n    const user = await verifyToken(token);\n    socket.user = user;\n    next();\n  } catch (error) {\n    next(new Error("Authentication failed"));\n  }\n});\n\n# Rate limiting middleware\nconst rateLimit = new Map();\n\nio.use((socket, next) => {\n  const clientId = socket.handshake.address;\n  const now = Date.now();\n  const windowStart = now - 60000; # 1 minute window\n  \n  # Clean old entries\n  for (const [id, requests] of rateLimit.entries()) {\n    rateLimit.set(id, requests.filter(time => time > windowStart));\n    if (rateLimit.get(id).length === 0) {\n      rateLimit.delete(id);\n    }\n  }\n  \n  # Check rate limit\n  const requests = rateLimit.get(clientId) || [];\n  if (requests.length >= 100) {\n    return next(new Error("Rate limit exceeded"));\n  }\n  \n  requests.push(now);\n  rateLimit.set(clientId, requests);\n  next();\n});\n\n# Logging middleware\nio.use((socket, next) => {\n  console.log(`[${new Date().toISOString()}] Connection attempt from ${socket.handshake.address}`);\n  next();\n});',
                },
                {
                    command: 'Dynamic Namespaces',
                    description: 'Create dynamic Socket.IO namespaces',
                    usage: 'io.of(/^\\/dynamic-\\w+$/)',
                    example: '# Dynamic namespace for organizations\nio.of(/^\\/org-\\w+$/).on("connection", (socket) => {\n  const namespace = socket.nsp;\n  const orgId = namespace.name.replace("/org-", "");\n  \n  console.log(`User connected to organization: ${orgId}`);\n  \n  # Join organization room\n  socket.join(orgId);\n  \n  # Handle organization-specific events\n  socket.on("org-message", (data) => {\n    namespace.to(orgId).emit("org-broadcast", {\n      ...data,\n      orgId,\n      timestamp: Date.now()\n    });\n  });\n});\n\n# User-specific namespace\nio.of(/^\\/user-\\w+$/).on("connection", (socket) => {\n  const userId = socket.nsp.name.replace("/user-", "");\n  \n  # Verify user has permission for this namespace\n  if (socket.user.id !== userId) {\n    socket.disconnect();\n    return;\n  }\n  \n  console.log(`User ${userId} connected to personal namespace`);\n  \n  # Handle personal notifications\n  socket.on("mark-read", (notificationId) => {\n    markNotificationAsRead(userId, notificationId);\n  });\n});\n\n# Client connection to dynamic namespace\nconst socket = io("/org-12345"); # Connect to organization namespace\nconst personalSocket = io("/user-67890"); # Connect to user namespace',
                },
                {
                    command: 'Socket.IO Cluster',
                    description: 'Setup Socket.IO with cluster module',
                    usage: 'const cluster = require("cluster");',
                    example: 'const cluster = require("cluster");\nconst numCPUs = require("os").cpus().length;\n\nif (cluster.isMaster) {\n  console.log(`Master ${process.pid} is running`);\n  \n  # Fork workers\n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n  \n  cluster.on("exit", (worker, code, signal) => {\n    console.log(`Worker ${worker.process.pid} died`);\n    cluster.fork(); # Restart worker\n  });\n} else {\n  # Worker process\n  const express = require("express");\n  const http = require("http");\n  const socketIo = require("socket.io");\n  const redisAdapter = require("socket.io-redis");\n  \n  const app = express();\n  const server = http.createServer(app);\n  const io = socketIo(server, {\n    adapter: redisAdapter({ host: "localhost", port: 6379 })\n  });\n  \n  io.on("connection", (socket) => {\n    console.log(`Worker ${process.pid}: User connected`);\n    \n    socket.on("message", (data) => {\n      io.emit("broadcast", data);\n    });\n  });\n  \n  server.listen(3000, () => {\n    console.log(`Worker ${process.pid} listening on port 3000`);\n  });\n}',
                },
                {
                    command: 'Socket.IO v4 Features',
                    description: 'Use latest Socket.IO v4 features',
                    usage: 'Acknowledgements, volatile events, binary support',
                    example: '# Event acknowledgements\n# Server\nio.on("connection", (socket) => {\n  socket.on("update-profile", (data, callback) => {\n    # Process update\n    updateProfile(data)\n      .then(result => {\n        callback({ success: true, data: result });\n      })\n      .catch(error => {\n        callback({ success: false, error: error.message });\n      });\n  });\n});\n\n# Client\nsocket.emit("update-profile", profileData, (response) => {\n  if (response.success) {\n    console.log("Profile updated:", response.data);\n  } else {\n    console.error("Update failed:", response.error);\n  }\n});\n\n# Volatile events (not sent if client is disconnected)\nsocket.volatile.emit("typing-indicator", { user: "John" });\n\n# Binary events\nsocket.emit("file-upload", fileBuffer);\n\n# Server-side binary handling\nsocket.on("file-upload", (buffer, callback) => {\n  # Process binary data\n  processFile(buffer)\n    .then(result => callback({ success: true, result }))\n    .catch(error => callback({ success: false, error }));\n});\n\n# Broadcast with acknowledgements\nio.timeout(1000).emit("ping", (err, responses) => {\n  if (err) {\n    console.log("Some clients did not acknowledge");\n  } else {\n    console.log("Received acknowledgements:", responses);\n  }\n});',
                },
            ],
        },
        // EXPERT LEVEL
        {
            title: 'WebSocket Security',
            commands: [
                {
                    command: 'WSS (Secure WebSockets)',
                    description: 'Setup secure WebSocket connections',
                    usage: 'wss:// protocol, SSL certificates',
                    example: '# HTTPS + WSS server\nconst https = require("https");\nconst fs = require("fs");\n\nconst options = {\n  key: fs.readFileSync("server.key"),\n  cert: fs.readFileSync("server.cert")\n};\n\nconst httpsServer = https.createServer(options, app);\nconst wss = new WebSocket.Server({ server: httpsServer });\n\nhttpsServer.listen(443, () => {\n  console.log("Secure server running on port 443");\n});\n\n# Client connection to secure WebSocket\nconst wss = new WebSocket("wss://yourdomain.com:443");\n\n# Socket.IO with HTTPS\nconst io = socketIo(httpsServer, {\n  cors: {\n    origin: "https://yourdomain.com",\n    methods: ["GET", "POST"]\n  }\n});\n\n# Force HTTPS redirect\napp.use((req, res, next) => {\n  if (req.header("x-forwarded-proto") !== "https") {\n    res.redirect(`https://${req.header("host")}${req.url}`);\n  } else {\n    next();\n  }\n});',
                },
                {
                    command: 'Rate Limiting',
                    description: 'Implement rate limiting for WebSocket connections',
                    usage: 'Connection limits, message throttling',
                    example: '# Connection rate limiting\nconst connectionLimiter = new Map();\nconst MAX_CONNECTIONS_PER_IP = 5;\nconst CONNECTION_WINDOW = 60000; # 1 minute\n\nfunction checkConnectionLimit(ip) {\n  const now = Date.now();\n  const connections = connectionLimiter.get(ip) || [];\n  \n  # Clean old connections\n  const validConnections = connections.filter(time => now - time < CONNECTION_WINDOW);\n  \n  if (validConnections.length >= MAX_CONNECTIONS_PER_IP) {\n    return false;\n  }\n  \n  validConnections.push(now);\n  connectionLimiter.set(ip, validConnections);\n  return true;\n}\n\nwss.on("connection", (ws, req) => {\n  const ip = req.socket.remoteAddress;\n  \n  if (!checkConnectionLimit(ip)) {\n    ws.close(1008, "Rate limit exceeded");\n    return;\n  }\n  \n  # Message rate limiting\n  const messageLimiter = new Map();\n  const MAX_MESSAGES_PER_SECOND = 10;\n  \n  ws.on("message", (data) => {\n    const now = Date.now();\n    const messages = messageLimiter.get(ws) || [];\n    const recentMessages = messages.filter(time => now - time < 1000);\n    \n    if (recentMessages.length >= MAX_MESSAGES_PER_SECOND) {\n      ws.send(JSON.stringify({ error: "Rate limit exceeded" }));\n      return;\n    }\n    \n    recentMessages.push(now);\n    messageLimiter.set(ws, recentMessages);\n    \n    # Process message\n    processMessage(data);\n  });\n});',
                },
                {
                    command: 'Input Validation',
                    description: 'Validate WebSocket message content',
                    usage: 'Schema validation, sanitization',
                    example: '# Message validation with Joi\nconst Joi = require("joi");\n\n# Define message schemas\nconst messageSchemas = {\n  chat: Joi.object({\n    type: Joi.string().valid("chat").required(),\n    room: Joi.string().required(),\n    message: Joi.string().max(500).required(),\n    user: Joi.string().required()\n  }),\n  \n  join_room: Joi.object({\n    type: Joi.string().valid("join_room").required(),\n    room: Joi.string().required()\n  }),\n  \n  private_message: Joi.object({\n    type: Joi.string().valid("private_message").required(),\n    recipient: Joi.string().required(),\n    message: Joi.string().max(500).required()\n  })\n};\n\n# Validate messages\nfunction validateMessage(message) {\n  const schema = messageSchemas[message.type];\n  \n  if (!schema) {\n    throw new Error("Unknown message type");\n  }\n  \n  const { error } = schema.validate(message);\n  \n  if (error) {\n    throw new Error(`Validation error: ${error.details[0].message}`);\n  }\n  \n  return true;\n}\n\n# Server implementation\nwss.on("connection", (ws) => {\n  ws.on("message", (data) => {\n    try {\n      const message = JSON.parse(data);\n      validateMessage(message);\n      \n      # Sanitize message content\n      if (message.message) {\n        message.message = sanitizeHtml(message.message);\n      }\n      \n      # Process valid message\n      handleMessage(message, ws);\n      \n    } catch (error) {\n      ws.send(JSON.stringify({\n        type: "error",\n        message: error.message\n      }));\n    }\n  });\n});',
                },
                {
                    command: 'DDoS Protection',
                    description: 'Protect against WebSocket DDoS attacks',
                    usage: 'Connection limits, IP blocking, monitoring',
                    example: '# DDoS protection middleware\nconst DDoSProtection = {\n  connections: new Map(),\n  blockedIPs: new Set(),\n  \n  isBlocked(ip) {\n    return this.blockedIPs.has(ip);\n  },\n  \n  blockIP(ip, duration = 3600000) { # 1 hour\n    this.blockedIPs.add(ip);\n    setTimeout(() => {\n      this.blockedIPs.delete(ip);\n    }, duration);\n  },\n  \n  checkConnection(ip) {\n    const now = Date.now();\n    const connections = this.connections.get(ip) || { count: 0, resetTime: now + 60000 };\n    \n    if (now > connections.resetTime) {\n      connections.count = 0;\n      connections.resetTime = now + 60000;\n    }\n    \n    connections.count++;\n    this.connections.set(ip, connections);\n    \n    # Block if too many connections\n    if (connections.count > 100) {\n      this.blockIP(ip);\n      return false;\n    }\n    \n    return true;\n  }\n};\n\n# WebSocket server with DDoS protection\nconst wss = new WebSocket.Server({\n  port: 8080,\n  verifyClient: (info) => {\n    const ip = info.req.socket.remoteAddress;\n    \n    if (DDoSProtection.isBlocked(ip)) {\n      return false;\n    }\n    \n    return DDoSProtection.checkConnection(ip);\n  }\n});\n\n# Monitor suspicious activity\nsetInterval(() => {\n  const totalConnections = wss.clients.size;\n  const uniqueIPs = new Set();\n  \n  wss.clients.forEach(ws => {\n    uniqueIPs.add(ws._socket.remoteAddress);\n  });\n  \n  console.log(`Connections: ${totalConnections}, Unique IPs: ${uniqueIPs.size}`);\n  \n  # Alert if suspicious ratio\n  if (uniqueIPs.size > 0 && totalConnections / uniqueIPs.size > 50) {\n    console.warn("Suspicious connection pattern detected");\n  }\n}, 30000);',
                },
            ],
        },
        {
            title: 'Testing & Production',
            commands: [
                {
                    command: 'WebSocket Testing',
                    description: 'Test WebSocket applications',
                    usage: 'Jest, Socket.IO-client, automated testing',
                    example: '# Unit test WebSocket server\nconst WebSocket = require("ws");\nconst { createServer } = require("../server");\n\ndescribe("WebSocket Server", () => {\n  let server, wsServer, client1, client2;\n  \n  beforeAll((done) => {\n    server = createServer();\n    wsServer = server.wsServer;\n    server.listen(0, () => {\n      const port = server.address().port;\n      client1 = new WebSocket(`ws://localhost:${port}`);\n      client2 = new WebSocket(`ws://localhost:${port}`);\n      \n      let readyCount = 0;\n      const onOpen = () => {\n        readyCount++;\n        if (readyCount === 2) done();\n      };\n      \n      client1.on("open", onOpen);\n      client2.on("open", onOpen);\n    });\n  });\n  \n  afterAll(() => {\n    client1.close();\n    client2.close();\n    server.close();\n  });\n  \n  test("should broadcast messages to all clients", (done) => {\n    const message = { type: "chat", text: "Hello World" };\n    \n    client2.on("message", (data) => {\n      expect(JSON.parse(data)).toEqual(message);\n      done();\n    });\n    \n    client1.send(JSON.stringify(message));\n  });\n  \n  test("should handle room joining", (done) => {\n    const roomMessage = {\n      type: "join-room",\n      room: "test-room"\n    };\n    \n    client1.send(JSON.stringify(roomMessage));\n    \n    setTimeout(() => {\n      const roomClients = wsServer.adapter.rooms.get("test-room");\n      expect(roomClients.has(client1)).toBe(true);\n      done();\n    }, 100);\n  });\n});\n\n# Integration test with Socket.IO\nconst io = require("socket.io-client");\n\ndescribe("Socket.IO Integration", () => {\n  let server, clientSocket;\n  \n  beforeAll((done) => {\n    server = require("../app").createServer();\n    server.listen(0, () => {\n      const port = server.address().port;\n      clientSocket = io(`http://localhost:${port}`);\n      clientSocket.on("connect", done);\n    });\n  });\n  \n  afterAll(() => {\n    clientSocket.close();\n    server.close();\n  });\n  \n  test("should receive welcome message", (done) => {\n    clientSocket.on("welcome", (message) => {\n      expect(message).toBe("Welcome to the server!");\n      done();\n    });\n  });\n});',
                },
                {
                    command: 'Load Testing',
                    description: 'Load test WebSocket applications',
                    usage: 'Artillery, custom load testing scripts',
                    example: '# Artillery WebSocket load test\nconfig:\n  target: "ws://localhost:8080"\n  phases:\n    - duration: 60\n      arrivalRate: 10\n    - duration: 120\n      arrivalRate: 50\n    - duration: 60\n      arrivalRate: 100\n\nscenarios:\n  - name: "WebSocket Chat"\n    engine: ws\n    flow:\n      - connect:\n          target: "/ws"\n      - send: \'{"type":"join-room","room":"test"}\'\n      - loop:\n          - send: \'{"type":"chat","message":"Hello {{ $randomString() }}"}\'\n          - think: 1\n        count: 10\n\n# Custom load testing script\nconst WebSocket = require("ws");\n\nclass LoadTester {\n  constructor(url, maxConnections = 100) {\n    this.url = url;\n    this.maxConnections = maxConnections;\n    this.connections = [];\n    this.metrics = {\n      connected: 0,\n      messagesSent: 0,\n      messagesReceived: 0,\n      errors: 0\n    };\n  }\n  \n  async runTest(duration = 60000) {\n    console.log(`Starting load test with ${this.maxConnections} connections`);\n    \n    # Create connections\n    for (let i = 0; i < this.maxConnections; i++) {\n      this.createConnection(i);\n      await this.delay(10); # Stagger connections\n    }\n    \n    # Send messages\n    const messageInterval = setInterval(() => {\n      this.connections.forEach(ws => {\n        if (ws.readyState === WebSocket.OPEN) {\n          const message = {\n            type: "chat",\n            message: `Load test message ${Date.now()}`,\n            room: "test"\n          };\n          ws.send(JSON.stringify(message));\n          this.metrics.messagesSent++;\n        }\n      });\n    }, 1000);\n    \n    # Run for specified duration\n    await this.delay(duration);\n    \n    clearInterval(messageInterval);\n    this.printResults();\n    this.cleanup();\n  }\n  \n  createConnection(id) {\n    const ws = new WebSocket(this.url);\n    \n    ws.on("open", () => {\n      this.metrics.connected++;\n      ws.send(JSON.stringify({\n        type: "join-room",\n        room: "test"\n      }));\n    });\n    \n    ws.on("message", (data) => {\n      this.metrics.messagesReceived++;\n    });\n    \n    ws.on("error", (error) => {\n      this.metrics.errors++;\n      console.error(`Connection ${id} error:`, error);\n    });\n    \n    this.connections.push(ws);\n  }\n  \n  printResults() {\n    console.log("\\nLoad Test Results:");\n    console.log(`Connected: ${this.metrics.connected}`);\n    console.log(`Messages Sent: ${this.metrics.messagesSent}`);\n    console.log(`Messages Received: ${this.metrics.messagesReceived}`);\n    console.log(`Errors: ${this.metrics.errors}`);\n  }\n  \n  cleanup() {\n    this.connections.forEach(ws => ws.close());\n  }\n  \n  delay(ms) {\n    return new Promise(resolve => setTimeout(resolve, ms));\n  }\n}\n\n# Run load test\nconst tester = new LoadTester("ws://localhost:8080", 50);\ntester.runTest(30000);',
                },
                {
                    command: 'Production Deployment',
                    description: 'Deploy WebSocket applications to production',
                    usage: 'Docker, PM2, environment variables',
                    example: '# Dockerfile for WebSocket app\nFROM node:16-alpine\n\nWORKDIR /app\n\nCOPY package*.json ./\nRUN npm ci --only=production\n\nCOPY . .\n\nEXPOSE 3000\n\n# Health check\nHEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\\n  CMD curl -f http://localhost:3000/health || exit 1\n\nCMD ["npm", "start"]\n\n# Docker Compose for production\nversion: "3.8"\nservices:\n  websocket-app:\n    build: .\n    ports:\n      - "3000:3000"\n    environment:\n      - NODE_ENV=production\n      - REDIS_URL=redis://redis:6379\n      - JWT_SECRET=${JWT_SECRET}\n    depends_on:\n      - redis\n    restart: unless-stopped\n    deploy:\n      replicas: 3\n      resources:\n        limits:\n          cpus: "0.5"\n          memory: 512M\n        reservations:\n          cpus: "0.25"\n          memory: 256M\n  \n  redis:\n    image: redis:alpine\n    restart: unless-stopped\n    volumes:\n      - redis_data:/data\n  \n  nginx:\n    image: nginx:alpine\n    ports:\n      - "80:80"\n      - "443:443"\n    volumes:\n      - ./nginx.conf:/etc/nginx/nginx.conf\n      - ./ssl:/etc/ssl/certs\n    depends_on:\n      - websocket-app\n    restart: unless-stopped\n\nvolumes:\n  redis_data:\n\n# PM2 configuration\nmodule.exports = {\n  apps: [{\n    name: "websocket-server",\n    script: "./server.js",\n    instances: "max",\n    exec_mode: "cluster",\n    env: {\n      NODE_ENV: "development"\n    },\n    env_production: {\n      NODE_ENV: "production",\n      PORT: 3000,\n      REDIS_URL: "redis://localhost:6379"\n    },\n    error_file: "./logs/err.log",\n    out_file: "./logs/out.log",\n    log_file: "./logs/combined.log",\n    time: true,\n    max_memory_restart: "1G",\n    node_args: "--max-old-space-size=1024"\n  }]\n};',
                },
                {
                    command: 'Monitoring & Logging',
                    description: 'Monitor and log WebSocket applications',
                    usage: 'Winston, ELK stack, metrics collection',
                    example: '# Structured logging with Winston\nconst winston = require("winston");\n\nconst logger = winston.createLogger({\n  level: "info",\n  format: winston.format.combine(\n    winston.format.timestamp(),\n    winston.format.errors({ stack: true }),\n    winston.format.json()\n  ),\n  transports: [\n    new winston.transports.File({ filename: "error.log", level: "error" }),\n    new winston.transports.File({ filename: "combined.log" }),\n    new winston.transports.Console({\n      format: winston.format.simple()\n    })\n  ]\n});\n\n# WebSocket logging\nwss.on("connection", (ws, req) => {\n  const connectionInfo = {\n    ip: req.socket.remoteAddress,\n    userAgent: req.headers["user-agent"],\n    timestamp: new Date().toISOString()\n  };\n  \n  logger.info("WebSocket connection established", connectionInfo);\n  \n  ws.on("message", (data) => {\n    logger.info("Message received", {\n      size: data.length,\n      type: typeof data,\n      timestamp: new Date().toISOString()\n    });\n  });\n  \n  ws.on("close", (code, reason) => {\n    logger.info("WebSocket connection closed", {\n      code,\n      reason,\n      timestamp: new Date().toISOString()\n    });\n  });\n  \n  ws.on("error", (error) => {\n    logger.error("WebSocket error", {\n      error: error.message,\n      stack: error.stack,\n      timestamp: new Date().toISOString()\n    });\n  });\n});\n\n# Metrics collection\nconst metrics = {\n  connections: 0,\n  messagesReceived: 0,\n  messagesSent: 0,\n  errors: 0,\n  startTime: Date.now()\n};\n\nwss.on("connection", () => {\n  metrics.connections++;\n});\n\nwss.on("connection", (ws) => {\n  ws.on("message", () => {\n    metrics.messagesReceived++;\n  });\n  \n  ws.on("close", () => {\n    metrics.connections--;\n  });\n  \n  ws.on("error", () => {\n    metrics.errors++;\n  });\n});\n\n# Metrics endpoint\napp.get("/metrics", (req, res) => {\n  const uptime = Date.now() - metrics.startTime;\n  \n  res.json({\n    ...metrics,\n    uptime,\n    memoryUsage: process.memoryUsage(),\n    cpuUsage: process.cpuUsage(),\n    timestamp: new Date().toISOString()\n  });\n});',
                },
            ],
        },
    ],
};
