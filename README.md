# Abracadabra 魔曰

<div align=center>
<img src="https://github.com/user-attachments/assets/4c6544fe-166b-4572-acd6-cd1d6d3b4ca0" width="20%" height="20%">
</div>

<div align=center>
<h3>Abracadabra 魔曰</h3>

<h3>熔古铸今，韵入密语</h3>
</div>

<div align=center>

[<img src="https://img.shields.io/badge/license-AIPL%201.1-yellow"/>](LICENSE.md)
![JavaScript](https://img.shields.io/badge/lang-JavaScript-orange)
![WASM](https://img.shields.io/badge/binary-WASM-b33bb3)

[<img src="https://img.shields.io/github/v/release/SheepChef/Abracadabra?color=00aaff"/>](https://github.com/SheepChef/Abracadabra/releases/latest)
[<img src="https://img.shields.io/github/actions/workflow/status/SheepChef/Abracadabra/node.js.yml?branch=main&label=%E6%9E%84%E5%BB%BA"/>](https://github.com/SheepChef/Abracadabra/actions/workflows/node.js.yml)
[<img src="https://img.shields.io/codecov/c/github/SheepChef/Abracadabra?label=%E8%A6%86%E7%9B%96%E7%8E%87"/>](https://github.com/SheepChef/Abracadabra/actions/workflows/coverage.yml)
<a href="https://hellogithub.com/repository/6d67b7be3ccc43419924dbe40b31e937" target="_blank"><img src="https://api.hellogithub.com/v1/widgets/recommend.svg?rid=6d67b7be3ccc43419924dbe40b31e937&claim_uid=cQrPYdpGNg4ACK6&theme=small" alt="Featured｜HelloGitHub" /></a>
![GitHub Repo stars](https://img.shields.io/github/stars/SheepChef/Abracadabra)

</div>

<div align=center>

[<img src="https://img.shields.io/badge/立刻使用-ffd91c?logo=cloudflarepages&style=for-the-badge&logoColor=000000" width="170"/>](https://abra.halu.ca/)
[<img src="https://img.shields.io/badge/下载插件-8a54ff?logo=googlechrome&style=for-the-badge&logoColor=ffffff" width="170" />](#浏览器插件)

[<img src="https://img.shields.io/badge/前端源码仓库-9a10b5?style=for-the-badge" width="120" />](https://github.com/SheepChef/Abracadabra_demo)
[<img src="https://img.shields.io/badge/贡献压缩字典-54ffac?style=for-the-badge" width="120" />](https://forms.gle/BBD5McqU6Bws6hiw6)
[<img src="https://img.shields.io/badge/更新频道-0970ba?logo=telegram&style=for-the-badge&logoColor=ffffff" width="118" />](https://t.me/abracadabra_cn)

</div>

**Abracadabra(魔曰)** 是开源，安全，高效的文本加密工具。  
将数据加密为汉字构成的文言文，完全开源，易于部署，易于使用。

---

✨ 查阅 [**快速使用**](#快速使用) 一节，以开始使用/部署本项目。  
✨ 查阅 [**细节和使用指南**](https://github.com/SheepChef/Abracadabra/blob/main/USAGE.md) 以深入了解本项目的细节。  

👉 查阅 [**开放源代码许可**](#开放源代码许可) 一节，了解本项目的依赖项和许可证。

## 特性

- **仿真，使用文言语法句式**。
- 开源，所有源代码公开可查。
- 安全，完全离线的AES加密。
- 可靠，代码经过严格单元测试。
- 便捷，易于本地部署和使用。

<br>
<sub>
<i>

与此同时，魔曰也支持[传统加密](https://github.com/SheepChef/Abracadabra/blob/main/USAGE.md#%E4%BC%A0%E7%BB%9F%E6%A8%A1%E5%BC%8F)。
 
传统加密模式类似熊曰、佛曰、兽音译者等此前流行的算法。

</i>
</sub>

---

###  **熔古铸今：文言文仿真加密**

> 鹏彰于物，不必奏也。捷天谨走，城光益添，和人弥任，铃夜皆写，呈雨以登铃。
>
> 光韵开云，雅于莺茶，停而行之之谓速。是故无悦无谜，无瑞无聪，裳之所走、树之所振也。旧铃之纯水，常为悦水之莹风。人曰：“瑞琴之路，常留于其所允行而不读之处。” 璃非笑而去之者，孰可无鹏。非将选也，非可指也，书非当事涧，仍继叶言，奈何，同森而非航水也，能鸢者益。
>

构造高仿真文言文，**参考《古文观止》《经史百家杂钞》《古文辞类纂》等古代典籍。**  
标准AES256加密，引入更复杂的组句/语法选择机制，将密码和中国古典文言文相融合。

密文高度随机，支持用户自定义随机性和文本风格偏好，打造前所未有的跨文化数字加密方案。

<div style="width: 350px; height: 57px; border: 1px solid #BBBBBB;"><a href="https://ctext.org/zhs"><img src="https://ctext.org/logos/ctplogo6.gif" border="0" alt="中国哲学书电子化计划" /></a></div>

## 快速使用

开发者请查阅 [**部署指南**](DEPLOY.md) 来了解详细部署方法。  
要部署前端网页，请查阅 Release 和前端源代码仓库。

如果你是普通用户，请参考本文下方的内容。

### JavaScript

使用 npm 下载 Abracadabra 库。

你也可以前往 Release 页面直接下载Js文件。

```shell
npm install abracadabra-cn
```

然后，在项目中引入库文件

```javascript
import { Abracadabra } from "abracadabra-cn";
```

### WebAssembly

前往 Release 下载编译好的 WebAssembly 文件。

然后，使用 [**wasmtime**](https://github.com/bytecodealliance/wasmtime) 来调用它。

```shell

echo '{"method":"NEXT","mode":"ENCRYPT","inputType":"TEXT","outputType":"TEXT","input":"愿青空的祝福，与我的羽翼同在","key":"ABRACADABRA","q":true,"r":50,"p":false,"l":false}' | wasmtime abracadabra-cn.wasm

```

本项目的 WebAssembly 模块使用 [**Javy**](https://github.com/bytecodealliance/javy) 编译而来，方便在 C++、Rust、Go 等语言中调用，**不推荐**在类似 Python、 Java、Node.js 的解释器中调用。

要调用本 WebAssembly 模块，需要使用尚在预览状态的 [**WASI**](https://github.com/WebAssembly/WASI)，目前仅有 wasmtime 提供了最完整的 WASI 支持，但它在各个语言的实现并不一致，具体请见 [**部署指南**](DEPLOY.md)。

### 静态页面 / 前端源码

本项目有自动托管在Cloudflare Pages的静态页面可供直接使用。

如果你想自行快速部署这个静态页，可以在Release中下载快速部署文件包。若要自行编译或修改，请前往前端源代码仓库。

浏览器插件的源码同样在前端源代码仓库，位于 crx 分支。

[<img src="https://img.shields.io/badge/静态页面-ffd91c?logo=cloudflarepages&style=for-the-badge&logoColor=000000" width="130"/>](https://abra.halu.ca/)
[<img src="https://img.shields.io/badge/前端源码-9a10b5?style=for-the-badge" width="103" />](https://github.com/SheepChef/Abracadabra_demo)

### 浏览器插件

浏览器插件基于本项目的 JavaScript 实现。

已上架 **Chrome WebStore**, **Edge 加载项** 和 **Firefox 扩展**。

如果不方便访问Chrome插件商店，也可以访问Edge插件商店，和Firefox扩展商店。

[<img src="https://img.shields.io/badge/Chrome 商店-8a54ff?logo=chromewebstore&style=for-the-badge&logoColor=ffffff" width="171" />](https://chrome.google.com/webstore/detail/jgmlgdoefnmlealmfmhjhnoiejaifpko)
[<img src="https://img.shields.io/badge/MSEdge 商店-8a54ff?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMyAyMyI+CiAgICA8cGF0aCBmaWxsPSIjZjNmM2YzIiBkPSJNMCAwaDIzdjIzSDB6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZjM1MzI1IiBkPSJNMSAxaDEwdjEwSDF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjODFiYzA2IiBkPSJNMTIgMWgxMHYxMEgxMnoiLz4KICAgIDxwYXRoIGZpbGw9IiMwNWE2ZjAiIGQ9Ik0xIDEyaDEwdjEwSDF6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZiYTA4IiBkPSJNMTIgMTJoMTB2MTBIMTJ6Ii8+Cjwvc3ZnPg==&style=for-the-badge&logoColor=ffffff" width="170" />](https://microsoftedge.microsoft.com/addons/detail/abracadabra-%E9%AD%94%E6%9B%B0/kfkmhdcahjblddpkkmnjeppmfmfoihkb)
[<img src="https://img.shields.io/badge/Firefox 商店-8a54ff?logo=firefoxbrowser&style=for-the-badge&logoColor=ffffff" width="174" />](https://addons.mozilla.org/zh-CN/firefox/addon/abracadabra-%E9%AD%94%E6%9B%B0/)

> **提示：Edge 插件商店的上架审核速度十分缓慢，因此更新速度也更慢。不推荐从Edge商店下载本插件。**

### Android 客户端

本项目的 Android 客户端完全在 WebView 中静态运行。  

![image](https://github.com/user-attachments/assets/0f3b1c92-8853-4c70-8ef2-58630769beda)

APK使用HBuilderX自动打包，**完全离线运行，没有自动更新等配套功能**。

功能和界面均和前端静态网页没有差异。  

APK文件可以 [**在 Release 中下载**](https://github.com/SheepChef/Abracadabra/releases/latest)

## 细节概要

请查阅 [**细节和使用指南**](https://github.com/SheepChef/Abracadabra/blob/main/USAGE.md) 了解更多。

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/SheepChef/Abracadabra)

### 加解密过程

```
明文 -> 压缩 -> AES-256-CTR -> Base64 -> 三重转轮 -> 映射汉字 -> 组句(仅仿真加密时) -> 密文

密文 -> 解仿真(仅仿真加密) -> 转轮逆映射 -> Base64 -> AES-256-CTR 解密 -> 解压缩 -> 明文
```

### 映射表

Abracadabra 以最常用的 3000 个汉字为密本，对大小写拉丁字母，阿拉伯数字和部分符号进行映射。

密表为纯人工编纂，没有让人眼花缭乱的生僻字。

映射表公开可查，查阅 [**映射表(传统)**](https://github.com/SheepChef/Abracadabra/blob/main/src/javascript/mapping.json) 或者 [**映射表(仿真)**](https://github.com/SheepChef/Abracadabra/blob/main/src/javascript/mapping_next.json) 以了解密本的全貌。

### AES 加密

核心安全性由久经考验的 AES 加密算法提供，采用无填充的AES-256-CTR，节省密文长度。

AES 加密密钥和转轮密钥是同一个，均采用哈希值。

### 三重转轮混淆

模拟古老的转轮，每次加密均会对密本映射进行偏移。

简言之，程序会将给定的密钥进行 SHA256，得到一个长度为 32 的 Uint8_t 数组。

这个数组中的每个数字，都会决定三重转轮中每个转轮每次迭代的转动方向和转动距离。

数字/符号，字母分别拥有一套转轮，即总共六个转轮，改变密钥相当于更换一套完全不同的转轮。

转轮显著增加了 Base64 密文的安全性，查阅 [**细节和使用指南**](https://github.com/SheepChef/Abracadabra/blob/main/USAGE.md) 来了解转轮的详细运行机制。

### 压缩

为了削减密文的长度，每次加密前会对数据进行智能压缩。  

针对短文本，采用专门为短文本优化的 Unishox2 压缩算法。  
一般数据(>1KB)则采用GZIP。

压缩后会执行效率验证，如果出现无效压缩，则自动回落到原始数据。

## 密文对比

```
明文：Abracadabra

魔曰(仿真)：不应报也。树将棋之，书曰：“天水探火，临于云楼” ，夜乃写定绸之莺，指之不为火，换之不为苗。

魔曰(仿真)：流霞以停空，局返，作文换雪。不可彰也，火之无灯，璃说之文，智鸢湛事。

魔曰(传统)：桨捷欤网炯棠囍设声沢仅氖城织把夹短阐瑞玖祉作

<-- ↓↓对比项目↓↓ -->

熊曰：呋食性類啽家現出爾常肉嘿達嗷很
佛曰：諸南隸僧南降南吽諸陀南摩隸南僧南缽南薩咤南心彌嚴迦聞婆吽願南眾南色南兜南眾南如婆如南
社会主义：自由民主公正文明法治文明公正民主公正和谐公正民主公正自由公正民主公正文明法治文明公正民主
兽音：~呜嗷嗷嗷嗷呜呜啊呜嗷呜嗷呜呜~嗷啊呜啊嗷啊呜嗷呜~呜~嗷~呜呜嗷嗷嗷嗷嗷嗷呜啊嗷呜啊呜嗷呜呜~嗷啊嗷啊嗷啊呜嗷嗷~~~嗷~呜呜嗷嗷嗷嗷嗷嗷呜啊嗷呜呜呜嗷呜呜~呜啊呜啊嗷啊呜嗷嗷~嗷啊
火星文：（不支持英文）

```

## 鸣谢

感谢 [**Unishox2**](https://github.com/siara-cc/Unishox2) 提供高效的短文本压缩方案。

感谢 [**中国哲学书电子化计划**](http://ctext.org/zhs) 提供高质量的古籍参考资料。

感谢 [**@Amlkiller**](https://github.com/amlkiller) 为本项目提供十分有价值的反馈和建议。

感谢 **熊曰(与熊论道)、佛曰、兽音译者** 为本项目提供灵感和参考。

感谢贡献 PR 和参与测试的其他所有人，以及**正在使用本项目的您**。

## 开放源代码许可

**⚠️本项目受私有许可证保护**，使用本项目则默认视为同意并遵守相关条款。禁止将本项目用于非法用途。  
👉 查阅 [**AIPL-1.1 许可**](LICENSE.md) 来了解详细信息，也可以前往 [**#87**](https://github.com/SheepChef/Abracadabra/issues/87) 查阅简单介绍。  

---

以下是本项目的依赖项：

- [**Unishox2**](https://github.com/siara-cc/Unishox2) 短字符串压缩实现 _©Siara-cc_, **Apache-2.0** License.
- [**crypto-js**](https://github.com/brix/crypto-js) AES加密实现 _©Jeff Mott/Evan Vosberg_, **MIT** License.
- [**pako**](https://github.com/nodeca/pako) GZIP压缩实现 _©Vitaly Puzrin/Andrei Tuputcyn_, **MIT** License.
- [**js-base64**](https://github.com/dankogai/js-base64) Base64编码工具实现 _©Dan Kogai_, **BSD-3-Clause** License.
- [**mersenne-twister**](https://github.com/boo1ean/mersenne-twister) 梅森旋转算法实现 _©Makoto Matsumoto/Takuji Nishimura_, **BSD-3-Clause** License.

本项目许可证与所有依赖项的许可证兼容。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=SheepChef/Abracadabra&type=Date)](https://star-history.com/#SheepChef/Abracadabra&Date)
