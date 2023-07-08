/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","30e3503ea751e0fbbbb8836d0eb2c976"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","4705c4c2d2dbfb447bb05780e2a3806b"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","3357945cfe00ced9714f40eb813d8390"],["/2023/04/22/验证码（random类）/index.html","72a6204c503f50a6b3a3c6f7431fbd95"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","a200243d1f1dea0b68d118290573d637"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","caa8a72cd5a8379d2122eda3d2765ac7"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","0384b09969250a4d75791b5439772a1e"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","920d72db3c8df6f30974b751cd27f7a2"],["/2023/04/23/蓝桥杯-山（java）/index.html","247b3649858e717fe27760a1d5e20b25"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","c18c913f36eefb37f42084b61ecb417e"],["/2023/04/23/蓝桥杯-时间显示/index.html","0d20ef3d8f9f9f03d991374ab1375a05"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","3d2c3e3212481d8af196852ad0487c5f"],["/2023/04/23/蓝桥杯-特别数的和/index.html","f722054008cbe16a32c2662e34f58823"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","7d23a20826d27bc95fad07069fbd69a8"],["/2023/04/27/案例2-1 商品入库（java）/index.html","2bab741ac3961b57865bcc0ee2f8e7cd"],["/2023/04/27/猜数字（python）/index.html","799d59a21afb61f7888a539717395bcc"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","ecf2688af81500b896090502924a7c2a"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","ac34a457a50a1bdc972d2e7eae293b6e"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","02a768e8eb8ceb13ec0e98abf07e25fb"],["/2023/05/02/数字三角形（JAVA）/index.html","66e71e778266e1d9a3408f3c1e492727"],["/2023/05/05/k倍区间（JAVA）/index.html","8c93d58d29e50f1e70eb1e5124f38562"],["/2023/05/05/作物杂交（JAVA）/index.html","51a0067b53c9e22742dc7670f62920d2"],["/2023/05/05/包子凑数（JAVA）/index.html","0c2ec87d343fe023ff6780a7c310ba65"],["/2023/05/05/取球博弈（JAVA）/index.html","94e5376331adc5f216ec2d9105b3dc7e"],["/2023/05/05/回文日期（JAVA）/index.html","835dc34d1595b3f88f0ca2035a8068c1"],["/2023/05/05/砝码称重（JAVA）/index.html","ecdaf4e0bf69ff74aefe7461c4b6892f"],["/2023/05/05/等差数列（JAVA）/index.html","13864f6d86252067ca36709870d8e034"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","dd6f57b4f774944d2eca496737f83413"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","a3f8a4a28a5bc8fc58ce1df36fd263f1"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","a82d7b0d80c42fc47b12a321d08f27c4"],["/2023/05/05/蓝桥杯--排序（python）/index.html","406276072d5b5fa7c1aa504d5dc53172"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","ccc7ecf854b0f9fe093aff00049ed502"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","0e15bb83b1e445c9417bb34446008369"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","95decc5f0715778da9d72857aa549f47"],["/2023/05/05/蓝桥杯--空间（python）/index.html","4c43fe043b71609019476a5a351b435a"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","086d264ee67760ef30598dc19224e5d0"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","a24ff6a51566249265856c339d4564a5"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","b3f4cbff7f8ef069a621257c52aa87c8"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","59ce072e1d92eba63b6218e61e0067e1"],["/2023/05/05/蓝桥杯--质数（python）/index.html","b83c7f3e5c2cdb7b08fdc62e6194d3c0"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","e0c9fe40bcb0fc94c40469971706f753"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","f7ed14ecdb690229c11b871780c6bac5"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","3455edce67392c8e8a4cacff073ca866"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","a78461e158454662dc64fc999c318580"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","9ca3049173e03897b914cf409a29128f"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","cd048ed5f03b39c70f614a945d6b1b33"],["/2023/05/05/质数拆分（JAVA）/index.html","f9368df621ef8833391fc61d45ed6bf3"],["/2023/05/05/闹钟定时程序（python）/index.html","6eb8c8bfb12bcdf8646a716d043e9a3e"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","85b1fc1d9dbe5f41ba7d67157a74b743"],["/2023/05/07/GCD（JAVA）/index.html","c7eb5dfbb6e2f22f1697aa02b7efb9af"],["/2023/05/07/七段码（JAVA）/index.html","16a442be789a0068124a68e9ac4e2bc2"],["/2023/05/07/全排列的价值（JAVA）/index.html","b9cf458c2ecfa62ea35203188d5955f4"],["/2023/05/07/双向排序（JAVA）/index.html","07e4b0b0511af560214eee563c502962"],["/2023/05/07/四平方和（JAVA）/index.html","af342bd00190ac2d0ec338ccdb18a49b"],["/2023/05/07/回文日期（JAVA）-1/index.html","e59edaf265404f8127f863e6fa945e90"],["/2023/05/07/山（JAVA）/index.html","e3ae7faa92b6e58c97f40f44408b5b18"],["/2023/05/07/数位排序（JAVA）/index.html","cc3e3702e7254412b95dad159a9ccb56"],["/2023/05/07/数组切分（JAVA）/index.html","09612a52cdadac0d14bf1a328cc2cb3e"],["/2023/05/07/最优清零方案（JAVA）/index.html","c3ed9bc4d083984ea4de1ceee3ca7da0"],["/2023/05/07/最少刷题数（JAVA）/index.html","7fb6d29a5069fcb78ea535ec2541061a"],["/2023/05/07/杨辉三角形（JAVA）/index.html","96df5c7b4a3d27b971671eedf6c0102f"],["/2023/05/07/求和（JAVA）/index.html","f2b4ec479e8bd9f15d288fcf854ab788"],["/2023/05/07/求阶乘（JAVA）/index.html","8418e1e85b2d62e2e833f480bb84feec"],["/2023/05/07/牌型种数（JAVA）/index.html","ebb30131fd44d8019d7b3f82cc03d4e9"],["/2023/05/07/猜字母（JAVA）/index.html","6f420cbdc8203419d5cb205ec94e3a9f"],["/2023/05/07/路径（JAVA）/index.html","49ab55f5e0e6e5e0bf75ce13f9ff98f6"],["/2023/05/07/青蛙过河（JAVA）/index.html","3bdc32a3f3ae5bf732166f2bbbc327dd"],["/2023/05/16/重合次数（JAVA）/index.html","414634405b9af6b7ce18b646193aa9a7"],["/2023/05/22/左移右移（JAVA）/index.html","dc3a03568ed12664fcba9d6e3bfb4619"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","339f2c019bf3995de09125c48f920617"],["/2023/05/28/本质上升序列（JAVA）/index.html","f67679a88d5255748556eeac7b6c9d32"],["/2023/06/07/方格填数（JAVA）/index.html","5e73dc92c613e41d0432c497ba9efef2"],["/2023/06/09/合根植物（JAVA）/index.html","6d7a989a5e5144795417bf1d51b65bcb"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","00e1b09817f4c5de80f0261ccfc3fdbe"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","91588d49b4cf4d0490f01904f8ca57a5"],["/about/index.html","8e8246f38080afd44f5ae4d7bb7b518a"],["/archives/2023/04/index.html","1f33afc64ac39358c0f0ba8e376cf5a5"],["/archives/2023/04/page/2/index.html","5a9d5efbd07f775bfabc8cdb3d21a848"],["/archives/2023/05/index.html","ae9ba7207de3b975db8b8f2bcd42c6df"],["/archives/2023/05/page/2/index.html","1d5b6f7a385ec829f00e17b450354b36"],["/archives/2023/05/page/3/index.html","a24fced09fba8d1bcc2b6aca23a17acf"],["/archives/2023/05/page/4/index.html","a2ee4d97d06d87a87d1dc85b512656d8"],["/archives/2023/05/page/5/index.html","6c59a509b550d5a82aab02bea0fe4ef7"],["/archives/2023/05/page/6/index.html","2ac7a85635d8f57c3800cde6a7bc9683"],["/archives/2023/06/index.html","15c3c1be5ec4f77ccbd413334aaf06b5"],["/archives/2023/07/index.html","a76fe5c5134402a0ed4e74b494b7b140"],["/archives/2023/index.html","db90ac4d754a3aeb9707184c6856af51"],["/archives/2023/page/2/index.html","3a33bc631bc11d76d2b727c71d83b64a"],["/archives/2023/page/3/index.html","a033cce661e23789fc3ff6f740828a9b"],["/archives/2023/page/4/index.html","9f8542643a9893364f0e09cef881573e"],["/archives/2023/page/5/index.html","811bf372f870ebe5d988b0f1183cc17e"],["/archives/2023/page/6/index.html","b136416c8a9ccf1cb3719236454f110d"],["/archives/2023/page/7/index.html","5841a51624d62b4a31a18673d135a4fe"],["/archives/2023/page/8/index.html","8f817effb7e4e7ce4232004aea3b1a3c"],["/archives/index.html","f9fd3bfc8ad1577548d8247c2aa13834"],["/archives/page/2/index.html","5da1c161f005679d84f762337f80fce1"],["/archives/page/3/index.html","4b8fc16811081b1a422ab72708f37ce7"],["/archives/page/4/index.html","16ced1b5deec43e5e74f33acd6eaa201"],["/archives/page/5/index.html","e6a781ba2ee39c6e6ce3f178098ff467"],["/archives/page/6/index.html","8e3843c1137c53f4937aade70a72ef47"],["/archives/page/7/index.html","651925d7c8f9d156278185015ba249f2"],["/archives/page/8/index.html","430b0603786d0832648b01847ca794c2"],["/categories/index.html","dc5937323c04eb8651199b0b0945bd86"],["/categories/java/index.html","fed2d93a68c7ec5fe81355551c3104aa"],["/categories/java/page/2/index.html","af75ef0857e8eca13e79756d42e4a4cc"],["/categories/java/page/3/index.html","7c612f7bc09566974d5497065480bed2"],["/categories/java/page/4/index.html","f142810b46bfb42b55214b94996e8d46"],["/categories/java/page/5/index.html","6ba8deed9320624cb8af6f3c2f431776"],["/categories/java/算法/index.html","49615e48b396481206d65914fbc174cc"],["/categories/java/算法/page/2/index.html","8c3adb0f86de4e4ade742b8e59ccda13"],["/categories/java/算法/page/3/index.html","46d30d8a4914f8b2c9c6ba596efe3f2c"],["/categories/java/算法/page/4/index.html","1ea15be5896754dcb7dbdc08b9516e2c"],["/categories/java/算法/蓝桥杯/index.html","a3ddb065babb588b9f350052226632ab"],["/categories/java/算法/蓝桥杯/page/2/index.html","8220fc71aa13547dba42a77745a4a463"],["/categories/java/算法/蓝桥杯/page/3/index.html","8547f8cbeb1002ef0a7bec2c4d86c945"],["/categories/java/算法/蓝桥杯/page/4/index.html","d7c63055645612afda60a2511ec5d21c"],["/categories/java/蓝桥杯/index.html","c6be04c0ee0562800a109371594945a1"],["/categories/python/index.html","939e845acb90f3f4373ef943b735fbb6"],["/categories/python/page/2/index.html","b6a93efe66e38da925215cb92542cb3a"],["/categories/python/page/3/index.html","6d8bbc9871269c27086b7cce235565c5"],["/categories/python/蓝桥杯/index.html","d7d5164a5d848a3dd376a98c5ed2ebc8"],["/categories/python/蓝桥杯/page/2/index.html","cddfb556e4b77e5f658528a472cc1316"],["/categories/python/蓝桥杯/page/3/index.html","ad65d9769f3d06f13574b035398452e0"],["/categories/python/蓝桥杯/冒泡排序/index.html","4300445f8281c53cbdce7750ec82390e"],["/categories/python/蓝桥杯/结构体/index.html","de9b07cfe0c40d56ea583c426b3a59c8"],["/categories/python/蓝桥杯/链表/index.html","bccc45eb800f2f794384c16be9193799"],["/categories/教程/index.html","1ad326106ae8a304a8bddc8ca6699386"],["/categories/日常习题/index.html","da3eb25437e88a09a78727b42736a770"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","e4205f75dcbfc45a217aa9cae95dcd86"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","a58ed2b9682cf66838083712d71691b7"],["/page/2/index.html","7d9a3c7da4ef6b436555de14318f2e75"],["/page/3/index.html","d10b4ca6f02c1241ca7b1c28c98176f7"],["/page/4/index.html","aacafccebf680b8d83811dc45803109d"],["/page/5/index.html","e5e627429cd8514cc786a2bd2004091c"],["/page/6/index.html","e61116ade3bbe299cef559db47a1aedf"],["/page/7/index.html","aba044c65cee9f6123b181039b6bb336"],["/page/8/index.html","f0a2027cdea21abbba8c48eeb8abba55"],["/sw-register.js","e60fc9ff7b9ff07186734bf55f514539"],["/tags/index.html","8b991f231ff49730da2daa9e2ffea4e9"],["/tags/java/index.html","950c66b3a573e9aa972da691312df2ef"],["/tags/java/page/2/index.html","2c84a3a3bad01ad6e9a714ec708f67b7"],["/tags/java/page/3/index.html","1c7534227d8aaa10e7ea5e75f27b1adf"],["/tags/java/page/4/index.html","dd41135edbfb84e30a01cf6c71fb0753"],["/tags/java/page/5/index.html","2e60690d043bf578470d8ad76ca6f5b9"],["/tags/python/index.html","2b952b06657d2f33dda324a4aff32f02"],["/tags/python/page/2/index.html","4c304719b0bf0802e885fd77d3495342"],["/tags/python/page/3/index.html","9197d0c280c061d2110d106eec9cd057"],["/tags/冒泡排序/index.html","81d1c747c25360a7b232c4f2b1f7d50f"],["/tags/算法/index.html","5e95f2051fa7fb8cbbc4e84173b99fcd"],["/tags/算法/page/2/index.html","efd9cd0a43ff45d65f5fa3e66e47be50"],["/tags/算法/page/3/index.html","40a553e5bff0a8107276b477760d2e5f"],["/tags/算法/page/4/index.html","d14c5f880470889dd1915f8673f736bd"],["/tags/结构体/index.html","51802bd5e0a294900199150b19f36abe"],["/tags/蓝桥杯/index.html","5901a85799708690ac1e263c9407ccd6"],["/tags/蓝桥杯/page/2/index.html","a2a876f4cabb29bd214ccd9c0b1fc142"],["/tags/蓝桥杯/page/3/index.html","ed9769914f1a1df04afe6db441f288f4"],["/tags/蓝桥杯/page/4/index.html","b768c2b33d16c3cb23f044e0f4639a01"],["/tags/蓝桥杯/page/5/index.html","498a430709179c55eb52862232d48f73"],["/tags/蓝桥杯/page/6/index.html","1edea490420732f3b224c4f27bc9e4d5"],["/tags/蓝桥杯/page/7/index.html","6a659cb077e18d9526a66b34f192fc53"],["/tags/资源教程/index.html","2656ae5039740e5a6402e4c28594205f"],["/tags/链表/index.html","5e226e503ff6dddc243b44663f37097d"]];
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
