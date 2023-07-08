/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","0964ba35df66d9c8792fb2f49d660c22"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","e84c8f5aa9249cde20d1891b53189c81"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","a8830032004813906a50391bb4b5b33f"],["/2023/04/22/验证码（random类）/index.html","d92ceb8bf8af54a542fa0b8b7d2537f4"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","cdf885bb0ea28b18c1b4ba8e93f52b65"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","14156a7abf273c7f06409940c63592e7"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","664adee2f75548b36088c8e5140431cf"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","5005880708e065ae61ef1af013dfc576"],["/2023/04/23/蓝桥杯-山（java）/index.html","840d172da15b611ea3fd7d9777618d8d"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","dc4b29090d9703dbeb237ad3ca5e335e"],["/2023/04/23/蓝桥杯-时间显示/index.html","c78c62fff2987a1287172ccb3d464055"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","a111c04cdfb5e45662384c5cfab1c0da"],["/2023/04/23/蓝桥杯-特别数的和/index.html","332978f0898f3be503795917b43d3a36"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","0f7fbf1c8c77ad60da89249dcf7fa776"],["/2023/04/27/案例2-1 商品入库（java）/index.html","597fbea0ef68d77ff222f5059d18d382"],["/2023/04/27/猜数字（python）/index.html","1c3e8d18785ecb330bb0078a4122fb14"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","13b7c2738f8ec6bb37adb02f979f6b32"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","7ffb0b573c2e81584fbee9e80714dca2"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","4983c50f8c37363f6b2d57d42bfb2b44"],["/2023/05/02/数字三角形（JAVA）/index.html","89c0dbd1a33423a136d5a826fe88735e"],["/2023/05/05/k倍区间（JAVA）/index.html","0bc6d469d31c085864ed2287e6dda6c3"],["/2023/05/05/作物杂交（JAVA）/index.html","55dac3a596dd30721f45667ef73df021"],["/2023/05/05/包子凑数（JAVA）/index.html","f3363d5829341df30ec295aac44a14ad"],["/2023/05/05/取球博弈（JAVA）/index.html","80d03b8203c93c6fadc3d6bf984e9eb2"],["/2023/05/05/回文日期（JAVA）/index.html","a3e058573213857af3b3f3b06dcba3e8"],["/2023/05/05/砝码称重（JAVA）/index.html","18ecc14d27232e42dbffd05a3853d9d5"],["/2023/05/05/等差数列（JAVA）/index.html","9a64ce3ba4002996de16371d632d7ba0"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","242d0060f99ef7daa8fd5b5c53fae620"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","aabe0f0db4c5de6d0561541fb12abb0e"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","ea4c9a62ce0a8a67f15478152b1126a4"],["/2023/05/05/蓝桥杯--排序（python）/index.html","6d0116b88eb4b081d29902d7de711486"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","a18c516e6d1b32be6ced995ebb82bc66"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","84d63a606e3ad33ec7f3f9cfafe1ba9c"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","d2c0078f581ef99f9c3fa552b04cfc43"],["/2023/05/05/蓝桥杯--空间（python）/index.html","042710d64d0de447a0b854a3370a08e0"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","9bc6f0aa1955a46d72bae333bd345868"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","ec9db780f3b00d9ec570ee255d11f7a0"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","936b29c996de83051b61564dc879b51a"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","e5abf461d3984addde8a354e61574995"],["/2023/05/05/蓝桥杯--质数（python）/index.html","4d46329000b983144f63b6ed0edd9f25"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","1441c5ac405a8292c1989f4af3edb398"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","765dd00cff3cb85d23a3310d41276641"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","b833677057ec78aee8e696ca1846cc33"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","36241dec15981d9057c4125aa64e1686"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","686221aaa000b2fd3463d5128c29dad4"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","b313a0c3de72dbded9e04bee34e020ec"],["/2023/05/05/质数拆分（JAVA）/index.html","1815e966af5d14dafc93bb85cc040b96"],["/2023/05/05/闹钟定时程序（python）/index.html","79931162e2fc51db195301f1834e346e"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","c775f7c4e8a7e319bb8a982190da92d2"],["/2023/05/07/GCD（JAVA）/index.html","40112cb763de6900d5cb8020c6ed0e95"],["/2023/05/07/七段码（JAVA）/index.html","edae5df13d3a1d5e064374a4679c4ef0"],["/2023/05/07/全排列的价值（JAVA）/index.html","6e70fc3becb7a4285bc14b7adc310a03"],["/2023/05/07/双向排序（JAVA）/index.html","bace4c47f9fc2cf0cb691bf02e27db89"],["/2023/05/07/四平方和（JAVA）/index.html","eb915eed6c155359ffb147bf37d22e7b"],["/2023/05/07/回文日期（JAVA）-1/index.html","156bafa23a86baebb2092bf706f9be1a"],["/2023/05/07/山（JAVA）/index.html","53c6c754a939a5980f44086b3a251ea9"],["/2023/05/07/数位排序（JAVA）/index.html","42bd7bc326b91db6587a63afce39c949"],["/2023/05/07/数组切分（JAVA）/index.html","79b3d2ae8991c9899e84584ee4d1cd71"],["/2023/05/07/最优清零方案（JAVA）/index.html","8623b016163612d9de7153ba6c7555c4"],["/2023/05/07/最少刷题数（JAVA）/index.html","e7ddb34bb23dc5b594f9a7b4a5a390b0"],["/2023/05/07/杨辉三角形（JAVA）/index.html","428d5ec3ddded877c6f8e22b8febe92f"],["/2023/05/07/求和（JAVA）/index.html","cdb67bb471d7dc5f2128ab62fca1ed62"],["/2023/05/07/求阶乘（JAVA）/index.html","7653c06f396edfe296ed5b0f2633f70e"],["/2023/05/07/牌型种数（JAVA）/index.html","8d7258cb9787b6dc68c93849bfedaa04"],["/2023/05/07/猜字母（JAVA）/index.html","bd509a1973c13e2e3309ee7f7e71d536"],["/2023/05/07/路径（JAVA）/index.html","7fd175ef2b091ccf428d96229e391ae5"],["/2023/05/07/青蛙过河（JAVA）/index.html","b9772086d25410c86f33e357adabe3d8"],["/2023/05/16/重合次数（JAVA）/index.html","0a981d168b7f5d6163083cede356abb2"],["/2023/05/22/左移右移（JAVA）/index.html","d7fdfcb1b516b5e8b37616d3d228707b"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","427fb2b6a2c41700bb4597b056584b32"],["/2023/05/28/本质上升序列（JAVA）/index.html","bf8f0d34edbf5b2673dd1da84819c78e"],["/2023/06/07/方格填数（JAVA）/index.html","ae368301af6da2fd25202610046131df"],["/2023/06/09/合根植物（JAVA）/index.html","d3d8f58e6a1ed3b082f9ddb6111dc056"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","ef25da1264e85779eed20d10ce74df89"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","05d4c8f65753328f6888de24c00b7efb"],["/about/index.html","24f2e961a8ae00899a40f237faeb3ecb"],["/archives/2023/04/index.html","8092bf2eda350af6c5361cf191c84f01"],["/archives/2023/04/page/2/index.html","7dfcf28319f854bfbd1b1e1646eb186f"],["/archives/2023/05/index.html","709c4ce3c88f70fc20efdc23964fb9a6"],["/archives/2023/05/page/2/index.html","823da1a8f81a6124fb47dade592fdd9d"],["/archives/2023/05/page/3/index.html","d99a23e7715f5b8ae2296d15da85685a"],["/archives/2023/05/page/4/index.html","170864d570fe136e9d45c2d80c05180d"],["/archives/2023/05/page/5/index.html","388f682051f5cf96499b034444216e18"],["/archives/2023/05/page/6/index.html","02c0bfd335fb0693e479f6ca53376022"],["/archives/2023/06/index.html","fe6686008849c7779acbe0b1fcb0b35a"],["/archives/2023/07/index.html","47954ec2ca7b1d0b13d3fb96be108b6d"],["/archives/2023/index.html","d7b9fd7c5599e9f3534e00a1e2ecba43"],["/archives/2023/page/2/index.html","58f5f935b4e706cbf09dbba63e9a8238"],["/archives/2023/page/3/index.html","a206a57e753995c479003e132bbd468a"],["/archives/2023/page/4/index.html","cb6abbed1ea8ba3eed8a0d09000425c6"],["/archives/2023/page/5/index.html","9cc60977102aca88e9610753c37b6467"],["/archives/2023/page/6/index.html","01c0b670cd2eb2730fafec84a2dd6475"],["/archives/2023/page/7/index.html","d3795c2c8f40d620ff82a3d12d54514c"],["/archives/2023/page/8/index.html","b060f549725b5154042efd25cad2792e"],["/archives/index.html","674d00f53f3b42844c6345cc2bb39771"],["/archives/page/2/index.html","008e0274220b56b9a60fb73e7176a50f"],["/archives/page/3/index.html","2d0775377387a8d598c8abeffe0dcebd"],["/archives/page/4/index.html","1a63b65ca5c74cb3081f451245ce4d2d"],["/archives/page/5/index.html","0a690ba8db3a75ec8159757886781936"],["/archives/page/6/index.html","d8c28101e3a4e9e681c0a0417271101f"],["/archives/page/7/index.html","d6b1796377cf0189adcc2cec456ba865"],["/archives/page/8/index.html","f93cc0bd73f545a2638ecfca4bbb5e97"],["/categories/index.html","a528718e81dce131b2f1a3c43e24be3d"],["/categories/java/index.html","870410d6e2bfecda3fb30a0c0d402377"],["/categories/java/page/2/index.html","f343c7b5abe85befd4e71c08d24d1708"],["/categories/java/page/3/index.html","5dc99953f1b544e6cb17110e6b9e332c"],["/categories/java/page/4/index.html","b20a7322bf038e4b38e64118b3725838"],["/categories/java/page/5/index.html","9326f9187d9e6df4800e65f5a6b05473"],["/categories/java/算法/index.html","b76c53327baee1ae8f2c7475042cd678"],["/categories/java/算法/page/2/index.html","36f8a9d5be45f0b2c357156431c9c865"],["/categories/java/算法/page/3/index.html","9f6f9f1c32213068c6db13fd4b513208"],["/categories/java/算法/page/4/index.html","d0870ed42561c3b9c673306bf292e0ce"],["/categories/java/算法/蓝桥杯/index.html","f0e0c26b8a53a5c0ccea2f143e439a8e"],["/categories/java/算法/蓝桥杯/page/2/index.html","cecf9238c2582430896f6c46aa508c30"],["/categories/java/算法/蓝桥杯/page/3/index.html","b1d725cdf21a6f23563b1e2a899a2df7"],["/categories/java/算法/蓝桥杯/page/4/index.html","fa573263e0e8166f3fa499705a182082"],["/categories/java/蓝桥杯/index.html","a8b0edcfef5a717e869708335607d7eb"],["/categories/python/index.html","2827c94d849508cc79fd593389634443"],["/categories/python/page/2/index.html","53fa723b3cc298ce4ff3dc57d2d949af"],["/categories/python/page/3/index.html","3aef5e2d554643eb321af781f3e3e5c8"],["/categories/python/蓝桥杯/index.html","9a38ac26660491128745123dd4568650"],["/categories/python/蓝桥杯/page/2/index.html","81ac1df33c3857f2463d1fae52063864"],["/categories/python/蓝桥杯/page/3/index.html","3b08502f64c1b01fdb4d433b44c251c7"],["/categories/python/蓝桥杯/冒泡排序/index.html","14b82b9924b67a58111aed992ab5024a"],["/categories/python/蓝桥杯/结构体/index.html","06c5abe28519d5be64c9bc5c575c7c78"],["/categories/python/蓝桥杯/链表/index.html","7b57404657ae0351d8d269517c726fc9"],["/categories/教程/index.html","ad8e3fa9a68a5c063fe7209f27e3d1a7"],["/categories/日常习题/index.html","afc6631e39e107d0af16b7780e5988b4"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","57e09b5f23303936c561de1a7b663d8a"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","d0e897bf05b146aa874bd4550bb3fd2f"],["/page/2/index.html","1353f727667a46fc4e16b948383c4c76"],["/page/3/index.html","71c6be8e830a67188c175a3f31ce2fa7"],["/page/4/index.html","54b13bce36195697226da5a9e22a0490"],["/page/5/index.html","bb825fca27643d40f6930dcf5c47da40"],["/page/6/index.html","4706306b85ef082531dc42abe0ef839b"],["/page/7/index.html","ceb757be64ae4d9af928fb4b065f290c"],["/page/8/index.html","d998b6eb53878da2182a6bacd8af2746"],["/sw-register.js","d4f396b7cae572bab5e3ec06df0a527e"],["/tags/index.html","a523aa1cc223fd7bddcbfe072391b5db"],["/tags/java/index.html","8e8892a889a41ef25d5ed9be4ac567d6"],["/tags/java/page/2/index.html","8f8d57076e61277a84d9fc77f0df6d15"],["/tags/java/page/3/index.html","1e09e2ba417d5f8684152d6c5494357c"],["/tags/java/page/4/index.html","67656af60e8b7dbe1e53477c98f0c9bf"],["/tags/java/page/5/index.html","cccc475022f8e40bf9a59e32a905b878"],["/tags/python/index.html","a9a273138705e0bc6d7fcabf3b273475"],["/tags/python/page/2/index.html","37fd03fff3d1c060165bf3f122b6ddae"],["/tags/python/page/3/index.html","97d71dd4cd0612881fb52a88398064e3"],["/tags/冒泡排序/index.html","31483d8054a7cecfc4e7181af88c0c1f"],["/tags/算法/index.html","168bdbda800c1e6b58e1c6f3a8689661"],["/tags/算法/page/2/index.html","dc7f1f3276d4e63b244de6b382bc7454"],["/tags/算法/page/3/index.html","82dd67c522c5018888aa784e1413bbfe"],["/tags/算法/page/4/index.html","3147a9da7f20b9cba77721541783db81"],["/tags/结构体/index.html","0756a6b6a372b1c2149d12eb0db1a9ec"],["/tags/蓝桥杯/index.html","5e46be0ede79ca2531c2a8e6ccf14f4e"],["/tags/蓝桥杯/page/2/index.html","fe2a105d234c72a166c24ca59b414995"],["/tags/蓝桥杯/page/3/index.html","64ba1ccfc19c3dd5aa318d89b67c3a54"],["/tags/蓝桥杯/page/4/index.html","898fc91bcbb89e530696a3dbe178c741"],["/tags/蓝桥杯/page/5/index.html","a5a03727fdd664cdc499d9e601d56fdc"],["/tags/蓝桥杯/page/6/index.html","b2e5feb8acffd4dc7edc38c16d0c587b"],["/tags/蓝桥杯/page/7/index.html","564e71733a38226d44942a786e494bae"],["/tags/资源教程/index.html","9ae893d27016b274b8852ce0c6520bf0"],["/tags/链表/index.html","67c71b6ae9cc62c0835e7f32a5ddca2e"]];
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
