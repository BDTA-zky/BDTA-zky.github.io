/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","bbf2d42a97de4f470d0524560cdff978"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","fff113610e40b572dcb4c7d0104d5707"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","e0603bc2270c3e14063e061d1d8937dd"],["/2023/04/22/验证码（random类）/index.html","c1a4d80be6ff709f52985c4b104fb5d8"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","76ce1cdb7021dd4f4364cd5e1248bd59"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","88d38a4d36595cc90f24c9dfbeb89452"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","23af06d26f043348398ebb12419bfafb"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","d7091cddd75bc281147014b27f656edc"],["/2023/04/23/蓝桥杯-山（java）/index.html","17a382fa8619d9247d73ede7e195be1e"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","51cc1f6ccf76825dbb62f7b830e6df01"],["/2023/04/23/蓝桥杯-时间显示/index.html","641fd202be1ef697adbee8ef6a034983"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","dc40514439b712766b26ec3a3e524864"],["/2023/04/23/蓝桥杯-特别数的和/index.html","ec2552bf3bfff73f0c925998398342db"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","909e49d9be2b9507cd6eb247daf50315"],["/2023/04/27/案例2-1 商品入库（java）/index.html","7c43de6abc73104911016c7a5c3b35c1"],["/2023/04/27/猜数字（python）/index.html","911b67722cc6e3b3716f3a8c2b5361aa"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","f2871295add48c5fc0ad48bea6e4241e"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","a35cc4ea04dedce22ca25b1e5f8b5a9b"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","7bcac2f4110af2dca75803b168760692"],["/2023/05/02/数字三角形（JAVA）/index.html","04d983fefbdf5f6db1776120491dd612"],["/2023/05/05/k倍区间（JAVA）/index.html","4f8fe2aaa4c8eeb14da7ad573d5a6daf"],["/2023/05/05/作物杂交（JAVA）/index.html","c0b95fd64de1b4385d6aea3884578276"],["/2023/05/05/包子凑数（JAVA）/index.html","8cd307c46fde96bf4d494100c09ae73e"],["/2023/05/05/取球博弈（JAVA）/index.html","b89b73a5257c6c6e814148b93388d2ae"],["/2023/05/05/回文日期（JAVA）/index.html","1acfb639551bbfbb3db8fc211bccc66e"],["/2023/05/05/砝码称重（JAVA）/index.html","f28e349f83aaf5d152c0dfbda9b0baa9"],["/2023/05/05/等差数列（JAVA）/index.html","b6333697c7a2dbcbe6a0e5002f0a78a5"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","5b31638054cb875aca271f4065293d25"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","77612453d9f9d91b11c0c33e56cb8dfb"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","9b3fc88a1138f44941a86e721bd1e47f"],["/2023/05/05/蓝桥杯--排序（python）/index.html","6e4b5ba2ec764702e17788aa8f8027e6"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","77e0695e6e86347e611d1004908bbc95"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","9ac72f127a7639bf56a47805a44444cb"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","49b9d80382b74484e0527be203ed2aef"],["/2023/05/05/蓝桥杯--空间（python）/index.html","d5da909272de3a2bb25be1522efc228d"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","6f61b36a2291244616f4a0552de6f8b9"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","2440c3573c6eeccbbb9bcc4336a8e2bc"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","98b191b0655b43192c42546f63018a39"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","d8e051dfa3df4c605a8318ae10e7fcf4"],["/2023/05/05/蓝桥杯--质数（python）/index.html","58d370f040087152f84176a783e41714"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","b1714b5958daefb52cc7c33bf419817d"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","52da377b19f63f35d6448b1cd63d0b33"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","eb72ad08c2c93a5eeb9a33323459fbb2"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","6262804701f8ed815f77d929dc979b9e"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","6d92ae5bc793bc45d61bcfa14250b916"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","ee8487d905434b31e96047d985070585"],["/2023/05/05/质数拆分（JAVA）/index.html","a0ff33c45e22088532876255995d4b3b"],["/2023/05/05/闹钟定时程序（python）/index.html","2f81030ed8b1347da0cc21355bfdbf07"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","c631d3d0f32202840799335dce06944c"],["/2023/05/07/GCD（JAVA）/index.html","1f21cac2039136b3e7a3d34acf2c3905"],["/2023/05/07/七段码（JAVA）/index.html","19adafd32eae87040697ff199f6cdec7"],["/2023/05/07/全排列的价值（JAVA）/index.html","c54a5c052171bc488c3f1268aa4bc8ee"],["/2023/05/07/双向排序（JAVA）/index.html","81c70c9ef7add90c7fa6958adf3fa58f"],["/2023/05/07/四平方和（JAVA）/index.html","f38a318a7d20c5dc355d3dd9aac15395"],["/2023/05/07/回文日期（JAVA）-1/index.html","6923ddb6bebf7585a854b33772377f4a"],["/2023/05/07/山（JAVA）/index.html","5e5ddf495e807e4c191f4132a518b9fe"],["/2023/05/07/数位排序（JAVA）/index.html","c2f80e170b5cf2608a4fbddc91d3baf6"],["/2023/05/07/数组切分（JAVA）/index.html","2b0a4f263fbe1d8b92c01c66887b3dc0"],["/2023/05/07/最优清零方案（JAVA）/index.html","b5f1d740948e905ceba8cb36b33ec529"],["/2023/05/07/最少刷题数（JAVA）/index.html","22bc432936e8bd227ce1a91d7dc00426"],["/2023/05/07/杨辉三角形（JAVA）/index.html","4657f88782f70b9aa8ada1d5a1a29b09"],["/2023/05/07/求和（JAVA）/index.html","680ed9c2d2025958651c38a510abe208"],["/2023/05/07/求阶乘（JAVA）/index.html","16efe58e192822c54295827cc166bb03"],["/2023/05/07/牌型种数（JAVA）/index.html","2c02b66845815127228b453ff118516b"],["/2023/05/07/猜字母（JAVA）/index.html","bdcfe7f115aa0a8011626e2c36b07e71"],["/2023/05/07/路径（JAVA）/index.html","7edde34e5b938995b68d40e19865711c"],["/2023/05/07/青蛙过河（JAVA）/index.html","c5b43e7f76a361e90570431edfd6f0d1"],["/2023/05/16/重合次数（JAVA）/index.html","829c2d83af317a4776f41cf10fa76056"],["/2023/05/22/左移右移（JAVA）/index.html","ec634f8f62c29545e8d8d960bba59467"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","5acc308c7244febce27fdb4649e62678"],["/2023/05/28/本质上升序列（JAVA）/index.html","66cf5b3c887950519fd9f5767d172bd6"],["/2023/06/07/方格填数（JAVA）/index.html","c6b4cd71c096c65a9dce209953351818"],["/2023/06/09/合根植物（JAVA）/index.html","62384b8fbc05c49d6380353b10eb220e"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","694e44443874d1d11cd4df8a1281d30d"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","2ec365b87c561e67751476d079529b6d"],["/2023/07/08/成绩排序（java）/index.html","ec0eee91e360d240882fe81b12cb8f25"],["/2023/07/08/数字加密和解密/index.html","7f4cf42390dc8072eb12d2a77e8f6e95"],["/2023/07/08/案例3-1-基于控制台的购书系统/index.html","18b9f24f9cc44608ef3e0c46122b4e86"],["/2023/07/08/案例4-7-经理与员工工资案例/index.html","609c09cbc81ccdd728c13a77573d6e50"],["/2023/07/08/蓝桥杯-字符统计/index.html","d4fd7a37a239c4116d4def07f53c9a15"],["/2023/07/08/蓝桥杯-数列求值/index.html","5bf2b199305563b930e18c82c33e0088"],["/2023/07/08/蓝桥杯-数字三角形（java）/index.html","1bffa5fbba4fc48607b1745f4aa6dcc5"],["/2023/07/08/蓝桥杯-既约分数/index.html","cbbd21241542b186720a73ac4ad252c1"],["/2023/07/08/蓝桥杯-蛇形填数/index.html","0bb2c833349267cbcc511f72de455352"],["/2023/07/08/蓝桥杯-链表数据求和操作/index.html","0947b537a61ae8751d139f80613e3835"],["/2023/07/08/计算球体积/index.html","3e1371411cd4583dc0d83ad4b8d37911"],["/2023/07/08/计算矩阵边缘元素之和（java算法优化）/index.html","8e3d2d39cbd2dd20a969160286d15dc8"],["/2023/07/09/案例2-2-小明都可以买什么/index.html","998e2552010a7b88c8e519149be5bb0e"],["/about/index.html","1ba24ad24369ae0ed00c04d91a032179"],["/archives/2023/04/index.html","e0928f9a31b0bb2c8ec906b34b9059f5"],["/archives/2023/04/page/2/index.html","632183313f577b7b0014916edbba812d"],["/archives/2023/05/index.html","35328d3af79aed51f2851c12a34cdc3a"],["/archives/2023/05/page/2/index.html","7be18d6f786e87796c33ab35d9d13d45"],["/archives/2023/05/page/3/index.html","32e46fa1bffdf92001237f524109f604"],["/archives/2023/05/page/4/index.html","5508f22dc651fb071d6b1216aaeac4c4"],["/archives/2023/05/page/5/index.html","9d956e986b268d546baa75c9d6ce1929"],["/archives/2023/05/page/6/index.html","8b0a7d3edcf352cf938a387579e2ab50"],["/archives/2023/06/index.html","13fa6789751ba708e4cc86719d98e519"],["/archives/2023/07/index.html","bd7dd5bf71e0700de56bb8a6e82b87d7"],["/archives/2023/07/page/2/index.html","5f5a2de95e64910a87d47abb888f3fc7"],["/archives/2023/index.html","5a274d4b124a01fccf010eb25c7956bd"],["/archives/2023/page/2/index.html","0a184eb3cebdfeca3c843074c6384d97"],["/archives/2023/page/3/index.html","f85b80e276ab8ce234e883c742d2f29f"],["/archives/2023/page/4/index.html","f9321e6b6735725ee9d7890d62397719"],["/archives/2023/page/5/index.html","682762739cb3bce39a0c374141c9f9ad"],["/archives/2023/page/6/index.html","a0ddd4e36a62b39b63acf7cfef0f599d"],["/archives/2023/page/7/index.html","f634dc4f15f073af3cdd637e57f654f9"],["/archives/2023/page/8/index.html","8a6c49ac4adddcc71848d1254be2d5c2"],["/archives/2023/page/9/index.html","e260d13711d5bfc6e0a120a58577621b"],["/archives/index.html","d180e390f7aab2aaa97c6243d47e4187"],["/archives/page/2/index.html","b32fd87362ea469431deb58f889c7de1"],["/archives/page/3/index.html","596505e453e06ab7b08212ca7b7494cc"],["/archives/page/4/index.html","929eeef92d6723edff29a8708dbf9db6"],["/archives/page/5/index.html","ce624ebcf53176d437432458bdd01f73"],["/archives/page/6/index.html","44fa66015daec6df8802365baaffc43d"],["/archives/page/7/index.html","2339349e22aa48e8599df8ed888ff2ec"],["/archives/page/8/index.html","9bb58425c6565683800a7eb7ee87658e"],["/archives/page/9/index.html","662b8a6263cb0d5f55d14b6112e75599"],["/categories/index.html","6d1ce4d15180cf46df17fe0bfaf90396"],["/categories/java/index.html","75ec7025e47cfd3f799f1ff6f9860b5b"],["/categories/java/page/2/index.html","d228dd11c1c326cef1036ecb3c701d3e"],["/categories/java/page/3/index.html","aa5d7c3c8b663ef6b01d0c4599fc9c44"],["/categories/java/page/4/index.html","38f32ed88bec019409cc8606b9d5fdd5"],["/categories/java/page/5/index.html","206ba6d872de438e2132cfe9e0ef8fb2"],["/categories/java/page/6/index.html","1ab38f62d0c306648267a3da06ebf932"],["/categories/java/算法/index.html","a252431dbeff393f2895366c54ba0e58"],["/categories/java/算法/page/2/index.html","10ed75afb593b9d4d2e590ca74849f55"],["/categories/java/算法/page/3/index.html","33e2897efb5af188dffe336596972964"],["/categories/java/算法/page/4/index.html","9791f8e8626de5913d4c0bfdb7b7e9e5"],["/categories/java/算法/蓝桥杯/index.html","99f61f1f152289faf07b7edc8993f16e"],["/categories/java/算法/蓝桥杯/page/2/index.html","d3989eabf180c8bfd660c148ea031fee"],["/categories/java/算法/蓝桥杯/page/3/index.html","27bdeec001c31dc63468c024eafcec13"],["/categories/java/算法/蓝桥杯/page/4/index.html","083605113909e883d11a2979168333a5"],["/categories/java/蓝桥杯/index.html","32aa73a072446e4b32aa3a032b963413"],["/categories/java/蓝桥杯/page/2/index.html","664aaa97265983b0ee1c4d9553e62eac"],["/categories/python/index.html","12db41d194e9251130fbaaa0e9341056"],["/categories/python/page/2/index.html","73161e6f52af4600e07be40fd81e8f29"],["/categories/python/page/3/index.html","ad5dd9d122fa8df6706a9fcc32472f1b"],["/categories/python/蓝桥杯/index.html","17f3567bcccde10861d524859f19da55"],["/categories/python/蓝桥杯/page/2/index.html","e8a6cfbddd2d79c89051b1abc8e7ac8e"],["/categories/python/蓝桥杯/page/3/index.html","53ed1ced61b0e8a676ec522c6e643ef4"],["/categories/python/蓝桥杯/冒泡排序/index.html","974b4fbe5234ffd76fc2539f1c3d50d7"],["/categories/python/蓝桥杯/结构体/index.html","cf376dbb6c8ff751003c697b03c9ec44"],["/categories/python/蓝桥杯/链表/index.html","447785b02f5c9af34c4843600b0c7009"],["/categories/教程/index.html","2a9172fd6bcb4e04d5e150ceed8ed37e"],["/categories/日常习题/index.html","22328b1c066d754c8d17b34af92568f9"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b332e72ce2aab569979e129793ecd5be"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","e08bb313f14cf7dfe5f9f5d5ee710a88"],["/page/2/index.html","1304a7b6454be51674ac66cb4b5ebfe1"],["/page/3/index.html","b069ba2e60f6d345fbaddcd54c145d0b"],["/page/4/index.html","94fa8dd3a4c1594f5428913a987707fd"],["/page/5/index.html","f3723d5673b3f45ce5499f800544788e"],["/page/6/index.html","9f5d827c96dde931be8dc3e371974034"],["/page/7/index.html","f6f469223a66e3150d1ee8e75bd05cde"],["/page/8/index.html","cce2bf499676762ac5a15b1535687579"],["/page/9/index.html","9224ebcd71af9e6f748782795b98114a"],["/sw-register.js","85bef8b3f3991a624d100806d6f47632"],["/tags/index.html","ec4640f2ee6aa5ebe3c04c0d8a2fdf3f"],["/tags/java/index.html","db6a6c3a10bc475864c23486e443b7fb"],["/tags/java/page/2/index.html","07889e993a8842082189b38789db5d7e"],["/tags/java/page/3/index.html","44658811b4bb65a0e9ec5be147cc48cb"],["/tags/java/page/4/index.html","8b4fa65d512c18eb1afae6ba2deaf2c5"],["/tags/java/page/5/index.html","9b64cbdaa6a1d6760c5094ab699b63e8"],["/tags/java/page/6/index.html","b708609065c65b69fe2e7e5dd3434495"],["/tags/python/index.html","22927dc699547b1e44c2a2ca08dee68e"],["/tags/python/page/2/index.html","53c53d28446fc6ffadd31e9a2aaff30b"],["/tags/python/page/3/index.html","a65ba74c97c2aa026b4ea65faefae583"],["/tags/冒泡排序/index.html","7f3882ef1ddfcbfe5aa105b814087980"],["/tags/算法/index.html","3f35f70a96cc9027d18b8512a30a373b"],["/tags/算法/page/2/index.html","6048b52f75879c88914649b08f4f5153"],["/tags/算法/page/3/index.html","74c7df23364a8c865527fbd5c2661a97"],["/tags/算法/page/4/index.html","d780dd2a18c779599f1a25071f681b64"],["/tags/结构体/index.html","c29ea14d2ae70cab412c930d2e84e99a"],["/tags/蓝桥杯/index.html","b94c87c6b6e6e3d59fadf34a27f13a9b"],["/tags/蓝桥杯/page/2/index.html","8e52b613e5ce8c1382b867fc9b3e5b41"],["/tags/蓝桥杯/page/3/index.html","514f3b9b56e6db153cc1a209f149fb43"],["/tags/蓝桥杯/page/4/index.html","c71d2a1111549127bcc1f6ffb23d9692"],["/tags/蓝桥杯/page/5/index.html","1f9e1e50ebce18066227d26211d007c0"],["/tags/蓝桥杯/page/6/index.html","9835a54bab146a29a7181f3066a7a728"],["/tags/蓝桥杯/page/7/index.html","af76f82668d5d243a2873cb583389058"],["/tags/蓝桥杯/page/8/index.html","666db33cdd84fce1a05babd8578d4e6a"],["/tags/资源教程/index.html","c2bec6c34e037eff1930465b36247a89"],["/tags/链表/index.html","fb4c35e426f767d6638169dee97e69cc"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
