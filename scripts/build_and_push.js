const { execSync } = require('child_process')
const path = require('path')

const DIR = __dirname
const PACKAGE = process.env.PACKAGE
const VERSION = process.env.VERSION || 'latest'

if (!PACKAGE) {
  console.error('You must specify a PACKAGE name (server or client) as an environment, e.g.: PACKAGE=server')
  process.exit(1)
}

// Generate VERSION file
try {
  execSync(`node ${path.join(DIR, 'generate_version.js')}`, { stdio: 'inherit' })
} catch (error) {
  console.error('Failed to generate version file:', error.message)
  process.exit(1)
}

const DOCKER_IMAGE = `docker.pkg.github.com/landazuripaul/nest-react/nest-react-${PACKAGE}:${VERSION}`

console.log(`> Building the Docker image: ${DOCKER_IMAGE} ...`)

try {
  execSync(
    `docker build -f ./packages/${PACKAGE}/Dockerfile -t ${DOCKER_IMAGE} .`,
    { stdio: 'inherit', env: { ...process.env, DOCKER_BUILDKIT: '1' } }
  )

  console.log('\n\n> Sending built image to the registry...')
  execSync(`docker push ${DOCKER_IMAGE}`, { stdio: 'inherit' })
} catch (error) {
  console.error('Docker build/push failed:', error.message)
  process.exit(1)
}

