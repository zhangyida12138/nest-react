# Nest - React boilerplate

This is a basic boilerplate to quickly set up a web application **fully written in [TypeScript](https://www.typescriptlang.org/)** (^4.7.4) based on:

- [NestJS](https://nestjs.com/) (^9.0.11) for the **server**: [> Go to the server package](./packages/server)

  > _« A progressive Node.js framework for building efficient, reliable and scalable server-side applications. »_

- [React + ReactDOM](https://reactjs.org/) (^18.2.0) for the **client**: [> Go to the client package](./packages/client)

  > _« A JavaScript library for building user interfaces »_

- [Vite](https://vitejs.dev/) (^3.0.9): Based on ESBuild and Rollup, this tool combines speed, performance and configurability to offer the best frontend DX possible

  > _« Next Generation Frontend Tooling »_

## Features

While being minimalistic, this boilerplate offers a number of features which can be very valuable for the Development Experience (DX):

### Global

- Makes use of [pnpm workspaces](https://pnpm.io/workspaces) to centralise the package management system for all the internal packages.

- TypeScript ^4.7.4 which comes with, for example, **optional chaining** and customised [import paths](#typescript-import-paths) already defined for each package.

- EditorConfig + Prettier for [code formatting](#code-formatting).

- Full ESLint configurations for [linting](#linting).

- Consistent coding style following the standards. See [CONTRIBUTING](./CONTRIBUTING.md#coding-styles).

- Development scripts: `pnpm start:dev` can be run in any package. See [Development & builds](#development--builds) for more information.

- Visual Studio Code [debug settings](.vscode/launch.json).

### Client

- [Vite's Hot Module Replacement](https://vitejs.dev/guide/features.html#hot-module-replacement) combined with the [React Fast Refresh](https://github.com/facebook/react/tree/main/packages/react-refresh) offers an incredibly fast development process. When you edit and save a source file, it will only reload the corresponding module in the development server AND only **re-render the depending components without losing their state**!

- Debugger tool so you can avoid using the native but synchronous and greed `console`'s methods. For more information, see the client README section about the [Debug library](./packages/client#debug-library).

- Production ready [NGINX](https://nginx.org/) configuration example to optimise your frontend file delivery.

- Production ready [Dockerfile](#docker-images).

### Server

- NestJS basic package with all the Nest tools. See the [server README](./packages/server/) for more information.

- A predefined **global config module** to handle all the configuration you would like to pass to your server at runtime. You can lean more in the server's README [Configuration module](./packages/server/README.md#configuration-module) section.

- Production ready [Dockerfile](#docker-images).

### Client/Server versions

While being minimalistic, this boilerplate provides straight-forward access to the client's or version's deployed version:

1. To check the server's version, simply call the [`/version`](http://localhost:4000/version) endpoint which returns a JSON looking like this:

   ```json
   {
     "GIT_SHORT_HASH": "568cfad",
     "GIT_BRANCH": "master",
     "REPO_VERSION": "1.0.0",
     "DOMAIN_VERSION": "1.0.0",
     "LIB_VERSION": "1.0.0",
     "SERVER_VERSION": "1.0.0"
   }
   ```

2. To identify the client's deployed version, you can see the page's source code and look for the JS bundle name, which should look like: `index.39a2462@master.c177f4e7.js`. This corresponds to the pattern passed in the [`vite.config.ts`](./packages/client/vite.config.ts) file: `[name].${getBuildId()}.[hash].js`. Currently, the `buildId` is defined as `shortHash@branch` but you can adapt the `getBuildId` function to your needs.

3. Since the two applications are supposed to be deployed as separate Docker images, this boilerplate comes with a simple function embedded in the frontend: [`checkServerVersion`](./packages/client/src/utils/checkServerVersion.ts). If the server version doesn't satisfy the frontend **peer dependency**, an error message will be printed in the frontend console (using the debug library).

---

## How to use this boilerplate

First, you'll need to download and adapt it to your project:

1. You can use the [Use this template](https://github.com/LandazuriPaul/nest-react/generate) feature from GitHub to generate a new project based on this boilerplate. Alternatively, you can clone this repository to a brand new folder named after your `new-project`:

   ```sh
   git clone git@github.com:LandazuriPaul/nest-react.git new-project
   ```

> For steps 2 to 5, a global `search in all files` command from any decent editor should help. You can simply search for `nest-react` and replace it by your `new-project`.

2. Change the main project's name, set in the root [`package.json`](./package.json)'s `name` field and in its `scripts` commands.

3. Change each package's name, set in its own `package.json`'s `name` field.

4. Update the `dependencies` of each package requiring one of the internal packages:

   - Server: [`package.json`](./packages/server/package.json)
   - Client: [`package.json`](./packages/client/package.json)

5. Change the client debug `LOGGER_PREFIX` which is set in the [`config.ts`](./packages/client/src/config.ts) file. For more information, see the client README section about the [Debug library](./packages/client#debug-library).

6. Adapt the [`packages/client/public`](./packages/client/public) folder to your project (with your icons, manifest, robots.txt files).

### Project installation

Once you're done with the previous steps, you can properly install the project dependencies and link the packages together:

1. Basic requirements to run the repository:

   - [Node.js](https://nodejs.org/en/): The recommended way is via [`nvm`](https://github.com/nvm-sh/nvm). You can then install the version used for this project:
     ```sh
     nvm install 16.16.0
     ```
   - [pnpm](https://pnpm.io/): If you have `nvm` installed, you can install pnpm globally:
     ```sh
     npm install -g pnpm
     ```

   > As the boilerplate makes use of pnpm workspaces, you shouldn't use `npm` or `yarn`.

2. Install dependencies with the classic:

   ```sh
   pnpm install
   ```

   > This will install all package dependencies in a common `node_modules` folder at the root of the project using a single `pnpm-lock.yaml` file to avoid conflicting dependencies. The internal dependencies will be replaced by symbolic links to the corresponding packages.

3. Finally, in order to have the "common" packages (`lib` and `domain`) built so they can be used by both the `server` and the `client`, run:

   ```sh
   pnpm build:common
   ```

   Or if you want the common packages to be **watched for file changes**, you can run:

   ```sh
   pnpm start:common
   ```

#### Note about subsequent installations

When you want to add new dependencies to any of the packages, you can either:

- Run `pnpm add <new-package1> <new-package2>` in the corresponding package folder.
- Or run `pnpm --filter <YOUR_PACKAGE_NAME> add <new-package1> <new-package2>` from the root folder.

### Development & Builds

See each package's README to learn more about its development and build scripts:

- [Client](./packages/client/README.md)

- [Server](./packages/server/README.md)

---

## Code formatting

- [EditorConfig](https://editorconfig.org/): _« helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs. »_

  - Rules are set in the root [`.editorconfig`](./.editorconfig) file.

- [Prettier](https://prettier.io/) (^1.19.1): _« An opinionated code formatter »_ which _« saves you time and energy »_.

  - Rules are set in the root [`.prettierrc`](./.prettierrc) file.

## Linting

[ESLint](https://eslint.org/) (^8.22.0) with [TypeScript parser](https://github.com/typescript-eslint/typescript-eslint) (^5.33.1): _« Find and fix problems in your JavaScript code »_

- Project rules are set in the root [`.eslintrc`](./.eslintrc) file.

- As the client package requires specific React related rules, it has its own [`.eslintrc`](./packages/client/.eslintrc) file which extends the project one.

To see how to integrates these tools with your favourite IDE or text editor, you can see the CONTRIBUTING [Development tools](./CONTRIBUTING.md#development-tools) section.

Each package has its own

```sh
pnpm lint
```

command to ensure that its source code is written according to the ESLint rules. The project itself also has a root `pnpm lint` command to sequentially run it in each internal package.

## TypeScript import paths

As you can see in all packages' `tsconfig.json` files, both the `baseUrl` and `paths` properties are defined to help you avoid the cumbersome and error-prone `../../` import paths (amongst other options):

```json
// packages' tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "dist",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}
```

This allows you to `import` any file from the **same package** with the `'~/path/to/file/'` notation, considering the `src` folder as the package's _home_ (i.e. `~`).

## Docker images

This project comes with a `Dockerfile` for each package likely to be deployed. They are all based on the [alpine](https://alpinelinux.org/) project.

To build the corresponding Docker images, you can use the [build_and_push.sh](./scripts/build_and_push.sh) script by setting the `PACKAGE` and optionally the `VERSION` — defaults to `latest` — as environment variables or simply use the dedicated `pnpm` commands (the `latest` version will be applied):

```sh
# To build and push the server
pnpm build-push:server

# To build and push the client
pnpm build-push:client
```

## Deployment

The shipped [`docker-compose.yml`](./docker-compose.yml) file is mainly for demonstration purposes and local testing.

In order to run the applications in a completely containerised environment, please refer to the [Docker documentation](https://docs.docker.com/).

## Improvements

- #TODO: Add an automated script to run installation steps 2 to 5.

## License

This project is licensed under the [GNU Lesser General Public License v3.0 or later](https://spdx.org/licenses/LGPL-3.0-or-later.html). You can learn more reading the [LICENSE](./LICENSE).

## Author

Ike

---

# Nest - React 模板

这是一个基本的模板，用于快速设置一个**完全使用 [TypeScript](https://www.typescriptlang.org/)** (^4.7.4) 编写的 Web 应用程序，基于：

- [NestJS](https://nestjs.com/) (^9.0.11) 用于**服务器端**：[> 前往服务器包](./packages/server)

  > _« 一个用于构建高效、可靠和可扩展的服务器端应用程序的渐进式 Node.js 框架。»_

- [React + ReactDOM](https://reactjs.org/) (^18.2.0) 用于**客户端**：[> 前往客户端包](./packages/client)

  > _« 一个用于构建用户界面的 JavaScript 库 »_

- [Vite](https://vitejs.dev/) (^3.0.9)：基于 ESBuild 和 Rollup，该工具结合了速度、性能和可配置性，提供最佳的前端开发体验

  > _« 下一代前端工具 »_

## 特性

虽然简洁，但此模板提供了许多对开发体验（DX）非常有价值的功能：

### 全局

- 使用 [pnpm workspaces](https://pnpm.io/workspaces) 集中管理所有内部包的包管理系统。

- TypeScript ^4.7.4，例如，包含**可选链**和已为每个包定义的定制化[导入路径](#typescript-import-paths)。

- EditorConfig + Prettier 用于[代码格式化](#code-formatting)。

- 完整的 ESLint 配置用于[代码检查](#linting)。

- 遵循标准的统一编码风格。参见 [CONTRIBUTING](./CONTRIBUTING.md#coding-styles)。

- 开发脚本：`pnpm start:dev` 可以在任何包中运行。更多信息请参见[开发与构建](#development--builds)。

- Visual Studio Code [调试设置](.vscode/launch.json)。

### 客户端

- [Vite 的热模块替换](https://vitejs.dev/guide/features.html#hot-module-replacement) 结合 [React Fast Refresh](https://github.com/facebook/react/tree/main/packages/react-refresh) 提供了极快的开发流程。当您编辑并保存源文件时，它只会在开发服务器中重新加载相应的模块，并且只**重新渲染依赖的组件而不丢失它们的状态**！

- 调试工具，因此您可以避免使用原生但同步且贪婪的 `console` 方法。更多信息，请参见客户端 README 中关于[调试库](./packages/client#debug-library)的部分。

- 生产就绪的 [NGINX](https://nginx.org/) 配置示例，以优化您的前端文件交付。

- 生产就绪的 [Dockerfile](#docker-images)。

### 服务器

- NestJS 基础包，包含所有 Nest 工具。更多信息请参见[服务器 README](./packages/server/)。

- 预定义的**全局配置模块**，用于处理您希望在运行时传递给服务器的所有配置。您可以在服务器的 README [配置模块](./packages/server/README.md#configuration-module) 部分了解更多信息。

- 生产就绪的 [Dockerfile](#docker-images)。

### 客户端/服务器版本

虽然简洁，但此模板提供了直接访问客户端或服务器部署版本的方式：

1. 要检查服务器版本，只需调用 [`/version`](http://localhost:4000/version) 端点，它返回如下所示的 JSON：

   ```json
   {
     "GIT_SHORT_HASH": "568cfad",
     "GIT_BRANCH": "master",
     "REPO_VERSION": "1.0.0",
     "DOMAIN_VERSION": "1.0.0",
     "LIB_VERSION": "1.0.0",
     "SERVER_VERSION": "1.0.0"
   }
   ```

2. 要识别客户端的部署版本，您可以查看页面的源代码并查找 JS 包名称，应该类似于：`index.39a2462@master.c177f4e7.js`。这对应于 [`vite.config.ts`](./packages/client/vite.config.ts) 文件中传递的模式：`[name].${getBuildId()}.[hash].js`。目前，`buildId` 定义为 `shortHash@branch`，但您可以根据需要调整 `getBuildId` 函数。

3. 由于两个应用程序应该作为独立的 Docker 镜像部署，此模板在前端嵌入了一个简单的函数：[`checkServerVersion`](./packages/client/src/utils/checkServerVersion.ts)。如果服务器版本不满足前端的**对等依赖**，将在前端控制台（使用调试库）打印错误消息。

---

## 如何使用此模板

首先，您需要下载并使其适应您的项目：

1. 您可以使用 GitHub 的[使用此模板](https://github.com/LandazuriPaul/nest-react/generate)功能基于此模板生成新项目。或者，您可以将此仓库克隆到一个以您的 `new-project` 命名的新文件夹：

   ```sh
   git clone git@github.com:LandazuriPaul/nest-react.git new-project
   ```

> 对于步骤 2 到 5，任何像样的编辑器的全局"在所有文件中搜索"命令应该会有所帮助。您可以简单地搜索 `nest-react` 并将其替换为您的 `new-project`。

2. 更改主项目名称，设置在根 [`package.json`](./package.json) 的 `name` 字段及其 `scripts` 命令中。

3. 更改每个包的名称，设置在其自己的 `package.json` 的 `name` 字段中。

4. 更新每个需要内部包之一的包的 `dependencies`：

   - 服务器：[`package.json`](./packages/server/package.json)
   - 客户端：[`package.json`](./packages/client/package.json)

5. 更改客户端调试 `LOGGER_PREFIX`，它设置在 [`config.ts`](./packages/client/src/config.ts) 文件中。更多信息，请参见客户端 README 中关于[调试库](./packages/client#debug-library)的部分。

6. 使 [`packages/client/public`](./packages/client/public) 文件夹适应您的项目（使用您的图标、清单、robots.txt 文件）。

### 项目安装

完成前面的步骤后，您可以正确安装项目依赖并将包链接在一起：

1. 运行仓库的基本要求：

   - [Node.js](https://nodejs.org/en/)：推荐的方式是通过 [`nvm`](https://github.com/nvm-sh/nvm)。然后您可以安装此项目使用的版本：
     ```sh
     nvm install 16.16.0
     ```
   - [pnpm](https://pnpm.io/)：如果您安装了 `nvm`，可以全局安装 pnpm：
     ```sh
     npm install -g pnpm
     ```

   > 由于模板使用 pnpm workspaces，您不应使用 `npm` 或 `yarn`。

2. 使用经典方式安装依赖：

   ```sh
   pnpm install
   ```

   > 这将在项目根目录的公共 `node_modules` 文件夹中安装所有包依赖，使用单个 `pnpm-lock.yaml` 文件以避免依赖冲突。内部依赖将被替换为相应包的符号链接。

3. 最后，为了构建"公共"包（`lib` 和 `domain`），以便它们可以被 `server` 和 `client` 使用，运行：

   ```sh
   pnpm build:common
   ```

   或者，如果您希望公共包**监视文件更改**，可以运行：

   ```sh
   pnpm start:common
   ```

#### 关于后续安装的说明

当您想向任何包添加新依赖时，您可以：

- 在相应的包文件夹中运行 `pnpm add <new-package1> <new-package2>`。
- 或者从根文件夹运行 `pnpm --filter <YOUR_PACKAGE_NAME> add <new-package1> <new-package2>`。

### 开发与构建

请参见每个包的 README 以了解更多关于其开发和构建脚本的信息：

- [客户端](./packages/client/README.md)

- [服务器](./packages/server/README.md)

---

## 代码格式化

- [EditorConfig](https://editorconfig.org/)：_« 帮助维护多个开发人员在不同编辑器和 IDE 中处理同一项目时的一致编码风格。»_

  - 规则设置在根 [`.editorconfig`](./.editorconfig) 文件中。

- [Prettier](https://prettier.io/) (^1.19.1)：_« 一个固执己见的代码格式化工具 »_，它*« 为您节省时间和精力 »*。

  - 规则设置在根 [`.prettierrc`](./.prettierrc) 文件中。

## 代码检查

[ESLint](https://eslint.org/) (^8.22.0) 与 [TypeScript 解析器](https://github.com/typescript-eslint/typescript-eslint) (^5.33.1)：_« 查找并修复 JavaScript 代码中的问题 »_

- 项目规则设置在根 [`.eslintrc`](./.eslintrc) 文件中。

- 由于客户端包需要特定的 React 相关规则，它有自己的 [`.eslintrc`](./packages/client/.eslintrc) 文件，该文件扩展了项目文件。

要了解如何将这些工具与您喜欢的 IDE 或文本编辑器集成，您可以查看 CONTRIBUTING [开发工具](./CONTRIBUTING.md#development-tools) 部分。

每个包都有自己的

```sh
pnpm lint
```

命令，以确保其源代码按照 ESLint 规则编写。项目本身也有一个根 `pnpm lint` 命令，用于在每个内部包中顺序运行它。

## TypeScript 导入路径

正如您在所有包的 `tsconfig.json` 文件中看到的，`baseUrl` 和 `paths` 属性都已定义，以帮助您避免繁琐且容易出错的 `../../` 导入路径（以及其他选项）：

```json
// packages' tsconfig.json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "dist",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}
```

这允许您使用 `'~/path/to/file/'` 表示法从**同一包**中 `import` 任何文件，将 `src` 文件夹视为包的*主目录*（即 `~`）。

## Docker 镜像

此项目为每个可能部署的包提供了一个 `Dockerfile`。它们都基于 [alpine](https://alpinelinux.org/) 项目。

要构建相应的 Docker 镜像，您可以通过设置 `PACKAGE` 和可选的 `VERSION`（默认为 `latest`）作为环境变量来使用 [build_and_push.sh](./scripts/build_and_push.sh) 脚本，或者简单地使用专用的 `pnpm` 命令（将应用 `latest` 版本）：

```sh
# 构建并推送服务器
pnpm build-push:server

# 构建并推送客户端
pnpm build-push:client
```

## 部署

提供的 [`docker-compose.yml`](./docker-compose.yml) 文件主要用于演示目的和本地测试。

为了在完全容器化的环境中运行应用程序，请参考 [Docker 文档](https://docs.docker.com/)。

## 改进

- #TODO: 添加自动化脚本以运行安装步骤 2 到 5。

## 许可证

此项目根据 [GNU Lesser General Public License v3.0 或更高版本](https://spdx.org/licenses/LGPL-3.0-or-later.html) 许可。您可以通过阅读 [LICENSE](./LICENSE) 了解更多信息。

## 作者

Ike
