install webpack
```npm i --save-dev webpack webpack-cli```
Запусе webpack
```  npx webpack --mode development ``` без минифирования в режиме дев
development, production

***Файл конфигурации webpack***
 webpack.config.js файл конфигурации
 Файл исполняется в среде Node js
 Самая простая конфигурация


***Webpack loader***
``` npm i --save-dev file-loader ```
Чтобы загружать любые файлы кроме js в webpack нужно использовать loader- loader обычные npm пакеты которые можно загружать как обычные npm пакеты
Webpack Обрабатывает файлы при помощи loader (npm модули)

```
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.png$/,
        use: [{ loader: "file-loader" }]
      }
    ]
  }
};
```


***Конфигурация Loader'ов***

Большинство loader'ов можно конфигурировать, используя блок options 
``` 
use: [{ 
    loader: "file-loader",
    options: {
        outputPath: 'images',
        name: '[name]-[sha1:hash:7].[ext]'
    }
}]

```
***Разные типы файлов***
Один loader можно использовать для разных расширений
```test: /\.(ttf|otf|eot|woff|woff2)$/```
Разные типы файлов (пример шрифты и изображения лучше размещать в разных блоках use, даже если они используют один loader)

