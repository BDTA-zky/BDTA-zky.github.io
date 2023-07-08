/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","3f0ac18e78fae718f833e76969b9dea5"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","8e01b25161da4091cc3c6cb0b9092aff"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","87a706b1d4e4a1b8abbdcbf735d188ba"],["/2023/04/22/验证码（random类）/index.html","b678a6f658ccc314ba3543986cb4abb0"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","0435441775c073d807545d160b0f0ff9"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","31ec131991cd843969e74b1d6c843af5"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","2042bd5f4ff19f106f7be08b237bd148"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","07033e497f4efc94d53bca3c2f1515bc"],["/2023/04/23/蓝桥杯-山（java）/index.html","72914fce6666dd471a9af8c7e57d6fd6"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","bf03ce4af67c390097b835d9fa4cb922"],["/2023/04/23/蓝桥杯-时间显示/index.html","3608494675139c3841e7f39d134aedbb"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","46099c8a064bcd90a0500acdfefbc237"],["/2023/04/23/蓝桥杯-特别数的和/index.html","be4e2f7efec4de8165e6915f57cc1a5a"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","68b5f9e3f33bfc9406093dd9450b77c8"],["/2023/04/27/案例2-1 商品入库（java）/index.html","50271ea243f90f12471792169d6a6358"],["/2023/04/27/猜数字（python）/index.html","1a5aad77d9347d8d58648cf86f6a957d"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","50c1923f8f2ad44f43987f6b5555fe99"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","9659c6a812a65fedc23b7312a812fe98"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","a2cf268edf036a7e2fd666961c5bd3da"],["/2023/05/02/数字三角形（JAVA）/index.html","36f380607d80a22a6d74e102ffdff4d0"],["/2023/05/05/k倍区间（JAVA）/index.html","f11db2104d3397c8c348136e7d45f6c9"],["/2023/05/05/作物杂交（JAVA）/index.html","8b1a70e859893807da8aaf79d0695c7c"],["/2023/05/05/包子凑数（JAVA）/index.html","9ded0a3893b0d808f2e464db207710cc"],["/2023/05/05/取球博弈（JAVA）/index.html","6c9638c59643ec0d4fc96f00b91adccb"],["/2023/05/05/回文日期（JAVA）/index.html","a4b3f463795bbb5d659e11a9ef13d013"],["/2023/05/05/砝码称重（JAVA）/index.html","9a6c4fafc3a237393b1c1e9e20b190d7"],["/2023/05/05/等差数列（JAVA）/index.html","cf65e8b70743d0ef538e6da4b7b16237"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","511b3b775abe190cb63e58e5d8e546da"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","7a18f984dd8bf73148b2cee0d02f075d"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","e02041572609448cc103f9d6332c1f91"],["/2023/05/05/蓝桥杯--排序（python）/index.html","2166b19123509ef70fb3617bcf35bae8"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","795dd39bbbd36482870f8b834a0c38ef"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","6d2ad752f9095429508b7a6f0879bb8a"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","18f4ccf07ab30d3de2eabafba14e988d"],["/2023/05/05/蓝桥杯--空间（python）/index.html","451c869f80595561c127147629811570"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","318335813b4187016c0ee764893d4c77"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","cf0d6dee849b97838fafe78aa7fb1ee5"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","a34d94095bae86ce80fd2305578bb392"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","dd46bb07570c23fb3d7ea6a1351192f6"],["/2023/05/05/蓝桥杯--质数（python）/index.html","2f5f20ee5d47535cf12254082c679864"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","57cd51b973b88812de36fa27152567fc"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","b27686aee9b289c6a53afbc3e8079c9a"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","a75b16eeb764fc7aee27e1a89472a33d"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","3285bebedd217635332358dc14a220ee"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","ca643ab0561cb1c0284666032010c759"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","3da2537b3424528394759de1e9a582d0"],["/2023/05/05/质数拆分（JAVA）/index.html","a57f77a5a711ffe1b2625a3a3a22cdb3"],["/2023/05/05/闹钟定时程序（python）/index.html","0c52844a3bbd7e2018bb67305d17b5e1"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","1d73021411fca85dea639d0498abd05a"],["/2023/05/07/GCD（JAVA）/index.html","50fa5da83555be4afd1a6b22573d60a8"],["/2023/05/07/七段码（JAVA）/index.html","7916f805be3e0fbb72fd809c7fe2bc4f"],["/2023/05/07/全排列的价值（JAVA）/index.html","0746c4a8100cead776c7235465a36044"],["/2023/05/07/双向排序（JAVA）/index.html","8512a59a898a0f8647671979bca9e399"],["/2023/05/07/四平方和（JAVA）/index.html","53188fc7e668e926917740b033799a53"],["/2023/05/07/回文日期（JAVA）-1/index.html","e317618aa343d4a665cfd86b0d903913"],["/2023/05/07/山（JAVA）/index.html","42af710cfe1c1a48caec7d994c22f78f"],["/2023/05/07/数位排序（JAVA）/index.html","1f4ac05b033253ef49e08e0380ce3407"],["/2023/05/07/数组切分（JAVA）/index.html","7014c2b19ced23023d56528a9c632cb3"],["/2023/05/07/最优清零方案（JAVA）/index.html","906792dbdac40588b208013dc4f863f4"],["/2023/05/07/最少刷题数（JAVA）/index.html","0fbd9f3ed8a4fd143a581a68cf250b32"],["/2023/05/07/杨辉三角形（JAVA）/index.html","ffd71f668a3db79e66a074902f19256f"],["/2023/05/07/求和（JAVA）/index.html","3110f4d139757e2edfda1947be50dbbf"],["/2023/05/07/求阶乘（JAVA）/index.html","18c8815c95025641a817a96d6ea0721b"],["/2023/05/07/牌型种数（JAVA）/index.html","79198a60ee99d04e0182bd3e62401c8b"],["/2023/05/07/猜字母（JAVA）/index.html","9e652cf3d4d6f2e01bd7c28e693a2f1e"],["/2023/05/07/路径（JAVA）/index.html","3da83b58e50bf8baaed9a99273533b46"],["/2023/05/07/青蛙过河（JAVA）/index.html","e4c07df5a570dad4b5776a780d75197d"],["/2023/05/16/重合次数（JAVA）/index.html","7616bb517ec6b18534d3bbe59f7a5f59"],["/2023/05/22/左移右移（JAVA）/index.html","ca315ed593c1f1d756d83b528700dc49"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","99cd9925f47fe1ae0ed851cbea1b3d87"],["/2023/05/28/本质上升序列（JAVA）/index.html","c0c897b111761bf2f44d9e1a6b04075e"],["/2023/06/07/方格填数（JAVA）/index.html","58514a9ac7ddfe981db7fd8ebb43ea1b"],["/2023/06/09/合根植物（JAVA）/index.html","d98d31ef1973cf2c165b77a7c7860d0a"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","11336adde983b31b5b4d386c1a9e4a7a"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","931c838002efcbfee9d85e48e369b948"],["/about/index.html","72a0d02f1862154328ac76bfe6f7659d"],["/archives/2023/04/index.html","0dfb328556c721d08a5cf3d09b8790a8"],["/archives/2023/04/page/2/index.html","b43bbacee787d6ec3e23c658d1bcfb01"],["/archives/2023/05/index.html","dd3c693260fb741e3a752ba10457dac7"],["/archives/2023/05/page/2/index.html","9f04dce7b157876ae718598033b1f65c"],["/archives/2023/05/page/3/index.html","977b0b28a93940af0700c1e6e44c8702"],["/archives/2023/05/page/4/index.html","debaa5011be2d40a10d88fbed300754b"],["/archives/2023/05/page/5/index.html","4411864415969be6a74709d2525023c7"],["/archives/2023/05/page/6/index.html","d62bfe5a382e21c9b9929f94f53234d2"],["/archives/2023/06/index.html","8e175dfcb90fa9c99557115340bbd92c"],["/archives/2023/07/index.html","89b32bf726771363282a713abd4367eb"],["/archives/2023/index.html","2bb99ab1e4225f50c3e60d6a6656434c"],["/archives/2023/page/2/index.html","d5040a2356a39d4469ba4076da7bb481"],["/archives/2023/page/3/index.html","29330d050eff4aeed94a8af3940fde21"],["/archives/2023/page/4/index.html","37bde6e178612378c63ca235b1a4e9b0"],["/archives/2023/page/5/index.html","dc9546ebd96affaff5c3f0acf56726d7"],["/archives/2023/page/6/index.html","a1595d3f09db4eb2c6faf7021601016d"],["/archives/2023/page/7/index.html","d6ea9fbb761427d1dc5d69f4739d5ed0"],["/archives/2023/page/8/index.html","0b1b89782a059e926dcb5502cbeee48a"],["/archives/index.html","789541568c02f9143fa8a182354d512d"],["/archives/page/2/index.html","e0e6b6ee8eb7ba65fb07873714195fcb"],["/archives/page/3/index.html","e258caea8518b08002ca3239ba4ea2c6"],["/archives/page/4/index.html","0e091beeb196de728b7ed8e2448d2504"],["/archives/page/5/index.html","173aca3aed991c0c4cc120f24b31b55b"],["/archives/page/6/index.html","fbe9afb6f9340576b3524294f2e4bdff"],["/archives/page/7/index.html","1e6584ce68d212fedc518fc107436270"],["/archives/page/8/index.html","15ab2e5be21c0cfd46f9f3a312c68a2a"],["/categories/index.html","f18d0ddb91f9bf978b5424709e0d3c0c"],["/categories/java/index.html","2484af331c896fc16a681bd53ade1a3d"],["/categories/java/page/2/index.html","7844a1c33275d92ebf85340b95c2ece9"],["/categories/java/page/3/index.html","e0946caeb7f42f962543e264214df891"],["/categories/java/page/4/index.html","0fafdd16e14210aa168e2d8ac726ccd1"],["/categories/java/page/5/index.html","85e8d0ceac2869c10a2d9e07b5d9af27"],["/categories/java/算法/index.html","93bbb4a5adb8ce1e637f3af476660515"],["/categories/java/算法/page/2/index.html","8f2e46911530a0a992f83c001bbcaed2"],["/categories/java/算法/page/3/index.html","0cf1eef8df5a9c6ca5b7e27f4483ae9e"],["/categories/java/算法/page/4/index.html","5386ad54ede8ce37a2fb659991f34551"],["/categories/java/算法/蓝桥杯/index.html","44de229501c10f202a87fea6fe691f64"],["/categories/java/算法/蓝桥杯/page/2/index.html","d5f6f4a8b4a40bad1557cd3a3b727186"],["/categories/java/算法/蓝桥杯/page/3/index.html","46ca50a4af6461e7ed83714a8ae37318"],["/categories/java/算法/蓝桥杯/page/4/index.html","0f787340f1ea24848e6535c66d9b1ccb"],["/categories/java/蓝桥杯/index.html","442a1052a143c443c0301bbd5306b1f8"],["/categories/python/index.html","82505bbbd1deb3cea8300bced4ac1ca2"],["/categories/python/page/2/index.html","b43792df4ae4e83d9be5db691011a0dc"],["/categories/python/page/3/index.html","f0896505c1c9b2501b4a686af9572c4d"],["/categories/python/蓝桥杯/index.html","f19c914051cfc2e609a005f6fb10b1dd"],["/categories/python/蓝桥杯/page/2/index.html","f6212e07013821d8f9e4c311148d30ef"],["/categories/python/蓝桥杯/page/3/index.html","e5ed23f01880779aa308486ccaab2f27"],["/categories/python/蓝桥杯/冒泡排序/index.html","efa2c8f7bb1234881ac7cb456b030ff2"],["/categories/python/蓝桥杯/结构体/index.html","5f667b5b6be8c26d31068cc726679cee"],["/categories/python/蓝桥杯/链表/index.html","7e91a80b704cabfac35e75373db7132d"],["/categories/教程/index.html","e180e21108016fc593675a7579da8784"],["/categories/日常习题/index.html","ecfe8776b9c0eea7d569984dbf289cf9"],["/css/index.css","22943828075c56a01cb0542ca0eca399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","7159d3d77fef8f2337198be3d0769c75"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","cff74e4fef99d84533aecfe33327270d"],["/page/2/index.html","2ee86499cec9ee5aa6cbe2447cc20f0a"],["/page/3/index.html","d631915913cfbcf9b166c04cf19bfcc7"],["/page/4/index.html","a1b9efbc7598ffe120c5d53107754ded"],["/page/5/index.html","14001e23f878e0b0d3024a4ec25ffdb6"],["/page/6/index.html","91ac215eacf88a7fa275edd97a0129d2"],["/page/7/index.html","628015fbab48147598621dc4a4d4db62"],["/page/8/index.html","f373121fa0d559f7cbeac08bba1b4db4"],["/sw-register.js","9a4dd0731e812eeaeb480ccc28feb294"],["/tags/index.html","9d7a5417e5ca5f2cc40cc1ea007aa79f"],["/tags/java/index.html","fe4cfbc245f7e00ab1505c8030de1e52"],["/tags/java/page/2/index.html","766e6dd6cfaf109e2d4d4ec4008c48c6"],["/tags/java/page/3/index.html","5c5d9ec090098bed9bfa7af7f4effb9a"],["/tags/java/page/4/index.html","e2b058ac97b1b07d6e4cf0a8797c3d11"],["/tags/java/page/5/index.html","f1b33f216bcfbe0dffbd1667202153fb"],["/tags/python/index.html","277a717e99a13928e6f28db4c03fb479"],["/tags/python/page/2/index.html","b474abf2c7834c6d0d64cc61f9db770c"],["/tags/python/page/3/index.html","909168ffef3e24df2b1d05b91aec50b7"],["/tags/冒泡排序/index.html","064d9e2dff9391ac32cb5121063a9b17"],["/tags/算法/index.html","4b16ed4a13fb1c7d0b32e5f75d5e5885"],["/tags/算法/page/2/index.html","8419335ad6c999e8838620f472b5b83f"],["/tags/算法/page/3/index.html","6630a337296093186a7721f898213bd9"],["/tags/算法/page/4/index.html","f0a7d0254a405dbf168b660fc7da8172"],["/tags/结构体/index.html","5dc3cb567f3ff66e77ff8607d69c68c8"],["/tags/蓝桥杯/index.html","e938ac6397a44da35b167b71cc286906"],["/tags/蓝桥杯/page/2/index.html","df9dc750eb936a472707e3b1a98d1fce"],["/tags/蓝桥杯/page/3/index.html","dcaadd018982ecd7e30c144fd3ba21b8"],["/tags/蓝桥杯/page/4/index.html","eff00f4458ca0a029aadb62fba148a1b"],["/tags/蓝桥杯/page/5/index.html","1502f4774662b38c56edf0f8aeb19d16"],["/tags/蓝桥杯/page/6/index.html","33d7c4d0b0e4732cc959a90fdcaee3db"],["/tags/蓝桥杯/page/7/index.html","f905034a0cfa0939b3cda5e380f71c8e"],["/tags/资源教程/index.html","305080ce9040bfa5ff726ace79fbf22e"],["/tags/链表/index.html","667ae638b6deb01ac3749751fba4421e"]];
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
