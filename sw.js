/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","1d89c0020b7185b74b13233244c023af"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","c2da2caa77018912b4cc07f59bf1bd11"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","fc6b2d46fdaf91d2a98720061bd82464"],["/2023/04/22/验证码（random类）/index.html","4c962ffe51ff414a7356d056d2bea39b"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","5d9f0c49b8738e0beeaf583efa52cb3c"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","3fa67ee087b9ccd5eee5218ff69faf65"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","440fd99c5999cddee4c34a1a4d2479d3"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","ddc2cdf0c220b08d6ff7f79d3a220436"],["/2023/04/23/蓝桥杯-山（java）/index.html","4d326d97fbe5f5fcdf72efcc103934f9"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","59ced5492d46e916d38a5bbf05ff6687"],["/2023/04/23/蓝桥杯-时间显示/index.html","1c962bc3de8ba41239984779002c9ae3"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","7d2ab80079292164ee1afe47499e340b"],["/2023/04/23/蓝桥杯-特别数的和/index.html","db70a5e77f122e900ec52a2e4f5ce396"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","1fac36ffd55beef3052d090cb15c13a7"],["/2023/04/27/案例2-1 商品入库（java）/index.html","7b63304f816e3a20ed2dbdc6e6c864c5"],["/2023/04/27/猜数字（python）/index.html","b76f3d9dede706ceea70fd981f5e611c"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","bbe49b7452c6e031a339152f2bfe7df3"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","2c059620ed3948486d06627b2673a19b"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","172ee5d6d717fd8256e421866df3772b"],["/2023/05/02/数字三角形（JAVA）/index.html","ef881501f3958aad2818c51ccb45318f"],["/2023/05/05/k倍区间（JAVA）/index.html","029a557acedd6b0a8a0c836cbe17724e"],["/2023/05/05/作物杂交（JAVA）/index.html","b0854fe311f5d212195b62335882cdcf"],["/2023/05/05/包子凑数（JAVA）/index.html","f766d63e181411f74e29d61d35002338"],["/2023/05/05/取球博弈（JAVA）/index.html","f501423b5142da47510d54e634b82e1a"],["/2023/05/05/回文日期（JAVA）/index.html","85e2cdd64516f93cd626e87848bf0c50"],["/2023/05/05/砝码称重（JAVA）/index.html","04cb700c4f8ac797a1916ebefa60a063"],["/2023/05/05/等差数列（JAVA）/index.html","69e3cbe40e3b8175caa029c825f395f0"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","c6c2c1d048df20a734709343ed1b0c23"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","9ee94d30316d20c4e0162b0c106bd8b0"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","18b764f7b23b115c03499fc5db277dba"],["/2023/05/05/蓝桥杯--排序（python）/index.html","53e9ec4bdfa5d421320705e9719d1d64"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","40ea898c992d3577364866fbd73ac746"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","2db8ebac79d9bdc720d8bfde7fdd91e1"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","3fb5fbb10760aae5ddf41e551f204f7e"],["/2023/05/05/蓝桥杯--空间（python）/index.html","211043d424eac0997121038656ef9ffd"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","6d0bdf8b7c3471eccf6cfd8a3e8a8229"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","92554460757706d01f6f0385d312c823"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","44015e21a8d0e71f726a93fdb55e9bf0"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","cf9c118806fddcd66ed8ccea595fd35a"],["/2023/05/05/蓝桥杯--质数（python）/index.html","11d3567ae4b712f252cc3dd48d7398a0"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","4354b06cc9e2d55385b675979510570b"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","7e3ce39e8ed59e090fa35bbb46847a46"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","b731f9c6125d82e86633a8974a8ed3cf"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","8730e96b40a8d4d1098c4bd5aae605b7"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","6370ccf266e46726ff9efc104e52c57c"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","bc36379323c9e37d6d90abd0fc4f26db"],["/2023/05/05/质数拆分（JAVA）/index.html","04c4dd9439b0c6653372a9347cd1d7d2"],["/2023/05/05/闹钟定时程序（python）/index.html","d6df51adc14b47dccd22a09466baafcf"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","516bbaabeb6826d321a71ff9521a4a94"],["/2023/05/07/GCD（JAVA）/index.html","90f1fa79c1d20b2522445b49bc3b5db8"],["/2023/05/07/七段码（JAVA）/index.html","580f4f93acf9bde7630c80fba155e4df"],["/2023/05/07/全排列的价值（JAVA）/index.html","846156354312711ca5d2b14c378a7261"],["/2023/05/07/双向排序（JAVA）/index.html","2e81814dbfbd8257c8a41407007d6384"],["/2023/05/07/四平方和（JAVA）/index.html","0f8e5bc65f4207c5cb4f73f830f4984d"],["/2023/05/07/回文日期（JAVA）-1/index.html","4d35b255ef1ee32421499aeb7d1cadb2"],["/2023/05/07/山（JAVA）/index.html","fbbf60e9487eb512885c64488537d9ef"],["/2023/05/07/数位排序（JAVA）/index.html","3a4df0702b4817abceea0b872f1a9796"],["/2023/05/07/数组切分（JAVA）/index.html","7ed8f0d8b7b21231e89813b954fc6b8f"],["/2023/05/07/最优清零方案（JAVA）/index.html","a0080e0bafef5a285c5a3d5e8ebbbe39"],["/2023/05/07/最少刷题数（JAVA）/index.html","773fe71be25bcdd04cafc9f13e0e5c07"],["/2023/05/07/杨辉三角形（JAVA）/index.html","adc41a39251d5af90c4c3217473e8cf0"],["/2023/05/07/求和（JAVA）/index.html","8f3376fb9b85cd8b281682990984cb37"],["/2023/05/07/求阶乘（JAVA）/index.html","4bb91acc71c828873559a8a8dc5feeb4"],["/2023/05/07/牌型种数（JAVA）/index.html","1dc7f19aba7e5a4e8d7d82afbd509698"],["/2023/05/07/猜字母（JAVA）/index.html","592b7302cdcce3f49ff12769c17457d1"],["/2023/05/07/路径（JAVA）/index.html","996afb19d2b6640be43c499546aa82ff"],["/2023/05/07/青蛙过河（JAVA）/index.html","f5492031c1bbd41b9d63cbffd9c18e36"],["/2023/05/16/重合次数（JAVA）/index.html","130589e6cf59b0c8fd9fe830aab4e049"],["/2023/05/22/左移右移（JAVA）/index.html","3010e29a06c4c62a36d196b5cde6fe66"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","e49758ebba771b29eb399a55da9f363e"],["/2023/05/28/本质上升序列（JAVA）/index.html","413daa8e9104d72520e2655bfb1e0ba0"],["/2023/06/07/方格填数（JAVA）/index.html","30710d09a2cdcc90cfb9178788370497"],["/2023/06/09/合根植物（JAVA）/index.html","26742a72197b0c858809f29ba58f4d7f"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","041c96da9cb5c5fd31b240f19ea924d4"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","4cb93a373d34566a6d3fa121f9e126c2"],["/about/index.html","64e5112637f8ff9d081b064fc6fc47dd"],["/archives/2023/04/index.html","e9fb64a2e0ba0f84f9de7c7f118d612a"],["/archives/2023/04/page/2/index.html","456b70def56d7291eb31cb4349059204"],["/archives/2023/05/index.html","1981931e7bec84782826d3318e107abf"],["/archives/2023/05/page/2/index.html","71de28d1447449dcca1ebc265288e211"],["/archives/2023/05/page/3/index.html","d0b1aeb11ac5b7da7d8fa9d0c9b8678e"],["/archives/2023/05/page/4/index.html","1d91ce3a158fb09b77a7d46c6a37304a"],["/archives/2023/05/page/5/index.html","42330770526cfc8ec4783a7e03efaefc"],["/archives/2023/05/page/6/index.html","34969e8663d16d839c13cf76d4b40116"],["/archives/2023/06/index.html","2bc6827001dfea6ed96d3d190ac2b07a"],["/archives/2023/07/index.html","ed334736319ff86f9b0c20fe3ff322dc"],["/archives/2023/index.html","ef652b85ea06edca55feb2b10fcfcb6f"],["/archives/2023/page/2/index.html","7da1efa0605e77fe766e10bac7251c0e"],["/archives/2023/page/3/index.html","74e68128a0c0a2278c02417418396e48"],["/archives/2023/page/4/index.html","24a00eeb9ae5090cde8d6a380500d4e8"],["/archives/2023/page/5/index.html","e9bd47ef0d8600d9fffa9cf63cd85a60"],["/archives/2023/page/6/index.html","e4f858005004f4262e16cdd66b09fbcf"],["/archives/2023/page/7/index.html","6d7737d06d2626b2fcda8e76a0d8d3ed"],["/archives/2023/page/8/index.html","bbc179f0c45317899c43e65850bd2f89"],["/archives/index.html","29601802026943e6c90772c6676f9413"],["/archives/page/2/index.html","af3cbc899f524ff3a72bb4418df7d7bf"],["/archives/page/3/index.html","b463061eb3a4e04974ead9fa1dbe814d"],["/archives/page/4/index.html","64028e2c891ef15bda0b9e35a701faab"],["/archives/page/5/index.html","00a6b0dcfbb421e861f786fc68f83697"],["/archives/page/6/index.html","7bfbc0e4d78ca3ff1dc9c9045457f63e"],["/archives/page/7/index.html","00bea80f8bbc719b779b254e5da5751b"],["/archives/page/8/index.html","94ba2c8cae07f97689ba19917d8fc7cd"],["/categories/index.html","5ff84b9729d3cf6abfec9b51e62e0dba"],["/categories/java/index.html","0f6b4235e3a69d3b2b09ad13228d3a9f"],["/categories/java/page/2/index.html","dc97b97b764a14e8a8eae8b69032d50c"],["/categories/java/page/3/index.html","33cf865e444d7f30f4bee211423bf1a2"],["/categories/java/page/4/index.html","884ac487bf760b21f753a03ea581015e"],["/categories/java/page/5/index.html","1feeaa7bf2b730366331aaff43daa0f5"],["/categories/java/算法/index.html","2a1cd8de53f9e69fc034e018167653e9"],["/categories/java/算法/page/2/index.html","5eeef417901c86c19cd868dd87893eb9"],["/categories/java/算法/page/3/index.html","26c30cc46518c65e8d601b64fa0e0446"],["/categories/java/算法/page/4/index.html","c4e6efaf8ce8484c4e090f979bce315e"],["/categories/java/算法/蓝桥杯/index.html","1bee4d1adf87f635b0b36df2d5ba98b1"],["/categories/java/算法/蓝桥杯/page/2/index.html","4bfa50a662b4360594bf73313eaf6a97"],["/categories/java/算法/蓝桥杯/page/3/index.html","7dad072a5bba2a55c4a449ed7e808094"],["/categories/java/算法/蓝桥杯/page/4/index.html","9b6edc12cb8f74d03f965a9bdb699a90"],["/categories/java/蓝桥杯/index.html","2532f819e2fdd87eff8740ebee772f43"],["/categories/python/index.html","0784bbf1d4e106898e715154c23d4ce0"],["/categories/python/page/2/index.html","8e1d3ead421379b25048a412c392b236"],["/categories/python/page/3/index.html","af1c18a8823442b25d02a17552477067"],["/categories/python/蓝桥杯/index.html","67f5620eb2332d629804e451fad2601a"],["/categories/python/蓝桥杯/page/2/index.html","cd062d5f47267c920a181ce072804409"],["/categories/python/蓝桥杯/page/3/index.html","1dcd6fb347a6775da2159e2f94b35892"],["/categories/python/蓝桥杯/冒泡排序/index.html","4590cd35afff1d5abe6c1adb3058fc1f"],["/categories/python/蓝桥杯/结构体/index.html","740a36c9941595c3e243cf2197d635ae"],["/categories/python/蓝桥杯/链表/index.html","12c98cebabaee31c9cc37e515045812d"],["/categories/教程/index.html","fd47cb11d2394a20caf8bcb3cedecf44"],["/categories/日常习题/index.html","2b33c299c1a265cfe6e9bcf8e100d421"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c0d3b850b4b4b551299b24d3072758f0"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","cb1a07781e7da0e58c2540939b599619"],["/page/2/index.html","804c1ef04208742b26a53506691cd8c2"],["/page/3/index.html","1f0af19301bad5ab6ed598078e3a07a5"],["/page/4/index.html","d8e26b66ea5e85519fa660a7a4bbb4ed"],["/page/5/index.html","3064712905ef4e3b3b5461177e0c9782"],["/page/6/index.html","7d34c2f25fcf8c9592823e8aa07755ac"],["/page/7/index.html","122eaa5c5032655d0c0dc212b030fdb6"],["/page/8/index.html","008048e71d3165460b046326637ecfe0"],["/sw-register.js","b78841de116abd3abb513bb67ac9f27d"],["/tags/index.html","8783e8ab1f92ee2a52a8f39f289e3614"],["/tags/java/index.html","55a7e248935ad8b7ec3049c4966b44a9"],["/tags/java/page/2/index.html","be6806566e5a951567f56078201056d9"],["/tags/java/page/3/index.html","7ff9a18dd3f7b1f9f8ba0478eca22798"],["/tags/java/page/4/index.html","6ce0992183bf5b27acd95d49ef4960fe"],["/tags/java/page/5/index.html","f03381b9857d8be15b536d16cf9048fc"],["/tags/python/index.html","806d939be218a90bcde7b4900fdac1cc"],["/tags/python/page/2/index.html","2cd6bf4dd75b41393755d3300e55b29d"],["/tags/python/page/3/index.html","f64cf4fc169ba5b500af2766ff6f22e3"],["/tags/冒泡排序/index.html","8f66601163465b3f748d49d2b529bd1f"],["/tags/算法/index.html","aec817bd985924878e596189349c73da"],["/tags/算法/page/2/index.html","fa3a27a439d9ab58eb353bf71d98396c"],["/tags/算法/page/3/index.html","0b95ef4920509c1823b6078b6e9a4ead"],["/tags/算法/page/4/index.html","87a948c6b209ca0a048fbc2d4fe39e38"],["/tags/结构体/index.html","ae06d63d962def200d67e456cf71fe42"],["/tags/蓝桥杯/index.html","d7c8a4ca39654ec299c6da3272fc7f95"],["/tags/蓝桥杯/page/2/index.html","ff2d9d3e92dff690724b56516c6cb919"],["/tags/蓝桥杯/page/3/index.html","99b780afd53f4c5cc57c8c8e67c8538e"],["/tags/蓝桥杯/page/4/index.html","3378262fb544727644f24a77e0942a2b"],["/tags/蓝桥杯/page/5/index.html","ab8e4ad8bbe55bbdfa3ee18956e1f4e1"],["/tags/蓝桥杯/page/6/index.html","bf67728fb313fb84ece5e40fa01b6390"],["/tags/蓝桥杯/page/7/index.html","6dea29092aaa444bac9936c2bdc096a7"],["/tags/资源教程/index.html","68320df3a451bf8f64ca5a6035c0fb25"],["/tags/链表/index.html","d3c853045064508528352bb53b5553e6"]];
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
