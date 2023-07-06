/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","76d20fd9e36f82f91c46eea5fc600289"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","9f436ba4d3fe9c1eeec86f54c8d865f8"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","6c5cd07ed033abca3a449ec89787afe1"],["/2023/04/22/验证码（random类）/index.html","a48752f67819eb585428be80f7ad171d"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","180de5ba4320f547ca8b892681ea31d4"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","fa0a861f0495e09576cf1024849885cb"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","a53bd9af8800d4a7e73364c0a7885ae7"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","8b46ab9e6f9f03abd765d671eaa0160a"],["/2023/04/23/蓝桥杯-山（java）/index.html","087d4345289da57078ab2b3da068098f"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","30f1d711443984709aa85391f81126a0"],["/2023/04/23/蓝桥杯-时间显示/index.html","89d2d9dac204358db9442955c97797a8"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","e15c2e3ca22b7e5b69ce8fdc4bfa2856"],["/2023/04/23/蓝桥杯-特别数的和/index.html","afba93e6ffe800578dce46a66e8fe816"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","f257a59d4a1672a1bbebc0f22e2e0dd4"],["/2023/04/27/案例2-1 商品入库（java）/index.html","0c8789c123d565c9ee2077d718420ffe"],["/2023/04/27/猜数字（python）/index.html","ed3c1a5b34840c65ca49fed32913cc92"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","ff165824bf916726e678f4e9e5cc0e3a"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","260dac03417fb05203f652605ea55c33"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","d62b77e74d3847424a5ef809c97a2de5"],["/2023/05/02/数字三角形（JAVA）/index.html","a75678c56e146aed6856cdc7182cf235"],["/2023/05/05/k倍区间（JAVA）/index.html","69d67ae159f9012f5aac65785b0f66d2"],["/2023/05/05/作物杂交（JAVA）/index.html","ae9f4e3be24766788fb43fcdab1ac588"],["/2023/05/05/包子凑数（JAVA）/index.html","6d7b4518a2b29c2768d05dc8f099a11d"],["/2023/05/05/取球博弈（JAVA）/index.html","e8116e26c5baa47a3a8c6261336decc7"],["/2023/05/05/回文日期（JAVA）/index.html","ab14ca027f1877b803b15034a7261f65"],["/2023/05/05/砝码称重（JAVA）/index.html","cb5da05d32cf0d05cb55c1f7ae5621a3"],["/2023/05/05/等差数列（JAVA）/index.html","8413829ebad7aa9bac3dc2a25ce0a525"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","f5fd7976541d8b8e51470c2e292ab3a2"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","3a612731f5e75e7b97639b283e56e195"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","4ff0a341b69c703f26779ab60be997c6"],["/2023/05/05/蓝桥杯--排序（python）/index.html","845005c7ea3eb12599b8c2069fd92e63"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","6fab13cb9a6944e556c2873901aec794"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","66f6a8e772f01a1dd561f21b36d13f87"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","cd7eee70a06d2d5ff51f5a2eebadd1b4"],["/2023/05/05/蓝桥杯--空间（python）/index.html","786df381e7c189f3fc6b5dfe7390aab1"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","c6d9b8a39fbd2eac4964cd35b427500f"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","e58536ab2338f0a570b38476d56f707a"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","4dc0a031197d9a7731c4939575d11bd8"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","b8e4d487aab05df46ea7a0cbfe80cc2a"],["/2023/05/05/蓝桥杯--质数（python）/index.html","402ca238d8035e21c3f516e0ee4e81da"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","bc6fbb4b9a88a8d3d32decac8e64af44"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","972e94fec6c76316475d4f064ed32d97"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","781418d253b11b0a6e130d903cb509d1"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","d3fc8c52da873411cec747b023d9045b"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","bb617957912541ab6af929b70b541277"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","a6cf3a586a9b546a1b970972a0144a75"],["/2023/05/05/质数拆分（JAVA）/index.html","686bce10db6d253c2afc07f7f9ec322a"],["/2023/05/05/闹钟定时程序（python）/index.html","9edc3d05bd663be208c96a573701160e"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","edea6801920bf8550011d389b49f8adf"],["/2023/05/07/GCD（JAVA）/index.html","d4695eb3161d3193727d305bd1fb29ab"],["/2023/05/07/七段码（JAVA）/index.html","82d3a7e5e4803b9857a9db7e13e2f214"],["/2023/05/07/全排列的价值（JAVA）/index.html","b3b49412f36bf2bdf22dfc36b20ae897"],["/2023/05/07/双向排序（JAVA）/index.html","fd46dbdc52e3dae4a866a729b148774f"],["/2023/05/07/四平方和（JAVA）/index.html","ec5a26158d2336747d534e3330b05202"],["/2023/05/07/回文日期（JAVA）-1/index.html","587e9ffea20908f9c5d6e56cb1dbdfc0"],["/2023/05/07/山（JAVA）/index.html","ecae38319c8d4389ea6610bfa7b976d1"],["/2023/05/07/数位排序（JAVA）/index.html","25a2230d98d1b9282a7cb2992336d634"],["/2023/05/07/数组切分（JAVA）/index.html","d1822c2bf34bbd4b3bc7f98b658d2f73"],["/2023/05/07/最优清零方案（JAVA）/index.html","e09de4237bce7caf34173be4c8c639e5"],["/2023/05/07/最少刷题数（JAVA）/index.html","c82d147d9ad2feb90e58f3979fa41a9a"],["/2023/05/07/杨辉三角形（JAVA）/index.html","91ea9f4cb79acd62852b1f954ceb43cf"],["/2023/05/07/求和（JAVA）/index.html","99ca4bb38a186e6fdbd19f93e034f236"],["/2023/05/07/求阶乘（JAVA）/index.html","5ceff3340a43d719e07a9e7127a7ce66"],["/2023/05/07/牌型种数（JAVA）/index.html","ad422e9e0eac00622917310b13cbb339"],["/2023/05/07/猜字母（JAVA）/index.html","b012702c065d6ca15b4895b6d0acbcee"],["/2023/05/07/路径（JAVA）/index.html","885c8144f8315ae4c91f90d6c001f9e1"],["/2023/05/07/青蛙过河（JAVA）/index.html","1c7db87d3ea03c9422f0d629989414f2"],["/2023/05/16/重合次数（JAVA）/index.html","36f9f64e04f027ce4d2d319f5230db39"],["/2023/05/22/左移右移（JAVA）/index.html","11afd39150261181d091ced8bbb25829"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","9638547737fa6c8592d48d4f747bd486"],["/2023/05/28/本质上升序列（JAVA）/index.html","5f9c48de34dc732df45c596947a132a4"],["/2023/06/07/方格填数（JAVA）/index.html","4105807b2a48f317f069c502a0ff7446"],["/2023/06/09/合根植物（JAVA）/index.html","37482a93ac81ffd6262a8b933383b6c3"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","2fa69686dd00d1b9cafed60dc3f74a5f"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","3a7a414b4e183cca1680c2f06bc47ed8"],["/about/index.html","f8b4276eff071901f238bae2dd7289fe"],["/archives/2023/04/index.html","362006421c8a4503c4a6f1ce468fbd24"],["/archives/2023/04/page/2/index.html","ab3b880df2a27f5b6a0ae90ed6db997d"],["/archives/2023/05/index.html","41f6bc0820c99004c989a7becd27325e"],["/archives/2023/05/page/2/index.html","16488b4cc8b6bb5437bf3560f79ee5e6"],["/archives/2023/05/page/3/index.html","3edaaca5045d835967a7f826796a6884"],["/archives/2023/05/page/4/index.html","72c8bf60aac8846de50edb9baadddf4a"],["/archives/2023/05/page/5/index.html","a919d9bc03ed31eb47d022d94bd92afd"],["/archives/2023/05/page/6/index.html","bec486f50480118d274cd005c7db8e4d"],["/archives/2023/06/index.html","56703409e8bcabb757f6645a8bfe0fed"],["/archives/2023/07/index.html","3e6fed29943439ce175453349ae0103f"],["/archives/2023/index.html","04f0987de19add1ebfee98cbf56ca1f7"],["/archives/2023/page/2/index.html","5e5ec1d772f24bda736ea8ad3c505324"],["/archives/2023/page/3/index.html","e1e4779f3f60e811aa539647b9ab98dd"],["/archives/2023/page/4/index.html","0bc4de9fea8918b276d0abe7cbecbf07"],["/archives/2023/page/5/index.html","d573ae734abd3c990ddd426cf3752f1e"],["/archives/2023/page/6/index.html","3db714a4cdb0ba35c0401096d0602840"],["/archives/2023/page/7/index.html","83ebb8d4054ec6cb623bae4fc1a3041a"],["/archives/2023/page/8/index.html","44e815cc974b97a9cbd530770d76c18f"],["/archives/index.html","8d08e656344e1e605bf48fe31a4a5872"],["/archives/page/2/index.html","0e647734c1a4e3031a53d400b8e414e9"],["/archives/page/3/index.html","c9c4fd47ec2dfb20eaf059d2d14a7d6d"],["/archives/page/4/index.html","60a348a379cbda26c585dfb3f11d0422"],["/archives/page/5/index.html","dcf732a5c57b85f6f94756efd39a7923"],["/archives/page/6/index.html","d667d322f31890218c646bf8114f0558"],["/archives/page/7/index.html","867ec5f3e3df7a7d20e4f80216da398a"],["/archives/page/8/index.html","5441ebb06275f2ca534204b12ba09e5d"],["/categories/index.html","6f46fc529b379ee55729b57faf3934fe"],["/categories/java/index.html","3e04a95178f6c4e1d9bcc6f1ec110feb"],["/categories/java/page/2/index.html","21ce6d8ff1b59d74b8eef1876f03be93"],["/categories/java/page/3/index.html","de4528439aa121f286bbb4fd77f7ed28"],["/categories/java/page/4/index.html","3d9c14d93c3cede532895def08df83a4"],["/categories/java/page/5/index.html","0c4db3de2e6711fa9b77599bad54aca4"],["/categories/java/算法/index.html","194f7bee39f285d0ca0b564f8d3595ba"],["/categories/java/算法/page/2/index.html","d153dd6adb586c22b6803b9ef8c70226"],["/categories/java/算法/page/3/index.html","782da8ebe071269dd82ae852983fe7b3"],["/categories/java/算法/page/4/index.html","7d3156ac0b98c1588a8379bfe75ddd6d"],["/categories/java/算法/蓝桥杯/index.html","5c402090e54ab57492ff93ce0bd8f995"],["/categories/java/算法/蓝桥杯/page/2/index.html","eae82b4cf1a0d2a10200074b4b995472"],["/categories/java/算法/蓝桥杯/page/3/index.html","1442b6c56756a62030a76bf72324a4be"],["/categories/java/算法/蓝桥杯/page/4/index.html","2bd0aa5b0b59b880e3c607555f2cc999"],["/categories/java/蓝桥杯/index.html","d64496b14bf38302dbbda4f730c8a5f7"],["/categories/python/index.html","f4ae9ef67807583a506d556373982f75"],["/categories/python/page/2/index.html","9382ad68b3b5a70ef12b7173ceaef6dc"],["/categories/python/page/3/index.html","4e49b685932d8db332f611ea0758af16"],["/categories/python/蓝桥杯/index.html","70a564b167c1d07fea265787adbe9a2c"],["/categories/python/蓝桥杯/page/2/index.html","2e542e2b4859c917af1fea07f8b75815"],["/categories/python/蓝桥杯/page/3/index.html","b8edb9c8530c5a806cd57e9183660dd5"],["/categories/python/蓝桥杯/冒泡排序/index.html","d10a29a331fde32bfb07cb7e48bf1e99"],["/categories/python/蓝桥杯/结构体/index.html","ba71c954d4d3e4e5caa4806f926eb5ae"],["/categories/python/蓝桥杯/链表/index.html","7350912077dc34000f106621f3741788"],["/categories/教程/index.html","553a5cbf84554fb3257bbd0aef0b834c"],["/categories/日常习题/index.html","ee5f172d70dceb1e774410d70398b698"],["/css/index.css","22943828075c56a01cb0542ca0eca399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","9ce96494dddd97de6b4944cab929d661"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","24ef31b32822d719fa1cb622b7ecfafa"],["/page/2/index.html","afc245899fdc4b79ba5260d69820f1b5"],["/page/3/index.html","5520c676c2207c1dfa0b78629b692c35"],["/page/4/index.html","acda5188914db5db82a177fc1cb12d30"],["/page/5/index.html","043c8d84e285ac058a0a75b37e9de8da"],["/page/6/index.html","ff4d1da3bfd1d787000633974b578e21"],["/page/7/index.html","1e514c1bd846bb6447f3d5ed969c7c03"],["/page/8/index.html","7dc0bc2bf5037259b00f0010dbf2db2f"],["/sw-register.js","2527f17203850c27fca6b7b37d3500bc"],["/tags/index.html","ebcf27b03aaa0f12ec75fa25ee293ddc"],["/tags/java/index.html","ca387397a6ee1aa1278acd7878eec704"],["/tags/java/page/2/index.html","5f83420fa5d352ac941d140ac1371614"],["/tags/java/page/3/index.html","eec0bf5b7fab9843bdecbc2a3c2c8484"],["/tags/java/page/4/index.html","b19dc7ed891353c0350984734dbfedad"],["/tags/java/page/5/index.html","e52b29c062c1441d96ea282487e65e05"],["/tags/python/index.html","4b5b93608af40467cfcb6b9a4f09ebf1"],["/tags/python/page/2/index.html","3f5027e9071f9a455666228f91f5f0e7"],["/tags/python/page/3/index.html","a865cfd3a6477a667431d6d2051a719e"],["/tags/冒泡排序/index.html","90939343af3bb9f122e8d657c5ecb35c"],["/tags/算法/index.html","377c00dac864ca04a50aa9f297ba1dfe"],["/tags/算法/page/2/index.html","07bf26b441d26466a077f577035b3175"],["/tags/算法/page/3/index.html","b144403f6969d8ff4a44dcdd01710b6d"],["/tags/算法/page/4/index.html","907b7ef543b447e48bbbeeb9cef1a3af"],["/tags/结构体/index.html","ebea936fb4a5e5a50a8ffacdbd735926"],["/tags/蓝桥杯/index.html","ee598334462db075eada8b924f234ec8"],["/tags/蓝桥杯/page/2/index.html","04e38c4ded07bef0e0f2fe71f68dec33"],["/tags/蓝桥杯/page/3/index.html","597cc57a0c9a1adae18d86a421a4b749"],["/tags/蓝桥杯/page/4/index.html","ad7698f3fe4dc845443c6ef041b1bff2"],["/tags/蓝桥杯/page/5/index.html","d58b547eb085704127361a57eb1d95f7"],["/tags/蓝桥杯/page/6/index.html","fc46294ba2c775db117fd3548dd1f6be"],["/tags/蓝桥杯/page/7/index.html","d031441649d987485f7cb65e6c1c0ef6"],["/tags/资源教程/index.html","c533690f10770fa05e90cf8592e05ed7"],["/tags/链表/index.html","58dddab6144d2083b5941fc24d35f506"]];
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
