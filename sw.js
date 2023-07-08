/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","84894184884e2498ce315cf1f6df9006"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","25131988975fa43318adff4098956c84"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","2ad3c1fab8faa550c773204518d8ae6d"],["/2023/04/22/验证码（random类）/index.html","9b697391aa4433f6d2f974d1242f916e"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","b32ad67dce1210e9faf06a287c2405ef"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","358121456202ed809cfe018b0797dfb1"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","f8c51cb702495f576a54221b73249c8d"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","f96dc7df11c07ba6cdb76a0b0a57a915"],["/2023/04/23/蓝桥杯-山（java）/index.html","c5b732b984e71913c31687ed7a4e748a"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","1568998bd028baa1ff0274e8d7f8b069"],["/2023/04/23/蓝桥杯-时间显示/index.html","afc3cab36b989c0dfd9a636ec23d8d5b"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","89f782b7cd4b394bdb3157b3ff9550d9"],["/2023/04/23/蓝桥杯-特别数的和/index.html","7a1768787fc6396d46cbd4de46e2fe6b"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","3f061551960a8d5bec466446f98256ae"],["/2023/04/27/案例2-1 商品入库（java）/index.html","5d9c76aac600cca7fae8894f68c17914"],["/2023/04/27/猜数字（python）/index.html","263ad2f9fe52293f6c2701e8cbbd48f8"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","b2120cb1f66b97d824dc705fb34458b5"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","1251ae034344a40e24fdae2946eb8356"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","5a39563cd8fac5a75cb64184274005a8"],["/2023/05/02/数字三角形（JAVA）/index.html","9f2429d8e67213309b9ad79b10a789be"],["/2023/05/05/k倍区间（JAVA）/index.html","fcb8e41d3b4f31d30fd9c6f767f4a5ee"],["/2023/05/05/作物杂交（JAVA）/index.html","672b20def640a601d859950611554154"],["/2023/05/05/包子凑数（JAVA）/index.html","f34932b907cb5b7333a5b7ac6a46ce31"],["/2023/05/05/取球博弈（JAVA）/index.html","c327cf2ded2691a0a958bb494dd7a8bf"],["/2023/05/05/回文日期（JAVA）/index.html","e3e0e566777ba3ebe3f737bea158b068"],["/2023/05/05/砝码称重（JAVA）/index.html","92915b6749b4a500f5d96742c04e0ad4"],["/2023/05/05/等差数列（JAVA）/index.html","4c758e12d9a4801717a7c9af0fe2a15b"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","ba77b4add5104face504e1d3624684ff"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","5909ffdaecb00d0191a887152fadd1ac"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","2f1255bc09336e0581026247196e436a"],["/2023/05/05/蓝桥杯--排序（python）/index.html","11a54c9ebc6c56dd59a53070bbd8693b"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","302e24cc7dc174f00a5782661a95041f"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","d208f8c861d7fc959bbc814eff66a837"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","64a5b911f28e83afc570d33317647e49"],["/2023/05/05/蓝桥杯--空间（python）/index.html","4848ba26bfc919dd3359139bb8180a5c"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","2eea60b5d592ba079a46164e1a20ab72"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","ad0404c5d15e387b602311835b7b559a"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","d7f1d41bac321bfdbc2d1dd662e7c32d"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","baa398e6aa7d60539264d9387a085983"],["/2023/05/05/蓝桥杯--质数（python）/index.html","c06cc4f3a045282bc034cf0c2601cf28"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","15d48c97d0ba09662678dbd22f82d7e6"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","f1e9a57afb54747318ee8caabfb98bea"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","d200ef246d57a08c03ab3746a89c547d"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","dc36dcd28c7a9336a3565f1769cfa45b"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","1f08d68308b876292d6df39c13b8da3d"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","dc4c5613b5e6214f581fc0db8b4b94b5"],["/2023/05/05/质数拆分（JAVA）/index.html","63620184cd38cd8f4fab40174d3323c2"],["/2023/05/05/闹钟定时程序（python）/index.html","6bd2d0fcf0c8fd108d891c60a67f7c4e"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","1bb6f5f70e0e5cc13199d982a71a567e"],["/2023/05/07/GCD（JAVA）/index.html","de3b32b126ea1627bab28847631ed5b3"],["/2023/05/07/七段码（JAVA）/index.html","831c34768119fe3918e66f6be28f3a99"],["/2023/05/07/全排列的价值（JAVA）/index.html","36b815beadd92cb92ef1bc446c651bcb"],["/2023/05/07/双向排序（JAVA）/index.html","760afc50792a5b11d11833c09a9dfc1a"],["/2023/05/07/四平方和（JAVA）/index.html","946952b9e52e02306bc79367953c1803"],["/2023/05/07/回文日期（JAVA）-1/index.html","e2f3cbe0212871031019681d59e2536c"],["/2023/05/07/山（JAVA）/index.html","9035558726458af3a36590d9eb21b03b"],["/2023/05/07/数位排序（JAVA）/index.html","5800fbfa76ad28ea71b5455ac397d5a5"],["/2023/05/07/数组切分（JAVA）/index.html","24f629c0becb5dc0559f17409399ab4c"],["/2023/05/07/最优清零方案（JAVA）/index.html","5d8e588f68ec35ddad8807d4eb8fd68a"],["/2023/05/07/最少刷题数（JAVA）/index.html","94bd03788cdad681d8121c94a52e45f9"],["/2023/05/07/杨辉三角形（JAVA）/index.html","5409a73caabeb841930adb7799e51c51"],["/2023/05/07/求和（JAVA）/index.html","d24b80d232f46debad3866fab4cfa4be"],["/2023/05/07/求阶乘（JAVA）/index.html","31cebdbdbbf5b5229cfcd650911b0609"],["/2023/05/07/牌型种数（JAVA）/index.html","b0ad826d691f786bc80fd04dbb5d3b8f"],["/2023/05/07/猜字母（JAVA）/index.html","bc88eebedf6f1737dcab797626e881c2"],["/2023/05/07/路径（JAVA）/index.html","8baaa97fcbffa57eb460567a1df8fc62"],["/2023/05/07/青蛙过河（JAVA）/index.html","0791bf10cdf0a3ce34cedcaec8d75d21"],["/2023/05/16/重合次数（JAVA）/index.html","44dfd045a3d52f1a04718d344295c99a"],["/2023/05/22/左移右移（JAVA）/index.html","116a1e1dfb20abbd19d57e353e5e2a78"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","05e7fa076296885766a63c964c6437b6"],["/2023/05/28/本质上升序列（JAVA）/index.html","3dca9ddeafee480d1efd707e24eade12"],["/2023/06/07/方格填数（JAVA）/index.html","2bce487f9e5a3ff76b97643bc0a4b27e"],["/2023/06/09/合根植物（JAVA）/index.html","1b41769f0c8ae68e673c77d20254c1e8"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","b2a8c3f0e1c6da87c142c94388744edc"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","f3afb13cb12df5386d13fd06abb29b05"],["/about/index.html","f8b3c7aba2d010ab9a132233df284f91"],["/archives/2023/04/index.html","88b1825248410ee1abcef6dda8910bda"],["/archives/2023/04/page/2/index.html","d0fc696319e77a3007ab2b08ecdda7fa"],["/archives/2023/05/index.html","ecbf999fafd420e1b30b49839f12814e"],["/archives/2023/05/page/2/index.html","12b6cbd3a35722d8aa3270a859b92e43"],["/archives/2023/05/page/3/index.html","3baed7452c8a1236cc50839949ad0275"],["/archives/2023/05/page/4/index.html","2f886c92777accd86834b8f5507e0b5c"],["/archives/2023/05/page/5/index.html","6b0835e00056f1061a11d0af548309ed"],["/archives/2023/05/page/6/index.html","e4ece128da53bb425534e759ebd33f8e"],["/archives/2023/06/index.html","9608d4ff6fc75740f0e52001f037e366"],["/archives/2023/07/index.html","0985e424bf2da6e0f09dcf48d12fcf09"],["/archives/2023/index.html","59426fe32b674af3d21314873783d562"],["/archives/2023/page/2/index.html","7154db17a7efa315314d143832735266"],["/archives/2023/page/3/index.html","7da6fc2ce28ed5654695b3fa4de9021f"],["/archives/2023/page/4/index.html","2409fa7f0d1b6c39f8e2ae069ad6ae29"],["/archives/2023/page/5/index.html","9e1809d02a93b52240083bb672fe6453"],["/archives/2023/page/6/index.html","8c9b3c1f634e9794b9c93bacdfc37549"],["/archives/2023/page/7/index.html","0b5d31ec748313a8fa1032454f8be84f"],["/archives/2023/page/8/index.html","ff67087a28d51e7f1d2b21a1cecb09ff"],["/archives/index.html","e8db1b6e47b2f8fbc81b919da4d1a4e5"],["/archives/page/2/index.html","d10ae340919062b84a706c1c64fc2207"],["/archives/page/3/index.html","30f78fcef316be1229f50ea6ca63d628"],["/archives/page/4/index.html","5d27cb72506fe4937fd3697d41e761e3"],["/archives/page/5/index.html","eb5644ee931ce6b313a95bfa33c05d63"],["/archives/page/6/index.html","b83f58dc6e6f8c17c153030a796cbfd0"],["/archives/page/7/index.html","6382f4565ccf8d7fe54fbfdaede164f4"],["/archives/page/8/index.html","c195a44c2a0c5d49268aa9f0a4ece6cc"],["/categories/index.html","cac24c678799763b4a83a2ab7c6555ef"],["/categories/java/index.html","dd74ab1c45f6b9186bba563460310932"],["/categories/java/page/2/index.html","032f8b0a2271d1bc46d55d26860ce6dc"],["/categories/java/page/3/index.html","13acfad8b380f7889ead1f88b1255e67"],["/categories/java/page/4/index.html","2758a6ce3959060848a3fc36bf3e8770"],["/categories/java/page/5/index.html","0cc455b617c964c4f284f3b404cfeace"],["/categories/java/算法/index.html","b5b8131d605df06c0cc8d2c3ee2ab32d"],["/categories/java/算法/page/2/index.html","791a236bf995c7829e662d5c3f07d278"],["/categories/java/算法/page/3/index.html","3c8dbb8bc1abd292239ece1d02fac5ac"],["/categories/java/算法/page/4/index.html","80c236ecd52d5518019cc70ae614ea53"],["/categories/java/算法/蓝桥杯/index.html","639ae22e960ad63e804fa3c11af357ed"],["/categories/java/算法/蓝桥杯/page/2/index.html","e7e611ac3ef67f9a0340aa7ec7aa093b"],["/categories/java/算法/蓝桥杯/page/3/index.html","492f7baeea3e7b0173a78a7743274138"],["/categories/java/算法/蓝桥杯/page/4/index.html","1c1c1cdeb88d3779323396b53395ddd3"],["/categories/java/蓝桥杯/index.html","ccb264460e83963d77fec1df37f59b64"],["/categories/python/index.html","7860c2aabc583d71548dcb33c7e49bad"],["/categories/python/page/2/index.html","bd2bd0d76aa69b39aff153d01658ac89"],["/categories/python/page/3/index.html","95a3efae331fc44b0b73101b966c78bc"],["/categories/python/蓝桥杯/index.html","815fced100de56e5e6026d223c05c8d1"],["/categories/python/蓝桥杯/page/2/index.html","4fcb446ba834f77a2712a868168be177"],["/categories/python/蓝桥杯/page/3/index.html","3b868de15b7ab382d178a1adcd34509b"],["/categories/python/蓝桥杯/冒泡排序/index.html","9f95364ab19de638d5ea0fb2d4a1b283"],["/categories/python/蓝桥杯/结构体/index.html","8540c3cf8a7ed5bbba8a549bb20723dd"],["/categories/python/蓝桥杯/链表/index.html","51a1dfd35280fb8662d164cb44a6cc6c"],["/categories/教程/index.html","278b2dba1c2d2036e010bd3ac3df79be"],["/categories/日常习题/index.html","3c499231e737455700d910c258390f2e"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b7a14e33fa35e36d3bb45e24ae988d1c"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","72a1edcf74bc94b7bfc75927f4dfd5a3"],["/page/2/index.html","047b503e0f5c24117daae7310be011c1"],["/page/3/index.html","8bf7b8647341e57a7ffa8cd75e7592cf"],["/page/4/index.html","9c3746c9502c540c8fa7af6e1efabf70"],["/page/5/index.html","8f3ceaeb673b067c900e054c3f97fc97"],["/page/6/index.html","43d42b20fbbdaf3fcfad84b90cf69d97"],["/page/7/index.html","2dc587c67b0bce22d08f923969c41a18"],["/page/8/index.html","88516a5e1080ebabb496e43a624ecc06"],["/sw-register.js","48e9018745b0480655c3cd8fff514afe"],["/tags/index.html","8ff1d95f62b8b13b51dbc175fc704863"],["/tags/java/index.html","5ee9674dada0eb6ea47d0df9610c399f"],["/tags/java/page/2/index.html","a4e02150580b2a12f57b8cc7668fd5f2"],["/tags/java/page/3/index.html","12074546529be566dcc2d6d55e9c448a"],["/tags/java/page/4/index.html","fdcbfaabdb0c0e4371c6a26797b28de0"],["/tags/java/page/5/index.html","f3ec2957730ca5290c5966e3a652ae21"],["/tags/python/index.html","af6345b8783d464423bff5121723a25f"],["/tags/python/page/2/index.html","2ad20d07ed8a653f8178733af129690c"],["/tags/python/page/3/index.html","504e2633c61fdaf00cf98cc309a05326"],["/tags/冒泡排序/index.html","e18ed48309048936f9dbda1784fc9a42"],["/tags/算法/index.html","8446ad2dd53729cdcbb9a81d0a340d38"],["/tags/算法/page/2/index.html","4a98a269ef07f0b2f9253b6d9398be92"],["/tags/算法/page/3/index.html","6df809713aa29d1faa442005062206a8"],["/tags/算法/page/4/index.html","52de022766b447cfd0adeb6d9650530a"],["/tags/结构体/index.html","07d1d572b738d9dbe5eeefc6cb946412"],["/tags/蓝桥杯/index.html","29a892a2d70c3893d324d1db6a7535e5"],["/tags/蓝桥杯/page/2/index.html","83c29771c6129276ca22600b0e1b9709"],["/tags/蓝桥杯/page/3/index.html","c6ed212e7144ac2f0f516f8241aea5ed"],["/tags/蓝桥杯/page/4/index.html","ceec20641d72989d0c6643105b7988ee"],["/tags/蓝桥杯/page/5/index.html","51b191b3907808ed5d630d2c4870daab"],["/tags/蓝桥杯/page/6/index.html","776c07baaee29cec8093b9c796e902c6"],["/tags/蓝桥杯/page/7/index.html","7611e10d20577221c39646d7dce7b45f"],["/tags/资源教程/index.html","314bc570f16a472c106cad34832f338a"],["/tags/链表/index.html","9bb56f7149095ddb5422bdd9ca618c46"]];
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
