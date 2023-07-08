/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","fb30d726239249a66a838d521448c101"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","fb74dbee0f640b827d08bd3f3137b3ab"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","531c671da493f62b06a228982b8c8753"],["/2023/04/22/验证码（random类）/index.html","207d6fd9b92d80390fe99b31ff2ffd12"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","d614bff20e8829b4355e1e234173d2ac"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","4e160561f568eae230e890b4ffa8d4f0"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","78512b01abbfa179ffb1c969205b5cd8"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","862f31d1b0fb0da60dab75002e62ef31"],["/2023/04/23/蓝桥杯-山（java）/index.html","d532233131318c5db5b949ad44f2d288"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","d3474abe6f992a13b919d9467ffa142a"],["/2023/04/23/蓝桥杯-时间显示/index.html","30837d9b7093d057080e0b9891cf7fab"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","8be09ec5d0b007f415381455676e3855"],["/2023/04/23/蓝桥杯-特别数的和/index.html","5daf4c6b30eab27fec1c6a1c85508ebb"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","3f89d4d55f3542ce19a9670c40294920"],["/2023/04/27/案例2-1 商品入库（java）/index.html","b1c8f49eedf09fccf369f1ecef5e317c"],["/2023/04/27/猜数字（python）/index.html","6bb2b2b4057414f82d9af3d8b3087375"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","d2b504013e594ca1fd45bfb4b84b4220"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","b4fa9a3969ff7de88bc4970ecc503290"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","66b76a90ece54c3e2bcb94c07e0549a2"],["/2023/05/02/数字三角形（JAVA）/index.html","7aad4a9608f21e7eaef577cff2f3a957"],["/2023/05/05/k倍区间（JAVA）/index.html","002a59b4fbdaac2eabbce8085a9738b0"],["/2023/05/05/作物杂交（JAVA）/index.html","d147fb0b598f974f9cb18c07b5146eab"],["/2023/05/05/包子凑数（JAVA）/index.html","a592a1deb2e26eed184ce4cb5b75d857"],["/2023/05/05/取球博弈（JAVA）/index.html","44d6c1e2084c59a229a8df2be0bf8f40"],["/2023/05/05/回文日期（JAVA）/index.html","2ae1b84442b4a8214491d581cac96baa"],["/2023/05/05/砝码称重（JAVA）/index.html","e3daa54ce2a1bf36af316f9b08143666"],["/2023/05/05/等差数列（JAVA）/index.html","122ace4128e9f28d68cdcfeb599e2fc2"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","7007ab97ba7cb3d65e62f6510721f3d0"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","37535eca0e91b44799068910b0624121"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","46c1a9cc03d0e5df7b362b7c879f31b8"],["/2023/05/05/蓝桥杯--排序（python）/index.html","b159abb34c13e331af85e3a4032ec595"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","3305f77458d81568dc6b8dbbe606522f"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","b9928769eb12939a7a2c58223a038e27"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","4f6b4aa7043e811f5e1ea992a88484ea"],["/2023/05/05/蓝桥杯--空间（python）/index.html","2685ce40d0e3296a7ea961126041ce7a"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","5223c016cab461719849e94d3f54d620"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","24dae06eced4e905a02cc35cc338f888"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","b4739200f5ad498b25b622a9298e5b3d"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","4349d9b0828ab927b772beb674b761df"],["/2023/05/05/蓝桥杯--质数（python）/index.html","0b3535977ce70b4d56b7b800f3c85f88"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","c8cfe39bd3b3acbdf7fb0316ca96097d"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","76613fde9b173d348ab5bc9f271959bb"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","f80513e1257339ec75de31df7093cf6a"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","2f6ddb376e2a643907d3b342863353c9"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","9c7af7ceb0f0f0b31e00a4271a06edef"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","e06ffd0c5fdf79a9ed4bb5fa12312a39"],["/2023/05/05/质数拆分（JAVA）/index.html","08a94244092d2e5d56810087c7de51c0"],["/2023/05/05/闹钟定时程序（python）/index.html","59d320deaef66e81314fe8b6275f19d7"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","560dde492da376b0083190328c181732"],["/2023/05/07/GCD（JAVA）/index.html","28f08e711c7102a7145f35d73e817342"],["/2023/05/07/七段码（JAVA）/index.html","4513afadcdc1a704c2ae7457e6c0fdac"],["/2023/05/07/全排列的价值（JAVA）/index.html","8c800421070a6cf9238f017c09382886"],["/2023/05/07/双向排序（JAVA）/index.html","e11fcb1cdefdebbcefdb06131814be35"],["/2023/05/07/四平方和（JAVA）/index.html","2bd273082d2498ff55b04debcd9e6e57"],["/2023/05/07/回文日期（JAVA）-1/index.html","6d04c4c0c7bb34124481b327524c97a7"],["/2023/05/07/山（JAVA）/index.html","691c6c0fa333983ac2768b2a131f02e4"],["/2023/05/07/数位排序（JAVA）/index.html","8690216b7063f4eba1aba2408b8e2038"],["/2023/05/07/数组切分（JAVA）/index.html","8a65d0a42f61e4ea9d7321bc3d8eec5a"],["/2023/05/07/最优清零方案（JAVA）/index.html","c3f296741f0350d34d5f8ad290d7a053"],["/2023/05/07/最少刷题数（JAVA）/index.html","b358b24a604aad77c6d73acd85afd808"],["/2023/05/07/杨辉三角形（JAVA）/index.html","29b5933fee52ebd0b87dd4a361e05ace"],["/2023/05/07/求和（JAVA）/index.html","b6a69d85828776c6ba7f511bae958dbf"],["/2023/05/07/求阶乘（JAVA）/index.html","0c5c6017b1389f46c2452126638b8410"],["/2023/05/07/牌型种数（JAVA）/index.html","dcf75884a803215512f035fa1c18dd2d"],["/2023/05/07/猜字母（JAVA）/index.html","aac0bfba8245d4bc697ee9e848819ed2"],["/2023/05/07/路径（JAVA）/index.html","27d73b553538adf0359718e26c3677a6"],["/2023/05/07/青蛙过河（JAVA）/index.html","5610f388dd7b74a121145eed0a8eaf9d"],["/2023/05/16/重合次数（JAVA）/index.html","998ad7e208fda615c52055dd7466151b"],["/2023/05/22/左移右移（JAVA）/index.html","d08314c6666b48eba86bf367c8f83f03"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","012a1edb5bf2e3139bf15fdd2030be2c"],["/2023/05/28/本质上升序列（JAVA）/index.html","8d36ee3210fbd2ac5a18129aabf95aa8"],["/2023/06/07/方格填数（JAVA）/index.html","bd87242432d59bb9adb8b0c39ac57d12"],["/2023/06/09/合根植物（JAVA）/index.html","7ffddde1fe40a75f711e13efeabc4039"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","db716f4de915652a6fc26e385b5bb094"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","8efb67acde6fdd360cdd0e74e1c8a9fb"],["/about/index.html","87798ca5a7117887383b843b32d45b94"],["/archives/2023/04/index.html","7e65001f284a612a481011a4f28a1926"],["/archives/2023/04/page/2/index.html","13ac72b6fa73b921566dfc6a1e7cba75"],["/archives/2023/05/index.html","7aa83dd49aae7498212d3a1106764791"],["/archives/2023/05/page/2/index.html","159de5338db3e20ea282f0e6b3e64e67"],["/archives/2023/05/page/3/index.html","b2627b3ac2f8dc4dc3bf302110585cc0"],["/archives/2023/05/page/4/index.html","3f20ad23f943ccae6f5fcabb66058c4f"],["/archives/2023/05/page/5/index.html","0e919dbf48e6453773ad2859086cee60"],["/archives/2023/05/page/6/index.html","d96a87b194b81f26200c9ef8213eb690"],["/archives/2023/06/index.html","3a9302dc5159e8b735157ce90c540dbd"],["/archives/2023/07/index.html","510377e385dd114c3726a4cd795e8c1c"],["/archives/2023/index.html","c7e27fed6b40305cbb17462104012300"],["/archives/2023/page/2/index.html","39f502030d4204c8b7a333cb244c7b99"],["/archives/2023/page/3/index.html","f33e374037dfda30f4d4f8ef12cdcef5"],["/archives/2023/page/4/index.html","fd2a57ac5ee1e5854c0a4ae6e4d90bb2"],["/archives/2023/page/5/index.html","c7f48fb46bb377ec7c57d1ddb9dc0820"],["/archives/2023/page/6/index.html","e3677fcdb5f47d934650ae37dfdc2cc3"],["/archives/2023/page/7/index.html","0a33741f80153c4c6a9bfec1a710f421"],["/archives/2023/page/8/index.html","8ece79a01b94e4ccb0cedc0a7261c271"],["/archives/index.html","9e2b991e01e5d218c84d495c55a5d448"],["/archives/page/2/index.html","4b50c484ac2a53508624188eac49d360"],["/archives/page/3/index.html","a19f4c03dce44eb33da0835775c31d68"],["/archives/page/4/index.html","3d4739d7dd5170e22196c52bfb1f288d"],["/archives/page/5/index.html","df3786b5c3438ee763212b12f80e9fe1"],["/archives/page/6/index.html","96c88651b1fa21605bf702effa22e1e3"],["/archives/page/7/index.html","54a20baeb875d429cab62637ca0a406e"],["/archives/page/8/index.html","300307f3c0466d7e32b1c779da489caf"],["/categories/index.html","6f4b02bb9aa74d20daca6f8323d93786"],["/categories/java/index.html","1ecca215fa7969b39dcb68d260452bfc"],["/categories/java/page/2/index.html","5d71d8844ba94eecde4a5df8caa84a91"],["/categories/java/page/3/index.html","042e41dc57059b890501d98cc8786225"],["/categories/java/page/4/index.html","a0207689aa7b692e4f8e79385d5d6281"],["/categories/java/page/5/index.html","97a89dafc5251cbe9a9799ac227370ed"],["/categories/java/算法/index.html","047cfc0b12c95e69b112d8a139c4f777"],["/categories/java/算法/page/2/index.html","fbbd38ce8163bc0d7a92f78b8a5a495b"],["/categories/java/算法/page/3/index.html","45b644c2c29c7eb98edc3131441d4ea0"],["/categories/java/算法/page/4/index.html","026abc7b1c8bcf66fcaca2b7dccb31e0"],["/categories/java/算法/蓝桥杯/index.html","a8273447e32c98183b25a797d3447173"],["/categories/java/算法/蓝桥杯/page/2/index.html","93b447f32bd46761f0ed0dbca4cb8611"],["/categories/java/算法/蓝桥杯/page/3/index.html","6a8f933f75d287e5aa3d363a44aacce8"],["/categories/java/算法/蓝桥杯/page/4/index.html","cfa8b7c531bc8ad60799868115b6b2dc"],["/categories/java/蓝桥杯/index.html","1443e479538ffb4dbd2dc011e93932bc"],["/categories/python/index.html","d672b7af71fc901d25107d6e09a13aaa"],["/categories/python/page/2/index.html","432dcd03ab325fbe58fe6f1db4b0cac1"],["/categories/python/page/3/index.html","f76db01ec5d24d9275bf72c40a59f929"],["/categories/python/蓝桥杯/index.html","4d6c3d7ca8ddcd2d945f8c64eba2ad9f"],["/categories/python/蓝桥杯/page/2/index.html","6a3511d77ecb9e21a358c482c36824ff"],["/categories/python/蓝桥杯/page/3/index.html","c29ccd80878cd1eeaca4e3daecab2b2e"],["/categories/python/蓝桥杯/冒泡排序/index.html","bf96933b9af633f38148899a2fd973fe"],["/categories/python/蓝桥杯/结构体/index.html","1786d3ae4b35f48dd87fc6c0bb25d84d"],["/categories/python/蓝桥杯/链表/index.html","46e7757efd353779226701a4e71e1914"],["/categories/教程/index.html","0f1104323fc7bc9de245c4d514bce379"],["/categories/日常习题/index.html","d13cd15a3c3f854de2697124dbcc666f"],["/css/index.css","22943828075c56a01cb0542ca0eca399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","13d0bc34df3d28ff8ee90bf4702ce54b"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","64b2a6e7be222a01a88c6114a260f4dd"],["/page/2/index.html","28bcbdbea646b91e503df24ccd7a1577"],["/page/3/index.html","515341ae3b1c842df10fcb32b0d12e94"],["/page/4/index.html","3872026f52cb8138b7b18fa36b76ed90"],["/page/5/index.html","89783205be79f115c3222a02b6491e96"],["/page/6/index.html","449b4c2ab2d0ffb636aac35b552d4fb6"],["/page/7/index.html","6f11757b155883d20bf8efc655dbc547"],["/page/8/index.html","9bd6e31cae6849d24b57501508c9e07b"],["/sw-register.js","1d4d80d32e6660a99c33e439171ca036"],["/tags/index.html","81dbaa88535d425522fcfc47e1054a75"],["/tags/java/index.html","6bcaa484b8779223c319fe5318ea4081"],["/tags/java/page/2/index.html","c38d3ea7a23fed9b435decf568e5ec14"],["/tags/java/page/3/index.html","815e2a7d2decc98b7f7a943222bd51fe"],["/tags/java/page/4/index.html","438d863f7dff3575a281ebddc34f02bd"],["/tags/java/page/5/index.html","45e65228c7eeb6d8883e018be6399008"],["/tags/python/index.html","9abefddb6b5325ce6c528892127f774e"],["/tags/python/page/2/index.html","0f655aff4108195e50fae536a702686f"],["/tags/python/page/3/index.html","14d6304395d6020cfb797cb1288972cf"],["/tags/冒泡排序/index.html","753db7ec7cc5d6fdb03ddea171de91f7"],["/tags/算法/index.html","e7f10386635249c90a35c5bda12c8910"],["/tags/算法/page/2/index.html","e621c6249f66596f81eb06f223a077be"],["/tags/算法/page/3/index.html","6562ef322e1a38fcb8b88162024e05e3"],["/tags/算法/page/4/index.html","7cf4f61a640111e97bc1476b99fe91cc"],["/tags/结构体/index.html","60f26669aefe4064356f42289c316434"],["/tags/蓝桥杯/index.html","f597004508e34b97d597ec55c01f0b22"],["/tags/蓝桥杯/page/2/index.html","ae5118b4cb0990c29223579d0a6046d7"],["/tags/蓝桥杯/page/3/index.html","3768f53866656e055dfbc625f085e97f"],["/tags/蓝桥杯/page/4/index.html","ad0a12216e65f680e13520feb01ad1f1"],["/tags/蓝桥杯/page/5/index.html","905b9a4a3585cf2de00cd419d99205bc"],["/tags/蓝桥杯/page/6/index.html","6acd5c567f7873940778c6ee785f9873"],["/tags/蓝桥杯/page/7/index.html","c55090bb8b4e82e2cb12b743e92cdfa3"],["/tags/资源教程/index.html","af0625d1b640a11178cd8d36ce106990"],["/tags/链表/index.html","3f89ff64ac289a01ee05ce2101c8efc9"]];
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
