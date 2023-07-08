/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","8353501e02639fc6c04864387c38e76b"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","c072a6fc8b9f7edfac3cfb1bcaa9cf78"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","e27d86711dcd1c82cc6e8a8e2468e504"],["/2023/04/22/验证码（random类）/index.html","cd245c16c6dd27bdf9eb69e771cf4ef5"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","ff8679c60713ee0610c0c06738e83e06"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","655a3e8587ab83ffc01537592d7a8a62"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","e4c13681ab69928b9570f49b5e01f7d4"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","0965ee49230d2fd408274f9814ab30ef"],["/2023/04/23/蓝桥杯-山（java）/index.html","9301f8b6b79c3e5f5a27d8183f9b56df"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","1ae61d970317e626ca4d4b751972b25d"],["/2023/04/23/蓝桥杯-时间显示/index.html","a1b34e3660ea34947381e7ed03aa976e"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","3807aa7834a01a50f9a1ab3df28421b3"],["/2023/04/23/蓝桥杯-特别数的和/index.html","7a87dec0cca82c5f2f6c02b6b14d9674"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","ee9edbb9aeac409db8387d94a47d217a"],["/2023/04/27/案例2-1 商品入库（java）/index.html","7e5f6c307881f505a82562c64c8b159c"],["/2023/04/27/猜数字（python）/index.html","704f7409f8e32c31f7b2f8f789758867"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","43f1573d8c1c487c5b3fb3bd273dcafc"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","91ba58778c8fd0e3885795504f41fedc"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","7d8e3910161f7e1ac00b6dcd43958e6c"],["/2023/05/02/数字三角形（JAVA）/index.html","409499072ffa7d7e7d71dc8e4d8b5d8c"],["/2023/05/05/k倍区间（JAVA）/index.html","26fed8772027cb2b2565d179c85ab441"],["/2023/05/05/作物杂交（JAVA）/index.html","a214f948c7d949dc8577f57d46800c71"],["/2023/05/05/包子凑数（JAVA）/index.html","a8b18bd6c96276a4b29ecac8578238f6"],["/2023/05/05/取球博弈（JAVA）/index.html","e99cea1dfb38f49b7706e4622c4ddffc"],["/2023/05/05/回文日期（JAVA）/index.html","4c7087a5f8d38bfae0d13129b321f7ec"],["/2023/05/05/砝码称重（JAVA）/index.html","4f7fca53d0f5c71ad23d99949d84d771"],["/2023/05/05/等差数列（JAVA）/index.html","db8648fd6d5501f38d298aed4a7c64c5"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","fbb9391a437175f955f454c79c7e9910"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","7b3ad4931870cfaca1e8d32668da68ff"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","23496af1a7aa14e5a5ebc42f34c7628e"],["/2023/05/05/蓝桥杯--排序（python）/index.html","13b5d5ae1b7831005a4f235bdd991bf3"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","9289dedc27068a7f737fdde1b495fa2b"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","caa39f851c0332aa91bb0ddac204ec3f"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","61158ef0a744798eef523a8d18446162"],["/2023/05/05/蓝桥杯--空间（python）/index.html","b7f0a56780be3039ba5c93ea3e415a3d"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","60fe69c3dbe1cbf996f9377abb5f8d5d"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","5fb94058a4645252c4ba214748d425c3"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","4bfcef36a9c154b09fdce3cab6ced696"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","a8cb544fcbdfafc441d6728ecc726fab"],["/2023/05/05/蓝桥杯--质数（python）/index.html","e5bd39e30e98eea226c950598a7794cb"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","dea94c304419a4d82c28747d5e29f8a4"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","cc2655871179287a23b9cd37f5c6994a"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","a6094318840633eddd4d7ca25202d580"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","a4de2c51894f8f15f6e8a070790b1bab"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","9039433ed02630cf91a9d664cfdbd8e3"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","8512cc0a5065fde549a340138a56e391"],["/2023/05/05/质数拆分（JAVA）/index.html","058c19c2bf8f51e1ef0bc256e87a1d25"],["/2023/05/05/闹钟定时程序（python）/index.html","6d9cdf359c0f41f752ee32879a979052"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","e42399a4459293625ed414ad47b4b3a0"],["/2023/05/07/GCD（JAVA）/index.html","49bc08406c124ed6c4a348c01ab5f0bd"],["/2023/05/07/七段码（JAVA）/index.html","66ae2f3e06265bf1a44dfb41630c3b51"],["/2023/05/07/全排列的价值（JAVA）/index.html","03f2282e817a9ee6247ff4afd46445f8"],["/2023/05/07/双向排序（JAVA）/index.html","4c341fbb8d9c85df5e6e8ef4194cbbb7"],["/2023/05/07/四平方和（JAVA）/index.html","16f2f6fbd71d38a9d6ac7814a376ed6e"],["/2023/05/07/回文日期（JAVA）-1/index.html","252ec6ae276c6e79efe036384ef497cd"],["/2023/05/07/山（JAVA）/index.html","03e92d9586763077c2fdd8cad2659d88"],["/2023/05/07/数位排序（JAVA）/index.html","bc7f297be3c0f1389ba53d5d5972834b"],["/2023/05/07/数组切分（JAVA）/index.html","aa9fd628163b5f7507da209d6c5c72a7"],["/2023/05/07/最优清零方案（JAVA）/index.html","52844662de7ae178ff62524f9105ef7a"],["/2023/05/07/最少刷题数（JAVA）/index.html","f80bba37faff807959875cbd0598de5f"],["/2023/05/07/杨辉三角形（JAVA）/index.html","2798846c1e32aec89f00538ae44617ff"],["/2023/05/07/求和（JAVA）/index.html","71398d62ce960bef59d4994b38c25412"],["/2023/05/07/求阶乘（JAVA）/index.html","fb05294a00071aab730d74226e576aeb"],["/2023/05/07/牌型种数（JAVA）/index.html","5b909b047df100847cd59a7def69374a"],["/2023/05/07/猜字母（JAVA）/index.html","6867707acf6a737de7197a1639311495"],["/2023/05/07/路径（JAVA）/index.html","53d4edbadbb83a6565afaecfd0dc3b88"],["/2023/05/07/青蛙过河（JAVA）/index.html","4ebfafccbadaa264b0b10cafe3b6d03a"],["/2023/05/16/重合次数（JAVA）/index.html","60d83e342210f7a3571a6010e2728720"],["/2023/05/22/左移右移（JAVA）/index.html","4cd870cf4819161b19c4ae9a240ad7f9"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","9cd4760990d2dd0dc8db36fc8f2b47cf"],["/2023/05/28/本质上升序列（JAVA）/index.html","554c4b0d1b03747f52f408ee6eaa4502"],["/2023/06/07/方格填数（JAVA）/index.html","ffff71acf6148b68060754d7611cef63"],["/2023/06/09/合根植物（JAVA）/index.html","5d85b1c4a020a3f740947bef5f9fc8c3"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","8b6657d4b5c22e2e3431b41031f3de06"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","29afa2195456528b96b3e900c4a7de3c"],["/2023/07/08/成绩排序（java）/index.html","2b6708d1ca69fd96a0599aaa1446416a"],["/2023/07/08/数字加密和解密/index.html","e964c81e892fe761bede8852cf57ddd1"],["/2023/07/08/案例3-1-基于控制台的购书系统/index.html","3321623375d2c493eb1242678a07c0bc"],["/2023/07/08/案例4-7-经理与员工工资案例/index.html","0d3c1024139cdb72e8acce5d6b77eb95"],["/2023/07/08/蓝桥杯-字符统计/index.html","b302ed2ace9787aeca4c89a315797912"],["/2023/07/08/蓝桥杯-数列求值/index.html","ca9fbb401e9a16bd0da538cdb1b60c77"],["/2023/07/08/蓝桥杯-数字三角形（java）/index.html","d565e76bbc7a19c371b20439ded50af3"],["/2023/07/08/蓝桥杯-既约分数/index.html","b244694dfb5e59eefafa4d2c236b0dcc"],["/2023/07/08/蓝桥杯-蛇形填数/index.html","4a0bbaed31d03f0a215168f362c8fc06"],["/2023/07/08/蓝桥杯-链表数据求和操作/index.html","b57d6b8b76af571fc7b3603e38713bda"],["/2023/07/08/计算球体积/index.html","adefb867aba1846981005c92dd95d5b1"],["/2023/07/08/计算矩阵边缘元素之和（java算法优化）/index.html","d0762cd3a2689cd9fc3753cdddf04c0c"],["/about/index.html","181e5f08018098988547371ecc110cca"],["/archives/2023/04/index.html","b90dfb03523b3dece731308bf43820a6"],["/archives/2023/04/page/2/index.html","9b8d8e1bbd2d9cc9d062aefe1cd7a67a"],["/archives/2023/05/index.html","45b7cbfa3cc71dd63782c0ce0f4d769d"],["/archives/2023/05/page/2/index.html","a16cf995bd2921a4d8a0ea3b76169e94"],["/archives/2023/05/page/3/index.html","4ab346612127cfecc28799b468f39356"],["/archives/2023/05/page/4/index.html","6c5311dec264764a5f19172fc3a333c3"],["/archives/2023/05/page/5/index.html","8dc55a62d0863b8082903869ed6d005e"],["/archives/2023/05/page/6/index.html","c268b5d66b90d312eb91d105a1603b50"],["/archives/2023/06/index.html","d9db538bf6ce6e921f9d918edee74447"],["/archives/2023/07/index.html","a7a8bccecd0850646ffe6228ce373c38"],["/archives/2023/07/page/2/index.html","0e91e74dd730e39e757904225a9f840b"],["/archives/2023/index.html","b789740cda7819ba6dc084c1e49af290"],["/archives/2023/page/2/index.html","bb32f0e2f50cc84a975e96b042fefa3f"],["/archives/2023/page/3/index.html","5692337289c2565168878f206a944f2c"],["/archives/2023/page/4/index.html","b3e45abae51b000d17169cb18b95568e"],["/archives/2023/page/5/index.html","317a2fcf6ea711532689f175bf7ffa66"],["/archives/2023/page/6/index.html","f59574e1d6ce6e05a8393a08c34e6706"],["/archives/2023/page/7/index.html","0fc6a8d76c76df91675f5ac300f33f66"],["/archives/2023/page/8/index.html","aaa0f8d14da20455ee4d91ce72cb26b5"],["/archives/2023/page/9/index.html","26e293ec4800ff9a24824853876118e2"],["/archives/index.html","2109d737debae0a6c7342c0db619beab"],["/archives/page/2/index.html","254ad98ca6f022e01a139f36f122f607"],["/archives/page/3/index.html","82984811115e2014f86cdbe8aa9e310e"],["/archives/page/4/index.html","5fab97a2a7f759cf1f4c8a387cdf115b"],["/archives/page/5/index.html","5f91627f4e09a25aefca5417f3297e7d"],["/archives/page/6/index.html","5c66d51b44c99343a6ccbaed4ed1be6f"],["/archives/page/7/index.html","5e9eac7ddf0eec9d1af6cc939f6f87cb"],["/archives/page/8/index.html","83439ea1c4f5028f8cb73505ca92e60a"],["/archives/page/9/index.html","65d9287c9b16e19f856fc52f61bf5334"],["/categories/index.html","df67f6229db9d9d9b5fb907f6d79d98d"],["/categories/java/index.html","2cb4706d4b1247c687425eac62fdbfe5"],["/categories/java/page/2/index.html","fd4f88c55552ef29be054cc3df677d1f"],["/categories/java/page/3/index.html","6b04023ed0d580d7bf32390b4bb1763c"],["/categories/java/page/4/index.html","3cc31f66ec57b308bf5c1cfea7c1c50a"],["/categories/java/page/5/index.html","722d534391d13ff2337d6256a6e8254f"],["/categories/java/page/6/index.html","db3c7e18e12c6173e61e7aa5d0338425"],["/categories/java/算法/index.html","359e7884c5ed308d95871c40fd47f2ac"],["/categories/java/算法/page/2/index.html","feacd0905fc9839a2df65175cdd012fa"],["/categories/java/算法/page/3/index.html","d0b8acc9d0ddda37c74d25a61e7d5d2f"],["/categories/java/算法/page/4/index.html","dc23dd4cfac9d116731a2f840d8542fe"],["/categories/java/算法/蓝桥杯/index.html","72e4ee43c5fc37e473c72241463d9ae8"],["/categories/java/算法/蓝桥杯/page/2/index.html","72b944e12985859aa216e8256be0c6bb"],["/categories/java/算法/蓝桥杯/page/3/index.html","cb0da432f429d0f049bfccf5466cb2c3"],["/categories/java/算法/蓝桥杯/page/4/index.html","81abe4a6bd81a02cb7756dd6791c7d78"],["/categories/java/蓝桥杯/index.html","476fd47ba7e446b6e4ed407a493e4a98"],["/categories/java/蓝桥杯/page/2/index.html","3b75fcd412030710e713e5e4e5eca74b"],["/categories/python/index.html","704a50781c047b3dd11254dc86c7429d"],["/categories/python/page/2/index.html","7235cd37b06814743d47818c2e7e832b"],["/categories/python/page/3/index.html","836e61ce9649f0b7d189c2c73eea21a9"],["/categories/python/蓝桥杯/index.html","819750129b507761fcf23551311fbf12"],["/categories/python/蓝桥杯/page/2/index.html","68d8322415fb82984ce9690d0a8dc292"],["/categories/python/蓝桥杯/page/3/index.html","a96a00ab5384079302812d1b21956b14"],["/categories/python/蓝桥杯/冒泡排序/index.html","67503f0d079b1a425b31b15f574421c4"],["/categories/python/蓝桥杯/结构体/index.html","469b2c466874607f53201c1f9f712b96"],["/categories/python/蓝桥杯/链表/index.html","7a28baea30290a723e521fb3ba135990"],["/categories/教程/index.html","6d1355774821b4a4c4b95d0c856ec473"],["/categories/日常习题/index.html","e5655bbd5478e97a2414cacffdd14eab"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","59e3ec189dd027d9c1033671311d2b4b"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","8f8a8eb7e1b96ebf5832050d1c7e41c0"],["/page/2/index.html","90f7e0fb78eef5eaa18687164bf3db8f"],["/page/3/index.html","7a2a85d477a9e1395758aa9ba5fd3462"],["/page/4/index.html","09e91ffd1f7b4a509604cf78386338fb"],["/page/5/index.html","76c831122ee88127c519c654dcbd37b3"],["/page/6/index.html","9d1af2f57a972403dd886c8046ee9f77"],["/page/7/index.html","57f39ff7dbf65fd47ee9c47336ecae70"],["/page/8/index.html","9b2124b3d406bc2a56966a11b8d97af2"],["/page/9/index.html","fd8720af751d518088c328b5da3b16c0"],["/sw-register.js","b1f2156d28280c04cb832c835ba65de1"],["/tags/index.html","96ad80582076d2b4355e994406db3bcf"],["/tags/java/index.html","85db817cf6bc83e0871e7ac92072835e"],["/tags/java/page/2/index.html","eb10bf23e67cca4f0c9caf191ad83781"],["/tags/java/page/3/index.html","cfc4e404592b4dfd12ae896bce73339d"],["/tags/java/page/4/index.html","0e918d52b8cf0b7becac6e610f1159eb"],["/tags/java/page/5/index.html","9595527bba04c247425c8225116842b0"],["/tags/java/page/6/index.html","b0d26707bcc34fb5f2741dfe61331034"],["/tags/python/index.html","b757aee99ab23a74a74308396f0ec65b"],["/tags/python/page/2/index.html","ae9f5330e15f97e121237b2f766fc016"],["/tags/python/page/3/index.html","32dd890ed6d5c960b975df225283beaa"],["/tags/冒泡排序/index.html","28ed0180c8d461070e9ac6bcb0dbcd8b"],["/tags/算法/index.html","b40b9025cd66319c83288754946b8e6d"],["/tags/算法/page/2/index.html","8673a6e6d16047347899c9798ba5ab87"],["/tags/算法/page/3/index.html","adc4d4253a806f77e3be371b8d1d1b18"],["/tags/算法/page/4/index.html","f9c3636494059e4eb3383a51f7a0bef4"],["/tags/结构体/index.html","84796594871d276f12f95062b6b8de21"],["/tags/蓝桥杯/index.html","346605856a7fb1c37aadb0c7289cd2e7"],["/tags/蓝桥杯/page/2/index.html","b5409aa5fb11fafcc69fdd7f18084fe4"],["/tags/蓝桥杯/page/3/index.html","5cdea80a15b0d449ef3891727a98c838"],["/tags/蓝桥杯/page/4/index.html","0afccf1353bc313455a3c49e36d31400"],["/tags/蓝桥杯/page/5/index.html","9865a0ef29434b7d9f785419c775404c"],["/tags/蓝桥杯/page/6/index.html","84339cb56bc51d3f3ca8c016367c7040"],["/tags/蓝桥杯/page/7/index.html","8b89cdc9362fca6915d2c4514cf7afee"],["/tags/蓝桥杯/page/8/index.html","99612901ca96fff13a7b9fc9c6fcee26"],["/tags/资源教程/index.html","5d5f966c7e3f882f04fdfb4efcd2814a"],["/tags/链表/index.html","a5b54d9cca3645a46b49f6a70f5ccd2d"]];
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
