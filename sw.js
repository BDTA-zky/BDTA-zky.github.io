/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","1bedd4bcc555aace43316104b662a1ba"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","7f6fcc74531b9426aa6d8c0b7ba87580"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","53675dc99c50f3aab5a928745d2c5845"],["/2023/04/22/验证码（random类）/index.html","2140da6e8d4cd4dc57c6672498090a0f"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","bebb4a15c71d3248e4c9fdafb7a58c4c"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","974015a8368e474c16eaac18156e64c7"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","81c761a133df79f51c7c11661f44fbe0"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","862fe24be4f7a17bab4f9707bf9d0a3b"],["/2023/04/23/蓝桥杯-山（java）/index.html","41062a9cd1c85b04104a0c57faaf0070"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","c6d46ef67c35d3602130d103cec0ed78"],["/2023/04/23/蓝桥杯-时间显示/index.html","63040e632033ddc01daa2777cbf5224e"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","3eee8eea47b0600aa9979b5a528af4d9"],["/2023/04/23/蓝桥杯-特别数的和/index.html","de5f679b78fced9fb80f0dc4ba17c4f9"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","6182ca82f4c422a9ae853fcee3329584"],["/2023/04/27/案例2-1 商品入库（java）/index.html","df43677e0a3ac142c20eec18dd1d0f99"],["/2023/04/27/猜数字（python）/index.html","7bf5214cea6708e209910ada11d5590c"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","9ad05b3d0105efb5be288cc0d4d18e8a"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","b5cc05d2f43b2f7f546ab7db60bfeb43"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","b43d615df91ae7b3cd933b690fea09cd"],["/2023/05/02/数字三角形（JAVA）/index.html","4d81cdb15c9b6537d0998090827fd68f"],["/2023/05/05/k倍区间（JAVA）/index.html","d4570c3e4d87ce76b14eeb95e73872b6"],["/2023/05/05/作物杂交（JAVA）/index.html","8eeb6956e95a38cf5bbaa0d5b6155ca7"],["/2023/05/05/包子凑数（JAVA）/index.html","b709785f2fe454733587fc569d841eba"],["/2023/05/05/取球博弈（JAVA）/index.html","4a91dc1bb25f5b5d9df3311175451bd1"],["/2023/05/05/回文日期（JAVA）/index.html","9a092e5c4c92032481a1558154c43c06"],["/2023/05/05/砝码称重（JAVA）/index.html","e5cbacf80abd6d61e98f5cf1acccfa29"],["/2023/05/05/等差数列（JAVA）/index.html","2f9eb39f116abaa14d57c06b3f71a2bf"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","e98e9c7e3d4d287b4b05e5bfd8dfbd71"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","179a7f229b3e982f4ab067c1870e7504"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","bbdc8337d239fc8f842d283605bafca7"],["/2023/05/05/蓝桥杯--排序（python）/index.html","06e1dbcc33feb24e507d62af85fc369a"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","4e34d20c7713eff06f7959ebf313eb7b"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","6904d095cc0801f217303fe70531ece2"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","a6fa49bebee024de7957251ed5ac83e3"],["/2023/05/05/蓝桥杯--空间（python）/index.html","9bbf541f4a8d0605b6db72be33c97d38"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","604c0f9dff23a2487bcc36bfd7139279"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","67a1ed4b34387b9a63439e92a39c996f"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","0cb9900b04566c3bb089c0cecc14810a"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","18f376b5e0cf7d6a70c012d583aa5f74"],["/2023/05/05/蓝桥杯--质数（python）/index.html","b6ff70a2a87ebaa2e9812e909842667a"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","7cb4f5ebc82a2b3b02930c9354633128"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","cd8906efeba17a3d508c1e4f8fb40719"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","47698508b8e55bdebdc959f52c3df858"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","8d1846b3e781de3f7c9c24bad7368b13"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","c4a50f0801911d300b472cd4a361e4d7"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","83ee15cea0ca17849f0a13130dbb1a62"],["/2023/05/05/质数拆分（JAVA）/index.html","6f32fccc0df6c2e19973ef220979282e"],["/2023/05/05/闹钟定时程序（python）/index.html","69fc72e03d6828938528028f86338053"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","6ac966d8f8b262fc04fa07fefe29ef08"],["/2023/05/07/GCD（JAVA）/index.html","04f600cef66e6ca677146888ae3bbc33"],["/2023/05/07/七段码（JAVA）/index.html","c035f2460f05caef2fb390c306e61219"],["/2023/05/07/全排列的价值（JAVA）/index.html","b45d8b8606c0d883ba56e8c76bf7e51f"],["/2023/05/07/双向排序（JAVA）/index.html","69f06969c6407fae94e248b5bb8d716d"],["/2023/05/07/四平方和（JAVA）/index.html","2833d22a2cd6b0ed1a3691702572707d"],["/2023/05/07/回文日期（JAVA）-1/index.html","1361b4d54caf8e996109a167da896104"],["/2023/05/07/山（JAVA）/index.html","84ace2b40a14e152ed4e512cb30b36b4"],["/2023/05/07/数位排序（JAVA）/index.html","7f8e3dc0e8d209f04006f80889ff5b5a"],["/2023/05/07/数组切分（JAVA）/index.html","81c6ced73936fd28898c4ddbde8683c2"],["/2023/05/07/最优清零方案（JAVA）/index.html","c00543d360aee51f625aa11dd1898c8c"],["/2023/05/07/最少刷题数（JAVA）/index.html","3868deaaa80048d5fad6f55c864f1a05"],["/2023/05/07/杨辉三角形（JAVA）/index.html","6bbae31a7aa619a8cb6a7628a2907389"],["/2023/05/07/求和（JAVA）/index.html","a797d98d06b2c825d206a8fbd61ec502"],["/2023/05/07/求阶乘（JAVA）/index.html","e610c17d35f1bde8ba0e9ae31f6d9217"],["/2023/05/07/牌型种数（JAVA）/index.html","b97f772e02fecfaef38329e80f4296f9"],["/2023/05/07/猜字母（JAVA）/index.html","261d23d14505ad16d072debd90cc6e99"],["/2023/05/07/路径（JAVA）/index.html","5d3706ad0d017e1c9399b6ebfce86f28"],["/2023/05/07/青蛙过河（JAVA）/index.html","63ec649bd8dfa7a6edcb32b977164f5d"],["/2023/05/16/重合次数（JAVA）/index.html","ae1c822163c878e3587b462e88595f2a"],["/2023/05/22/左移右移（JAVA）/index.html","82bf3054215211b52ccbe4b2b4abc905"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","5659272f5c558a40d4fe0b28b952a3a0"],["/2023/05/28/本质上升序列（JAVA）/index.html","1d36b3dea7ee8cf5899617d68cb38a4d"],["/2023/06/07/方格填数（JAVA）/index.html","526d79ee9ed1c4e13ea49c7676ea838d"],["/2023/06/09/合根植物（JAVA）/index.html","2434181a6d5fa3803eee7eb272ee551a"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","cbd69efd18b07767b292c7d836a0eba7"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","eed3de08d4c18770d2364833978e0a5b"],["/about/index.html","c976d81c22e39fb573bcab726198c16e"],["/archives/2023/04/index.html","618aa7d33e08600c1927d7eaa2521ec5"],["/archives/2023/04/page/2/index.html","44fb7a3fe3d9f0449beaa62e4a5b86c3"],["/archives/2023/05/index.html","86badd6487d8d6a06c9c5f0777a72368"],["/archives/2023/05/page/2/index.html","18df9aed00cec666bd1cef2fb3f5c7af"],["/archives/2023/05/page/3/index.html","0e7408fb71f8929b1762f86d913e0fa5"],["/archives/2023/05/page/4/index.html","29bbcaaac80b4574b5f59b38c9f53a09"],["/archives/2023/05/page/5/index.html","e09fa4da3d08e0a89501d084517aaca3"],["/archives/2023/05/page/6/index.html","dd4b1ddc6005caea691a08df6d200c3d"],["/archives/2023/06/index.html","f1d8fe054648193a786a2a70eb94637c"],["/archives/2023/07/index.html","892ccafef3c22602d7ca19acb3efe447"],["/archives/2023/index.html","19602d0bfcd0ffc6e942c5479ac85fd0"],["/archives/2023/page/2/index.html","ef701e3f15bce86d92057a29343e4fd8"],["/archives/2023/page/3/index.html","4256584dc2f5c5ecb97c76e071147a5b"],["/archives/2023/page/4/index.html","0641e523bb3178fe516ae4fd43dc764d"],["/archives/2023/page/5/index.html","ae2439476581c4508497a40d359b9b79"],["/archives/2023/page/6/index.html","51ce50844ba6a8065f26c7cfcfc94caf"],["/archives/2023/page/7/index.html","d75996c0775bb3cbbe13b89a6d686cca"],["/archives/2023/page/8/index.html","74ba91ce5a55ff82d7c0867297fcfe16"],["/archives/index.html","fe0825ca5efdb38089c163622dc89ca2"],["/archives/page/2/index.html","e50e6f8aef3bcb3982f4de5d23809434"],["/archives/page/3/index.html","eeab90d50088e4e3db5d1d6032d475bd"],["/archives/page/4/index.html","ad60e753d71cf0e33369ae536e53e363"],["/archives/page/5/index.html","f43c3f1bc273247c1c4b37ae111c6aec"],["/archives/page/6/index.html","87f3306134b4db60df6e413ca2ca924a"],["/archives/page/7/index.html","160d59ad645d0026f861607b06503ca3"],["/archives/page/8/index.html","36416b2652f641b10decfdcfd84deb2f"],["/categories/index.html","fbcd861c81d415d1460426a5f2c2382a"],["/categories/java/index.html","102f629276a25c08bd7b6c22b38fcd72"],["/categories/java/page/2/index.html","150ce38bb739e88aec7033917a9c6306"],["/categories/java/page/3/index.html","08801821b13336f95c927a1972fe8cab"],["/categories/java/page/4/index.html","bc685d3a5bc7feec52ca6f3067a59b8a"],["/categories/java/page/5/index.html","41b24b0459da7f10d22bbc43c8a120c3"],["/categories/java/算法/index.html","01944c76322cb590785b6b3785abdc42"],["/categories/java/算法/page/2/index.html","d3bc6e31ece90f21f27f26e2854968f6"],["/categories/java/算法/page/3/index.html","3629656356cbe365baf30a7e8ac4ef35"],["/categories/java/算法/page/4/index.html","6b065a1a993a8420f91ee4088adcbb15"],["/categories/java/算法/蓝桥杯/index.html","69987924c7d7eb63ae7c6ecb7c5233f2"],["/categories/java/算法/蓝桥杯/page/2/index.html","566bf35a1705317d8b7e03f02a4bf1cb"],["/categories/java/算法/蓝桥杯/page/3/index.html","027a2fbff41ee9c7258c39e39eba4c3d"],["/categories/java/算法/蓝桥杯/page/4/index.html","ad7425457495fb84e6863169b870b281"],["/categories/java/蓝桥杯/index.html","5d774f00c0311e85a41cc3558f205156"],["/categories/python/index.html","1f3e80059f0fa91114584bb62461cc51"],["/categories/python/page/2/index.html","a59fba6899f243626191f0d7e903d944"],["/categories/python/page/3/index.html","810d559921b21b85e5ff47e0c4f6df2a"],["/categories/python/蓝桥杯/index.html","739568872c211f19afdd97eb6215da00"],["/categories/python/蓝桥杯/page/2/index.html","ed3b2235e061ea30ea905ce3a4117cb4"],["/categories/python/蓝桥杯/page/3/index.html","c0749b8f2615cf53621050ce477f45d3"],["/categories/python/蓝桥杯/冒泡排序/index.html","6206d50a3320994ae6e8638bc9af2ddc"],["/categories/python/蓝桥杯/结构体/index.html","d0e4cbf8f1019212ef01871c6eaa763b"],["/categories/python/蓝桥杯/链表/index.html","ddac3d46db4292387c2e8f142b65c271"],["/categories/教程/index.html","cf00560cadb18c77f1bca92f107e813e"],["/categories/日常习题/index.html","5c6275df17fd481839b2004f66949d43"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5d27c0ad32ceb0ba1a9922ae5cf62064"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","6c15102d78cb7843e95685e8395a9be7"],["/page/2/index.html","e95177ca9a62b2113ffe8d5e17933873"],["/page/3/index.html","4a3dac66045d49d54b848e0a2d958ef3"],["/page/4/index.html","bf5be1f990223b0b41896159776f3fa8"],["/page/5/index.html","f651b8be1bb88a5a51a144c0fd1ee40b"],["/page/6/index.html","a1eb5e91baa44b963f52f4fc2ba9c836"],["/page/7/index.html","78678ea67752804e101a256d6575dc9e"],["/page/8/index.html","0bac09537ada130c74d5319a7a1d07b1"],["/sw-register.js","99b546eda88c8cc7fd804f481d6dfab5"],["/tags/index.html","0daa77dd1f932519d31962e098342884"],["/tags/java/index.html","0fa06b86e9fecc149047eeec546496f8"],["/tags/java/page/2/index.html","95122db097b10018c8e26c6a98e84f8d"],["/tags/java/page/3/index.html","2d5997757717d3b957f5c3a0948c9a0b"],["/tags/java/page/4/index.html","956dcc8e93528198ee6a62281f0b48c2"],["/tags/java/page/5/index.html","94afb4c4a76d2cab18768283a8c4b425"],["/tags/python/index.html","015a17a58a0dcaddaf7fc4e1ee68221a"],["/tags/python/page/2/index.html","8323be3b8fab84488583f7a690d0ea9d"],["/tags/python/page/3/index.html","791b90920936c7e8dab26c7ae5011e3f"],["/tags/冒泡排序/index.html","f29f8fda7fb1bd253bea4f9e5dd41d40"],["/tags/算法/index.html","4adb13640ac1016a23b85613753654d5"],["/tags/算法/page/2/index.html","5efa204d6804bc382d581b5443cd0ccd"],["/tags/算法/page/3/index.html","40542a875e355c7112bcd44c0ffa17bd"],["/tags/算法/page/4/index.html","8cef45b85e9b2caf8c70d235eb4061ed"],["/tags/结构体/index.html","6edf3b431e6f9997bdf9c6cb9fd19848"],["/tags/蓝桥杯/index.html","cbc46573fbb2cd37a4da9c93792138af"],["/tags/蓝桥杯/page/2/index.html","643e6e337010551f69cfd354595ac5a0"],["/tags/蓝桥杯/page/3/index.html","18c555bc56bec76bc78748998bea9f4b"],["/tags/蓝桥杯/page/4/index.html","b9dab5efc6153610f52937909d42d084"],["/tags/蓝桥杯/page/5/index.html","75c348ec0ee969c042c84bc2e78a8c00"],["/tags/蓝桥杯/page/6/index.html","6f343c1ff016d5f08c5180a3313663e4"],["/tags/蓝桥杯/page/7/index.html","4709d6c0a85b5033de6718ac60ae80ac"],["/tags/资源教程/index.html","ed40954c1ce923ecaf5f5eee63de00f0"],["/tags/链表/index.html","0dff11d461a6dc786e3ff035ebd9eda4"]];
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
