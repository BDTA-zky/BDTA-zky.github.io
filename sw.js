/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","0718daf4ab0b7a5e488e0efe3a95d8c6"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","19b88a6a69a735532b4111d0b064de6b"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","bdd804e1abd15f5e57d046fcd5cc16c7"],["/2023/04/22/验证码（random类）/index.html","6d9d312652d785953b5d074d871385af"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","31efd20a79c4f0ff67d87b57081dd53a"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","567a7bf9ee57736afbc39840fadf1830"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","6bca85fed620493e9788a547bd8fa951"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","6e3cf57a5f9a28280666527fbc7a5197"],["/2023/04/23/蓝桥杯-山（java）/index.html","a42c631d0dd518d25c383c8975c7b730"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","61fcb6c5eafc77e4176cf78bc5288a10"],["/2023/04/23/蓝桥杯-时间显示/index.html","d3a399d6abd6123bccf7ea0d10972b48"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","82e8187a0adb77f266d789f08c8bfb68"],["/2023/04/23/蓝桥杯-特别数的和/index.html","e5271e97e70ff2db542818fff91cc06f"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","45d2e97d522a38e187afe6cfb3f6cfc4"],["/2023/04/27/案例2-1 商品入库（java）/index.html","eff404821c96c21edfd3935cb2cd8aeb"],["/2023/04/27/猜数字（python）/index.html","01c93bfe5b49a82831883ea6a7d8ec9c"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","79992dd865258dc92eda838474e4bc08"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","3b4600294fa342ea45343286eb02b764"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","1b7ee58d7f2ff360d5e736b89df8e4da"],["/2023/05/02/数字三角形（JAVA）/index.html","d88dcfe4e4352a66de362485b951901f"],["/2023/05/05/k倍区间（JAVA）/index.html","bd107678b9b1d6cd981531be874d162b"],["/2023/05/05/作物杂交（JAVA）/index.html","19391cf16d000783eef8676b90158c2c"],["/2023/05/05/包子凑数（JAVA）/index.html","398a2fc8b58849db1d705593ac3041cc"],["/2023/05/05/取球博弈（JAVA）/index.html","3765b9748df8f1f16c8229721ec5875a"],["/2023/05/05/回文日期（JAVA）/index.html","2974394ba9e77c0a19c8592d3d81ec42"],["/2023/05/05/砝码称重（JAVA）/index.html","aa36d7b97c94aca552cd6b93e13db30f"],["/2023/05/05/等差数列（JAVA）/index.html","7a0703955fabaf4b795f17251612db0d"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","f6d3b25c77912571a084d0e9349bdc56"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","8144d3d33b4ab0834e0821c6ff71c421"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","666d8c89ddfb05500e801184b450d66a"],["/2023/05/05/蓝桥杯--排序（python）/index.html","2bcd61499b1c9d593f01edeb669c5ae8"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","7e02804ca4df1f071c7f985df601564a"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","01f8c2fc3111c1a058ac693ebf711758"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","3b7ca7bf2854716429a2b4dd0730ba44"],["/2023/05/05/蓝桥杯--空间（python）/index.html","c22595d79006170e36214511eead6490"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","560f78df43aad473cd00cfc698748887"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","c5a02486256701b2d2dacf72cb0e04a4"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","94875105c49146248ca8e3c96ef7959e"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","b642d684be3298d4f60ef365f71af1e1"],["/2023/05/05/蓝桥杯--质数（python）/index.html","82abfa8f476436e0374a3e7a65a40f16"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","06f7415401e0f964c87110f63cd6d100"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","00718bd51a7deda359c190e2792b561f"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","34062eac3a7d3dbd033d6909ab6895e2"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","bd0e753567f43520b7351ebd645880d1"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","bf9a853040a23a0be5894584b2d94de9"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","db6973f7b66ccb4110e0f77b9fde3e54"],["/2023/05/05/质数拆分（JAVA）/index.html","151529e1173c81ad0952a84fd6298dbe"],["/2023/05/05/闹钟定时程序（python）/index.html","713738b317c2c3ca7435bb28d823e84e"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","78424103578b1f4e67d171178c3090dc"],["/2023/05/07/GCD（JAVA）/index.html","5e11b438b5f6d6a66e80daa20ec97df7"],["/2023/05/07/七段码（JAVA）/index.html","03cd5932ba45bd40f6ee40f015cb845e"],["/2023/05/07/全排列的价值（JAVA）/index.html","383e4b12f5ba7f94d3e71b9539afcc4b"],["/2023/05/07/双向排序（JAVA）/index.html","ead3161c587d0eb80874c8eccb6c7cbf"],["/2023/05/07/四平方和（JAVA）/index.html","05cfe47668bca59c9d952807932f34ed"],["/2023/05/07/回文日期（JAVA）-1/index.html","a1c19b6cb9646d4cafa73441681c7360"],["/2023/05/07/山（JAVA）/index.html","a69cba41601e709da6fa557ec08f5552"],["/2023/05/07/数位排序（JAVA）/index.html","e1dba8b8cb8b47c631175f8edacb8a36"],["/2023/05/07/数组切分（JAVA）/index.html","f83796808d49b69d7af824bf58968fc6"],["/2023/05/07/最优清零方案（JAVA）/index.html","546f935873219b4d71fd238f48c0946e"],["/2023/05/07/最少刷题数（JAVA）/index.html","e82f45bae4df439c80406b3cb74888a8"],["/2023/05/07/杨辉三角形（JAVA）/index.html","a7216ddb59291d3b589b6c6bbed273e7"],["/2023/05/07/求和（JAVA）/index.html","3987e6568c2142bab8911c768b8a64b3"],["/2023/05/07/求阶乘（JAVA）/index.html","ddba85c4c6ec73d4bd0bdc302fa6684c"],["/2023/05/07/牌型种数（JAVA）/index.html","f445a39603b8c4a7808330ea86fb3928"],["/2023/05/07/猜字母（JAVA）/index.html","1acac0c47795bfea9b0e7e4a41fceddb"],["/2023/05/07/路径（JAVA）/index.html","4765914a8d49509aa8efa6b5efa1a162"],["/2023/05/07/青蛙过河（JAVA）/index.html","07259098ac460c4165206fce1c13d6a5"],["/2023/05/16/重合次数（JAVA）/index.html","50c545ec4c996affd5dc4668b2b314ff"],["/2023/05/22/左移右移（JAVA）/index.html","6ea7a124b22703ac8489fc774dec3b58"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","9c45999d6f53456c958d6d92aa22e41c"],["/2023/05/28/本质上升序列（JAVA）/index.html","46e8e22a7134cc6f70702566077ec100"],["/2023/06/07/方格填数（JAVA）/index.html","58b0897a82b57f4ef71389c7f34f47c8"],["/2023/06/09/合根植物（JAVA）/index.html","02b25c26ae102c4decf89db57cc424ef"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","b373a95959a113b036b78e1188215985"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","8ab97a401e9f1e61c331c3b5bfd9f0e9"],["/about/index.html","5acdff7198483ea1d16976b7f0527c8c"],["/archives/2023/04/index.html","b1ea99750bc471c45360c3cb65c19d56"],["/archives/2023/04/page/2/index.html","1490673007a53ade5589503018a98652"],["/archives/2023/05/index.html","4c06d7d8aaa23ef4959bb5016643f179"],["/archives/2023/05/page/2/index.html","16b4fdc7d1492b1bbf14f51b1cec3a73"],["/archives/2023/05/page/3/index.html","a8eb5c2de7dbf270d38c7f218a1a0954"],["/archives/2023/05/page/4/index.html","16aee9315a9522a4668062acf6428342"],["/archives/2023/05/page/5/index.html","39e5ac6f4a7e66b853803bc633bb4cd3"],["/archives/2023/05/page/6/index.html","5847ddb19cdeef6582ce2769ef7161cc"],["/archives/2023/06/index.html","3696406f88c086fef62858310089c0ac"],["/archives/2023/07/index.html","2e033fcc0a14ce7eb229d44da623ecde"],["/archives/2023/index.html","261fd732d04b2a530d4dfe093af0bb78"],["/archives/2023/page/2/index.html","568cdd7b2431a3c30468cafbc96c140e"],["/archives/2023/page/3/index.html","94932ab616198c55c8607302d4d310cd"],["/archives/2023/page/4/index.html","2aabf7402296df44caeba72c479eff60"],["/archives/2023/page/5/index.html","02c12d7d9216402acc614682b192f570"],["/archives/2023/page/6/index.html","2180bba6d5fe25d8fb9fa56248483737"],["/archives/2023/page/7/index.html","31f762b6b05ee41fc0245b4fd9cf9a85"],["/archives/2023/page/8/index.html","94e71b415f275a9a5081cc3aac4d85b5"],["/archives/index.html","8290bbe0ed27b4f33fa8cb10fda5a267"],["/archives/page/2/index.html","c788f8a0bbd7ee721ffc29a7b8114549"],["/archives/page/3/index.html","deb8cb4995ba0c3628b76c7fe8c5f70d"],["/archives/page/4/index.html","9d540d897a472366fb1f3f36dc589062"],["/archives/page/5/index.html","ce172f82072d04f25332fe1a2665735a"],["/archives/page/6/index.html","c5d0dd7eff26f510861c14b52e60893c"],["/archives/page/7/index.html","46392c914929e30134a18539ffa70995"],["/archives/page/8/index.html","91ddbd06b7c94b394baf1f36a221e162"],["/categories/index.html","2fb47b364940a39e385a13f36daa9320"],["/categories/java/index.html","d481514211b7df0e536e1895a3fb82cf"],["/categories/java/page/2/index.html","047129523e96bb2f1b105b8bddfb0adf"],["/categories/java/page/3/index.html","806a05784a07bb729609d5b3c2ab05ac"],["/categories/java/page/4/index.html","da5c729ba12f4061078c8e8d77ee5b06"],["/categories/java/page/5/index.html","50c50193516e022dd57b5cec27699fd4"],["/categories/java/算法/index.html","b1b9213ecd212bb70431e2344aa0bae0"],["/categories/java/算法/page/2/index.html","8353894abb6c355ef942596df7923767"],["/categories/java/算法/page/3/index.html","d2b2cbd71cfd04b1ba08f02cdd4e53ba"],["/categories/java/算法/page/4/index.html","29513684fe036d12189c457b056992a6"],["/categories/java/算法/蓝桥杯/index.html","4eab2694e6bf27de35368ce90b9596ac"],["/categories/java/算法/蓝桥杯/page/2/index.html","e586a920544102768d7f2c949bd6a650"],["/categories/java/算法/蓝桥杯/page/3/index.html","ffc669249073777ef2612237c4b15cbb"],["/categories/java/算法/蓝桥杯/page/4/index.html","37eca2fd8d8ff284cde6ea5ede785170"],["/categories/java/蓝桥杯/index.html","fe35c20f6c3aa2d978afd68b2000e068"],["/categories/python/index.html","ea32642f05f466a6160343aef0ce3628"],["/categories/python/page/2/index.html","5b763166ce0932058be456fd3963f4b3"],["/categories/python/page/3/index.html","09d445e777716276d31ca0b241584f5b"],["/categories/python/蓝桥杯/index.html","177183fc70dded29b85fcaf3f488b8c0"],["/categories/python/蓝桥杯/page/2/index.html","1f8171e5228e9f93924bddf1d8c55c12"],["/categories/python/蓝桥杯/page/3/index.html","f71fc8fad59cf988606dc8cfadd87fe3"],["/categories/python/蓝桥杯/冒泡排序/index.html","38cfa822b669dee051ee5731506a6629"],["/categories/python/蓝桥杯/结构体/index.html","db093c45d056bcf13377e6b1805ed73e"],["/categories/python/蓝桥杯/链表/index.html","5d2fd04c503e7cc9fe48da3122c15ec0"],["/categories/教程/index.html","80d95f4a27f4e4763b2b3f9a7e390681"],["/categories/日常习题/index.html","7e7a0f5c3e8f69b9b440cde749f07f17"],["/css/index.css","22943828075c56a01cb0542ca0eca399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","22e7fcee1a67930b2f7f006493af04af"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","8140dee64812f7f1f040d0994fb3f4cd"],["/page/2/index.html","ff01c45888af4694588715c54949bbc9"],["/page/3/index.html","c5c43ccd5a0bda52fcef4484f1acbb68"],["/page/4/index.html","9f12ad01a867d67d4d7ca0bbe491e7be"],["/page/5/index.html","23bb65c1a8c14cde099a6e31f2306ac6"],["/page/6/index.html","9f2a6b39b693a2e3ef4d3d9c543ee98b"],["/page/7/index.html","26f505b53598ec55838a1e1317978cb9"],["/page/8/index.html","b78b28c022801b0b6d5e64d660078a68"],["/sw-register.js","16291836af6ad91e2de0169ad4050bb0"],["/tags/index.html","1f9d4071ce472e1565843b318a09380d"],["/tags/java/index.html","6be71691d3801e90c955eb6928796b31"],["/tags/java/page/2/index.html","f7ec245b8feef4d3fbaa1d8255023972"],["/tags/java/page/3/index.html","6eca3c3cc4db722d6180255d85fc8427"],["/tags/java/page/4/index.html","a6aa461de1b43399e0299c26a441588b"],["/tags/java/page/5/index.html","ed45fcea075347ef523f7732b2567cc7"],["/tags/python/index.html","2a84444b30786ec07606a0aec7517b87"],["/tags/python/page/2/index.html","94d8f4c757901fa16d0293915c46ae36"],["/tags/python/page/3/index.html","99bb7443470b031f593614b03d931aa0"],["/tags/冒泡排序/index.html","5da953bfc35d1f64bd0ece2626b31d25"],["/tags/算法/index.html","e9bee3f9fa999258c38b80fdf71210af"],["/tags/算法/page/2/index.html","3691564d8d83d2fa87cc69a34c93693b"],["/tags/算法/page/3/index.html","819ac50d60acfc909523d58a786b3738"],["/tags/算法/page/4/index.html","1013f119d8d8df2eda414f27fead6e90"],["/tags/结构体/index.html","d5491eeccc6221c2ceccecdc78a8ec35"],["/tags/蓝桥杯/index.html","492022d9920b2f9818e1e16aeebe3aff"],["/tags/蓝桥杯/page/2/index.html","81bb48a04080857db07bc2dce535c785"],["/tags/蓝桥杯/page/3/index.html","7d6698a39f72f41687fc8be7d8fd23b5"],["/tags/蓝桥杯/page/4/index.html","1d680256a5522533d4ed4e7d2b5711f8"],["/tags/蓝桥杯/page/5/index.html","c1a78cb2341bdb7690cd5851f1881489"],["/tags/蓝桥杯/page/6/index.html","cc54470d1a98b00e200c818c4bf9fe80"],["/tags/蓝桥杯/page/7/index.html","77b6fe11c0faf8a9ad373cee44bc65db"],["/tags/资源教程/index.html","3831c05e7fba49608e1441375d9f9fce"],["/tags/链表/index.html","5eb9c7ca8fdf7bd30c23b0132fe2f892"]];
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
