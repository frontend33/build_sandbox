```npm init ```
```npm i --save-dev @babel/core @babel/cli  ```
```npx babel src --out-dir build```

``` npm i --save-dev @babel/plugin-transform-template-literals```
``` npm install --save-dev @babel/preset-env ```

*** Поддержка браузеров ***
babel-preset-env позволяет указать список браузеров, на которых должен запускаться код
Следует избегать лишних трасформаций (не преображать то, что и так поддерживается)
Позволяет использовать выражения, чтобы описать список браузеров
browserlist отвечает за парсинг выражений
```"targets": ["last 2 chrome versions", " > 0.3%"]```
Добавив к конфигурации babel-preset-env флаг debug: true, можно получить детальную информацию о бразуерах и трансформациях
<!-- https://browserl.ist/  проверить версию браузера-->


*** Файл конфигурации browserslist ***
Список бразуеров можно хранить в следующих файлах
.babelrc - в настройках preset-env
package.json в блоке browserslist
В файле .browserslistrc в каждой строке по отдельному выражению