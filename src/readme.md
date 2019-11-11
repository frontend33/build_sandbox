```npm init ```
```npm i --save-dev @babel/core @babel/cli  ```
```npx babel src --out-dir build```

``` npm i --save-dev @babel/plugin-transform-template-literals```
``` npm install --save-dev @babel/preset-env ```

*** Поддержка браузеров ***
babel-preset-env позволяет указать список браузеров, на которых должен запускаться код
Следует избегать лишних трасформаций (не преображать то, что и так поддерживается)
