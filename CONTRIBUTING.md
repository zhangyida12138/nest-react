# Contributing to this Nest - React project

## Coding styles

As the TypeScript project doesn't issue an "official style guide", this project mostly follows the [Standard JavaScript rules](https://standardjs.com/rules.html) for generic JavaScript declaration, and the [TypeScript book StyleGuide and Coding Conventions](https://basarat.gitbook.io/typescript/styleguide) for TypeScript specific syntax.

As a quick summary, here are the main naming conventions:

- Use `camelCase` for **variable** and **function** names

- Use `PascalCase` for **class**, **interface**, **type** and **enum** names

On top of these simple rules, this repository uses **exclusively named** exports and avoids the default exports for many reasons which are very well summarised in [this blog post](https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/) from the `ESLint` author. For similar reasons and to enable tree-shaking when possible, the "import all" syntax is avoided, replacing ~~`import * as libName from "libName";`~~ by `import { libFunc, libObject } from "libName";`.

## File structure and naming

To ensure we can easily know what a file content is about, we enforce the following rules throughout the codebase:

- **React component** files are named after their main exported component. This is why they are the ONLY files using the `PascalCase` for naming. They also have the `.tsx` extension.

- Each **React component** lives in its own folder, right under the `packages/client/src/components` folder.

- **All other TS** files are named using the `camelCase` convention. On top of that, when a file defines a common type of object, the type is appended to the file name. For example, the `Dictionary` interface is defined in the `dictionary.interface.ts` file, and the `HelloController` class is defined in the `hello.controller.ts`.

## Development tools

### Editorconfig

Editorconfig easily integrates with [many text editors and IDEs](https://editorconfig.org/#download) — some natively, for example:

- VS Code: [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

- Vim / NeoVim: [EditorConfig plugin for Vim](https://github.com/editorconfig/editorconfig-vim)

- JetBrains IDEs: [EditorConfig plugin](https://plugins.jetbrains.com/plugin/7294-editorconfig)

### ESLint

ESLint easily integrates with [many text editors and IDEs](https://eslint.org/docs/user-guide/integrations), for example:

- VS Code: [ESLint for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- Vim / NeoVim:

  - [Ale](https://github.com/dense-analysis/ale)
  - [Syntastic](https://github.com/vim-syntastic/syntastic/tree/master/syntax_checkers/javascript)

- JetBrains IDEs: [ESLint plugin](https://plugins.jetbrains.com/plugin/7494-eslint)

### Prettier

Prettier easily integrates [many text editors and IDEs](https://prettier.io/), for example:

- VS Code: [Prettier for VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- Vim / NeoVim:

  - [Neoformat](https://github.com/sbdchd/neoformat)
  - [Ale](https://github.com/w0rp/ale)
  - [Vim Prettier](https://github.com/prettier/vim-prettier)

- JetBrains IDEs: built-in support

This project has a `.vscode` folder with the following setting to help us have a smooth experience with formatting:

```json
{
  "editor.formatOnSave": true
}
```

Other IDEs and text editors usually offer similar features to help you ensure that the code is automatically formatted the way Prettier expects.

### TypeScript

VS Code and WebStorm both fully support TypeScript natively. For [Vim / NeoVim](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim), here are some tools to help you with the syntax highlighting and syntax error detections, etc.:

- [TypeScript Syntax for Vim](https://github.com/leafgarland/typescript-vim): for syntax highlighting

- [Tsuquyomi](https://github.com/Quramy/tsuquyomi): For essential IDE features like: completion (omni-completion), navigation to the location where a symbol is defined, showing location(s) where a symbol is referenced, displaying a list of syntax and semantics errors to Vim quickfix window, etc.

---

# 为 Nest - React 项目贡献代码

## 编码风格

由于 TypeScript 项目没有发布"官方风格指南"，本项目主要遵循 [Standard JavaScript 规则](https://standardjs.com/rules.html) 用于通用 JavaScript 声明，以及 [TypeScript 书籍风格指南和编码约定](https://basarat.gitbook.io/typescript/styleguide) 用于 TypeScript 特定语法。

快速总结，以下是主要的命名约定：

- 使用 `camelCase` 命名**变量**和**函数**

- 使用 `PascalCase` 命名**类**、**接口**、**类型**和**枚举**

除了这些简单规则外，本仓库**专门使用命名导出**并避免默认导出，原因在 `ESLint` 作者的[这篇博客文章](https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/)中有很好的总结。出于类似原因，为了在可能的情况下启用 tree-shaking，避免使用"全部导入"语法，将 ~~`import * as libName from "libName";`~~ 替换为 `import { libFunc, libObject } from "libName";`。

## 文件结构和命名

为了确保我们能够轻松了解文件内容，我们在整个代码库中强制执行以下规则：

- **React 组件**文件以其主要导出的组件命名。这就是为什么它们是唯一使用 `PascalCase` 命名的文件。它们还具有 `.tsx` 扩展名。

- 每个**React 组件**都位于自己的文件夹中，位于 `packages/client/src/components` 文件夹下。

- **所有其他 TS** 文件使用 `camelCase` 约定命名。此外，当文件定义常见类型的对象时，类型会附加到文件名。例如，`Dictionary` 接口在 `dictionary.interface.ts` 文件中定义，`HelloController` 类在 `hello.controller.ts` 中定义。

## 开发工具

### Editorconfig

Editorconfig 可以轻松集成到[许多文本编辑器和 IDE](https://editorconfig.org/#download) 中——有些是原生支持的，例如：

- VS Code: [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

- Vim / NeoVim: [EditorConfig plugin for Vim](https://github.com/editorconfig/editorconfig-vim)

- JetBrains IDEs: [EditorConfig plugin](https://plugins.jetbrains.com/plugin/7294-editorconfig)

### ESLint

ESLint 可以轻松集成到[许多文本编辑器和 IDE](https://eslint.org/docs/user-guide/integrations) 中，例如：

- VS Code: [ESLint for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- Vim / NeoVim:

  - [Ale](https://github.com/dense-analysis/ale)
  - [Syntastic](https://github.com/vim-syntastic/syntastic/tree/master/syntax_checkers/javascript)

- JetBrains IDEs: [ESLint plugin](https://plugins.jetbrains.com/plugin/7494-eslint)

### Prettier

Prettier 可以轻松集成到[许多文本编辑器和 IDE](https://prettier.io/) 中，例如：

- VS Code: [Prettier for VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- Vim / NeoVim:

  - [Neoformat](https://github.com/sbdchd/neoformat)
  - [Ale](https://github.com/w0rp/ale)
  - [Vim Prettier](https://github.com/prettier/vim-prettier)

- JetBrains IDEs: 内置支持

本项目有一个 `.vscode` 文件夹，包含以下设置，以帮助我们获得流畅的格式化体验：

```json
{
  "editor.formatOnSave": true
}
```

其他 IDE 和文本编辑器通常提供类似功能，帮助您确保代码按照 Prettier 期望的方式自动格式化。

### TypeScript

VS Code 和 WebStorm 都原生完全支持 TypeScript。对于 [Vim / NeoVim](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim)，以下是一些工具，可帮助您进行语法高亮和语法错误检测等：

- [TypeScript Syntax for Vim](https://github.com/leafgarland/typescript-vim): 用于语法高亮

- [Tsuquyomi](https://github.com/Quramy/tsuquyomi): 用于基本 IDE 功能，如：补全（全能补全）、导航到符号定义的位置、显示符号引用的位置、将语法和语义错误列表显示到 Vim quickfix 窗口等。
