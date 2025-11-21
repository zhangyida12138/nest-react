const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// Constants
const VERSION_FILENAME = path.join(process.cwd(), 'VERSION')
const DIR = __dirname

// Git info
let GIT_SHORT_HASH = ''
let GIT_BRANCH = ''

try {
  GIT_SHORT_HASH = execSync('git rev-parse --short HEAD', { encoding: 'utf-8' }).trim()
  GIT_BRANCH = execSync('git branch --show-current', { encoding: 'utf-8' }).trim()
} catch (error) {
  console.warn('Warning: Could not get git information:', error.message)
  GIT_SHORT_HASH = 'unknown'
  GIT_BRANCH = 'unknown'
}

// Packages info
const REPO_VERSION = execSync(`node ${path.join(DIR, 'getPackageVersion.js')}`, { encoding: 'utf-8' }).trim()
const CLIENT_VERSION = execSync(`node ${path.join(DIR, 'getPackageVersion.js')} client`, { encoding: 'utf-8' }).trim()
const DOMAIN_VERSION = execSync(`node ${path.join(DIR, 'getPackageVersion.js')} domain`, { encoding: 'utf-8' }).trim()
const LIB_VERSION = execSync(`node ${path.join(DIR, 'getPackageVersion.js')} lib`, { encoding: 'utf-8' }).trim()
const SERVER_VERSION = execSync(`node ${path.join(DIR, 'getPackageVersion.js')} server`, { encoding: 'utf-8' }).trim()

const versionContent = `GIT_SHORT_HASH=${GIT_SHORT_HASH}
GIT_BRANCH=${GIT_BRANCH}
REPO_VERSION=${REPO_VERSION}
CLIENT_VERSION=${CLIENT_VERSION}
DOMAIN_VERSION=${DOMAIN_VERSION}
LIB_VERSION=${LIB_VERSION}
SERVER_VERSION=${SERVER_VERSION}
`

fs.writeFileSync(VERSION_FILENAME, versionContent)
console.log(`> ${VERSION_FILENAME} file generated`)

