/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","84023664edc35dceb2bdd8c96edeebc6"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","2c4074343c2c24b018f16dc0b190afc7"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","8c4958aa30bb43338e434c766e01111b"],["/2023/04/22/验证码（random类）/index.html","c99308c3d2041862f7022f60b3c4f51f"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","b06b695cd430e6baf54e6b564a3e0add"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","62b2597cfb03c1582b0b62429dbfffae"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","7820f371681b5ff6630f1133606a1ede"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","6ca526468f5cba163b79864f5eb29aeb"],["/2023/04/23/蓝桥杯-山（java）/index.html","9104d085124e3e31249eb6b2ca7b38e9"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","2c0cc029a81b4dc551d706f311ca5d2d"],["/2023/04/23/蓝桥杯-时间显示/index.html","8e5809ff728f8719f3a611263085cf86"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","aba43174ae96b59a68bde634fd88381c"],["/2023/04/23/蓝桥杯-特别数的和/index.html","084ef22c5d3f263c943a2cfc83487728"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","36ba61315d9126ced3095fc251b0aa38"],["/2023/04/27/案例2-1 商品入库（java）/index.html","f9074c706f061d0d00e0b89e4f8d2f42"],["/2023/04/27/猜数字（python）/index.html","e4efe9755f0d848a7eb97c301aa71c4d"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","e91e57e9191e9851a074ea9a454454f5"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","790b4ad581684528930a9e36248a64ea"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","c8591d5033fa840d3e9342a528e02f8b"],["/2023/05/02/数字三角形（JAVA）/index.html","ff72e8f1a51f427b1606d1649b7b54aa"],["/2023/05/05/k倍区间（JAVA）/index.html","a4091639d3271394837976eb0707304e"],["/2023/05/05/作物杂交（JAVA）/index.html","ab524159a8002b454cc3c3dce01dda83"],["/2023/05/05/包子凑数（JAVA）/index.html","55461f11490e23e16b2dd6ece5da09b9"],["/2023/05/05/取球博弈（JAVA）/index.html","d9ac6f2a25d5ecaec8f9845cc5122e8b"],["/2023/05/05/回文日期（JAVA）/index.html","3a34e67ee193a7b753a01ad5ebfcde39"],["/2023/05/05/砝码称重（JAVA）/index.html","b3b0f71cc1870f6be42e96476d0a5422"],["/2023/05/05/等差数列（JAVA）/index.html","0ce2790a8b83280fe09a3316c606dee1"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","a431c5c4ac555b54683e60b1d844ddaa"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","4c36a693763230dfdd17c0c64de8954e"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","47c23a703c106f8e52f7b401ad3aeeb1"],["/2023/05/05/蓝桥杯--排序（python）/index.html","634e1c6967f16955e510afd07e72ac08"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","354f525b1360a619332f437808dd0f1f"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","ab9abc65253caaf9b01a73d102575eb9"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","d51c924686781adcaa4fce5981b78837"],["/2023/05/05/蓝桥杯--空间（python）/index.html","a7387a4c76563c0a36206f97f87cdafa"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","03cfba38e14de834523392608955c4ba"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","42d0a4a20d2b4a40c017009c2a890dc4"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","c50e14a3ff7bb57b935f7305c08a91a3"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","20cb33e3fd8690bf8c6c0e690a8ae667"],["/2023/05/05/蓝桥杯--质数（python）/index.html","e35a50f6e8f7cc56b171c7cf3d6a3194"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","45c41b78f09134e56e458b770ab7e6ec"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","7cb53c90ca2be6a878ba2b4a26a17e19"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","c292832db96771736eb8dc5b57df0f8e"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","78786bd2aeb99533b352aaecc86b74bb"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","11d6b75f1829356530567ca1ae0931fc"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","b031ed982b4843746d1ec18227071491"],["/2023/05/05/质数拆分（JAVA）/index.html","5ffbd29cd53adda887b72d6ce2b87a30"],["/2023/05/05/闹钟定时程序（python）/index.html","6399e66512e0b2ef5b7318a8f52fe149"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","e0ebb1b7b95d77e65ee208c36ddd4ff5"],["/2023/05/07/GCD（JAVA）/index.html","57722814a2d51209bbee667045340049"],["/2023/05/07/七段码（JAVA）/index.html","6805ca4c1c234eb76919cd47b4f0ca57"],["/2023/05/07/全排列的价值（JAVA）/index.html","07011a1395e0a47ef61dbceb53d65a84"],["/2023/05/07/双向排序（JAVA）/index.html","65ffd1208178da538ab6e49321e81953"],["/2023/05/07/四平方和（JAVA）/index.html","ad0646afcedaaba2c0794704e6c446e0"],["/2023/05/07/回文日期（JAVA）-1/index.html","9ab86d7893f3451822acbfa0be9b6e93"],["/2023/05/07/山（JAVA）/index.html","b4307bd68d0eb95a8d018b743a53e422"],["/2023/05/07/数位排序（JAVA）/index.html","0237792feecce5945b86ba5cfa73d19a"],["/2023/05/07/数组切分（JAVA）/index.html","2ea9f601b212cd734b43f64b47a2c7c0"],["/2023/05/07/最优清零方案（JAVA）/index.html","b7ba498ef1f80de4f296dedff01357ba"],["/2023/05/07/最少刷题数（JAVA）/index.html","d0ef8150cf8d86b3d2e445a58ee3c204"],["/2023/05/07/杨辉三角形（JAVA）/index.html","c375b77445e63d9472b275af4f0f4daf"],["/2023/05/07/求和（JAVA）/index.html","e6eda1bc20ad6995c6ffdb65bacbe4c5"],["/2023/05/07/求阶乘（JAVA）/index.html","e2084bf102d3df17effc059ce084165b"],["/2023/05/07/牌型种数（JAVA）/index.html","621b96b8869be76ede9fb9122b7cb724"],["/2023/05/07/猜字母（JAVA）/index.html","ec32e91df96705b86e230ffb844fc80a"],["/2023/05/07/路径（JAVA）/index.html","ca4527e71a15023d7b2c3b18465e9d17"],["/2023/05/07/青蛙过河（JAVA）/index.html","ddb20f4c24fe07a4c675aa4d7ef705fd"],["/2023/05/16/重合次数（JAVA）/index.html","73b9385b3a6cac42cfe6664b642e050d"],["/2023/05/22/左移右移（JAVA）/index.html","ed19b26bc89901d393c2e90794eaa3c3"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","659eda22517f3c780bbc56b3ac81a52c"],["/2023/05/28/本质上升序列（JAVA）/index.html","15be95ebbbcbc851be90c9737a384456"],["/2023/06/07/方格填数（JAVA）/index.html","cb938a4a6ffd13572a409752f66fe652"],["/2023/06/09/合根植物（JAVA）/index.html","8ced9bd827f8a423b994c88f10e8d90c"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","696f140a4840ae871dae448fed791eba"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","638faee4bddc08212c004ea1f850ba07"],["/about/index.html","21ac77fc98620aaff2205c7b7fabc68c"],["/archives/2023/04/index.html","96c5f363a890c2be3be70e49c1fc88d5"],["/archives/2023/04/page/2/index.html","dd84090c19946d9d1d2d9711fee4101e"],["/archives/2023/05/index.html","ecf7b6594fe5626611f9def244db9377"],["/archives/2023/05/page/2/index.html","2f74c9f2fa7e8db41b019b7d2ab5ecf3"],["/archives/2023/05/page/3/index.html","ea985d8155dd6570a312b0611f8f49fa"],["/archives/2023/05/page/4/index.html","9a8ea61a370f9778a647dc86755bb737"],["/archives/2023/05/page/5/index.html","3dc0776fddc45f4a6a1bb4d4888907fc"],["/archives/2023/05/page/6/index.html","98aac3f8c9ac9f75b7dd8ee2f9a8f7d2"],["/archives/2023/06/index.html","10ffd8b7c8f2f7bf225ca83bfa46a301"],["/archives/2023/07/index.html","f307ddbc5aa6dc567ce3cc3889e36779"],["/archives/2023/index.html","962a5ef05ad55ef268e0454e9567fff3"],["/archives/2023/page/2/index.html","6cc11095b6bf5d1a521aebe0b9063f1a"],["/archives/2023/page/3/index.html","15b907eb4db7d768a34fe19fbcc2e678"],["/archives/2023/page/4/index.html","891ceeb1459ca82cdce833e77d29ec98"],["/archives/2023/page/5/index.html","d442aff8182d31bd2a5a3c8bdd172f6c"],["/archives/2023/page/6/index.html","8ce6b89ec906fc601066d1a1e48e1cd4"],["/archives/2023/page/7/index.html","01bd3364f147f8db1a3484826f021809"],["/archives/2023/page/8/index.html","b04f9bde3d9ec49580e4cfaa22ae1a9f"],["/archives/index.html","f0ecf1b69968b38c2a8f8b10fc6b88ff"],["/archives/page/2/index.html","cd4f156ba2ce64a80c583120716da576"],["/archives/page/3/index.html","947b2cd6892c143769ed27c5f5495f4e"],["/archives/page/4/index.html","78857466301f62c920ce973e16017054"],["/archives/page/5/index.html","11ddda32cb51fd20d049fefaf144f42d"],["/archives/page/6/index.html","9c48dcb0dbe2cd27c485ffc1033aea55"],["/archives/page/7/index.html","44902df54676a96ce4eda12da7a604af"],["/archives/page/8/index.html","c02fefb87705de014ae3efacdeeed9b1"],["/categories/index.html","9bc5addbb8dc2b2535d789612b2a8c2e"],["/categories/java/index.html","d93ab5acb38e2a194531f8f706e82dad"],["/categories/java/page/2/index.html","8e0e0a4f7e6f295d1eba07b4d6117f1f"],["/categories/java/page/3/index.html","30ff4d315b1ff7c243f8cea85bbca0a6"],["/categories/java/page/4/index.html","2c7f69a5361626c28e3d91118aedbd30"],["/categories/java/page/5/index.html","15d47b83954957922977bad587e35911"],["/categories/java/算法/index.html","51776b62c7a55c4e6eb6b6152a8e5495"],["/categories/java/算法/page/2/index.html","8586323dd36c93f03d375f5b2c0d909d"],["/categories/java/算法/page/3/index.html","16bb4b007909897bab9b32eda7deac32"],["/categories/java/算法/page/4/index.html","2d7d1828bb9f4b52ef1a77aa0a0c5e51"],["/categories/java/算法/蓝桥杯/index.html","a05480e2e3eb89905e684e7a2ed92e18"],["/categories/java/算法/蓝桥杯/page/2/index.html","82ec2776f155ae96a9918693674b1f02"],["/categories/java/算法/蓝桥杯/page/3/index.html","eb74d763b0b1be852f7deea45507a23b"],["/categories/java/算法/蓝桥杯/page/4/index.html","a887889c945d43bdb10aee1b569057c9"],["/categories/java/蓝桥杯/index.html","f12610f3fcb02e898d5454f39ad86fdb"],["/categories/python/index.html","0f6d26e1345def28f1a511df3b79c418"],["/categories/python/page/2/index.html","4aac1c1ca8b85500251bd3d1910f8b3f"],["/categories/python/page/3/index.html","bb4530d210b97630e805caf62e909c2f"],["/categories/python/蓝桥杯/index.html","915cf6ae44eaa201206ee5b91496a4ac"],["/categories/python/蓝桥杯/page/2/index.html","0722f1cbebbf43c102a9c5f6d0acbe40"],["/categories/python/蓝桥杯/page/3/index.html","fb2e27339dc407c3f81704f58e4bbd65"],["/categories/python/蓝桥杯/冒泡排序/index.html","a29c0fc8ea04908c0ccd475020601d88"],["/categories/python/蓝桥杯/结构体/index.html","d90fda11f5c8395eb7f7faa69ff9a267"],["/categories/python/蓝桥杯/链表/index.html","176854640d130f92029fc72b0e636c46"],["/categories/教程/index.html","461072ee50ce801b626c2791fe1fbe5a"],["/categories/日常习题/index.html","ea022aac5c3b9750955fc8c14930f347"],["/css/index.css","22943828075c56a01cb0542ca0eca399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6ec78965772911ae592d145a61afe597"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","5974a518f3fc00ef0a4281ef5198686f"],["/page/2/index.html","810cfda56b1750ef98a9c2999a535c71"],["/page/3/index.html","8f8558036c1c2605e239da5636cf4122"],["/page/4/index.html","7ffa6bb56f23b612650ff1cbe3029a33"],["/page/5/index.html","ddb5d90eb4dd6d9257b65341658a166b"],["/page/6/index.html","32a12edd35c96caa9376aabad5f079ee"],["/page/7/index.html","5b51f205ebae88c7b2ab7155d4f95bf7"],["/page/8/index.html","89b993741d36a1d7dbcedd6ea1635152"],["/sw-register.js","7e606b9a0ad38963a97905232af82923"],["/tags/index.html","20ada9c26df948606f255d76c8473ea2"],["/tags/java/index.html","1fe53d4d07fc8b2fff7070ac9477a8db"],["/tags/java/page/2/index.html","b7de145f99586e970417aa97008076c1"],["/tags/java/page/3/index.html","38b4cdea416ea0a1fc943ac866e72aa9"],["/tags/java/page/4/index.html","a58ead582eb52cf55bff6e678f843bfb"],["/tags/java/page/5/index.html","58a585e8073d75d4bfc6ac4def46289d"],["/tags/python/index.html","d5fc99151bb315c4767158ea08ce2061"],["/tags/python/page/2/index.html","b7bc278ab9b90518a7c7ab6ca078773d"],["/tags/python/page/3/index.html","3e582659b40f5b0efd5419c53b91096d"],["/tags/冒泡排序/index.html","45d708a8eda574ae5b69d27bbcaaf9ee"],["/tags/算法/index.html","ea983958bbbde8bdaf7dcb22c5652ffe"],["/tags/算法/page/2/index.html","ac98baa3223e709c1269d754ad70450f"],["/tags/算法/page/3/index.html","3b760bbaf12adf06724604a3d653d2f5"],["/tags/算法/page/4/index.html","50b59be4b35fd035e1e2a96ab66892f6"],["/tags/结构体/index.html","b556d3f721446ee58748e8d244461fb1"],["/tags/蓝桥杯/index.html","a6ffa57885fc1990df7e99757a5264c9"],["/tags/蓝桥杯/page/2/index.html","07d82b2e02f989c530c78b9bedb29102"],["/tags/蓝桥杯/page/3/index.html","cb3e2f35a752b52e96f39770a89ef251"],["/tags/蓝桥杯/page/4/index.html","f8181e889f8b23220aec473707a8046a"],["/tags/蓝桥杯/page/5/index.html","dd9cd5e5b355e1fb6acd3ca9f5d8cfd4"],["/tags/蓝桥杯/page/6/index.html","e73e3e59e2d30710f9047e0b09df3b72"],["/tags/蓝桥杯/page/7/index.html","23fe3cebc5292af7d9c646835a13d366"],["/tags/资源教程/index.html","5c277fe8d2365b64cfb354ff0e6671ff"],["/tags/链表/index.html","2e10aaaef04c3158a973c5e7b3541e69"]];
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
