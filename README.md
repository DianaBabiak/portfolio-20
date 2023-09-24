# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

font-family: 'Comfortaa', cursive;
font-family: 'Nunito', sans-serif;
font-family: 'Playfair Display', serif;
font-family: 'Raleway', sans-serif;
font-family: 'Roboto', sans-serif;


wrapperIcon - далить из файла App.css и вообще удалить этот файл
.app - удалить из index.css и сделать как компоненту
arrayTitleMenu - вынести в константы
container - удалить этот стиль и сделать отдельную компоненту
color: #333; - use constant
MainBg - rename
использовать flex-wrap для иконок в компоненте skills или grid
discretion -переименовать
в buttonLink type={"project"} попытаться переделать, чтобы не привязываться к разделу (как пример посмотреть пропсы в MUI)
StyledImgProject ->StyledProjectImg
в компоненте InformationAboutProjectPropsType группировать пропсы по компонентам, где они используются
ContactFieldPropsType прпс title переименовать в label
создать компонент Input который будет возвращать инпут по типу переданному. это можно использовать в компоненте ContactField чтобы уменьшить код
компонента ImgProject нигде не используется
в Footer компоненте для иконок использовать массив данных и потом при помощи map отрисовать, чтобы уменьшить кол-во кода
пофиксить ховер на кнопке
шрифты добавить в константы

img padding main
section make component???????? at the end project