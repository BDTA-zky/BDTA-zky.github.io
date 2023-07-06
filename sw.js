/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","9dd8376da52cbfe29c8034247028d0f5"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","60575438b60bfa80df3f6b7732d6d67d"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","dbd66e95125aa55c6653ca888062e812"],["/2023/04/22/验证码（random类）/index.html","e702cf08f023959a4d0606a566db33f2"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","7cb7d911e0b67f09e20173206850fce9"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","1526415657bd52f6b4a4982bdaedff02"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","f7580eda9adb4e0c70f82496308e2811"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","41c87d0763d9a79556836b16c2e53554"],["/2023/04/23/蓝桥杯-山（java）/index.html","aed47f54b86c09bad7b1d075aab6778a"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","2ad90a36afbb74e76ef5f7f8ae150400"],["/2023/04/23/蓝桥杯-时间显示/index.html","16c968187703203028421b6a06b4068b"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","4e829a98e075e587f33be6df781b2758"],["/2023/04/23/蓝桥杯-特别数的和/index.html","02d49f37ea6388258cb3a71178ea6266"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","d7245dc8c52947cc2ce2339eff7855e3"],["/2023/04/27/案例2-1 商品入库（java）/index.html","b2994c218e398e6e5947b04341a67492"],["/2023/04/27/猜数字（python）/index.html","8cb17d66ac2d01feb80be13f2b2d00ee"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","90a65749651d9c08af6d0ffb559e6078"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","73fefa78c824851905047002a0beb320"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","9eb0e4129b9b96766caf270b39687bc9"],["/2023/05/02/数字三角形（JAVA）/index.html","b6749a4929d3b136244bd7e91d5ccd64"],["/2023/05/05/k倍区间（JAVA）/index.html","accdf5f7d564dff1868509af4a2c2ca5"],["/2023/05/05/作物杂交（JAVA）/index.html","b590fdcfbedf39757bbcdc8709e1df62"],["/2023/05/05/包子凑数（JAVA）/index.html","2b7c3a4d52ed4d77e894c732c7d047f2"],["/2023/05/05/取球博弈（JAVA）/index.html","4fd1bba06bb3b56fa939dd4e44846b51"],["/2023/05/05/回文日期（JAVA）/index.html","85375be206c5e9d8c118d98099e95bb9"],["/2023/05/05/砝码称重（JAVA）/index.html","6fc78bf18966a676384233008a1152df"],["/2023/05/05/等差数列（JAVA）/index.html","8fa7883d811bb23894042d41288da523"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","c4ab108234cccdc39507936c36d4db04"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","f2bca8d6a35779ef3a17c5b64b7176e4"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","3164ecb5640c00bc17bd74ccfa98835d"],["/2023/05/05/蓝桥杯--排序（python）/index.html","ee2f618a551f0505ebbb6bff17ae1960"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","ba0bc087e576aae329c7a6d156811646"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","f1d2ca05fbdc63c8b0b15018662b7321"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","ac2bc95799fa5662aa6ce3def8717b58"],["/2023/05/05/蓝桥杯--空间（python）/index.html","a6096734ac9b876368d8495884450724"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","af4b85f29d7434d69bd827b306578e88"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","3365608d4c2578cc16143cbd863aa47a"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","53aa4411dcc14e20ef965f34156f4835"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","110c9844a375ee3a31de4f79237e6592"],["/2023/05/05/蓝桥杯--质数（python）/index.html","d8d8795d74d1e470b3dd23a5821b3597"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","0318cf5eb9637cc2389699627262031d"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","7cf0de5ed88fbb405b0b4facce677671"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","0d912ff68b3ff03937b69d906d20aed3"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","08fbdcc9e590d581bf85f4a827ca7034"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","6f86f1045d8928fc54b4ccc260ae3fc5"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","55c1c58c8678f2f7027c41006333e0ea"],["/2023/05/05/质数拆分（JAVA）/index.html","52a12caac8c202561371772957f2ebe2"],["/2023/05/05/闹钟定时程序（python）/index.html","45e8eac9684de3860f338936cc7dcad3"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","a0fad8dc9b5e9a8aa576030d171e4391"],["/2023/05/07/GCD（JAVA）/index.html","1155065ed96e696368d10c14beabe443"],["/2023/05/07/七段码（JAVA）/index.html","d05299e47721925968d0c9f4548bb891"],["/2023/05/07/全排列的价值（JAVA）/index.html","05a78e366d41ed8375964821eb1f6a6e"],["/2023/05/07/双向排序（JAVA）/index.html","4a804f4a57c661fcf86117baa44288b9"],["/2023/05/07/四平方和（JAVA）/index.html","1ca6fb0121d1a4a3d3c509942f485063"],["/2023/05/07/回文日期（JAVA）-1/index.html","328cbbd7440ea0af2665a340c60b4ba0"],["/2023/05/07/山（JAVA）/index.html","ac064becbc13c9cdb0a3e5b7bbd921ef"],["/2023/05/07/数位排序（JAVA）/index.html","bc281eb0f872da4884c79598667a25f1"],["/2023/05/07/数组切分（JAVA）/index.html","6626a1ee30fa4afa68dc164c596ef279"],["/2023/05/07/最优清零方案（JAVA）/index.html","e91a192d0f4cc269ca11ca6e20c014c3"],["/2023/05/07/最少刷题数（JAVA）/index.html","70dee6d76a19964a93c9d9556b1b8e54"],["/2023/05/07/杨辉三角形（JAVA）/index.html","b112a87dceca44cc9f16ac7bdd4dd98d"],["/2023/05/07/求和（JAVA）/index.html","b45eaaa7f72be6d3482348060edf408c"],["/2023/05/07/求阶乘（JAVA）/index.html","28288db23c2767c1fb45bf43bf3f66f2"],["/2023/05/07/牌型种数（JAVA）/index.html","81c7142f38109ac2f29ac0d67f8e393f"],["/2023/05/07/猜字母（JAVA）/index.html","3ac1d1e5ed7180b4bbd5f159831d3c46"],["/2023/05/07/路径（JAVA）/index.html","0897a930627a8acad724d36ed3de9f95"],["/2023/05/07/青蛙过河（JAVA）/index.html","65f061d3bf14053b0bd4b014165a4723"],["/2023/05/16/重合次数（JAVA）/index.html","7aab0965d6ad0de6ef4354881c2e9afa"],["/2023/05/22/左移右移（JAVA）/index.html","5917b04829e5d74de7e375ee686566c3"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","3f22228f4a3f051d9573e6aee5da4b17"],["/2023/05/28/本质上升序列（JAVA）/index.html","26c809b7fb7da395f02a9b549fdb63bb"],["/2023/06/07/方格填数（JAVA）/index.html","1d1df86f27a7a38f1406665c6fc89fb9"],["/2023/06/09/合根植物（JAVA）/index.html","4173d9e7069cde4cc498949d1fcb38dd"],["/about/index.html","b15e592a4d40d3d74ee3c1b2787b2938"],["/archives/2023/04/index.html","273667aa769d8e09fa556749f6cf1c7d"],["/archives/2023/04/page/2/index.html","5466ce88797503c301ba253d3286e395"],["/archives/2023/05/index.html","99ab9acea556f8f2df9f6f2c0cc0dcff"],["/archives/2023/05/page/2/index.html","3ebaf44cee0bce329ece782521f37444"],["/archives/2023/05/page/3/index.html","09fc5257dc32935c2a58468222449716"],["/archives/2023/05/page/4/index.html","a826102cf5bc8e72a04d95d856375954"],["/archives/2023/05/page/5/index.html","0d8ce6cfad6a4e7c945706ca796ea074"],["/archives/2023/05/page/6/index.html","68620005996b9e4a34408ed23170019b"],["/archives/2023/06/index.html","dd8d4a7391c371557c643249a5201cb5"],["/archives/2023/index.html","e331e6c29951bfbd6d272c788ba3c1f4"],["/archives/2023/page/2/index.html","9009af79bc9266dea99d0ae276e9d6fe"],["/archives/2023/page/3/index.html","92f747abdd70adf071106d83bcd7dd53"],["/archives/2023/page/4/index.html","7fd2941409dee41175594e22dadc347a"],["/archives/2023/page/5/index.html","79b459217a2486be99ee7025adb6deaf"],["/archives/2023/page/6/index.html","7a44f9bfa45e2425e40f92ff88fc7253"],["/archives/2023/page/7/index.html","913323070ff5b70447c42b1c6707e7ac"],["/archives/2023/page/8/index.html","7100837b623b8590a85ca2e2d7708787"],["/archives/index.html","604f7bbe7fdf6eb2391bc10bf8f75782"],["/archives/page/2/index.html","3291aa676be789170669fbe280b40f3c"],["/archives/page/3/index.html","33b3fc86077f961b9c30641cec865ffb"],["/archives/page/4/index.html","97b6a9b8a10905de3f2c6ed6a7944ed8"],["/archives/page/5/index.html","b1e1d48f5fd7a7051a715b09d7dd6b94"],["/archives/page/6/index.html","0d9386c341c3676bebc8d92131954582"],["/archives/page/7/index.html","2d4502f1a5ed68ec6092e72dc714a8f2"],["/archives/page/8/index.html","980174bf68a1cb90c58b20c023a667fb"],["/categories/index.html","8f086ded63d3d7363922856a875bb62b"],["/categories/java/index.html","6fc9277a58a4d029d03b1188152830cc"],["/categories/java/page/2/index.html","f5112c56a3678a8d37eeec2b457d295a"],["/categories/java/page/3/index.html","d9468fee0fa998aeafce057d5c43ab1e"],["/categories/java/page/4/index.html","5222078366c9fa77e7ae0544eefa92dc"],["/categories/java/page/5/index.html","dd6b45b3d6ba73f1a342ca5be5465467"],["/categories/java/算法/index.html","479ff61da831ced186d7b4c27b9aa3de"],["/categories/java/算法/page/2/index.html","3e061c1dfcb00dae062843e0c2b51f76"],["/categories/java/算法/page/3/index.html","cec5367e9a4944ad0f20e3900a521ce9"],["/categories/java/算法/page/4/index.html","4363bce6e3c6f8f315ca8ab55112de78"],["/categories/java/算法/蓝桥杯/index.html","6769c8c0aa5533dfb2965bac15f86e00"],["/categories/java/算法/蓝桥杯/page/2/index.html","d08e4c36ae50386900286b61b8288648"],["/categories/java/算法/蓝桥杯/page/3/index.html","e6ef9a9726174f4985a17af599924854"],["/categories/java/算法/蓝桥杯/page/4/index.html","7fadbac260931ac4a5cd800b0565cef2"],["/categories/java/蓝桥杯/index.html","0ee2b7f2bc0d25f4f935fe63b6ebfda8"],["/categories/python/index.html","5c5526c7cfd4d66c08867e47d7260512"],["/categories/python/page/2/index.html","8f337ea04fa004da166560582fa48a82"],["/categories/python/page/3/index.html","c7e64e9081771476b3ae0422e073faae"],["/categories/python/蓝桥杯/index.html","7b640cd1330ee7bea24cfa951fbe1577"],["/categories/python/蓝桥杯/page/2/index.html","3d8294bf08eea73ed5d05684f0e5b167"],["/categories/python/蓝桥杯/page/3/index.html","ad812e45f8dd5a69d73d4749f857f41f"],["/categories/python/蓝桥杯/冒泡排序/index.html","186ebff6e136035bfc1299cb8f663357"],["/categories/python/蓝桥杯/结构体/index.html","368ec94f0db384064b2e205919798048"],["/categories/python/蓝桥杯/链表/index.html","c80588d467413da6bda88c56bfd055d3"],["/categories/教程/index.html","95b04fda1749adb252670abf2c97fc97"],["/categories/日常习题/index.html","74412543f296860981924d38916d1076"],["/categories/资源/index.html","795cf5e601913baf01159c3d66f7a218"],["/css/index.css","22943828075c56a01cb0542ca0eca399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a4f61f88f0b1fc812b52a081d5968349"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","2654a1ea05a61101b091fa36ebfe4d79"],["/page/2/index.html","9941df5110dbed77b7af1bbe573591d9"],["/page/3/index.html","a33304c879c8e6c4e0e740bf28cecc81"],["/page/4/index.html","65d6c7829ccaf77b48a800f04844ec26"],["/page/5/index.html","b9a71b79a0d46619282b1d8d4e3f33e1"],["/page/6/index.html","873975c4206207e73f96fb3093f48ecb"],["/page/7/index.html","68c6bc51784fcfd7f8feb3b4d5d4a1a6"],["/page/8/index.html","0bd8050083e86f66b4e00f02af636022"],["/sw-register.js","8cf24db8cd201563a657fea4077368c4"],["/tags/index.html","f3c79ac186dc85e82053fe707e3ad2d9"],["/tags/java/index.html","8c60723bf010605306fb7aa9bddd51e0"],["/tags/java/page/2/index.html","e6e6de1a8b41ddaf6d54a24d43241609"],["/tags/java/page/3/index.html","6b5c3d4237e83b7db11b13327b928aeb"],["/tags/java/page/4/index.html","b8656380048856c6966b857dedc7889c"],["/tags/java/page/5/index.html","389740346e4b6f403b8804067b636e53"],["/tags/python/index.html","29b7fc7cefc03c6ebf904bccebdde99f"],["/tags/python/page/2/index.html","de9c5f1d98eb02e98d55226e21b3efc4"],["/tags/python/page/3/index.html","c6db40e9de68f77fb5b1c69b8382bbe4"],["/tags/冒泡排序/index.html","f11ce8e27e185cfc4fdb8d53ee1d1994"],["/tags/算法/index.html","a61c70497a653c7e15d6523177cccc2d"],["/tags/算法/page/2/index.html","65eb4eda6eb9d0ce01a20f372fb603c9"],["/tags/算法/page/3/index.html","ddb635e6fad1dc6e119373e100d6a770"],["/tags/算法/page/4/index.html","21a44d49a744d25c3c533efd049465c8"],["/tags/结构体/index.html","d8f460cd49a04a56c62614c17efa1fb0"],["/tags/蓝桥杯/index.html","c1fcf71c8fb4c15fc5e65a2e55b91204"],["/tags/蓝桥杯/page/2/index.html","b4aca907f52ee935aa36a85bfacd3efc"],["/tags/蓝桥杯/page/3/index.html","13521edc0fd8c6623507cafd8a068f4a"],["/tags/蓝桥杯/page/4/index.html","c418bebb675a0a6191642134c028fb8a"],["/tags/蓝桥杯/page/5/index.html","0f95526a1a2c9f5c425e8ef9838f5f28"],["/tags/蓝桥杯/page/6/index.html","4e47a844261082479ca262292c17eb1e"],["/tags/蓝桥杯/page/7/index.html","1b36d6a0bf492b6aa0c92d14296a564d"],["/tags/资源教程/index.html","773bebd05bc4bf92c86dada27bb6cf18"],["/tags/链表/index.html","871f824732bd755a2742a1633ffea8fa"]];
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
