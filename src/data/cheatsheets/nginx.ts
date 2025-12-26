import { Code } from 'lucide-react';

export const nginxCheatsheet = {
  id: 'nginx',
  name: 'Nginx',
  description: 'Comprehensive Nginx guide covering beginner to expert commands, web server configuration, and performance optimization',
  icon: Code,
  color: 'from-green-600 to-emerald-600',
  category: 'programming',
  tags: ['nginx', 'web-server', 'reverse-proxy', 'load-balancer', 'performance'],
  sections: [
    // BEGINNER LEVEL
    {
      title: 'Getting Started with Nginx',
      commands: [
        {
          command: 'What is Nginx?',
          description: 'Understanding Nginx web server and its capabilities',
          usage: 'High-performance web server, reverse proxy, and load balancer',
          example: 'Nginx Overview:\n- High-performance HTTP server\n- Reverse proxy server\n- Load balancer\n- HTTP cache\n- Mail proxy (IMAP/POP3/SMTP)\n- SSL/TLS termination\n- WebSockets support\n- HTTP/2 and HTTP/3 support\n\nKey Features:\n- Event-driven architecture\n- Low memory usage\n- High concurrency\n- Static content serving\n- URL rewriting\n- Access control\n- Rate limiting\n- Content compression\n\nCommon Use Cases:\n- Web server for static files\n- Reverse proxy for application servers\n- Load balancer for multiple servers\n- SSL termination point\n- Content caching layer\n- API gateway\n- CDN edge server'
        },
        {
          command: 'Installing Nginx',
          description: 'Install Nginx on various operating systems',
          usage: 'Package manager installation or source compilation',
          example: '# Ubuntu/Debian\nsudo apt update\nsudo apt install nginx\n\n# CentOS/RHEL/Fedora\nsudo yum install nginx\n# or\nsudo dnf install nginx\n\n# macOS with Homebrew\nbrew install nginx\n\n# Windows (official binaries)\n# Download from nginx.org/en/download.html\n\n# Verify installation\nnginx -v\nnginx -V\n\n# Start/enable service\nsudo systemctl start nginx\nsudo systemctl enable nginx\n\n# Check status\nsudo systemctl status nginx'
        },
        {
          command: 'Basic Nginx Commands',
          description: 'Essential Nginx control commands',
          usage: 'nginx [options] for server management',
          example: '# Start nginx\nsudo nginx\n\n# Stop nginx\nsudo nginx -s stop\n\n# Graceful shutdown\nsudo nginx -s quit\n\n# Restart nginx\nsudo nginx -s reopen\n\n# Reload configuration\nsudo nginx -s reload\n\n# Test configuration\nsudo nginx -t\n\n# Test with specific config file\nsudo nginx -t -c /path/to/nginx.conf\n\n# Show version\nnginx -v\n\n# Show version and configuration\nnginx -V\n\n# Show help\nnginx -h'
        },
        {
          command: 'Directory Structure',
          description: 'Understanding Nginx file and directory layout',
          usage: 'Default locations for configuration and logs',
          example: '# Main configuration file\n/etc/nginx/nginx.conf\n\n# Additional configurations\n/etc/nginx/conf.d/\n/etc/nginx/sites-available/\n/etc/nginx/sites-enabled/\n\n# Default web root\n/var/www/html/\n/usr/share/nginx/html/\n\n# Log files\n/var/log/nginx/access.log\n/var/log/nginx/error.log\n\n# PID file\n/var/run/nginx.pid\n\n# Modules directory\n/etc/nginx/modules/\n\n# SSL certificates\n/etc/ssl/certs/\n/etc/ssl/private/'
        },
      ],
    },
    {
      title: 'Basic Configuration',
      commands: [
        {
          command: 'Nginx Configuration Structure',
          description: 'Understanding nginx.conf structure',
          usage: 'Global settings, events, http, server, and location blocks',
          example: '# /etc/nginx/nginx.conf\nuser www-data;\nworker_processes auto;\npid /run/nginx.pid;\ninclude /etc/nginx/modules-enabled/*.conf;\n\nevents {\n    worker_connections 768;\n    # multi_accept on;\n}\n\nhttp {\n    sendfile on;\n    tcp_nopush on;\n    tcp_nodelay on;\n    keepalive_timeout 65;\n    types_hash_max_size 2048;\n\n    include /etc/nginx/mime.types;\n    default_type application/octet-stream;\n\n    # Logging format\n    log_format main \'$remote_addr - $remote_user [$time_local] "$request" \'\n                    \'$status $body_bytes_sent "$http_referer" \'\n                    \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log /var/log/nginx/access.log main;\n    error_log /var/log/nginx/error.log;\n\n    # Gzip compression\n    gzip on;\n    gzip_disable "msie6";\n\n    include /etc/nginx/conf.d/*.conf;\n    include /etc/nginx/sites-enabled/*;\n}'
        },
        {
          command: 'Simple Static Website',
          description: 'Basic configuration for serving static files',
          usage: 'Server block with document root and basic settings',
          example: 'server {\n    listen 80;\n    server_name example.com www.example.com;\n    root /var/www/html;\n    index index.html index.htm;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n\n    # Error pages\n    error_page 404 /404.html;\n    error_page 500 502 503 504 /50x.html;\n    \n    location = /50x.html {\n        root /var/www/html;\n    }\n\n    # Logging\n    access_log /var/log/nginx/example.com.access.log;\n    error_log /var/log/nginx/example.com.error.log;\n}'
        },
        {
          command: 'Virtual Hosts Configuration',
          description: 'Setting up multiple websites on one server',
          usage: 'Multiple server blocks for different domains',
          example: '# /etc/nginx/sites-available/site1\nserver {\n    listen 80;\n    server_name site1.com www.site1.com;\n    root /var/www/site1;\n    index index.html;\n}\n\n# /etc/nginx/sites-available/site2\nserver {\n    listen 80;\n    server_name site2.com www.site2.com;\n    root /var/www/site2;\n    index index.html;\n}\n\n# Enable sites\nsudo ln -s /etc/nginx/sites-available/site1 /etc/nginx/sites-enabled/\nsudo ln -s /etc/nginx/sites-available/site2 /etc/nginx/sites-enabled/\n\n# Test and reload\nsudo nginx -t\nsudo nginx -s reload'
        },
      ],
    },
    {
      title: 'Location Blocks',
      commands: [
        {
          command: 'Location Block Types',
          description: 'Different types of location matching',
          usage: 'prefix, regex, exact, and priority matching',
          example: '# Exact match (highest priority)\nlocation = /about {\n    return 200 "About page";\n}\n\n# Regex match (case-sensitive)\nlocation ~ \\.(jpg|jpeg|png|gif)$ {\n    expires 1y;\n    add_header Cache-Control "public, immutable";\n}\n\n# Regex match (case-insensitive)\nlocation ~* \\.(css|js)$ {\n    expires 1M;\n    add_header Cache-Control "public";\n}\n\n# Prefix match (longest wins)\nlocation /images/ {\n    root /var/www;\n}\n\n# Named location\nlocation @fallback {\n    return 404;\n}\n\n# Priority order:\n# 1. Exact match (=)\n# 2. Regex match (~, ~*)\n# 3. Prefix match (no modifier)'
        },
        {
          command: 'Location Directives',
          description: 'Common directives used in location blocks',
          usage: 'root, alias, try_files, return, proxy_pass',
          example: 'location /static/ {\n    root /var/www;\n    # Maps to /var/www/static/\n}\n\nlocation /files/ {\n    alias /var/www/documents/;\n    # Maps /files/doc.pdf to /var/www/documents/doc.pdf\n}\n\nlocation /app/ {\n    try_files $uri $uri/ /index.php?$query_string;\n}\n\nlocation /old-url {\n    return 301 /new-url;\n}\n\nlocation /api/ {\n    proxy_pass http://localhost:3000;\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n}'
        },
      ],
    },
    // INTERMEDIATE LEVEL
    {
      title: 'Reverse Proxy Configuration',
      commands: [
        {
          command: 'Basic Reverse Proxy',
          description: 'Proxy requests to backend application servers',
          usage: 'proxy_pass directive with headers forwarding',
          example: 'server {\n    listen 80;\n    server_name example.com;\n\n    location / {\n        proxy_pass http://localhost:3000;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n\n    # WebSocket support\n    location /socket.io/ {\n        proxy_pass http://localhost:3000;\n        proxy_http_version 1.1;\n        proxy_set_header Upgrade $http_upgrade;\n        proxy_set_header Connection "upgrade";\n        proxy_set_header Host $host;\n    }\n}'
        },
        {
          command: 'Multiple Backend Servers',
          description: 'Load balancing across multiple application servers',
          usage: 'upstream block with multiple servers',
          example: 'upstream app_servers {\n    server 192.168.1.10:3000;\n    server 192.168.1.11:3000;\n    server 192.168.1.12:3000;\n}\n\nserver {\n    listen 80;\n    server_name example.com;\n\n    location / {\n        proxy_pass http://app_servers;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n}'
        },
        {
          command: 'Load Balancing Methods',
          description: 'Different load balancing algorithms',
          usage: 'round-robin, least_conn, ip_hash, and weighted',
          example: '# Round-robin (default)\nupstream backend {\n    server backend1.example.com;\n    server backend2.example.com;\n    server backend3.example.com;\n}\n\n# Least connections\nupstream backend {\n    least_conn;\n    server backend1.example.com;\n    server backend2.example.com;\n    server backend3.example.com;\n}\n\n# IP hash (session persistence)\nupstream backend {\n    ip_hash;\n    server backend1.example.com;\n    server backend2.example.com;\n    server backend3.example.com;\n}\n\n# Weighted load balancing\nupstream backend {\n    server backend1.example.com weight=3;\n    server backend2.example.com weight=2;\n    server backend3.example.com weight=1;\n}'
        },
      ],
    },
    {
      title: 'SSL/TLS Configuration',
      commands: [
        {
          command: 'Basic SSL Setup',
          description: 'Configure HTTPS with SSL certificates',
          usage: 'ssl_certificate and ssl_certificate_key directives',
          example: 'server {\n    listen 443 ssl http2;\n    server_name example.com;\n\n    ssl_certificate /etc/ssl/certs/example.com.crt;\n    ssl_certificate_key /etc/ssl/private/example.com.key;\n\n    # SSL protocols\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_prefer_server_ciphers on;\n\n    # SSL ciphers\n    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;\n\n    location / {\n        root /var/www/html;\n        index index.html;\n    }\n}\n\n# HTTP to HTTPS redirect\nserver {\n    listen 80;\n    server_name example.com;\n    return 301 https://$server_name$request_uri;\n}'
        },
        {
          command: 'Let\'s Encrypt SSL',
          description: 'Free SSL certificates with Certbot',
          usage: 'Automated certificate installation and renewal',
          example: '# Install Certbot\nsudo apt install certbot python3-certbot-nginx\n\n# Obtain SSL certificate\nsudo certbot --nginx -d example.com -d www.example.com\n\n# Test renewal\ncertbot renew --dry-run\n\n# Auto-renewal (added to crontab)\n0 12 * * * /usr/bin/certbot renew --quiet\n\n# Nginx configuration after Certbot\nserver {\n    server_name example.com;\n    root /var/www/html;\n    index index.html;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n\n    listen 443 ssl;\n    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;\n    include /etc/letsencrypt/options-ssl-nginx.conf;\n    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;\n}'
        },
        {
          command: 'SSL Security Headers',
          description: 'Enhance SSL security with HTTP headers',
          usage: 'add_header directives for security',
          example: 'server {\n    listen 443 ssl http2;\n    server_name example.com;\n\n    # SSL certificates\n    ssl_certificate /etc/ssl/certs/example.com.crt;\n    ssl_certificate_key /etc/ssl/private/example.com.key;\n\n    # Security headers\n    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;\n    add_header X-Frame-Options DENY always;\n    add_header X-Content-Type-Options nosniff always;\n    add_header Referrer-Policy "strict-origin-when-cross-origin" always;\n    add_header Content-Security-Policy "default-src \'self\'; http-src \'self\' https: data: blob:; img-src \'self\' https: data:; script-src \'self\' https:; style-src \'self\' https:; font-src \'self\' https: data:;" always;\n\n    # SSL configuration\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_prefer_server_ciphers on;\n    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384;\n    ssl_session_cache shared:SSL:10m;\n    ssl_session_timeout 10m;\n}'
        },
      ],
    },
    {
      title: 'Performance Optimization',
      commands: [
        {
          command: 'Gzip Compression',
          description: 'Enable gzip compression for better performance',
          usage: 'gzip module configuration',
          example: '# Enable gzip compression\ngzip on;\ngzip_vary on;\ngzip_min_length 1024;\ngzip_proxied any;\ngzip_comp_level 6;\ngzip_types\n    text/plain\n    text/css\n    text/xml\n    text/javascript\n    application/json\n    application/javascript\n    application/xml+rss\n    application/atom+xml\n    image/svg+xml;\n\n# Disable for IE6\ngzip_disable "msie6";\n\n# Browser caching\nlocation ~* \\.(jpg|jpeg|png|gif|ico|css|js)$ {\n    expires 1y;\n    add_header Cache-Control "public, immutable";\n}'
        },
        {
          command: 'Browser Caching',
          description: 'Set cache headers for static assets',
          usage: 'expires and cache-control headers',
          example: '# Browser caching configuration\nlocation ~* \\.(jpg|jpeg|png|gif|ico|svg|webp)$ {\n    expires 1y;\n    add_header Cache-Control "public, immutable";\n    access_log off;\n}\n\nlocation ~* \\.(css|js)$ {\n    expires 1M;\n    add_header Cache-Control "public";\n    access_log off;\n}\n\nlocation ~* \\.(pdf|doc|docx|xls|xlsx)$ {\n    expires 30d;\n    add_header Cache-Control "public";\n}\n\nlocation ~* \\.(html|htm)$ {\n    expires 1h;\n    add_header Cache-Control "public, must-revalidate";\n}\n\n# No caching for dynamic content\nlocation /api/ {\n    expires -1;\n    add_header Cache-Control "no-cache, no-store, must-revalidate";\n    add_header Pragma "no-cache";\n}'
        },
        {
          command: 'Worker Process Optimization',
          description: 'Optimize worker processes and connections',
          usage: 'worker_processes and worker_connections',
          example: '# /etc/nginx/nginx.conf\n\n# Auto-detect CPU cores\nworker_processes auto;\n\n# Worker connections\nevents {\n    worker_connections 1024;\n    use epoll;\n    multi_accept on;\n}\n\n# Performance tuning\nhttp {\n    # Sendfile optimization\n    sendfile on;\n    tcp_nopush on;\n    tcp_nodelay on;\n\n    # Keep-alive connections\n    keepalive_timeout 65;\n    keepalive_requests 100;\n\n    # Buffer sizes\n    client_body_buffer_size 128k;\n    client_max_body_size 10m;\n    client_header_buffer_size 1k;\n    large_client_header_buffers 4 4k;\n    output_buffers 1 32k;\n    postpone_output 1460;\n\n    # File descriptors\n    open_file_cache max=1000 inactive=20s;\n    open_file_cache_valid 30s;\n    open_file_cache_min_uses 2;\n    open_file_cache_errors on;\n}'
        },
      ],
    },
    // ADVANCED LEVEL
    {
      title: 'Security Configuration',
      commands: [
        {
          command: 'Access Control',
          description: 'Restrict access to specific IP addresses',
          usage: 'allow and deny directives',
          example: '# Allow only specific IPs\nlocation /admin {\n    allow 192.168.1.100;\n    allow 10.0.0.0/8;\n    deny all;\n}\n\n# Block specific IPs\nlocation / {\n    deny 192.168.1.50;\n    deny 10.0.0.25;\n}\n\n# GeoIP-based blocking\ngeo $bad_user {\n    default 0;\n    192.168.1.0/24 1;\n    10.0.0.0/8 1;\n}\n\nserver {\n    if ($bad_user) {\n        return 403;\n    }\n}\n\n# HTTP Basic Authentication\nlocation /private {\n    auth_basic "Restricted Area";\n    auth_basic_user_file /etc/nginx/.htpasswd;\n}\n\n# Create htpasswd file\n# sudo htpasswd -c /etc/nginx/.htpasswd username'
        },
        {
          command: 'Rate Limiting',
          description: 'Prevent abuse with rate limiting',
          usage: 'limit_req_zone and limit_req directives',
          example: '# Define rate limit zone\nhttp {\n    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;\n    limit_req_zone $binary_remote_addr zone=login:10m rate=1r/s;\n    limit_req_zone $binary_remote_addr zone=general:10m rate=50r/s;\n}\n\n# Apply rate limiting\nserver {\n    # API endpoints\n    location /api/ {\n        limit_req zone=api burst=20 nodelay;\n        proxy_pass http://backend;\n    }\n\n    # Login endpoint\n    location /login {\n        limit_req zone=login burst=5 nodelay;\n        proxy_pass http://backend;\n    }\n\n    # General site\n    location / {\n        limit_req zone=general burst=100 nodelay;\n        try_files $uri $uri/ =404;\n    }\n}\n\n# Connection limiting\nlimit_conn_zone $binary_remote_addr zone=addr:10m;\n\nserver {\n    limit_conn addr 10;\n}'
        },
        {
          command: 'DDoS Protection',
          description: 'Configure DDoS protection mechanisms',
          usage: 'Multiple security layers',
          example: '# /etc/nginx/nginx.conf\nhttp {\n    # Connection limiting\n    limit_conn_zone $binary_remote_addr zone=conn_limit_per_ip:10m;\n    limit_conn conn_limit_per_ip 20;\n\n    # Request limiting\n    limit_req_zone $binary_remote_addr zone=req_limit_per_ip:10m rate=30r/s;\n    limit_req zone=req_limit_per_ip burst=50 nodelay;\n\n    # Request size limits\n    client_body_buffer_size 1K;\n    client_header_buffer_size 1k;\n    client_max_body_size 10k;\n    large_client_header_buffers 2 1k;\n\n    # Timeouts\n    client_body_timeout 10;\n    client_header_timeout 10;\n    keepalive_timeout 5 5;\n    send_timeout 10;\n\n    # Reset slow connections\n    reset_timedout_connection on;\n}\n\n# Bot protection\nmap $http_user_agent $bad_bot {\n    default 0;\n    ~*malicious 1;\n    ~*bot 1;\n    ~*crawler 1;\n}\n\nserver {\n    if ($bad_bot) {\n        return 403;\n    }\n}'
        },
      ],
    },
    {
      title: 'URL Rewriting',
      commands: [
        {
          command: 'Basic URL Rewriting',
          description: 'Rewrite URLs using regex patterns',
          usage: 'rewrite directive with flags',
          example: '# Basic rewrite\nlocation /old-page {\n    rewrite ^/old-page$ /new-page permanent;\n}\n\n# Regex rewrite\nlocation /products {\n    rewrite ^/products/(\\d+)$ /product.php?id=$1 last;\n    rewrite ^/products/(\\d+)/(.*)$ /product.php?id=$1&name=$2 last;\n}\n\n# SEO-friendly URLs\nlocation / {\n    rewrite ^/article/(\\d+)-(\\w+)$ /article.php?id=$1&title=$2 last;\n    rewrite ^/category/(\\w+)$ /category.php?name=$1 last;\n    try_files $uri $uri/ =404;\n}\n\n# Rewrite flags:\n# last - stop processing and search for new location\n# break - stop processing and use current location\n# redirect - temporary redirect (302)\n# permanent - permanent redirect (301)'
        },
        {
          command: 'Conditional Rewriting',
          description: 'Rewrite URLs based on conditions',
          usage: 'if statements with rewrite rules',
          example: '# Mobile user agents\nif ($http_user_agent ~* "(iPhone|iPod|Android|BlackBerry)") {\n    rewrite ^/$ /mobile.html break;\n}\n\n# HTTP to HTTPS\nif ($scheme != "https") {\n    return 301 https://$host$request_uri;\n}\n\n# Remove www\nif ($host ~* ^www\\.(.*)) {\n    set $host_without_www $1;\n    rewrite ^(.*)$ https://$host_without_www$1 permanent;\n}\n\n# File exists check\nlocation / {\n    try_files $uri $uri/ @fallback;\n}\n\nlocation @fallback {\n    rewrite ^.*$ /index.php last;\n}'
        },
        {
          command: 'Advanced URL Mapping',
          description: 'Complex URL mapping and routing',
          usage: 'maps and complex rewrite rules',
          example: '# Map file extensions to handlers\nmap $uri $handler {\n    ~\\.php$   php;\n    ~\\.html$  html;\n    ~\\.json$  json;\n    default   static;\n}\n\n# Route based on map\nlocation / {\n    switch ($handler) {\n        case php:   { proxy_pass http://php_backend; break; }\n        case html:  { try_files $uri =404; break; }\n        case json:  { proxy_pass http://api_backend; break; }\n        default:   { try_files $uri $uri/ =404; break; }\n    }\n}\n\n# API versioning\nlocation ~ ^/api/v(\\d+)/(.*)$ {\n    rewrite ^/api/v(\\d+)/(.*)$ /api/$2 break;\n    proxy_pass http://api_backend;\n    proxy_set_header API-Version $1;\n}'
        },
      ],
    },
    {
      title: 'Caching Configuration',
      commands: [
        {
          command: 'FastCGI Cache',
          description: 'Cache dynamic content from FastCGI applications',
          usage: 'fastcgi_cache_path and fastcgi_cache directives',
          example: '# Define cache path\nfastcgi_cache_path /var/cache/nginx/fastcgi levels=1:2 keys_zone=WORDPRESS:100m inactive=60m;\nfastcgi_cache_key "$scheme$request_method$host$request_uri";\nfastcgi_cache_use_stale error timeout invalid_header http_500;\nfastcgi_ignore_headers Cache-Control Expires Set-Cookie;\n\nserver {\n    location ~ \\.php$ {\n        include fastcgi_params;\n        fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;\n        fastcgi_cache WORDPRESS;\n        fastcgi_cache_valid 200 60m;\n        fastcgi_cache_bypass $cookie_nocache $arg_nocache;\n        fastcgi_no_cache $cookie_nocache $arg_nocache;\n        add_header X-FastCGI-Cache $upstream_cache_status;\n    }\n}'
        },
        {
          command: 'Proxy Cache',
          description: 'Cache responses from proxy servers',
          usage: 'proxy_cache_path and proxy_cache directives',
          example: '# Define proxy cache\nproxy_cache_path /var/cache/nginx/proxy levels=1:2 keys_zone=backend_cache:10m max_size=10g inactive=60m use_temp_path=off;\n\n# Cache key configuration\nproxy_cache_key "$scheme$request_method$host$request_uri";\n\nserver {\n    location / {\n        proxy_pass http://backend;\n        proxy_cache backend_cache;\n        proxy_cache_valid 200 302 10m;\n        proxy_cache_valid 404 1m;\n        proxy_cache_bypass $cookie_nocache $arg_nocache;\n        proxy_no_cache $cookie_nocache $arg_nocache;\n        \n        # Cache headers\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        \n        add_header X-Proxy-Cache $upstream_cache_status;\n    }\n}'
        },
        {
          command: 'Microcaching',
          description: 'Short-term caching for dynamic content',
          usage: 'Fast cache for frequently changing content',
          example: '# Microcache for API responses\nproxy_cache_path /var/cache/nginx/micro levels=1:2 keys_zone=micro_cache:10m inactive=10s max_size=100m;\n\nserver {\n    location /api/ {\n        proxy_pass http://backend;\n        proxy_cache micro_cache;\n        proxy_cache_valid 200 5s;\n        proxy_cache_valid any 1s;\n        proxy_cache_bypass $cookie_nocache $arg_nocache;\n        \n        # Cache based on method\n        proxy_cache_methods GET HEAD;\n        \n        # Conditional caching\n        proxy_cache_bypass $http_pragma $http_authorization;\n        proxy_no_cache $http_pragma $http_authorization;\n    }\n    \n    # Cache static files longer\n    location ~* \\.(css|js|png|jpg|jpeg|gif|ico|svg)$ {\n        expires 1d;\n        add_header Cache-Control "public, immutable";\n    }\n}'
        },
      ],
    },
    // EXPERT LEVEL
    {
      title: 'Monitoring and Logging',
      commands: [
        {
          command: 'Custom Log Formats',
          description: 'Define custom logging formats for better analysis',
          usage: 'log_format directive with variables',
          example: '# Custom log format\nlog_format main_ext \'$remote_addr - $remote_user [$time_local] "$request" \'\n                   \'$status $body_bytes_sent "$http_referer" \'\n                   \'"$http_user_agent" "$http_x_forwarded_for" \'\n                   \'rt=$request_time uct="$upstream_connect_time" uht="$upstream_header_time" urt="$upstream_response_time"\';\n\n# JSON log format\nlog_format json_combined escape=json\n    \'{\'\n    \'"time_local":"$time_local",\'\n    \'"remote_addr":"$remote_addr",\'\n    \'"remote_user":"$remote_user",\'\n    \'"request":"$request",\'\n    \'"status": "$status",\'\n    \'"body_bytes_sent":"$body_bytes_sent",\'\n    \'"request_time":"$request_time",\'\n    \'"http_referrer":"$http_referer",\'\n    \'"http_user_agent":"$http_user_agent"\'\n    \'}\';\n\n# Apply custom formats\naccess_log /var/log/nginx/access.log main_ext;\naccess_log /var/log/nginx/access.json json_combined;'
        },
        {
          command: 'Status Monitoring',
          description: 'Enable Nginx status page for monitoring',
          usage: 'stub_status module configuration',
          example: '# Enable status module\nserver {\n    listen 127.0.0.1:8080;\n    server_name localhost;\n    \n    location /nginx_status {\n        stub_status on;\n        access_log off;\n        allow 127.0.0.1;\n        deny all;\n    }\n}\n\n# Status output explanation:\n# Active connections: 2\n# server accepts handled requests\n#  2 2 4\n# Reading: 0 Writing: 1 Waiting: 1\n#\n# Active connections: Current connections\n# accepts: Total accepted connections\n# handled: Total handled connections\n# requests: Total requests\n# Reading: Reading request headers\n# Writing: Writing response headers\n# Waiting: Keep-alive connections'
        },
        {
          command: 'Performance Metrics',
          description: 'Monitor Nginx performance with detailed metrics',
          usage: 'Variables and logging for performance analysis',
          example: '# Performance logging\nlog_format performance \'$remote_addr - $remote_user [$time_local] \'\n                      \'"$request" $status $body_bytes_sent \'\n                      \'rt=$request_time uct="$upstream_connect_time" \'\n                      \'uht="$upstream_header_time" urt="$upstream_response_time" \'\n                      \'cs=$upstream_cache_status\';\n\n# Add performance headers\nadd_header X-Response-Time $request_time always;\nadd_header X-Upstream-Time $upstream_response_time always;\nadd_header X-Cache-Status $upstream_cache_status always;\n\n# Monitor slow requests\nmap $request_time $slow_request {\n    default 0;\n    ~^\\d\\.\\d{3,} 1;\n}\n\nserver {\n    access_log /var/log/nginx/slow.log performance if=$slow_request;\n    \n    location / {\n        # Request timeout for slow requests\n        proxy_read_timeout 30s;\n        proxy_connect_timeout 5s;\n        proxy_send_timeout 30s;\n    }\n}'
        },
      ],
    },
    {
      title: 'High Availability',
      commands: [
        {
          command: 'Health Checks',
          description: 'Implement health checks for backend servers',
          usage: 'Custom health check endpoints',
          example: '# Health check endpoint\nserver {\n    listen 80;\n    server_name health.example.com;\n    \n    location /health {\n        access_log off;\n        return 200 "healthy\\n";\n        add_header Content-Type text/plain;\n    }\n    \n    location /ready {\n        access_log off;\n        # Check dependencies\n        if ($upstream_status != "200") {\n            return 503;\n        }\n        return 200 "ready\\n";\n    }\n}\n\n# Backend health check\nupstream backend {\n    server 192.168.1.10:3000 max_fails=3 fail_timeout=30s;\n    server 192.168.1.11:3000 max_fails=3 fail_timeout=30s;\n    server 192.168.1.12:3000 backup;\n}\n\n# Custom health check\nlocation /backend-health {\n    proxy_pass http://backend/health;\n    proxy_next_upstream error timeout http_500 http_502 http_503 http_504;\n    proxy_connect_timeout 2s;\n    proxy_read_timeout 2s;\n}'
        },
        {
          command: 'Failover Configuration',
          description: 'Configure automatic failover for high availability',
          usage: 'Backup servers and error handling',
          example: '# Primary and backup servers\nupstream backend {\n    server primary1.example.com:3000 weight=3 max_fails=3 fail_timeout=30s;\n    server primary2.example.com:3000 weight=3 max_fails=3 fail_timeout=30s;\n    server backup1.example.com:3000 backup;\n    server backup2.example.com:3000 backup;\n}\n\n# Error handling\nserver {\n    location / {\n        proxy_pass http://backend;\n        proxy_next_upstream error timeout http_500 http_502 http_503 http_504;\n        proxy_connect_timeout 5s;\n        proxy_read_timeout 30s;\n        \n        # Custom error pages for failures\n        error_page 502 503 504 /maintenance.html;\n    }\n    \n    location = /maintenance.html {\n        root /var/www/error;\n        internal;\n    }\n}'
        },
        {
          command: 'Session Persistence',
          description: 'Maintain user sessions across server restarts',
          usage: 'Sticky sessions and session affinity',
          example: '# IP hash for session persistence\nupstream backend {\n    ip_hash;\n    server 192.168.1.10:3000;\n    server 192.168.1.11:3000;\n    server 192.168.1.12:3000;\n}\n\n# Cookie-based sticky sessions\nupstream backend {\n    server 192.168.1.10:3000;\n    server 192.168.1.11:3000;\n    server 192.168.1.12:3000;\n    \n    sticky cookie srv_id expires=1h domain=.example.com path=/;\n}\n\n# Learn-based sticky sessions\nupstream backend {\n    server 192.168.1.10:3000;\n    server 192.168.1.11:3000;\n    server 192.168.1.12:3000;\n    \n    sticky learn create=$upstream_cookie_sessionid\n              lookup=$cookie_sessionid\n              zone=client_sessions:1m\n              timeout=1h;\n}'
        },
      ],
    },
    {
      title: 'Advanced Security',
      commands: [
        {
          command: 'WAF Configuration',
          description: 'Web Application Firewall setup',
          usage: 'ModSecurity integration with Nginx',
          example: '# ModSecurity configuration\nload_module modules/ngx_http_modsecurity_module.so;\n\nhttp {\n    modsecurity on;\n    modsecurity_rules_file /etc/nginx/modsec/main.conf;\n    \n    server {\n        location / {\n            ModSecurityEnabled on;\n            ModSecurityConfig /etc/nginx/modsec/main.conf;\n            \n            # Basic rules\n            SecRuleEngine On\n            SecRequestBodyAccess On\n            SecResponseBodyAccess On\n            \n            # Common attack patterns\n            SecRule ARGS "@detectSQLi" "id:1001,phase:2,deny,status:403,msg:\'SQL Injection Attack Detected\'"\n            SecRule ARGS "@detectXSS" "id:1002,phase:2,deny,status:403,msg:\'XSS Attack Detected\'"\n        }\n    }\n}'
        },
        {
          command: 'Content Security Policy',
          description: 'Implement CSP headers for XSS protection',
          usage: 'Content-Security-Policy header configuration',
          example: '# Strict CSP\nadd_header Content-Security-Policy "default-src \'self\'; script-src \'self\' https://cdn.example.com; style-src \'self\' https://fonts.googleapis.com; font-src \'self\' https://fonts.gstatic.com; img-src \'self\' data: https:; connect-src \'self\' https://api.example.com; frame-ancestors \'none\';" always;\n\n# CSP with nonce\nlocation / {\n    add_header Content-Security-Policy "default-src \'self\'; script-src \'self\' \'nonce-$request_id\'; style-src \'self\' \'nonce-$request_id\';" always;\n    \n    # Generate nonce\n    set $request_id $request_id;\n    if ($request_id = "") {\n        set $request_id $msec$pid;\n    }\n}\n\n# Report-only CSP for testing\nadd_header Content-Security-Policy-Report-Only "default-src \'self\'; script-src \'self\' https:; report-uri /csp-report;" always;\n\n# CSP report endpoint\nlocation /csp-report {\n    access_log /var/log/nginx/csp-violations.log;\n    return 204;\n}'
        },
        {
          command: 'Advanced Access Control',
          description: 'Granular access control mechanisms',
          usage: 'GeoIP, JWT validation, and custom logic',
          example: '# GeoIP country blocking\ngeoip_country /usr/share/GeoIP/GeoIP.dat;\n\nmap $geoip_country $allowed_country {\n    default no;\n    US yes;\n    CA yes;\n    GB yes;\n}\n\nserver {\n    if ($allowed_country = no) {\n        return 403;\n    }\n}\n\n# JWT validation\nmap $http_authorization $jwt_payload {\n    default "";\n    "~^Bearer (.+)$" $1;\n}\n\n# Location with JWT check\nlocation /api/protected {\n    if ($jwt_payload = "") {\n        return 401;\n    }\n    \n    # Verify JWT (requires external module)\n    auth_jwt "" token=$jwt_payload;\n    auth_jwt_key_file /etc/nginx/jwt.key;\n    \n    proxy_pass http://backend;\n}\n\n# Time-based access\nmap $time_iso8601 $business_hours {\n    default 0;\n    "~^T(09|1[0-7]):" 1;  # 09:00-17:59\n}\n\nlocation /admin {\n    if ($business_hours = 0) {\n        return 403;\n    }\n}'
        },
      ],
    },
    {
      title: 'Performance Tuning',
      commands: [
        {
          command: 'Memory Optimization',
          description: 'Optimize memory usage for high traffic',
          usage: 'Buffer sizes and memory allocation',
          example: '# Memory optimization settings\nworker_processes auto;\nworker_rlimit_nofile 100000;\n\nevents {\n    worker_connections 4096;\n    use epoll;\n    multi_accept on;\n}\n\nhttp {\n    # Memory buffers\n    client_body_buffer_size 16k;\n    client_header_buffer_size 1k;\n    large_client_header_buffers 4 8k;\n    client_max_body_size 8m;\n    \n    # Output buffers\n    output_buffers 4 32k;\n    postpone_output 1460;\n    \n    # File cache\n    open_file_cache max=200000 inactive=20s;\n    open_file_cache_valid 30s;\n    open_file_cache_min_uses 2;\n    open_file_cache_errors on;\n    \n    # FastCGI buffers\n    fastcgi_buffer_size 128k;\n    fastcgi_buffers 256 16k;\n    fastcgi_busy_buffers_size 256k;\n    fastcgi_temp_file_write_size 256k;\n    \n    # Proxy buffers\n    proxy_buffer_size 128k;\n    proxy_buffers 4 256k;\n    proxy_busy_buffers_size 256k;\n    proxy_temp_file_write_size 256k;\n}'
        },
        {
          command: 'Connection Tuning',
          description: 'Optimize connection handling',
          usage: 'Keep-alive, timeouts, and connection limits',
          example: '# Connection optimization\nhttp {\n    # Keep-alive settings\n    keepalive_timeout 30;\n    keepalive_requests 1000;\n    keepalive_disable msie6;\n    \n    # Timeouts\n    client_body_timeout 12;\n    client_header_timeout 12;\n    send_timeout 10;\n    \n    # TCP settings\n    tcp_nopush on;\n    tcp_nodelay on;\n    \n    # Reset timedout connections\n    reset_timedout_connection on;\n    \n    # Connection limiting\n    limit_conn_zone $binary_remote_addr zone=addr:10m;\n    limit_conn addr 100;\n    \n    # Request limiting\n    limit_req_zone $binary_remote_addr zone=one:10m rate=10r/s;\n    limit_req zone=one burst=20 nodelay;\n    \n    # Server tokens\n    server_tokens off;\n}'
        },
        {
          command: 'CPU Optimization',
          description: 'Optimize CPU usage and affinity',
          usage: 'Worker processes and CPU binding',
          example: '# CPU optimization\n# Bind worker processes to CPU cores\nworker_processes 4;\nworker_cpu_affinity 0001 0010 0100 1000;\n\n# Alternative: auto-detect and bind\nworker_processes auto;\nworker_cpu_affinity auto;\n\n# Accept mutex\naccept_mutex on;\naccept_mutex_delay 500ms;\n\n# Thread pools (for file I/O)\nthread_pool default threads=32 max_queue=65536;\n\n# Use thread pools for aio\naio threads=default;\n\n# Optimize for specific workloads\nhttp {\n    # Static file serving\n    sendfile on;\n    \n    # Large file downloads\n    sendfile_max_chunk 1m;\n    \n    # SSL operations\n    ssl_session_cache shared:SSL:10m;\n    ssl_session_timeout 10m;\n    ssl_session_tickets on;\n    \n    # Compression (CPU intensive)\n    gzip on;\n    gzip_comp_level 1;  # Lower for high traffic\n    gzip_min_length 1000;\n}'
        },
      ],
    },
    {
      title: 'Container and Cloud Deployment',
      commands: [
        {
          command: 'Docker Configuration',
          description: 'Nginx configuration for Docker containers',
          usage: 'Dockerfile and docker-compose setup',
          example: '# Dockerfile\nFROM nginx:alpine\n\n# Copy custom configuration\nCOPY nginx.conf /etc/nginx/nginx.conf\nCOPY conf.d/ /etc/nginx/conf.d/\nCOPY ssl/ /etc/nginx/ssl/\n\n# Copy static files\nCOPY html/ /usr/share/nginx/html/\n\n# Create non-root user\nRUN addgroup -g 1001 -S nginx && \\\n    adduser -S nginx -u 1001\n\nUSER nginx\n\nEXPOSE 8080\n\nCMD ["nginx", "-g", "daemon off;"]\n\n# docker-compose.yml\nversion: \'3.8\'\nservices:\n  nginx:\n    build: .\n    ports:\n      - "80:8080"\n      - "443:8443"\n    volumes:\n      - ./html:/usr/share/nginx/html:ro\n      - ./ssl:/etc/nginx/ssl:ro\n      - ./logs:/var/log/nginx\n    depends_on:\n      - app\n    networks:\n      - frontend\n      - backend\n\n  app:\n    image: node:alpine\n    networks:\n      - backend'
        },
        {
          command: 'Kubernetes Deployment',
          description: 'Deploy Nginx on Kubernetes',
          usage: 'Deployment and service configurations',
          example: '# nginx-deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.21-alpine\n        ports:\n        - containerPort: 80\n        volumeMounts:\n        - name: nginx-config\n          mountPath: /etc/nginx/conf.d\n        - name: nginx-html\n          mountPath: /usr/share/nginx/html\n        resources:\n          requests:\n            memory: "64Mi"\n            cpu: "250m"\n          limits:\n            memory: "128Mi"\n            cpu: "500m"\n      volumes:\n      - name: nginx-config\n        configMap:\n          name: nginx-config\n      - name: nginx-html\n        persistentVolumeClaim:\n          claimName: nginx-html-pvc\n\n---\n# nginx-service.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: nginx-service\nspec:\n  selector:\n    app: nginx\n  ports:\n  - protocol: TCP\n    port: 80\n    targetPort: 80\n  type: LoadBalancer'
        },
        {
          command: 'Cloud Load Balancer',
          description: 'Configure Nginx with cloud load balancers',
          usage: 'AWS ELB, GCP LB, and Azure LB integration',
          example: '# AWS ELB integration\nserver {\n    listen 80;\n    server_name example.com;\n    \n    # Real IP from ELB\n    set_real_ip_from 172.31.0.0/16;\n    real_ip_header X-Forwarded-For;\n    real_ip_recursive on;\n    \n    # ELB health check\n    location /health {\n        access_log off;\n        return 200 "healthy\\n";\n        add_header Content-Type text/plain;\n    }\n    \n    # Proxy to application\n    location / {\n        proxy_pass http://localhost:3000;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n}\n\n# GCP Load Balancer\nserver {\n    listen 80;\n    server_name _;\n    \n    # GCP health check\n    location /healthz {\n        access_log off;\n        return 200;\n    }\n    \n    # X-Forwarded-Proto for HTTPS\n    if ($http_x_forwarded_proto != "https") {\n        set $https_redirect 1;\n    }\n    \n    if ($https_redirect = 1) {\n        return 301 https://$host$request_uri;\n    }\n}'
        },
      ],
    },
    {
      title: 'Troubleshooting and Debugging',
      commands: [
        {
          command: 'Debug Configuration',
          description: 'Enable debugging for troubleshooting',
          usage: 'Debug logging and error handling',
          example: '# Enable debug logging\nevents {\n    debug_connection 192.168.1.100;\n    debug_connection 127.0.0.1;\n}\n\n# Error log with debug level\nerror_log /var/log/nginx/error.log debug;\n\n# Debug rewrite rules\nlocation / {\n    rewrite_log on;\n    rewrite ^/test/(.*)$ /newpath/$1 last;\n}\n\n# Dump variables\necho $remote_addr;\necho $request_uri;\necho $request_method;\n\n# Test configuration with debug\nnginx -t -g "daemon off; master_process off; error_log /var/log/nginx/debug.log debug;"'
        },
        {
          command: 'Common Issues',
          description: 'Solutions for common Nginx problems',
          usage: 'Troubleshooting frequent issues',
          example: '# 502 Bad Gateway\n# Check if backend is running\ncurl http://localhost:3000/health\n\n# Check upstream configuration\nnginx -T | grep -A 10 -B 5 upstream\n\n# 504 Gateway Timeout\n# Increase timeouts\nproxy_read_timeout 300s;\nproxy_connect_timeout 75s;\n\n# 413 Request Entity Too Large\n# Increase client body size\nclient_max_body_size 100M;\n\n# 403 Forbidden\n# Check permissions\nls -la /var/www/html/\n# Fix permissions\nsudo chown -R www-data:www-data /var/www/html/\nsudo chmod -R 755 /var/www/html/\n\n# High CPU usage\n# Check worker processes\nps aux | grep nginx\n# Optimize worker count\nworker_processes auto;\n\n# Memory issues\n# Check memory usage\nfree -h\n# Optimize buffers\nclient_body_buffer_size 16k;'
        },
        {
          command: 'Performance Analysis',
          description: 'Analyze Nginx performance bottlenecks',
          usage: 'Monitoring and analysis tools',
          example: '# Performance monitoring\n# Real-time monitoring\nwatch -n 1 "curl -s http://localhost/nginx_status"\n\n# Analyze slow requests\nawk \'$NF > 5\' /var/log/nginx/access.log\n\n# Top IPs by requests\nawk \'{print $1}\' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head -10\n\n# Top requested pages\nawk \'{print $7}\' /var/log/nginx/access.log | sort | uniq -c | sort -nr | head -10\n\n# HTTP status codes distribution\nawk \'{print $9}\' /var/log/nginx/access.log | sort | uniq -c | sort -nr\n\n# Response time analysis\nawk \'{print $NF}\' /var/log/nginx/access.log | sort -n | tail -10\n\n# Concurrent connections\nss -n | awk \'{print $1}\' | sort | uniq -c | sort -nr\n\n# Performance testing\nab -n 10000 -c 100 http://localhost/\nwrk -t12 -c400 -d30s http://localhost/\n\n# System monitoring\nhtop\niotop\nnethogs'
        },
      ],
    },
  ],
};
