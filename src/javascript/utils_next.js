/*
 * Copyright (C) 2025 SheepChef (a.k.a. Haruka Hokuto)
 *
 * 这是一个自由软件。
 * 在遵守AIPL-1.1许可证的前提下，
 * 你可以自由复制，修改，分发，使用它。
 *
 * 查阅 Academic Innovation Protection License(AIPL) 来了解更多 .
 * 本作品应随附一份完整的 AIPL-1.1 许可证全文。
 *
 */

/*
 * DISCLAIMER OF UNISHOX2
 *
 * This project uses Unishox2 as a compress library.
 * Some of its code need to be altered in order to achieve certain purposes.
 * Unishox2 was Licensed under the Apache License, Version 2.0.
 * Copyright (C) 2020 Siara Logics (cc)
 *
 * 本作品中包含的 Unishox2 不适用 AIPL-1.1 许可证。
 * 使用 Unishox2 须遵守其原始许可证。
 *
 */

import { Base64 } from "js-base64";
import CryptoJS from "crypto-js";
import pako from "pako";
import * as Unishox from "./unishox2.js";
import "pako";
import MersenneTwister from "mersenne-twister";

export const Map =
  '{"Actual":{"N":{"alphabet":{"a":"人","b":"镜","c":"鹏","d":"曲","e":"霞","f":"绸","g":"裳","h":"路","i":"岩","j":"叶","k":"鲤","l":"月","m":"雪","n":"冰","o":"局","p":"恋","q":"福","r":"铃","s":"琴","t":"家","u":"天","v":"韵","w":"书","x":"莺","y":"璃","z":"雨","A":"文","B":"涧","C":"水","D":"花","E":"风","F":"棋","G":"楼","H":"鹤","I":"鸢","J":"灯","K":"雁","L":"星","M":"声","N":"树","O":"茶","P":"竹","Q":"兰","R":"苗","S":"心","T":"语","U":"礼","V":"梦","W":"庭","X":"木","Y":"驿","Z":"火"},"numbersymbol":{"0":"森","1":"夏","2":"光","3":"林","4":"物","5":"云","6":"夜","7":"城","8":"春","9":"空","+":"雀","/":"鹂","=":"鸳"}},"V":{"alphabet":{"a":"关","b":"赴","c":"呈","d":"添","e":"停","f":"成","g":"走","h":"达","i":"行","j":"称","k":"见","l":"学","m":"听","n":"买","o":"作","p":"弹","q":"写","r":"定","s":"谈","t":"动","u":"旅","v":"返","w":"度","x":"开","y":"筑","z":"选","A":"流","B":"指","C":"换","D":"探","E":"放","F":"看","G":"报","H":"事","I":"泊","J":"现","K":"迸","L":"彰","M":"需","N":"飞","O":"游","P":"求","Q":"御","R":"航","S":"歌","T":"读","U":"振","V":"登","W":"任","X":"留","Y":"奏","Z":"连"},"numbersymbol":{"0":"知","1":"至","2":"致","3":"去","4":"画","5":"说","6":"进","7":"信","8":"取","9":"问","+":"笑","/":"视","=":"言"}},"MV":["欲","应","可","能","将","请","想","必","当"],"A":{"alphabet":{"a":"莹","b":"畅","c":"新","d":"高","e":"静","f":"美","g":"绿","h":"佳","i":"善","j":"良","k":"瀚","l":"明","m":"早","n":"宏","o":"青","p":"遥","q":"速","r":"慧","s":"绚","t":"绮","u":"寒","v":"冷","w":"银","x":"灵","y":"绣","z":"北","A":"临","B":"南","C":"俊","D":"捷","E":"骏","F":"益","G":"雅","H":"舒","I":"智","J":"谜","K":"彩","L":"余","M":"短","N":"秋","O":"乐","P":"怡","Q":"瑞","R":"惠","S":"和","T":"纯","U":"悦","V":"迷","W":"长","X":"少","Y":"近","Z":"清"},"numbersymbol":{"0":"远","1":"极","2":"安","3":"聪","4":"秀","5":"旧","6":"浩","7":"盈","8":"快","9":"悠","+":"后","/":"轻","=":"坚"}},"AD":{"alphabet":{"a":"诚","b":"畅","c":"新","d":"高","e":"静","f":"恒","g":"愈","h":"谨","i":"善","j":"良","k":"频","l":"笃","m":"早","n":"湛","o":"昭","p":"遥","q":"速","r":"朗","s":"祗","t":"攸","u":"徐","v":"咸","w":"皆","x":"灵","y":"恭","z":"弥","A":"临","B":"允","C":"公","D":"捷","E":"淳","F":"益","G":"雅","H":"舒","I":"嘉","J":"勤","K":"协","L":"永","M":"短","N":"歆","O":"乐","P":"怡","Q":"已","R":"忻","S":"和","T":"谧","U":"悦","V":"稍","W":"长","X":"少","Y":"近","Z":"尚"},"numbersymbol":{"0":"远","1":"极","2":"安","3":"竟","4":"悉","5":"渐","6":"颇","7":"辄","8":"快","9":"悠","+":"后","/":"轻","=":"曾"}}},"Virtual":{"zhi":["之"],"hu":["乎"],"zhe":["者"],"ye":["也"],"for":["为"],"ba":["把"],"le":["了"],"er":["而"],"this":["此","斯"],"still":["仍"],"with":["与","同"],"also":["亦","也"],"is":["是","乃"],"not":["未","莫"],"or":["或"],"more":["更"],"make":["使","将","让"],"and":["与","同"],"anti":["非","不"],"why":["为何","奈何","何哉"],"but":["但","却","则","而","况","且"],"like":["似","如","若"],"if":["若","倘"],"int":["哉","呼","噫"],"self":["自"],"by":["以","于"]},"Sentences":{"Begin":["1D/非/N/ye","1B/N/曰/R","1B/若夫/N","1C/anti/MV/V/ye/P","2B/A/N/曰/R","2B/N/以/A","2C/N/anti/在/A","2C/N/make/N/zhi","2C/MV/N/zhe/A","2E/有/N/则/A","2C/V/zhe/V/zhi","2D/but/MV/A/zhe/A","3C/N/V/by/N","3B/初，/N/V/by/N","3B/夫/N/anti/V/by/N","3B/AD/V/zhi/谓/A","3B/V/而/V/zhi/zhi/谓/A","3B/N/，/N/zhi/N/ye/P","3D/A/之/V/者/必/有/N/P","4D/非/N/不/A/，/V/不/A","4C/A/N/AD/V","4C/V/N/以/V/N","4E/N/不在/A/，/有/N/则/A/P","4D/A/N/常有/，/而/A/N/不常有/P","4D/V/N/者/，/N/之/N/也/P","4E/N/有/MV/V/，/N/有/AD/然/P","4D/N/无/N/，/无以/V/N","4D/V/之/不/为/N/，/V/之/不/为/N/P","5D/V/N/而/V/A/，/V/zhi/道/ye/P","5E/N/zhi/V/V/，/实为/A/A/P","5C/本/MV/V/A/，/anti/V/N/N","5C/N/之/无/N/，/N/V/之/N","5D/V/N/而/V/之/者/，/非/其/N/AD/也/P","5B/今/V/N/以/V/A/N","5B/N/乃/V/V/N/zhi/N","5B/今/N/乃/A/N/A/N","5C/A/N/V/A/N","5B/夫/N/、/N/不/MV/AD/V/N","5D/不/有/A/N/，/何/V/A/N/Q","5D/以/A/N/为/N/者/，/N/MV/弗/而/V/之/P","6B/以/N/V/，/like/V/N/V/N","6B/A/N/zhi/N/，/V/zhi/以/V/其/N","6B/A/N/V/于/N/而/V/N","6B/A/N/未/V/N/、/N/之/N","6B/V/A/N/若/V/A/N","6D/不/V/N/，/不/V/N/，/当/以/AD/V/论/P","6D/A/则为/V/N/，/A/则为/V/N/P","6D/若/居/A/N/之/N/，/则/当/A/N/之/V/P","6D/N/无/N/则/V/，/N/无/N/则/V/P","7D/夫/A/之/N/V/N/者/，/其/所以/AD/V/者/N/也/P","6D/A/者/V/而/V/之/，/A/者/V/而/V/之/P","6D/N/受/命/于/N/，/固/AD/然/V/于/A/N/P","7C/N/以/A/A/，/AD/V/A/N","7B/V/N/A/，/A/N/V/N","7B/N/V/以/N/V/，/V/不/V/N","7C/N/N/V/N/，/A/于/N/N","7D/MV/AD/V/A/N/，/but/V/V/不/A","7C/或/V/N/V/N/，/V/N/于/N","7E/则有/N/A/N/A/，/N/N/具/V","7D/V/A/N/zhe/，/常/V/其/所/A/，/而/V/其/所/A/P","7D/A/N/之/N/，/常/V/于/其/所/AD/V/而/不/V/之/处/P","7D/A/N/之/N/不在/N/，/在乎/A/N/之/N/也/P","8D/V/A/N/，/V/A/N/，/by/MV/A/zhi/N/P","8D/N/anti/AD/V/zhe/by/AD/V/zhe/V/，/anti/MV/AD/V/P","8D/N/anti/MV/V/N/，/still/继/N/V/，/why/，/and/N/而/anti/V/N/ye/P","8C/V/N/A/A/，/V/N/A/A","8C/N/V/A/N/，/N/V/A/N","8C/N/在/A/N/，/A/N/zhi/A/，/V/于/N/P","8C/A/N/AD/V/，/N/N/AD/V","8C/A/N/V/N/，/N/N/V/N/P","8B/尝/V/A/N/，/AD/V/A/N/zhi/N","8D/予/V/夫/A/N/A/N/，/在/A/N/之/N","8D/N/V/于/A/N/，/而/N/V/于/A/N","8D/虽/无/N/N/zhi/V/，/亦/V/以/AD/V/A/N/P","8D/A/N/之/A/N/，/常/为/A/N/之/A/N/P","9D/A/N/V/zhi/而不/V/zhi/、亦/make/A/N/er/复/V/A/N/ye/P","9D/N/MV/V/N/V/V/，/but/N/N/AD/V/P","9B/以/N/，/当/V/A/N/，/非/N/V/N/所/MV/AD/V/P","9C/此/N/有/A/N/A/N/，/A/N/A/N/P","9D/是/N/ye/，/N/A/N/A/，/N/A/N/A/P"],"Main":["1B/非/N/ye","1B/N/曰/R","1C/anti/MV/V/ye","2C/N/make/N/zhi","2C/MV/N/zhe/A","2E/有/N/则/A","2C/V/zhe/V/zhi","2C/but/MV/A/zhe/A","3C/N/with/N/V","3B/N/曰，何/A/zhi/V/Q","4C/A/N/AD/V","4C/V/N/以/V/N","4D/N/无/N/，/无以/V/N/P","4D/V/N/者/，/N/之/N/也/P","4E/N/不在/A/，/有/N/则/A/P","4C/N/有/MV/V/，/N/有/AD/然/P","4D/N/非/V/而/V/之/者/，/孰/MV/无/N/P","4D/A/N/常有/，/而/A/N/不常有/P","4C/不/以/N/V/，/不/以/N/V/P","4D/V/之/不/为/N/，/V/之/不/为/N/P","5B/今/V/N/以/V/A/N","5B/N/乃/V/V/N/zhi/N","5C/本/MV/V/A/，/anti/V/N/N","5D/V/N/而/V/之/者/，/非/其/N/AD/也/P","5D/以/A/N/为/N/者/，/N/MV/弗/而/V/之/P","5D/故/夫/A/N/之/N/，/不/可/make/其/V/于/N/也/P","5B/今/N/乃/A/N/A/N","5E/每/有/V/N/，/便/AD/然/V/N/P","5D/N/V/而/A/N/V/也","5E/不/有/A/N/，/何/V/A/N/Q","5C/N/之/无/N/，/N/V/之/N","6D/N/A/N/A/，/则/所/V/得/其/A/P","6B/以/N/V/，/like/V/N/V/N","6B/V/A/N/若/V/A/N","6C/N/V/，/V/N/V/N","6E/虽/V/V/A/A/，/A/A/不/同/P","6D/而/A/N/zhi/N/，/V/zhi/以/V/其/N/P","6B/A/N/V/于/N/而/V/N","6B/A/N/未/V/N/、/N/之/N","6C/V/A/N/，/V/A/N","6D/V/MV/with/其/N/，/而/V/MV/V/以/N/者/，/N/也/P","6D/A/N/必/有/A/N/V/之者/、/予/可/无/N/也/P","6D/将/有/V/，/则/V/A/N/以/V/N/P","6D/不/V/N/，/不/V/N/，/当/以/AD/V/论/P","6D/A/则为/V/N/，/A/则为/V/N/P","6D/N/无/N/则/V/，/N/无/N/则/V/P","6D/A/者/V/而/V/之/，/A/者/V/而/V/之/P","6D/若/居/A/N/之/N/，/则/当/A/N/之/V/P","6D/N/受/命/于/N/，/固/AD/然/V/于/A/N/P","7D/夫/A/之/N/V/N/者/，/其/所以/AD/V/者/N/也/P","7B/N/V/以/N/V/，/V/不/V/N","7C/N/N/V/N/，/A/于/N/N","7D/MV/AD/V/A/N/，/but/V/V/不/A","7C/或/V/N/V/N/，/V/N/于/N","7D/V/A/N/zhe/，/常/V/其/所/A/，/而/V/其/所/A/P","7D/A/N/之/不/V/也/AD/矣/，/欲/N/之/无/N/也/AD/矣/P","7D/A/N/之/N/，/常/V/于/其/所/AD/V/而/不/V/之/处/P","7D/A/N/之/N/不在/N/，/在乎/A/N/之/N/也/P","7D/A/N/之/N/，/V/之/N/而/V/之/N/也/P","7D/是故/A/N/不必不如/N/，/N/不必/A/于/A/N/P","7B/有/A/N/、/A/N/、/A/N/之/N/P","8D/N/anti/MV/V/N/，/still/继/N/V/，/why/，/and/N/而/anti/V/N/ye/P","8E/是/故/无/A/无/A/，/无/A/无/A/，/N/之/所/V/、/N/之/所/V/ye/P","8C/V/N/A/A/，/V/N/A/A","8B/N/在/A/N/，/A/N/zhi/A/，/V/于/N/P","8B/like/A/N/V/N/，/不/V/N/V/之/N/P","8C/A/N/AD/V/，/N/N/AD/V","8D/A/N/之/A/N/，/常/为/A/N/之/A/N/P","8C/A/N/V/N/，/N/N/V/N/P","8D/虽/无/N/N/zhi/V/，/亦/V/以/AD/V/A/N/P","8D/予/V/夫/A/N/A/N/，/在/A/N/之/N","8D/故/V/A/N/者/，/当/V/A/N/之/A/N/P","8D/N/V/于/A/N/，/而/N/V/于/A/N","8B/A/N/MV/A/N/之/A/，/V/N/中/之/A","8D/N/V/于/A/N/之上/，/AD/V/于/A/N/之间/P","8B/使/其/A/N/AD/V/，/A/N/AD/V/P","9B/N/MV/V/N/V/V/，/but/N/N/AD/V","9D/A/N/V/zhi/而不/V/zhi/、亦/make/A/N/er/复/V/A/N/ye/P","9D/以/N/，/当/V/A/N/，/非/N/V/N/所/MV/AD/V/P","9C/此/N/有/A/N/A/N/，/A/N/A/N/P","9E/是/N/ye/，/N/A/N/A/，/N/A/N/A","9E/V/A/N/，/N/A/N/A/，/乃/AD/V"],"End":["1B/非/N/ye","1C/anti/MV/V/ye","2C/唯/N/V/zhi","2B/V/by/N","2D/其/also/A/hu/其/V/ye/P","2C/N/make/N/zhi","2C/MV/N/zhe/A","2E/有/N/则/A","2C/V/zhe/V/zhi","2C/but/MV/A/zhe/A","3C/V/在/A/N","3D/今/zhi/V/zhe/，/亦将有/V/于/this/N/P","3D/某也/A/，/某也/A/，/可/不/A/哉","4B/V/N/zhi/N/by/N","4C/A/N/AD/V","4C/V/N/以/V/N","4D/N/无/N/，/无以/V/N","4D/V/N/者/，/N/之/N/也/P","4D/噫/，/A/N/ye/，/N/谁/与/V/Q","4C/不/以/N/V/，/不/以/N/V/P","4D/V/之/不/为/N/，/V/之/不/为/N/P","5B/请/V/N/zhi/N/中/，/是/N/zhi/N/P","5D/今/V/N/以/V/A/N","5B/N/乃/V/V/N/zhi/N","5C/本/MV/V/A/，/anti/V/N/N","5D/V/N/而/V/之/者/，/非/其/N/AD/也/P","5D/以/A/N/为/N/者/，/N/MV/弗/而/V/之/P","5D/故/夫/A/N/之/N/，/不/可/make/其/V/于/N/也/P","5B/今/N/乃/A/N/A/N","5D/N/V/而/A/N/V/也","5E/不/有/A/N/，/何/V/A/N/Q","5C/N/之/无/N/，/N/V/之/N","6D/以/N/V/，/like/V/N/V/N","6D/A/zhi/V/N/，/亦/like/今/zhi/V/N/，/A/夫/P","6D/A/者/V/而/V/之/，/A/者/V/而/V/之/P","6D/若/居/A/N/之/N/，/则/当/A/N/之/V/P","6B/N/V/，/V/N/V/N","6E/V/N/之/N/，/为/N/V/者/，/可以/V/矣/P","6D/V/MV/with/其/N/，/而/V/MV/V/以/N/者/，/N/也/P","6D/A/N/必/有/A/N/V/之者/、/予/可/无/N/也/P","6E/虽/V/V/A/A/，/A/A/不/同/P","6D/将/有/V/，/则/V/A/N/以/V/N/P","6D/不/V/N/，/不/V/N/，/当/以/AD/V/论/P","6D/A/则为/V/N/，/A/则为/V/N/P","6D/N/受/命/于/N/，/固/AD/然/V/于/A/N/P","6D/N/无/N/则/V/，/N/无/N/则/V/P","6D/N/A/N/A/，/则/所/V/得/其/A/P","7D/夫/A/之/N/V/N/者/，/其/所以/AD/V/者/N/也/P","7D/N/V/以/N/V/，/V/不/V/N","7C/N/N/V/N/，/A/于/N/N","7D/MV/AD/V/A/N/，/but/V/V/不/A","7E/或/V/N/V/N/，/V/N/于/N","7D/A/N/之/N/不在/N/，/在乎/A/N/之/N/也/P","7D/A/N/之/N/，/V/之/N/而/V/之/N/也/P","7D/是故/A/N/不必不如/N/，/N/不必/A/于/A/N/P","7B/有/A/N/、/A/N/、/A/N/之/N/P","8E/虽/N/A/N/A/，/所/以/V/N/，其/N/A/ye/P","8B/like/A/N/V/N/，/不/V/N/V/之/N/P","8D/何必/V/N/V/N/，/V/N/zhi/N/N/哉/P","8D/N/anti/MV/V/N/，/still/继/N/V/，/why/，/and/N/而/anti/V/N/ye/P","8C/V/N/A/A/，/V/N/A/A","8B/N/在/A/N/，/A/N/zhi/A/，/V/于/N/P","8C/A/N/AD/V/，/N/N/AD/V","8D/虽/无/N/N/zhi/V/，/亦/V/以/AD/V/A/N/P","8D/故/V/A/N/者/，/当/V/A/N/之/A/N/P","8D/N/V/于/A/N/之上/，/AD/V/于/A/N/之间/P","8C/使/其/A/N/AD/V/，/A/N/AD/V/P","9D/A/N/V/zhi/而不/V/zhi/、亦/make/A/N/er/复/V/A/N/ye/P","9B/N/MV/V/N/V/V/，/but/N/N/AD/V","9D/以/N/，/当/V/A/N/，/非/N/V/N/所/MV/AD/V/P","9C/此/N/有/A/N/A/N/，/A/N/A/N/P","9B/是/N/ye/，/N/A/N/A/，/N/A/N/A/P"]}}';
var RoundFlip = 0; //标志现在到哪了
var RoundControl = new Uint8Array(32); //一个数组，用密钥哈希来控制轮转的行为
const Normal_Characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/=1234567890"; //表内有映射的所有字符组成的字符串
const LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LETTERS_ROUND_1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var LETTERS_ROUND_2 = "FbPoDRStyJKAUcdahfVXlqwnOGpHZejzvmrBCigQILxkYMuWTEsN"; //手动随机打乱的乱序轮
var LETTERS_ROUND_3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const BIG_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "1234567890";
const SYMBOLS = "+/=";
const NUMBERSYMBOL = "0123456789+/=";
var NUMBERSYMBOL_ROUND_1 = "0123456789+/=";
var NUMBERSYMBOL_ROUND_2 = "5=0764+389/12"; //手动随机打乱的乱序轮
var NUMBERSYMBOL_ROUND_3 = "0123456789+/=";

const NULL_STR = "孎"; //默认忽略的占位字符，一个生僻字。

var MT = new MersenneTwister(Date.now());

const CHINESE_WEBPAN_LIB = [
  "https://",
  "lanzou",
  "pan.quark.cn",
  "pan.baidu.com",
  "aliyundrive.com",
  "123pan.com",
];
const INTER_WEBPAN_LIB = [
  "https://",
  "mypikpak.com",
  "mega.nz",
  "drive.google.com",
  "sharepoint.com",
  "1drv.ms",
];
const CHINESE_WEBSITE_LIB = [
  "https://",
  "baidu.com",
  "b23.tv",
  "bilibili.com",
  "weibo.com",
  "weixin.qq.com",
];
const INTER_WEBSITE_LIB = [
  "https://",
  "google.com",
  "youtube.com",
  "x.com",
  "twitter.com",
  "telegra.ph",
];
const INTER_WEBSITE_LIB_2 = [
  "https://",
  "wikipedia.org",
  "github.com",
  "pages.dev",
  "github.io",
  "netlify.app",
];
const JAPAN_WEBSITE_LIB = [
  "https://",
  "pixiv.net",
  "nicovideo.jp",
  "dlsite.com",
  "line.me",
  "dmm.com",
];
const PIRACY_WEBSITE_LIB = [
  "https://",
  "nyaa.si",
  "bangumi.moe",
  "thepiratebay.org",
  "e-hentai.org",
  "exhentai.org",
];
const GENERIC_TLINK_LIB = [
  "https://",
  "magnet:?xt=urn:btih:",
  "magnet:?xt=urn:sha1:",
  "ed2k://",
  "thunder://",
  "torrent",
];
const GENERIC_LINK_LIB_1 = ["https://", ".cn", ".com", ".net", ".org", ".xyz"];
const GENERIC_LINK_LIB_2 = ["https://", ".info", ".moe", ".cc", ".co", ".dev"];
const GENERIC_LINK_LIB_3 = ["https://", ".io", ".us", ".eu", ".jp", ".de"];
const GENERIC_LINK_LIB_4 = [
  "https://",
  ".top",
  ".one",
  ".online",
  ".me",
  ".ca",
];

const Map_Obj = JSON.parse(Map);

let DecodeTable = {};
let PayloadLetter = "";

const CompatibilityDecodeTable = { q: ["褔"] }; //兼容上个版本的密文解密

function InitDecodeTable() {
  DecodeTable = {};
  PayloadLetter = "";
  for (let i = 0; i < 52; i++) {
    DecodeTable[LETTERS[i]] = [];
    DecodeTable[LETTERS[i]].push(
      Map_Obj["Actual"]["N"]["alphabet"][LETTERS[i]]
    );
    DecodeTable[LETTERS[i]].push(
      Map_Obj["Actual"]["A"]["alphabet"][LETTERS[i]]
    );
    DecodeTable[LETTERS[i]].push(
      Map_Obj["Actual"]["V"]["alphabet"][LETTERS[i]]
    );
    if (CompatibilityDecodeTable.hasOwnProperty(LETTERS[i])) {
      CompatibilityDecodeTable[LETTERS[i]].forEach((item) => {
        DecodeTable[LETTERS[i]].push(item);
        PayloadLetter = PayloadLetter + item;
      });
    }
    PayloadLetter =
      PayloadLetter + Map_Obj["Actual"]["N"]["alphabet"][LETTERS[i]];
    PayloadLetter =
      PayloadLetter + Map_Obj["Actual"]["A"]["alphabet"][LETTERS[i]];
    PayloadLetter =
      PayloadLetter + Map_Obj["Actual"]["V"]["alphabet"][LETTERS[i]];
    if (
      Map_Obj["Actual"]["A"]["alphabet"][LETTERS[i]] !=
      Map_Obj["Actual"]["AD"]["alphabet"][LETTERS[i]]
    ) {
      DecodeTable[LETTERS[i]].push(
        Map_Obj["Actual"]["AD"]["alphabet"][LETTERS[i]]
      );
      PayloadLetter =
        PayloadLetter + Map_Obj["Actual"]["AD"]["alphabet"][LETTERS[i]];
    }
  }
  for (let i = 0; i < 13; i++) {
    DecodeTable[NUMBERSYMBOL[i]] = [];
    DecodeTable[NUMBERSYMBOL[i]].push(
      Map_Obj["Actual"]["N"]["numbersymbol"][NUMBERSYMBOL[i]]
    );
    DecodeTable[NUMBERSYMBOL[i]].push(
      Map_Obj["Actual"]["A"]["numbersymbol"][NUMBERSYMBOL[i]]
    );
    DecodeTable[NUMBERSYMBOL[i]].push(
      Map_Obj["Actual"]["V"]["numbersymbol"][NUMBERSYMBOL[i]]
    );
    PayloadLetter =
      PayloadLetter + Map_Obj["Actual"]["N"]["numbersymbol"][NUMBERSYMBOL[i]];
    PayloadLetter =
      PayloadLetter + Map_Obj["Actual"]["A"]["numbersymbol"][NUMBERSYMBOL[i]];
    PayloadLetter =
      PayloadLetter + Map_Obj["Actual"]["V"]["numbersymbol"][NUMBERSYMBOL[i]];
    if (
      Map_Obj["Actual"]["A"]["numbersymbol"][NUMBERSYMBOL[i]] !=
      Map_Obj["Actual"]["AD"]["numbersymbol"][NUMBERSYMBOL[i]]
    ) {
      DecodeTable[NUMBERSYMBOL[i]].push(
        Map_Obj["Actual"]["AD"]["numbersymbol"][NUMBERSYMBOL[i]]
      );
      PayloadLetter =
        PayloadLetter +
        Map_Obj["Actual"]["AD"]["numbersymbol"][NUMBERSYMBOL[i]];
    }
  }
}

function AES_256_CTR_E(Uint8attr, key, RandomBytes) {
  let KeyHash = CryptoJS.SHA256(key);
  let HashArray = wordArrayToUint8Array(KeyHash);

  let TempArray = new Uint8Array(HashArray.byteLength + 2);
  TempArray.set(HashArray, 0);
  TempArray.set([RandomBytes[0], RandomBytes[1]], HashArray.byteLength);
  HashArray = TempArray;

  let HashWithRandom = CryptoJS.lib.WordArray.create(HashArray);
  let KeyHashHash = CryptoJS.SHA256(HashWithRandom); //密钥两次哈希,附加两字节随机数
  let HashHashArray = wordArrayToUint8Array(KeyHashHash);

  let ivArray = new Uint8Array(16);

  for (var i = 0; i < 16; i++) {
    ivArray[i] = HashHashArray[i];
  }

  let iv = CryptoJS.lib.WordArray.create(ivArray);
  let msg = CryptoJS.lib.WordArray.create(Uint8attr);

  let Enc = CryptoJS.AES.encrypt(msg, KeyHash, {
    mode: CryptoJS.mode.CTR,
    padding: CryptoJS.pad.NoPadding,
    iv: iv,
  });
  return wordArrayToUint8Array(Enc.ciphertext);
}

function GZIP_COMPRESS(Data) {
  let DataOutput = pako.gzip(Data);

  if (DataOutput.byteLength >= Data.byteLength) {
    return Data;
  }
  return DataOutput;
}
function GZIP_DECOMPRESS(Data) {
  const firstTwoBytes = new Uint8Array(Data.buffer, 0, 2);
  if (firstTwoBytes[0] === 0x1f && firstTwoBytes[1] === 0x8b) {
    // Likely compressed with gzip
    let DataOutput = pako.ungzip(Data);
    return DataOutput;
  } else {
    return Data;
  }
}
function UNISHOX_COMPRESS(Data) {
  let CompressedStrCharArray = new Uint8Array(2048);
  let Datastr = Uint8ArrayTostring(Data);
  let libmark = 255;

  for (let i = 1; i < 6; i++) {
    if (Datastr.indexOf(CHINESE_WEBPAN_LIB[i]) != -1) {
      libmark = 254;
      break;
    }
    if (Datastr.indexOf(INTER_WEBPAN_LIB[i]) != -1) {
      libmark = 245;
      break;
    }
  }
  if (libmark == 255) {
    for (let i = 1; i < 6; i++) {
      if (Datastr.indexOf(CHINESE_WEBSITE_LIB[i]) != -1) {
        libmark = 253;
        break;
      }
      if (Datastr.indexOf(INTER_WEBSITE_LIB[i]) != -1) {
        libmark = 252;
        break;
      }
      if (Datastr.indexOf(INTER_WEBSITE_LIB_2[i]) != -1) {
        libmark = 244;
        break;
      }
      if (Datastr.indexOf(JAPAN_WEBSITE_LIB[i]) != -1) {
        libmark = 251;
        break;
      }
      if (Datastr.indexOf(PIRACY_WEBSITE_LIB[i]) != -1) {
        libmark = 250;
        break;
      }
    }
  }
  if (libmark == 255) {
    for (let i = 1; i < 6; i++) {
      if (Datastr.indexOf(GENERIC_TLINK_LIB[i]) != -1) {
        libmark = 249;
        break;
      }
      if (Datastr.indexOf(GENERIC_LINK_LIB_1[i]) != -1) {
        libmark = 248;
        break;
      }
      if (Datastr.indexOf(GENERIC_LINK_LIB_2[i]) != -1) {
        libmark = 247;
        break;
      }
      if (Datastr.indexOf(GENERIC_LINK_LIB_3[i]) != -1) {
        libmark = 246;
        break;
      }
      if (Datastr.indexOf(GENERIC_LINK_LIB_4[i]) != -1) {
        libmark = 243;
        break;
      }
    }
  }

  let Outlen;
  switch (libmark) {
    case 255:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray
      );
      break;
    case 254:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        CHINESE_WEBPAN_LIB
      );
      break;
    case 245:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        INTER_WEBPAN_LIB
      );
      break;
    case 253:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        CHINESE_WEBSITE_LIB
      );
      break;
    case 252:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        INTER_WEBSITE_LIB
      );
      break;
    case 244:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        INTER_WEBSITE_LIB_2
      );
      break;
    case 251:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        JAPAN_WEBSITE_LIB
      );
      break;
    case 250:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        PIRACY_WEBSITE_LIB
      );
      break;
    case 249:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        GENERIC_TLINK_LIB
      );
      break;
    case 248:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        GENERIC_LINK_LIB_1
      );
      break;
    case 247:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        GENERIC_LINK_LIB_2
      );
      break;
    case 246:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        GENERIC_LINK_LIB_3
      );
      break;
    case 243:
      Outlen = Unishox.unishox2_compress_simple(
        Data,
        Data.byteLength,
        CompressedStrCharArray,
        GENERIC_LINK_LIB_4
      );
      break;
  }

  let ResStrCharArray = CompressedStrCharArray.subarray(0, Outlen);
  if (ResStrCharArray.byteLength >= Data.byteLength) {
    return Data;
  }

  let TempArray = new Uint8Array(ResStrCharArray.byteLength + 2);
  TempArray.set(ResStrCharArray, 0);
  TempArray.set([libmark, 255], ResStrCharArray.byteLength);
  ResStrCharArray = TempArray;

  return ResStrCharArray;
}
function UNISHOX_DECOMPRESS(Data) {
  const lastElement = Data[Data.byteLength - 1];
  const secondLastElement = Data[Data.byteLength - 2];

  if (
    lastElement != 255 ||
    secondLastElement < 243 ||
    secondLastElement > 255
  ) {
    return Data;
  }
  let libmark = secondLastElement;
  let NewData = Data.subarray(0, Data.byteLength - 2);

  let DecompressedStrCharArray = new Uint8Array(2048);

  let Outlen;
  switch (libmark) {
    case 255:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        Unishox.USX_FREQ_SEQ_DFLT,
        Unishox.USX_TEMPLATES
      );
      break;
    case 254:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        CHINESE_WEBPAN_LIB,
        Unishox.USX_TEMPLATES
      );
      break;
    case 245:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        INTER_WEBPAN_LIB,
        Unishox.USX_TEMPLATES
      );
      break;
    case 253:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        CHINESE_WEBSITE_LIB,
        Unishox.USX_TEMPLATES
      );
      break;
    case 252:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        INTER_WEBSITE_LIB,
        Unishox.USX_TEMPLATES
      );
      break;
    case 244:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        INTER_WEBSITE_LIB_2,
        Unishox.USX_TEMPLATES
      );
      break;
    case 251:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        JAPAN_WEBSITE_LIB,
        Unishox.USX_TEMPLATES
      );
      break;
    case 250:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        PIRACY_WEBSITE_LIB,
        Unishox.USX_TEMPLATES
      );
      break;
    case 249:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        GENERIC_TLINK_LIB,
        Unishox.USX_TEMPLATES
      );
      break;
    case 248:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        GENERIC_LINK_LIB_1,
        Unishox.USX_TEMPLATES
      );
      break;
    case 247:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        GENERIC_LINK_LIB_2,
        Unishox.USX_TEMPLATES
      );
      break;
    case 246:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        GENERIC_LINK_LIB_3,
        Unishox.USX_TEMPLATES
      );
      break;
    case 243:
      Outlen = Unishox.unishox2_decompress(
        NewData,
        NewData.byteLength,
        DecompressedStrCharArray,
        Unishox.USX_HCODES_DFLT,
        Unishox.USX_HCODE_LENS_DFLT,
        GENERIC_LINK_LIB_4,
        Unishox.USX_TEMPLATES
      );
      break;
  }
  let ResStrCharArray = DecompressedStrCharArray.subarray(0, Outlen);
  return ResStrCharArray;
}

function GetLuhnBit(Data) {
  let Digit = new Array();
  let num, digit;
  for (let i = 0; i < Data.byteLength; i++) {
    num = Data[i];
    while (num > 0) {
      digit = num % 10;
      Digit.push(digit);
      num = Math.floor(num / 10);
    }
  }

  // Digit应当是一个数位构成的数组。
  let sum = 0;
  let Check = 0;

  for (let i = 0; i < Digit.length; i++) {
    if (i % 2 != 0) {
      Digit[i] = Digit[i] * 2;
      if (Digit[i] >= 10) {
        Digit[i] = (Digit[i] % 10) + Math.floor(Digit[i] / 10); //计算数字之和
      }
    }
    sum = sum + Digit[i];
  }

  Check = 10 - (sum % 10);

  return Check;
}

function CheckLuhnBit(Data) {
  let DCheck = Data[Data.byteLength - 1];
  let Check = GetLuhnBit(Data.subarray(0, Data.byteLength - 1));

  if (Check == DCheck) {
    return true;
  } else {
    return false;
  }
}

function RemovePadding(Base64String) {
  let PaddingCount = 0;
  for (let i = Base64String.length - 1; i >= Base64String.length - 4; i--) {
    if (Base64String[i] == "=") {
      PaddingCount++;
    }
  }
  return Base64String.slice(0, Base64String.length - PaddingCount);
}

function AddPadding(Base64String) {
  if (Base64String.length % 4 == 3) {
    return Base64String + "=";
  } else if (Base64String.length % 4 == 2) {
    return Base64String + "==";
  } else {
    return Base64String;
  }
}

// 将WordArray转换为Uint8Array
function wordArrayToUint8Array(data) {
  const dataArray = new Uint8Array(data.sigBytes);
  for (let i = 0x0; i < data.sigBytes; i++) {
    dataArray[i] = (data.words[i >>> 0x2] >>> (0x18 - (i % 0x4) * 0x8)) & 0xff;
  }
  return dataArray;
}

function Uint8ArrayTostring(fileData) {
  let tempBase64 = Base64.fromUint8Array(fileData);
  return Base64.decode(tempBase64);
}

function GetRandomIndex(length) {
  // 取随机数
  let Rand = Math.floor(MT.random() * length);

  return Rand;
}

function rotateString(str, n) {
  // 向右轮转指定位数
  return str.slice(n) + str.slice(0, n);
}

function LrotateString(str, n) {
  // 向左轮转指定位数
  return str.slice(str.length - n) + str.slice(0, str.length - n);
}
function RoundKeyMatch(keyIn) {
  //查询轮换密钥的键值
  let idx1, idx2;
  let idx1_1, idx2_1;
  let idx1_2, idx2_2;

  idx1 = LETTERS.indexOf(keyIn);
  idx2 = NUMBERSYMBOL.indexOf(keyIn);

  idx1_1 = LETTERS.indexOf(LETTERS_ROUND_1[idx1]);
  idx2_1 = NUMBERSYMBOL.indexOf(NUMBERSYMBOL_ROUND_1[idx2]);

  idx1_2 = LETTERS.indexOf(LETTERS_ROUND_2[idx1_1]);
  idx2_2 = NUMBERSYMBOL.indexOf(NUMBERSYMBOL_ROUND_2[idx2_1]);

  if (idx1 != -1) {
    //判断给定字符的类型
    return LETTERS_ROUND_3[idx1_2];
  } else if (idx2 != -1) {
    return NUMBERSYMBOL_ROUND_3[idx2_2];
  }
  return NULL_STR;
}

function DRoundKeyMatch(keyIn) {
  //查询轮换密钥的键值
  let idx1, idx2;
  let idx1_1, idx2_1;
  let idx1_2, idx2_2;

  idx1 = LETTERS_ROUND_3.indexOf(keyIn);
  idx2 = NUMBERSYMBOL_ROUND_3.indexOf(keyIn);

  idx1_1 = LETTERS_ROUND_2.indexOf(LETTERS[idx1]);
  idx2_1 = NUMBERSYMBOL_ROUND_2.indexOf(NUMBERSYMBOL[idx2]);

  idx1_2 = LETTERS_ROUND_1.indexOf(LETTERS[idx1_1]);
  idx2_2 = NUMBERSYMBOL_ROUND_1.indexOf(NUMBERSYMBOL[idx2_1]);

  if (idx1 != -1) {
    //判断给定字符的类型
    return LETTERS[idx1_2];
  } else if (idx2 != -1) {
    return NUMBERSYMBOL[idx2_2];
  }
  return NULL_STR;
}

function RoundKey() {
  let ControlNum = 0;
  if (RoundFlip == 32) {
    RoundFlip = 0;
  }
  ControlNum = RoundControl[RoundFlip] % 10; //哈希字节对十取余即操作数
  if (ControlNum == 0) {
    //等于零就赋值为10
    ControlNum = 10;
  }

  if (ControlNum % 2 == 0) {
    //操作数是偶数
    LETTERS_ROUND_1 = rotateString(LETTERS_ROUND_1, 6); //将第一个密钥轮向右轮6位
    NUMBERSYMBOL_ROUND_1 = rotateString(NUMBERSYMBOL_ROUND_1, 6);

    LETTERS_ROUND_2 = LrotateString(LETTERS_ROUND_2, ControlNum); //将第二个密钥轮向左轮ControlNum*2位
    NUMBERSYMBOL_ROUND_2 = LrotateString(NUMBERSYMBOL_ROUND_2, ControlNum);

    LETTERS_ROUND_3 = rotateString(LETTERS_ROUND_3, ControlNum / 2 + 1); //将第三个密钥轮向右轮ControlNum/2+1位
    NUMBERSYMBOL_ROUND_3 = rotateString(
      NUMBERSYMBOL_ROUND_3,
      ControlNum / 2 + 1
    );
  } else {
    //操作数是奇数
    LETTERS_ROUND_1 = LrotateString(LETTERS_ROUND_1, 3); //将第一个密钥轮向左轮3位
    NUMBERSYMBOL_ROUND_1 = LrotateString(NUMBERSYMBOL_ROUND_1, 3);

    LETTERS_ROUND_2 = rotateString(LETTERS_ROUND_2, ControlNum); //将第二个密钥轮向右轮ControlNum位
    NUMBERSYMBOL_ROUND_2 = rotateString(NUMBERSYMBOL_ROUND_2, ControlNum);

    LETTERS_ROUND_3 = LrotateString(LETTERS_ROUND_3, (ControlNum + 7) / 2); //将第三个密钥轮向左轮(ControlNum+5)/2位
    NUMBERSYMBOL_ROUND_3 = LrotateString(
      NUMBERSYMBOL_ROUND_3,
      (ControlNum + 7) / 2
    );
  }
  RoundFlip++;
}

function RoundReset() {
  //重置转轮，当一个对象实例化之后，每一次操作之前都要重置转轮
  RoundFlip = 0;
  RoundControl = new Array(32);
  LETTERS_ROUND_1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  LETTERS_ROUND_2 = "FbPoDRStyJKAUcdahfVXlqwnOGpHZejzvmrBCigQILxkYMuWTEsN"; //手动随机打乱的乱序轮
  LETTERS_ROUND_3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  NUMBERSYMBOL_ROUND_1 = "1234567890+/=";
  NUMBERSYMBOL_ROUND_2 = "5=0764+389/12"; //手动随机打乱的乱序轮
  NUMBERSYMBOL_ROUND_3 = "1234567890+/=";
  MT = new MersenneTwister(Date.now()); //更新梅森随机数种子
}

function RoundControlInit(key) {
  //初始化转轮操作的数组
  let KeyHash = CryptoJS.SHA256(key);
  let HashArray = wordArrayToUint8Array(KeyHash);

  RoundControl = HashArray;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function avoidAdjacentDuplicates(arr) {
  if (arr.length <= 1) return arr;
  const newArr = [...arr];
  let hasAdjacent = true;
  let maxTries = newArr.length;

  while (hasAdjacent && maxTries > 0) {
    hasAdjacent = false;
    for (let i = 0; i < newArr.length - 1; i++) {
      if (newArr[i] === newArr[i + 1]) {
        hasAdjacent = true;
        // 尝试在i+2位置之后找一个可以交换的元素
        for (let j = i + 2; j < newArr.length; j++) {
          if (
            newArr[j] !== newArr[i] &&
            (j === 0 || newArr[j - 1] !== newArr[i]) &&
            (j === newArr.length - 1 || newArr[j + 1] !== newArr[i])
          ) {
            [newArr[i + 1], newArr[j]] = [newArr[j], newArr[i + 1]];
            break;
          }
        }
        break;
      }
    }
    maxTries--;
  }
  return newArr;
}

function mergeNumbers(arr, factor) {
  // 分离小于3的数字和其他数字
  const lessThan3 = arr.filter((num) => num < 3);
  const rest = arr.filter((num) => num >= 3);

  // 根据因子计算需要保留的小于3的数字数量
  const preserveCount = Math.max(
    0,
    Math.floor((1 - factor) * lessThan3.length)
  );

  // 保留部分数字
  const preserved = [];
  const toMerge = [];

  // 随机选择要保留的数字
  const temp = [...lessThan3];
  for (let i = 0; i < preserveCount; i++) {
    const randomIndex = Math.floor(Math.random() * temp.length);
    preserved.push(temp.splice(randomIndex, 1)[0]);
  }
  toMerge.push(...temp);

  // 如果没有需要合并的数字，直接返回
  if (toMerge.length === 0) {
    return [...shuffle(rest), ...shuffle(preserved)];
  }

  // 计算需要合并的总和
  const sum = toMerge.reduce((acc, val) => acc + val, 0);

  // 计算合并后的数字数量范围
  const minSegments = Math.ceil(sum / 9); // 最少段数
  const maxSegments = Math.min(toMerge.length, Math.floor(sum / 3)); // 最多段数
  let bestSegmentCount = minSegments;

  // 寻找最优合并段数
  let minVariance = Infinity;
  for (let k = minSegments; k <= maxSegments; k++) {
    const base = Math.floor(sum / k);
    const remainder = sum % k;
    const values = [];

    // 生成k个数值
    for (let i = 0; i < k; i++) {
      values.push(i < remainder ? base + 1 : base);
    }

    // 计算方差（均匀度）
    const mean = sum / k;
    const variance =
      values.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / k;

    // 更新最优解
    if (variance < minVariance) {
      minVariance = variance;
      bestSegmentCount = k;
    }
  }

  // 生成合并后的数字
  const base = Math.floor(sum / bestSegmentCount);
  const remainder = sum % bestSegmentCount;
  const merged = [];

  for (let i = 0; i < bestSegmentCount; i++) {
    merged.push(i < remainder ? base + 1 : base);
  }

  // 组合结果并返回
  return [...shuffle(rest), ...shuffle(preserved), ...merged];
}

function processArray(twoDArray, factor) {
  return twoDArray.map((subArray) => {
    // 检查是否需要合并
    if (subArray.length > 6) {
      const countLessThan3 = subArray.filter((num) => num < 3).length;
      if (countLessThan3 / subArray.length > 0.35) {
        subArray = mergeNumbers(subArray, factor);
      }
    }

    // 打乱顺序
    subArray = shuffle(subArray);
    // 避免相邻重复
    return avoidAdjacentDuplicates(subArray);
  });
}

function distributeInteger(num) {
  //把文言文密文的载荷根据一定比例分成三份(一段)
  if (num <= 3) {
    // 如果 num 小于等于 3，则无法满足每个元素都大于 0 的要求
    return []; // 返回空数组，表示无法分配
  }

  let maxPart = Math.floor(num * 0.2); // 计算每个部分的最大值
  let remaining = num - 2 * maxPart; // 计算剩余部分

  const result = [maxPart, remaining, maxPart]; // 创建包含三个整数的数组

  return result;
}

function distributePayload(n) {
  // 如果载荷量太大，那么自动把载荷分为等大小的部分(段落)，然后分别处理
  if (n === 0) return [0];
  const k = Math.ceil(n / 100);
  const base = Math.floor(n / k);
  const remainder = n % k;
  const parts = [];
  for (let i = 0; i < remainder; i++) {
    parts.push(base + 1);
  }
  for (let i = remainder; i < k; i++) {
    parts.push(base);
  }
  return parts;
}

export function selectSentence(PayloadLength, RandomIndex = 0, p, l) {
  //句式选择函数。
  //P 强制对仗骈文
  //L 强制多用逻辑句式
  //句式选择算法
  //RandomIndex 随机指数，越大，给出的句式越随机，最大100。
  /* v8 ignore next 7 */
  if (RandomIndex > 100 || RandomIndex < 0) {
    //错误的输入。
    throw "Incorrect Random Index";
  }
  if (p && l) {
    throw "Contradictory Mode Setting";
  }

  if (PayloadLength > 100) {
    //如果密文太长了，那么自动分段
    let distributedPayload = distributePayload(PayloadLength);
    let Result = [];
    distributedPayload.forEach((Payload) => {
      Result = Result.concat(selectSentence(Payload, RandomIndex, p, l));
      Result[Result.length - 1].push("Z");
    });

    return Result;
  }

  let selectRand;

  let DividedPayload = distributeInteger(PayloadLength); //把Payload平均分配给三个部分。

  let SegmentedPayload = [new Array(), new Array(), new Array()]; //二维数组，保存分配之后的负载。

  let ElementResult = []; //最终要返回的语素序列

  //分配负载到一个二维数组中
  for (let i = 0; i < 3; i++) {
    //第一重循环，选择Payload

    let Payload = DividedPayload[i];

    for (let a = 0; a < Payload; ) {
      //第二重循环，用算法选择句式，满足载荷
      selectRand = GetRandomIndex(101) + RandomIndex;
      let PossiblePayload = [];
      for (let b = 1; b <= Payload - a; b++) {
        //三重，求取所有可能载荷。
        if (b == 9) {
          //最大为9
          PossiblePayload.push(b);
          break;
        }
        PossiblePayload.push(b);
      }
      //这里给出的可能载荷数组应当是从小到大的。
      let TargetPayload;
      if (selectRand <= 100) {
        //选择贪心最优解之一
        if (PossiblePayload[PossiblePayload.length - 1] > 6) {
          //如果可以选到6以上
          let GreedyRand = GetRandomIndex(91); //在三个多逻辑句式的载荷量之间随机选一个
          if (GreedyRand < 30) {
            TargetPayload = PossiblePayload[PossiblePayload.length - 3];
          } else if (GreedyRand >= 30 && GreedyRand < 60) {
            TargetPayload = PossiblePayload[PossiblePayload.length - 2];
          } else {
            TargetPayload = PossiblePayload[PossiblePayload.length - 1];
          }
        } else {
          TargetPayload = PossiblePayload.pop(); //目标Payload，参照这个去库里寻句式。
        }
      } else if (selectRand > 100 && selectRand <= 200) {
        //随机选择一个，不一定是最优解
        TargetPayload = PossiblePayload[GetRandomIndex(PossiblePayload.length)];
      }

      SegmentedPayload[i].push(TargetPayload);
      a = a + TargetPayload;
    }
  }

  SegmentedPayload = processArray(SegmentedPayload, 1 - RandomIndex / 100);

  //开始根据分配好的载荷执行组句
  for (let i = 0; i < 3; i++) {
    let Lib = "";

    switch (i) {
      case 0:
        Lib = "Begin";
        break;
      case 1:
        Lib = "Main";
        break;
      case 2:
        Lib = "End";
        break;
    }

    for (let a = 0; a < SegmentedPayload[i].length; a++) {
      let PossibleSentences = []; // 所有挑选出来的可能句式，选择时任选其一。
      let PossiblePianSentences = []; // 所有可能的骈文句式。
      let PossibleLogicSentences = []; // 所有可能的逻辑句式

      let TargetPayload = SegmentedPayload[i][a]; //目标负载
      for (let c = 0; c < Map_Obj["Sentences"][Lib].length; c++) {
        //开始选择句式
        let Sentence = Map_Obj["Sentences"][Lib][c].split("/"); //Sentence是列表，按照/分割的句式
        if (parseInt(Sentence[0]) == TargetPayload) {
          PossibleSentences.push(Sentence.slice(1));
          if (Sentence[0][1] == "C" || Sentence[0][1] == "E") {
            PossiblePianSentences.push(Sentence.slice(1));
          }
          if (Sentence[0][1] == "D" || Sentence[0][1] == "E") {
            PossibleLogicSentences.push(Sentence.slice(1));
          }
        }
      }

      let TargetSentence;
      if (p) {
        if (PossiblePianSentences.length != 0) {
          TargetSentence =
            PossiblePianSentences[GetRandomIndex(PossiblePianSentences.length)];
        } else {
          TargetSentence =
            PossibleSentences[GetRandomIndex(PossibleSentences.length)];
        }
      } else if (l) {
        if (PossibleLogicSentences.length != 0) {
          TargetSentence =
            PossibleLogicSentences[
              GetRandomIndex(PossibleLogicSentences.length)
            ];
        } else {
          TargetSentence =
            PossibleSentences[GetRandomIndex(PossibleSentences.length)];
        }
      } else {
        let LogiRand = GetRandomIndex(101); //给骈文和逻辑句式一个直接的插入概率
        //LogiRand max 200
        if (LogiRand > 25) {
          // 如果大于25，也就是说进入此的概率是75%
          TargetSentence =
            PossibleSentences[GetRandomIndex(PossibleSentences.length)]; //随机选句子
        } else {
          let PianOrLogi = GetRandomIndex(2); //0 or 1

          if (PianOrLogi == 0) {
            //选骈文。
            if (PossiblePianSentences.length != 0) {
              //没有可用句式就随机选
              TargetSentence =
                PossiblePianSentences[
                  GetRandomIndex(PossiblePianSentences.length)
                ];
            } else {
              TargetSentence =
                PossibleSentences[GetRandomIndex(PossibleSentences.length)];
            }
          } else {
            //选逻辑句式
            if (PossibleLogicSentences.length != 0) {
              TargetSentence =
                PossibleLogicSentences[
                  GetRandomIndex(PossibleLogicSentences.length)
                ];
            } else {
              TargetSentence =
                PossibleSentences[GetRandomIndex(PossibleSentences.length)];
            }
          }
        }
      }
      ElementResult.push(TargetSentence);
    }
  }

  return ElementResult;
}

export function enMap(input, key, q, r, p, l) {
  //加密处理的主函数
  //input.output Uint8Array
  RoundReset();
  RoundControlInit(key);

  let OriginalData = new Uint8Array();
  OriginalData = input.output;
  let TempS;
  TempS = Uint8ArrayTostring(OriginalData);

  let TempArray = new Uint8Array(OriginalData.byteLength + 1);
  TempArray.set(OriginalData, 0);

  //对未处理的数据计算校验和，放在末尾
  TempArray.set([GetLuhnBit(OriginalData)], OriginalData.byteLength);

  OriginalData = TempArray;

  if (OriginalData.byteLength <= 1024) {
    //压缩数据
    let SizeBefore = OriginalData.byteLength;
    OriginalData = UNISHOX_COMPRESS(OriginalData);

    if (OriginalData.byteLength == SizeBefore) {
      OriginalData = GZIP_COMPRESS(OriginalData);
    }
  } else {
    OriginalData = GZIP_COMPRESS(OriginalData);
  }

  let RandomBytes = new Array(); //取两个随机数作为AES加密的IV
  RandomBytes.push(GetRandomIndex(256));
  RandomBytes.push(GetRandomIndex(256));

  OriginalData = AES_256_CTR_E(OriginalData, key, RandomBytes); //AES加密

  TempArray = new Uint8Array(OriginalData.byteLength + 2);
  TempArray.set(OriginalData, 0);
  TempArray.set(RandomBytes, OriginalData.byteLength); //把IV附加在加密后数据的末尾，解密时提取
  OriginalData = TempArray;

  let OriginStr = RemovePadding(Base64.fromUint8Array(OriginalData)); //数据变成Base64，移除末尾的=填充

  let TempStr1 = "",
    temp = "";

  let size = OriginStr.length;

  //从这里开始做文章，开始文言文仿真，以及三重轮转对表。

  let Sentence = selectSentence(OriginStr.length, r, p, l); //选择句式
  let i = 0;
  let Finished = false;
  let hasSpecialEndSymbol = false; //标记，此短句是否有特殊符号
  let CommaCounter = 0; //逗号/顿号计数
  let CommaNumInSentence = 0; //统计短句内部的逗号

  let LastQuoteMark = false; //为避免连续冒号和引号，设立状态变量。
  let LastQuote = 0; //下引号的状态(上引号的距离)

  let NoAutoSymbol = false; //指定某一轮不自动添加标点符号

  RoundKey(); //首次对表前，先转动一次转轮
  for (let j = 0; j < Sentence.length; j++) {
    hasSpecialEndSymbol = false;
    CommaNumInSentence = 0;
    for (let k = 0; k < Sentence[j].length; k++) {
      //统计短句内部的逗号
      if (Sentence[j][k] == "，" || Sentence[j][k] == "、") {
        CommaNumInSentence++;
      }
    }
    if (LastQuoteMark) {
      LastQuote++;
    }
    for (let k = 0; k < Sentence[j].length; k++) {
      if (
        Sentence[j][k] == "V" ||
        Sentence[j][k] == "N" ||
        Sentence[j][k] == "A" ||
        Sentence[j][k] == "AD"
      ) {
        //拆解句式，对表。
        //这里会把载荷字给映射到对应的汉字，但是根据载荷字的类型而有所不同。
        temp = OriginStr[i];
        TempStr1 = TempStr1 + getCryptText(temp, Sentence[j][k]);
        RoundKey(); //每加密一个载荷字，就旋转一次转轮。
        i++;
      } else if (Sentence[j][k] == "MV") {
        //情态动词(非载荷字)，随机选择。
        TempStr1 =
          TempStr1 +
          Map_Obj["Actual"]["MV"][
            GetRandomIndex(Map_Obj["Actual"]["MV"].length)
          ];
      } else if (Map_Obj["Virtual"].hasOwnProperty(Sentence[j][k])) {
        //虚词(非载荷字)，随机选择。
        TempStr1 =
          TempStr1 +
          Map_Obj["Virtual"][Sentence[j][k]][
            GetRandomIndex(Map_Obj["Virtual"][Sentence[j][k]].length)
          ];
      } else if (Sentence[j][k] == "P") {
        //插入句号
        //倒数第二个句式禁止出现句号和问号
        if (j == Sentence.length - 2) {
          continue;
        }

        hasSpecialEndSymbol = true;
        TempStr1 = TempStr1 + "。";
      } else if (Sentence[j][k] == "R") {
        //插入冒号和引号
        if (LastQuoteMark == false) {
          //如果上个句式不是冒号句
          LastQuoteMark = true;
          TempStr1 = TempStr1 + "：“";
          LastQuote = 0;
          CommaCounter = 0;
        } else if (LastQuote == 1) {
          //进入此分支，意味着不会再次添加逗号
          LastQuote = 0; //如果两个连续冒号句子，那么会在下一个句子关闭引号，而非本句
          TempStr1 = TempStr1 + "，"; //加上逗号
          NoAutoSymbol = true;
          CommaCounter++;
        }
        //上个块是冒号句，这句话就不增加冒号(禁止连续两个冒号)
      } else if (Sentence[j][k] == "Z") {
        //插入段落分隔。
        if (!hasSpecialEndSymbol) {
          hasSpecialEndSymbol = true;
          TempStr1 = TempStr1 + "。";
          if (i != size) {
            //最后一句话后面不插入分隔
            TempStr1 = TempStr1 + "\n\n";
          }
        } else {
          if (i != size) {
            TempStr1 = TempStr1 + "\n\n";
          }
        }
      } else if (Sentence[j][k] == "Q") {
        //插入问号
        //倒数第二个句式禁止出现句号和问号
        if (j == Sentence.length - 2) {
          continue;
        }
        hasSpecialEndSymbol = true;
        TempStr1 = TempStr1 + "？";
      } else {
        TempStr1 = TempStr1 + Sentence[j][k]; //如果是句式中的其他字符，那么直接追加到句子中
      }
      if (i == size) {
        //如果已填充的有效载荷满足了预计添加的载荷，那么标记已完成。
        Finished = true;
      }
    }
    //这里是句式和句式的外层控制循环
    if (Finished) {
      //如果已完成，检查最后一个句式后是否有特殊符号，没有的话，自动添加句号
      if (q && !hasSpecialEndSymbol) {
        TempStr1 = TempStr1 + "。";
      }
      if (q && LastQuoteMark && LastQuote > 0) {
        //如果有未完成的冒号句，关闭冒号句
        TempStr1 = TempStr1 + "” ";
        LastQuote = 0;
        LastQuoteMark = false;
      }
      NoAutoSymbol = false;
      break;
    } else {
      if (q && !hasSpecialEndSymbol && !NoAutoSymbol) {
        //如果连续出现三个以上的逗号，那么自动加上一个句号
        let TestCommaCount = CommaCounter + (CommaNumInSentence + 1); //计算本句添加后可能的最大逗号数量
        if (CommaCounter < 3 || j == Sentence.length - 2) {
          //如果逗号数量没到门槛，而且这不是倒数第二个句式，那么就添加逗号
          if (TestCommaCount >= 3 && j != Sentence.length - 2) {
            //最大逗号数量也不能超过门槛
            TempStr1 = TempStr1 + "。";
            CommaCounter = 0;
          } else {
            if (LastQuoteMark && LastQuote > 0) {
              //如果有未完成的冒号句，关闭冒号句
              TempStr1 = TempStr1 + "” ";
              LastQuote = 0;
              LastQuoteMark = false;
            }
            if (!LastQuoteMark && LastQuote == 0) {
              TempStr1 = TempStr1 + "，";
              CommaCounter += CommaNumInSentence + 1;
            }
          }
        } else {
          //超过门槛就加上句号，然后重置逗号计数器
          TempStr1 = TempStr1 + "。";
          CommaCounter = 0;
        }
      }
      if (LastQuoteMark && LastQuote > 0) {
        //如果有未完成的冒号句，关闭冒号句
        TempStr1 = TempStr1 + "” ";
        LastQuote = 0;
        LastQuoteMark = false;
      }
      if (hasSpecialEndSymbol) {
        CommaCounter = 0;
      }
      if (NoAutoSymbol) {
        NoAutoSymbol = false;
      }
    }
  }

  if (!q) {
    //如果指定去除标点。除去自动添加的标点外，还要去除句式中的既有标点。
    let TempStrQ = "";
    for (let i = 0; i < TempStr1.length; i++) {
      if (
        TempStr1[i] != "，" &&
        TempStr1[i] != "。" &&
        TempStr1[i] != "、" &&
        TempStr1[i] != "？" &&
        TempStr1[i] != "：" &&
        TempStr1[i] != "“" &&
        TempStr1[i] != "”" &&
        TempStr1[i] != " "
      ) {
        TempStrQ = TempStrQ + TempStr1[i];
      }
    }
    TempStr1 = TempStrQ;
  }
  RoundReset();
  return TempStr1;
}

export function deMap(input, key) {
  //解密主函数
  RoundReset(); //重置/初始化解密所需要的转轮，从加密表直接生成解密表
  InitDecodeTable();
  RoundControlInit(key);
  let OriginStr = Uint8ArrayTostring(input.output);
  let TempStr1 = "",
    TempStrz = "";
  let temp = "",
    temp2 = "",
    group = "",
    findtemp = "";
  let size = OriginStr.length;
  //先筛选密文中的所有有效字符
  for (let i = 0; i < size; i++) {
    temp = OriginStr[i];
    if (temp == NULL_STR || temp == " " || temp == "\n" || temp == "\t") {
      //如果这是空字符
      continue;
    } else if (PayloadLetter.indexOf(temp) == -1) {
      continue;
    } else {
      //如果不是
      TempStrz = TempStrz + temp; //加上
      continue;
    }
  }
  size = TempStrz.length;
  OriginStr = TempStrz;
  RoundKey(); //开始轮转逆映射字符，还原Base64字符串
  for (let i = 0; i < size; ) {
    temp = OriginStr[i];

    findtemp = findOriginText(temp); //查找第一个字符的原文
    if (findtemp == NULL_STR) {
      /* v8 ignore next 2 */
      throw "Bad Input. Try force encrypt if intended.";
    }
    TempStr1 = TempStr1 + findtemp; //把找到的原文增加到字符串上
    RoundKey(); //轮换密钥
    i++;
  }
  TempStr1 = AddPadding(TempStr1); //轮转完成之后，为Base64字符串添加Padding
  //到这儿应该能还原出AES加密之后的Base64 TempStr1
  let TempStr2Int = new Uint8Array();
  let RandomBytes = new Array(2);
  if (!Base64.isValid(TempStr1)) {
    /* v8 ignore next 3 */
    //检查Base64是否合法，如果不合法，那么就没有必要继续处理下去
    throw "Error Decoding. Bad Input or Incorrect Key.";
  }
  try {
    TempStr2Int = Base64.toUint8Array(TempStr1);
    RandomBytes[1] = TempStr2Int.at(TempStr2Int.byteLength - 1);
    RandomBytes[0] = TempStr2Int.at(TempStr2Int.byteLength - 2);

    TempStr2Int = TempStr2Int.subarray(0, TempStr2Int.byteLength - 2);

    //取到两个字节的IV，然后对AES加密后的数据执行解密。

    TempStr2Int = AES_256_CTR_E(TempStr2Int, key, RandomBytes);

    //同时使用两个算法尝试解压缩，这两个算法都带有压缩特征校验。

    TempStr2Int = GZIP_DECOMPRESS(TempStr2Int);
    TempStr2Int = UNISHOX_DECOMPRESS(TempStr2Int);
  } catch (err) {
    /* v8 ignore next 3 */
    //解压缩/解密失败，丢出错误。
    throw "Error Decoding. Bad Input or Incorrect Key.";
  }

  if (!CheckLuhnBit(TempStr2Int)) {
    /* v8 ignore next 3 */
    //检查密文的校验位是否匹配
    //校验不通过，则丢出错误。
    throw "Error Decrypting. Checksum Mismatch.";
  } else {
    //校验通过，则移除校验位。
    TempStr2Int = TempStr2Int.subarray(0, TempStr2Int.byteLength - 1);
  }

  //到此，TempStr2Int 就是解密的结果，也就是原始数据(UINT8Array)。
  let Res = new Object();

  //组装一个对象，同时返回两种类型的解密结果。

  Res.output = Uint8ArrayTostring(TempStr2Int);
  Res.output_B = TempStr2Int;

  RoundReset(); //重置转轮
  return Res;
}

export function getCryptText(text, type) {
  //查表函数
  let letter = String(text); //源文本
  let idx, idx2, idx3, idx4;

  idx = LETTERS.indexOf(letter); //是否是小写字母
  idx2 = BIG_LETTERS.indexOf(letter); //是否是大写字母
  idx3 = NUMBERS.indexOf(letter); //是否是数字
  idx4 = SYMBOLS.indexOf(letter); //是否是符号

  //判断给定字符的类型
  if (idx != -1 || idx2 != -1) {
    if (type == "N") {
      for (let key in Map_Obj["Actual"]["N"]["alphabet"]) {
        if (Map_Obj["Actual"]["N"]["alphabet"].hasOwnProperty(key)) {
          if (key == letter) {
            let s2 = Map_Obj["Actual"]["N"]["alphabet"][RoundKeyMatch(key)];
            return s2;
          } else if (key.toUpperCase() == letter) {
            let s2 = String(
              Map_Obj["Actual"]["N"]["alphabet"][
                RoundKeyMatch(key.toUpperCase())
              ]
            );
            return s2;
          }
        }
      }
    } else if (type == "V") {
      for (let key in Map_Obj["Actual"]["V"]["alphabet"]) {
        if (Map_Obj["Actual"]["V"]["alphabet"].hasOwnProperty(key)) {
          if (key == letter) {
            let s2 = Map_Obj["Actual"]["V"]["alphabet"][RoundKeyMatch(key)];
            return s2;
          } else if (key.toUpperCase() == letter) {
            let s2 = String(
              Map_Obj["Actual"]["V"]["alphabet"][
                RoundKeyMatch(key.toUpperCase())
              ]
            );
            return s2;
          }
        }
      }
    } else if (type == "A") {
      for (let key in Map_Obj["Actual"]["A"]["alphabet"]) {
        if (Map_Obj["Actual"]["A"]["alphabet"].hasOwnProperty(key)) {
          if (key == letter) {
            let s2 = Map_Obj["Actual"]["A"]["alphabet"][RoundKeyMatch(key)];
            return s2;
          } else if (key.toUpperCase() == letter) {
            let s2 = String(
              Map_Obj["Actual"]["A"]["alphabet"][
                RoundKeyMatch(key.toUpperCase())
              ]
            );
            return s2;
          }
        }
      }
    } else if (type == "AD") {
      for (let key in Map_Obj["Actual"]["AD"]["alphabet"]) {
        if (Map_Obj["Actual"]["AD"]["alphabet"].hasOwnProperty(key)) {
          if (key == letter) {
            let s2 = Map_Obj["Actual"]["AD"]["alphabet"][RoundKeyMatch(key)];
            return s2;
          } else if (key.toUpperCase() == letter) {
            let s2 = String(
              Map_Obj["Actual"]["AD"]["alphabet"][
                RoundKeyMatch(key.toUpperCase())
              ]
            );
            return s2;
          }
        }
      }
    }
  } else if (idx3 != -1 || idx4 != -1) {
    if (type == "N") {
      for (let key in Map_Obj["Actual"]["N"]["numbersymbol"]) {
        if (Map_Obj["Actual"]["N"]["numbersymbol"].hasOwnProperty(key)) {
          if (key == letter) {
            let s2 = Map_Obj["Actual"]["N"]["numbersymbol"][RoundKeyMatch(key)];
            return s2;
          }
        }
      }
    } else if (type == "V") {
      for (let key in Map_Obj["Actual"]["V"]["numbersymbol"]) {
        if (Map_Obj["Actual"]["V"]["numbersymbol"].hasOwnProperty(key)) {
          if (key == letter) {
            let s2 = Map_Obj["Actual"]["V"]["numbersymbol"][RoundKeyMatch(key)];
            return s2;
          }
        }
      }
    } else if (type == "A") {
      for (let key in Map_Obj["Actual"]["A"]["numbersymbol"]) {
        if (Map_Obj["Actual"]["A"]["numbersymbol"].hasOwnProperty(key)) {
          if (key == letter) {
            let s2 = Map_Obj["Actual"]["A"]["numbersymbol"][RoundKeyMatch(key)];
            return s2;
          }
        }
      }
    } else if (type == "AD") {
      for (let key in Map_Obj["Actual"]["AD"]["numbersymbol"]) {
        if (Map_Obj["Actual"]["AD"]["numbersymbol"].hasOwnProperty(key)) {
          if (key == letter) {
            let s2 =
              Map_Obj["Actual"]["AD"]["numbersymbol"][RoundKeyMatch(key)];
            return s2;
          }
        }
      }
    }
  }
  /* v8 ignore next 2 */
  return NULL_STR;
}

export function findOriginText(text) {
  //反向查表函数
  let letter = String(text);
  let res;
  for (let key in DecodeTable) {
    DecodeTable[key].forEach((item) => {
      if (letter == item) {
        res = DRoundKeyMatch(key);
      }
    });
  }
  if (res) {
    return res;
  } else {
    /* v8 ignore next 2 */
    return NULL_STR;
  }
}
