/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","df634078ba3ec2035ae3c5ac58eee076"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","55d8b718564a157cb4fc48b677307827"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","737366f3fa750157495b6f535436affa"],["/2023/04/22/验证码（random类）/index.html","d77bb5e000fea5c8719401971803d8a0"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","b2dbaaa457d7dd9d54ba3d63c2f609ea"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","a2809e9ff6953fb476fd1b0c923ab87d"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","8842e67b0dafcd2b86ef98750947857e"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","e5ec83ed20f2b8474c9bfb3a291ff2e0"],["/2023/04/23/蓝桥杯-山（java）/index.html","a84de91b2391f75e711b07973e89a805"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","90209ba9f932622caa4b3c958a5c74ea"],["/2023/04/23/蓝桥杯-时间显示/index.html","db159db95081c60fce83fe8bf5875891"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","ab5c6ec6bfb0801c4bc59d4486f9050e"],["/2023/04/23/蓝桥杯-特别数的和/index.html","d7fd97388f79d8b740573432a4a420f2"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","6829db9d6b40f1d6b380cef90bad8901"],["/2023/04/27/案例2-1 商品入库（java）/index.html","363f690e8cf133cd255b335c32217eb1"],["/2023/04/27/猜数字（python）/index.html","c70287dfd51ee0f2f4be7bcc40da1e42"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","e1dee5445902e3d6931d06cfca823824"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","a1ceeca2096245f092768856199ae94a"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","50867744261ce1d22f3ca3ba93dfedef"],["/2023/05/02/数字三角形（JAVA）/index.html","5356c0e26890257795810f98c2ff0e22"],["/2023/05/05/k倍区间（JAVA）/index.html","df00ed5739af8234dc89d503fe945747"],["/2023/05/05/作物杂交（JAVA）/index.html","c4a4c856770e0d08c58b3ad48625cec0"],["/2023/05/05/包子凑数（JAVA）/index.html","69f60939e3363a996e6ba1beac3c9fcd"],["/2023/05/05/取球博弈（JAVA）/index.html","0f1cc0de0b64c5c8e28d173eb1dbf49c"],["/2023/05/05/回文日期（JAVA）/index.html","4dcb7ff22abbecfc51fca76169801b2c"],["/2023/05/05/砝码称重（JAVA）/index.html","3a8c7e63dcc30e638e20ad83becf4239"],["/2023/05/05/等差数列（JAVA）/index.html","2ce4430bc15bbff2905a4a2a4f423565"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","e778b749313e32c8b210c8518a7ed452"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","6ded9d6c2ddd325ddd3320a3e1d3a5a6"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","bf1754fcedf70236021f469e865e90af"],["/2023/05/05/蓝桥杯--排序（python）/index.html","454cfa6354248551ce4e747279226cd2"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","3fd945bf55b52210a59558fe427bc737"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","4acd93c49b25f2e11b56a8115f173831"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","d3f5a33930a57ce10f14542d898382b3"],["/2023/05/05/蓝桥杯--空间（python）/index.html","641256d39d31d34a00a9dcd2c166d61a"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","f7273e585a8721fe8098f88b4ae41082"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","17f68c3a1c76393197659c44796360b4"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","b0c85154903c34cb4fa734fc3922a7f1"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","28e7e4314c7b4232eef15553ce2b6344"],["/2023/05/05/蓝桥杯--质数（python）/index.html","f7b7b5349a4beb2aeb2404b8ef890b80"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","b535d48d20a5edfc340290ce699ff4d6"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","70a64fd2a8ae84230e9aa7fc75be4f59"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","dfade30cf3788557bdbc334b690c0bf6"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","c2bb7590d4b97cc59ba18782b411a634"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","301287738e80f42c12c4181d7b96b709"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","5107350b92bea0cdcdb30c526c49bcbf"],["/2023/05/05/质数拆分（JAVA）/index.html","dd2c7b0db8bc0f9f2d39046fca893cb4"],["/2023/05/05/闹钟定时程序（python）/index.html","f9d989cdc91ba5d55e8e5d1a9597e7e1"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","8b8648f3c85374a91dbd28e488984fd0"],["/2023/05/07/GCD（JAVA）/index.html","732f060133ab0e5fddbb1184f88f5cb9"],["/2023/05/07/七段码（JAVA）/index.html","b0f4e297c2953183626e01f372ff2b45"],["/2023/05/07/全排列的价值（JAVA）/index.html","c3791f8546d856ff48c073c023211681"],["/2023/05/07/双向排序（JAVA）/index.html","5546a50d3e935a56a64ab64a69cf87c2"],["/2023/05/07/四平方和（JAVA）/index.html","0550d0a00d4e2d4931a7830f0dbff513"],["/2023/05/07/回文日期（JAVA）-1/index.html","ca8a50d74ce9b595c1615790dbc469ea"],["/2023/05/07/山（JAVA）/index.html","c96b76ce82f092f0d6d0132cb7fa19b6"],["/2023/05/07/数位排序（JAVA）/index.html","a13de29662e5c04cafd950ed62aa5679"],["/2023/05/07/数组切分（JAVA）/index.html","4494320d704e0a9f480eaa79114a3e01"],["/2023/05/07/最优清零方案（JAVA）/index.html","0c1baf8c1a93a4bdcfd37e5f2c1c4ef3"],["/2023/05/07/最少刷题数（JAVA）/index.html","43958f652977404a089d65db6a2fcce0"],["/2023/05/07/杨辉三角形（JAVA）/index.html","4a5c0d8147d5f903101625cc52000a3b"],["/2023/05/07/求和（JAVA）/index.html","2534b50f518ea51ca9cd13c0df527245"],["/2023/05/07/求阶乘（JAVA）/index.html","6e73ff86537482960fd6b4d72a422142"],["/2023/05/07/牌型种数（JAVA）/index.html","312de2ad0246876c0dfd6331c930e33e"],["/2023/05/07/猜字母（JAVA）/index.html","6131985a05da5654b18d3f03f10d34b7"],["/2023/05/07/路径（JAVA）/index.html","cdf6add28370a1257ffa6bfa9b69df37"],["/2023/05/07/青蛙过河（JAVA）/index.html","0caccd011893a4338091c23704adffd2"],["/2023/05/16/重合次数（JAVA）/index.html","46842f5b996e382ee1bc9f2c77ac89a8"],["/2023/05/22/左移右移（JAVA）/index.html","6e0f06a41c04293e060587b4960188eb"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","ebc7cf5d567d201aaef49d24dee9266b"],["/2023/05/28/本质上升序列（JAVA）/index.html","574b9cfdeeb77d6a429aa4f1a2e2f247"],["/2023/06/07/方格填数（JAVA）/index.html","62d63356883dce6fb1a5bba1ed0d3d9b"],["/2023/06/09/合根植物（JAVA）/index.html","8e2ed64587e87a71af0e412cc7b60a5f"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","25559d6a9ab637bb47920deeca5613a6"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","1fb96c31cb39a652e0d3f0ba256042dc"],["/about/index.html","d1a24f5c0c60a5db65e35a9fcf950c5e"],["/archives/2023/04/index.html","65d414adf7a70f349a4ab44951359be1"],["/archives/2023/04/page/2/index.html","3415ac82c0a9ba89623f283c343fb7f7"],["/archives/2023/05/index.html","c462999d238d7a4864f608603890e3ab"],["/archives/2023/05/page/2/index.html","df2d17defe127d441a51156b7f6370b8"],["/archives/2023/05/page/3/index.html","457bf4a47cb16a70143fa4ed7971ff00"],["/archives/2023/05/page/4/index.html","c958277c379e6cca1ce931984f407043"],["/archives/2023/05/page/5/index.html","5d2891567f6661435d9aac6ef10d428d"],["/archives/2023/05/page/6/index.html","53047cc40b9a659a70d677475479e61c"],["/archives/2023/06/index.html","6bb252c8adc3154d84a59604743673f4"],["/archives/2023/07/index.html","60ca7f6032506b8b0003629b1c7eceea"],["/archives/2023/index.html","0b5512aebd4b27ea98d9f77298b9c577"],["/archives/2023/page/2/index.html","b6f5b5622dd1fdecde9d24ddf88b8a09"],["/archives/2023/page/3/index.html","f3b729c0a40ac3d24816075411ad7ebc"],["/archives/2023/page/4/index.html","53bf5bcaa79b317506d8ee568b53063a"],["/archives/2023/page/5/index.html","79acd0492571254e79c7be8b3654938c"],["/archives/2023/page/6/index.html","95f84bf6696d27326fd8676ca3a1eb4b"],["/archives/2023/page/7/index.html","09e89cbc40615b34139f2976f057892b"],["/archives/2023/page/8/index.html","b9c1208e03acecc0a2bf26d127160224"],["/archives/index.html","e97ed0151f04fb22845deada522c727e"],["/archives/page/2/index.html","3505901472cd7a5535ff531f5b4274f7"],["/archives/page/3/index.html","c806715af73a89d9cba6cd899d802171"],["/archives/page/4/index.html","70f1ea0bc2d3e1a8bd85991edbb641a8"],["/archives/page/5/index.html","c1085f4c2f55e52592c42ce219bfaf7c"],["/archives/page/6/index.html","86ecf76cca32f66ecce8fad07848efd4"],["/archives/page/7/index.html","da1c45d6dc55b66068a4fdbd5045038d"],["/archives/page/8/index.html","617c7f9eabbf9f754ba39357977c2d24"],["/categories/index.html","254f38ad4cf949e558970bdaf295f34b"],["/categories/java/index.html","3fe582294ec7ff712c65de8871fc2e15"],["/categories/java/page/2/index.html","16e72c23aa0d3b0cb4c97eb98ef7223c"],["/categories/java/page/3/index.html","ebf99b447e25f51aea0ac074e869d580"],["/categories/java/page/4/index.html","368e42224ba4746d979ba19e7f065f4a"],["/categories/java/page/5/index.html","b88cc841cabe75a0a9cf6e6cc85f8aa6"],["/categories/java/算法/index.html","395124138040d09b10f4f92a852252c7"],["/categories/java/算法/page/2/index.html","5919d48df77ea92ddcad43259f9aa26e"],["/categories/java/算法/page/3/index.html","5ef580c5ab7093ede8bda10b12cc8a6a"],["/categories/java/算法/page/4/index.html","17b19eb5fdb922f6776cf8eee38ecf99"],["/categories/java/算法/蓝桥杯/index.html","a1146e12a86128252b8d5358627aa03e"],["/categories/java/算法/蓝桥杯/page/2/index.html","419e79d1cb53a49cafe8a4ff5f5f4035"],["/categories/java/算法/蓝桥杯/page/3/index.html","96c82d148d74008ded4df33d1deeaf4e"],["/categories/java/算法/蓝桥杯/page/4/index.html","6daa3c9d9019f451a23d1d1639580ac3"],["/categories/java/蓝桥杯/index.html","1b71a5759f8a66b535604abd22223a51"],["/categories/python/index.html","58adcf02409580740f807ef2bdd2f5cc"],["/categories/python/page/2/index.html","ce4457dc9cd5b2ac9463ce21c047e90a"],["/categories/python/page/3/index.html","758601ae3f716de87ba74fb987a079a2"],["/categories/python/蓝桥杯/index.html","2b91f60c163176640c7f40a0253a66ab"],["/categories/python/蓝桥杯/page/2/index.html","210f27d8ba979a87dfb3ac0450959bd0"],["/categories/python/蓝桥杯/page/3/index.html","78b7dda3304e6837b0beb1a478807286"],["/categories/python/蓝桥杯/冒泡排序/index.html","1c8acdcb51df0b5255579ad7e7ea4957"],["/categories/python/蓝桥杯/结构体/index.html","c6e2016b7c0b36e64519bf5d8e6fe2e3"],["/categories/python/蓝桥杯/链表/index.html","eabbd05e957c088b706f34182292f436"],["/categories/教程/index.html","1661eccb5e6f4e5bfc5b02cd747105e8"],["/categories/日常习题/index.html","bb29e310716d174ee3a283b496e03d8e"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","07a293fd4f2e50a530ced6692af3fca8"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","faec31531d542c3fa02c1ef1fa6e387d"],["/page/2/index.html","9f9fe90e232d15b343f223d7013daa09"],["/page/3/index.html","89841cff5737ee311f4108abce812e09"],["/page/4/index.html","a6b653214b7b88bd23b8853ef169ab81"],["/page/5/index.html","b1455b401214bc4514be2c51339952fc"],["/page/6/index.html","98d85df69874882a1fa8c1191401f2a9"],["/page/7/index.html","58d4b7e22b6a8884edf71690c429e750"],["/page/8/index.html","bc1e8f69c2e081a09bd5df0984c10b5b"],["/sw-register.js","785d0eb1c741bb8a9ac38ff3240d8ae0"],["/tags/index.html","0b79279609908e6dda3f6f0999c0076e"],["/tags/java/index.html","f0dfe83b9480a71aecbcdf6642b91933"],["/tags/java/page/2/index.html","2c41414a31ad223a6d939327e3e44900"],["/tags/java/page/3/index.html","d1208a2ce7a14012ebe0af1228f3f7bd"],["/tags/java/page/4/index.html","3b660b1287fc9408a248a3c07d51c480"],["/tags/java/page/5/index.html","3c518227366a65ea78282b85be1e2621"],["/tags/python/index.html","68aed094146da77e30acc9da2d7de82a"],["/tags/python/page/2/index.html","a4313024f910f4c662a29b0d3bf40de5"],["/tags/python/page/3/index.html","8def9de99a1111e63462cb151363e7e0"],["/tags/冒泡排序/index.html","dd783837cf7db2902269ba359a81b7aa"],["/tags/算法/index.html","8bd810d4d3cece09bb15e9ee9ba42977"],["/tags/算法/page/2/index.html","3b98a50df982fb91b40c4f03b1b3c6f2"],["/tags/算法/page/3/index.html","1701d2f4db59bc94a1ee9714b6e8f62f"],["/tags/算法/page/4/index.html","accb9bb8e75b26f766bf4d1db0c03c45"],["/tags/结构体/index.html","4ac80a3f56e7592edaca81c3def58c10"],["/tags/蓝桥杯/index.html","33c3d2a30aa22580a6a98fed1acb0167"],["/tags/蓝桥杯/page/2/index.html","c26b986ecdbeb7e4b393f044e19a1830"],["/tags/蓝桥杯/page/3/index.html","aa976e415b0410177b9c4aa41e87e21e"],["/tags/蓝桥杯/page/4/index.html","5bb7e5dc7e9f02cab673af1a03740d82"],["/tags/蓝桥杯/page/5/index.html","0fcd50fc3bcc9f8917a588e643330acb"],["/tags/蓝桥杯/page/6/index.html","2fd44788ab067553de45cc181a448272"],["/tags/蓝桥杯/page/7/index.html","3e3000f3ab3a5a2cf3be138e081da5f6"],["/tags/资源教程/index.html","69f41d76a1b9d329df84839d666abf06"],["/tags/链表/index.html","67e2c1a2e7682446744fcef40e519402"]];
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
