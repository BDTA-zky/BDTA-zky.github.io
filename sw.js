/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","a32b65782d4705f6e714223ce60285b0"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","100f5e2779289a7af3637694ef879e37"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","d08ec2e1f069044ee75b414a5872a93c"],["/2023/04/22/验证码（random类）/index.html","d67a2e6355073a1593c5874545416d35"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","d8c86d7b47d29ae044de804021448aae"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","6d50e50c4e829b7c2baf9b961ec01738"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","c4238dc1f6f259d5e55653f6f76aae2e"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","c7d4488ab7bbff1243b828b46596b5b5"],["/2023/04/23/蓝桥杯-山（java）/index.html","a903e338acbd6c3110d786edd3203dc9"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","e6b77da0f4378ac605c151dbb37f710c"],["/2023/04/23/蓝桥杯-时间显示/index.html","3aa33e116bc1f8d5545066266235a220"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","9f6fe7b44e94b91f96d531964f26335d"],["/2023/04/23/蓝桥杯-特别数的和/index.html","445db5d9aef06753fc6b003748d09d31"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","6dffa6f8abcb3beff99091d1cc7e9d44"],["/2023/04/27/案例2-1 商品入库（java）/index.html","23b56409032419bf5704e7c588175e37"],["/2023/04/27/猜数字（python）/index.html","cc8493df88b859c8c2ebf60a28a758b7"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","4d4c92bf55a9af8305a46891f8d6f85e"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","49a247f8613a28fca4e9de381556d70a"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","71e5b6ef284ac59518389df78773caa7"],["/2023/05/02/数字三角形（JAVA）/index.html","d00d462c00068b30aec125dcfecad8c2"],["/2023/05/05/k倍区间（JAVA）/index.html","6b141b80143fea8569c5c057e5aa5c14"],["/2023/05/05/作物杂交（JAVA）/index.html","e462ac744c0e9b29869ae0d34e8437f7"],["/2023/05/05/包子凑数（JAVA）/index.html","2ff5a91036f4b1c9ca798bc686e2e468"],["/2023/05/05/取球博弈（JAVA）/index.html","f2b0be6e8a97b17f188ed6484c0a59ae"],["/2023/05/05/回文日期（JAVA）/index.html","784b9d70622b3641f138b53a60e51eeb"],["/2023/05/05/砝码称重（JAVA）/index.html","d4515e32cd04529bf8922d2fbb7324ca"],["/2023/05/05/等差数列（JAVA）/index.html","52e92956a3bb6ddc39ddc8dc59b8e2d2"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","70a13257117c89d134f2bf8d62f7a1b0"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","60b9421126cc63030ee17f60ff6cf210"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","a9ab06595efe0c656f05ee9af4d8add3"],["/2023/05/05/蓝桥杯--排序（python）/index.html","e80db96d739df715e40c795a4ee6e135"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","f4bc3093b304b5ccd4604fcbd0ce5c5d"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","14643ec769efd2f09d9e6f950054810e"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","0c8b5cead55f56be507597bf92da3303"],["/2023/05/05/蓝桥杯--空间（python）/index.html","5a11247650c968669d7000eebfe71c04"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","4bea0d813c7d3570446b47fa2692a223"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","288aea9ac8ce83d05a695c0ac2938e17"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","89ab99294b17cbe3ec04abead8a1cb38"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","53bbb01526a4ca69d7eaa580cfd65d4b"],["/2023/05/05/蓝桥杯--质数（python）/index.html","02e89f07eff0c6f179a8401c54544e64"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","65e01975c84ab30032f42b488137cc01"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","6ab992e3147d45c81ceb3cb6fa277d5e"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","a8d323c2a646a244042450d2b55eedc8"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","15a5cdac837cd95918d8611a7b664fe4"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","09e93b274a01a038968bf5269c54a746"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","ae23f79e3c2ac9b02cdf2e518da17995"],["/2023/05/05/质数拆分（JAVA）/index.html","73ab2a556f802c70d3c2ee0269303ae7"],["/2023/05/05/闹钟定时程序（python）/index.html","e14147e604ea6e157ad7d8f700611099"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","a60389658f9086112ba4b96611b37a1d"],["/2023/05/07/GCD（JAVA）/index.html","5f80f102f746bb2bf3ee5d5cd7e36ae6"],["/2023/05/07/七段码（JAVA）/index.html","50daa683f55f2299511353ff33e2707f"],["/2023/05/07/全排列的价值（JAVA）/index.html","fa89be1ba049c9ddbf642121554ee65f"],["/2023/05/07/双向排序（JAVA）/index.html","2d63f3223bae8c0be5e77ec9fb9c7b13"],["/2023/05/07/四平方和（JAVA）/index.html","2b8f13205dee7c5a962717286d820093"],["/2023/05/07/回文日期（JAVA）-1/index.html","9b64184af4213d02b0683d240bf81cce"],["/2023/05/07/山（JAVA）/index.html","c592803091c9e5a2e3e5c9d0fefcb953"],["/2023/05/07/数位排序（JAVA）/index.html","cb94c3b17b9119ac10d55be3c8cb765f"],["/2023/05/07/数组切分（JAVA）/index.html","eb9d55b9288d01fb2585984c333dad9a"],["/2023/05/07/最优清零方案（JAVA）/index.html","a6bfed2d34e7f987228cdbb74b2499b7"],["/2023/05/07/最少刷题数（JAVA）/index.html","e51ce70d3a7d488a240a97a56b0e105a"],["/2023/05/07/杨辉三角形（JAVA）/index.html","069eee74b183a5c456d84efceef7b32f"],["/2023/05/07/求和（JAVA）/index.html","5611ef569db6d3e4c6ca04f905221a98"],["/2023/05/07/求阶乘（JAVA）/index.html","2ef7bb69c788e897a0ba11eb30061eee"],["/2023/05/07/牌型种数（JAVA）/index.html","93ec269efd18da6407a84e4757447911"],["/2023/05/07/猜字母（JAVA）/index.html","5fe2162e2cffafcd1d0bdab97d1aac76"],["/2023/05/07/路径（JAVA）/index.html","884ef7c503133c92f04e8ed0860e7409"],["/2023/05/07/青蛙过河（JAVA）/index.html","a12a065a79a650872aedd9288e243fd4"],["/2023/05/16/重合次数（JAVA）/index.html","8879aea5c561d55e36faf91f02d3306f"],["/2023/05/22/左移右移（JAVA）/index.html","2fa2e0e80e456a03cdbc98bff20235bd"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","5b8a85df028b2e1ef8895910da4290e1"],["/2023/05/28/本质上升序列（JAVA）/index.html","b2a682250917a01fea59bbcd9d01bb9f"],["/2023/06/07/方格填数（JAVA）/index.html","2cfb1f071ce5a9f427ca4defc0855b70"],["/2023/06/09/合根植物（JAVA）/index.html","2d6d33a0f9391315378b39271dbee387"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","4d414c9bff986a019676dd0d03e59fc1"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","8857dcef90a3aa8efa1aae3bee397936"],["/about/index.html","337e4397a509c37a889b94d18cfc10bb"],["/archives/2023/04/index.html","7e515c49e8314cf1129a34eda8dc7e9c"],["/archives/2023/04/page/2/index.html","7db59bb0ba6a0e72c078a31537540537"],["/archives/2023/05/index.html","5f4a864ab5d2e9bba1106cd22a98177f"],["/archives/2023/05/page/2/index.html","2ac64f01eeb5a9c96d85bb0dc5d9b0e4"],["/archives/2023/05/page/3/index.html","bd8ae0c4f90243b3c1abbdffc238564f"],["/archives/2023/05/page/4/index.html","c010053e75dae3f4e8b5f5522b10d52c"],["/archives/2023/05/page/5/index.html","fbebc6e141ffc1bb79947123f9b48e3a"],["/archives/2023/05/page/6/index.html","762e29f5c234efabd374068b20080ce2"],["/archives/2023/06/index.html","58a4790c02f4d22d9434e800789681e2"],["/archives/2023/07/index.html","f110219843699283b7a92a18a0c76d94"],["/archives/2023/index.html","023151e99ce006818f52ba7d7020c03a"],["/archives/2023/page/2/index.html","e033b81e4159b5c0ee844c19ca979edc"],["/archives/2023/page/3/index.html","60c7280ee5be86b5b27850d02b7cf9fd"],["/archives/2023/page/4/index.html","3d3cfe0583b7b64a3d92364fd97eca56"],["/archives/2023/page/5/index.html","7fec1a1826b8375e76aed0d3ad3a6570"],["/archives/2023/page/6/index.html","3f86f2c307efb67ee8724cb461ef9501"],["/archives/2023/page/7/index.html","37c7b1319985e1b985ab0c484cb6187d"],["/archives/2023/page/8/index.html","00bb65af0a5606ae39fadd59cbac94bd"],["/archives/index.html","c4b6d9146fd1ac7a29838c22805ac9b3"],["/archives/page/2/index.html","37016a84b611b5461c5cf20e6f8b5b39"],["/archives/page/3/index.html","cde568bf7d725cdfd6398014fbab7975"],["/archives/page/4/index.html","1a8df0ce854f26bd987f89f82cd893dd"],["/archives/page/5/index.html","69d08f8d75e69adf13d81103d84eddbc"],["/archives/page/6/index.html","456393c14d81308933fd22988e7fd47d"],["/archives/page/7/index.html","aa5e58c2884f3e0cde5a7279095d8420"],["/archives/page/8/index.html","169102ca0577db9834e9821b2beb216b"],["/categories/index.html","06116cd9bc78ba07d536728667a67748"],["/categories/java/index.html","d18380cad83646b869b14909ebaba2a7"],["/categories/java/page/2/index.html","a7ea469987379d16227faa6adea26f95"],["/categories/java/page/3/index.html","0ed725968d5790c1555c6712aa2b0d46"],["/categories/java/page/4/index.html","b8f3081e52681ff76a11c762653f46fb"],["/categories/java/page/5/index.html","c4cb1a8336c7075fbebcd57d1a3b7965"],["/categories/java/算法/index.html","4b1d8c5bbba62ee0d786b0115b845d8f"],["/categories/java/算法/page/2/index.html","82447865c18c945536e015784496d07a"],["/categories/java/算法/page/3/index.html","394d50cf56b2cfcde2b4b5cd645011a7"],["/categories/java/算法/page/4/index.html","5a4f53a07ca0fe984752c934cf9db952"],["/categories/java/算法/蓝桥杯/index.html","063bceddac6b141bde39cf75b2bb5a69"],["/categories/java/算法/蓝桥杯/page/2/index.html","eccb5e25b0557ec5d02053c809ee62d1"],["/categories/java/算法/蓝桥杯/page/3/index.html","ed2604de13be480f7e5442e801226d8d"],["/categories/java/算法/蓝桥杯/page/4/index.html","6357e108e1d68375b9311628a8c9e87b"],["/categories/java/蓝桥杯/index.html","aa5cad44efa85bdcba8b57f745cf4841"],["/categories/python/index.html","aa233987f87dca73d99b9b27ae57eb97"],["/categories/python/page/2/index.html","3372debf4603ce3907918f7919d02ccb"],["/categories/python/page/3/index.html","ad32b97bb2a10747c12f19d421556c99"],["/categories/python/蓝桥杯/index.html","d1238d97071ebbb1cff77deef7fa42c4"],["/categories/python/蓝桥杯/page/2/index.html","f6d4990379286a718bbfb20d70318449"],["/categories/python/蓝桥杯/page/3/index.html","d4bbd4c8586349ab10df96fcf2bb10d2"],["/categories/python/蓝桥杯/冒泡排序/index.html","58df16adb82234d740cf09f8f542ee7a"],["/categories/python/蓝桥杯/结构体/index.html","1dd5999295476f8aeb9e67bc4e3ae9ec"],["/categories/python/蓝桥杯/链表/index.html","c70e6f10a7ac16388e77f95cd3e0b159"],["/categories/教程/index.html","f98aefd9a1b66e8c3c36d58379880d2e"],["/categories/日常习题/index.html","84db71daa1041da8803b2c68a88b45cb"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","82180197543bff6068a2cdcd4fb0c533"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","87ce4b0f616b18ac5a0518c6ca4761fe"],["/page/2/index.html","a87be94a3ca5449d94a4821ac10e7494"],["/page/3/index.html","04b19ea335dc86ed2c1e1eb841df0a23"],["/page/4/index.html","14ab8c3efd8b1b57f20c26dc2cd24ce4"],["/page/5/index.html","ca322c3f52640c492e1754a907e0fdac"],["/page/6/index.html","a5f0cf777403fdd3a8e9a1275f658c8f"],["/page/7/index.html","d9230269323b19c7d9081e14b6ea3505"],["/page/8/index.html","c90640ea5eba0a404347ac6a0bb6ebec"],["/sw-register.js","13db47fd46b8ac8f7c926a27f48a6d8e"],["/tags/index.html","7dbebdd65126ee833991a3b0fe0a63d4"],["/tags/java/index.html","1a9e94e7b3bf62eddf9ff0954faf5eba"],["/tags/java/page/2/index.html","9b4aa64278d1bf4622a803a30d18ce71"],["/tags/java/page/3/index.html","f7fef6c472fc90788a7e26fe8cad3cab"],["/tags/java/page/4/index.html","6b794d288af511362bf784f902cd386c"],["/tags/java/page/5/index.html","c21866dfeb01acddc30296d6de257241"],["/tags/python/index.html","39de2a2baeedc6f1728882fb158240bd"],["/tags/python/page/2/index.html","35ab02424ee3eaaa967c67fae442be8f"],["/tags/python/page/3/index.html","1b83dee7dd0057d5a66f16a62a755dee"],["/tags/冒泡排序/index.html","b75cfb301d990dea96f9a0f30fc37d82"],["/tags/算法/index.html","c708346953d266a52a5d166179bbca64"],["/tags/算法/page/2/index.html","09e4e37428eb92110f2e04db95a7b23e"],["/tags/算法/page/3/index.html","7836a847b9866a709586cf2c48da3c93"],["/tags/算法/page/4/index.html","5aa68e1376715d4cb34375bd9eb3923b"],["/tags/结构体/index.html","6c93d86e6f9be589ec36f5adf44d34a4"],["/tags/蓝桥杯/index.html","b2b0ebf807357d49f9ed9e7a4046e7f0"],["/tags/蓝桥杯/page/2/index.html","72296a88c8d8c4198f7f51cd8eb60dd8"],["/tags/蓝桥杯/page/3/index.html","fc891b705630a47b2c7e3e23bb65d988"],["/tags/蓝桥杯/page/4/index.html","2cbd1c465a34b27deadf744d1f202e6b"],["/tags/蓝桥杯/page/5/index.html","0cfbefe8d6657ce5f0e3e89c4d7d4e11"],["/tags/蓝桥杯/page/6/index.html","ad391936a12d503a72967a0d04f39cf9"],["/tags/蓝桥杯/page/7/index.html","cb05f66a3da42935bd7b298d3459993f"],["/tags/资源教程/index.html","d92ff1199854f22ff346b70c32f6eab6"],["/tags/链表/index.html","e6fc72ec370f811112db9a75627407d5"]];
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
