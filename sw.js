/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","cca628e49247b7e55a5bb5994c8714c9"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","d105871929a14f1745b15c84a9e50636"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","1e11c64c50e1f88b7420ef8f50deb6e6"],["/2023/04/22/验证码（random类）/index.html","73a0286ee913fb61a4d6d859de6947df"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","15a41b13cad9e4d87fbe347a8c90191f"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","e1048f009d38943573e180d9f068e470"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","83e3543d245dade96f229e086248a906"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","f5f9348168a1621832dc4181556708a4"],["/2023/04/23/蓝桥杯-山（java）/index.html","392b00ce686885d267cecd94e7598a7f"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","870526bd9b5b35caee92892d93a41add"],["/2023/04/23/蓝桥杯-时间显示/index.html","8f35522d5309ea89daeb542a3ab0ec10"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","02531cadef7a0486bbd94de34dbcd4e0"],["/2023/04/23/蓝桥杯-特别数的和/index.html","d98db130f0a53d10d85270849077d2f3"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","c530249690a014463a741ae3d4517a64"],["/2023/04/27/案例2-1 商品入库（java）/index.html","cd80824f9babd6f57e505e94409cf667"],["/2023/04/27/猜数字（python）/index.html","49e28726306e9d214de87095b28383d6"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","99d2af6afadeb665c683b9a113b34e52"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","248c9ed2f7385e08534434f89a0053ac"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","7ead7a1b8d6066ba2858f3c3094ff8f6"],["/2023/05/02/数字三角形（JAVA）/index.html","be0a7205731de376502a23b3172d638e"],["/2023/05/05/k倍区间（JAVA）/index.html","8e13cb2329ac2885cfa133700a376ea0"],["/2023/05/05/作物杂交（JAVA）/index.html","91aa0045187047889c3d45e54b526382"],["/2023/05/05/包子凑数（JAVA）/index.html","0b2e62e891f5033bada3c7593930559b"],["/2023/05/05/取球博弈（JAVA）/index.html","e3735fa37c88078d65114aac6a18312b"],["/2023/05/05/回文日期（JAVA）/index.html","309565973cc66a9a5241b38ff9d18457"],["/2023/05/05/砝码称重（JAVA）/index.html","015d5b09140e2aa88e15429897295b65"],["/2023/05/05/等差数列（JAVA）/index.html","37a2a3747d63c09b270ae66b03e3de8e"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","e549e94e9e86ee5326dad6dd809f8643"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","7c06de692debd783d1afbc9d9a376860"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","0d83f5dcdf00d459c096ed751e7facd0"],["/2023/05/05/蓝桥杯--排序（python）/index.html","3474ca340d3c7aaa0b5ae4754c786be7"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","552753e4bf0c73c6231e68810a608501"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","59de28435c783b24184fb9ec62c67fe1"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","64989bc164216a994b0c944a357b97fb"],["/2023/05/05/蓝桥杯--空间（python）/index.html","e15670f3f95f2a5b9c8d9692c7297a20"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","4637fc01cfac475472581064eae6f421"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","b5698b1ae7fd001d52173926ecb70c51"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","404db427fd3e345ba74df2db4755dfae"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","c501242b4b7c23ce295ad92d82927528"],["/2023/05/05/蓝桥杯--质数（python）/index.html","0957cec93280ab2b8fff602c36dc4505"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","86fa777bc1234e9f838a47a0872f1ae7"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","72868a5f3ec9cf9e92a49eea10b88100"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","3103513602e96a2d6594c40c9dcb486e"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","468df84f72b333ef3e1e5c3b204d4cec"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","4a92adbc8cb4b3fb2d3f8031b33619d9"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","1dc0e842bceeec4b51dcb312f51863ef"],["/2023/05/05/质数拆分（JAVA）/index.html","fd9f960fe82b2b10cb27ff24072b84ed"],["/2023/05/05/闹钟定时程序（python）/index.html","dd90069863351f44a600941e9a37f85c"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","891b93c00e45ffc52f306ea16c24951f"],["/2023/05/07/GCD（JAVA）/index.html","8df417b4cf4f28aeaa077f3aa250f6e7"],["/2023/05/07/七段码（JAVA）/index.html","ef313533648df0ea19df629f9d07ab03"],["/2023/05/07/全排列的价值（JAVA）/index.html","1aa1e2c70ba3e8b875c6f6cecc60c5c1"],["/2023/05/07/双向排序（JAVA）/index.html","224795c7ac51b354f229e724409b12eb"],["/2023/05/07/四平方和（JAVA）/index.html","b23f58f6c333293dc9100e143188c543"],["/2023/05/07/回文日期（JAVA）-1/index.html","17b24d7e55464812ef86e71ee28bb67e"],["/2023/05/07/山（JAVA）/index.html","69bc2109d1ce9a4f528aaccb5ad7a196"],["/2023/05/07/数位排序（JAVA）/index.html","61f8211913e76b144fc4d602741ee945"],["/2023/05/07/数组切分（JAVA）/index.html","7258ba772ee3ce8ff2411d81365cf825"],["/2023/05/07/最优清零方案（JAVA）/index.html","1fb92e541e3b5232772440b31aa99e68"],["/2023/05/07/最少刷题数（JAVA）/index.html","877a046b9523ab235ea9d5f4c7f3325a"],["/2023/05/07/杨辉三角形（JAVA）/index.html","1925e9e2eedb1da92bc2b4da2239b48b"],["/2023/05/07/求和（JAVA）/index.html","ef93131caa24ef4110b45e01466bd303"],["/2023/05/07/求阶乘（JAVA）/index.html","d7ad90bbc79bd52cbfad8bc9aba87552"],["/2023/05/07/牌型种数（JAVA）/index.html","4d2234a5c101ac428994e2b75496396e"],["/2023/05/07/猜字母（JAVA）/index.html","7e394dd281d058ec555cd9a24b3fc61a"],["/2023/05/07/路径（JAVA）/index.html","fec4132a11b36bd4bffa40e2626a1af8"],["/2023/05/07/青蛙过河（JAVA）/index.html","e4f1a6577413ef7f6695d1ccd9647b42"],["/2023/05/16/重合次数（JAVA）/index.html","e5029f9170f2b18999bce9526fab3d52"],["/2023/05/22/左移右移（JAVA）/index.html","a58920d25208cb654387bdb883d56f51"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","367a73a6f4acd6dedd98139958219b6e"],["/2023/05/28/本质上升序列（JAVA）/index.html","8b3b50bb7d7ae81521d7f4a52e1f5721"],["/2023/06/07/方格填数（JAVA）/index.html","b7ffcad60de7418223601302cfc719de"],["/2023/06/09/合根植物（JAVA）/index.html","c084da0739b5006603e13387d539e9b1"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","b33ddae574de78c09accca2874bb10a1"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","928601c1d0825e440aa69824bad5e482"],["/about/index.html","86310cffdb34b6f9b0b6a2a2f45a75e7"],["/archives/2023/04/index.html","bff9188add62d87cc3eb5e27355de12b"],["/archives/2023/04/page/2/index.html","d775c8b19a5579ea3ff639d4f01965e3"],["/archives/2023/05/index.html","538a049e952b46aba07cd7604f887e97"],["/archives/2023/05/page/2/index.html","1e200032bd8496328ab9a8149a7b7c89"],["/archives/2023/05/page/3/index.html","8c11d16230e676dbcc1d07f94b0421fe"],["/archives/2023/05/page/4/index.html","bf566b6ff2bdea7f317088c59f912d00"],["/archives/2023/05/page/5/index.html","8ceb0143016f056633f2dae63f67ad85"],["/archives/2023/05/page/6/index.html","d809970d048a100bbd7833a0ddb9d1ac"],["/archives/2023/06/index.html","3a1ef8806c1d62963ff27066f048d6ab"],["/archives/2023/07/index.html","f369ffe3bc56ca51c1ae0bd264f84d6f"],["/archives/2023/index.html","a5f2fa548e7def5be3d9e408c4abd370"],["/archives/2023/page/2/index.html","8afe909dd54ca8959724f3f159dd0b1c"],["/archives/2023/page/3/index.html","8aae87003259e91ad5267119b5adcc0c"],["/archives/2023/page/4/index.html","67a06ed48c78f729a7eeeb7fd65c23bd"],["/archives/2023/page/5/index.html","b558fffd57a62292f0565e4dcc74e93f"],["/archives/2023/page/6/index.html","cb2f02f0d75d30572354ad68962bc0bb"],["/archives/2023/page/7/index.html","a0b25df463c3777a5f6f66670843fb33"],["/archives/2023/page/8/index.html","80bf7b5200b9f5758fa4b809abab5b0d"],["/archives/index.html","a17b5d569b2f0936ec8dba286dc96dc9"],["/archives/page/2/index.html","da58e2c5a0f2e12ae7e13648f8ec8854"],["/archives/page/3/index.html","41d713f05907a0ec558e02faefc4101e"],["/archives/page/4/index.html","b4b7c828a97cfc0fd6bf345f1661364e"],["/archives/page/5/index.html","494a903f1fbec51a8c1ba574911cd61f"],["/archives/page/6/index.html","5e728449a7bc6b59cd11166b34adfbda"],["/archives/page/7/index.html","86e9fca8f3d6449e455de83da70d1750"],["/archives/page/8/index.html","d315025054cb94473e3f7c3b1e27c361"],["/categories/index.html","94488361496497b59d6938edef04180f"],["/categories/java/index.html","2061201c9f9866dd5c1fe346c638e8ca"],["/categories/java/page/2/index.html","f9577782d7b3ab8418ac9ed214a1c195"],["/categories/java/page/3/index.html","6727c2de43fb679417b679e8c2de45ee"],["/categories/java/page/4/index.html","2fa707016e14da6ee0f80b35241e19f2"],["/categories/java/page/5/index.html","3fbff383ea285440d7ce82f78b53dacd"],["/categories/java/算法/index.html","7de6e83ee46f99a552bf1ab23b1b0b67"],["/categories/java/算法/page/2/index.html","1a0efad129ff5a09d6a4ba1ea9068575"],["/categories/java/算法/page/3/index.html","99b714c8efc09cafb09c401d2c6c571c"],["/categories/java/算法/page/4/index.html","70d0685826ffcdc6da0c4e3038642754"],["/categories/java/算法/蓝桥杯/index.html","1cb1036fc45bd6c516c4a01aec357e75"],["/categories/java/算法/蓝桥杯/page/2/index.html","afa5fd6978e1c1ca3e3a8c5138058c3f"],["/categories/java/算法/蓝桥杯/page/3/index.html","da1689047049dba40e08e6e0634256b7"],["/categories/java/算法/蓝桥杯/page/4/index.html","9fd3be0c7eb87e81b3d6d742da089bef"],["/categories/java/蓝桥杯/index.html","65bda2b4b9cc2c127453512710379d99"],["/categories/python/index.html","252b00a03dda7080baf247996769e0f6"],["/categories/python/page/2/index.html","0c37774e79c08bb815ebf5a61063a2c7"],["/categories/python/page/3/index.html","683ecab499380db1a64fd7b193accbd3"],["/categories/python/蓝桥杯/index.html","ddc39dcc15e24c165a5dee25027de5d3"],["/categories/python/蓝桥杯/page/2/index.html","454830b0083797241faef3902b3d49d0"],["/categories/python/蓝桥杯/page/3/index.html","3b41dae6f056fcd380e2d312d05fc9e4"],["/categories/python/蓝桥杯/冒泡排序/index.html","562176aca04ec5924295618afd5d4601"],["/categories/python/蓝桥杯/结构体/index.html","7aa6c3c77e13b7a3c98ba6a3189e18e8"],["/categories/python/蓝桥杯/链表/index.html","7b9575d4d041d74ad7778c9e300db366"],["/categories/教程/index.html","05520ccb360cd9d93c1cc6ded79c0566"],["/categories/日常习题/index.html","c8e49e1f94a35e03cc94c6e167b581f6"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","63875bca37eea3ab3700be73f4da47a4"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","4270d3e031b0259c3a6e88be9b59ea86"],["/page/2/index.html","26c519f9d4b952ebda6b1ad6ff05f624"],["/page/3/index.html","eb2ed7042c535ed56c99618a0f528d72"],["/page/4/index.html","24331c9c203bf01ba81565c561dafe8f"],["/page/5/index.html","37c90b3b3be6334a8b2f73eabe35cb97"],["/page/6/index.html","8fecd2d19af30e82df474b6b28db9dd0"],["/page/7/index.html","69d6a20949e35ebbbfda65d23b6263a7"],["/page/8/index.html","92c918473f08034cc97110d67f5bd6cb"],["/sw-register.js","5698707afbaa302b75ca73cffb4f1610"],["/tags/index.html","f92dbf0ace5f4625bba49ba56b52c288"],["/tags/java/index.html","9b036ba023b774fadab576d44ac95bc3"],["/tags/java/page/2/index.html","33837cc12c45765818f700fde86d3759"],["/tags/java/page/3/index.html","59fbeecb8e7a34bfa9e21882e6067546"],["/tags/java/page/4/index.html","9f5ea6276c12d2c12b92c35ade6534c5"],["/tags/java/page/5/index.html","297ca5308d18737bd650bad0ad2b692e"],["/tags/python/index.html","2392f74210045cfbe5b7f9b317d99a11"],["/tags/python/page/2/index.html","a77575425bb3f060a56a35bbdb33bd01"],["/tags/python/page/3/index.html","a583f1ab6379899f0d8d308b2b92012a"],["/tags/冒泡排序/index.html","ccc4c4f648a236594d7a2155cc772f1a"],["/tags/算法/index.html","57142e441303f716530295c6f666a5d7"],["/tags/算法/page/2/index.html","0c50ba9bd7f9452f424ea1e583d68915"],["/tags/算法/page/3/index.html","047f59278ef5560635d46f13d37a9535"],["/tags/算法/page/4/index.html","65ec8828ad690c58e6773b8c7ff030b5"],["/tags/结构体/index.html","7dd483d518831c36125c99322349a005"],["/tags/蓝桥杯/index.html","b1287628b80ce31fe69affed4a888653"],["/tags/蓝桥杯/page/2/index.html","7487370a4cee85f2cb70d7e8231b53ad"],["/tags/蓝桥杯/page/3/index.html","69ef14355fbd54f4d5967e48319c1031"],["/tags/蓝桥杯/page/4/index.html","97e41c128971fe00c804666554298ba3"],["/tags/蓝桥杯/page/5/index.html","c97274db9f5ee68860ace22e78c89fea"],["/tags/蓝桥杯/page/6/index.html","0799a2c15be854a03971b08383f0ba7b"],["/tags/蓝桥杯/page/7/index.html","31469032ff0cb3178a3b3eb185ff8c1c"],["/tags/资源教程/index.html","1e79bc9077ede5e9f8a9434ba4702a78"],["/tags/链表/index.html","8b7928a4b18585475b874f9e9d3d166a"]];
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
