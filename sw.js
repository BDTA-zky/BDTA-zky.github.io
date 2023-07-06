/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","9dd8376da52cbfe29c8034247028d0f5"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","044cf8187e2b4dfb3c6774ebea1fb167"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","7ca03ae9d841d3553db6dd3875d07476"],["/2023/04/22/验证码（random类）/index.html","c8c2f95b7b669f2772014f242277e037"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","db6462774aa04c4fc898a205b21a624e"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","97f6198a4fd4c9ac6c58b923de5a8d2a"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","4e1bd1651439cc015b40039f17c50ef0"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","2600d2ccc9ea6e4401cb6a2cd6f88199"],["/2023/04/23/蓝桥杯-山（java）/index.html","2d4cfe483a69394d814bf426e532ebe1"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","98b54f14505e5a7d767eaa2e683e43c6"],["/2023/04/23/蓝桥杯-时间显示/index.html","dbc646af07786f014ba5f6546974d20c"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","dcd974ac7479eb926b7bb9268348f442"],["/2023/04/23/蓝桥杯-特别数的和/index.html","7e2db76306c3983ea7d4e9fdbd39d60f"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","14d1a80e1ec7758b3821d35b25e20449"],["/2023/04/27/案例2-1 商品入库（java）/index.html","56e8033025ba35f0426bc278827e4cc9"],["/2023/04/27/猜数字（python）/index.html","2ecd7aa4803df4a3f1c7cb9d337f586c"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","3f8385d7032bc13d96acee154519f146"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","ea13cd4d5becfffd10236321e2b141f4"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","72d4d1814e6590aaa3e2ce8d754c7c41"],["/2023/05/02/数字三角形（JAVA）/index.html","f9e80339a701fcd15fe079687659078c"],["/2023/05/05/k倍区间（JAVA）/index.html","5bcdd9a4fe16a4f540b1b7786e40cd77"],["/2023/05/05/作物杂交（JAVA）/index.html","6cc9ffeeb594969306f829e461b7dd74"],["/2023/05/05/包子凑数（JAVA）/index.html","c845b82938203b1faa32e5bd8a2413d3"],["/2023/05/05/取球博弈（JAVA）/index.html","72b9ab84a4eda93533f22e25616934c6"],["/2023/05/05/回文日期（JAVA）/index.html","6d07cd1dc506c8336627d5c3023190fd"],["/2023/05/05/砝码称重（JAVA）/index.html","9b0ed777ef4522146945a5b5752e2ee5"],["/2023/05/05/等差数列（JAVA）/index.html","63d524df125d42a8da3044a152970c43"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","02a0988cfd1187b9b08b10c1f5cc7fdb"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","661f79f6ee84911168a12f6a301a83f5"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","51582b05c736755b3afd76e272f023ca"],["/2023/05/05/蓝桥杯--排序（python）/index.html","6d1dd114613e7025558a599a12dabc08"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","e12615365521b186ba7aef3b8407c497"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","8731574a14c1cd4dd95cee217aa2af53"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","70921f36f73f1aad1de71a78294dfc78"],["/2023/05/05/蓝桥杯--空间（python）/index.html","d3b786e00ff4fae20f20d1f8c6a8fdcf"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","6e333a812ccf34bfc3a3a883368206b6"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","b48b5036e096f0f99233740562cf1349"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","c8afb972ac323a863095549fb1486c62"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","30ae554775c65211efd8c9fc49be761e"],["/2023/05/05/蓝桥杯--质数（python）/index.html","9c56459abc570c629237a3a29c52d671"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","ed426d5ececc239595d583576d46d08b"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","e7a764c803f63dfd8e9615c28579dfcb"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","1cb1c94b327a30ae65e6f99c333cb2bf"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","152431b3a52ef865d54162089ae6ab56"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","e1a039fa5f38c0d44d59b9c25f5ff341"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","d415b61e047732a968282b8e2938c5d6"],["/2023/05/05/质数拆分（JAVA）/index.html","fa3de90cf614b8b08490f78a50809518"],["/2023/05/05/闹钟定时程序（python）/index.html","4df294faa5a541d2a29d25e8fc6806de"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","b588e9683557d53a79c29dc5e050b1d8"],["/2023/05/07/GCD（JAVA）/index.html","cdd71cf9bd87fbf2307b7b084b33c722"],["/2023/05/07/七段码（JAVA）/index.html","7cda7f512a81cfcb3d61b0e5e5c73f88"],["/2023/05/07/全排列的价值（JAVA）/index.html","2b837e4ded86ab49d31b9e24bf58a009"],["/2023/05/07/双向排序（JAVA）/index.html","184b3db3dcc49fb8bd1545c341eeeafd"],["/2023/05/07/四平方和（JAVA）/index.html","0f7994c32e04a02727c7282a8ba573cc"],["/2023/05/07/回文日期（JAVA）-1/index.html","0cf736742181a5c4e86f8351eb454c6e"],["/2023/05/07/山（JAVA）/index.html","e88cb6327bf758a64b59e3c0a477ab2a"],["/2023/05/07/数位排序（JAVA）/index.html","c28c90853949abbdbe1f686600b4f598"],["/2023/05/07/数组切分（JAVA）/index.html","3d2edb6d3fe91deb35ffe2961f2742ba"],["/2023/05/07/最优清零方案（JAVA）/index.html","8fea631790237588b0e49088af2291b0"],["/2023/05/07/最少刷题数（JAVA）/index.html","5a94c114c29d7f339bf90d15313335d0"],["/2023/05/07/杨辉三角形（JAVA）/index.html","fc59f970efa38f84ca52a5dbcd729956"],["/2023/05/07/求和（JAVA）/index.html","7f61cdbe772cc36dabd2b80cb02b81d8"],["/2023/05/07/求阶乘（JAVA）/index.html","05fe2a368eab96ba17ef7695c83283f3"],["/2023/05/07/牌型种数（JAVA）/index.html","e6da8bd2162d12ca7616963a3421b20f"],["/2023/05/07/猜字母（JAVA）/index.html","8a77b452feb0374bf5eee8df680d8327"],["/2023/05/07/路径（JAVA）/index.html","6cbc4b1a9b6ad694ce1b206196139127"],["/2023/05/07/青蛙过河（JAVA）/index.html","9232b30b0dfd11b7ebd13aaeb5525d8b"],["/2023/05/16/重合次数（JAVA）/index.html","123a7140c2647d9fe2e19efb696d930f"],["/2023/05/22/左移右移（JAVA）/index.html","aaa94f05eb0f26dc499c567588accd1b"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","7936a20ca29dde4f9d1bef88c156d23a"],["/2023/05/28/本质上升序列（JAVA）/index.html","6ae0dfa71c8a6728f06d67784789b461"],["/2023/06/07/方格填数（JAVA）/index.html","c33d2f6e69def3f105aebfe0184041a5"],["/2023/06/09/合根植物（JAVA）/index.html","213c479ea5f12325b7a0cedbc71d14af"],["/about/index.html","5639978235f0f1a39881ca2e8110f465"],["/archives/2023/04/index.html","1aba243044330ffc4e5344af0606da84"],["/archives/2023/04/page/2/index.html","7c434cd8245c75fceee0f7e78c023c97"],["/archives/2023/05/index.html","650d4e748a7bf223f2cde02a354037a3"],["/archives/2023/05/page/2/index.html","b1a88be092f04f2df40b524b59b6e61c"],["/archives/2023/05/page/3/index.html","c061bdbe776134257eba9b0816917798"],["/archives/2023/05/page/4/index.html","d1bc8ed8b510835ae5357fbce38f073d"],["/archives/2023/05/page/5/index.html","a1053a68b530b30898944f005932a67c"],["/archives/2023/05/page/6/index.html","61b2345471bc1ec544ca2d44ae79aaba"],["/archives/2023/06/index.html","80d181bfe60dc4de7f15761f867181e9"],["/archives/2023/index.html","4c540eb84fd74156727b896c2d2d0ede"],["/archives/2023/page/2/index.html","d5e4b109c2915eb2f223b0351e7648ed"],["/archives/2023/page/3/index.html","fa286c6a3eeeb0bd8407eda24539e818"],["/archives/2023/page/4/index.html","69152b689ac67b583b49073be6d5ca3e"],["/archives/2023/page/5/index.html","6640f78667a05536162f29e74a8bee5b"],["/archives/2023/page/6/index.html","593b864f8b7787bc16ec9d0f8f1f8c6e"],["/archives/2023/page/7/index.html","66ccff1cbb528366a8e26115a752dace"],["/archives/2023/page/8/index.html","588c355c5430da14f997ee3e70062093"],["/archives/index.html","deaf7d249fd2cde9aa5af766f999349a"],["/archives/page/2/index.html","42f0318889227364ad96d14b301a4379"],["/archives/page/3/index.html","ae76779b055ee1bbe27c943066196870"],["/archives/page/4/index.html","70a28e408366ebf12a80ca788ff85065"],["/archives/page/5/index.html","b9a46e66ea70fb1587ca8619cdb957c4"],["/archives/page/6/index.html","5ead10971698d4040faca055b23e481f"],["/archives/page/7/index.html","b54aa3c76c4dc48e5b5f167a9bc8ac29"],["/archives/page/8/index.html","6a705beae61e1c00eb628a39f9b643c9"],["/categories/index.html","87ef8d769b02e2a4cbb64ddbd4efe004"],["/categories/java/index.html","6a314f5718fb099e3ae3d9e8c84deeb1"],["/categories/java/page/2/index.html","34041faf6200c560ceb0aa6d92e7b18f"],["/categories/java/page/3/index.html","769489146881846c9fd54336c0fb4395"],["/categories/java/page/4/index.html","5da7b735220a882cfb4d9ab4d00416fa"],["/categories/java/page/5/index.html","181ac59169010c5874d438f7bb66d25f"],["/categories/java/算法/index.html","00223a4e34a634a51456077cf3af5a2c"],["/categories/java/算法/page/2/index.html","0464c2474b62c88caff897c55ae4d8a7"],["/categories/java/算法/page/3/index.html","0efa9a06b335fcf67e91f24cddc2ba58"],["/categories/java/算法/page/4/index.html","8d1f1dc05aac71fb96af88e6e742d1bb"],["/categories/java/算法/蓝桥杯/index.html","501f00f70c9ede373ad254b1f48795ae"],["/categories/java/算法/蓝桥杯/page/2/index.html","7006e38e94023c45f3dd56a27430c8ad"],["/categories/java/算法/蓝桥杯/page/3/index.html","6a5c91aa5b2985bea9490a1a9ebc0ed4"],["/categories/java/算法/蓝桥杯/page/4/index.html","3ab4f156e4e56a3c00958d4a70867746"],["/categories/java/蓝桥杯/index.html","969c6494787b9d556a3016369be80a6a"],["/categories/python/index.html","31a4f37f6168cb0557ce2fa58acca3dc"],["/categories/python/page/2/index.html","085223c533cfdc171358f17ea5f11033"],["/categories/python/page/3/index.html","1e57ca92ce178c5524afb6ce77a4df6e"],["/categories/python/蓝桥杯/index.html","2a31fb6aec90f8881ebce9205065f051"],["/categories/python/蓝桥杯/page/2/index.html","00126e12769957671f8d8ee506cc759f"],["/categories/python/蓝桥杯/page/3/index.html","31b817d08edaa8c94b1162e7e539921e"],["/categories/python/蓝桥杯/冒泡排序/index.html","bab7fd034646a1d24e3c149f56079628"],["/categories/python/蓝桥杯/结构体/index.html","27f5456f62261cd7d742d8b65e89067d"],["/categories/python/蓝桥杯/链表/index.html","c2ed5a6631e271bcb99aa0755e4efd2c"],["/categories/教程/index.html","a30749e189853f6d9eef469e59792f2d"],["/categories/日常习题/index.html","c12109af99439a34733a4618c5e89b43"],["/categories/资源/index.html","2eeef9d91ff5856752a450d4af099491"],["/css/index.css","22943828075c56a01cb0542ca0eca399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","50385a396092dc1c818dc89cae0291b7"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","53e422fa7a6ec6329fe1a83469caa7ab"],["/page/2/index.html","049ba3962af77ad56462e2bfabafe694"],["/page/3/index.html","c76cdfe846d535475af60a20920867ad"],["/page/4/index.html","0befbca9e1425e25baf7ec325f32c00a"],["/page/5/index.html","4f63de2c7557b37daa030b77022dc4cd"],["/page/6/index.html","a25fb13c904801735827023b0cc332da"],["/page/7/index.html","894515d953dea1ff176f7ec1de55c59f"],["/page/8/index.html","43a58ad04a0e077f851380201d20beb2"],["/sw-register.js","75496394a490007421a8e7029253f132"],["/tags/index.html","527ffc1d4f761f2024e4b8bd72220b4b"],["/tags/java/index.html","cd01a1aa0800aae7be0a3e567ccf2ed9"],["/tags/java/page/2/index.html","1b172663bb5f81d89901032fde78a675"],["/tags/java/page/3/index.html","81400331712d2b31e6a20cea411fddb4"],["/tags/java/page/4/index.html","3581b6dd7dbf410f8d6df6df66580066"],["/tags/java/page/5/index.html","7e1cf147ccd7b8bef0ded8669f3fa3e0"],["/tags/python/index.html","5f010fbc7d317240b5553a828fe83dcb"],["/tags/python/page/2/index.html","3d617304b9039426bf0d8d373139f9b9"],["/tags/python/page/3/index.html","3720f19c822c37e9093db6524057d53e"],["/tags/冒泡排序/index.html","da38d24388920a6add1a15fc7e00a643"],["/tags/算法/index.html","36667d318e59c2035cc5a17687c0b82e"],["/tags/算法/page/2/index.html","f7262f4270786670ca82836ff7aca42b"],["/tags/算法/page/3/index.html","56c21892e5595ae8bd88a6d8d66262da"],["/tags/算法/page/4/index.html","ee94869cf41fd3fddaab8498c0db923f"],["/tags/结构体/index.html","048e97b69a3ab4db1ff2d4e75409ff93"],["/tags/蓝桥杯/index.html","9e3f6a476bc0571bfa4d74d2ef5bc7d9"],["/tags/蓝桥杯/page/2/index.html","b96935b6aee65d3517ccc4f022b4b6fd"],["/tags/蓝桥杯/page/3/index.html","693137157ff388aecc4961fde1315a0c"],["/tags/蓝桥杯/page/4/index.html","d551c2444fcf8728d011bfba782693d6"],["/tags/蓝桥杯/page/5/index.html","89f6f924fc860db7eb0c9a0b00987df5"],["/tags/蓝桥杯/page/6/index.html","64f6f7bebdb24b8c9ceca99602312692"],["/tags/蓝桥杯/page/7/index.html","dfd33d3f8683785028decffb7a04e966"],["/tags/资源教程/index.html","9c0f24ba1405e1f02a2f5a89440db671"],["/tags/链表/index.html","7cdc8235477aef1d5c044202ff73b8cf"]];
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
