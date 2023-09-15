/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CentOS7安装时直接跳过了安装信息摘要页面的解决方法/index.html","8ef161ef296b6718c4c9cfe837a28d28"],["/GCD（JAVA）/index.html","f4563eb4cf5c7861699f5b05af09043b"],["/Hexo-GitHub搭建个人博客/index.html","801c8c763776f5f786af6cda423affa4"],["/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","d941d8abb8490beb2cb1174c1e979f89"],["/LeetCode46-全排列（dfs算法）/index.html","b40c4898da4aa1f555b59b17b42802e1"],["/Python150题day01/index.html","1a0f45bb1446734e9ef96a2d54d3681e"],["/Python150题day02/index.html","37ffd2319575af1b571cae2ba7488907"],["/Tomcat部署项目后，验证码不显示问题/index.html","debe83cbe08393acab749c1f57b16beb"],["/about/index.html","bad01ee1466ddb116c554ddce1687a7c"],["/archives/2023/04/index.html","dfba6ed36a57a903ce41a8c1f41e6b4e"],["/archives/2023/04/page/2/index.html","70c7be26070f696aec45b6da81e56c1b"],["/archives/2023/05/index.html","0886b7c859eb6a50c1bdae68c87f03c4"],["/archives/2023/05/page/2/index.html","688443f199e3524b5ba8debeb2c65161"],["/archives/2023/05/page/3/index.html","e7c2b9684451203f9290fe159f1463de"],["/archives/2023/05/page/4/index.html","efc4a6995d76fc09b4a0298daaf83764"],["/archives/2023/05/page/5/index.html","3280f77bb681a0effb68636841fc2a54"],["/archives/2023/05/page/6/index.html","8669e3ec3e41db8c00d6a7019a8455ed"],["/archives/2023/06/index.html","89603be93973d914ec3f9ecc8425377d"],["/archives/2023/07/index.html","1cf96e4693b791edfc8218f0bac77fec"],["/archives/2023/07/page/2/index.html","7af458fca81f2701f29f6d18fb3fad50"],["/archives/2023/09/index.html","3836404c053512ee37479a3b6d3e02e2"],["/archives/2023/index.html","3f99d59b45291c3993828e3fa9078fb4"],["/archives/2023/page/10/index.html","fa48afde9563b1e760ceef7515f5a55d"],["/archives/2023/page/2/index.html","85667581b13e31cc423659fb0336fc2e"],["/archives/2023/page/3/index.html","aeba104188dce37d2dc152d03c2dc017"],["/archives/2023/page/4/index.html","5be12acd783f39af4eb237eb959de56e"],["/archives/2023/page/5/index.html","2c8069770031d13547aa36e76895e153"],["/archives/2023/page/6/index.html","414538e2e73f3206eef420c47230773d"],["/archives/2023/page/7/index.html","da41692a5f3043006abf9d8d3cbbd754"],["/archives/2023/page/8/index.html","1a19cc4e864e4621a6e335d8a9f443bd"],["/archives/2023/page/9/index.html","0ae01a91281fbd50a2205ce6227464bc"],["/archives/index.html","fbf6a9a17a5b4d8a5cd37bb6d5a50f6a"],["/archives/page/10/index.html","5c1864ca9f473072546563f038fe5b81"],["/archives/page/2/index.html","7da9a95654c95267ca2d330b38439243"],["/archives/page/3/index.html","88adc3736be5192f2f6e203312787271"],["/archives/page/4/index.html","0f925c80882196c1a95734d9c4658b2f"],["/archives/page/5/index.html","7d6c378eaa9a718e842f750d320b45f1"],["/archives/page/6/index.html","e6bb2d0ef86367ae75a73600382ec8b6"],["/archives/page/7/index.html","323b9d8ebbc0516728fc976114d5ba38"],["/archives/page/8/index.html","e6aeba1b08e0d5ae808202827110449c"],["/archives/page/9/index.html","ec1d13ccfbd1d7dab487836ac3f4365c"],["/categories/index.html","47b327671bec9c3d4e28927895df245c"],["/categories/java/index.html","81d8735e8590ec127ed61b64d2b30268"],["/categories/java/page/2/index.html","99995178e50aa3b5c912bd96abe8b9ae"],["/categories/java/page/3/index.html","00ce4dea48458f8faa2e0ec874380cbc"],["/categories/java/page/4/index.html","557286984b916eb6c2ea0e2842e8e937"],["/categories/java/page/5/index.html","b27b628415eed9990c51dab299377a39"],["/categories/java/page/6/index.html","22a6a122fded0e2e5bb501d201131dc4"],["/categories/java/算法/index.html","4bdce9c6fd8e0f9882fd1618ec09e129"],["/categories/java/算法/page/2/index.html","948bffa244e4fa30583dcf1b7e3e0513"],["/categories/java/算法/page/3/index.html","b52625d99d25774f41293b8112bca98e"],["/categories/java/算法/page/4/index.html","2029cd2ce47d4ad09310fc4f13d311f6"],["/categories/java/算法/蓝桥杯/index.html","739a3133d28c127fd4b2e928a10156cd"],["/categories/java/算法/蓝桥杯/page/2/index.html","e6903f80cc1f307f07dff81e43439470"],["/categories/java/算法/蓝桥杯/page/3/index.html","609d804633344740dddf611b89db458a"],["/categories/java/算法/蓝桥杯/page/4/index.html","b792a0293ab3b074aa32eb6631a0d5e1"],["/categories/java/蓝桥杯/index.html","1e8b930075c204f96dbcbc587bd12fdf"],["/categories/java/蓝桥杯/page/2/index.html","995a232df100b0f67eb49e56f03e1769"],["/categories/python/index.html","24b3a2298be4f6386b35328036c9bf53"],["/categories/python/page/2/index.html","c2a418da61d5c196bb0ba897e0bad172"],["/categories/python/page/3/index.html","b3323bb109b303669a3c10fb0a7953a4"],["/categories/python/蓝桥杯/index.html","89b38bb93564b655b84208b7d710a473"],["/categories/python/蓝桥杯/page/2/index.html","1e5c6f0775fb9d2651a83167a13594e7"],["/categories/python/蓝桥杯/page/3/index.html","253c4832179eac0f57866fd14df54023"],["/categories/python/蓝桥杯/冒泡排序/index.html","b9e93eb2e95891833b1396af0258a6b5"],["/categories/python/蓝桥杯/结构体/index.html","d53b73b18c281049dba2277fb1dacff2"],["/categories/python/蓝桥杯/链表/index.html","db98a4eb0970f73083087ea63dd9c5a7"],["/categories/教程/index.html","faa511d023eea78578dd60b35691ef22"],["/categories/日常习题/index.html","ba46f36005b67bc1e605801d455cad70"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","5929958e4a6f5d252534f134ffb94121"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","14e558876c4986c587cf02b8130930b0"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/k倍区间（JAVA）/index.html","70508ee4bc6f42913d35d0fe80243c7f"],["/link/index.html","ffdd5b2aec710d8fa777bb0d7d85671b"],["/page/10/index.html","5e050ecbf6f82c1bb2a022507884ecd8"],["/page/2/index.html","dd47911114cc56cec56482b1982bd661"],["/page/3/index.html","dc03200e183c069a566f2000350993e4"],["/page/4/index.html","a86bff259db889db2d7eb9e28bc85079"],["/page/5/index.html","ee5814e9f6ab00701a22ba098d042783"],["/page/6/index.html","c2d356e265c050c9522cf0f79a89b850"],["/page/7/index.html","ed59aa9845e5039cb40a97a34ee6037a"],["/page/8/index.html","28f3fe116e27344acfafa27958a2a143"],["/page/9/index.html","7b7ef50216fabd3613c059692df71d94"],["/sw-register.js","333a847f761eb2e70547bcdb258457e5"],["/tags/index.html","4d3ba4e7e031aa968faaa76cc4ebedd2"],["/tags/java/index.html","c46a8862d13afa2f4efb3a9ad82a24c0"],["/tags/java/page/2/index.html","80f9143e3c66527fcbd9dfcc5a6e519b"],["/tags/java/page/3/index.html","8dacee146d20f244cfa75aa2f464931a"],["/tags/java/page/4/index.html","45447f0ae8d6e98baa85d5dbecec0d40"],["/tags/java/page/5/index.html","b1c78a6a39a3d502d8be63f1e3bd694e"],["/tags/java/page/6/index.html","e3efbaa5fd12cdf16cbf6a4d4a72b3d5"],["/tags/python/index.html","cd9e8c1c7df23dc9598225ca37e01a7c"],["/tags/python/page/2/index.html","b2ce39b2415b9f29734878690b387ce0"],["/tags/python/page/3/index.html","c763c4aab7d355f660ffcf87866df986"],["/tags/冒泡排序/index.html","cdc275884ea49ed35d94ef3c9c5e89ea"],["/tags/算法/index.html","c0a0e041f7c22443a6b2c69df63b2340"],["/tags/算法/page/2/index.html","cac0125be40a6f89b64d60a381deda64"],["/tags/算法/page/3/index.html","7f06b0cde066c3e415dafb8cdd21a212"],["/tags/算法/page/4/index.html","7cde4b5f6112772dbaaec856e556b781"],["/tags/结构体/index.html","a67ee92403a63543d59f66cb1673e630"],["/tags/蓝桥杯/index.html","c49b0e09674a859961b18fd1205c8778"],["/tags/蓝桥杯/page/2/index.html","928e5c446a6e6949d9510b62d0468e7f"],["/tags/蓝桥杯/page/3/index.html","c453d590ffc4b8f3a30d245073681ce2"],["/tags/蓝桥杯/page/4/index.html","89c668bbb8e283fe4ee0ed10981c8ef8"],["/tags/蓝桥杯/page/5/index.html","8cd301307ad80ca0f51db340208ac782"],["/tags/蓝桥杯/page/6/index.html","60ea1f7ff10dfa0a819af22598bb872d"],["/tags/蓝桥杯/page/7/index.html","60368d2fa147c8be7981efbead960b6b"],["/tags/蓝桥杯/page/8/index.html","42f6f3ae61662697cb03f0f43d2bf9cc"],["/tags/资源教程/index.html","52289d1f9048c8ea00c58608108c3aee"],["/tags/链表/index.html","0c03c2c531cd1bb9b37a49d9115f10e8"],["/typora/index.html","618bed3300cd51809a3ed35b73adb013"],["/七段码（JAVA）/index.html","8c3a624815288e2dfd2a12e5d9ff4f99"],["/作物杂交（JAVA）/index.html","5666aceb2b7c7db076a881214b1458c2"],["/全排列的价值（JAVA）/index.html","800cbd0abc4a5cb4a0cb4ec3f73d7c4f"],["/包子凑数（JAVA）/index.html","78f7c9d510394e8976976222f539c718"],["/双向排序（JAVA）/index.html","6a0c31ddce5cd31d78bb4e7197adc61a"],["/取球博弈（JAVA）/index.html","ee30bcb99a6f1f326697160cd30c15f3"],["/合根植物（JAVA）/index.html","97abf2e71a00694239b6d133f555ac13"],["/四平方和（JAVA）/index.html","36c07265fce2d96fdd408c143dc6d591"],["/回文日期（JAVA）-1/index.html","10b4b9733c78c4ba877d34df3c27f345"],["/回文日期（JAVA）/index.html","51fd9fce4dbf226935cd425d7b3d8751"],["/山（JAVA）/index.html","1775ee4b5bfb4bbdad61275ff364d9e4"],["/左移右移（JAVA）/index.html","636895b0481224547b442095522cd677"],["/成绩排序（java）/index.html","e56d6b87ffaef0e72e8ac5358a861a16"],["/数位排序（JAVA）/index.html","e76a41e8af4d0260f164111492056ccd"],["/数字三角形（JAVA）/index.html","2ea273b446818e0620d410d8d6778091"],["/数字加密和解密/index.html","0a34307305318b45fa1968f6c0fc0d9f"],["/数组切分（JAVA）/index.html","718c18b9bc0d05b4f89e0bfb07dbcbe4"],["/方格填数（JAVA）/index.html","e4bd804dbcca75a63286fbb428fdf5ac"],["/最优清零方案（JAVA）/index.html","477c076672e754229b54f0fae71b92ee"],["/最少刷题数（JAVA）/index.html","ed0b31f670cb6012658fca657f212c53"],["/本质上升序列（JAVA）/index.html","285c84916f5029cb67694611413843c5"],["/杨辉三角形（JAVA）/index.html","ecbbddda23ba1071ca913d50190d5c56"],["/案例2-1 商品入库（java）/index.html","b4554f00166be80deb46d16aa7c73904"],["/案例2-2-小明都可以买什么/index.html","6a77ea8bb9610fcce9a7370351627ec5"],["/案例3-1-基于控制台的购书系统/index.html","2cd678ab3d232f32fb68c1ff012475e8"],["/案例4-7-经理与员工工资案例/index.html","27bc87e7cef5630a81aa53c291cf2cb5"],["/求和（JAVA）/index.html","f28b81c51868f524d2d80b204982398f"],["/求阶乘（JAVA）/index.html","c5cd9dcb671caeca3c459823a3e3f769"],["/牌型种数（JAVA）/index.html","e98dffa38f17c6602ad70202e7e4ad65"],["/猜字母（JAVA）/index.html","24351ec23bb3c35fb1c23806b78110f6"],["/猜数字（python）/index.html","1cb36de45c5c96cb2f185d71f96a3dc5"],["/砝码称重（JAVA）/index.html","61ac69c413fdc4c99636e63d35e6032e"],["/等差数列（JAVA）/index.html","e0ab153ec1ca71dd834ae6f36e16cd5c"],["/蓝桥杯--单词分析（python）/index.html","77154899ebaf735c782e04888117c33a"],["/蓝桥杯--回文日期（python）/index.html","474a25007506e8dfe49675480ca2feb4"],["/蓝桥杯--字母数（python）/index.html","e1cb197a8b18c339ff16dd72a12d049f"],["/蓝桥杯--成绩分析（python）/index.html","8f2c7e86c8057b8fb394a32bff145bbb"],["/蓝桥杯--成绩统计（python）/index.html","f43f5899ffb6ce1e55c53c5806ccfd5d"],["/蓝桥杯--排序（python）/index.html","5dd2cf857c926aa8074775c602aea525"],["/蓝桥杯--数位排序（python）/index.html","8a91d6ae090eb0e0d2b43006b2ff5f53"],["/蓝桥杯--猜生日（python）/index.html","f03f6b6d673b0b20e71e7b8729d32551"],["/蓝桥杯--猴子吃桃（python）/index.html","63f6b224c3ddedc2cc55f61e8e082e9f"],["/蓝桥杯--石头剪刀布（python）/index.html","8a9955c43fc7873a558aadbafb98bf73"],["/蓝桥杯--移动距离（python）/index.html","ee7c9d86322db0de474fc855c4117182"],["/蓝桥杯--空间（python）/index.html","78ca2e100eb9ed2215be4b3d1629a2f6"],["/蓝桥杯--等差数列（python）/index.html","0c6f930b9cbe95f38577aafd7bb1e772"],["/蓝桥杯--纸张尺寸（python）/index.html","506510cf804c64c82c53aeb65207f22a"],["/蓝桥杯--结构体之时间设计（python）/index.html","cef618bcb66037cfe8a31b7a6ce0f786"],["/蓝桥杯--货物摆放（python）/index.html","924b79d805d4a7c97d8db67895a1f35b"],["/蓝桥杯--质数（python）/index.html","f3919b0d9d6f4ebd5f4c1602bef32768"],["/蓝桥杯--购物单（python）/index.html","7650c5c4590d61fd3d7d6f71f633e1a3"],["/蓝桥杯--跑步锻炼（python）/index.html","85bb3fe23ba868a4090200f18eb5abbf"],["/蓝桥杯--迷宫（python）/index.html","837fd0ddbce7f27e8a445a0ac4766c70"],["/蓝桥杯--递增序列（python）/index.html","7b272a77c853156addb59069741a7a28"],["/蓝桥杯--链表之节点删除（python）/index.html","aeed1ee1d43b14a76626f0681503b0c5"],["/蓝桥杯--门牌制作（python）/index.html","3d3558b9e402efe5aa0c28f6e7e503d8"],["/蓝桥杯-592门牌制作/index.html","448fbaefe0e095fa2936c14f16ab55fa"],["/蓝桥杯-单词分析（java）/index.html","32fefe9100dcb03993796189db64cb2c"],["/蓝桥杯-字符统计/index.html","89bf92b767f4758ec19fc775ec4512d4"],["/蓝桥杯-山（java）/index.html","00909200b5617fff06a2c82c04c7eb66"],["/蓝桥杯-成绩统计(java)/index.html","9667c27eca7df0e0a6c21f636db580c2"],["/蓝桥杯-数列求值/index.html","4dcfefc7d65be84cf00ae9a38d552ade"],["/蓝桥杯-数字三角形（java）/index.html","d241ef1c80d300b05ccdee23aed645eb"],["/蓝桥杯-既约分数/index.html","f8b2f840cd3cccc754e027d1b637524c"],["/蓝桥杯-时间显示/index.html","79713f9783496bdf52e9730d8bb86655"],["/蓝桥杯-最少刷题数/index.html","5829252a2870ebd23eec3b0d355aa139"],["/蓝桥杯-特别数的和/index.html","6a1e9b095c0ff08f1ee310fbc1bce095"],["/蓝桥杯-蛇形填数/index.html","89a7209b9d39a04020a9582e0b2a06c0"],["/蓝桥杯-跳跃（dp）/index.html","a425641d0b49e572d7c74b614aa17cf7"],["/蓝桥杯-链表数据求和操作/index.html","66494aa62e85c56e5def54ef9d0f0dad"],["/蓝桥杯-阶乘计算（二分）/index.html","e342d3ae0ca50c5a3d3a385ef1bf366e"],["/蓝肽子序列（JAVA）/index.html","7dd2db42ca4c2539f50667d7bd3c744a"],["/计算球体积/index.html","a134260eae706167ae7e1273d939d52e"],["/计算矩阵边缘元素之和（java算法优化）/index.html","938b831d9715c38a5e2da1710e216d53"],["/质数拆分（JAVA）/index.html","e380d27c318904299f26da01df7ae607"],["/路径（JAVA）/index.html","729fab81524b4b2766a8f6dbdf94b836"],["/重合次数（JAVA）/index.html","45f638dad6c34e274d0e235c7594eff3"],["/闹钟定时程序（python）/index.html","264d60def6ac61b6a1b073771002cfc5"],["/青蛙过河（JAVA）/index.html","ca594237e08f13528181943f3dce743d"],["/验证码（random类）/index.html","65e042ec4aa232a73f87615d22aceb46"]];
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
