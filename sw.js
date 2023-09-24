/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CentOS7安装时直接跳过了安装信息摘要页面的解决方法/index.html","a74af58821dc03bbfb441aa1299d5bd4"],["/GCD（JAVA）/index.html","b9feadbb49031555e8f7d69c2b860338"],["/Hexo-GitHub搭建个人博客/index.html","2f90fc62f9f0b3959750f344d8ac5c64"],["/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","312937f2eca87202fdfff74a2bfc1ef0"],["/LeetCode46-全排列（dfs算法）/index.html","064f17963a48fcb47ab76b712b112d97"],["/Python150题day01/index.html","ac21eec5f4beee7d7fe85a01762aef04"],["/Python150题day02/index.html","803539141e6fe5eb96bdcf64dd24ea3a"],["/Python150题day03/index.html","e5a8d18db427007ed7fd8595cbb08e18"],["/Python150题day04/index.html","b57b55e1efb9163171e695b64a3bb4b1"],["/Python150题day05/index.html","98497a56240767c71c4a905d37d2ebbf"],["/Tomcat部署项目后，验证码不显示问题/index.html","a89e1123015e840e0e4b7122d748eb54"],["/about/index.html","ffc8060ab3646abe2ab30d05b15680d7"],["/archives/2023/04/index.html","6fe17c9b15dd4827c68e800b077061a1"],["/archives/2023/04/page/2/index.html","d22964b5eaf1c2243b3a587d77b50a99"],["/archives/2023/05/index.html","db1175e5348d478c150be4aa7a3429c2"],["/archives/2023/05/page/2/index.html","dc4754ae906efb6edcbab6322e480316"],["/archives/2023/05/page/3/index.html","4bba9f9427e10ac2c760382c8e8c7168"],["/archives/2023/05/page/4/index.html","5b99ea276390a7b87f19395834d93d14"],["/archives/2023/05/page/5/index.html","ec6c11b0d4f1a33ea623f3897e353a20"],["/archives/2023/05/page/6/index.html","6da483f79eb9d6dc83c1a0ff92f71e97"],["/archives/2023/06/index.html","f8eee801bcdfbaa78aec0228ee4e5664"],["/archives/2023/07/index.html","45a245a8ebc029b66402b3b0356e7b75"],["/archives/2023/07/page/2/index.html","1c6b4687039b6815155f16e11056ec17"],["/archives/2023/09/index.html","a70db9089cd8ebcc1900bcc6771adcd7"],["/archives/2023/index.html","fbfcd2d265b36c0ad121af1280007f0f"],["/archives/2023/page/10/index.html","8b42b9dc567fdac8308323a8cde3f0f8"],["/archives/2023/page/2/index.html","db33033b40f0d70fea270709a547b560"],["/archives/2023/page/3/index.html","dbd3279504e7772fd022945fbee6360e"],["/archives/2023/page/4/index.html","a565c7ffadb40ab0f8874aa204f7d9bb"],["/archives/2023/page/5/index.html","ed03cd22a2663d152396bf2868284b28"],["/archives/2023/page/6/index.html","ad20627e212266ea4bd0f1eca9fb9a29"],["/archives/2023/page/7/index.html","3f4dfec5dd78a1d28d1aab9fdc39af11"],["/archives/2023/page/8/index.html","c04b78f4e8c2e17c0ad7c00b077bb31b"],["/archives/2023/page/9/index.html","5edaec7293d4c3ef19d8aed995a5db5d"],["/archives/index.html","ad7d46d6d462ebbff0ce99a80abe3140"],["/archives/page/10/index.html","b9000d2588e3c5a51869591ea5831048"],["/archives/page/2/index.html","607eefa72170403b00eff0f20bddd522"],["/archives/page/3/index.html","5dd5d1866daaf6e3ee2828f1f2e06d34"],["/archives/page/4/index.html","9d1a427b5b66d812bc3c23891906afc9"],["/archives/page/5/index.html","9b1f6a697e72434d203fee25fc6ae525"],["/archives/page/6/index.html","d5282b0521546dda01b2776b0779033b"],["/archives/page/7/index.html","89b51eb7087c5c1ca03a67231bbe9d0e"],["/archives/page/8/index.html","ce49401bdf36b7e83bcbe913c477cae4"],["/archives/page/9/index.html","55d4416e49f75e8f404989241dea367f"],["/categories/index.html","9ca877e5f1f4aaf0129f8c39967f49c3"],["/categories/java/index.html","a98af3307178004b9d3d4821c26d79ba"],["/categories/java/page/2/index.html","5ee00a60b732870c8fd9a9d2159071bb"],["/categories/java/page/3/index.html","0834f5375f505b98ea42bbc163250369"],["/categories/java/page/4/index.html","708f96eeea9f89123c0d6182e94b800a"],["/categories/java/page/5/index.html","d8a9bec9dbea8e59229ea77d7015210f"],["/categories/java/page/6/index.html","e1b1cc35983f4c65cd7e77f21a891f01"],["/categories/java/算法/index.html","862cd89053f530465003b23e5cce9c8d"],["/categories/java/算法/page/2/index.html","c534b84bcaa12615108c25c482f12f53"],["/categories/java/算法/page/3/index.html","f4a6d6eb3b773451015f6a5a3c5258cc"],["/categories/java/算法/page/4/index.html","a510472f2026a8f6251be407bbdfd10d"],["/categories/java/算法/蓝桥杯/index.html","465be393f760f8a1a30313b535c858b0"],["/categories/java/算法/蓝桥杯/page/2/index.html","e6d292ccca3a2e078e3fd6a3044595bc"],["/categories/java/算法/蓝桥杯/page/3/index.html","c48975f96eba4d475dc6268d260ac84e"],["/categories/java/算法/蓝桥杯/page/4/index.html","aa39c1ce5f821ffcce0d4f58ea08f864"],["/categories/java/蓝桥杯/index.html","858aa67d999eb528a446f0d50b527c0f"],["/categories/java/蓝桥杯/page/2/index.html","92719be04294270062bae23f22ccf3b5"],["/categories/python/index.html","81f4415a6e4a4d5e2e1a2f7b0908f063"],["/categories/python/page/2/index.html","3d91f5d1b3f488bc2890aad4805e9127"],["/categories/python/page/3/index.html","9d29d8c4af2663056c34df106ae1c6a6"],["/categories/python/蓝桥杯/index.html","4c4c1789c7b73e47226371a076ca64d1"],["/categories/python/蓝桥杯/page/2/index.html","f53e030075d80ff45c73acad0090d59f"],["/categories/python/蓝桥杯/page/3/index.html","8daff7b5ddcb9567f90112d478e7dd6b"],["/categories/python/蓝桥杯/冒泡排序/index.html","e30f4a996c99ff35bc5912d870658b7f"],["/categories/python/蓝桥杯/结构体/index.html","c726d19c4411990942088a953793694f"],["/categories/python/蓝桥杯/链表/index.html","71ec47bc548e32f02656957bfee44541"],["/categories/教程/index.html","e64bb09c300455ac2a2ab85981c87b02"],["/categories/日常习题/index.html","ed9419148b270586cf0ed4c8015fe180"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","82b6a8d5a2fa02307b378eec0cd53af8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","75db3a828f69cf772fd7822a21934d43"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/k倍区间（JAVA）/index.html","666f2d9b2fb97f3b0f3a9f7edf18ca1f"],["/link/index.html","1e7388f2eafbbdaa89e751b92dd3b9db"],["/page/10/index.html","f28d79577f30edd69d59ca353719591f"],["/page/2/index.html","d8890054e2f1ecdf41c19287896b79a3"],["/page/3/index.html","c8df12a1f857abe3377933980e3b7dd7"],["/page/4/index.html","c8657d49a719079730ff398e8c581ce1"],["/page/5/index.html","1cb2f2fb983bf8b7a5938ecbfc4ddad3"],["/page/6/index.html","96198bf1335bcca36ce2389282f15b0c"],["/page/7/index.html","92c1f4fd5bbb74562d77afa6740f625a"],["/page/8/index.html","d17ce15886881a1c58c4971d39e499a5"],["/page/9/index.html","a6ef3dc3efb714ff670b0a940e0000f8"],["/sw-register.js","5f7f183f96b72a2a3acd96dc021c095f"],["/tags/index.html","29ec408951f131fafe133072d7e1d45a"],["/tags/java/index.html","ff238a628f5919675d7f69a5fa4fde8e"],["/tags/java/page/2/index.html","8ec136d1e95dad49cd732d12d75380f4"],["/tags/java/page/3/index.html","6b8c5b0e51370f477b3e94c9d99914c3"],["/tags/java/page/4/index.html","4819bfbcb794321bb4c7e301b33650f2"],["/tags/java/page/5/index.html","fce0911878ffa20958ef5d3ea194e8cd"],["/tags/java/page/6/index.html","868f2d07ce03e083d7d0d847bc63f2eb"],["/tags/python/index.html","01ce1b0f808278d787b1d3b6d77c9cb2"],["/tags/python/page/2/index.html","82a2c9444d6841d974203af23b2aa6f9"],["/tags/python/page/3/index.html","2ce6f216b8ace998f0d7d6a8b36c5962"],["/tags/冒泡排序/index.html","dede6e71ab471538ad9f9aea1a8210c2"],["/tags/算法/index.html","d6c96370776ea74665e0a4e7ecf1e152"],["/tags/算法/page/2/index.html","41a7fe8c558c3833451174e6b606c0ca"],["/tags/算法/page/3/index.html","1e5b85037160c36683b2086aec20cb50"],["/tags/算法/page/4/index.html","6a18c042ebabe2107b806abfdf544076"],["/tags/结构体/index.html","938fe5c73540204ee78f139128b16311"],["/tags/蓝桥杯/index.html","73b7970388ba622596e691aaa1a2ec4c"],["/tags/蓝桥杯/page/2/index.html","25d6d965e17672b1c7a7a861cfe7a8ad"],["/tags/蓝桥杯/page/3/index.html","aec24b52f9816595595b098c4abf286a"],["/tags/蓝桥杯/page/4/index.html","bff9964da5bf24fab992c8870873c945"],["/tags/蓝桥杯/page/5/index.html","c931c3f029257338bca629314cbd4658"],["/tags/蓝桥杯/page/6/index.html","4a763de5cd88672ce8ba7187b70de376"],["/tags/蓝桥杯/page/7/index.html","d3cc498eb37ad6694add2c2e82975c86"],["/tags/蓝桥杯/page/8/index.html","2bfb171c3003647af59f4f887d33d674"],["/tags/资源教程/index.html","a98075902d35944a94c105a0afeac668"],["/tags/链表/index.html","bd5c1bdeba944e944469caf56920c2bc"],["/typora/index.html","df39aba5cf18bc7eeba83b631679a2f5"],["/七段码（JAVA）/index.html","ace8fcb2834abef24ee6224237292972"],["/作物杂交（JAVA）/index.html","9d1e68d97712bb1020e7208d878bef7e"],["/全排列的价值（JAVA）/index.html","26dd198d18afb07863f1bd55f24b66e8"],["/包子凑数（JAVA）/index.html","ea6581bdc3ae738ed2fd08249bc94c44"],["/双向排序（JAVA）/index.html","0924558878f373f9120a1d3529de96d3"],["/取球博弈（JAVA）/index.html","f7ebef00d1d08d6c7497163ac8719686"],["/合根植物（JAVA）/index.html","3a7b8f9423b2b7af198cc60e8fc9c779"],["/四平方和（JAVA）/index.html","2882a49f19b9ef48c4886db697cc3eae"],["/回文日期（JAVA）-1/index.html","4d8bb94d74e14e1c39879aacee61c6b1"],["/回文日期（JAVA）/index.html","a75b17fbaa7147da409f6c77403805d6"],["/山（JAVA）/index.html","77ad0753b25dc7ae73566b254b32c5c9"],["/左移右移（JAVA）/index.html","dfbcd02d3935535070b1a9383fd3e122"],["/成绩排序（java）/index.html","44f06475fba591de16333429f8ce8f4a"],["/数位排序（JAVA）/index.html","708a231bc2c6993367073fc3c53316c2"],["/数字三角形（JAVA）/index.html","9b348ea5db8f40e13dcffeb54a3d4159"],["/数字加密和解密/index.html","913a62ca0e390ee28454c9de4de9f6bb"],["/数组切分（JAVA）/index.html","f68f9e99b00acb940110dc67e01a8073"],["/方格填数（JAVA）/index.html","f4406bbaa69c24e15a640aa9e974770a"],["/最优清零方案（JAVA）/index.html","cba31902c9958c8d0520653ca387e189"],["/最少刷题数（JAVA）/index.html","488b984aca860926abebbbf15896daf2"],["/本质上升序列（JAVA）/index.html","4e550567ff2f88ee2624fa25410a30d2"],["/杨辉三角形（JAVA）/index.html","e405a4b3f5655352dcd271a904a9fbd4"],["/案例2-1 商品入库（java）/index.html","68e7c630eba15eacdb1e32564a20176b"],["/案例2-2-小明都可以买什么/index.html","ae9b1e6f73c6df5dcb1f9633ac3cffaa"],["/案例3-1-基于控制台的购书系统/index.html","a89eb8c78f9e88b9e0611d2fdb05aee6"],["/案例4-7-经理与员工工资案例/index.html","0c4154db3a7766834ce5ae4e56e582ac"],["/求和（JAVA）/index.html","638cd099373ca21d4383a1db8dd8a28b"],["/求阶乘（JAVA）/index.html","7399c73ce68601a01777e536c44fe905"],["/牌型种数（JAVA）/index.html","af77cb053b6eb5d66a4b55711960729c"],["/猜字母（JAVA）/index.html","0d6b310ec03b94fc25a03a89e8638413"],["/猜数字（python）/index.html","c6dc7faa1da47dee7c81651ef4bff06d"],["/砝码称重（JAVA）/index.html","3945410614dc918daea744ea6e58c8ae"],["/等差数列（JAVA）/index.html","b9d4aad1454ea53e1210524391d1acd4"],["/蓝桥杯--单词分析（python）/index.html","4db09ea26159ef720b0e8737b797a076"],["/蓝桥杯--回文日期（python）/index.html","5bd05d95bf25b4abcd2ac3a1b5a2ed0a"],["/蓝桥杯--字母数（python）/index.html","3062a14cd91021a56a6a63d100a88f4a"],["/蓝桥杯--成绩分析（python）/index.html","d8d89b093a2cc67acccd6c8ed9e41b3d"],["/蓝桥杯--成绩统计（python）/index.html","d146ffb2ac426ab0c0c3eefad2c2026a"],["/蓝桥杯--排序（python）/index.html","15d880d7ea27e6e6f83747af69217a55"],["/蓝桥杯--数位排序（python）/index.html","15507c11760ff78e7143fde344bfdb10"],["/蓝桥杯--猜生日（python）/index.html","9178efe7c49794ff29cf41d3cb4b26cf"],["/蓝桥杯--猴子吃桃（python）/index.html","ddeb0f66e6149dba430cf2307a8342f8"],["/蓝桥杯--石头剪刀布（python）/index.html","26b31f5603c4857a95f8f8d47d3fb561"],["/蓝桥杯--移动距离（python）/index.html","c41cd454fb9af7753ea73f84d0129474"],["/蓝桥杯--空间（python）/index.html","5a28e56eff992015f155c989c7c0a79d"],["/蓝桥杯--等差数列（python）/index.html","3cb9b650e81e57721c61a0830f853366"],["/蓝桥杯--纸张尺寸（python）/index.html","174d188b13ef9aab36c988b6cea2834a"],["/蓝桥杯--结构体之时间设计（python）/index.html","67288e294654f135b266094a598051e0"],["/蓝桥杯--货物摆放（python）/index.html","e06fb49b7136ea160420cb68817dc235"],["/蓝桥杯--质数（python）/index.html","ff1d14caeb20f9eabe17a48611e1d43a"],["/蓝桥杯--购物单（python）/index.html","edeaa791f0ce41af422ba770ed2eb921"],["/蓝桥杯--跑步锻炼（python）/index.html","efdea1a4873fb0d783a3e4fb5a2913c5"],["/蓝桥杯--迷宫（python）/index.html","9595d3aa2c02e5e9f275f9989c76d6f2"],["/蓝桥杯--递增序列（python）/index.html","c559ba4e2be2beb30451ad244814b8da"],["/蓝桥杯--链表之节点删除（python）/index.html","2b2d90740d43dc8a496c57f4ce5130f5"],["/蓝桥杯--门牌制作（python）/index.html","b8704d6d8320375ba17e9d39eda9be73"],["/蓝桥杯-592门牌制作/index.html","de12d236999b6150940696e01ad5d1a9"],["/蓝桥杯-单词分析（java）/index.html","9bbe400a1bc823b356dabf4000f14e89"],["/蓝桥杯-字符统计/index.html","f8fb14f513c978702159b1c531d6f6fa"],["/蓝桥杯-山（java）/index.html","4426b488144380d77bfd25b3745aaad7"],["/蓝桥杯-成绩统计(java)/index.html","742f4e37894d671e53b8fa6dde9bb8dc"],["/蓝桥杯-数列求值/index.html","d773d9190414be9950d9d37ed488872f"],["/蓝桥杯-数字三角形（java）/index.html","e9276a8aae2247493d567c26829ea1fd"],["/蓝桥杯-既约分数/index.html","579ab29e0636e74676cf3d6ad9a66c1e"],["/蓝桥杯-时间显示/index.html","cf7ab535dae5d2e12abcdf4d089f32e0"],["/蓝桥杯-最少刷题数/index.html","4ff558a2ec839a2b9004f839fb38f301"],["/蓝桥杯-特别数的和/index.html","f149b0c08ab15fbff203d1b3706d1e0b"],["/蓝桥杯-蛇形填数/index.html","a6b10948bda588a04632bb1db242db87"],["/蓝桥杯-跳跃（dp）/index.html","24f1a278a0fb35ad7f9ad5e02901a4f0"],["/蓝桥杯-链表数据求和操作/index.html","e993f7495b678fd92cc3e91f3ffd1724"],["/蓝桥杯-阶乘计算（二分）/index.html","fec8d6b172ffc6897079baa43921df3d"],["/蓝肽子序列（JAVA）/index.html","67fdae041d449a9b76f377ac752569bd"],["/计算球体积/index.html","2254dd28348b002197c8687b5fbb9395"],["/计算矩阵边缘元素之和（java算法优化）/index.html","0a127112b70106bb9cea7af8172fc43d"],["/质数拆分（JAVA）/index.html","3137d89cb783dca9a68488a07438c0cb"],["/路径（JAVA）/index.html","b09c0a5de860732daad6a8dd9ed3b4ee"],["/重合次数（JAVA）/index.html","6aac4645e7890f9c8c35f849cf3e5ed7"],["/闹钟定时程序（python）/index.html","09abeb3025afeff52152bd362d9230f9"],["/青蛙过河（JAVA）/index.html","29bef552593b054d8c8b04152bfdcbb9"],["/验证码（random类）/index.html","f7b7f813012982e6548552aafa0ba9fc"]];
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
