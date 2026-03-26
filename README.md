# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

Fix npm issues related to package-lock.json

```bash
# Terminal
npm ERR! code ELIFECYCLE

# Solution
- Step 1: npm cache clean --force
- Step 2: rmdir node_modules
- Step 3: rm package-lock.json
- Step 4: npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Set Nuxt Environment Variables:

```bash
NUXT_PUBLIC_NODE_ENV=production
NUXT_PUBLIC_SERVER_NAME=serverName
```

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## Deployment

Execute Docker compose services for Front-End y Back-End:

```bash
############ Make sure all .json files mapped from node-red to its service folder before continue ############

# Create global WSL configuration .wslconfig file
%ADMIN_USER%/.wslconfig
[wsl2]
memory=2GB # How much memory to assign to the WSL2 VM.
processors=1 # How many processors to assign to the WSL2 VM.
#swap?: Revise this parameter

# To review all host network information
ipconfig/all

# Start docker desktop
Start-Process "C:\Program Files\Docker\Docker\Docker Desktop.exe"

# Stop all running docker containers
docker stop $(docker ps -a -q)

# Remove all containers
docker rm $(docker ps -a -q)

# Remove all images
# UNIX
docker rmi -f $(docker images -aq) # Worked Well
# Powershell
docker images -a -q | % { docker image rm $_ -f }

# Remove docker cache of not used items
docker system prune

# Build docker services of docker-compose.yml file
docker compose up -d

# To stop docker wsl service from running & consumming resources
wsl --shutdown

# To restart wsl service there are two options:

# 1. Manually
tasklist /svc /fi "imagename eq svchost.exe" | findstr LxssManager

Use the ID to End Process Tree and restart WSL in Task Manager

#2. Command Line
Restart-Service LxssManager
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
