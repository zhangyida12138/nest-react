const fs = require('fs')
const path = require('path')

const distPath = path.join(__dirname, '..', 'packages', 'domain', 'dist')

// 确保目录存在
const cjsDir = path.join(distPath, 'cjs')
const mjsDir = path.join(distPath, 'mjs')

if (!fs.existsSync(cjsDir)) {
  fs.mkdirSync(cjsDir, { recursive: true })
}
if (!fs.existsSync(mjsDir)) {
  fs.mkdirSync(mjsDir, { recursive: true })
}

// 创建 dist/cjs/package.json
const cjsPackageJson = { type: 'commonjs' }
fs.writeFileSync(
  path.join(cjsDir, 'package.json'),
  JSON.stringify(cjsPackageJson, null, 2) + '\n'
)

// 创建 dist/mjs/package.json
const mjsPackageJson = { type: 'module' }
fs.writeFileSync(
  path.join(mjsDir, 'package.json'),
  JSON.stringify(mjsPackageJson, null, 2) + '\n'
)

