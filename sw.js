/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","3f0ac18e78fae718f833e76969b9dea5"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","8e01b25161da4091cc3c6cb0b9092aff"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","87a706b1d4e4a1b8abbdcbf735d188ba"],["/2023/04/22/验证码（random类）/index.html","b678a6f658ccc314ba3543986cb4abb0"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","0435441775c073d807545d160b0f0ff9"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","31ec131991cd843969e74b1d6c843af5"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","2042bd5f4ff19f106f7be08b237bd148"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","07033e497f4efc94d53bca3c2f1515bc"],["/2023/04/23/蓝桥杯-山（java）/index.html","72914fce6666dd471a9af8c7e57d6fd6"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","bf03ce4af67c390097b835d9fa4cb922"],["/2023/04/23/蓝桥杯-时间显示/index.html","3608494675139c3841e7f39d134aedbb"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","46099c8a064bcd90a0500acdfefbc237"],["/2023/04/23/蓝桥杯-特别数的和/index.html","be4e2f7efec4de8165e6915f57cc1a5a"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","68b5f9e3f33bfc9406093dd9450b77c8"],["/2023/04/27/案例2-1 商品入库（java）/index.html","50271ea243f90f12471792169d6a6358"],["/2023/04/27/猜数字（python）/index.html","1a5aad77d9347d8d58648cf86f6a957d"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","50c1923f8f2ad44f43987f6b5555fe99"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","9659c6a812a65fedc23b7312a812fe98"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","a2cf268edf036a7e2fd666961c5bd3da"],["/2023/05/02/数字三角形（JAVA）/index.html","36f380607d80a22a6d74e102ffdff4d0"],["/2023/05/05/k倍区间（JAVA）/index.html","f11db2104d3397c8c348136e7d45f6c9"],["/2023/05/05/作物杂交（JAVA）/index.html","8b1a70e859893807da8aaf79d0695c7c"],["/2023/05/05/包子凑数（JAVA）/index.html","9ded0a3893b0d808f2e464db207710cc"],["/2023/05/05/取球博弈（JAVA）/index.html","6c9638c59643ec0d4fc96f00b91adccb"],["/2023/05/05/回文日期（JAVA）/index.html","a4b3f463795bbb5d659e11a9ef13d013"],["/2023/05/05/砝码称重（JAVA）/index.html","9a6c4fafc3a237393b1c1e9e20b190d7"],["/2023/05/05/等差数列（JAVA）/index.html","cf65e8b70743d0ef538e6da4b7b16237"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","511b3b775abe190cb63e58e5d8e546da"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","7a18f984dd8bf73148b2cee0d02f075d"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","e02041572609448cc103f9d6332c1f91"],["/2023/05/05/蓝桥杯--排序（python）/index.html","2166b19123509ef70fb3617bcf35bae8"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","795dd39bbbd36482870f8b834a0c38ef"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","6d2ad752f9095429508b7a6f0879bb8a"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","18f4ccf07ab30d3de2eabafba14e988d"],["/2023/05/05/蓝桥杯--空间（python）/index.html","451c869f80595561c127147629811570"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","318335813b4187016c0ee764893d4c77"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","cf0d6dee849b97838fafe78aa7fb1ee5"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","a34d94095bae86ce80fd2305578bb392"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","dd46bb07570c23fb3d7ea6a1351192f6"],["/2023/05/05/蓝桥杯--质数（python）/index.html","2f5f20ee5d47535cf12254082c679864"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","57cd51b973b88812de36fa27152567fc"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","b27686aee9b289c6a53afbc3e8079c9a"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","a75b16eeb764fc7aee27e1a89472a33d"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","3285bebedd217635332358dc14a220ee"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","ca643ab0561cb1c0284666032010c759"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","3da2537b3424528394759de1e9a582d0"],["/2023/05/05/质数拆分（JAVA）/index.html","a57f77a5a711ffe1b2625a3a3a22cdb3"],["/2023/05/05/闹钟定时程序（python）/index.html","0c52844a3bbd7e2018bb67305d17b5e1"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","1d73021411fca85dea639d0498abd05a"],["/2023/05/07/GCD（JAVA）/index.html","50fa5da83555be4afd1a6b22573d60a8"],["/2023/05/07/七段码（JAVA）/index.html","7916f805be3e0fbb72fd809c7fe2bc4f"],["/2023/05/07/全排列的价值（JAVA）/index.html","0746c4a8100cead776c7235465a36044"],["/2023/05/07/双向排序（JAVA）/index.html","8512a59a898a0f8647671979bca9e399"],["/2023/05/07/四平方和（JAVA）/index.html","53188fc7e668e926917740b033799a53"],["/2023/05/07/回文日期（JAVA）-1/index.html","e317618aa343d4a665cfd86b0d903913"],["/2023/05/07/山（JAVA）/index.html","42af710cfe1c1a48caec7d994c22f78f"],["/2023/05/07/数位排序（JAVA）/index.html","1f4ac05b033253ef49e08e0380ce3407"],["/2023/05/07/数组切分（JAVA）/index.html","7014c2b19ced23023d56528a9c632cb3"],["/2023/05/07/最优清零方案（JAVA）/index.html","906792dbdac40588b208013dc4f863f4"],["/2023/05/07/最少刷题数（JAVA）/index.html","0fbd9f3ed8a4fd143a581a68cf250b32"],["/2023/05/07/杨辉三角形（JAVA）/index.html","ffd71f668a3db79e66a074902f19256f"],["/2023/05/07/求和（JAVA）/index.html","3110f4d139757e2edfda1947be50dbbf"],["/2023/05/07/求阶乘（JAVA）/index.html","18c8815c95025641a817a96d6ea0721b"],["/2023/05/07/牌型种数（JAVA）/index.html","79198a60ee99d04e0182bd3e62401c8b"],["/2023/05/07/猜字母（JAVA）/index.html","9e652cf3d4d6f2e01bd7c28e693a2f1e"],["/2023/05/07/路径（JAVA）/index.html","3da83b58e50bf8baaed9a99273533b46"],["/2023/05/07/青蛙过河（JAVA）/index.html","e4c07df5a570dad4b5776a780d75197d"],["/2023/05/16/重合次数（JAVA）/index.html","7616bb517ec6b18534d3bbe59f7a5f59"],["/2023/05/22/左移右移（JAVA）/index.html","ca315ed593c1f1d756d83b528700dc49"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","99cd9925f47fe1ae0ed851cbea1b3d87"],["/2023/05/28/本质上升序列（JAVA）/index.html","c0c897b111761bf2f44d9e1a6b04075e"],["/2023/06/07/方格填数（JAVA）/index.html","58514a9ac7ddfe981db7fd8ebb43ea1b"],["/2023/06/09/合根植物（JAVA）/index.html","d98d31ef1973cf2c165b77a7c7860d0a"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","11336adde983b31b5b4d386c1a9e4a7a"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","931c838002efcbfee9d85e48e369b948"],["/about/index.html","9b15f9c7b85ed4260cbc5e42f072a099"],["/archives/2023/04/index.html","541d5262a0bb1224d53292ae41b8b8e6"],["/archives/2023/04/page/2/index.html","46e3831b85d4d30a183f309abcd35b1e"],["/archives/2023/05/index.html","2af7eb5a2b5afb6496d34686b61dcccc"],["/archives/2023/05/page/2/index.html","17cae1a0d9924cca7ef44c62a3f27fd4"],["/archives/2023/05/page/3/index.html","51a052bf3a9a1ed06a4e3afb4ac7b8ad"],["/archives/2023/05/page/4/index.html","2c61624b900926e9f3534d55b5ea0a4a"],["/archives/2023/05/page/5/index.html","62a28c9386f2960ac0b4bf16b93dc19e"],["/archives/2023/05/page/6/index.html","bc23504b4b534a49f65637b651d5f3a7"],["/archives/2023/06/index.html","60dfcb8089abc27a1c4d3981a6e14846"],["/archives/2023/07/index.html","e6ae27ac1ba9501a45187ff2f9856632"],["/archives/2023/index.html","50f440d862e63a2c0249331327328211"],["/archives/2023/page/2/index.html","5acc7545a58457d8471470be9aff966d"],["/archives/2023/page/3/index.html","9991f3042ebd5d10c5bbf59479dc4a9d"],["/archives/2023/page/4/index.html","2dfe6032d07c15f68b46f0fcda15b257"],["/archives/2023/page/5/index.html","2f67485db24e7bff53a36f548487d6b8"],["/archives/2023/page/6/index.html","ba0b3e51145e021d44e81a6e12da7014"],["/archives/2023/page/7/index.html","8fbe54ba1acba6306211e70b13062d6f"],["/archives/2023/page/8/index.html","9ac92c8b3e5596d29b9a8b11db33c305"],["/archives/index.html","4081b1882c2e5cbdb068e80a8ca27120"],["/archives/page/2/index.html","aa8111b6654c4c8b17ce3a705e649d25"],["/archives/page/3/index.html","24979190a419ddc9365f9b73345446c1"],["/archives/page/4/index.html","bf0cbab360ac18c938cabb39c73d9fb1"],["/archives/page/5/index.html","eadef70193e27bb44c3cfe8b990fc691"],["/archives/page/6/index.html","23a0c146c362a5afc26a04eff261f4f7"],["/archives/page/7/index.html","bfa8c19aec753192209673a0b55617b9"],["/archives/page/8/index.html","b1093e2d88965b8363b19192cf7a4dc6"],["/categories/index.html","5bc66ee634cf7cf42768805675427642"],["/categories/java/index.html","241b7e13a1f0bcfb74e6022c06cdaa85"],["/categories/java/page/2/index.html","2dcfeb4a51da1eca87e9fdcb3d012ca9"],["/categories/java/page/3/index.html","2f95e49e04a455ad2989dddd6921d972"],["/categories/java/page/4/index.html","57fd6d8e661394a6eab2e83948a9da57"],["/categories/java/page/5/index.html","cab8b74e47fedafc9ba47198d94579df"],["/categories/java/算法/index.html","33b6fc7792a024417c94d163aa0ab66e"],["/categories/java/算法/page/2/index.html","ee8a7daa5f7a68caf9b980ecb38df4f8"],["/categories/java/算法/page/3/index.html","13be928a30ed56288dc29652039292f0"],["/categories/java/算法/page/4/index.html","d3bcdaa0f71c9e4b8a2d6772c9e124b4"],["/categories/java/算法/蓝桥杯/index.html","3090a864fc9256d936a6c0d1116d9062"],["/categories/java/算法/蓝桥杯/page/2/index.html","d9c0919ab120735a92a41dff391e42aa"],["/categories/java/算法/蓝桥杯/page/3/index.html","e8636d98062811f68d1c281aafaec6b6"],["/categories/java/算法/蓝桥杯/page/4/index.html","8c4055d787cca53320e830b3fcf5c2a0"],["/categories/java/蓝桥杯/index.html","da9f7d607cc081053eacc33f7ce28dbd"],["/categories/python/index.html","a7de84d8b033d25fa2f0123490bb41c3"],["/categories/python/page/2/index.html","d387e4488d6d100405943dcfe3f7263b"],["/categories/python/page/3/index.html","16fd17d7ee86cad006fc2c16eb0e442b"],["/categories/python/蓝桥杯/index.html","a48174d242f7ab265dbf8cf01bb01424"],["/categories/python/蓝桥杯/page/2/index.html","97c209c44d5d90867f983ed1838e3281"],["/categories/python/蓝桥杯/page/3/index.html","93d9ee67af72aecfb4fe65db2f7d8051"],["/categories/python/蓝桥杯/冒泡排序/index.html","2899c4ac5d6318b1c8df39a1f6554270"],["/categories/python/蓝桥杯/结构体/index.html","66ab9a4ab83fccf0ef0fc302c52d2d46"],["/categories/python/蓝桥杯/链表/index.html","86718a7837832d5d9e1a358c713530dc"],["/categories/教程/index.html","c72b91f91679fb20541d5add0aa2dd60"],["/categories/日常习题/index.html","0125cceb2a955013791e40fa35fd775e"],["/css/index.css","22943828075c56a01cb0542ca0eca399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","9743ef5a41d315ffdfe4d1a16a93a4d4"],["/page/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["/sw-register.js","48feaf316c9db1c2a83632bf5f848493"],["/tags/index.html","16babb1f181f13fe3f9c2e9dde43176e"],["/tags/java/index.html","405db7d8c1c1501ac284602461f1f9b5"],["/tags/java/page/2/index.html","cb9fe678778fd462074de7db4963718c"],["/tags/java/page/3/index.html","5cc4d7a1488b549e30f3861082e46509"],["/tags/java/page/4/index.html","b17170e7be25f2628add2ddfa0923fcb"],["/tags/java/page/5/index.html","0b5b5d07711df7a390ea4360fa82c7be"],["/tags/python/index.html","39b61c0509f16f4223501a51cfe8a795"],["/tags/python/page/2/index.html","18c8b796ad16ec23b4a6d2998f2575ec"],["/tags/python/page/3/index.html","e9d8adcb8773677872b0712ceb8b122e"],["/tags/冒泡排序/index.html","4580f4c97829c9becb0453b8bbf27862"],["/tags/算法/index.html","7529adfdb408cfb8bbd59aa2d01660c8"],["/tags/算法/page/2/index.html","e1890ed59c29d3fa44a0a6bb1610743f"],["/tags/算法/page/3/index.html","5fb8c9faa0815c42766253b05162655d"],["/tags/算法/page/4/index.html","8135fc635ca84ce9592584de9ad21aa8"],["/tags/结构体/index.html","0bdbb15d4439e3548d0dd1dcd2e78017"],["/tags/蓝桥杯/index.html","c21da8d1f2d71fc19f1bcf69f5346e3c"],["/tags/蓝桥杯/page/2/index.html","3ddc1585902d82ecde6e161217abc4a4"],["/tags/蓝桥杯/page/3/index.html","1db30dee9c5f7fc1651ad6432db7be0e"],["/tags/蓝桥杯/page/4/index.html","93d81b22bc3f08419b70cef2242ce42a"],["/tags/蓝桥杯/page/5/index.html","192818fe41d8cf677674416a71ee18cb"],["/tags/蓝桥杯/page/6/index.html","3407b1315ceed5b26297fa4a0885151b"],["/tags/蓝桥杯/page/7/index.html","e235b6d627c95f5678cf5171c31a305c"],["/tags/资源教程/index.html","cbf948c9c79df2cd1c6e0c9760aa058d"],["/tags/链表/index.html","70bef7f4734d30c7eb8696ceaf8ba0fa"]];
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
