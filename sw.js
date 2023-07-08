/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","52932821510bc05ca3e8aacd41a7dbb8"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","2c59f6e6bc17f7eb40f117059439aa43"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","52f4a38c0cca8e7b874be53517a4232e"],["/2023/04/22/验证码（random类）/index.html","5624ce6ebbee6ee0705bc112c9c46ab2"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","69b62aa4f84006c45e82c254d92dbde4"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","f26a362081727d598cf729daa21e33a0"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","5386ed2e370e306d7ce3800d479626c5"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","4322335992efc0c3b69b8e079b34a983"],["/2023/04/23/蓝桥杯-山（java）/index.html","de11890073019b5603d5cc7978a7b14b"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","e672569eb85ce07a3fa99121e41fa029"],["/2023/04/23/蓝桥杯-时间显示/index.html","94bf9ef3fcd71838fd52adf6730f3c51"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","d2b3d801200578552c3250b75e88c933"],["/2023/04/23/蓝桥杯-特别数的和/index.html","6747f1a058a2701acfd60859e2799ee1"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","488bb692331af2e852d7b17e5bf62d81"],["/2023/04/27/案例2-1 商品入库（java）/index.html","49082c37aff19ba05299810e6784fb17"],["/2023/04/27/猜数字（python）/index.html","e5de72da4a75d546f0ae0bc698c44bd8"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","426ab3a9964b76319b0140b1f3e1288b"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","a86b1af453bc508f0fdeb767ba3902dc"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","bc2d841c169481787f7d76c833243d00"],["/2023/05/02/数字三角形（JAVA）/index.html","c21cd62a5f71f163ea8606b125a5f65b"],["/2023/05/05/k倍区间（JAVA）/index.html","600d19cc79de553f4c031667883e93e1"],["/2023/05/05/作物杂交（JAVA）/index.html","63212d4bf5d8a944d56decca54b1c13c"],["/2023/05/05/包子凑数（JAVA）/index.html","6c59d9aeeb76632ed00bd5fe3b5f9c52"],["/2023/05/05/取球博弈（JAVA）/index.html","0167757fb75b62576983721da7543fab"],["/2023/05/05/回文日期（JAVA）/index.html","133b1b32afbb0d2efb0c2826ff269407"],["/2023/05/05/砝码称重（JAVA）/index.html","0676d9c17c6ba02e34c7804b37da0074"],["/2023/05/05/等差数列（JAVA）/index.html","7c6437797b5776f29b0ee61d84ca1e24"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","0458d30949ff63454e39545c0a2a230c"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","baafa10c524194ad382046403c1ef9ce"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","39764b31bbc0e59668a9b754fdff01a7"],["/2023/05/05/蓝桥杯--排序（python）/index.html","d1aaa20af2204f096bc11e14fda083fe"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","1d5f25e3436bea47904bd3ada7735393"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","04fb6d91b6a49bfe68847222f7f44307"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","cbde9de8c5e81fe177f9953a118a4261"],["/2023/05/05/蓝桥杯--空间（python）/index.html","2cf54069fee5761d033e7b1098ab1f74"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","1c6a846ae5d977510fbea794c2d46cf0"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","303ff0beb8a98f46972caa45b823e43c"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","b286e45d978967100b2a8b0b4232391d"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","e22ff8c8b785846d3427acf6982fba56"],["/2023/05/05/蓝桥杯--质数（python）/index.html","28140426c79e16c275c9a99d0be19008"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","0909746cdf7450e0010bde0f51436591"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","c42f0b21d2e42632f1d9f9549ad3d4d6"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","d75ec642db351b1039429672db4fde51"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","be5dceae665731ae94ed0900a8f532c7"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","cac4cf4e1dab7d344334083b68c36125"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","533012e0f99360db92c06a8fb95e7355"],["/2023/05/05/质数拆分（JAVA）/index.html","9c4a22a84540829b3b768fc5c61e5e59"],["/2023/05/05/闹钟定时程序（python）/index.html","b6591a68c6a02013155493f38ccda7c9"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","130652ac2e39c74b926aa2ab171a2a08"],["/2023/05/07/GCD（JAVA）/index.html","6ca7acfaeede250c55bf53789ba9b92a"],["/2023/05/07/七段码（JAVA）/index.html","88a41d69b054ffabd9c4aaaf384809c2"],["/2023/05/07/全排列的价值（JAVA）/index.html","bd16c7fbe91fb4b0a321c64fdc3e47b2"],["/2023/05/07/双向排序（JAVA）/index.html","5a1a544155026b15b66cad270dfea62d"],["/2023/05/07/四平方和（JAVA）/index.html","bc27dd2f739220988dc30ae7a2c20105"],["/2023/05/07/回文日期（JAVA）-1/index.html","5151d1358909398f205fe0819b77bea8"],["/2023/05/07/山（JAVA）/index.html","311291eb6c6c1bd49edd3cbc36f71217"],["/2023/05/07/数位排序（JAVA）/index.html","0df1b7a83e6b40c9bfab07168a4e3f33"],["/2023/05/07/数组切分（JAVA）/index.html","616c9f2558a76011abfe07d8ebc98138"],["/2023/05/07/最优清零方案（JAVA）/index.html","0e95e581f425b19096c36b14acd313cb"],["/2023/05/07/最少刷题数（JAVA）/index.html","2711208b9e9fd03c215d531b068b9a1f"],["/2023/05/07/杨辉三角形（JAVA）/index.html","f91422d4cdaa04279c3e07ed12ae2c37"],["/2023/05/07/求和（JAVA）/index.html","3e202e064533b12a11ab8465c7086a39"],["/2023/05/07/求阶乘（JAVA）/index.html","849ab70364d96b70353a166e5ac7cafb"],["/2023/05/07/牌型种数（JAVA）/index.html","8f97a20c74f5d671fb14b62b772d95aa"],["/2023/05/07/猜字母（JAVA）/index.html","65774ac75921ac73462aac55c4300967"],["/2023/05/07/路径（JAVA）/index.html","106ed959952cffe1d7c3c8c92fa0298a"],["/2023/05/07/青蛙过河（JAVA）/index.html","2a222bbdcd7e898fd125a8ed2728a213"],["/2023/05/16/重合次数（JAVA）/index.html","0a7e75e6ced9ca2edece144264411489"],["/2023/05/22/左移右移（JAVA）/index.html","e8a6c21689b65c6680daa9e64a86e9ab"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","3a4fd5ad083f151757e39812c4e99f44"],["/2023/05/28/本质上升序列（JAVA）/index.html","6a6ea96082171349e0d0ed6cfb610b2a"],["/2023/06/07/方格填数（JAVA）/index.html","60cb488bc5c5b80c16d281857f977265"],["/2023/06/09/合根植物（JAVA）/index.html","ff2133f1d1feb2175e920ce7c18c10dc"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","004bfbd608e905b731e1f119a22f38d2"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","13470507e249b75df1b496f0399007ec"],["/about/index.html","6afcdee6cfa28cb0b952b3e52b5f2261"],["/archives/2023/04/index.html","81226eb2fa7a1e0724de0051dc5f8c18"],["/archives/2023/04/page/2/index.html","7175c475add709dfb3a9228133ee3c4c"],["/archives/2023/05/index.html","6fdf072aedcc456623819f9994d9de90"],["/archives/2023/05/page/2/index.html","3225648378b2e83a82a710b81ee1cf22"],["/archives/2023/05/page/3/index.html","377921fe90dd588b1ce50094bb6f5368"],["/archives/2023/05/page/4/index.html","3a0cc77285ca1f98a89eab88794430bc"],["/archives/2023/05/page/5/index.html","77cf0ac4642c985634986d95b9dde89c"],["/archives/2023/05/page/6/index.html","45505b91930280960e9bd5b4e96d079e"],["/archives/2023/06/index.html","346c75b24868ae49f289ca6b18b73974"],["/archives/2023/07/index.html","3925e066a3d596fe9c6ad26e3e141d77"],["/archives/2023/index.html","35ff800a022756f00559d24cc7f7e4a8"],["/archives/2023/page/2/index.html","bd819426788ef38f027a2a2de3ec00da"],["/archives/2023/page/3/index.html","4630bf1d9a1685ebc6aaf5107a88748a"],["/archives/2023/page/4/index.html","a070e97ec5677420a948a6a3a1c36b5a"],["/archives/2023/page/5/index.html","507c98f1d86f793332e5cdb45aa1c53a"],["/archives/2023/page/6/index.html","5c85a6b93a86540be542c96dd84c9ef4"],["/archives/2023/page/7/index.html","e19020112f977e4a6ba4f6792ae8e662"],["/archives/2023/page/8/index.html","5a505d99a73e7a8bcd677e7a5cf23342"],["/archives/index.html","38ab57198e05baf8fd5373951a6c7d6d"],["/archives/page/2/index.html","18bc935836f680beff82f1a3ed099a0b"],["/archives/page/3/index.html","df0d06dfbd420b405a232b70cff283f8"],["/archives/page/4/index.html","1dc84af097d9753fb24b18c0efa0ecb3"],["/archives/page/5/index.html","8a845893f71d892381e348e8e1be88a5"],["/archives/page/6/index.html","3886d3926dd32ccbdeb5da2b0f198487"],["/archives/page/7/index.html","47cd81ea1615b548c962efa84a7e8911"],["/archives/page/8/index.html","62fb1b73b8f1d38ee490b9b530324d87"],["/categories/index.html","c92f341c4f9de9b21f51fb85cd065331"],["/categories/java/index.html","cc45fa21d0158de016520706db110a05"],["/categories/java/page/2/index.html","4ddb910f82bde0c13b918eeec71a6ed2"],["/categories/java/page/3/index.html","028db5e2ba971cb5c4ce59b08caa41d3"],["/categories/java/page/4/index.html","a19647cb9f9dccd0038d5df3d31c36c7"],["/categories/java/page/5/index.html","6fc9bfcb7b132c820661e4474b4d2b5d"],["/categories/java/算法/index.html","85c264684ed26a1520f5788541a1734e"],["/categories/java/算法/page/2/index.html","7648c0a5f5e7ba0b4d52d7e386d7935f"],["/categories/java/算法/page/3/index.html","319f734b7b32b09b8d202298f3775aab"],["/categories/java/算法/page/4/index.html","2535810ec57edab290cea785f76345c3"],["/categories/java/算法/蓝桥杯/index.html","40f825b726c09aa68a804ce8bfe22d6a"],["/categories/java/算法/蓝桥杯/page/2/index.html","9e8e75729553bb31c28ffa0c5962f602"],["/categories/java/算法/蓝桥杯/page/3/index.html","056208dc98e9b43aeb747f68df21c06f"],["/categories/java/算法/蓝桥杯/page/4/index.html","8332b2ae385fb21de12fcf895eb9011d"],["/categories/java/蓝桥杯/index.html","c13bcc2c7661653c8d8d6e04e356d4b0"],["/categories/python/index.html","fc7b26877a41f7a714b41a74d4897385"],["/categories/python/page/2/index.html","40ee2530fd9785362edbe44f1e1b9044"],["/categories/python/page/3/index.html","5039a55d8fbe2134efc32a36eabf09f8"],["/categories/python/蓝桥杯/index.html","4319bb19be76e2a0412c37b1d93101d9"],["/categories/python/蓝桥杯/page/2/index.html","baa72e42098e6b209c8f1e9457428c96"],["/categories/python/蓝桥杯/page/3/index.html","6c15206edb2630e11c9a327194d7aeee"],["/categories/python/蓝桥杯/冒泡排序/index.html","1a0069dd858a0235340ae94d537bfdcf"],["/categories/python/蓝桥杯/结构体/index.html","fc638695e1a264b0ab2d48565b5ff562"],["/categories/python/蓝桥杯/链表/index.html","b189d7fd4ba8a2338e1add6fe149a641"],["/categories/教程/index.html","a77f4eabfac78941d849673cc72e472e"],["/categories/日常习题/index.html","ce79e4ae1cce54a666010dacda875984"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1573f8178fac3c7d1a2508758f9c65f5"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","e6f067bf1807d7a8d3900684ac0e0292"],["/page/2/index.html","cd49ea412717bdd0f3419252fecd5b05"],["/page/3/index.html","c3e17e6424130fd2efa0d83434d8b2fc"],["/page/4/index.html","7a0a668fb5d9b0d26018afc04507d6f7"],["/page/5/index.html","17d8b5089aafcd3c80d5392fbd9eac9d"],["/page/6/index.html","1b19ca2a092a7c53a1bfe1fb40a1cfa7"],["/page/7/index.html","936d2b9e2e5d6dc2bb8af02e01361b0e"],["/page/8/index.html","5846964df43024ff14f5f0490159da4d"],["/sw-register.js","9efa569a4569482d5f5b116c44ec1921"],["/tags/index.html","5a4b1b27b85214f82fccad56390b136a"],["/tags/java/index.html","c0e08a110ad2e8e73e9020e2a58bf7b4"],["/tags/java/page/2/index.html","64dad526412625689d8a12dd88bfb647"],["/tags/java/page/3/index.html","0d7eba7f89d4dbb02dfaa8615ac71298"],["/tags/java/page/4/index.html","83e02b2fe20739e2709290bc40ef62e6"],["/tags/java/page/5/index.html","fc5351391cc7c074d6c0544bbe9c6845"],["/tags/python/index.html","e8bcd34e99bf155810d31efca65f3e7e"],["/tags/python/page/2/index.html","358d4a927b8ce1f9d300f4011bfb6864"],["/tags/python/page/3/index.html","acc88fe12b1f40804ec4ea99dafa1edb"],["/tags/冒泡排序/index.html","307fb0fbb4881a0069c5b3aadb5f9a6d"],["/tags/算法/index.html","e49c24a132076ea0a2aff2fda980b1e9"],["/tags/算法/page/2/index.html","21d27c65f206e550f63ef890bdbc82cb"],["/tags/算法/page/3/index.html","1f7be6e083cb2dd3b8d8269e31c1bd0d"],["/tags/算法/page/4/index.html","fb133b8fc318d2fb17ac1af5f92591db"],["/tags/结构体/index.html","7d2b441ee72d1c4150e679a56bf61a9e"],["/tags/蓝桥杯/index.html","5a3cdbebcbf13c505263496588044fcf"],["/tags/蓝桥杯/page/2/index.html","2784bd02e79f510e8169319c6adf0fa5"],["/tags/蓝桥杯/page/3/index.html","c492a1303d4e53774cde984f0e4755da"],["/tags/蓝桥杯/page/4/index.html","04878f9158ebc4314882ab76f7654f17"],["/tags/蓝桥杯/page/5/index.html","51ccfc4d6cbb814779e1518777e5e7a2"],["/tags/蓝桥杯/page/6/index.html","4c4f60ade77ea0499e8e1e4188bd6510"],["/tags/蓝桥杯/page/7/index.html","d3373b064281a82deff591d9ab710a81"],["/tags/资源教程/index.html","c6597e7d4fd58bed468f44dd45c08497"],["/tags/链表/index.html","fe05ea2467227de39da68fa68d534362"]];
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
