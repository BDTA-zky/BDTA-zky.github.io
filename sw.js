/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","ed5e500d88f9fc8cd439d63c42e8c3e6"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","e3a87499b1c6ebbc6d3c31a3eef307c9"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","4ccbe3299849948abacd6e303fdf6fb0"],["/2023/04/22/验证码（random类）/index.html","142e8284b0ee930125f55d01ef65d05c"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","c214c0df06d36ee262fd5941d8fe9e1b"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","6451e17fd73f972db7388404b211f0b4"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","ae1ddd693988ea819fc2cb6c79c9cf92"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","c77073980a125cf66da77f9159ea032c"],["/2023/04/23/蓝桥杯-山（java）/index.html","b2b166276b8ad4b2339ed4c4d5022d7c"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","c3244a234bc7f2fa9f231d47f08021ba"],["/2023/04/23/蓝桥杯-时间显示/index.html","0e6e4f02729d01d52bcbbd7120c74647"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","de30c54c9483bc9217c06cbd060f1c7f"],["/2023/04/23/蓝桥杯-特别数的和/index.html","461f5872cadbb66d7b0c0ddf625260ec"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","c1ead01059aa1672d4ddf4afcb77e8df"],["/2023/04/27/案例2-1 商品入库（java）/index.html","b7995f900a2bf3304a63b6f2ccf2c278"],["/2023/04/27/猜数字（python）/index.html","6caf631498b39193f4fc7bd016ae6790"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","8960d2dd6d8c06343608a1f719c85b5c"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","baef3db807ca6bd0b288ad3b090adb18"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","40a884a903df93f86d2d99b19dff0eb3"],["/2023/05/02/数字三角形（JAVA）/index.html","8761d80f7d76a22b7d8238fb7db224fb"],["/2023/05/05/k倍区间（JAVA）/index.html","59e1581fe6da29675381bed2e623ee38"],["/2023/05/05/作物杂交（JAVA）/index.html","e86f257fcfd4397abedfc46a77dd77e7"],["/2023/05/05/包子凑数（JAVA）/index.html","316208385f811f8fe1757c871a86fa30"],["/2023/05/05/取球博弈（JAVA）/index.html","b0074b0a550f4501eb15ee99b5c6e80d"],["/2023/05/05/回文日期（JAVA）/index.html","8f3826166d012732d41cc0b0c79c891e"],["/2023/05/05/砝码称重（JAVA）/index.html","c245c8b09fe85549c27a283f2cd17687"],["/2023/05/05/等差数列（JAVA）/index.html","e71de81d72610733fb58eef8c532ca35"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","c7c4461761961b79c221c4d8157061eb"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","20c3b8ff2b3ac7b3b633094624f5ff0a"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","941e28f8a3cdb19ff6f0209ac6cc37e6"],["/2023/05/05/蓝桥杯--排序（python）/index.html","5d302ef9bdd7f00cbba3333bbcabc0b8"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","b5297a03b5910dce14d28c99c7123a81"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","c57fea6e1445761d540286df80a71da8"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","5dd8b91106a3db7853b5725e48079b47"],["/2023/05/05/蓝桥杯--空间（python）/index.html","075e155d2966d21f14cee4d6f81263de"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","518b2eb6e44de66fa6ad724d3b8ce17b"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","2b85d7818110cc3be70a9de9627dca00"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","f763e8e1cedc9f1a3b9cf35c62a1c8fd"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","c02395a863a789f8ce6dd43799c22135"],["/2023/05/05/蓝桥杯--质数（python）/index.html","b74a3a1119d8ef53b29315528d8962c0"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","e13e53b74ef92b9b1652d38bf758f438"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","b5d8834954d20e34b04742bf9b013769"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","59b6fd71846b77fc5c9411c7e23191a9"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","52d32339585dc58cf61d5e0df01ab99a"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","3103a86d71db2c87c140db4c07505505"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","c7d534214e3390cf6d634739dbc58e07"],["/2023/05/05/质数拆分（JAVA）/index.html","15b2bf41cfb55bd27547cf9b0dab0539"],["/2023/05/05/闹钟定时程序（python）/index.html","d053fd9a0f3462279cb31ed799e8e09f"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","cea38c701efa190deada89ea3030824d"],["/2023/05/07/GCD（JAVA）/index.html","76a7350fb71256f71320e9639606379c"],["/2023/05/07/七段码（JAVA）/index.html","4e5b4866db84887a8bc0b5aaeb025ea9"],["/2023/05/07/全排列的价值（JAVA）/index.html","6b97f1c353ecd8d47a28d45fcc7b5b8a"],["/2023/05/07/双向排序（JAVA）/index.html","396e82bad285652b85a6b06f3ec6545d"],["/2023/05/07/四平方和（JAVA）/index.html","b0e75be89e321551a273eba19c8bce8a"],["/2023/05/07/回文日期（JAVA）-1/index.html","6e0831ca5278164234665b51f945211f"],["/2023/05/07/山（JAVA）/index.html","8fb9e407843a2d99277e0af282c8b241"],["/2023/05/07/数位排序（JAVA）/index.html","fc1d18f170665233566ac3f1feba43a2"],["/2023/05/07/数组切分（JAVA）/index.html","4fb4627763a2a8bcb5b6b858980727cc"],["/2023/05/07/最优清零方案（JAVA）/index.html","e8b6da54d62474a98cc7de0f303903d0"],["/2023/05/07/最少刷题数（JAVA）/index.html","a401d31df826edf8dd11ab4731f1fbed"],["/2023/05/07/杨辉三角形（JAVA）/index.html","ff6387ac372d0b9b4b18789fc2b2e19e"],["/2023/05/07/求和（JAVA）/index.html","6fc9fca7d536b706dba809a5b0e24785"],["/2023/05/07/求阶乘（JAVA）/index.html","1fecb5321495264132921cd17e168f5d"],["/2023/05/07/牌型种数（JAVA）/index.html","722c3444b4dbbed20c0356bf16807c6b"],["/2023/05/07/猜字母（JAVA）/index.html","50ccde0e10ee9cc10a0cdd0fb09cf3d2"],["/2023/05/07/路径（JAVA）/index.html","c7baf5952c0f669640aa018d91e3229a"],["/2023/05/07/青蛙过河（JAVA）/index.html","d513edced7c437c9040d29e478c6e569"],["/2023/05/16/重合次数（JAVA）/index.html","bcfaddc41cb38595e3aa18fee69baf7d"],["/2023/05/22/左移右移（JAVA）/index.html","39ac71e5d68bc30749e1ad16cecd0c94"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","cf38aafa3dfd5de08eae085ab5864fc1"],["/2023/05/28/本质上升序列（JAVA）/index.html","870379d0d4a8fe40075b4084ed9b7a50"],["/2023/06/07/方格填数（JAVA）/index.html","9542d1da95532032fbb71d651e782ed8"],["/2023/06/09/合根植物（JAVA）/index.html","7f8888c649b8ffe26c3de06f8e5b294b"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","d97fdc6da99c3ba66e7a0bb203afefbc"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","246235cffbb73436aa7bc02a78010c30"],["/about/index.html","6504bf434f6734d541d6b687ef898296"],["/archives/2023/04/index.html","d7f90b0b64a532bdeb851a9f733fdfcf"],["/archives/2023/04/page/2/index.html","e9866ea7163a2ea3bc5567e6eb7bb6e3"],["/archives/2023/05/index.html","f542a9eaef3e87b17590b3703b76bed3"],["/archives/2023/05/page/2/index.html","4229ede05016c634036cd06d3752a9da"],["/archives/2023/05/page/3/index.html","5444923bcfc28a49154b544a38f89f79"],["/archives/2023/05/page/4/index.html","0bdfcb8a2ea5ab7022634a6ab926e208"],["/archives/2023/05/page/5/index.html","d8d4bd0de911e04f08b08a9d33e4b5fe"],["/archives/2023/05/page/6/index.html","5187001e800bb5b71ba970a6d2872111"],["/archives/2023/06/index.html","62f80a20e4659b1b2d919bf70c3f73c2"],["/archives/2023/07/index.html","ccf84c849c803158f15a9072067b28c0"],["/archives/2023/index.html","112a57c65326626b9cf27ee70111d6cb"],["/archives/2023/page/2/index.html","ab2bf86d24c9c5f7bddd8a47db74bce3"],["/archives/2023/page/3/index.html","2f49f2488233caa06128866ab5eb7cec"],["/archives/2023/page/4/index.html","93e9428215881a0c3f4c79a7be8a838d"],["/archives/2023/page/5/index.html","f7cfbb3ace67f2d002a6a6d266902436"],["/archives/2023/page/6/index.html","51080d75c000d260f65ebce467b531d4"],["/archives/2023/page/7/index.html","8eb2b4a8f059f76feb1ef1989f2bfd0c"],["/archives/2023/page/8/index.html","f099e6c3ce4d758581d95b1381d00c8c"],["/archives/index.html","5a88f2e44b740c91f1a455e06b9de927"],["/archives/page/2/index.html","30329d9033be90dedc80fbec3471c64c"],["/archives/page/3/index.html","d590051f52a66406de2bec4f8be269e1"],["/archives/page/4/index.html","181243a07a66680d758c97c3a9fd8039"],["/archives/page/5/index.html","3cc747ad95064c1f982ef9960351cefc"],["/archives/page/6/index.html","97d57a271078a3c7dc639ad2078bb97c"],["/archives/page/7/index.html","3edb113a3ebd714a3dd0cedd0d1274d0"],["/archives/page/8/index.html","a0d774333f55e0b9f1933f3f30004ca3"],["/categories/index.html","1a2d4806a04927577f78a91471629759"],["/categories/java/index.html","627ffb9e65d5fa70d574e8df1d022eb6"],["/categories/java/page/2/index.html","bf80b2195fdfee6555b95f6fbd61e89f"],["/categories/java/page/3/index.html","1840f68017ddd394f8ab7be67c23ecf2"],["/categories/java/page/4/index.html","a6388e657b63ea44ffb221f9a6366888"],["/categories/java/page/5/index.html","c7a4a9ed735168c93f3e05be6873a674"],["/categories/java/算法/index.html","e459c1a65d21a238c9935ea1a33a21f9"],["/categories/java/算法/page/2/index.html","c937fcb90f791ac9cb38cccffff39abd"],["/categories/java/算法/page/3/index.html","00ee865112fc8b7ab4b3f393a42f0fed"],["/categories/java/算法/page/4/index.html","2736ba0ff41f78e18fb1d0eea5aa45af"],["/categories/java/算法/蓝桥杯/index.html","fbdbb687ff7534db89bfaec340f46a3d"],["/categories/java/算法/蓝桥杯/page/2/index.html","ab57caf5bee7c358a67e577a3eb671b0"],["/categories/java/算法/蓝桥杯/page/3/index.html","38eaf631a57df32c63e48095e04708f3"],["/categories/java/算法/蓝桥杯/page/4/index.html","e8bfcaba2ba5d65c63e418484eb8d860"],["/categories/java/蓝桥杯/index.html","59202eb95ff1767957d2e1e97399f6cc"],["/categories/python/index.html","5ae30bde4a60a19f6b2f9215b5633deb"],["/categories/python/page/2/index.html","8d31e7bc9d4fa1181b76587923c2099f"],["/categories/python/page/3/index.html","306403c7889c885931dbd8fdcb8aa977"],["/categories/python/蓝桥杯/index.html","6c147915021a957d7072f39e9fa4bffd"],["/categories/python/蓝桥杯/page/2/index.html","a3528d6d82edba272b81ae3e27b7f36a"],["/categories/python/蓝桥杯/page/3/index.html","0a49d498987095ee91fe031b9914df0b"],["/categories/python/蓝桥杯/冒泡排序/index.html","1e77cd4d184d56ca5bf614619b148290"],["/categories/python/蓝桥杯/结构体/index.html","de88270bde41413a2c0f8b6b0028b324"],["/categories/python/蓝桥杯/链表/index.html","022196212f228cf032e8228a58333279"],["/categories/教程/index.html","e20578bef4fd4705b0cb86d3c85ac70a"],["/categories/日常习题/index.html","a3f0dc5377f2944242fd8d4ca43ac9a3"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","92d0c0907b281c2fb5550c06a647f764"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","7ca1256f7aa4b9602a3a4393f50e3e52"],["/page/2/index.html","cf603c11a0d165229f511d1601d97bea"],["/page/3/index.html","edd1222cc3967626c2154021d81dfcfa"],["/page/4/index.html","dd47ed7653f80564cf501e66b4013391"],["/page/5/index.html","3adbc05cd6ccfa522fa62f7aa7b8d519"],["/page/6/index.html","d813832cb5ac6b2a12ecff946a147e3f"],["/page/7/index.html","0ec26b39710d8a532487d39454592366"],["/page/8/index.html","cdae89fb54eafd5cc1d00a6ccfcd0665"],["/sw-register.js","b295e1d56a7f4e15dd35042c5e051cba"],["/tags/index.html","7966440fcdd4e7ebd6b6b52be7db24a1"],["/tags/java/index.html","d7d076bd024758f266fb3875134dbc3b"],["/tags/java/page/2/index.html","d6111289254ede78a475b57f4e86d120"],["/tags/java/page/3/index.html","5f620395ae1a56d15736dd91b86e7972"],["/tags/java/page/4/index.html","e850d57b9fde9b3b05f974ece83de856"],["/tags/java/page/5/index.html","92fd557f81e45ee25bc97c24874aa0ff"],["/tags/python/index.html","e7969527e26676c83ce714919f101dcd"],["/tags/python/page/2/index.html","6f1050c767ad40c70565df9ae09d8bc3"],["/tags/python/page/3/index.html","4e6d9272eff09ae3dda13bbf03766e16"],["/tags/冒泡排序/index.html","599313ae25c14036e90b5a69737cc835"],["/tags/算法/index.html","dd1eda9fe4a0522ed88e8bf8e035c688"],["/tags/算法/page/2/index.html","65121c15cc802e25ddf5e7fb9ce8c8ec"],["/tags/算法/page/3/index.html","924ecdf41c86a40ad22ee87bbe1bb865"],["/tags/算法/page/4/index.html","5645018e2f137a1260b00455a0ee019c"],["/tags/结构体/index.html","61e70acb75d44853e76cc6759460c7fb"],["/tags/蓝桥杯/index.html","b7874e3a0bbcd6d6ef080a13bc484561"],["/tags/蓝桥杯/page/2/index.html","eef61f7a4b707aea8827da3fc0675a8e"],["/tags/蓝桥杯/page/3/index.html","96aab7dd1dae92aa978b41e774bbd3ba"],["/tags/蓝桥杯/page/4/index.html","d8d53ee9cd2eaf6d55210a6ca7a4f155"],["/tags/蓝桥杯/page/5/index.html","d5dfa3c241b9df58cd8b57c3b1c6a5cc"],["/tags/蓝桥杯/page/6/index.html","b91cdbffe75515fbdc3f991d06085fd9"],["/tags/蓝桥杯/page/7/index.html","f16559d13be30cff730892abfb775552"],["/tags/资源教程/index.html","78066d75020ea025442577138d817eae"],["/tags/链表/index.html","e7db5b418399f137452193fa7eb6d110"]];
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
