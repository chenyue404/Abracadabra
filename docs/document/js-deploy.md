# JavaScript 部署

使用 npm 下载 Abracadabra 库。

```sh
npm install abracadabra-cn
```

然后，在项目中引入库文件

```js
import { Abracadabra } from "abracadabra-cn";
```

如果你想在网页中全量引入本库，可以导入 `abracadabra-cn.umd.cjs`  
在网页上直接引用，请看 [**网页引用**](#网页引用) 一节。

## JavaScript 类型接口

Abracadabra 库仅包含一个类型，即`Abracadabra`

使用前，你需要实例化该类型，实例化时需要两个参数来指定输入输出的方式，如果不附带参数，则自动使用默认值 `TEXT`。

```js
import { Abracadabra } from "abracadabra-cn";

let Abra = new Abracadabra(); //不附带参数，

/*
Abracadabra.TEXT = "TEXT"
Abracadabra.UINT8 = "UINT8"
*/
let Abra = new Abracadabra(InputMode, OutputMode);
//参数必须是上述二者中的一个，传入其他值会导致错误。
```

`TEXT` 表明将来的输入/输出为 `String`，`UINT8` 表明将来的输入/输出为 `Uint8Array`，你可以灵活使用两种不同的类型。

### Input() 传统加密函数

Abracadabra 库中仅有三个方法，`Input()` 是其中一个。

```js
import { Abracadabra } from "abracadabra-cn";

let Abra = new Abracadabra(); //不附带参数，

/*
MODES:

Abracadabra.ENCRYPT = "ENCRYPT";
强制加密

Abracadabra.DECRYPT = "DECRYPT";
强制解密

Abracadabra.AUTO = "AUTO";
自动(遵循自动逻辑)

*/
Abra.Input(input, mode, key, q);
```

第一个参数 `input` 接受两种类型的输入，分别是 `String` 和 `Uint8Array`，这是此前在实例化的时候指定的输入类型。

如果你指定了 `UINT8` 却传入 `String`，将抛出错误，反之亦然。

第二个参数 `mode` 接受上文中特定字符串的输入，任何其他输入都将被视为 `AUTO` 并被忽略。

第三个参数 `key` 接受字符串类型的密钥输入，如果不提供，则默认使用内置密钥 `ABRACADABRA`。

如果指定了错误的密码，那么在解码/解密数据校验过程中会抛出错误。

第四个参数 `q` 接受布尔值的输入，如果传入 `true`，则加密结果中将不含标志位，更加隐蔽，但解密时需要强制解密。

在无错误的情况下， `Input()` 函数的返回值通常是 `0`。

### Input_Next() 文言仿真加密函数

`Input_Next()` 函数用来对数据执行文言文仿真加密。

```js
import { Abracadabra } from "abracadabra-cn";

let Abra = new Abracadabra(); //不附带参数，

/*
MODES:

Abracadabra.ENCRYPT = "ENCRYPT";
强制加密

Abracadabra.DECRYPT = "DECRYPT";
强制解密

*/
Abra.Input_Next(input, mode, key, q, r, p, l);
```

第一个参数 `input` 接受两种类型的输入，分别是 `String` 和 `Uint8Array`，这是此前在实例化的时候指定的输入类型。

如果你指定了 `UINT8` 却传入 `String`，将抛出错误，反之亦然。

第二个参数 `mode` 接受上文中特定字符串的输入，任何其他输入都将被忽略，不会输出任何结果。

第三个参数 `key` 接受字符串类型的密钥输入，如果不提供，则默认使用内置密钥 `ABRACADABRA`。

如果指定了错误的密码，那么在解码/解密数据校验过程中会抛出错误。

第四个参数 `q` 接受布尔值的输入，默认为 `true`。如果传入 `false`，则加密结果中将不含标点符号，解密时可以忽略这个参数。

第五个参数 `r` 接受整数值的输入，默认为`50`，最小值`0`，最大值`100`，超过 100 的输入将会报错。输入值越大，载荷量选择算法的随机性越大；输入值为 0 时，句式选择步骤将只选择载荷字较多的那个。解密时可以忽略这个参数。

第六个参数 `p` 接受布尔值的输入，默认为 `false`。如果传入 `true`，则加密结果会优先使用骈文句式，呈现四字到五字一组的对仗格律，这有助于减少密文的总体长度。解密时可以忽略这个参数。

第七个参数 `l` 接受布尔值的输入，默认为 `false`。如果传入 `true`，则加密结果会优先使用逻辑句式，呈现强论述类逻辑风格。解密时可以忽略这个参数。

`p` 和 `l` 不能同时指定为 `true`，否则会抛出错误。

在无错误的情况下， `Input_Next()` 函数的返回值通常是 `0`。

### Output()

```js
import { Abracadabra } from "abracadabra-cn";

let Abra = new Abracadabra(); //不附带参数，

Abra.Input(input, mode, key, q);

let Result = Abra.Output(); //获取输出
```

在调用 `Output()` 之前，你需要至少调用过一次 `Input()`，否则将会抛出错误。

调用 `Output()` 将获得此前输入的处理结果，其返回类型可能是 `String` 或 `Uint8Array`，取决于对象实例化时指定了何种输出模式。

## 网页引用

绕过 NPM 和包管理，你也可以直接在任意网页上直接引用本项目。

在 Release 处下载 `.umd.cjs` 文件，放到自定义位置，然后在网页 `<head>` 标签添加引用：

```html
<script src="<path>/abracadabra-cn.umd.cjs"></script>
```

在网页的其他地方调用脚本接口，可以这么写：

```html
<script>
  let Abra = new window["abracadabra-cn"].Abracadabra(InputMode, OutputMode);

  //此后的调用方法，和前述调用方法没有差别，直接使用此实例化对象即可。
  //故不做过多赘述。
</script>
```

在实例化对象之后，其余的调用方法请见上一节。

## 自行编译

如果你想要自行编译 JavaScript 库文件，请克隆 main 分支到本地。  
安装 `npm` 并配置恰当的环境。

安装编译和调试依赖：

```sh
npm install
```

然后执行编译指令：

```sh
npm run build
```

如果你对密码映射表做出了修改，那么请确保将 JSON 压缩成一行，转义成字符串。  
然后修改 `utils.js`(传统加密) 或者 `utils_next.js`(文言加密)：

```js
const Map = "...."; // 字符串内填密码映射表
```

在执行编译时，会自动对文言文密本中的句式语法执行检查，如果有问题，则会报错并提示编译失败。  
如果你想要单独运行检查，可以执行：

```sh
npm run test
```
