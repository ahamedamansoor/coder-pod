import { Container } from 'lucide-react';

export const dockerCheatsheet = {
  id: 'docker',
  name: 'Docker Commands',
  description: 'Containerize everything from basic images to production orchestration',
  icon: Container,
  colorTheme: 'blue' as const,
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Docker',
      commands: [
        {
          command: 'Installation and Setup',
          description: 'Install Docker and verify installation',
          usage: 'Platform-specific installation',
          example: '# Ubuntu/Debian\nsudo apt-get update\nsudo apt-get install docker.io docker-compose\nsudo usermod -aG docker $USER\n\n# macOS (Homebrew)\nbrew install --cask docker\n\n# Windows\n# Download Docker Desktop from docker.com\n\n# Verify installation\ndocker --version\ndocker-compose --version',
        },
        {
          command: 'docker version',
          description: 'Show Docker version information',
          usage: 'docker version',
          example: 'docker version\ndocker --version  # Short version only\ndocker version --format "{{.Server.Version}}"',
        },
        {
          command: 'docker info',
          description: 'Display system-wide Docker information',
          usage: 'docker info',
          example: 'docker info\ndocker system info  # Same command\ndocker info --format "{{.NCPU}} CPUs"',
        },
        {
          command: 'docker help',
          description: 'Get help for Docker commands',
          usage: 'docker help [command]',
          example: 'docker help\ndocker help run\ndocker container --help\ndocker --help',
        },
        {
          command: 'docker hello-world',
          description: 'Test Docker installation',
          usage: 'docker run hello-world',
          example: 'docker run hello-world\n# Should show welcome message if Docker is working',
        },
      ],
    },
    {
      title: 'Basic Container Operations',
      commands: [
        {
          command: 'docker run',
          description: 'Create and start a container',
          usage: 'docker run [options] <image> [command]',
          example: 'docker run nginx\ndocker run -d -p 80:80 --name web nginx\ndocker run -it ubuntu bash\ndocker run --rm alpine echo "hello world"',
        },
        {
          command: 'docker ps',
          description: 'List running containers',
          usage: 'docker ps [options]',
          example: 'docker ps\ndocker ps -a  # All containers\ndocker ps -q  # Only IDs\ndocker ps --filter "status=exited"',
        },
        {
          command: 'docker stop',
          description: 'Stop running containers gracefully',
          usage: 'docker stop <container>',
          example: 'docker stop myapp\ndocker stop -t 30 myapp  # 30 second timeout\ndocker stop $(docker ps -q)  # Stop all',
        },
        {
          command: 'docker start',
          description: 'Start stopped containers',
          usage: 'docker start <container>',
          example: 'docker start myapp\ndocker start -a myapp  # Attach output\ndocker start container1 container2',
        },
        {
          command: 'docker restart',
          description: 'Restart containers',
          usage: 'docker restart <container>',
          example: 'docker restart myapp\ndocker restart -t 10 myapp',
        },
        {
          command: 'docker rm',
          description: 'Remove stopped containers',
          usage: 'docker rm <container>',
          example: 'docker rm myapp\ndocker rm -f myapp  # Force remove\ndocker rm $(docker ps -aq)  # Remove all',
        },
      ],
    },
    {
      title: 'Basic Image Management',
      commands: [
        {
          command: 'docker pull',
          description: 'Pull image from registry',
          usage: 'docker pull <image>[:<tag>]',
          example: 'docker pull nginx\ndocker pull nginx:alpine\ndocker pull --platform linux/amd64 node:18\ndocker pull ubuntu:22.04',
        },
        {
          command: 'docker images',
          description: 'List local images',
          usage: 'docker images [options]',
          example: 'docker images\ndocker images -a  # All images\ndocker images --filter "dangling=true"\ndocker images --format "{{.Repository}}:{{.Tag}}"',
        },
        {
          command: 'docker rmi',
          description: 'Remove images',
          usage: 'docker rmi <image>',
          example: 'docker rmi nginx:alpine\ndocker rmi -f myapp  # Force remove\ndocker rmi $(docker images -q)  # Remove all',
        },
        {
          command: 'docker search',
          description: 'Search Docker Hub for images',
          usage: 'docker search <term>',
          example: 'docker search nginx\ndocker search --filter stars=100 postgres\ndocker search --limit 10 node',
        },
        {
          command: 'docker tag',
          description: 'Create tag for image',
          usage: 'docker tag <source> <target>',
          example: 'docker tag myapp:latest myapp:v1.0\ndocker tag myapp myuser/myapp:latest\ndocker tag ubuntu:22.04 myubuntu:custom',
        },
      ],
    },
    {
      title: 'Container Interaction and Monitoring',
      commands: [
        {
          command: 'docker logs',
          description: 'Fetch container logs',
          usage: 'docker logs [options] <container>',
          example: 'docker logs myapp\ndocker logs -f myapp  # Follow logs\ndocker logs --tail 100 myapp\ndocker logs --since 10m myapp',
        },
        {
          command: 'docker exec',
          description: 'Execute command in running container',
          usage: 'docker exec [options] <container> <command>',
          example: 'docker exec myapp ls /app\ndocker exec -it myapp bash\ndocker exec -u root myapp apt update\ndocker exec myapp env',
        },
        {
          command: 'docker inspect',
          description: 'Display detailed container/image information',
          usage: 'docker inspect <name/id>',
          example: 'docker inspect myapp\ndocker inspect --format="{{.NetworkSettings.IPAddress}}" myapp\ndocker inspect nginx:latest',
        },
        {
          command: 'docker stats',
          description: 'Display live resource usage statistics',
          usage: 'docker stats [container]',
          example: 'docker stats\ndocker stats myapp\ndocker stats --no-stream  # One shot\ndocker stats --format "table {{.Container}}\\t{{.CPUPerc}}"',
        },
        {
          command: 'docker top',
          description: 'Display running processes in container',
          usage: 'docker top <container>',
          example: 'docker top myapp\ndocker top myapp aux\ndocker top nginx',
        },
      ],
    },
    {
      title: 'Basic File Operations',
      commands: [
        {
          command: 'docker cp',
          description: 'Copy files between container and host',
          usage: 'docker cp <src> <dest>',
          example: 'docker cp myapp:/app/data.txt ./\ndocker cp ./config.json myapp:/app/\ndocker cp myapp:/logs/. ./logs/\ndocker cp ./src/ myapp:/app/src/',
        },
        {
          command: 'docker commit',
          description: 'Create image from container changes',
          usage: 'docker commit <container> <image>',
          example: 'docker commit myapp myapp:v2\ndocker commit -m "Added config" myapp myapp:snapshot\ndocker commit -a "developer" myapp custom:latest',
        },
        {
          command: 'docker diff',
          description: 'Inspect changes to container filesystem',
          usage: 'docker diff <container>',
          example: 'docker diff myapp\n# Shows A (added), C (changed), D (deleted) files',
        },
        {
          command: 'docker export',
          description: 'Export container filesystem as tar',
          usage: 'docker export <container>',
          example: 'docker export myapp > backup.tar\ndocker export -o backup.tar myapp',
        },
      ],
    },

    // INTERMEDIATE LEVEL
    {
      title: 'Advanced Container Management',
      commands: [
        {
          command: 'docker create',
          description: 'Create container without starting',
          usage: 'docker create [options] <image>',
          example: 'docker create --name myapp node:18\ndocker create -p 3000:3000 myapp\ndocker create --restart always nginx',
        },
        {
          command: 'docker pause/unpause',
          description: 'Pause and unpause container processes',
          usage: 'docker pause <container>',
          example: 'docker pause myapp\ndocker pause container1 container2\ndocker unpause myapp',
        },
        {
          command: 'docker kill',
          description: 'Kill running containers forcefully',
          usage: 'docker kill <container>',
          example: 'docker kill myapp\ndocker kill -s SIGTERM myapp\ndocker kill $(docker ps -q)',
        },
        {
          command: 'docker attach',
          description: 'Attach to running container',
          usage: 'docker attach <container>',
          example: 'docker attach myapp\n# Detach: Ctrl+P, Ctrl+Q\ndocker attach --sig-proxy=false myapp',
        },
        {
          command: 'docker wait',
          description: 'Block until container stops',
          usage: 'docker wait <container>',
          example: 'docker wait myapp\ndocker wait $(docker run -d nginx)',
        },
      ],
    },
    {
      title: 'Dockerfile Fundamentals',
      commands: [
        {
          command: 'FROM',
          description: 'Set base image',
          usage: 'FROM <image>[:<tag>] [AS <name>]',
          example: 'FROM node:18-alpine\nFROM node:18 AS builder\nFROM scratch\nFROM ubuntu:22.04',
        },
        {
          command: 'RUN',
          description: 'Execute command in new layer',
          usage: 'RUN <command>',
          example: 'RUN apt-get update && apt-get install -y curl\nRUN npm install\nRUN ["npm", "install"]\nRUN apt-get clean && rm -rf /var/lib/apt/lists/*',
        },
        {
          command: 'COPY/ADD',
          description: 'Copy files to image',
          usage: 'COPY <src> <dest>',
          example: 'COPY . /app\nCOPY package*.json ./\ncopy --chown=node:node . /app\nADD app.tar.gz /app/\nADD https://example.com/file.txt /app/',
        },
        {
          command: 'WORKDIR',
          description: 'Set working directory',
          usage: 'WORKDIR /path',
          example: 'WORKDIR /app\nWORKDIR /usr/src/app\nWORKDIR $HOME/app',
        },
        {
          command: 'CMD/ENTRYPOINT',
          description: 'Default command and executable',
          usage: 'CMD <command> or ENTRYPOINT <command>',
          example: 'CMD ["npm", "start"]\nCMD npm start\nENTRYPOINT ["node", "app.js"]\nENTRYPOINT ["/entrypoint.sh"]\nCMD ["--help"]',
        },
        {
          command: 'EXPOSE',
          description: 'Document exposed ports',
          usage: 'EXPOSE <port>',
          example: 'EXPOSE 3000\nEXPOSE 8080/tcp\nEXPOSE 53/udp\nEXPOSE 8080 3000',
        },
      ],
    },
    {
      title: 'Building Images',
      commands: [
        {
          command: 'docker build',
          description: 'Build image from Dockerfile',
          usage: 'docker build [options] <path>',
          example: 'docker build -t myapp:latest .\ndocker build -f Dockerfile.prod -t myapp:prod .\ndocker build --no-cache --build-arg VERSION=1.0 .\ndocker build --target builder -t myapp:dev .',
        },
        {
          command: 'docker build context',
          description: 'Understand build context',
          usage: 'Build context management',
          example: '# .dockerignore file\nnode_modules\n*.log\n.git\n.env\ndist\n\n# Build with context\ndocker build -t app -f docker/Dockerfile .',
        },
        {
          command: 'docker history',
          description: 'Show image layer history',
          usage: 'docker history <image>',
          example: 'docker history nginx\ndocker history --no-trunc myapp\ndocker history --human nginx',
        },
        {
          command: 'docker save/load',
          description: 'Save and load images',
          usage: 'docker save/load <image>',
          example: 'docker save nginx > nginx.tar\ndocker save -o images.tar nginx:latest alpine:latest\ndocker load < nginx.tar\ndocker load -i images.tar',
        },
      ],
    },
    {
      title: 'Volume Management',
      commands: [
        {
          command: 'docker volume create',
          description: 'Create a named volume',
          usage: 'docker volume create [options] <name>',
          example: 'docker volume create mydata\ndocker volume create --driver local mydata\ndocker volume create --opt type=tmpfs --opt device=tmpfs temp',
        },
        {
          command: 'docker volume ls',
          description: 'List volumes',
          usage: 'docker volume ls',
          example: 'docker volume ls\ndocker volume ls --filter dangling=true\ndocker volume ls -q',
        },
        {
          command: 'docker volume inspect',
          description: 'Display volume details',
          usage: 'docker volume inspect <volume>',
          example: 'docker volume inspect mydata\ndocker volume inspect --format "{{.Mountpoint}}" mydata',
        },
        {
          command: 'docker volume rm',
          description: 'Remove volumes',
          usage: 'docker volume rm <volume>',
          example: 'docker volume rm mydata\ndocker volume rm vol1 vol2\ndocker volume rm $(docker volume ls -q)',
        },
        {
          command: 'docker volume prune',
          description: 'Remove unused volumes',
          usage: 'docker volume prune',
          example: 'docker volume prune\ndocker volume prune -f  # No prompt\ndocker volume prune --filter "label!=keep"',
        },
        {
          command: 'Bind mounts vs volumes',
          description: 'Compare bind mounts and volumes',
          usage: 'docker run -v <source>:<target>',
          example: '# Named volume\ndocker run -v mydata:/app/data app\n\n# Bind mount\ndocker run -v $(pwd)/data:/app/data app\n\n# Read-only\ndocker run -v mydata:/app/data:ro app',
        },
      ],
    },
    {
      title: 'Network Management',
      commands: [
        {
          command: 'docker network create',
          description: 'Create a custom network',
          usage: 'docker network create [options] <name>',
          example: 'docker network create mynet\ndocker network create --driver bridge mynet\ndocker network create --subnet 172.20.0.0/16 mynet\ndocker network create --gateway 172.20.0.1 mynet',
        },
        {
          command: 'docker network ls',
          description: 'List networks',
          usage: 'docker network ls',
          example: 'docker network ls\ndocker network ls --filter driver=bridge\ndocker network ls -q',
        },
        {
          command: 'docker network connect',
          description: 'Connect container to network',
          usage: 'docker network connect <network> <container>',
          example: 'docker network connect mynet myapp\ndocker network connect --alias web mynet nginx\ndocker network connect --ip 172.20.0.10 mynet myapp',
        },
        {
          command: 'docker network disconnect',
          description: 'Disconnect container from network',
          usage: 'docker network disconnect <network> <container>',
          example: 'docker network disconnect mynet myapp\ndocker network disconnect -f mynet myapp',
        },
        {
          command: 'docker network inspect',
          description: 'Display network details',
          usage: 'docker network inspect <network>',
          example: 'docker network inspect bridge\ndocker network inspect mynet\ndocker network inspect --format="{{range .Containers}}{{.Name}} {{end}}" mynet',
        },
        {
          command: 'docker network rm',
          description: 'Remove networks',
          usage: 'docker network rm <network>',
          example: 'docker network rm mynet\ndocker network rm $(docker network ls -q)\ndocker network prune',
        },
      ],
    },
    {
      title: 'Environment Variables and Configuration',
      commands: [
        {
          command: 'ENV in Dockerfile',
          description: 'Set environment variables in image',
          usage: 'ENV <key>=<value>',
          example: 'ENV NODE_ENV=production\nENV PORT=3000 HOST=0.0.0.0\nENV APP_VERSION="1.0.0"',
        },
        {
          command: 'ARG in Dockerfile',
          description: 'Define build-time variables',
          usage: 'ARG <name>[=<default>]',
          example: 'ARG VERSION=1.0\nARG NODE_VERSION=18\nARG BUILD_DATE\nFROM node:${NODE_VERSION}',
        },
        {
          command: '-e flag',
          description: 'Set environment variables at runtime',
          usage: 'docker run -e <key>=<value>',
          example: 'docker run -e NODE_ENV=production app\ndocker run -e PORT=3000 -e HOST=0.0.0.0 app\ndocker run --env-file .env app',
        },
        {
          command: 'USER in Dockerfile',
          description: 'Set user for running commands',
          usage: 'USER <user>[:<group>]',
          example: 'USER node\nUSER node:node\nUSER 1001:1001\nRUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001',
        },
        {
          command: 'LABEL in Dockerfile',
          description: 'Add metadata to image',
          usage: 'LABEL <key>=<value>',
          example: 'LABEL version="1.0"\nLABEL maintainer="dev@example.com"\nLABEL description="My application"',
        },
      ],
    },

    // ADVANCED LEVEL
    {
      title: 'Docker Compose Fundamentals',
      commands: [
        {
          command: 'docker compose up',
          description: 'Create and start services',
          usage: 'docker compose up [options]',
          example: 'docker compose up\ndocker compose up -d  # Detached\ndocker compose up --build  # Rebuild\ndocker compose up --scale web=3\ndocker compose up --force-recreate',
        },
        {
          command: 'docker compose down',
          description: 'Stop and remove services',
          usage: 'docker compose down [options]',
          example: 'docker compose down\ndocker compose down -v  # Remove volumes\ndocker compose down --rmi all  # Remove images\ndocker compose down --remove-orphans',
        },
        {
          command: 'docker compose ps',
          description: 'List containers in compose project',
          usage: 'docker compose ps',
          example: 'docker compose ps\ndocker compose ps -a  # All containers\ndocker compose ps --services',
        },
        {
          command: 'docker compose logs',
          description: 'View service logs',
          usage: 'docker compose logs [service]',
          example: 'docker compose logs\ndocker compose logs -f web  # Follow\ndocker compose logs --tail 100 web\ndocker compose logs --since 1h',
        },
        {
          command: 'docker compose exec',
          description: 'Execute command in service',
          usage: 'docker compose exec <service> <command>',
          example: 'docker compose exec web bash\ndocker compose exec db psql -U postgres\ndocker compose exec -T web ./script.sh',
        },
      ],
    },
    {
      title: 'Docker Compose Advanced',
      commands: [
        {
          command: 'docker compose build',
          description: 'Build or rebuild services',
          usage: 'docker compose build [service]',
          example: 'docker compose build\ndocker compose build --no-cache web\ndocker compose build --parallel\ndocker compose build --progress plain',
        },
        {
          command: 'docker compose pull/push',
          description: 'Pull and push service images',
          usage: 'docker compose pull/push [service]',
          example: 'docker compose pull\ndocker compose pull web\ndocker compose push\ndocker compose push --ignore-push-failures',
        },
        {
          command: 'docker compose run',
          description: 'Run one-off command on service',
          usage: 'docker compose run <service> <command>',
          example: 'docker compose run web npm test\ndocker compose run --rm web bash\ndocker compose run -e NODE_ENV=test web npm run test',
        },
        {
          command: 'docker compose start/stop/restart',
          description: 'Control service lifecycle',
          usage: 'docker compose start/stop/restart [service]',
          example: 'docker compose start web db\ndocker compose stop web\ndocker compose restart --timeout 30 web',
        },
        {
          command: 'docker compose config',
          description: 'Validate and view compose file',
          usage: 'docker compose config',
          example: 'docker compose config\ndocker compose config --services\ndocker compose config --volumes\ndocker compose config --resolve-image-digests',
        },
      ],
    },
    {
      title: 'Multi-stage Builds',
      commands: [
        {
          command: 'Multi-stage FROM',
          description: 'Use multiple FROM statements for optimization',
          usage: 'FROM <image> AS <stage>',
          example: 'FROM node:18 AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nRUN npm run build\n\nFROM node:18-alpine AS production\nWORKDIR /app\nCOPY --from=builder /app/dist ./dist\nCOPY --from=builder /app/node_modules ./node_modules\nCMD ["node", "dist/index.js"]',
        },
        {
          command: 'Build target',
          description: 'Build specific stage',
          usage: 'docker build --target <stage>',
          example: 'docker build --target builder -t myapp:dev .\ndocker build --target production -t myapp:prod .\ndocker build --target test -t myapp:test .',
        },
        {
          command: 'COPY from stage',
          description: 'Copy files from specific stage',
          usage: 'COPY --from=<stage> <src> <dest>',
          example: 'COPY --from=builder /app/dist ./dist\nCOPY --from=deps /app/node_modules ./node_modules\nCOPY --from=builder --chown=node:node /app/dist ./dist',
        },
        {
          command: 'Optimized multi-stage',
          description: 'Optimization techniques',
          usage: 'Advanced multi-stage patterns',
          example: '# Separate dependency and build stages\nFROM node:18 AS deps\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\n\nFROM node:18 AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci\nCOPY . .\nRUN npm run build\n\nFROM node:18-alpine AS runner\nWORKDIR /app\nCOPY --from=deps /app/node_modules ./node_modules\nCOPY --from=builder /app/dist ./dist\nUSER node\nCMD ["node", "dist/index.js"]',
        },
      ],
    },
    {
      title: 'Docker BuildKit and Buildx',
      commands: [
        {
          command: 'Enable BuildKit',
          description: 'Enable Docker BuildKit for advanced features',
          usage: 'DOCKER_BUILDKIT=1 docker build',
          example: 'DOCKER_BUILDKIT=1 docker build -t myapp .\n# Or set in /etc/docker/daemon.json\n# {"features": {"buildkit": true}}\n# Or export: export DOCKER_BUILDKIT=1',
        },
        {
          command: 'docker buildx',
          description: 'Extended build with BuildKit',
          usage: 'docker buildx <command>',
          example: 'docker buildx build --platform linux/amd64,linux/arm64 -t myapp .\ndocker buildx create --use\ndocker buildx build --cache-to type=registry,ref=myapp:cache\ndocker buildx imagetools inspect myapp:latest',
        },
        {
          command: 'Build cache',
          description: 'Use build cache for faster builds',
          usage: 'Build cache management',
          example: 'docker buildx build --cache-from type=registry,ref=myapp:cache --cache-to type=registry,ref=myapp:cache .\ndocker buildx build --cache-to type=local,dest=/tmp/cache .\ndocker buildx build --mount=type=cache,target=/root/.cache npm install',
        },
        {
          command: 'Multi-platform builds',
          description: 'Build for multiple architectures',
          usage: 'docker buildx build --platform',
          example: 'docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t myapp:multi .\ndocker buildx build --platform linux/amd64 -t myapp:amd64 .\ndocker buildx imagetools create --tag myapp:latest myapp:amd64 myapp:arm64',
        },
      ],
    },
    {
      title: 'Health Checks and Monitoring',
      commands: [
        {
          command: 'HEALTHCHECK in Dockerfile',
          description: 'Configure container health check',
          usage: 'HEALTHCHECK [options] CMD <command>',
          example: 'HEALTHCHECK --interval=30s --timeout=3s --retries=3 \\\n  CMD wget --quiet --tries=1 --spider http://localhost:3000/health || exit 1\n\nHEALTHCHECK --interval=5m --timeout=3s \\\n  CMD curl -f http://localhost/ || exit 1\n\nHEALTHCHECK NONE  # Disable healthcheck',
        },
        {
          command: 'docker health check',
          description: 'Check container health status',
          usage: 'docker inspect --format="{{.State.Health.Status}}"',
          example: 'docker inspect --format="{{.State.Health.Status}}" myapp\ndocker ps --format "table {{.Names}}\\t{{.Status}}"\ndocker inspect --format="{{range .State.Health.Log}}{{.Output}}{{end}}" myapp',
        },
        {
          command: 'Custom health check scripts',
          description: 'Create custom health check scripts',
          usage: 'Health check scripts',
          example: '#!/bin/bash\n# healthcheck.sh\ncurl -f http://localhost:3000/health || exit 1\n\n# In Dockerfile:\nCOPY healthcheck.sh /usr/local/bin/\nRUN chmod +x /usr/local/bin/healthcheck.sh\nHEALTHCHECK CMD /usr/local/bin/healthcheck.sh',
        },
        {
          command: 'Monitoring with stats',
          description: 'Advanced container monitoring',
          usage: 'docker stats with options',
          example: 'docker stats --no-stream --format "table {{.Container}}\\t{{.CPUPerc}}\\t{{.MemUsage}}"\ndocker stats --format "{{.Container}}: {{.CPUPerc}}"\ndocker stats myapp --format "{{.Container}}\\t{{.MemPerc}}"',
        },
      ],
    },
    {
      title: 'Security Best Practices',
      commands: [
        {
          command: 'Non-root user',
          description: 'Run containers as non-root user',
          usage: 'USER directive and user creation',
          example: 'FROM node:18-alpine\nRUN addgroup -g 1001 -S nodejs && adduser -S nodejs -u 1001\nWORKDIR /app\nCOPY --chown=nodejs:nodejs . .\nUSER nodejs\nCMD ["node", "app.js"]',
        },
        {
          command: 'Read-only filesystem',
          description: 'Mount filesystem as read-only',
          usage: '--read-only flag',
          example: 'docker run --read-only -v /app/tmp:/tmp app\ndocker run --read-only --tmpfs /tmp app\ndocker run --read-only -v /app/data:/data:rw app',
        },
        {
          command: 'Resource limits',
          description: 'Limit container resources',
          usage: '--memory, --cpus flags',
          example: 'docker run --memory 512m --cpus 1.0 app\ndocker run --memory 2g --memory-swap 4g app\ndocker run --cpus 0.5 --cpuset-cpus 0,1 app\ndocker run --pids-limit 100 app',
        },
        {
          command: 'Seccomp and AppArmor',
          description: 'Security profiles',
          usage: '--security-opt flag',
          example: 'docker run --security-opt seccomp=default.json app\ndocker run --security-opt apparmor:myprofile app\ndocker run --security-opt no-new-privileges app',
        },
        {
          command: 'Secrets management',
          description: 'Manage sensitive data',
          usage: 'docker secrets and environment files',
          example: '# Using secrets (Swarm)\necho "mysecret" | docker secret create db_password -\ndocker service create --secret db_password myapp\n\n# Using secret files\ndocker run --secret db_password myapp\ndocker run --env-file .env app',
        },
      ],
    },

    // EXPERT LEVEL
    {
      title: 'Docker Swarm Orchestration',
      commands: [
        {
          command: 'docker swarm init',
          description: 'Initialize Docker Swarm',
          usage: 'docker swarm init [options]',
          example: 'docker swarm init\ndocker swarm init --advertise-addr 192.168.1.100\ndocker swarm init --advertise-addr eth0 --listen-addr eth0',
        },
        {
          command: 'docker swarm join',
          description: 'Join node to Swarm',
          usage: 'docker swarm join --token <token> <manager>:<port>',
          example: 'docker swarm join --token SWMTKN-1-xxx 192.168.1.100:2377\ndocker swarm join --token SWMTKN-1-xxx worker 192.168.1.100:2377',
        },
        {
          command: 'docker service create',
          description: 'Create service in Swarm',
          usage: 'docker service create [options] <image>',
          example: 'docker service create --name web --publish 80:80 nginx\ndocker service create --name db --replicas 3 --mount type=volume,source=dbdata,target=/var/lib/postgresql postgres\ndocker service create --name app --replicas 2 --update-delay 10s myapp',
        },
        {
          command: 'docker service scale',
          description: 'Scale service replicas',
          usage: 'docker service scale <service>=<replicas>',
          example: 'docker service scale web=5\ndocker service scale web=5 db=3\ndocker service scale web=1',
        },
        {
          command: 'docker service update',
          description: 'Update service configuration',
          usage: 'docker service update [options] <service>',
          example: 'docker service update --image myapp:v2 app\ndocker service update --replicas 5 app\ndocker service update --rollback app\ndocker service update --force app',
        },
        {
          command: 'docker stack deploy',
          description: 'Deploy stack from compose file',
          usage: 'docker stack deploy [options] <stack>',
          example: 'docker stack deploy -c docker-compose.yml myapp\ndocker stack deploy --compose-file docker-compose.yml --prune myapp',
        },
      ],
    },
    {
      title: 'Production Optimization',
      commands: [
        {
          command: 'Image optimization',
          description: 'Optimize Docker image size',
          usage: 'Optimization techniques',
          example: '# Use alpine base\nFROM node:18-alpine\n\n# Multi-stage build\nFROM node:18 AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production && npm cache clean --force\n\n# Clean up\nRUN apt-get clean && rm -rf /var/lib/apt/lists/*\nRUN rm -rf /tmp/* /var/tmp/*',
        },
        {
          command: 'Layer caching optimization',
          description: 'Optimize Docker layer caching',
          usage: 'Order instructions strategically',
          example: 'FROM node:18\nWORKDIR /app\n\n# Copy dependencies first (less frequent changes)\nCOPY package*.json ./\nRUN npm ci --only=production\n\n# Copy source code (more frequent changes)\nCOPY . .\n\n# Copy build artifacts (most frequent changes)\nCOPY dist/ ./dist/',
        },
        {
          command: 'Dockerignore patterns',
          description: 'Optimize build context with .dockerignore',
          usage: '.dockerignore file',
          example: '# .dockerignore\nnode_modules\nnpm-debug.log\n.git\n.gitignore\nREADME.md\n.env\n.nyc_output\ncoverage\n.nyc_output\ntmp\ntemp\n*.md\n.DS_Store\n.vscode\n.idea',
        },
        {
          command: 'Base image selection',
          description: 'Choose appropriate base images',
          usage: 'Base image comparison',
          example: '# Alpine (~5MB base)\nFROM node:18-alpine\n\n# Slim (~50MB base)\nFROM node:18-slim\n\n# Debian (~900MB base)\nFROM node:18\n\n# Scratch (minimal)\nFROM scratch\nCOPY --from=builder /app /app',
        },
      ],
    },
    {
      title: 'CI/CD Integration',
      commands: [
        {
          command: 'GitHub Actions Docker',
          description: 'Docker in GitHub Actions',
          usage: 'GitHub Actions workflow',
          example: 'name: Build and Push Docker\non: [push]\njobs:\n  docker:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - name: Set up Docker Buildx\n        uses: docker/setup-buildx-action@v2\n      - name: Login to Docker Hub\n        uses: docker/login-action@v2\n        with:\n          username: ${{ secrets.DOCKER_USERNAME }}\n          password: ${{ secrets.DOCKER_PASSWORD }}\n      - name: Build and push\n        uses: docker/build-push-action@v4\n        with:\n          context: .\n          push: true\n          tags: user/app:latest',
        },
        {
          command: 'GitLab CI Docker',
          description: 'Docker in GitLab CI',
          usage: '.gitlab-ci.yml',
          example: 'build-docker:\n  stage: build\n  image: docker:latest\n  services:\n    - docker:dind\n  script:\n    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .\n    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA\n  only:\n    - main',
        },
        {
          command: 'Jenkins Docker',
          description: 'Docker in Jenkins pipeline',
          usage: 'Jenkinsfile',
          example: 'pipeline {\n  agent any\n  stages {\n    stage(\'Build Docker\') {\n      steps {\n        script {\n          docker.build("myapp:${env.BUILD_NUMBER}")\n        }\n      }\n    }\n    stage(\'Push Docker\') {\n      steps {\n        script {\n          docker.withRegistry("https://registry.hub.docker.com", "docker-credentials") {\n            docker.image("myapp:${env.BUILD_NUMBER}").push()\n          }\n        }\n      }\n    }\n  }\n}',
        },
        {
          command: 'Automated scanning',
          description: 'Automated security scanning',
          usage: 'Security scanning in CI',
          example: '- name: Run Trivy vulnerability scanner\n        uses: aquasecurity/trivy-action@master\n        with:\n          image-ref: user/app:latest\n          format: "sarif"\n          output: "trivy-results.sarif"\n\n      - name: Upload Trivy scan results\n        uses: github/codeql-action/upload-sarif@v2\n        with:\n          sarif_file: "trivy-results.sarif"',
        },
      ],
    },
    {
      title: 'Advanced Networking',
      commands: [
        {
          command: 'Overlay networks',
          description: 'Multi-host networking with overlay',
          usage: 'docker network create --driver overlay',
          example: 'docker network create --driver overlay --attachable mynet\ndocker service create --network mynet --name web nginx\ndocker network create --driver overlay --subnet 10.0.0.0/24 mynet',
        },
        {
          command: 'Network aliases',
          description: 'Network aliases for service discovery',
          usage: '--network-alias flag',
          example: 'docker run --network mynet --network-alias web nginx\ndocker run --network mynet --network-alias db postgres\ndocker compose exec web ping db',
        },
        {
          command: 'DNS configuration',
          description: 'Custom DNS settings',
          usage: '--dns flag',
          example: 'docker run --dns 8.8.8.8 --dns 8.8.4.4 app\ndocker run --dns-search example.com app\ndocker run --network-alias web --hostname webhost app',
        },
        {
          command: 'Port mapping strategies',
          description: 'Advanced port mapping',
          usage: 'Port mapping options',
          example: 'docker run -p 8080:80 nginx\ndocker run -p 127.0.0.1:8080:80 nginx\ndocker run -p 8080-8090:80-90 nginx\ndocker run -P nginx  # Publish all exposed ports',
        },
      ],
    },
    {
      title: 'Monitoring and Logging',
      commands: [
        {
          command: 'Docker logging drivers',
          description: 'Configure logging drivers',
          usage: '--log-driver flag',
          example: 'docker run --log-driver json-file --log-opt max-size=10m app\ndocker run --log-driver syslog --log-opt syslog-address=tcp://192.168.1.100:514 app\ndocker run --log-driver fluentd app',
        },
        {
          command: 'Prometheus monitoring',
          description: 'Monitor Docker with Prometheus',
          usage: 'Docker metrics and cAdvisor',
          example: '# cAdvisor for container metrics\ndocker run -d --name=cadvisor \\\n  -p 8080:8080 \\\n  -v /:/rootfs:ro \\\n  -v /var/run:/var/run:ro \\\n  -v /sys:/sys:ro \\\n  -v /var/lib/docker/:/var/lib/docker:ro \\\n  gcr.io/cadvisor/cadvisor:latest',
        },
        {
          command: 'Grafana dashboards',
          description: 'Docker monitoring with Grafana',
          usage: 'Grafana dashboards',
          example: '# Grafana with Prometheus\ndocker run -d --name=grafana \\\n  -p 3000:3000 \\\n  -e "GF_SECURITY_ADMIN_PASSWORD=admin" \\\n  grafana/grafana:latest',
        },
        {
          command: 'ELK stack for logs',
          description: 'Centralized logging with ELK',
          usage: 'ELK stack deployment',
          example: '# Docker Compose for ELK\nversion: \'3.8\'\nservices:\n  elasticsearch:\n    image: docker.elastic.co/elasticsearch/elasticsearch:7.15.0\n  logstash:\n    image: docker.elastic.co/logstash/logstash:7.15.0\n  kibana:\n    image: docker.elastic.co/kibana/kibana:7.15.0\n    ports:\n      - "5601:5601"',
        },
      ],
    },
    {
      title: 'Advanced Docker Features',
      commands: [
        {
          command: 'Docker contexts',
          description: 'Manage multiple Docker environments',
          usage: 'docker context <command>',
          example: 'docker context ls\ndocker context create mycontext --docker "host=unix:///var/run/docker.sock"\ndocker context use mycontext\ndocker context rm mycontext',
        },
        {
          command: 'Docker plugins',
          description: 'Extend Docker functionality',
          usage: 'docker plugin <command>',
          example: 'docker plugin ls\ndocker plugin install vieux/sshfs\ndocker plugin enable vieux/sshfs\ndocker plugin disable vieux/sshfs\ndocker plugin rm vieux/sshfs',
        },
        {
          command: 'Docker init',
          description: 'Initialize Docker project (v24+)',
          usage: 'docker init [options]',
          example: 'docker init\ndocker init --platform node\ndocker init --platform python\ndocker init --platform go',
        },
        {
          command: 'Docker Scout',
          description: 'Vulnerability scanning and analysis',
          usage: 'docker scout <command>',
          example: 'docker scout cves myapp:latest\ndocker scout recommendations myapp:latest\ndocker scout quickview myapp:latest\ndocker scout compare myapp:v1 myapp:v2',
        },
        {
          command: 'Docker Desktop extensions',
          description: 'Extend Docker Desktop',
          usage: 'Docker Desktop extensions',
          example: '# Install extensions via Docker Desktop\n# - Docker Scout\n# - Volume Management\n# - Disk Usage\n# - Logs Explorer\n# - Container Security',
        },
      ],
    },
    {
      title: 'Performance Tuning',
      commands: [
        {
          command: 'Docker daemon optimization',
          description: 'Optimize Docker daemon performance',
          usage: '/etc/docker/daemon.json',
          example: '{\n  "storage-driver": "overlay2",\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "10m",\n    "max-file": "3"\n  },\n  "default-ulimits": {\n    "nofile": {\n      "Name": "nofile",\n      "Hard": 64000,\n      "Soft": 64000\n    }\n  }\n}',
        },
        {
          command: 'Storage driver optimization',
          description: 'Optimize storage performance',
          usage: 'Storage driver configuration',
          example: '# Check current storage driver\ndocker info | grep "Storage Driver"\n\n# Optimize overlay2\ndocker daemon --storage-driver overlay2 --storage-opt overlay2.override_kernel_check=true',
        },
        {
          command: 'Memory and CPU tuning',
          description: 'Fine-tune resource allocation',
          usage: 'Resource optimization',
          example: 'docker run --memory-swap -1 --memory 1g app  # Unlimited swap\ndocker run --cpu-shares 512 app  # Relative CPU weight\ndocker run --cpuset-mems 0,1 app  # Bind to specific NUMA nodes\ndocker run --blkio-weight 100 app  # Block I/O weight',
        },
        {
          command: 'System cleanup',
          description: 'Optimize system resources',
          usage: 'docker system commands',
          example: 'docker system prune -a --volumes  # Remove all unused data\ndocker system df  # Show disk usage\ndocker builder prune --all  # Remove build cache\ndocker volume prune --filter "label!=keep"',
        },
      ],
    },
    {
      title: 'Troubleshooting and Debugging',
      commands: [
        {
          command: 'Container debugging',
          description: 'Debug container issues',
          usage: 'Debugging techniques',
          example: '# Check container logs\ndocker logs myapp\n\n# Enter container for debugging\ndocker exec -it myapp bash\n\n# Check container processes\ndocker top myapp\n\n# Inspect container filesystem\ndocker diff myapp\n\n# Check resource usage\ndocker stats myapp',
        },
        {
          command: 'Network debugging',
          description: 'Debug network connectivity',
          usage: 'Network debugging',
          example: '# Check network configuration\ndocker network inspect mynet\n\n# Test connectivity between containers\ndocker exec web ping db\n\n# Check port mappings\ndocker port myapp\n\n# Check DNS resolution\ndocker exec myapp nslookup google.com',
        },
        {
          command: 'Build debugging',
          description: 'Debug Docker build issues',
          usage: 'Build debugging',
          example: '# Build with detailed output\ndocker build --progress=plain -t myapp .\n\n# Run intermediate container for debugging\ndocker run -it --rm $(docker build -q .) bash\n\n# Check build history\ndocker history myapp\n\n# Inspect build layers\ndocker build --no-cache -t myapp .',
        },
        {
          command: 'Performance debugging',
          description: 'Debug performance issues',
          usage: 'Performance analysis',
          example: '# Monitor resource usage\ndocker stats --no-stream\n\n# Check disk usage\ndocker system df\n\n# Analyze image size\ndocker history --human myapp\n\n# Check container start time\ndocker inspect --format="{{.State.StartedAt}}" myapp',
        },
      ],
    },
    {
      title: 'Docker Ecosystem Tools',
      commands: [
        {
          command: 'Portainer',
          description: 'Web-based Docker management',
          usage: 'Portainer deployment',
          example: 'docker volume create portainer_data\ndocker run -d -p 8000:8000 -p 9443:9443 \\\n  --name portainer --restart=always \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  -v portainer_data:/data \\\n  portainer/portainer-ce:latest',
        },
        {
          command: 'Lazydocker',
          description: 'Terminal UI for Docker',
          usage: 'lazydocker installation and usage',
          example: '# Install\ncurl https://raw.githubusercontent.com/jesseduffield/lazydocker/master/scripts/install_update_linux.sh | bash\n\n# Run\nlazydocker',
        },
        {
          command: 'Dive',
          description: 'Explore Docker image layers',
          usage: 'dive tool',
          example: '# Install\nbrew install dive\n\n# Analyze image\ndive myapp:latest\n\ndive --source build-context -t myapp:latest .',
        },
        {
          command: 'ctop',
          description: 'Top-like interface for containers',
          usage: 'ctop monitoring',
          example: '# Install\ngo install github.com/bcicen/ctop@latest\n\n# Run\nctop\n\n# Show specific containers\nctop container1 container2',
        },
        {
          command: 'Docker Compose Viz',
          description: 'Visualize Docker Compose files',
          usage: 'docker-compose-viz',
          example: '# Generate diagram\ndocker-compose-viz -m image -o docker-compose.png\n\n# Include services\ndocker-compose-viz -m service -o compose-services.png',
        },
      ],
    },
  ],
};
