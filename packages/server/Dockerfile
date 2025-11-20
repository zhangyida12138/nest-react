# Builder
FROM node:16-alpine as builder

# Install pnpm
RUN npm install -g pnpm@10.22.0

# Copy server and domain + lib packages
WORKDIR /usr/src/nest-react/
COPY .eslintrc .
COPY .eslintignore .
COPY package.json .
COPY tsconfig.json .
COPY pnpm-lock.yaml .
COPY pnpm-workspace.yaml .
COPY scripts/fix-common-package-exports.sh scripts/fix-common-package-exports.sh

COPY packages/server packages/server
COPY packages/domain packages/domain
COPY packages/lib packages/lib

# Install domain + lib + server dependencies
RUN pnpm install --frozen-lockfile

# Build common packages
RUN pnpm build:common

# Build server then
WORKDIR /usr/src/nest-react/packages/server
RUN pnpm build

# Runner
FROM node:16-alpine AS runner

# Install pnpm
RUN npm install -g pnpm@10.22.0

WORKDIR /usr/src/nest-react
COPY VERSION .

# Copy the dist builds from builder
COPY --from=builder /usr/src/nest-react/package.json .
COPY --from=builder /usr/src/nest-react/pnpm-lock.yaml .
COPY --from=builder /usr/src/nest-react/pnpm-workspace.yaml .
COPY --from=builder /usr/src/nest-react/tsconfig.json .

COPY --from=builder /usr/src/nest-react/packages/domain/package.json packages/domain/package.json
COPY --from=builder /usr/src/nest-react/packages/domain/dist packages/domain/dist

COPY --from=builder /usr/src/nest-react/packages/lib/package.json packages/lib/package.json
COPY --from=builder /usr/src/nest-react/packages/lib/dist packages/lib/dist

COPY --from=builder /usr/src/nest-react/packages/server/package.json packages/server/package.json
COPY --from=builder /usr/src/nest-react/packages/server/dist packages/server/dist

# Install production dependencies
RUN pnpm install --frozen-lockfile --prod

# Move to the server app
WORKDIR /usr/src/nest-react/packages/server

# Set the correct ownership for the app folder
RUN chown -R node:node /usr/src/nest-react/packages/server/

# Launch the server with container
ARG NODE_ENV=production
CMD ["pnpm", "start:prod"]
