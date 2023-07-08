/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","8ce200c2a4a2d724c71bceb04994aacd"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","10f8dfa04c5f96b14ce8fb9dea967746"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","08170533231bcf7425c30d3eb478cea3"],["/2023/04/22/验证码（random类）/index.html","0efcbfac7ac5341c5edcb9c43fb9b57c"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","9f636ab4f5d82f1df32f2ac1bdbb3a6e"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","f1b2c363dfcac091c5b5a304de0ea51d"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","4e614b575f7209b01213f9336ce656d9"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","2d2a173cc75557ffab4a7085649ea4e4"],["/2023/04/23/蓝桥杯-山（java）/index.html","97efadbabe13ba8702a2651c17347ec8"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","8a409b02c3215625796e24701941fd80"],["/2023/04/23/蓝桥杯-时间显示/index.html","92dfefa653daa9cbc048cf97e89338e1"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","6dbde4f08d12aaf570eb18cb0172c6a5"],["/2023/04/23/蓝桥杯-特别数的和/index.html","d1dfc262d8188fa974acb90fbfd1bdc0"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","1ffd03621156bc5f79adf17a6d780825"],["/2023/04/27/案例2-1 商品入库（java）/index.html","d6a9afb7ecfbd244e688bb68040823c6"],["/2023/04/27/猜数字（python）/index.html","910afefdd353b667e10b93ef9d9bb5ab"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","77acdbb8a306b6723cb71352d6add25a"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","713ce15b820994bbd139eef265993d0f"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","5f8b9ec2e60f6899f4b4874768d7074e"],["/2023/05/02/数字三角形（JAVA）/index.html","2f3e161ce13cbee570b302ed35a95b56"],["/2023/05/05/k倍区间（JAVA）/index.html","3de665c0012d01836d9d4e0ea97b5a71"],["/2023/05/05/作物杂交（JAVA）/index.html","54d945186a40dbfcace57250e3bc1a99"],["/2023/05/05/包子凑数（JAVA）/index.html","f4c1ccc94c902907e5bd43ea8bb54ebd"],["/2023/05/05/取球博弈（JAVA）/index.html","e7275500b562a47f72e3e9e138c574be"],["/2023/05/05/回文日期（JAVA）/index.html","27a728fcdcb4f0df2e905c7f5dbd437d"],["/2023/05/05/砝码称重（JAVA）/index.html","deac5dfa332662864015eb5b66904919"],["/2023/05/05/等差数列（JAVA）/index.html","341b2f7a2b310ce6aa2aa10626ecffd5"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","b0d3932893e0b2a234ab507330d5eb0c"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","1eb3b3624286a43ff09b0e5905d3d3b0"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","7150d8c3155f2da4f79e7c881ebf1e16"],["/2023/05/05/蓝桥杯--排序（python）/index.html","9d6b6a9f9f2672fd4609f6a1db2692bb"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","3d6131c5fe2217b7fbf77afb608a8999"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","e26095af459aab5e8a8871ae8767313a"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","03fa1aea4fa82562818d46a5991a61ba"],["/2023/05/05/蓝桥杯--空间（python）/index.html","ce01f15fb14d5acc1ac3df035d428703"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","582d135ea986acd111ce37988bb412fd"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","16020e3b1bd99c751bbf524ff1187734"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","4fa1b68e27e89b0d2ceec573d42f3b2a"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","3f669a9ff3dba89f16176218641a218f"],["/2023/05/05/蓝桥杯--质数（python）/index.html","008774c9c6f3290170ffacea8fe35bc8"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","6176151b0005b19042beef8c3ff31b74"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","226c1566c44b0e0a0a8479230c7e5150"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","42502c70d86ad9bbb5b1aa817b3056ee"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","78349ed77f04306a581393234e9a8d7a"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","1c8282fc1f3afcdd7da0fa1f9ddb0ca4"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","3c238face2e12703b37cc90be5c000db"],["/2023/05/05/质数拆分（JAVA）/index.html","e67f77d3527a51420e601cc933cd8440"],["/2023/05/05/闹钟定时程序（python）/index.html","f77655abe371fa31586c2d4a26a43cfc"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","8bb5f70cbc7067f3c97210c713a3dc4e"],["/2023/05/07/GCD（JAVA）/index.html","b14e7d1004cb1a1d4d51e4074e5a5360"],["/2023/05/07/七段码（JAVA）/index.html","4d9ba194b37826f788f24741116c18c9"],["/2023/05/07/全排列的价值（JAVA）/index.html","e566de95794a216c430fdf9a6410dcd4"],["/2023/05/07/双向排序（JAVA）/index.html","f16a08559a5f9588888d8f0ca3f4d1e7"],["/2023/05/07/四平方和（JAVA）/index.html","9a54e02a423be5e867bbe75ece3c69dd"],["/2023/05/07/回文日期（JAVA）-1/index.html","86cd3cf0cf1291cd3ae93919db88698d"],["/2023/05/07/山（JAVA）/index.html","f4c04a2fc50d5bdf5301328a9a245f84"],["/2023/05/07/数位排序（JAVA）/index.html","8d337e54431f5b19ee4374dacf8705c2"],["/2023/05/07/数组切分（JAVA）/index.html","aaa0873c181f3eee87c63d9e978b5ef9"],["/2023/05/07/最优清零方案（JAVA）/index.html","d5722772d0e3d6ff972b2fd82fa404ab"],["/2023/05/07/最少刷题数（JAVA）/index.html","b07f58bf65ac274e90792234f01dd1dc"],["/2023/05/07/杨辉三角形（JAVA）/index.html","e7835cccb283a48757bf32aee70f88e1"],["/2023/05/07/求和（JAVA）/index.html","ff9c635900173f371d591da0da38129e"],["/2023/05/07/求阶乘（JAVA）/index.html","f8c562ea46c015337c7a77a7f077ffc7"],["/2023/05/07/牌型种数（JAVA）/index.html","e65c9aa88ce06abe1e3c40e7054bbe15"],["/2023/05/07/猜字母（JAVA）/index.html","8190e6c43756e7278c82b1f4ca04ccad"],["/2023/05/07/路径（JAVA）/index.html","bc4a801727fe74458749af358ccc135a"],["/2023/05/07/青蛙过河（JAVA）/index.html","19f7a6a71a4e4c39ec4370985429b40b"],["/2023/05/16/重合次数（JAVA）/index.html","1a08b6707e89aeae02d6e6461822fa19"],["/2023/05/22/左移右移（JAVA）/index.html","9ddb5e08cc16bcc26889b1929520ddb3"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","2b7b0e5af6ac2716697cf9c912e74d20"],["/2023/05/28/本质上升序列（JAVA）/index.html","db0b4cb83d77b52dface2b42b204911c"],["/2023/06/07/方格填数（JAVA）/index.html","163dc5ea71d3090c76f034bae56d654b"],["/2023/06/09/合根植物（JAVA）/index.html","3d3d0a941b8ef7dec095a32325fc49bb"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","95e887427c933f8f240fe607d28ab3dc"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","afe3a9ea75af03df8edde1a56e790a28"],["/about/index.html","329acf05204e3f4b51aa934dcf6d777b"],["/archives/2023/04/index.html","2f1fd54291c2bfbb85f4a8008ca12d7d"],["/archives/2023/04/page/2/index.html","a324543d5293d469011fea1704f1a6e3"],["/archives/2023/05/index.html","5b6f488529dd3e0714d19b2d14888677"],["/archives/2023/05/page/2/index.html","4abc66eb4cc177696bdac0af44ff79c0"],["/archives/2023/05/page/3/index.html","8e3dd9a2dfd2db612f4cf7d1550aca60"],["/archives/2023/05/page/4/index.html","7f5b76788d19cd15b554a5d28421ed47"],["/archives/2023/05/page/5/index.html","7fcbc111fab9859289a88533ae1dffc9"],["/archives/2023/05/page/6/index.html","6bde214cd5a5b19e9aad3c5da38a7211"],["/archives/2023/06/index.html","ea8c28fecddb6ac8d2b7df6d9c217223"],["/archives/2023/07/index.html","aaafe410a979f5d30349d62e194bb483"],["/archives/2023/index.html","56d776dd5226ef5549cf9985594b5356"],["/archives/2023/page/2/index.html","1acdfe6edc9c81888a9d89b5b5ccc2b2"],["/archives/2023/page/3/index.html","e214891ee26861786f4f962c41368cd4"],["/archives/2023/page/4/index.html","89cfa4ddf8488d2e127e16134cb22271"],["/archives/2023/page/5/index.html","bb4581f3098798aa7b23817762f8d90a"],["/archives/2023/page/6/index.html","89e4b851315749dcc425f70621713dda"],["/archives/2023/page/7/index.html","bea6f9e29aa27fec41d21a1b545b710d"],["/archives/2023/page/8/index.html","653ab4f6452915be1ccdefd5cd52dd22"],["/archives/index.html","bac0acefeb1d879e2770396e45e20c77"],["/archives/page/2/index.html","f0f9119dfeffb688a57cdfeb32d2b7e6"],["/archives/page/3/index.html","6c0df074a6f34cea3e08a3ff1caaa776"],["/archives/page/4/index.html","282a084334a7426abbce1874a66fc0b9"],["/archives/page/5/index.html","16363686f6ae90aa5a377a2d1e66a519"],["/archives/page/6/index.html","cbf74a4aa00752a6ae79ed6f619c490f"],["/archives/page/7/index.html","1fc7cebd28de93edce3295998e11d7c5"],["/archives/page/8/index.html","c6057e35d241791457e1f206b4988ab1"],["/categories/index.html","2d84494b51dd9c58033940016c26a072"],["/categories/java/index.html","660423f45f0e250fd5d66c5d3b3d66af"],["/categories/java/page/2/index.html","b646fb958b5c81ef7c38bf1427664326"],["/categories/java/page/3/index.html","c74463a2af5edf723d639875cc0103c1"],["/categories/java/page/4/index.html","fc70ca797d1b163fe5b285ae32df8226"],["/categories/java/page/5/index.html","8caddddc4c7228dcd31eadeac747f0b1"],["/categories/java/算法/index.html","435c4fca41d1c88b38f027a3ac3f8c4c"],["/categories/java/算法/page/2/index.html","b42eb36c4763d332fbc9bd09c1363158"],["/categories/java/算法/page/3/index.html","f9b9634e1c70bacb7d4a1db333079929"],["/categories/java/算法/page/4/index.html","c65212e4c95e16b636b63d7fcfbb2e94"],["/categories/java/算法/蓝桥杯/index.html","a0a5808b2a24dce5d1ba6f621915cb7e"],["/categories/java/算法/蓝桥杯/page/2/index.html","23ce20141f003f3397cfc5c0d603be5f"],["/categories/java/算法/蓝桥杯/page/3/index.html","e7456fa51c54ec42f2a374015f33cb1d"],["/categories/java/算法/蓝桥杯/page/4/index.html","ea483482219a46a6e948ec87a03b80eb"],["/categories/java/蓝桥杯/index.html","c63469fc82e6d8010ed68d8b35996bd9"],["/categories/python/index.html","1ecf04a233e4e0b7ec688df1fc2d2c8e"],["/categories/python/page/2/index.html","ba4da3f680ee5bf46cb3562bf8b57203"],["/categories/python/page/3/index.html","d41b1442e485d3bc255aa7659ebe0476"],["/categories/python/蓝桥杯/index.html","85ca39e85a5f3a2861391d58f5145819"],["/categories/python/蓝桥杯/page/2/index.html","f09e73c20925cc27ca7d47c98e40c2f4"],["/categories/python/蓝桥杯/page/3/index.html","c7f44ad9170c65a3d1a740e5730903ab"],["/categories/python/蓝桥杯/冒泡排序/index.html","10b36e66d92d653dfde4bbb01d2fffa7"],["/categories/python/蓝桥杯/结构体/index.html","11dbf73f600f396e93e0fbd1fa720cd1"],["/categories/python/蓝桥杯/链表/index.html","1f8baeefbe71fcc496ecfe96fcdeb669"],["/categories/教程/index.html","812e9b7411bd29f47312b46a0002f589"],["/categories/日常习题/index.html","668c2170cb8cfc62e627045244089d91"],["/css/index.css","22943828075c56a01cb0542ca0eca399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","b2cea5d8a519c2d498e1d1bc9a93e15e"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","5c933e0f932ed7ed60177790754622fe"],["/page/2/index.html","4671d08dbf197f77c6defbee73c51702"],["/page/3/index.html","1400471ee317256d3b6fb7b5e7d4f0b7"],["/page/4/index.html","1892d804124bc3e2eb22748fd655b239"],["/page/5/index.html","a62bd0733eaff18b12437d89e3605cfc"],["/page/6/index.html","34f37f5a8afff5ef9477db19c3d068fa"],["/page/7/index.html","6409c2dde31cee778c01928e95e41aef"],["/page/8/index.html","c7507a66ec87f471259746c6a692a0c8"],["/sw-register.js","9fcbf35826d5232a00c172ee7964d2f5"],["/tags/index.html","9afad13a02b473bf146d748cbaf1a28f"],["/tags/java/index.html","d65bedfd6770554f859a09ba4d2a68aa"],["/tags/java/page/2/index.html","111334fb708d143cbe0a956f58259c94"],["/tags/java/page/3/index.html","dffa3c17e40734a9f89811bd32d9fdd9"],["/tags/java/page/4/index.html","167d6b85572b8ca348ee7975cfe0d6ac"],["/tags/java/page/5/index.html","42ba07163076a7dab9a837e4e46e9798"],["/tags/python/index.html","94a65937bc6d9a930340183c7767baf9"],["/tags/python/page/2/index.html","5a079a55a09334e9eb8400d5b8474f02"],["/tags/python/page/3/index.html","91584102fcad621df759bfd3013738d0"],["/tags/冒泡排序/index.html","7fdb483abb2a38f5e68ceb8b778f4271"],["/tags/算法/index.html","b89aab18fbe8bbef8e715931a42a5f4b"],["/tags/算法/page/2/index.html","4a182ac329c404c255a84b782c7e74cf"],["/tags/算法/page/3/index.html","b6bbfb9f383db10e5e9fbf8025b6c99d"],["/tags/算法/page/4/index.html","ac2069fe55469d597778a47d2becaa6d"],["/tags/结构体/index.html","eb583ca275ef55007dbaf9cce7cc9e36"],["/tags/蓝桥杯/index.html","57b66a4e6ba8bd0d457df74a74f2129d"],["/tags/蓝桥杯/page/2/index.html","b50fa8c530e23073aab8c0c4b2610d2b"],["/tags/蓝桥杯/page/3/index.html","e756c65a2fd7b2041e5bcbe1560fac74"],["/tags/蓝桥杯/page/4/index.html","01f894afb89e7146d9a25ba59e3ca921"],["/tags/蓝桥杯/page/5/index.html","031bcee6fa569e0594a407f38788fce2"],["/tags/蓝桥杯/page/6/index.html","286fce887604062d806359ef4aaf749b"],["/tags/蓝桥杯/page/7/index.html","82d4c9819b1e2f4a9dab44b58f91dc57"],["/tags/资源教程/index.html","94e0e90b07e40c7a6da1b506eaf714e6"],["/tags/链表/index.html","807290da98102d749957040e398402da"]];
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
