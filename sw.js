/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","d7b486b7257967dd868c13afebe22667"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","0c5477a70f3fefc856f9e7582e125d7a"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","a44bdacb0ca3375158bb6581d8598125"],["/2023/04/22/验证码（random类）/index.html","6e6a6771e59ba1e8b729110bed8922e8"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","9aa7e39bb4ae084e8f4974b8963ade42"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","932c6b52954d7a5416c097ed6881cff5"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","0de2006a317be3a0fd0f92052b787267"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","37969475cf3156c2c6789cf60ca16f42"],["/2023/04/23/蓝桥杯-山（java）/index.html","0bc1c0cefe1e881ba3d8f2170270d53e"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","c05a2b4d11b6889c2e2f9c07a42a7421"],["/2023/04/23/蓝桥杯-时间显示/index.html","d6a54e5a555a50a6753677b6a719556c"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","5c993c9e08191c1948c7b1c724d9d56c"],["/2023/04/23/蓝桥杯-特别数的和/index.html","56257fad1980f2b717bdcd5a692343ce"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","36ab70e00631b41c75010c22df4e4bd6"],["/2023/04/27/案例2-1 商品入库（java）/index.html","c22b416e3c1b70dca046acaf42d8b3ec"],["/2023/04/27/猜数字（python）/index.html","d99bb5b5d3b8c011f42acbbad62d5a78"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","d8eb2c034f1af33b290e95d4e1b6b585"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","d10d1a9b44e2dd3fada62af435bc61bd"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","ae88ddb3d9dfd92b1c67c8df1562d50e"],["/2023/05/02/数字三角形（JAVA）/index.html","f58cf6c4ba8ef8a2623dcaffc7cc65c0"],["/2023/05/05/k倍区间（JAVA）/index.html","d206671be824c257a560703ff54f20bc"],["/2023/05/05/作物杂交（JAVA）/index.html","d5da75ab5ca78003bf1f071203366076"],["/2023/05/05/包子凑数（JAVA）/index.html","85f9c4d1e02c9625f4abd4e5fc27ca07"],["/2023/05/05/取球博弈（JAVA）/index.html","d540e808f6fe4d5371f7f6089de048aa"],["/2023/05/05/回文日期（JAVA）/index.html","515609faa0dc7a721bf5037c5ad3fae0"],["/2023/05/05/砝码称重（JAVA）/index.html","57e80ac91c69b7d2f0b4a12f6c899ad9"],["/2023/05/05/等差数列（JAVA）/index.html","7963f2a4360a741c22a9ae309e29e656"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","b40de8f74bad2b64c516130c8278fd77"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","558264bc7424a8141358a17455d2a080"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","6cb37f2e521e1f7ea889ba3e5ee531d1"],["/2023/05/05/蓝桥杯--排序（python）/index.html","b840bb1c4bd45adac73c06c15a7dc507"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","03e875dd03bd1972361c8560eb411ab0"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","cdb86f8418d5bab6ee061eea357cd9cc"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","51e1060a83382d715ad5595100804351"],["/2023/05/05/蓝桥杯--空间（python）/index.html","25be2c0eb9a877637f10063b305ad7de"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","72f71df353b5559dff4c66d5a12112db"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","2dec28c5ce021c25a7740ee4c228068f"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","2385bcc1f8158164b3affe6161e5ca9c"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","bc57062f78fa1e658545eb65e271608d"],["/2023/05/05/蓝桥杯--质数（python）/index.html","8e59bf3d33a109d948d6d1b2aa0b2d8e"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","1ec9be62faa953a5b01a044eadea9e32"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","89225815535e088024152825c8d4c244"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","1d75852a34fef14a523e160b6b17e2d4"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","a82d768b3a8eb1480fb740671b4843c0"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","5e0f5c7bcc8a081f36aed109dcddaba9"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","281661c607909ce5a8052b633e59555b"],["/2023/05/05/质数拆分（JAVA）/index.html","1ffd635b8e6e06c4b1e8cbb6abb925d7"],["/2023/05/05/闹钟定时程序（python）/index.html","4ff31ffe82cf6ced30bb2d3dea5f693f"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","4498d648a8f1524aa8e841b79cd0ac6a"],["/2023/05/07/GCD（JAVA）/index.html","2ed9c6098537424e3d2b082909762ef6"],["/2023/05/07/七段码（JAVA）/index.html","5d909cc6fd0cea53c07a491ebf3ccd85"],["/2023/05/07/全排列的价值（JAVA）/index.html","e58708328405e88aba1e33bd14bce057"],["/2023/05/07/双向排序（JAVA）/index.html","172eae914db0953ede9713883356cf7c"],["/2023/05/07/四平方和（JAVA）/index.html","6668a4d441bc11499000f23096dd40f7"],["/2023/05/07/回文日期（JAVA）-1/index.html","d5e96f18677e2af34e37164c1d24df30"],["/2023/05/07/山（JAVA）/index.html","4b06f7a326859b3beac3877556811e16"],["/2023/05/07/数位排序（JAVA）/index.html","354fa6ebe636641806e71fb98b0fc0c2"],["/2023/05/07/数组切分（JAVA）/index.html","d35b447810f99142a56cff070de98cdd"],["/2023/05/07/最优清零方案（JAVA）/index.html","6097d9124648441741ec9b4ef821036d"],["/2023/05/07/最少刷题数（JAVA）/index.html","ea95495cc8066399a7ac5a85b696b97d"],["/2023/05/07/杨辉三角形（JAVA）/index.html","8b6e81c861115317761ecddb44e68a21"],["/2023/05/07/求和（JAVA）/index.html","1c2e8b3920802b886e63dfde571789df"],["/2023/05/07/求阶乘（JAVA）/index.html","3321dcd8ada72f5115843897b6626210"],["/2023/05/07/牌型种数（JAVA）/index.html","ed8ef8958dd6fcf7febad164777ea328"],["/2023/05/07/猜字母（JAVA）/index.html","7ae0f72036f2b2871e32049494f8d687"],["/2023/05/07/路径（JAVA）/index.html","22c4b9a10c1b337251b002ca99b896fc"],["/2023/05/07/青蛙过河（JAVA）/index.html","1f60dddca521bfc425cf692bee23e7e6"],["/2023/05/16/重合次数（JAVA）/index.html","c6b058f47cdc240a450723221394a855"],["/2023/05/22/左移右移（JAVA）/index.html","178ce0634a4552c844ff6dde98cb0e61"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","8c84ba7a6abdb3cd9226ba62870b44cb"],["/2023/05/28/本质上升序列（JAVA）/index.html","bd8be3805b450ab421c516d176db3f8d"],["/2023/06/07/方格填数（JAVA）/index.html","e99e4fd1d0b859eefe30e0fd15aa8c77"],["/2023/06/09/合根植物（JAVA）/index.html","bacfb1018ff65990b4e94b00f95708fe"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","11cfa487271670bb308fa1c7d5b164e1"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","1c6a3004ce298dd735038ce2cefb9894"],["/about/index.html","797bae2f8f023fead8916a6ad4cfdd63"],["/archives/2023/04/index.html","a64bbecf9732c50626b632bc9935b181"],["/archives/2023/04/page/2/index.html","d25907fec1d503261e0a707dbb030248"],["/archives/2023/05/index.html","49853af26478ac347cf24331633eea4b"],["/archives/2023/05/page/2/index.html","210ad17cfb867664b79ed645a80b4658"],["/archives/2023/05/page/3/index.html","6535391254d44580b10363ba66b5b0f9"],["/archives/2023/05/page/4/index.html","ba04b5564009d2151e9c69a566c2b076"],["/archives/2023/05/page/5/index.html","768e0f3cd01ea8a9011b91134fb81993"],["/archives/2023/05/page/6/index.html","c55dca2fd61db4a60e0e355040a78a45"],["/archives/2023/06/index.html","89bb700927c0009b0d863b1b850e6764"],["/archives/2023/07/index.html","931f680d70f703b1b8e2b4e4ebf5476b"],["/archives/2023/index.html","b3276705b9d3135696861cfacb038f8d"],["/archives/2023/page/2/index.html","d75b936e4887a59bdfa4e84afdb12655"],["/archives/2023/page/3/index.html","aef1327be929811ab8e197d37d6fd285"],["/archives/2023/page/4/index.html","08eb8d9cd98133393fe4453cc8b2112a"],["/archives/2023/page/5/index.html","66d6e6d23acb2ac4b8215b222be2ca82"],["/archives/2023/page/6/index.html","ac23a3a894c188d8bf35c38e342c7112"],["/archives/2023/page/7/index.html","64e7310c53c5863158cf48afa8b4e311"],["/archives/2023/page/8/index.html","c29232c560f71a3584436c112edc87dd"],["/archives/index.html","661125dde3fff6b66267b51499f3286f"],["/archives/page/2/index.html","fe13d3b6fd985f9bfa5452a0914dcfa9"],["/archives/page/3/index.html","4bb055caf63583a6555497bba4fdff77"],["/archives/page/4/index.html","dd6a5e979f71eeeca8eab6a094652c24"],["/archives/page/5/index.html","eb9a212d6bdd77402cfdca613427c119"],["/archives/page/6/index.html","fb9b67485db5909ff973ec76b1969732"],["/archives/page/7/index.html","1d0874057ecaa23a7a36de8bcdc472d2"],["/archives/page/8/index.html","75336c1d6f7bd855903e6251aa105802"],["/categories/index.html","61c0e468efe236d8074daac5f1d4040f"],["/categories/java/index.html","8db1d5b31fe727f0149945f7fca0f90f"],["/categories/java/page/2/index.html","69adec95cc6b1a02a91b790084c1b186"],["/categories/java/page/3/index.html","c27e9755aedd11a2fd6fdb90501cb8f0"],["/categories/java/page/4/index.html","a24316a7f5ddec90250d296c38fce4e7"],["/categories/java/page/5/index.html","7602a095d1b41f1b0f741ff247f0fca4"],["/categories/java/算法/index.html","42194375a6b296145c67fe645c09ee1e"],["/categories/java/算法/page/2/index.html","fc002cb1245d05c77540ada1e9d39492"],["/categories/java/算法/page/3/index.html","9dc93bd5ce6e59470f620200873aa610"],["/categories/java/算法/page/4/index.html","aa306fb39dc630908b2ca4494dd13014"],["/categories/java/算法/蓝桥杯/index.html","02e518caa17009ea574a7cdb885112ab"],["/categories/java/算法/蓝桥杯/page/2/index.html","f0e608fbeb0af88402cf05e2119eec3c"],["/categories/java/算法/蓝桥杯/page/3/index.html","74e75b0fd75620ad8009838ff9b95e91"],["/categories/java/算法/蓝桥杯/page/4/index.html","231dfa9cae49663096eac1fc89984a63"],["/categories/java/蓝桥杯/index.html","719729c65ceea1ac3bedf18fa4bb48fc"],["/categories/python/index.html","15f23788ffdbc2e9d8b7f5c93cd06949"],["/categories/python/page/2/index.html","d649003649486713cdf1341140ba74d1"],["/categories/python/page/3/index.html","40dc130c5c228e80b88a65e0f4a932e6"],["/categories/python/蓝桥杯/index.html","e3e17892711f452a95469dd25bf077ed"],["/categories/python/蓝桥杯/page/2/index.html","92ccdb620ce820d90446ff7780b87879"],["/categories/python/蓝桥杯/page/3/index.html","d1b24771c463f5f23b6a4a7915a05477"],["/categories/python/蓝桥杯/冒泡排序/index.html","5bb7888fe3ee81b9be021b00b52555ea"],["/categories/python/蓝桥杯/结构体/index.html","3094c9ab897da7768a1458ba35eca99f"],["/categories/python/蓝桥杯/链表/index.html","48425858c720c4df60c6f672b89c6d1c"],["/categories/教程/index.html","35cc8a6b1044d52eba9f7150207d8129"],["/categories/日常习题/index.html","cda5b85620fed506ba33dac632643907"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","0194da1c63e755ffb772d2d4dda5a453"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","605ca66a498003222d5d0f1ef613990c"],["/page/2/index.html","af6d619442f68dae658fd47ca5735d4d"],["/page/3/index.html","bfec1cd0a0d022bcbc4877816cead44f"],["/page/4/index.html","a4449394d261790186ae77d56213fb4e"],["/page/5/index.html","9a093fe613e280ca9825cf0510dcfba8"],["/page/6/index.html","c4dfd41235b7b507d278fcdb43c67fce"],["/page/7/index.html","8dab452545aeec33c236efd94a9af3dd"],["/page/8/index.html","e75b670579c976804c6ae95e3990f7e4"],["/sw-register.js","0663269fade1fba2ff00a082965a70c1"],["/tags/index.html","33d408308273401dc6dbac153aed55be"],["/tags/java/index.html","ff5c845086322c5e6ac40dde2564ac92"],["/tags/java/page/2/index.html","96467f73fee9e0faf6ec3c7df56ea1b0"],["/tags/java/page/3/index.html","1b308874b08333db3b35b32bbfb402c8"],["/tags/java/page/4/index.html","3836475315b78b2ddad38ef7c8fe7e59"],["/tags/java/page/5/index.html","988a3d461a46e2e76455cf3b9edd0f7e"],["/tags/python/index.html","be9790b612e84356d49a7237dd94c6da"],["/tags/python/page/2/index.html","83218f54f1bfd673cb5c03d85302f020"],["/tags/python/page/3/index.html","3f17d1fa4fa1691cc00aba064a9b0595"],["/tags/冒泡排序/index.html","1f5ce97101ef925916beb4b48332e38e"],["/tags/算法/index.html","5a74101f22db8191c654081703585b23"],["/tags/算法/page/2/index.html","6abc7519fcb500b4f1498b7aa5bd915f"],["/tags/算法/page/3/index.html","38ef84482a286e699b4945909dbb8a51"],["/tags/算法/page/4/index.html","17709592c9edea2315384f41595677ad"],["/tags/结构体/index.html","693090ee4c5cad9f940b93de75e06dcc"],["/tags/蓝桥杯/index.html","815d718ec776409e5d07fa0f1c05e341"],["/tags/蓝桥杯/page/2/index.html","62eb873b5da690bf998a73b8297952e5"],["/tags/蓝桥杯/page/3/index.html","da1c65152f33579e6cc885bdfb2a4905"],["/tags/蓝桥杯/page/4/index.html","24695f198cab1de8cd56773a1617e19a"],["/tags/蓝桥杯/page/5/index.html","67190f21ab6f27a67ed3905c1e06f754"],["/tags/蓝桥杯/page/6/index.html","5bb039f0c0f4c0501a6f0f65254a97b9"],["/tags/蓝桥杯/page/7/index.html","1679190a40fbf7479e681eedabab2002"],["/tags/资源教程/index.html","5ed1895b09ac9d9bc58869018afc5523"],["/tags/链表/index.html","822459aa019eec574945858cc7cfbc03"]];
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
