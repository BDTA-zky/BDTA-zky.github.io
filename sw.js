/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","4d2139f9f80b58e11410f50d27472f66"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","c993e14446a44c1a59fd9690fac1c112"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","270f1c1e4b61ddc484f6616633ebf4a4"],["/2023/04/22/验证码（random类）/index.html","616810ec588365de74b3fef78dd7c40e"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","3a7698c8a6a5722e8aaa3c860f8cd78a"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","e0a6b94fd5e56048cb0831c24a117228"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","48340d0381ef337aa8bbda23e32e83b2"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","52bb9caca82d2477f84818fed29969e3"],["/2023/04/23/蓝桥杯-山（java）/index.html","427b1769a497ec3d90d8d712253a7600"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","caec41dc0493b1c04da476a341c89fc0"],["/2023/04/23/蓝桥杯-时间显示/index.html","181e35c756e7eb4789ba9b7224d72b53"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","19a0b4c024971317a7b95299535423df"],["/2023/04/23/蓝桥杯-特别数的和/index.html","b6cf9bbd0620d660f2d8a36ca9ab4035"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","c7b0308b141ed6c05c83fb808773499e"],["/2023/04/27/案例2-1 商品入库（java）/index.html","829fdbd0c0d680d33d43ef3cd409e91d"],["/2023/04/27/猜数字（python）/index.html","0e97f1356a529417f0d88b8d271559dc"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","4bb1b05eb0ac03326e71a1812b856b7a"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","9880830d68bdb855505941f9e35180b4"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","43fca71db5bd6fcf606ebe914f996690"],["/2023/05/02/数字三角形（JAVA）/index.html","59e3f5e5ab5563c8686a0f85f494a2f6"],["/2023/05/05/k倍区间（JAVA）/index.html","b1220485f719797bcf21f36e30036abf"],["/2023/05/05/作物杂交（JAVA）/index.html","f2b490323cb16ef25409ad2c7b5d3812"],["/2023/05/05/包子凑数（JAVA）/index.html","eba3d8b63c9f32672beb05875862bc3a"],["/2023/05/05/取球博弈（JAVA）/index.html","eb15fdbeeddf0e66916abd08004606bd"],["/2023/05/05/回文日期（JAVA）/index.html","f7e0966ff88d1dce1ece0a58fafbf229"],["/2023/05/05/砝码称重（JAVA）/index.html","db7893db16207c331e3798f866fd1fd9"],["/2023/05/05/等差数列（JAVA）/index.html","9be9c18bbe714e4cf066a0451746c201"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","2f81f85e6bfd952052951aeb09de907f"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","e692f77494e93d976b0155500eae6855"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","56ee297ff1b9ca87de958b9252c74363"],["/2023/05/05/蓝桥杯--排序（python）/index.html","795648b653734014e8e5185085a9f929"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","300ee72e6f6f556af1b31b5c28e3c16e"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","2618455b3351b3931c210bca8748fe2c"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","8284798f405946be1c0edb42ecc25741"],["/2023/05/05/蓝桥杯--空间（python）/index.html","8695e2e3fa5f962b4d6dc40c7a29c6dd"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","586da9c00e80deaa3bcd546524a0d69d"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","b24b9e39f9dd72d96e11cfb697e26610"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","b3ae01654fd30f981f2ae1d1b919014e"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","59ce30035ac446df6ada75270831a0c4"],["/2023/05/05/蓝桥杯--质数（python）/index.html","25f1bc588870f356ea9e9b02aaaded6b"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","ff3838ccd4e924c874ebfe40804fccfa"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","fa89a7fb31c223c1a8370887d593b7f4"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","fae5e4e5872788904b9e772b31772189"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","8b8ca4f9b597ae90db4e72ccea25ee3e"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","7cfab832d5c40da0734aab719443a56b"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","a1f994ef987cbcc27cf7cd6e4e6e9a27"],["/2023/05/05/质数拆分（JAVA）/index.html","9c648f08b72e8b811ab0e5afb6a6ceae"],["/2023/05/05/闹钟定时程序（python）/index.html","76885eeb555b5ec8d88e9105e637a305"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","538d138b03726e6611e40de0094564f8"],["/2023/05/07/GCD（JAVA）/index.html","b9d6efd65d613778a9599cb4a83d535a"],["/2023/05/07/七段码（JAVA）/index.html","25eb473741f2955644148a166e1c7585"],["/2023/05/07/全排列的价值（JAVA）/index.html","09ca9b354d8d6dafcc6e330fad8c7ffe"],["/2023/05/07/双向排序（JAVA）/index.html","6198b63b5add8bcabc901208f68128a1"],["/2023/05/07/四平方和（JAVA）/index.html","36dcdef0cc108d5f91a2cac555a3b143"],["/2023/05/07/回文日期（JAVA）-1/index.html","b2a8ac11b4b009a34bf5d69c275faec1"],["/2023/05/07/山（JAVA）/index.html","be72602918041ab3e9f1a537be2cc900"],["/2023/05/07/数位排序（JAVA）/index.html","27d25a7e3272507300dbc9d45503e9d4"],["/2023/05/07/数组切分（JAVA）/index.html","911290f2b81730dee74cd3892a12e5aa"],["/2023/05/07/最优清零方案（JAVA）/index.html","213198790c5211e0b8028190ca996c28"],["/2023/05/07/最少刷题数（JAVA）/index.html","756be689db9c2e5ef1d7d0664350b17d"],["/2023/05/07/杨辉三角形（JAVA）/index.html","517ec2fa18a3d76d186534bea900b7c1"],["/2023/05/07/求和（JAVA）/index.html","127280ee0026dc9d7f781e176766d7b6"],["/2023/05/07/求阶乘（JAVA）/index.html","15da39a2f98df53a208a34a9cc97b290"],["/2023/05/07/牌型种数（JAVA）/index.html","228910e69594690290102009c3b69042"],["/2023/05/07/猜字母（JAVA）/index.html","d6f6679a628b25282ac4bcaf115dabc2"],["/2023/05/07/路径（JAVA）/index.html","1b20a26c714c3b8118c483521b466e4d"],["/2023/05/07/青蛙过河（JAVA）/index.html","91cf37511d39fca125ba765e055fc889"],["/2023/05/16/重合次数（JAVA）/index.html","b71d094895924dc323402cebc7433b22"],["/2023/05/22/左移右移（JAVA）/index.html","f37ec3eee8a1f7a117cf692a5cf33fc4"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","4066b34dc31831a6a69a55e1a27d4fb0"],["/2023/05/28/本质上升序列（JAVA）/index.html","edd181a962cdb421643f593f4d9cbef3"],["/2023/06/07/方格填数（JAVA）/index.html","35bef868577e2ff45c8e99190a349e34"],["/2023/06/09/合根植物（JAVA）/index.html","49523d338427da868cee4301c2a3a573"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","d557343e2bf768ba98d1cf008c2c4709"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","ced500729320c662e903452d08dfe19f"],["/about/index.html","51b0d4cf1be7b4c3ff5c483a8a6d530d"],["/archives/2023/04/index.html","3c54999ade1589402b392705947d3523"],["/archives/2023/04/page/2/index.html","b54cbb6a29bfa3eae83b6f8ec1d1eec3"],["/archives/2023/05/index.html","af0fe67d9bc5af760d820459efac6d83"],["/archives/2023/05/page/2/index.html","e31ffa92fbcde155aff9b1dd133855f9"],["/archives/2023/05/page/3/index.html","5ea3aabcf36349b5ee518766b072739d"],["/archives/2023/05/page/4/index.html","f82468a87852477a322db945064ba56b"],["/archives/2023/05/page/5/index.html","c6b2b6299708aff3662d524d8717ef81"],["/archives/2023/05/page/6/index.html","7e119f1156f50cb2df9c8cde7a0f32a7"],["/archives/2023/06/index.html","baf3112c1e6477cf5c0c66f2ba688b8b"],["/archives/2023/07/index.html","297fbadc49bd2e4d12ee249aeeef7a1a"],["/archives/2023/index.html","173ebc22a62c59ebc67399e7009cb8b7"],["/archives/2023/page/2/index.html","2c729ac5932d6ee1004f37724d332e00"],["/archives/2023/page/3/index.html","6cdf04330d7d354dee346440bd9f990c"],["/archives/2023/page/4/index.html","d5dcbfe28a3bd2061a0ac9a61380b338"],["/archives/2023/page/5/index.html","384c80e0c8367553fe2809b6604fc701"],["/archives/2023/page/6/index.html","b7b8ebd9d3f4c795232c8bf7ca22c187"],["/archives/2023/page/7/index.html","77ab29c07e28c2ca80170964ec314ef5"],["/archives/2023/page/8/index.html","f597ec41e15cfa8f0f10d7cc21759b6f"],["/archives/index.html","a87cd59021c1dd26c688facdefcfa4bd"],["/archives/page/2/index.html","3d54300a0be9b72fccdcca20677df71a"],["/archives/page/3/index.html","550c4dc7a0bd9d352d31fc23040ad100"],["/archives/page/4/index.html","36873ad1db4e77a938ff0221abc00a06"],["/archives/page/5/index.html","0b60b817a00918683cd67e1d9667605d"],["/archives/page/6/index.html","6be8d147ea23341c801dc33cbc6bf2a0"],["/archives/page/7/index.html","a9ff9a19144545b1a6c0565698c913cb"],["/archives/page/8/index.html","c77d226f23408b133d054800200fcb57"],["/categories/index.html","9ff74c717b9ea5a60e277aebff7bc6c7"],["/categories/java/index.html","7db50f9d3ffd53ef597d126f2ddf20cd"],["/categories/java/page/2/index.html","91e708245c72a8e950d448c467e806e9"],["/categories/java/page/3/index.html","3c3b55f509952c95f01be8906da6340f"],["/categories/java/page/4/index.html","32fd29db1cadff395153346522c9669f"],["/categories/java/page/5/index.html","4a46b63de0dcc2abfffcf91428fb1ae3"],["/categories/java/算法/index.html","bc844bc3cc9fda4b2f643adf621eca96"],["/categories/java/算法/page/2/index.html","63f5591efb02e947311852bf1e7bd766"],["/categories/java/算法/page/3/index.html","a2ba90973c3716c266d94b25c94261cb"],["/categories/java/算法/page/4/index.html","36b0dd5c556c1e0d0c7b788e426d5044"],["/categories/java/算法/蓝桥杯/index.html","0d8811b99c1ffc76e7dd3f8ecdfe8eb4"],["/categories/java/算法/蓝桥杯/page/2/index.html","bad98c6985aa7286be663b0d48f1bab0"],["/categories/java/算法/蓝桥杯/page/3/index.html","2902a53fc7a2be90ac1c6c5734697cf8"],["/categories/java/算法/蓝桥杯/page/4/index.html","232ef6951b572e3bf47926e926818b9f"],["/categories/java/蓝桥杯/index.html","b99b87f9aff00fee2564fdf2d971471d"],["/categories/python/index.html","8eee1076446ff8590d5b507c93187b74"],["/categories/python/page/2/index.html","51637e518bbffe5a1fed10944e92b13b"],["/categories/python/page/3/index.html","95fba988343d52a65348622bf65752d4"],["/categories/python/蓝桥杯/index.html","164b62fbd4ec2fb763cf9ea9b4b0b483"],["/categories/python/蓝桥杯/page/2/index.html","5f6620d3c0147da3e76dd6a6b6d2e7f7"],["/categories/python/蓝桥杯/page/3/index.html","3b8288bd6d7d1a28b380b66f027bff5d"],["/categories/python/蓝桥杯/冒泡排序/index.html","c6e661a812e01f5c01ff8a981f5e8653"],["/categories/python/蓝桥杯/结构体/index.html","476edb8ae564d835a4c9a68e583c585c"],["/categories/python/蓝桥杯/链表/index.html","398dc8d3567c1adcf46fcd2b2c987a0c"],["/categories/教程/index.html","1b5dbdd0f2c6621b9d0031610e348927"],["/categories/日常习题/index.html","2807a8246a4fd8730452877e00e185db"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","d95a7d9c63d0d63dae9ceb128819ba83"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","c6338c573f4f7ee44219e440c2c1944a"],["/page/2/index.html","a1f325d3e986a533566784a966a33fff"],["/page/3/index.html","7296310b8cacc16052a26cb41f6d46f6"],["/page/4/index.html","d9805e8b2f718fde308f66ce409713ae"],["/page/5/index.html","e48b10aac1f2d348d13f6951b0350e70"],["/page/6/index.html","869b4ca1317fc6c23b8cbb4a75fbee31"],["/page/7/index.html","f02208817b880826f13638b427830352"],["/page/8/index.html","e466828d58990ea41d8caa83292b7e7c"],["/sw-register.js","46907e87a135b61aea00c360f14d118f"],["/tags/index.html","b2a7707df3affb2fdef8ac5bb376898c"],["/tags/java/index.html","8fa36562be76c57ebb064116bf82c42d"],["/tags/java/page/2/index.html","067c7d4544205acc89ee4bf5da6aa520"],["/tags/java/page/3/index.html","a4604cc9d15c52cdad6ea66a6f1bc558"],["/tags/java/page/4/index.html","a9853c27ee3eb66b2bee37fcddc2a8bc"],["/tags/java/page/5/index.html","f31f5a360a1d0f805d0724ee7e0c3cce"],["/tags/python/index.html","9896d77f4615054b510590b8efc277d7"],["/tags/python/page/2/index.html","1892f1b77c0d1ee6b4c3799b3bf74434"],["/tags/python/page/3/index.html","f3fac8628ad3ef5305dc3fea4ea2fd42"],["/tags/冒泡排序/index.html","b371a36930f067be0ae01e30b240b366"],["/tags/算法/index.html","22c983f808493310798095f367d7dd62"],["/tags/算法/page/2/index.html","93b14f10d54ff0c1314808ebe9725d7b"],["/tags/算法/page/3/index.html","790b62f93022abe741ab0f257df983b6"],["/tags/算法/page/4/index.html","06315e4771a419bd2ec8220f757f940c"],["/tags/结构体/index.html","15d8788f09412afe9a35562711ff82fa"],["/tags/蓝桥杯/index.html","da795fe43e81ddc3aefcdd4280ac2493"],["/tags/蓝桥杯/page/2/index.html","27b2e825e0410448392f93e8d4af8aa6"],["/tags/蓝桥杯/page/3/index.html","3fdf318859531fe07bc6d43f4a2f79c2"],["/tags/蓝桥杯/page/4/index.html","fc451edd8bf1d611029e86cec212392f"],["/tags/蓝桥杯/page/5/index.html","86c674ac30fb4d46326347be3ee3cdf5"],["/tags/蓝桥杯/page/6/index.html","27b895ac5ea01c76e8dd105fd9881037"],["/tags/蓝桥杯/page/7/index.html","029a724038d48c46fda98f38e15a9a49"],["/tags/资源教程/index.html","ffddf84052f12a3f27d28feed8f0fa0c"],["/tags/链表/index.html","c7914ecd6d546f3b554f3a8909fc8406"]];
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
