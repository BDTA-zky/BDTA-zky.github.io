/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","98ed82efad309f045657e70ae162f2a0"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","ff408fadb2ed59b1dcd8ddbd2521b62e"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","4e907afb0c20938c9acd895d3c6106ae"],["/2023/04/22/验证码（random类）/index.html","a5685f421f7b0c2c88fa1e8a29b14301"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","c64c426f99814c8f3a3e0b5503f3a800"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","30e5ff4442500d7378a1efd020c345de"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","c4d19c397d470c0d7cd1421753743fa2"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","3a9b80d15f94038e54ef78ce8984231e"],["/2023/04/23/蓝桥杯-山（java）/index.html","c2b580f3e12d048e5f8fe070ff7ae5e0"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","b63096c7e410c2929a7535a66dd9a5b3"],["/2023/04/23/蓝桥杯-时间显示/index.html","063d74a135e5eee7a20a0dca0f3860c4"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","cdec7b6d15e520ca478432417165d1e7"],["/2023/04/23/蓝桥杯-特别数的和/index.html","8fcc15c720ed8c57f75ec8f4877dcb73"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","f3132817003fc2ab76d422b878ed56a1"],["/2023/04/27/案例2-1 商品入库（java）/index.html","9b930eddd89c2c12ab3812972d0195b4"],["/2023/04/27/猜数字（python）/index.html","1969b1510d46883a31ebe2e3e6993a70"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","6883272d320740170ea579755e2f1f0c"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","9882d917b26f2e6d3c0acc4f0ac4b3b0"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","abc075d6acf0ccf031229837278b171b"],["/2023/05/02/数字三角形（JAVA）/index.html","ee2b806402f00060d3018e4067f902dc"],["/2023/05/05/k倍区间（JAVA）/index.html","4aeaee50adf11bb4ab60e2f12b1380f7"],["/2023/05/05/作物杂交（JAVA）/index.html","252b385a5ebc1b1eceac64de51313b87"],["/2023/05/05/包子凑数（JAVA）/index.html","1738dde226afab3f430b085299549725"],["/2023/05/05/取球博弈（JAVA）/index.html","526197c8bfef47e6d2773d6f9de22fd9"],["/2023/05/05/回文日期（JAVA）/index.html","070b4b95b7127ce48bbb5d92b048a4b3"],["/2023/05/05/砝码称重（JAVA）/index.html","f55d3829e3dc581ca448ee2a2d6b4f96"],["/2023/05/05/等差数列（JAVA）/index.html","05b58f0f6cc16f0f7ba45416f6a7678e"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","7efd42983d9df7f9c6f6ef917a3576ff"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","163e453b469ee055baf5fba879592efe"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","19ed9f5dca36df35acf72d0bbde9e9f6"],["/2023/05/05/蓝桥杯--排序（python）/index.html","b3785799076337aee550a6a41af01144"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","3f4dbf679aa3654faf20707db076413d"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","d1e242ac6ccd64665d594446d04f33f5"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","d0f14087ab581f99147a051486057055"],["/2023/05/05/蓝桥杯--空间（python）/index.html","867333f07e283d0178e488354ecc3c97"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","107e2a146d06741f7c5264562a8f8b29"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","619cf0534603c8c42c814602ac55748a"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","148b290d29cd5384134c329746bb8d9b"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","5fa03f60e4427a0f9409568c323513fb"],["/2023/05/05/蓝桥杯--质数（python）/index.html","a40007a4e02ca09f667057388b41cbbf"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","03ee42ae14d7f165f771bf2eee1fd963"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","95a90b4f0c6344e69317eb89171d6c9a"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","23edf04a714537f07a3acfe0341e1c96"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","c123a61dc59dcf0c4faee06668013d3a"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","a438fb9554f4b50db035c15a6a2dd6ad"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","0ab4a4ae670b7feec9c795a9fbd39e71"],["/2023/05/05/质数拆分（JAVA）/index.html","d2c3e7f9caece0fc6eb0c4f259db8945"],["/2023/05/05/闹钟定时程序（python）/index.html","976ea98a7f7521377beac25504012f9f"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","a829da2272e6ec9c414ad9b0c4e5d43f"],["/2023/05/07/GCD（JAVA）/index.html","f5f00f70b45676ced37ce63cc0234f3c"],["/2023/05/07/七段码（JAVA）/index.html","3cd02439c4d7d100cb1d53fa4ecf3a4a"],["/2023/05/07/全排列的价值（JAVA）/index.html","52b44713b9728790a7fc8428c759edd5"],["/2023/05/07/双向排序（JAVA）/index.html","088b7a1d266a2a7a27165e4b8981e62d"],["/2023/05/07/四平方和（JAVA）/index.html","038c5e8988e7fef91d48680c21829f22"],["/2023/05/07/回文日期（JAVA）-1/index.html","2421ad9332675aff7f934546502ddae2"],["/2023/05/07/山（JAVA）/index.html","0ffbc82d6e51bd7e18b053e2f7450421"],["/2023/05/07/数位排序（JAVA）/index.html","fed1ccc2f17f5b88aefcfb8c83cc4c1a"],["/2023/05/07/数组切分（JAVA）/index.html","eaa0a38d28fd560e808cf1d32f77b541"],["/2023/05/07/最优清零方案（JAVA）/index.html","28dd2a77c2e2209dd7edad871a06d543"],["/2023/05/07/最少刷题数（JAVA）/index.html","03fa3a0395a860d1104ece2e0648346e"],["/2023/05/07/杨辉三角形（JAVA）/index.html","80b89660a11f90d3873ef51dd71fe347"],["/2023/05/07/求和（JAVA）/index.html","9f568d51191c7b9ba794f40e13d01a7b"],["/2023/05/07/求阶乘（JAVA）/index.html","721aeaefa6fa54301b7898adb3a7ad72"],["/2023/05/07/牌型种数（JAVA）/index.html","04670cc1ac559e2fb4fa4b4216cc5f1e"],["/2023/05/07/猜字母（JAVA）/index.html","ed2d09150bef2c653eb9ebfa5d35cd51"],["/2023/05/07/路径（JAVA）/index.html","15a03ccb394cb80011f84aaf86ff2e30"],["/2023/05/07/青蛙过河（JAVA）/index.html","e201a064bcce7cb39f4de9b42d3a3d35"],["/2023/05/16/重合次数（JAVA）/index.html","70fe1855075eaf5fc497045e5b1348fa"],["/2023/05/22/左移右移（JAVA）/index.html","404585567e3ba04718dde228820b01c9"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","2ed1e4dfadd89d2233d8a6c38c060592"],["/2023/05/28/本质上升序列（JAVA）/index.html","b3cd3c2714a7a1054e955e327df0ddcb"],["/2023/06/07/方格填数（JAVA）/index.html","f6c846c85739936f795fb93700c6607d"],["/2023/06/09/合根植物（JAVA）/index.html","b1c7a9ebfc55026e35db8b1b46472af8"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","16ba1e36ad70bcb862fe76c224bb66cd"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","2e0c5807e2a51ea1e2546ad630808335"],["/about/index.html","0c2e331e5f2504ea94ad639895760a69"],["/archives/2023/04/index.html","c08af76b65ea58f237bb71758fc69b40"],["/archives/2023/04/page/2/index.html","f30232effe3cfce43a8a86466c8a04e8"],["/archives/2023/05/index.html","ede9c30c8e1d284c67a5347899f56ec5"],["/archives/2023/05/page/2/index.html","49db9899beaadc2b7cca37e25a1fefa2"],["/archives/2023/05/page/3/index.html","8a847b4b15c2a9500bb3f1936db7a5c7"],["/archives/2023/05/page/4/index.html","5d27d15a45b11831ead766e23746bbbd"],["/archives/2023/05/page/5/index.html","7d2cbf0fd72e2a3d6f950ba13fb87b93"],["/archives/2023/05/page/6/index.html","49ac17a648bcf6cbcc49245832a38536"],["/archives/2023/06/index.html","d3abee8bb2f3f313333ad4b1127e6881"],["/archives/2023/07/index.html","e3eb8c1cf18bfe2b536a424dcc91b64f"],["/archives/2023/index.html","f69e7dc8d7202b1faf28c3b5f63dfc5d"],["/archives/2023/page/2/index.html","a8607f540871de371a00004011517a92"],["/archives/2023/page/3/index.html","684c339a135c971b705bd6aa7553fec0"],["/archives/2023/page/4/index.html","a99f6dac0c64eb3f82a9148ebc5869ec"],["/archives/2023/page/5/index.html","18cf090f4a45ce2ac7e492ce8c905c9c"],["/archives/2023/page/6/index.html","474c024ea20e8e82c05550a0684a4a9b"],["/archives/2023/page/7/index.html","00769215c445d923557a5e61d7095852"],["/archives/2023/page/8/index.html","0b4e7dad4fc54aa6eafa026cc8d978bb"],["/archives/index.html","b77ae22b5efd96e8a8f0372856a7599a"],["/archives/page/2/index.html","c18905f47a6c4f62ea5e2cfdf3babfbe"],["/archives/page/3/index.html","2533509c8af9b739d14329675a3b6bba"],["/archives/page/4/index.html","e2e2b00635f3a2c26ecb67ec2e2d98a9"],["/archives/page/5/index.html","440044ef7e1e8abd98deb7c233a01473"],["/archives/page/6/index.html","af51d238ed2fa8fee6b51194b6b251d1"],["/archives/page/7/index.html","5267ac74aad30417116060f09497af6f"],["/archives/page/8/index.html","af733ef408093fd1b9e60495fe7862f8"],["/categories/index.html","5e9d3c5e160d54915e769bca6cffc73e"],["/categories/java/index.html","e1c1978b107ff63589c69229229a922c"],["/categories/java/page/2/index.html","6ca45fd571f35c2f1c7c104946ce4453"],["/categories/java/page/3/index.html","9f4ba10c2cc35838ef8bf1f63cf4c009"],["/categories/java/page/4/index.html","a0678d74f555ba4e0ffd8c38c1859f9a"],["/categories/java/page/5/index.html","6f0759ec1c11923d7d75f7ed6e8c717a"],["/categories/java/算法/index.html","85c34435cbea6ecc4ad6a8cc4b1d2a50"],["/categories/java/算法/page/2/index.html","0278187019d1686c73ae515de938f3b6"],["/categories/java/算法/page/3/index.html","da4a0eaffd5f9f1c5c9fad03ab473a01"],["/categories/java/算法/page/4/index.html","538822fc413fa34c8305b294c95d9eec"],["/categories/java/算法/蓝桥杯/index.html","9765cb567ac0084e11361433087b7470"],["/categories/java/算法/蓝桥杯/page/2/index.html","a3b72c20f1ca148034a4c471f4789de0"],["/categories/java/算法/蓝桥杯/page/3/index.html","e5ef96df691867968a7a43491435c4df"],["/categories/java/算法/蓝桥杯/page/4/index.html","0c5476a27e69a2d5f09e31ea2cb2c238"],["/categories/java/蓝桥杯/index.html","0921fd3478ef0f4ece7b5142e76a83ab"],["/categories/python/index.html","c9f2308b361acbb9933cf9e71fd479a8"],["/categories/python/page/2/index.html","5cfbdd9a3ca158567521eb898ee90941"],["/categories/python/page/3/index.html","e2525bdc49660c26e25455d049a354c3"],["/categories/python/蓝桥杯/index.html","a495a83afea829365264f18d621303ca"],["/categories/python/蓝桥杯/page/2/index.html","c7846e19bdda1601ae1e90c62938ad98"],["/categories/python/蓝桥杯/page/3/index.html","7b8971feeb3e1b14afed52745d2fff62"],["/categories/python/蓝桥杯/冒泡排序/index.html","9bb9413544917572cbea52a38fb196a7"],["/categories/python/蓝桥杯/结构体/index.html","d8ffb4bc5260003c3b73e3af78eec279"],["/categories/python/蓝桥杯/链表/index.html","af4c74ab6cb0c009f895d5240d147fde"],["/categories/教程/index.html","297f29fa54b9ed1193dadf9216525f68"],["/categories/日常习题/index.html","467e5caa027a4e28928cd57d56ce3d88"],["/css/index.css","22943828075c56a01cb0542ca0eca399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c0c21e235c3006a7dcfa16cbe932daa9"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","19ed2f9ec9e7a4b5afeee2d6a13decec"],["/page/2/index.html","aab8b7409ccdb31411b98de52176d89f"],["/page/3/index.html","a26f4b8738e6d608323c21b758fcfd08"],["/page/4/index.html","f3658a370d425fcecc5af4cff345b191"],["/page/5/index.html","31cc81712d2fd9ba841a699b174d1e94"],["/page/6/index.html","806ed5337dbfa9939bdb7c85dbd515b9"],["/page/7/index.html","59c9ec70d2a32f3cbcadb84e9a6cf2ae"],["/page/8/index.html","9cf562fa655aaf92f25472be61027c92"],["/sw-register.js","bfe192264769f0de702e00449e559432"],["/tags/index.html","dd24047524f470eef2295c2dedbef2b4"],["/tags/java/index.html","17d5c0ae9c393ba1841da829deda8aec"],["/tags/java/page/2/index.html","1c5b9b0a51d217893083be19a65e276b"],["/tags/java/page/3/index.html","e0d999fec360bf8cf0013d91f6275905"],["/tags/java/page/4/index.html","eec3ed1c65d0b099fe5e08d412d1459f"],["/tags/java/page/5/index.html","607bb0779531fb636bea4093e820d3e1"],["/tags/python/index.html","fba481d09a8ef64d8c02f8bb58b91192"],["/tags/python/page/2/index.html","cf53bf0a1ab8168ed73cb5284240f058"],["/tags/python/page/3/index.html","a90e9d215538d4c5872121dc901a540c"],["/tags/冒泡排序/index.html","39d8eb46e571fd7458422df8eb3dc53c"],["/tags/算法/index.html","d4e1437bcd2e79ce6ce748e9f3076049"],["/tags/算法/page/2/index.html","89a0c72e0e31f8d3f0475ab8bd55acf9"],["/tags/算法/page/3/index.html","c872ad7efcc759da618ea3b851ebd0c8"],["/tags/算法/page/4/index.html","ffd0445f2ef7701d15afc2ea6562924c"],["/tags/结构体/index.html","a4d7ddc3dd8abe182bb10824abf12366"],["/tags/蓝桥杯/index.html","cbe83abacdbd916d4c7fe9f71bb6fea1"],["/tags/蓝桥杯/page/2/index.html","70f326d1cd3d6461e39e2188ffca842c"],["/tags/蓝桥杯/page/3/index.html","2104a0e96d446e48d1c9e7363a02394e"],["/tags/蓝桥杯/page/4/index.html","b60e66b4e3826539e47e10fc8d091183"],["/tags/蓝桥杯/page/5/index.html","eee822261cdaf6faeb35757c218bcfe8"],["/tags/蓝桥杯/page/6/index.html","cc467d2bf7978d926acd6d4314c89c92"],["/tags/蓝桥杯/page/7/index.html","f6c0d16b4d4009c0d8d6b6a7cd43312d"],["/tags/资源教程/index.html","c9c4b3559f6429a408fd64f6e832d5d3"],["/tags/链表/index.html","a43241c89bc2253ce95ecd94a020bf66"]];
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
