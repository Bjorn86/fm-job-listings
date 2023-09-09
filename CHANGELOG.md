# Изменения в сборку

- `src/.storybook/preview.js` - добавлен импорт `import "../src/index.scss";`
- `public/index.html` - изменён путь к favicon `href="%PUBLIC_URL%/favicon.ico"`
- установлен модуль `@babel/plugin-proposal-private-property-in-object` для избавления от ошибки, о том что он может быть потерян, так как перестал использоваться
- удалён модуль ознакомления со Storybook `@storybook/addon-onboarding`
- добавлен конфигурационный файл `.prettierrc.json`
