VSCode 使用 EditorConfig 需要去插件市场下载插件 EditorConfig for VS Code 。

VSCode 使用 Prettier 配置需要下载插件 Prettier - Code formatter 。

VSCode 使用 ESLint 配置文件需要去插件市场下载插件 ESLint 。

VSCode 禁用 vetur 插件, 使用 Vue Language Features (Volar)管理 vue 文件, 需要去插件市场下载插件 Vue Language Features (Volar) 。

VSCode settings.json 中的 配置: {
"editor.tabSize": 2,
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
}
}

.editorconfig、.prettierrc、.eslintrc.js 都是选用 GitHub 上 star 最多配置, 不要随意修改.

每个模块的文件放在 src/modules 下面,每新加一个模块,需要在 config 里面配置一下对应模块的入口文件等,在 envs 里面配置环境变量.
根据编译命令会自动去查找对应的模块,然后编译.

npx prettier --write . # 自动格式化全部代码
