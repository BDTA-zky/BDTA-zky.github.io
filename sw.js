/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CentOS7安装时直接跳过了安装信息摘要页面的解决方法/index.html","867897d4e70ceba1e4aa1ae267a15471"],["/GCD（JAVA）/index.html","1e4b447deb320a1abb13848edf2bde35"],["/Hexo-GitHub搭建个人博客/index.html","382e3dbbd0b4c1fb07fa9ed04dedd5ce"],["/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","0fcbfbc9b87ed13270bb4813c907efb5"],["/LeetCode46-全排列（dfs算法）/index.html","616520446b620c713922b75ea70d47c5"],["/Python150题day01/index.html","97a5292f4b8a44882e51b44731ea563a"],["/Python150题day02/index.html","33c415d94ff556e724ffa8b9ca69b084"],["/Python150题day03/index.html","29b51d3479c4ecdbe5481560cbc4e9dc"],["/Python150题day04/index.html","17cdf7489e0c9ead7a5f3cd9c300cb9c"],["/Python150题day05/index.html","78812d56bac4cbc9860fd92c827c198b"],["/Tomcat部署项目后，验证码不显示问题/index.html","20c8a54c845d20a2739b1f7e6a6fc6cc"],["/about/index.html","fe28d6e1cbdd7e7dd0c6ecfde963d445"],["/archives/2023/04/index.html","44a5ef7f4a8f8d1dba83a374d9f91f75"],["/archives/2023/04/page/2/index.html","9b7315c9b88b3a42a848a8d88b6d508d"],["/archives/2023/05/index.html","ca1f217f5b0259134b4534ff6776011b"],["/archives/2023/05/page/2/index.html","9eb3f7dc4fcaee64a7670dd2a66c3854"],["/archives/2023/05/page/3/index.html","d678f2a8f82c1a07a9d1735758b00228"],["/archives/2023/05/page/4/index.html","84ad610553fab9d3817043206b58c253"],["/archives/2023/05/page/5/index.html","f6f462ef5876fe7c7c678a4e12a6835a"],["/archives/2023/05/page/6/index.html","4c2f6dcfde1ce408605d9126f4bb2753"],["/archives/2023/06/index.html","40adc2db1d9bedce583d11423aa6de50"],["/archives/2023/07/index.html","e244a510fe5e85affe546851eba2eb50"],["/archives/2023/07/page/2/index.html","6250ffa96bd6f9c32842f251bec17a40"],["/archives/2023/09/index.html","5de7192158b3ce0c0f0564326dd602b2"],["/archives/2023/index.html","f065852462e4a1eb7d346cbff08bdb9f"],["/archives/2023/page/10/index.html","a3c932b36ee9b0970572ca40aeca51a2"],["/archives/2023/page/2/index.html","dfc2c5abf174f4236b3e8c8a67e1c076"],["/archives/2023/page/3/index.html","67584f3e3a0cc6a7f99c309ca04c708c"],["/archives/2023/page/4/index.html","cb721f32e39ddce38d15d58c1efd26ec"],["/archives/2023/page/5/index.html","ca5233e1935eb1a889fe5f1cc1674002"],["/archives/2023/page/6/index.html","6486d9563a92f65a85da6e12595b7d04"],["/archives/2023/page/7/index.html","cd94719f7a587bf25d7f309022542340"],["/archives/2023/page/8/index.html","d8f6a28c442ffd8f2a162b7e164f4bd4"],["/archives/2023/page/9/index.html","c74eb5b8069bcfd7eb62ee3f468d34ab"],["/archives/index.html","63b8da454fa502df81db421d4f02c9e5"],["/archives/page/10/index.html","c5f252de173dc76d81e575b8deac78ab"],["/archives/page/2/index.html","5b42c067a6d71df61cfc008a18e2354b"],["/archives/page/3/index.html","0055bd540d64fcc14a38f0bc0db3e9c0"],["/archives/page/4/index.html","09a7834b6bcda06d0aff97e21b41db52"],["/archives/page/5/index.html","ae589e2f2ad55bbbb5e1baeb838235d3"],["/archives/page/6/index.html","84d057ea364fac2e335a0d9eb15601ba"],["/archives/page/7/index.html","9460f9fc3f7e239d55c33c46ece30139"],["/archives/page/8/index.html","5054b6d81cd70235a06c5f31c070e67e"],["/archives/page/9/index.html","a39b7e58f5e7fe1372f7418b018f2aaf"],["/categories/index.html","70280f2d1d667a10eaef47af5c334665"],["/categories/java/index.html","5b780186232abd4fdec9662e55428261"],["/categories/java/page/2/index.html","2e6fdbf348f5b35a17503dc3e16972a6"],["/categories/java/page/3/index.html","5a7d35d53f9d9a53bd176352452be0f3"],["/categories/java/page/4/index.html","10302a9090ba4b53315c48d57723458c"],["/categories/java/page/5/index.html","79408e945456475663bc9c2005e073fa"],["/categories/java/page/6/index.html","878c2f4a08a9778d0611093337a16a0f"],["/categories/java/算法/index.html","fc66bd26bf8936e84c6179fb4da64751"],["/categories/java/算法/page/2/index.html","9fa9d69b925254e215f14b9c9c816232"],["/categories/java/算法/page/3/index.html","ba259f49348df0ecf46d9677aa605a18"],["/categories/java/算法/page/4/index.html","c3be44594e404abda4876a5b612b75c0"],["/categories/java/算法/蓝桥杯/index.html","30635b97ac276899b7f2530565357d55"],["/categories/java/算法/蓝桥杯/page/2/index.html","8eb51a7567c3b0ddb641029181542bd4"],["/categories/java/算法/蓝桥杯/page/3/index.html","99bed04417f40215febaa031d637d4ed"],["/categories/java/算法/蓝桥杯/page/4/index.html","914c30fa4cc1c22540e91534b1b4ba4e"],["/categories/java/蓝桥杯/index.html","69e2cf6a0fb7bb0342c5ad275739815f"],["/categories/java/蓝桥杯/page/2/index.html","ce2a928fe1757fb2ee013fded91d359c"],["/categories/python/index.html","39c7c06a48ef4ce936cbb0b99ce01202"],["/categories/python/page/2/index.html","313746674a72224fab6c0a238d6227e6"],["/categories/python/page/3/index.html","fbf0bab92693f72656a9d26221efdbda"],["/categories/python/蓝桥杯/index.html","66d37b1e3bbf6d96a5fbd081cf9060df"],["/categories/python/蓝桥杯/page/2/index.html","7108259c25ba346f0c3dcea4ae899196"],["/categories/python/蓝桥杯/page/3/index.html","47973f773d71b3bb0ee31b49c6de8fca"],["/categories/python/蓝桥杯/冒泡排序/index.html","c54026860546bdc4e206c0bf419f2a31"],["/categories/python/蓝桥杯/结构体/index.html","7bf75c78a7443e2995634968e88add2c"],["/categories/python/蓝桥杯/链表/index.html","f5f4303aba3702c516f1d0de516bf4d4"],["/categories/教程/index.html","c5286a54a6930d79335c6ab96eb72a1f"],["/categories/日常习题/index.html","1cb6a3da5d0e6ae64a817ad9f8955424"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","d0c730d88dfa778d2f31139953f384ed"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","599f4256b3adbd5a152392079983b0af"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/k倍区间（JAVA）/index.html","64b1c44f0d573aa756ee3977ae088935"],["/link/index.html","06219ff14220f8c5b4d47bb90828d8d8"],["/page/10/index.html","9eadbef46963b8713b6a90412861b362"],["/page/2/index.html","2e5d06f9210a7c32fc942af9e1bda6ca"],["/page/3/index.html","34270683a7924a6f5af1f483786b0ee2"],["/page/4/index.html","ccea04f31f41d27cc5fc8b83b92c7bc4"],["/page/5/index.html","0eba8aad83fee044873b67dcbefd6214"],["/page/6/index.html","4a1f885c090b860bcda0fe387fb6aa6f"],["/page/7/index.html","a8f69f2754978bed379f15bd8a2637db"],["/page/8/index.html","e77f5bbcfb59cc3e8ecdfb6946caea14"],["/page/9/index.html","1673edb2b2281e144d0c6dd87fa90d6d"],["/sw-register.js","43e28d9beead7c81f4d3f0660bc67e3f"],["/tags/index.html","c211d6222a08097d21289dc65671d4ea"],["/tags/java/index.html","9320ff974071bad1435067735bf75ac4"],["/tags/java/page/2/index.html","8a0f58f973c37aefd1e917bf95f31604"],["/tags/java/page/3/index.html","1c7e15686154dc01b6b9df8a3458a1cb"],["/tags/java/page/4/index.html","f3e9f23ae19bb499cc94ac339ca793b3"],["/tags/java/page/5/index.html","b2e299c42c11465906c24831fd622bb9"],["/tags/java/page/6/index.html","7605ef7dd05c9413e3d1da4d6a38b408"],["/tags/python/index.html","a620af9a45a2b34f5e71648a27814360"],["/tags/python/page/2/index.html","ed0de45d0cd87c987a08eaec9c6c3f4f"],["/tags/python/page/3/index.html","c911fa8a6b3f3ce1cbb988bee7b36500"],["/tags/冒泡排序/index.html","f37f3d01d81bb0a8a05f597d5f09f938"],["/tags/算法/index.html","eea5f6dd66abfbff4c33be7050311358"],["/tags/算法/page/2/index.html","8d586562c1facd0515f14914f26daa10"],["/tags/算法/page/3/index.html","63eb6bbeee960783f20614431bcb5432"],["/tags/算法/page/4/index.html","31e02ef194ae2be4064b79e5f734f850"],["/tags/结构体/index.html","6bf1610b78d3ea9cf3806693fe87aff8"],["/tags/蓝桥杯/index.html","e09b795639441b1537f79adf1f638736"],["/tags/蓝桥杯/page/2/index.html","5448046359cbbc6b8df423de72365df1"],["/tags/蓝桥杯/page/3/index.html","e4ecf4cf04b59da0bad135dfd1ec401b"],["/tags/蓝桥杯/page/4/index.html","cfe78a479a724cc822894c912cc76b2c"],["/tags/蓝桥杯/page/5/index.html","695c0f9e7a4b36a50072db8781b3c5bf"],["/tags/蓝桥杯/page/6/index.html","dd6817164002c528aa25e8d52b89c1eb"],["/tags/蓝桥杯/page/7/index.html","5b5339c6cad65537a4a2fd1b0823de78"],["/tags/蓝桥杯/page/8/index.html","f4ef6e59b1586596bdd0e9d832fc82c2"],["/tags/资源教程/index.html","8fdbc65820551cceea7dfca508326f8b"],["/tags/链表/index.html","363ce15141db0915cab19730dcdcd05a"],["/typora/index.html","4e85e524dfe90b0ec4f7c4659ffa2dc3"],["/七段码（JAVA）/index.html","f6d2e9ff0db5f984173ccfdad350e611"],["/作物杂交（JAVA）/index.html","5892aaa5cd2f80f19aef04d406cf4357"],["/全排列的价值（JAVA）/index.html","d44ec435985f7cde9396fe08ce282432"],["/包子凑数（JAVA）/index.html","0d9adf1d2d8f06e3ff0b514d4116482d"],["/双向排序（JAVA）/index.html","25fa7a146747dd3001ada061b8875283"],["/取球博弈（JAVA）/index.html","a490062245fee526b72e4d7f7fe4dc03"],["/合根植物（JAVA）/index.html","d2d28b0604acc5342173a2498e56281a"],["/四平方和（JAVA）/index.html","a89783559b37118f6644e16081566e72"],["/回文日期（JAVA）-1/index.html","33f81afdd20400a9425ac2df302835b1"],["/回文日期（JAVA）/index.html","3f925def2b4008ce135e5820ef351b6e"],["/山（JAVA）/index.html","6b99f58f7956dada6c37f3c265bc0700"],["/左移右移（JAVA）/index.html","282e9bd1f2c4aa53a88055c1f521a53a"],["/成绩排序（java）/index.html","c3a286ad13340ab396479aec4c5fe63e"],["/数位排序（JAVA）/index.html","b0af7e47c29f769ee6ff6d2367d0a42b"],["/数字三角形（JAVA）/index.html","8d9fa5ec4d84b75c5a0176c38ebbcf4b"],["/数字加密和解密/index.html","ff3bfc5630019214de556b341529c416"],["/数组切分（JAVA）/index.html","d2fac949e21d1f67a168fd5c944e641b"],["/方格填数（JAVA）/index.html","3b6ccbc758342f201e91eaddecb4fd05"],["/最优清零方案（JAVA）/index.html","be8781a8844fca7311e4535c029cfc2e"],["/最少刷题数（JAVA）/index.html","5377e5a5583717cb1eb5ef0c09488f5c"],["/本质上升序列（JAVA）/index.html","c00820e91c15d6c2954e569f245141db"],["/杨辉三角形（JAVA）/index.html","6e1856324891cb1cab2f6c4c43780d96"],["/案例2-1 商品入库（java）/index.html","0a0c8d2d89cdc8b2f24154be9c785a28"],["/案例2-2-小明都可以买什么/index.html","3464233638b797245dd28daa46b23406"],["/案例3-1-基于控制台的购书系统/index.html","e7ea29e14c4f78536649713c00712bb0"],["/案例4-7-经理与员工工资案例/index.html","2701a5d1c0a29c908bcb56a67bdd2f93"],["/求和（JAVA）/index.html","ef25e00fdd85ceca71a7e46e7b8d1b2f"],["/求阶乘（JAVA）/index.html","4a762b349a9c22ff34869d242871ef63"],["/牌型种数（JAVA）/index.html","32b0aae36f37a46aacf7d3656ef093d5"],["/猜字母（JAVA）/index.html","39c57303d4b3cbaf472a18127628d1ee"],["/猜数字（python）/index.html","0157dd7936d933dc1a8e0f8f91e83a74"],["/砝码称重（JAVA）/index.html","23f35c5b94e98d4d5a710f9c36f795b5"],["/等差数列（JAVA）/index.html","58bae62b4d7503b7414baaea4c7a84e6"],["/蓝桥杯--单词分析（python）/index.html","bf2c68b5dd2db7f14558251ead885a53"],["/蓝桥杯--回文日期（python）/index.html","4e3d55048aca0f0d34de5d5baf77d258"],["/蓝桥杯--字母数（python）/index.html","2e32a74a29699593f9f5d9376ce63df6"],["/蓝桥杯--成绩分析（python）/index.html","222c139b312faeebfa5e27511a1b5dc5"],["/蓝桥杯--成绩统计（python）/index.html","1a11bb8fe47acd299f1ed97a8d3db09a"],["/蓝桥杯--排序（python）/index.html","cb6d2d6b82d6e3c4fd9ff9bbc76dfcba"],["/蓝桥杯--数位排序（python）/index.html","f7be7c8621636f452103b830b48b18bb"],["/蓝桥杯--猜生日（python）/index.html","c194667d890da43d75b32930a8820fb7"],["/蓝桥杯--猴子吃桃（python）/index.html","6ce5abe838161e0fe019f8de8dfb1380"],["/蓝桥杯--石头剪刀布（python）/index.html","dd0c65da20563de9ff51cfcf41ce9c24"],["/蓝桥杯--移动距离（python）/index.html","2db5a4cbf30770547ad6719f3d8cda5c"],["/蓝桥杯--空间（python）/index.html","c4703ab66eb5e8a3845814023ae8ec5c"],["/蓝桥杯--等差数列（python）/index.html","937e70fb78a3881459d129ed914e9a99"],["/蓝桥杯--纸张尺寸（python）/index.html","8f510bf73957bdda975d0d82e2261a6f"],["/蓝桥杯--结构体之时间设计（python）/index.html","b1851c2384efb670e9d0ad7698d31760"],["/蓝桥杯--货物摆放（python）/index.html","7450e1147ab2bd7b0a0ca766184d1db9"],["/蓝桥杯--质数（python）/index.html","4f8241f888c1e99bdf10810f805adf71"],["/蓝桥杯--购物单（python）/index.html","a40e3522d0231d00f3a70a8174d57dae"],["/蓝桥杯--跑步锻炼（python）/index.html","cf16112487347a83c0621b50daaa4d64"],["/蓝桥杯--迷宫（python）/index.html","d3e8e1812df3dac0fdaf509eb54d0178"],["/蓝桥杯--递增序列（python）/index.html","965f95f1fbcbf3a5dfbd4e11a2927cef"],["/蓝桥杯--链表之节点删除（python）/index.html","58e700b52c09aa6e7ebd45c09c635173"],["/蓝桥杯--门牌制作（python）/index.html","27e04bd6c9e62633efbf5d12404851e3"],["/蓝桥杯-592门牌制作/index.html","4499140c72c2e19fb5570b46cdf40263"],["/蓝桥杯-单词分析（java）/index.html","1ab3a7c37f130c12709c85bbcebcddfc"],["/蓝桥杯-字符统计/index.html","1965c357ca7886b34964f0765d7f288b"],["/蓝桥杯-山（java）/index.html","d3b005c163bd8758c1f13474eecd7c69"],["/蓝桥杯-成绩统计(java)/index.html","9afe4838f199e98b79d1f43b625fc54c"],["/蓝桥杯-数列求值/index.html","0598797cfdc8a103185e052a30804661"],["/蓝桥杯-数字三角形（java）/index.html","ab0d2d2772e148e87334284e4d0032ab"],["/蓝桥杯-既约分数/index.html","6fd51b655005abc25df98630136a5166"],["/蓝桥杯-时间显示/index.html","d3c9ed21373aceb2c3d7071180db7d36"],["/蓝桥杯-最少刷题数/index.html","298fefcb2a6251fe823958d458aae06b"],["/蓝桥杯-特别数的和/index.html","0a78beac309c36154951039abdc2336f"],["/蓝桥杯-蛇形填数/index.html","96b0b649ac3454aa97539b30cd360e09"],["/蓝桥杯-跳跃（dp）/index.html","46cbbdea7aee82c9dec0c5275a057454"],["/蓝桥杯-链表数据求和操作/index.html","ff0cc706e6118f772ce1eea3aa8f9961"],["/蓝桥杯-阶乘计算（二分）/index.html","141569c59ef79398e353ae5d89518c4b"],["/蓝肽子序列（JAVA）/index.html","c9dceaff00d52cd890022a5c37bbaffc"],["/计算球体积/index.html","e3613b4e9517e7a7a93a2c72f181c180"],["/计算矩阵边缘元素之和（java算法优化）/index.html","17240491f5551ef8f331c0bc99dd25ac"],["/质数拆分（JAVA）/index.html","f30ccd046890eb315301d8724c2191ce"],["/路径（JAVA）/index.html","b13c634fde22b8117408c6afcfd8b8d7"],["/重合次数（JAVA）/index.html","6199886ebe28494203404355cdc05c4c"],["/闹钟定时程序（python）/index.html","a2c3b056e9a415dcb5242839812eb0ee"],["/青蛙过河（JAVA）/index.html","d8ee9add1da4c463d2aeb86aeef34062"],["/验证码（random类）/index.html","a92aa087660a56f878cff04e727b352f"]];
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
