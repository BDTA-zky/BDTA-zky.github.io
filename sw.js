/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CentOS7安装时直接跳过了安装信息摘要页面的解决方法/index.html","461d7705bbe363650c06dad3170e02fb"],["/GCD（JAVA）/index.html","eb1ce386a66601ea5f5ab6653a47508b"],["/Hexo-GitHub搭建个人博客/index.html","7a7e3e500dd715eace17bfd00562325f"],["/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","c700392b0390dbd96813cdc20b6c88ac"],["/LeetCode46-全排列（dfs算法）/index.html","8a6a13d60be85be864a4c4f350797d7f"],["/Python150题day01/index.html","7f69853a2ce23b1d2a01fb66fa5a8b92"],["/Python150题day02/index.html","08bb90c5e15b0485aad40627c598ae99"],["/Tomcat部署项目后，验证码不显示问题/index.html","76fb86b544450415d233aa7599e1a621"],["/about/index.html","296102dfd76d7eea7c4c229140d1a884"],["/archives/2023/04/index.html","f1ba390b1742def0e517f13748e8d344"],["/archives/2023/04/page/2/index.html","6a1b1178034d10ee9f254e13fe84510a"],["/archives/2023/05/index.html","1372d85ae3a2455bb7079c5527ac3db3"],["/archives/2023/05/page/2/index.html","09639cd6e7e7188520bd436a4cd694be"],["/archives/2023/05/page/3/index.html","616a1756ba70fa39dd600d92ff3de612"],["/archives/2023/05/page/4/index.html","e03bb761fe3bbffc4a934d8d3a633db6"],["/archives/2023/05/page/5/index.html","dbcea9b3fb105ddcaa6ba3f823c9936b"],["/archives/2023/05/page/6/index.html","d9adcc33327c1996382178e5eae1f3d6"],["/archives/2023/06/index.html","7731a70b55c83a939ea6c0943efa52c3"],["/archives/2023/07/index.html","fd6a032e893485c4af3ba242d69eaa21"],["/archives/2023/07/page/2/index.html","21a43366f488b116699e662ff88ee5c1"],["/archives/2023/09/index.html","73f59acd4f0b7d0dd048577c122a50e6"],["/archives/2023/index.html","53bf51fe4eed6bb64ce14c866acf9e5f"],["/archives/2023/page/10/index.html","0a688ab940e149508967f865250e8d85"],["/archives/2023/page/2/index.html","3b64607bbd0288d2ea104ec0491f9961"],["/archives/2023/page/3/index.html","00932790343f50782d29d07acd5c6799"],["/archives/2023/page/4/index.html","32977fef4bb995408e7d5de0d89942ae"],["/archives/2023/page/5/index.html","6074e50ef1c641701a3ed2b328a691a0"],["/archives/2023/page/6/index.html","a47cab8dd13810992fdbc259ea27767c"],["/archives/2023/page/7/index.html","736b69919816941756376721b29924cb"],["/archives/2023/page/8/index.html","effe0a58c5f9f420f8347f35ebbdccae"],["/archives/2023/page/9/index.html","a6764ffb958a75275fd9f276e625aeb0"],["/archives/index.html","672cb0335025a55c44d3d15268c54fb7"],["/archives/page/10/index.html","0d6796fdd9c970646d5a4442af17a8b4"],["/archives/page/2/index.html","04aff527f8db25193286f509020a3df8"],["/archives/page/3/index.html","0579ae10fd772e84bec65bbb93c6e6bb"],["/archives/page/4/index.html","4aadc8e93ed01f28c4c3a17bfb90fd6c"],["/archives/page/5/index.html","5194b867cb293095ccca18a4de543d13"],["/archives/page/6/index.html","10d92e428ed447b2c804386a64cdb7cd"],["/archives/page/7/index.html","a35ae1f78919f0b84cdc7b46fa43e58c"],["/archives/page/8/index.html","5aaa4b7ba6a50616416b0183dbd11c0b"],["/archives/page/9/index.html","f1090ae7b05df64ca10e792d9237e34b"],["/categories/index.html","b29090dfdadf5a38c4890a7dbbcaf18c"],["/categories/java/index.html","97f2ff7c2b23c8c1ae0117e581ea5ecc"],["/categories/java/page/2/index.html","7b28377ee258bd0ad08b754c5d70ebd5"],["/categories/java/page/3/index.html","bd81fa886752f77f34df1441e74668cc"],["/categories/java/page/4/index.html","e0f35a189045df95f6e3e469f51c8c61"],["/categories/java/page/5/index.html","1f6fbb41f454bc925ece6b229abb71d6"],["/categories/java/page/6/index.html","43724c09305bb976377565f90cc261f2"],["/categories/java/算法/index.html","a73b05492d89a8f1cb3113854d680477"],["/categories/java/算法/page/2/index.html","fdc526180c76ace426c1f6a637baba5e"],["/categories/java/算法/page/3/index.html","10f72f5545ec73128e8c8e1f22c187e5"],["/categories/java/算法/page/4/index.html","d08d7c3ba5f26759e042f193361b763f"],["/categories/java/算法/蓝桥杯/index.html","545ebd1b01a843399adb2ee9bd912f44"],["/categories/java/算法/蓝桥杯/page/2/index.html","66dad3281b0fddc0c90692cb0aadd956"],["/categories/java/算法/蓝桥杯/page/3/index.html","6613ba97e7071272acdfc50e6dea948d"],["/categories/java/算法/蓝桥杯/page/4/index.html","a2e7c9a268f66c8792ec69eb536070c7"],["/categories/java/蓝桥杯/index.html","e1c26bf3a39b247034cf5ef2f807de06"],["/categories/java/蓝桥杯/page/2/index.html","316b630a603d47928d4ecd4b706518f6"],["/categories/python/index.html","79078ac8ad186e8925074eaaa4e159a9"],["/categories/python/page/2/index.html","fcea79f0ebc2392183defe932e4d5927"],["/categories/python/page/3/index.html","88d27fb16c8b57f9b1824917baaffce6"],["/categories/python/蓝桥杯/index.html","e2ccf8907c4651488ba00c839a3cf511"],["/categories/python/蓝桥杯/page/2/index.html","6f4fd7b8bd1ec86cd2c27927390f3e1c"],["/categories/python/蓝桥杯/page/3/index.html","b2751a9d6296b1971660ba4d505747a6"],["/categories/python/蓝桥杯/冒泡排序/index.html","14efe5c25e2af83bb008f6541372e342"],["/categories/python/蓝桥杯/结构体/index.html","5c70155fb07247df7167f107a8aae319"],["/categories/python/蓝桥杯/链表/index.html","6f3af664644ac71ea3ed8e055ee9cb1a"],["/categories/教程/index.html","6fb72f55ce443ca37b115a75912d1d2d"],["/categories/日常习题/index.html","c3051a43a73cfbe55bf0e5c1efe4d8b4"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","ffd768a17cb0a414866457b3d363f0a5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8f1f3d009a7b6cb2c621930e47c5635e"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/k倍区间（JAVA）/index.html","ac08d0abd42ee3d75087018e4f485831"],["/link/index.html","4a6d2d2cd1e26533521a1aa295eea758"],["/page/10/index.html","a609cc46c999d6c42fa02cebf72de8d1"],["/page/2/index.html","4206a5d5652059c360b433877eb66ae6"],["/page/3/index.html","55a9235b2c56d924008aa7bd0af856d9"],["/page/4/index.html","a0654a741f7e7f83f864edfe4ae1bcd5"],["/page/5/index.html","114d67dd590c3aeafe143671f58fcc86"],["/page/6/index.html","ba689929bccc2644a29b6b25cc1ed27a"],["/page/7/index.html","3881308fc1dc1b5ef07e00f220dd41bd"],["/page/8/index.html","4d01b6688878933772af266ab4b5ac16"],["/page/9/index.html","3a102c0914e330b00bb3e25a07a177bd"],["/sw-register.js","16497176093bcf4d42196667fe8d0914"],["/tags/index.html","d8a661f3e030dc4784afd79a4b21deca"],["/tags/java/index.html","afefd8585ecef3d3212a57e51b82a69a"],["/tags/java/page/2/index.html","615760302de2e0ba68d44eccdcfb4c3c"],["/tags/java/page/3/index.html","d51c10a4c0e2e485e285b3b8e4f0ea19"],["/tags/java/page/4/index.html","6a258a3cb37801bb865fd8c69c739425"],["/tags/java/page/5/index.html","2828af695fc3ce3d6949d09101525f02"],["/tags/java/page/6/index.html","b8dde1f52a975deb80626d5171083f9f"],["/tags/python/index.html","9bee0b58c05651ac8bf0022a3ef02a40"],["/tags/python/page/2/index.html","740174f6f01cd78c124307cbb1608214"],["/tags/python/page/3/index.html","3dec3d21b3e5efd7fce0790aa808d094"],["/tags/冒泡排序/index.html","c61c01459b03e9dc34c2101a8051696e"],["/tags/算法/index.html","7308565540a6c4bfd7e3601e9dec6047"],["/tags/算法/page/2/index.html","9a83c60e7e8247773d9954a138195ccd"],["/tags/算法/page/3/index.html","12ccbbd2059afc47f8daa70c55a1ec6d"],["/tags/算法/page/4/index.html","8e0179a42e3b03d26882def8e493eb73"],["/tags/结构体/index.html","d44369a4ce25ba10482c5803b9c802ed"],["/tags/蓝桥杯/index.html","661235bdee6ea86853ab923032ecf4c7"],["/tags/蓝桥杯/page/2/index.html","36ce0af98ab9421eee2e3475d96bfc2e"],["/tags/蓝桥杯/page/3/index.html","9e399c34ec258138ac387e390f23834a"],["/tags/蓝桥杯/page/4/index.html","f78d4e1734897b3e6f6b936ec8a302ec"],["/tags/蓝桥杯/page/5/index.html","1ef73ceeb9a0bd91c862249e25240d4a"],["/tags/蓝桥杯/page/6/index.html","10a0ae4c0303e3ebda53b0e121222b1c"],["/tags/蓝桥杯/page/7/index.html","f664e99a16c53303e494cd7fe6b496c9"],["/tags/蓝桥杯/page/8/index.html","308dc8ff4c2364c6af7116f40ef75792"],["/tags/资源教程/index.html","a763257f0d67f749beef4adaed489daa"],["/tags/链表/index.html","43901704a1cc68393670080d67aaa377"],["/typora/index.html","6bca67551865ea6deab52650b7da95b9"],["/七段码（JAVA）/index.html","95ef520e6258644576c74012863de46a"],["/作物杂交（JAVA）/index.html","f2605d50dc1f0f0b9dc8576b26d479cb"],["/全排列的价值（JAVA）/index.html","3e50cae6fae2b09acc10c34020905b1a"],["/包子凑数（JAVA）/index.html","e72737c5e67e3b47c0c89e33256b0752"],["/双向排序（JAVA）/index.html","c4eb21ac9ae45d108c87680836fef9bb"],["/取球博弈（JAVA）/index.html","359a6ccd3f73d3211b5d6b0425d35e6d"],["/合根植物（JAVA）/index.html","7f58dd35e1994b3c6fd162e2ecc1e064"],["/四平方和（JAVA）/index.html","a1b06244b0e3d1fc3aaa52c6ed152164"],["/回文日期（JAVA）-1/index.html","9da22239bfc8d74d1bb3ad053a5cac99"],["/回文日期（JAVA）/index.html","b5130f919e2c739468eedc442e79262c"],["/山（JAVA）/index.html","24ef963345b2f675d26e4ad2868f851f"],["/左移右移（JAVA）/index.html","99c623039e5318717520fc9a8d1e363b"],["/成绩排序（java）/index.html","9b36cd545fecc6b8f3fd64abd1841628"],["/数位排序（JAVA）/index.html","954a7d396fe38fd3225b1326db6be088"],["/数字三角形（JAVA）/index.html","be37c24692014ab2eb0e2cfddf4a89f5"],["/数字加密和解密/index.html","31721a2b0e74b41952cbf2486d3929b5"],["/数组切分（JAVA）/index.html","a9653b8ebbd23ae04ffcc2d5d10b656d"],["/方格填数（JAVA）/index.html","f5594d5207203217fd2b53df513efc78"],["/最优清零方案（JAVA）/index.html","0e5e7c45ccd272b99a1dedaf390e5960"],["/最少刷题数（JAVA）/index.html","2db4fe46b8bac3b554925a53da87ac90"],["/本质上升序列（JAVA）/index.html","8bc77269468ae19b20ee52d865b117ec"],["/杨辉三角形（JAVA）/index.html","67964da4d598a96334e970f37877ab1e"],["/案例2-1 商品入库（java）/index.html","d2b30336815d0c6a134c591391d27b7d"],["/案例2-2-小明都可以买什么/index.html","ac7a945c92f0ac1be0ecebd3b6297a8a"],["/案例3-1-基于控制台的购书系统/index.html","abdf68549ec945998aa44f1c8ce2f8bd"],["/案例4-7-经理与员工工资案例/index.html","0f767b6129c57a6b52467467d1a4e70a"],["/求和（JAVA）/index.html","1ee4bd9615361f76ecd4fe8ba0f6d9a0"],["/求阶乘（JAVA）/index.html","24311091f51c41904e17b06f9deac85c"],["/牌型种数（JAVA）/index.html","dbf492cc00e8909aebd485fbc80eefb8"],["/猜字母（JAVA）/index.html","bad605a03c7aa9615c6bfc6f2e79b2bd"],["/猜数字（python）/index.html","e66b4ea75feba18826f1317e87537c1d"],["/砝码称重（JAVA）/index.html","48c847cc81965473b702ea62a8ac3334"],["/等差数列（JAVA）/index.html","8a7842179373fdde103ebeb8fe25d05e"],["/蓝桥杯--单词分析（python）/index.html","5a97170d58ba27b65e3a90b97ccaa69c"],["/蓝桥杯--回文日期（python）/index.html","0f05f80c383824c2f1eb3b3092426db6"],["/蓝桥杯--字母数（python）/index.html","51367a6fad65ccac8f872213f85b71f4"],["/蓝桥杯--成绩分析（python）/index.html","be1b3a0b5dbedaa285605c93a632d092"],["/蓝桥杯--成绩统计（python）/index.html","3867bcd17566cc3e1f6c779342e3d029"],["/蓝桥杯--排序（python）/index.html","6e0587c47896c3f8682b174923464f2b"],["/蓝桥杯--数位排序（python）/index.html","065c65079dcf4f955004f53c60b13d11"],["/蓝桥杯--猜生日（python）/index.html","b1dc6264c36625fda4706e57acbc409d"],["/蓝桥杯--猴子吃桃（python）/index.html","1f4890c6986328ab07764153ffde643f"],["/蓝桥杯--石头剪刀布（python）/index.html","453782e1db48ec6ec0fe339e649f8de9"],["/蓝桥杯--移动距离（python）/index.html","cabe833fbd58a1e8267b38607df57767"],["/蓝桥杯--空间（python）/index.html","7915a506bf6e5b7c07769f13c5355d97"],["/蓝桥杯--等差数列（python）/index.html","50ab6e5bd956c1a669123efac4637ff0"],["/蓝桥杯--纸张尺寸（python）/index.html","aae2eb4ec8eda040426dc7c4112c15be"],["/蓝桥杯--结构体之时间设计（python）/index.html","d75c7b9b871bab05c44ef15b757cacc0"],["/蓝桥杯--货物摆放（python）/index.html","410f0ac063ea5b7d1eef4d50b1da2378"],["/蓝桥杯--质数（python）/index.html","ffb82f18ac3c54f150804751e56bc8e9"],["/蓝桥杯--购物单（python）/index.html","e460d8542d609990210b6ee832a42f20"],["/蓝桥杯--跑步锻炼（python）/index.html","c98452c33dd928c5a3376cbc8a544c61"],["/蓝桥杯--迷宫（python）/index.html","f62a2a73c120f5b6749d336ce474362f"],["/蓝桥杯--递增序列（python）/index.html","be7fff14a5e1d12f04330e5b0c586f2e"],["/蓝桥杯--链表之节点删除（python）/index.html","7dd041f0c058d1f145c871dad1a7a6d4"],["/蓝桥杯--门牌制作（python）/index.html","7c7fd25b12c3fe73a6ccfbc3ad2b2e06"],["/蓝桥杯-592门牌制作/index.html","e5ab0c3d4bfc912b011193bc71c03177"],["/蓝桥杯-单词分析（java）/index.html","48b9b6f3daa8169284b1f62d2dec5efd"],["/蓝桥杯-字符统计/index.html","ecd09a792f40a7c33e0ec3173e40307f"],["/蓝桥杯-山（java）/index.html","c200b04589d2bbefe4941e5974e44ed0"],["/蓝桥杯-成绩统计(java)/index.html","e214be7e50f59bc4784730d0e00837fe"],["/蓝桥杯-数列求值/index.html","0e84fcdbf8c76b7883851ba5f8cfa003"],["/蓝桥杯-数字三角形（java）/index.html","f9cd6f1f4768d64ed0cd909f9c77f81c"],["/蓝桥杯-既约分数/index.html","d460e95cb59fcc4a3deb5d6c195180fd"],["/蓝桥杯-时间显示/index.html","9fd77d6aeb5c3b72dc74bee58d9d7d9f"],["/蓝桥杯-最少刷题数/index.html","aeeedd911c54d1b82231a50089914f2a"],["/蓝桥杯-特别数的和/index.html","e5da010eb5ac1e30cbc5856b278c51f7"],["/蓝桥杯-蛇形填数/index.html","01803389571bba2413ff25c95b2b270e"],["/蓝桥杯-跳跃（dp）/index.html","890d24114ae716fc2c54ec0de700ef0c"],["/蓝桥杯-链表数据求和操作/index.html","844be2156b0d4076be6b39e879627de7"],["/蓝桥杯-阶乘计算（二分）/index.html","ff95cbd7d12dd2dd0bf1dbf114f4812d"],["/蓝肽子序列（JAVA）/index.html","ba04934eee6517f22964af9fcf625de5"],["/计算球体积/index.html","bee470325f6f4da650dffd5963a73db1"],["/计算矩阵边缘元素之和（java算法优化）/index.html","21ba0091590f5bf4119e63fb465d006f"],["/质数拆分（JAVA）/index.html","189079ff14edb0b93a734372ed167b1c"],["/路径（JAVA）/index.html","497ce0d6857b76b462167d1debf27788"],["/重合次数（JAVA）/index.html","6c8fedeb67a1bacc64e7c39847a44138"],["/闹钟定时程序（python）/index.html","aba8f7978252a924d7367f515749fd27"],["/青蛙过河（JAVA）/index.html","5371778ae65b09d94597a6e32390d539"],["/验证码（random类）/index.html","73362058714e162750e5a4f590066e74"]];
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
