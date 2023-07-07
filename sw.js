/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","4e59394311ceeb00204bc151699e1349"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","d6445abdb2209ea97fd08214ef3037ec"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","fbd1f4b46d2234c4eb352bce5bb1ab0a"],["/2023/04/22/验证码（random类）/index.html","8407b8c0d172096c420c9769671d33b6"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","46e4fbb09ab8646b61dcb261f5148b55"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","4a1afd37ba9072ac4f2454047bec9244"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","af403417b1a3cc3e7f80fbce38a7a84c"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","4181eb6bff5c9304de377ff43c48ffff"],["/2023/04/23/蓝桥杯-山（java）/index.html","f6b2678d0ad5ca488136994c78f225cf"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","4f2c2c72ae35aeff53daca273b2689f0"],["/2023/04/23/蓝桥杯-时间显示/index.html","9122abdcc718b3eacae93b41510f42a9"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","a11c429c1a987a68f33fd1968bd2acfc"],["/2023/04/23/蓝桥杯-特别数的和/index.html","403d98833af9001d733ad96cb4209b7a"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","87e8f63a0cdcaac6ccac2eaa564ed610"],["/2023/04/27/案例2-1 商品入库（java）/index.html","5d53656c891c715843c65e9a7791f33c"],["/2023/04/27/猜数字（python）/index.html","dafc9d544d3a0c53c7499732de58f03c"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","0464debd6bc878ba389e6b924709f08c"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","5e6bec73386f322628a27228a45a298d"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","189a9e6b08ac09707297b68842537662"],["/2023/05/02/数字三角形（JAVA）/index.html","c7089708cc26a5b3f7839dff8a0f2d90"],["/2023/05/05/k倍区间（JAVA）/index.html","54380ea607c58d67a5f08b8b4294ac80"],["/2023/05/05/作物杂交（JAVA）/index.html","530d61a20826c3ef5540bd81e8049a7a"],["/2023/05/05/包子凑数（JAVA）/index.html","5269e22b7a721c917d627907390bd5f2"],["/2023/05/05/取球博弈（JAVA）/index.html","f32a77e695e53d369d2bfded17ceed0a"],["/2023/05/05/回文日期（JAVA）/index.html","41209d79c6d90d376a503983b0acba4f"],["/2023/05/05/砝码称重（JAVA）/index.html","92d8af1b4e24fbec449ecb0f105bd841"],["/2023/05/05/等差数列（JAVA）/index.html","4d96472c3231fe8b793c76cc5d48250b"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","a75a68bccf848c5d0ce141f91cdf9037"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","205bd29d5d8673f84f05e0cc2b528c6f"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","9b793b925736f196b74e667422799d2f"],["/2023/05/05/蓝桥杯--排序（python）/index.html","89b6d8c0199000e4beef2959d9323365"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","a18d03190af9f6bf6f5e00f21949632d"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","37ac362e87c4bf078925121a7a203af4"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","e59cf1aace3ba6ef243dd8f8804e12c0"],["/2023/05/05/蓝桥杯--空间（python）/index.html","9db6e6b7d72d58c4ba7c35f07b922c2a"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","075432667766d613f4dba589bcca42cb"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","eda576f37524a55bae9262078cd0dca1"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","ef037de8f1fd78f2417fc321b1b7262d"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","ed419b67980114198963820e8eac3d14"],["/2023/05/05/蓝桥杯--质数（python）/index.html","e75e36992a152df5f80f163421aeff9d"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","5cc19e9686dafa957d0f0fa992bdfc1f"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","fe82bd074e34e9c291a68e4c5082d0d4"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","66ebe77f3c0c5f77d53f3dfe05908806"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","5689d1f69b36346579344b4c6356a81f"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","94d4d50cc689a759679869b7b6d9021a"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","d6aeee8d4c570dc425e57f29676b90f0"],["/2023/05/05/质数拆分（JAVA）/index.html","d49d2a0c26a785e41f91b985eb3f2cb3"],["/2023/05/05/闹钟定时程序（python）/index.html","93c4f819d516a59fc3e093a1f3598cdb"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","14de9e8d70b236200c9706164434fff7"],["/2023/05/07/GCD（JAVA）/index.html","2ab4fda1223cc1b3bff296e9f4a8fa71"],["/2023/05/07/七段码（JAVA）/index.html","66664a36d7439e6bc147570bbbfe7415"],["/2023/05/07/全排列的价值（JAVA）/index.html","64b2e0e791b240157c39f8fb1c4e61f6"],["/2023/05/07/双向排序（JAVA）/index.html","bf01fd76e0966d211b85afa79c88056d"],["/2023/05/07/四平方和（JAVA）/index.html","e7387d0e4ff1b462d07596de80d8e7c9"],["/2023/05/07/回文日期（JAVA）-1/index.html","d2958c27ae1dfd7b5aea111c68898544"],["/2023/05/07/山（JAVA）/index.html","71ad3479566c4c526503331e1a4beb38"],["/2023/05/07/数位排序（JAVA）/index.html","3fdfb2c9d98d865b0d366962d6729e34"],["/2023/05/07/数组切分（JAVA）/index.html","d8a863de398bb29691c72b8828c8857f"],["/2023/05/07/最优清零方案（JAVA）/index.html","532f77ef7ffc2e33a74aa3e539d5e193"],["/2023/05/07/最少刷题数（JAVA）/index.html","a3435126c77ede99e9e62d9a380b1c82"],["/2023/05/07/杨辉三角形（JAVA）/index.html","91517e6156aee6f393ce381ca19ea0db"],["/2023/05/07/求和（JAVA）/index.html","1b0b044add7f1a5928ab8baf3223e2ae"],["/2023/05/07/求阶乘（JAVA）/index.html","7b7c0536bc4499fdac26315f03d8ee0d"],["/2023/05/07/牌型种数（JAVA）/index.html","1469dfc045d8b03292fd456fb7ee633d"],["/2023/05/07/猜字母（JAVA）/index.html","50255015d6d379b8701155ad535be630"],["/2023/05/07/路径（JAVA）/index.html","34123ada0b88efe8c6e2c958262288c5"],["/2023/05/07/青蛙过河（JAVA）/index.html","c9d1fc0e5fa2698d261587728c50918d"],["/2023/05/16/重合次数（JAVA）/index.html","f901f4de63b52922b2b3ed75114325cd"],["/2023/05/22/左移右移（JAVA）/index.html","fb0628dba6d3bd21fb1f0980231f53a2"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","c3019e2cef065f356d325d52bfc22198"],["/2023/05/28/本质上升序列（JAVA）/index.html","2c095dca08e9689af5bcde99a4b2484e"],["/2023/06/07/方格填数（JAVA）/index.html","5959736adbcbe36dd3c709e19cc68e2e"],["/2023/06/09/合根植物（JAVA）/index.html","289afc3cf95db0c58750d4d634eb8f60"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","1e4a4bb3fd2313fd7f875e131362954f"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","a01d6004d6722023fdb3f177a6c0aa6d"],["/about/index.html","82d4213330c1f9d6dc66f961be982b55"],["/archives/2023/04/index.html","111591048c65420302ce83d3bf35996a"],["/archives/2023/04/page/2/index.html","bcdfb8ea0b167aa54144a2d081360849"],["/archives/2023/05/index.html","d17918c97da7dc1a56410e9b5e7286db"],["/archives/2023/05/page/2/index.html","54ee147c50ad320a761685a872401ef7"],["/archives/2023/05/page/3/index.html","d8bb45d07b77795145ec7a93ea618742"],["/archives/2023/05/page/4/index.html","e4f472b34a666a6a27fa375943bd37f3"],["/archives/2023/05/page/5/index.html","1a9cd96914433d5c397f93a1d1a9fecd"],["/archives/2023/05/page/6/index.html","675656770da18a2fbeaac539faa3740c"],["/archives/2023/06/index.html","05d8a0924753e7da3fb1c3d62a69d2fa"],["/archives/2023/07/index.html","618be522abad871c04c5f186bc87ae3b"],["/archives/2023/index.html","5e3ed84e026ef33601fcfe51c56f9907"],["/archives/2023/page/2/index.html","5ea76ff9b241d53641c173bf8fae95ad"],["/archives/2023/page/3/index.html","a3ea231535a8342a2858ca7f54e7c645"],["/archives/2023/page/4/index.html","8d2a4fe4cf3fa22e6a2b6f20466b31c9"],["/archives/2023/page/5/index.html","468990f00963cd21722fb4dd4e868a24"],["/archives/2023/page/6/index.html","bf57e8ea389553209c75fd5b8d9c7073"],["/archives/2023/page/7/index.html","f634f780f849cee34cd730cf96f8df8d"],["/archives/2023/page/8/index.html","bbbe231dab3a508d1bb1f87092abcf57"],["/archives/index.html","4e6685a59b2b12c6ab67110de86516a5"],["/archives/page/2/index.html","4e56511ac84d4a291fbda54de73ca68d"],["/archives/page/3/index.html","dd4884156e05c013916587c43aa1f1eb"],["/archives/page/4/index.html","653970f83c6920c44249aa5ce6500578"],["/archives/page/5/index.html","bfb89d4a283dc55829185ff9b6693ef5"],["/archives/page/6/index.html","a9a08198bcd24823c19d45f6b0e347fc"],["/archives/page/7/index.html","0bb7102716e50e29c0f2c1c2047c40cb"],["/archives/page/8/index.html","caa793a2fcbe61aad6bc761f5b56d4d6"],["/categories/index.html","43d3356eca496c7b740871d0a16c7380"],["/categories/java/index.html","9222ee1526a88642a71a95d99b579130"],["/categories/java/page/2/index.html","0eabc76c8d84c158d0acc0645a701583"],["/categories/java/page/3/index.html","a61299820eaccc4bc0ece5d3b601a245"],["/categories/java/page/4/index.html","fb684e2e8168820b03343fdc9a99b8b5"],["/categories/java/page/5/index.html","26055292dc98b9cfda354087da3d75ec"],["/categories/java/算法/index.html","84d706a6560d3ae5e4486496c3ed34a6"],["/categories/java/算法/page/2/index.html","50e4aa90809e41865c09844693437d9e"],["/categories/java/算法/page/3/index.html","48892bbc0c20162cc12dc6780095e8bc"],["/categories/java/算法/page/4/index.html","226d51fb30832e5d6709cb7e8c4e7319"],["/categories/java/算法/蓝桥杯/index.html","184efd4b6455b7baece7d152483db0b1"],["/categories/java/算法/蓝桥杯/page/2/index.html","898c9ce54c182a975fac1826feb043ed"],["/categories/java/算法/蓝桥杯/page/3/index.html","0a81c78c1c907aed133e23ac2a318c84"],["/categories/java/算法/蓝桥杯/page/4/index.html","2bce2bb642bb8522871c6c3db4d6765d"],["/categories/java/蓝桥杯/index.html","0cf993ca249386d61bd54b227a34a8fc"],["/categories/python/index.html","fb5658e0894e929f4f57513b98ddefe4"],["/categories/python/page/2/index.html","9acb018e13a9e68582a8709e6ceb986f"],["/categories/python/page/3/index.html","c644c857677fff9e71db081a3e271f39"],["/categories/python/蓝桥杯/index.html","02d41f3a0995aee8eba1198dbf8ab282"],["/categories/python/蓝桥杯/page/2/index.html","fc07c6a02f1ef7501658458513ffe8f3"],["/categories/python/蓝桥杯/page/3/index.html","3e6956709b927bae7072e4b1090ca138"],["/categories/python/蓝桥杯/冒泡排序/index.html","2ec89dab131bd0a854664385a74799a0"],["/categories/python/蓝桥杯/结构体/index.html","b3f16b27cc0bd9f4118cd66a3b39e6b1"],["/categories/python/蓝桥杯/链表/index.html","9e4164e036ac946d75e6c15504b3f4cb"],["/categories/教程/index.html","abdd87b10be7148a64d3e88ef4adaf56"],["/categories/日常习题/index.html","da6240657612f63e24d1b146762fe954"],["/css/index.css","22943828075c56a01cb0542ca0eca399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","38887d02b7a4d66427d03304471d1b85"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","464d0cd18273b6ee8d889f02f0810613"],["/page/2/index.html","1be68cd1d31cb9d58ee714ab5ba77b8c"],["/page/3/index.html","714d59d7323174a3e8fc08ce657fe946"],["/page/4/index.html","23f5353e53a600d414c65d00ddc9ef7e"],["/page/5/index.html","bce507aae1c49654f2686adb7e871287"],["/page/6/index.html","bb1d31483fea5e8cfcfb59e3871e0312"],["/page/7/index.html","7331af8b8088d84be3700d987797bd4d"],["/page/8/index.html","94717bba2412cc0cdb31b2c313a96471"],["/sw-register.js","cdd2613b222fe1dca50001cf30b21840"],["/tags/index.html","323e7a497403e8a425c78ad6024ada8d"],["/tags/java/index.html","aaf9cdfafb07e91f6120e64ce258383a"],["/tags/java/page/2/index.html","fc257530c273ed2364a6dc555baa39c2"],["/tags/java/page/3/index.html","b705026bdbaee7e2cd30059a2a676c6b"],["/tags/java/page/4/index.html","cd0ad178abfc8480920f93e2b2ad2f09"],["/tags/java/page/5/index.html","a28ac5f3f5ec0130b8d91a081a5aec63"],["/tags/python/index.html","fbf77586d895e6fd4dc9a6cd7713a9aa"],["/tags/python/page/2/index.html","dbf4c78bdb46a95775146e19f244d569"],["/tags/python/page/3/index.html","05735cf82533914843c8655cad635218"],["/tags/冒泡排序/index.html","3c8e5094531844c7bc325b9e7b564038"],["/tags/算法/index.html","f0f2615d9d205cd1e2a8844fa1a29052"],["/tags/算法/page/2/index.html","e3def312e5ef56f9ab32ba11a163a004"],["/tags/算法/page/3/index.html","6338f64360e179fa9797901f35fb31b2"],["/tags/算法/page/4/index.html","71b4ca93e004b51fbd2251dcd5e5e9c1"],["/tags/结构体/index.html","1aa92e7039591afda6591af875d4dd4c"],["/tags/蓝桥杯/index.html","2ba324ec950c131fa6e956fce3e321b7"],["/tags/蓝桥杯/page/2/index.html","0a39ad5a3a8c7bc7143b78e73d17c91c"],["/tags/蓝桥杯/page/3/index.html","3ec181cacf105d59a35629070f2ce6bf"],["/tags/蓝桥杯/page/4/index.html","ceaa553e9b8916c8e187ef120d1d35ae"],["/tags/蓝桥杯/page/5/index.html","dc6990bae7b71f7d99981606c2beb971"],["/tags/蓝桥杯/page/6/index.html","7c344c13395997c8591c005cff5851de"],["/tags/蓝桥杯/page/7/index.html","7012b70a71b9152fe14dcb7904319079"],["/tags/资源教程/index.html","ce8c7e43ffc0c6fd02b6ce4b9b8dfc7b"],["/tags/链表/index.html","6a097df11e28186897239fd57b55e25a"]];
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
