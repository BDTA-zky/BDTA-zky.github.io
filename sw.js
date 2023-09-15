/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CentOS7安装时直接跳过了安装信息摘要页面的解决方法/index.html","461d7705bbe363650c06dad3170e02fb"],["/GCD（JAVA）/index.html","eb1ce386a66601ea5f5ab6653a47508b"],["/Hexo-GitHub搭建个人博客/index.html","98dafb9c6eb11e42812fc43d03cca417"],["/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","c700392b0390dbd96813cdc20b6c88ac"],["/LeetCode46-全排列（dfs算法）/index.html","8a6a13d60be85be864a4c4f350797d7f"],["/Python150题day01/index.html","7f69853a2ce23b1d2a01fb66fa5a8b92"],["/Python150题day02/index.html","08bb90c5e15b0485aad40627c598ae99"],["/Tomcat部署项目后，验证码不显示问题/index.html","76fb86b544450415d233aa7599e1a621"],["/about/index.html","1e93fb4571a1e9685c704e7507dd1c01"],["/archives/2023/04/index.html","5c48195fbf4f2a8bfdabe0ae926b0fe1"],["/archives/2023/04/page/2/index.html","a27bdfe161de2b5e7b6b5638670a02b0"],["/archives/2023/05/index.html","b2a60bea26b7f8e0c1ca559d267ebe22"],["/archives/2023/05/page/2/index.html","a450ecd4958751045eb4a92dcb082bf8"],["/archives/2023/05/page/3/index.html","959bef2cb52219ed0151e9bedec6d438"],["/archives/2023/05/page/4/index.html","f77269be8558d43a48601167dc9ee9fd"],["/archives/2023/05/page/5/index.html","258e63e94465552ab02bf0504d3fc6ef"],["/archives/2023/05/page/6/index.html","8f206405f56f5a2da1020405b2438206"],["/archives/2023/06/index.html","fbbdbc68f1f3a31646647ddc1ba0f2b1"],["/archives/2023/07/index.html","fa7d8efce6d2bcc20879ea7d940fd127"],["/archives/2023/07/page/2/index.html","0b6d8e90b3023f1bef240b454e4811f9"],["/archives/2023/09/index.html","43128a86a9be82edebea4abc90266fd9"],["/archives/2023/index.html","18dd80391485a2360e16944b38b545c3"],["/archives/2023/page/10/index.html","25555b98fb4b66fb55e3b72e0d718aaa"],["/archives/2023/page/2/index.html","579cc15411208cad8a066e69855e5805"],["/archives/2023/page/3/index.html","c29409664bc2428e7fd40a0bbc4b6e6c"],["/archives/2023/page/4/index.html","14345d566e33a18fe37684107b0e2ea1"],["/archives/2023/page/5/index.html","33694ddf2f44bed87f8f36984ff49546"],["/archives/2023/page/6/index.html","820c5716cd6853dd60434c6d6727b131"],["/archives/2023/page/7/index.html","3d9dd7cf622208ec95de2d7c05551b83"],["/archives/2023/page/8/index.html","a923649a567812d51474dfb5cc86df4b"],["/archives/2023/page/9/index.html","fe85080623eb449dd364c214418b06fa"],["/archives/index.html","b16dd7eaf38c5d204a719d88d03a7e67"],["/archives/page/10/index.html","950c6400771d38a74d7eadfc601fd50a"],["/archives/page/2/index.html","66658b240f526f0adb6961bd7a44584f"],["/archives/page/3/index.html","7d8e7a7ff3f5bbc25653a658db1149af"],["/archives/page/4/index.html","29ffbfab922be9e6d3de2ee86822a9b8"],["/archives/page/5/index.html","9ecc650d1f7f1f9bb633944282dae928"],["/archives/page/6/index.html","77079de7d3eb447a4ed31e549b314ed6"],["/archives/page/7/index.html","0771830ef68bd9c5614ffb699f5bbf60"],["/archives/page/8/index.html","e18021d825b686b2c0f4a6d540d28f77"],["/archives/page/9/index.html","0faccfaf3cda871b6ae8014ab29fa118"],["/categories/index.html","a80b273810367293b1b52ce384da9f8a"],["/categories/java/index.html","adc81827b2557fc18888dd1a0ca71ca2"],["/categories/java/page/2/index.html","eb014c1f1f3da9c8b52bc892bf373d66"],["/categories/java/page/3/index.html","7de732c6c5b6ecbc1b70504acf579d3c"],["/categories/java/page/4/index.html","28eeef86eb0bce48ce4cca5459a3b7a8"],["/categories/java/page/5/index.html","9a223601fd64d9da437e1239ef9bf1e1"],["/categories/java/page/6/index.html","e160e39a19aeb251b26c2e2d019de7d1"],["/categories/java/算法/index.html","b488d31f6a96a4c344f2ac60ed1496ef"],["/categories/java/算法/page/2/index.html","4f40509e4fba3acdfbe7aaed0f4eeab8"],["/categories/java/算法/page/3/index.html","121c352457c44693c3189e56b339c4a9"],["/categories/java/算法/page/4/index.html","88225ccb3f321f97e90437bb3eec2ce5"],["/categories/java/算法/蓝桥杯/index.html","cc8506671d9e17cf430c4e4fbd8449f4"],["/categories/java/算法/蓝桥杯/page/2/index.html","4c1d3e2fd91077ab6c0075d859814d85"],["/categories/java/算法/蓝桥杯/page/3/index.html","f345d49fd7873571d0e1083aa91f8888"],["/categories/java/算法/蓝桥杯/page/4/index.html","4cc8bdfa1d719c085cecaed93e33c618"],["/categories/java/蓝桥杯/index.html","d1c8f463ab145be21737d04cf25eced8"],["/categories/java/蓝桥杯/page/2/index.html","ae22bee00df791630500aaaa205b6309"],["/categories/python/index.html","fd27ba5013be5a065ec6333205bf5a95"],["/categories/python/page/2/index.html","2bf3405e5a4a5a40e2a86dba74385b9a"],["/categories/python/page/3/index.html","f305a401732f4b18c96de94c787719ee"],["/categories/python/蓝桥杯/index.html","ea2df06d476a8c5b899d7a2cf92d0e24"],["/categories/python/蓝桥杯/page/2/index.html","3db0a656e40d8ac0a8e7407bc8d98393"],["/categories/python/蓝桥杯/page/3/index.html","3052b04cbdd89c998ac14cedce7a52bf"],["/categories/python/蓝桥杯/冒泡排序/index.html","611278eb64af5f9a743f049733fe1858"],["/categories/python/蓝桥杯/结构体/index.html","c919b14c54cc45f7ae72f9855c21a56c"],["/categories/python/蓝桥杯/链表/index.html","80668a54a8986ff24959ed117ff6ce29"],["/categories/教程/index.html","07e4980916f6a78d99f3d6b9e82a374d"],["/categories/日常习题/index.html","4c7e3cbbd7b8c62305ce4eafed4f3954"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","ffd768a17cb0a414866457b3d363f0a5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","f2affc67624c02d0eb74b89c7f423f18"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/k倍区间（JAVA）/index.html","ac08d0abd42ee3d75087018e4f485831"],["/link/index.html","0d2afcfb59639c3d253f55394dff633e"],["/page/10/index.html","b2b863bc08873c4ff2ca103ab9d31ba0"],["/page/2/index.html","3b569cad0ec15b14145f18483778c24b"],["/page/3/index.html","37f485e46d14a3d2eeb9525cd070510a"],["/page/4/index.html","8a7bf06449451cc7c3c81b62386522f6"],["/page/5/index.html","bdc1f348b5c0fae105b06c1aab373c7d"],["/page/6/index.html","c8f0c2337134685ec554e148393134fd"],["/page/7/index.html","d005dfc609f8371ba5989244e1200591"],["/page/8/index.html","686b3aafebaae5e7dc2388ef3a1f3640"],["/page/9/index.html","57f29d33379494fb38a5bc73a3336e0d"],["/sw-register.js","d1c197e302713466f59f22905c55557d"],["/tags/index.html","f3b15c3a8c1594df885acc0543665436"],["/tags/java/index.html","3a5d303a353e98fe3dc84511f54b0fb7"],["/tags/java/page/2/index.html","476aa849b08e7526dcdd2a50ff7a290e"],["/tags/java/page/3/index.html","7512006dd5e4909e9a6038fa9d104f4c"],["/tags/java/page/4/index.html","1407463abc86c5ab9cb1667068e46a00"],["/tags/java/page/5/index.html","e5a886dea3df2a8516400b905b7b5433"],["/tags/java/page/6/index.html","70ff849785098253c5fe9b04559bdafe"],["/tags/python/index.html","4c53583af8d5265353463ca83374fcb7"],["/tags/python/page/2/index.html","e973c509432780e84fca6ba2652e5b0f"],["/tags/python/page/3/index.html","6d8cf564191cc1f7850b2c89bbbd3351"],["/tags/冒泡排序/index.html","da6c0ab18b29cc4a2a37f28514d49c00"],["/tags/算法/index.html","95c8e34fd0c62279f3d7f22611ac5a26"],["/tags/算法/page/2/index.html","6b087957f2c6dfbc7b04dd570c75961b"],["/tags/算法/page/3/index.html","f7480db930162278cdb086b1487ab06d"],["/tags/算法/page/4/index.html","0135efa20be86d6fe1e3bf01b24cea6f"],["/tags/结构体/index.html","9e46d2162f21bb2209b0cca9c15a7bbd"],["/tags/蓝桥杯/index.html","60623e01242f65e1b5ceeb69ad63324e"],["/tags/蓝桥杯/page/2/index.html","2223cbfac14f1e3f5f3f5edb8c0754c2"],["/tags/蓝桥杯/page/3/index.html","e0bbe97535abbd65c479c6d15f9919d8"],["/tags/蓝桥杯/page/4/index.html","1d36df60d5321a40d95c9e883e343688"],["/tags/蓝桥杯/page/5/index.html","2b508f1964a3b028bc304fb585064b6f"],["/tags/蓝桥杯/page/6/index.html","06dbdd045ce7a85318f455d95a6836a7"],["/tags/蓝桥杯/page/7/index.html","39d3f36727279f69d0a1c46ce78f738e"],["/tags/蓝桥杯/page/8/index.html","96045fb17cd5c8058aa3aba5f516027b"],["/tags/资源教程/index.html","4aa6e618899faf0dd986b220098d4af4"],["/tags/链表/index.html","c84ca295589a2c57de4e26a0cfd73c60"],["/typora/index.html","6bca67551865ea6deab52650b7da95b9"],["/七段码（JAVA）/index.html","95ef520e6258644576c74012863de46a"],["/作物杂交（JAVA）/index.html","f2605d50dc1f0f0b9dc8576b26d479cb"],["/全排列的价值（JAVA）/index.html","3e50cae6fae2b09acc10c34020905b1a"],["/包子凑数（JAVA）/index.html","e72737c5e67e3b47c0c89e33256b0752"],["/双向排序（JAVA）/index.html","c4eb21ac9ae45d108c87680836fef9bb"],["/取球博弈（JAVA）/index.html","359a6ccd3f73d3211b5d6b0425d35e6d"],["/合根植物（JAVA）/index.html","7f58dd35e1994b3c6fd162e2ecc1e064"],["/四平方和（JAVA）/index.html","a1b06244b0e3d1fc3aaa52c6ed152164"],["/回文日期（JAVA）-1/index.html","9da22239bfc8d74d1bb3ad053a5cac99"],["/回文日期（JAVA）/index.html","b5130f919e2c739468eedc442e79262c"],["/山（JAVA）/index.html","24ef963345b2f675d26e4ad2868f851f"],["/左移右移（JAVA）/index.html","99c623039e5318717520fc9a8d1e363b"],["/成绩排序（java）/index.html","9b36cd545fecc6b8f3fd64abd1841628"],["/数位排序（JAVA）/index.html","954a7d396fe38fd3225b1326db6be088"],["/数字三角形（JAVA）/index.html","be37c24692014ab2eb0e2cfddf4a89f5"],["/数字加密和解密/index.html","31721a2b0e74b41952cbf2486d3929b5"],["/数组切分（JAVA）/index.html","a9653b8ebbd23ae04ffcc2d5d10b656d"],["/方格填数（JAVA）/index.html","f5594d5207203217fd2b53df513efc78"],["/最优清零方案（JAVA）/index.html","0e5e7c45ccd272b99a1dedaf390e5960"],["/最少刷题数（JAVA）/index.html","2db4fe46b8bac3b554925a53da87ac90"],["/本质上升序列（JAVA）/index.html","8bc77269468ae19b20ee52d865b117ec"],["/杨辉三角形（JAVA）/index.html","67964da4d598a96334e970f37877ab1e"],["/案例2-1 商品入库（java）/index.html","d2b30336815d0c6a134c591391d27b7d"],["/案例2-2-小明都可以买什么/index.html","ac7a945c92f0ac1be0ecebd3b6297a8a"],["/案例3-1-基于控制台的购书系统/index.html","abdf68549ec945998aa44f1c8ce2f8bd"],["/案例4-7-经理与员工工资案例/index.html","0f767b6129c57a6b52467467d1a4e70a"],["/求和（JAVA）/index.html","1ee4bd9615361f76ecd4fe8ba0f6d9a0"],["/求阶乘（JAVA）/index.html","24311091f51c41904e17b06f9deac85c"],["/牌型种数（JAVA）/index.html","dbf492cc00e8909aebd485fbc80eefb8"],["/猜字母（JAVA）/index.html","bad605a03c7aa9615c6bfc6f2e79b2bd"],["/猜数字（python）/index.html","e66b4ea75feba18826f1317e87537c1d"],["/砝码称重（JAVA）/index.html","48c847cc81965473b702ea62a8ac3334"],["/等差数列（JAVA）/index.html","8a7842179373fdde103ebeb8fe25d05e"],["/蓝桥杯--单词分析（python）/index.html","5a97170d58ba27b65e3a90b97ccaa69c"],["/蓝桥杯--回文日期（python）/index.html","0f05f80c383824c2f1eb3b3092426db6"],["/蓝桥杯--字母数（python）/index.html","51367a6fad65ccac8f872213f85b71f4"],["/蓝桥杯--成绩分析（python）/index.html","be1b3a0b5dbedaa285605c93a632d092"],["/蓝桥杯--成绩统计（python）/index.html","3867bcd17566cc3e1f6c779342e3d029"],["/蓝桥杯--排序（python）/index.html","6e0587c47896c3f8682b174923464f2b"],["/蓝桥杯--数位排序（python）/index.html","065c65079dcf4f955004f53c60b13d11"],["/蓝桥杯--猜生日（python）/index.html","b1dc6264c36625fda4706e57acbc409d"],["/蓝桥杯--猴子吃桃（python）/index.html","1f4890c6986328ab07764153ffde643f"],["/蓝桥杯--石头剪刀布（python）/index.html","453782e1db48ec6ec0fe339e649f8de9"],["/蓝桥杯--移动距离（python）/index.html","cabe833fbd58a1e8267b38607df57767"],["/蓝桥杯--空间（python）/index.html","7915a506bf6e5b7c07769f13c5355d97"],["/蓝桥杯--等差数列（python）/index.html","50ab6e5bd956c1a669123efac4637ff0"],["/蓝桥杯--纸张尺寸（python）/index.html","aae2eb4ec8eda040426dc7c4112c15be"],["/蓝桥杯--结构体之时间设计（python）/index.html","d75c7b9b871bab05c44ef15b757cacc0"],["/蓝桥杯--货物摆放（python）/index.html","410f0ac063ea5b7d1eef4d50b1da2378"],["/蓝桥杯--质数（python）/index.html","ffb82f18ac3c54f150804751e56bc8e9"],["/蓝桥杯--购物单（python）/index.html","e460d8542d609990210b6ee832a42f20"],["/蓝桥杯--跑步锻炼（python）/index.html","c98452c33dd928c5a3376cbc8a544c61"],["/蓝桥杯--迷宫（python）/index.html","f62a2a73c120f5b6749d336ce474362f"],["/蓝桥杯--递增序列（python）/index.html","be7fff14a5e1d12f04330e5b0c586f2e"],["/蓝桥杯--链表之节点删除（python）/index.html","7dd041f0c058d1f145c871dad1a7a6d4"],["/蓝桥杯--门牌制作（python）/index.html","7c7fd25b12c3fe73a6ccfbc3ad2b2e06"],["/蓝桥杯-592门牌制作/index.html","e5ab0c3d4bfc912b011193bc71c03177"],["/蓝桥杯-单词分析（java）/index.html","48b9b6f3daa8169284b1f62d2dec5efd"],["/蓝桥杯-字符统计/index.html","ecd09a792f40a7c33e0ec3173e40307f"],["/蓝桥杯-山（java）/index.html","c200b04589d2bbefe4941e5974e44ed0"],["/蓝桥杯-成绩统计(java)/index.html","e214be7e50f59bc4784730d0e00837fe"],["/蓝桥杯-数列求值/index.html","0e84fcdbf8c76b7883851ba5f8cfa003"],["/蓝桥杯-数字三角形（java）/index.html","f9cd6f1f4768d64ed0cd909f9c77f81c"],["/蓝桥杯-既约分数/index.html","d460e95cb59fcc4a3deb5d6c195180fd"],["/蓝桥杯-时间显示/index.html","9fd77d6aeb5c3b72dc74bee58d9d7d9f"],["/蓝桥杯-最少刷题数/index.html","aeeedd911c54d1b82231a50089914f2a"],["/蓝桥杯-特别数的和/index.html","e5da010eb5ac1e30cbc5856b278c51f7"],["/蓝桥杯-蛇形填数/index.html","01803389571bba2413ff25c95b2b270e"],["/蓝桥杯-跳跃（dp）/index.html","890d24114ae716fc2c54ec0de700ef0c"],["/蓝桥杯-链表数据求和操作/index.html","844be2156b0d4076be6b39e879627de7"],["/蓝桥杯-阶乘计算（二分）/index.html","ff95cbd7d12dd2dd0bf1dbf114f4812d"],["/蓝肽子序列（JAVA）/index.html","ba04934eee6517f22964af9fcf625de5"],["/计算球体积/index.html","bee470325f6f4da650dffd5963a73db1"],["/计算矩阵边缘元素之和（java算法优化）/index.html","21ba0091590f5bf4119e63fb465d006f"],["/质数拆分（JAVA）/index.html","189079ff14edb0b93a734372ed167b1c"],["/路径（JAVA）/index.html","497ce0d6857b76b462167d1debf27788"],["/重合次数（JAVA）/index.html","6c8fedeb67a1bacc64e7c39847a44138"],["/闹钟定时程序（python）/index.html","aba8f7978252a924d7367f515749fd27"],["/青蛙过河（JAVA）/index.html","5371778ae65b09d94597a6e32390d539"],["/验证码（random类）/index.html","73362058714e162750e5a4f590066e74"]];
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
