/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","0964ba35df66d9c8792fb2f49d660c22"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","e84c8f5aa9249cde20d1891b53189c81"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","a8830032004813906a50391bb4b5b33f"],["/2023/04/22/验证码（random类）/index.html","d92ceb8bf8af54a542fa0b8b7d2537f4"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","cdf885bb0ea28b18c1b4ba8e93f52b65"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","14156a7abf273c7f06409940c63592e7"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","664adee2f75548b36088c8e5140431cf"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","5005880708e065ae61ef1af013dfc576"],["/2023/04/23/蓝桥杯-山（java）/index.html","840d172da15b611ea3fd7d9777618d8d"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","dc4b29090d9703dbeb237ad3ca5e335e"],["/2023/04/23/蓝桥杯-时间显示/index.html","c78c62fff2987a1287172ccb3d464055"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","a111c04cdfb5e45662384c5cfab1c0da"],["/2023/04/23/蓝桥杯-特别数的和/index.html","332978f0898f3be503795917b43d3a36"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","0f7fbf1c8c77ad60da89249dcf7fa776"],["/2023/04/27/案例2-1 商品入库（java）/index.html","597fbea0ef68d77ff222f5059d18d382"],["/2023/04/27/猜数字（python）/index.html","1c3e8d18785ecb330bb0078a4122fb14"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","13b7c2738f8ec6bb37adb02f979f6b32"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","7ffb0b573c2e81584fbee9e80714dca2"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","4983c50f8c37363f6b2d57d42bfb2b44"],["/2023/05/02/数字三角形（JAVA）/index.html","89c0dbd1a33423a136d5a826fe88735e"],["/2023/05/05/k倍区间（JAVA）/index.html","0bc6d469d31c085864ed2287e6dda6c3"],["/2023/05/05/作物杂交（JAVA）/index.html","55dac3a596dd30721f45667ef73df021"],["/2023/05/05/包子凑数（JAVA）/index.html","f3363d5829341df30ec295aac44a14ad"],["/2023/05/05/取球博弈（JAVA）/index.html","80d03b8203c93c6fadc3d6bf984e9eb2"],["/2023/05/05/回文日期（JAVA）/index.html","a3e058573213857af3b3f3b06dcba3e8"],["/2023/05/05/砝码称重（JAVA）/index.html","18ecc14d27232e42dbffd05a3853d9d5"],["/2023/05/05/等差数列（JAVA）/index.html","9a64ce3ba4002996de16371d632d7ba0"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","242d0060f99ef7daa8fd5b5c53fae620"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","aabe0f0db4c5de6d0561541fb12abb0e"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","ea4c9a62ce0a8a67f15478152b1126a4"],["/2023/05/05/蓝桥杯--排序（python）/index.html","6d0116b88eb4b081d29902d7de711486"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","a18c516e6d1b32be6ced995ebb82bc66"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","84d63a606e3ad33ec7f3f9cfafe1ba9c"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","d2c0078f581ef99f9c3fa552b04cfc43"],["/2023/05/05/蓝桥杯--空间（python）/index.html","042710d64d0de447a0b854a3370a08e0"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","9bc6f0aa1955a46d72bae333bd345868"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","ec9db780f3b00d9ec570ee255d11f7a0"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","936b29c996de83051b61564dc879b51a"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","e5abf461d3984addde8a354e61574995"],["/2023/05/05/蓝桥杯--质数（python）/index.html","4d46329000b983144f63b6ed0edd9f25"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","1441c5ac405a8292c1989f4af3edb398"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","765dd00cff3cb85d23a3310d41276641"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","b833677057ec78aee8e696ca1846cc33"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","36241dec15981d9057c4125aa64e1686"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","686221aaa000b2fd3463d5128c29dad4"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","b313a0c3de72dbded9e04bee34e020ec"],["/2023/05/05/质数拆分（JAVA）/index.html","1815e966af5d14dafc93bb85cc040b96"],["/2023/05/05/闹钟定时程序（python）/index.html","79931162e2fc51db195301f1834e346e"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","c775f7c4e8a7e319bb8a982190da92d2"],["/2023/05/07/GCD（JAVA）/index.html","40112cb763de6900d5cb8020c6ed0e95"],["/2023/05/07/七段码（JAVA）/index.html","edae5df13d3a1d5e064374a4679c4ef0"],["/2023/05/07/全排列的价值（JAVA）/index.html","6e70fc3becb7a4285bc14b7adc310a03"],["/2023/05/07/双向排序（JAVA）/index.html","bace4c47f9fc2cf0cb691bf02e27db89"],["/2023/05/07/四平方和（JAVA）/index.html","eb915eed6c155359ffb147bf37d22e7b"],["/2023/05/07/回文日期（JAVA）-1/index.html","156bafa23a86baebb2092bf706f9be1a"],["/2023/05/07/山（JAVA）/index.html","53c6c754a939a5980f44086b3a251ea9"],["/2023/05/07/数位排序（JAVA）/index.html","42bd7bc326b91db6587a63afce39c949"],["/2023/05/07/数组切分（JAVA）/index.html","79b3d2ae8991c9899e84584ee4d1cd71"],["/2023/05/07/最优清零方案（JAVA）/index.html","8623b016163612d9de7153ba6c7555c4"],["/2023/05/07/最少刷题数（JAVA）/index.html","e7ddb34bb23dc5b594f9a7b4a5a390b0"],["/2023/05/07/杨辉三角形（JAVA）/index.html","428d5ec3ddded877c6f8e22b8febe92f"],["/2023/05/07/求和（JAVA）/index.html","cdb67bb471d7dc5f2128ab62fca1ed62"],["/2023/05/07/求阶乘（JAVA）/index.html","7653c06f396edfe296ed5b0f2633f70e"],["/2023/05/07/牌型种数（JAVA）/index.html","8d7258cb9787b6dc68c93849bfedaa04"],["/2023/05/07/猜字母（JAVA）/index.html","bd509a1973c13e2e3309ee7f7e71d536"],["/2023/05/07/路径（JAVA）/index.html","7fd175ef2b091ccf428d96229e391ae5"],["/2023/05/07/青蛙过河（JAVA）/index.html","b9772086d25410c86f33e357adabe3d8"],["/2023/05/16/重合次数（JAVA）/index.html","0a981d168b7f5d6163083cede356abb2"],["/2023/05/22/左移右移（JAVA）/index.html","d7fdfcb1b516b5e8b37616d3d228707b"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","427fb2b6a2c41700bb4597b056584b32"],["/2023/05/28/本质上升序列（JAVA）/index.html","bf8f0d34edbf5b2673dd1da84819c78e"],["/2023/06/07/方格填数（JAVA）/index.html","ae368301af6da2fd25202610046131df"],["/2023/06/09/合根植物（JAVA）/index.html","d3d8f58e6a1ed3b082f9ddb6111dc056"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","ef25da1264e85779eed20d10ce74df89"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","05d4c8f65753328f6888de24c00b7efb"],["/about/index.html","b740a040189714bbfadff35ecc7094c3"],["/archives/2023/04/index.html","6c007cb31bef2137e118c437ed4b16de"],["/archives/2023/04/page/2/index.html","9ce67aaa996c4330e5a942e1a0062c91"],["/archives/2023/05/index.html","1602387b46d790601be83f0aaa038189"],["/archives/2023/05/page/2/index.html","6184bfeda9eb08759ea792e0caa2fe03"],["/archives/2023/05/page/3/index.html","5b2fdb7b19fec535ebb44562fc1166ad"],["/archives/2023/05/page/4/index.html","d47d30af82c5c8d23b7a892e2e3bbecd"],["/archives/2023/05/page/5/index.html","23f58e0bf29c5eaf658e3aef2b9b352e"],["/archives/2023/05/page/6/index.html","2ee35c4ff986d102ace8de91f1d98190"],["/archives/2023/06/index.html","c09b532af8152f71eb7fa62796781e01"],["/archives/2023/07/index.html","101ac13a5968a3b22c8e36238611d187"],["/archives/2023/index.html","9761972886593948c87d26f7062ef526"],["/archives/2023/page/2/index.html","c166c3428e24288e9e2bc77e29a098cb"],["/archives/2023/page/3/index.html","6c98e1f774783686b2e6a127f44c837a"],["/archives/2023/page/4/index.html","d012e1f915b042bcfc47c2629223617a"],["/archives/2023/page/5/index.html","a80b27d35666c2c74807e2d70efead2a"],["/archives/2023/page/6/index.html","493747664e1a30e53a4c227724bcef8f"],["/archives/2023/page/7/index.html","a253c34827fc8adf0a947760ee454315"],["/archives/2023/page/8/index.html","4c04e32f67079360d4966fc61864a580"],["/archives/index.html","3788147de5f6f63c5b6e65b0451ba56f"],["/archives/page/2/index.html","c645b4260eb4df01ab1cf636b997260b"],["/archives/page/3/index.html","1424dbad6ad4e786b369b0183fffc349"],["/archives/page/4/index.html","22d6ff3c3639ae63af5f9fc0f3bf7598"],["/archives/page/5/index.html","b6747a119aba352bcf3007e563f906f3"],["/archives/page/6/index.html","5382b84d3a37d3f487f6ba3e1ffea894"],["/archives/page/7/index.html","33e1ecc96fb98c129c93487701a8919b"],["/archives/page/8/index.html","0e46b6152ac671ea3f29079b40de0563"],["/categories/index.html","69d78f5da1a459069cd03ecefff50626"],["/categories/java/index.html","cfb48c8a09b0945cf6e4dea0f13446ca"],["/categories/java/page/2/index.html","23ba6bcebd8dc124db031e4d35ae6f96"],["/categories/java/page/3/index.html","ea3648a9f74c20ff9c82db85a976f7ce"],["/categories/java/page/4/index.html","73b460c8f54b617da0c016c25fdbbc46"],["/categories/java/page/5/index.html","c063c4ed5273c2e46e429a56f29ae5dc"],["/categories/java/算法/index.html","073f952d527d1e6b992f26c87a53b02b"],["/categories/java/算法/page/2/index.html","d3604dbf1085137d6ebafd261d584dd3"],["/categories/java/算法/page/3/index.html","be60ebf137dea0a0014eebf679cc1b50"],["/categories/java/算法/page/4/index.html","72c116ef624c9546d3ec00bd73dff906"],["/categories/java/算法/蓝桥杯/index.html","ae006ec8e4ca7b3a56ed847b8643835e"],["/categories/java/算法/蓝桥杯/page/2/index.html","589b2c18c231f63e590c57fd1e8bf0d6"],["/categories/java/算法/蓝桥杯/page/3/index.html","c78e4f4e169b2c99dc542cbb74641230"],["/categories/java/算法/蓝桥杯/page/4/index.html","5e5a92e6593c47839c92e2758d4da14d"],["/categories/java/蓝桥杯/index.html","01c0f35f7eeaf11dbebc0be519b925c8"],["/categories/python/index.html","068dc65f2456730ac77243a04ec62099"],["/categories/python/page/2/index.html","83326c0d0ca800d5bf8900c9304cfd05"],["/categories/python/page/3/index.html","1207db2ae92c7d4b18f373f39319ad63"],["/categories/python/蓝桥杯/index.html","e7debf5dd7d249c020cbce26130f6d26"],["/categories/python/蓝桥杯/page/2/index.html","c56f8a4a67ee6f185cd8b2171029f9e1"],["/categories/python/蓝桥杯/page/3/index.html","1c63d5270e5c019f89d2cc44a16601f9"],["/categories/python/蓝桥杯/冒泡排序/index.html","8d3765b0dee5a80ca7711ae9c33e3dd9"],["/categories/python/蓝桥杯/结构体/index.html","b7b322baecec2059cbfeacd25d8ad0d8"],["/categories/python/蓝桥杯/链表/index.html","3b3411569621bb4e9fac867b9b64a0ea"],["/categories/教程/index.html","94747d8adc043a9cdd5acbd4f7b0282f"],["/categories/日常习题/index.html","14d5116b1d222827e352e61120039bda"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c598104e8764261a78fc8e0e3f7358c5"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","7f3ce9e1f1c67e26c235ba8666894719"],["/page/2/index.html","292a9539514c1abc1f612ce22f64572f"],["/page/3/index.html","865d19f8baaf0ce9de9193074e4fdd2e"],["/page/4/index.html","85b991b397ca5181fab04cd0843c8b4d"],["/page/5/index.html","54109ee3879ec2a1219216a4bb1f49f8"],["/page/6/index.html","bf7c4322fe44782e9d6364b284d90c67"],["/page/7/index.html","111cef8fd63b588d017b4f8a744540c5"],["/page/8/index.html","954d9af866e466f1bbd98fc0d2e67bae"],["/sw-register.js","77a86988bf5b486f58afc11f1bcd2a48"],["/tags/index.html","f76009b6b3e5b1e8c7062d7fc52a9aa0"],["/tags/java/index.html","ee97bbe371ca3e4c7d581819e62b970e"],["/tags/java/page/2/index.html","c2711812c94096521d8e792d7817ef25"],["/tags/java/page/3/index.html","0dde92ab00b3eacf151b55392071657d"],["/tags/java/page/4/index.html","0631b31249f388c670dfeba493b14a13"],["/tags/java/page/5/index.html","2267102d446332eb71bc9378437ac959"],["/tags/python/index.html","d61a6f70452c0f537688a5d686c26fee"],["/tags/python/page/2/index.html","700c9ae7cc090ecf42e4570e3061300a"],["/tags/python/page/3/index.html","b7f093f44d6630410d5b4920b619bbf1"],["/tags/冒泡排序/index.html","23e0fd3416f855e1c53d0037fb200590"],["/tags/算法/index.html","dcbf32962f2f6dea224a07c0698e2e79"],["/tags/算法/page/2/index.html","bb1e8b99d91d6a3b4429590d8599cc14"],["/tags/算法/page/3/index.html","12fbdad71e448a7d1cba3cd658b79704"],["/tags/算法/page/4/index.html","0c88edb1784b0bbb0d6bd1ff95067c5a"],["/tags/结构体/index.html","aad88aa198fbe5563aef2eb82b53906c"],["/tags/蓝桥杯/index.html","818344c6f9008900aae4216b9ca4a9bc"],["/tags/蓝桥杯/page/2/index.html","b93fb8f7430be73ef143c0284ef972e5"],["/tags/蓝桥杯/page/3/index.html","54295a0c8e260563036f548d4121bd9a"],["/tags/蓝桥杯/page/4/index.html","270cb278cdaf6a425a45d187fd717b4e"],["/tags/蓝桥杯/page/5/index.html","d72d6a2b88d62b445656ac919b2c2cb7"],["/tags/蓝桥杯/page/6/index.html","c679b519a0abbabb70cd47ebcd3128bd"],["/tags/蓝桥杯/page/7/index.html","f42b5d9f349e825aad1299d8cd94aed0"],["/tags/资源教程/index.html","57270ff436eebc4292d3b0d32a539133"],["/tags/链表/index.html","f7150609ca8b0ee3aa99a989db15a15b"]];
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
