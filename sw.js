/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","9dd8376da52cbfe29c8034247028d0f5"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","30281a84c09b75d641b5e3b37f488765"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","dbd66e95125aa55c6653ca888062e812"],["/2023/04/22/验证码（random类）/index.html","e702cf08f023959a4d0606a566db33f2"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","7cb7d911e0b67f09e20173206850fce9"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","1526415657bd52f6b4a4982bdaedff02"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","f7580eda9adb4e0c70f82496308e2811"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","41c87d0763d9a79556836b16c2e53554"],["/2023/04/23/蓝桥杯-山（java）/index.html","aed47f54b86c09bad7b1d075aab6778a"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","2ad90a36afbb74e76ef5f7f8ae150400"],["/2023/04/23/蓝桥杯-时间显示/index.html","16c968187703203028421b6a06b4068b"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","4e829a98e075e587f33be6df781b2758"],["/2023/04/23/蓝桥杯-特别数的和/index.html","02d49f37ea6388258cb3a71178ea6266"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","d7245dc8c52947cc2ce2339eff7855e3"],["/2023/04/27/案例2-1 商品入库（java）/index.html","b2994c218e398e6e5947b04341a67492"],["/2023/04/27/猜数字（python）/index.html","8cb17d66ac2d01feb80be13f2b2d00ee"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","90a65749651d9c08af6d0ffb559e6078"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","73fefa78c824851905047002a0beb320"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","9eb0e4129b9b96766caf270b39687bc9"],["/2023/05/02/数字三角形（JAVA）/index.html","b6749a4929d3b136244bd7e91d5ccd64"],["/2023/05/05/k倍区间（JAVA）/index.html","accdf5f7d564dff1868509af4a2c2ca5"],["/2023/05/05/作物杂交（JAVA）/index.html","b590fdcfbedf39757bbcdc8709e1df62"],["/2023/05/05/包子凑数（JAVA）/index.html","2b7c3a4d52ed4d77e894c732c7d047f2"],["/2023/05/05/取球博弈（JAVA）/index.html","4fd1bba06bb3b56fa939dd4e44846b51"],["/2023/05/05/回文日期（JAVA）/index.html","85375be206c5e9d8c118d98099e95bb9"],["/2023/05/05/砝码称重（JAVA）/index.html","6fc78bf18966a676384233008a1152df"],["/2023/05/05/等差数列（JAVA）/index.html","8fa7883d811bb23894042d41288da523"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","c4ab108234cccdc39507936c36d4db04"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","f2bca8d6a35779ef3a17c5b64b7176e4"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","3164ecb5640c00bc17bd74ccfa98835d"],["/2023/05/05/蓝桥杯--排序（python）/index.html","ee2f618a551f0505ebbb6bff17ae1960"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","ba0bc087e576aae329c7a6d156811646"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","f1d2ca05fbdc63c8b0b15018662b7321"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","ac2bc95799fa5662aa6ce3def8717b58"],["/2023/05/05/蓝桥杯--空间（python）/index.html","a6096734ac9b876368d8495884450724"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","af4b85f29d7434d69bd827b306578e88"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","3365608d4c2578cc16143cbd863aa47a"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","53aa4411dcc14e20ef965f34156f4835"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","110c9844a375ee3a31de4f79237e6592"],["/2023/05/05/蓝桥杯--质数（python）/index.html","d8d8795d74d1e470b3dd23a5821b3597"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","0318cf5eb9637cc2389699627262031d"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","7cf0de5ed88fbb405b0b4facce677671"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","0d912ff68b3ff03937b69d906d20aed3"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","08fbdcc9e590d581bf85f4a827ca7034"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","6f86f1045d8928fc54b4ccc260ae3fc5"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","55c1c58c8678f2f7027c41006333e0ea"],["/2023/05/05/质数拆分（JAVA）/index.html","52a12caac8c202561371772957f2ebe2"],["/2023/05/05/闹钟定时程序（python）/index.html","45e8eac9684de3860f338936cc7dcad3"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","a0fad8dc9b5e9a8aa576030d171e4391"],["/2023/05/07/GCD（JAVA）/index.html","1155065ed96e696368d10c14beabe443"],["/2023/05/07/七段码（JAVA）/index.html","d05299e47721925968d0c9f4548bb891"],["/2023/05/07/全排列的价值（JAVA）/index.html","05a78e366d41ed8375964821eb1f6a6e"],["/2023/05/07/双向排序（JAVA）/index.html","4a804f4a57c661fcf86117baa44288b9"],["/2023/05/07/四平方和（JAVA）/index.html","1ca6fb0121d1a4a3d3c509942f485063"],["/2023/05/07/回文日期（JAVA）-1/index.html","328cbbd7440ea0af2665a340c60b4ba0"],["/2023/05/07/山（JAVA）/index.html","ac064becbc13c9cdb0a3e5b7bbd921ef"],["/2023/05/07/数位排序（JAVA）/index.html","bc281eb0f872da4884c79598667a25f1"],["/2023/05/07/数组切分（JAVA）/index.html","6626a1ee30fa4afa68dc164c596ef279"],["/2023/05/07/最优清零方案（JAVA）/index.html","e91a192d0f4cc269ca11ca6e20c014c3"],["/2023/05/07/最少刷题数（JAVA）/index.html","70dee6d76a19964a93c9d9556b1b8e54"],["/2023/05/07/杨辉三角形（JAVA）/index.html","b112a87dceca44cc9f16ac7bdd4dd98d"],["/2023/05/07/求和（JAVA）/index.html","b45eaaa7f72be6d3482348060edf408c"],["/2023/05/07/求阶乘（JAVA）/index.html","28288db23c2767c1fb45bf43bf3f66f2"],["/2023/05/07/牌型种数（JAVA）/index.html","81c7142f38109ac2f29ac0d67f8e393f"],["/2023/05/07/猜字母（JAVA）/index.html","3ac1d1e5ed7180b4bbd5f159831d3c46"],["/2023/05/07/路径（JAVA）/index.html","0897a930627a8acad724d36ed3de9f95"],["/2023/05/07/青蛙过河（JAVA）/index.html","65f061d3bf14053b0bd4b014165a4723"],["/2023/05/16/重合次数（JAVA）/index.html","7aab0965d6ad0de6ef4354881c2e9afa"],["/2023/05/22/左移右移（JAVA）/index.html","5917b04829e5d74de7e375ee686566c3"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","3f22228f4a3f051d9573e6aee5da4b17"],["/2023/05/28/本质上升序列（JAVA）/index.html","26c809b7fb7da395f02a9b549fdb63bb"],["/2023/06/07/方格填数（JAVA）/index.html","1d1df86f27a7a38f1406665c6fc89fb9"],["/2023/06/09/合根植物（JAVA）/index.html","4173d9e7069cde4cc498949d1fcb38dd"],["/about/index.html","e3b433a6e7b7dc20f800f960ea1b7f53"],["/archives/2023/04/index.html","cec0d452477f5e2e5a5e29eb269b1ed8"],["/archives/2023/04/page/2/index.html","4ec8201382a774c83ee76cdfdf1e555a"],["/archives/2023/05/index.html","fd89c3e14722094bfe8f98248e7ab516"],["/archives/2023/05/page/2/index.html","6113ea719a444eda5185d5a204a88565"],["/archives/2023/05/page/3/index.html","96338c1d939c029a3b9075ecf7ae79e1"],["/archives/2023/05/page/4/index.html","66491a459fadec9d673beabc44375078"],["/archives/2023/05/page/5/index.html","0bd20be9531ac26776e08c165b1f3c2d"],["/archives/2023/05/page/6/index.html","eec3bf66f19c461abbc49aab53a1ca7c"],["/archives/2023/06/index.html","a2bfe5e121cadb5c456f8e39bcd6460c"],["/archives/2023/index.html","7581c1cc0b1fbe23e7726ce34ff5fd25"],["/archives/2023/page/2/index.html","522ce1ee6af7f09198342483cc7fe27f"],["/archives/2023/page/3/index.html","65a0ee8eff5054bee074b28f9f3763d6"],["/archives/2023/page/4/index.html","6d957eb83484d7e0649034af892363e3"],["/archives/2023/page/5/index.html","f794a6964e97d3d016025fe2a2fc78e4"],["/archives/2023/page/6/index.html","ebc867e78ac5a809cdea508a127fb663"],["/archives/2023/page/7/index.html","9b5c1a83531b1ca593691dc451b05542"],["/archives/2023/page/8/index.html","40cfc26aaf4ca78a3abc0bdfd568fa70"],["/archives/index.html","0b8037a874beae9f45a5883731a5abe7"],["/archives/page/2/index.html","df0ae9bb4cd2081671d54eae98d5c1f2"],["/archives/page/3/index.html","1ba6d9da2ca70548a482156ec3edf116"],["/archives/page/4/index.html","f64c1610138746d42eafd064e1c3b861"],["/archives/page/5/index.html","0fb70398e278c5d54bf42b8ffca26be1"],["/archives/page/6/index.html","f56cb066ce49f9512ea32802dc56cb10"],["/archives/page/7/index.html","afa03b5f12aa0a41de1e304d5f8915eb"],["/archives/page/8/index.html","45f858ddfc601115d79127656e64b4d7"],["/categories/index.html","a5c1a86a6e7b9fef6bb4d38be46d74be"],["/categories/java/index.html","2fe05298dd4c270813c464f168e59621"],["/categories/java/page/2/index.html","ecb483dd587a66ce94f2c5ea02977688"],["/categories/java/page/3/index.html","8f95b3cf0fe5779eac63b339f766c2c1"],["/categories/java/page/4/index.html","81a631245c7e373cd61b6aa7343c033d"],["/categories/java/page/5/index.html","030e261205b35e238b5f724adc9710ac"],["/categories/java/算法/index.html","969e8b34f1cc199e4c9accfdac1404d2"],["/categories/java/算法/page/2/index.html","b2c4066e8b55efc8c9e4e4b49f0712da"],["/categories/java/算法/page/3/index.html","7cbd732c5df9814f0bb7c91db4eae6c1"],["/categories/java/算法/page/4/index.html","7f7f4223d8f03f47ffaf6df0a8532be3"],["/categories/java/算法/蓝桥杯/index.html","acb0e4bfb57f75da351076a798894483"],["/categories/java/算法/蓝桥杯/page/2/index.html","b6f4c3d8aec06e05fa05606734b493f4"],["/categories/java/算法/蓝桥杯/page/3/index.html","89ace66ebf043b8f1e16fc1482ab640a"],["/categories/java/算法/蓝桥杯/page/4/index.html","b753ea4dc2402b8cb991ff963bec9ecf"],["/categories/java/蓝桥杯/index.html","c87722dfbb634afa0700559e069affe1"],["/categories/python/index.html","624f1fde35542a7716ed827d2a2ce05b"],["/categories/python/page/2/index.html","dd6b2b2b3da796da3c057a3b844a3b98"],["/categories/python/page/3/index.html","8bab0f369f9fbbf00bfa8db953bf6007"],["/categories/python/蓝桥杯/index.html","a7f03456a58be35bf63b02e9fa8a10e3"],["/categories/python/蓝桥杯/page/2/index.html","8aa71e1517d9f978182e689309ef3ab0"],["/categories/python/蓝桥杯/page/3/index.html","18c00412cf454f1c121dd50670874a0e"],["/categories/python/蓝桥杯/冒泡排序/index.html","e6db8069f42112aa6a9ef1781214a930"],["/categories/python/蓝桥杯/结构体/index.html","43964c4df55a668ce7cbc1b27e3af77f"],["/categories/python/蓝桥杯/链表/index.html","1293f23526fd4739ee441d8dd12fe83c"],["/categories/教程/index.html","7d610d2aae95b6fa50d530ea4b4f5651"],["/categories/日常习题/index.html","2b40c6473b45cccd9c15b761ff52f0ba"],["/categories/资源/index.html","7038d530e6a5b556c7e62e366f021426"],["/css/index.css","22943828075c56a01cb0542ca0eca399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7e8782b172e565382d8f544ee1533ac5"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","3e8ab722ab033fe5cb408e952c718ed7"],["/page/2/index.html","68a9c03ef6c90f3d6a72b77a0d02a068"],["/page/3/index.html","06af1c0ac7d120f98b779be547464137"],["/page/4/index.html","af814078753000a3629d37ff707424fe"],["/page/5/index.html","7e8d268527bc48bead0d174fd0e14c8a"],["/page/6/index.html","aacff35968002bc34d91bf40239ec4b6"],["/page/7/index.html","e4db91c0c539330ef0dbe3d18129c622"],["/page/8/index.html","e2fff84586f4ed8c067ff733f5ae3ed7"],["/sw-register.js","1bce4aa4b60fdf61889016aa0f942894"],["/tags/index.html","bb379f7a8704b47cd708eb4b98d003a3"],["/tags/java/index.html","c455feedfda8c50503015367c6b6040c"],["/tags/java/page/2/index.html","34d58402fc3893953c49c81e1c4890b6"],["/tags/java/page/3/index.html","9d89e31a92e1df72df4cd4d0ccde455f"],["/tags/java/page/4/index.html","eca8a6147d59c32895bd9c4aeea0ccb6"],["/tags/java/page/5/index.html","3c8d75b37e333ca4c30a91958c0af5ed"],["/tags/python/index.html","5826a480607c47fb608afdca12cccc7e"],["/tags/python/page/2/index.html","8e80e658a95705ff3515992c5f57256d"],["/tags/python/page/3/index.html","e79bcca9f3162acb34b5aa4ec3de4dd9"],["/tags/冒泡排序/index.html","ef19ed227d714d28742acec8f1fd21b8"],["/tags/算法/index.html","d56aa38d210788583d96abdc646f173a"],["/tags/算法/page/2/index.html","cff1f70955c2960ca8bf6364184a23ec"],["/tags/算法/page/3/index.html","9881bfa84ef4c298ea552e8084bdc998"],["/tags/算法/page/4/index.html","0cbd67c66e49a4af17d73e224de5cb4c"],["/tags/结构体/index.html","e168f87a0bb4ae51c281ce956b670fa9"],["/tags/蓝桥杯/index.html","89f4e76043aebda7039e4540c075a05f"],["/tags/蓝桥杯/page/2/index.html","6f976beb2ae935e853fd60c7561bc66b"],["/tags/蓝桥杯/page/3/index.html","fed4c99dc50a1ab696925dc3a12418b1"],["/tags/蓝桥杯/page/4/index.html","15945e9ef48530bfe5347e3f2e143345"],["/tags/蓝桥杯/page/5/index.html","7b2beee1a001679fb28eeab2f541605e"],["/tags/蓝桥杯/page/6/index.html","5ee5780d2b19479f73d994a12942aa3a"],["/tags/蓝桥杯/page/7/index.html","5b4514ea83bf78452bc871c75714b70f"],["/tags/资源教程/index.html","41bec681877323f90fc3a2fefa89b1c1"],["/tags/链表/index.html","f235f22c296bef67c0fea096bce3950a"]];
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
