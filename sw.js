/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CentOS7安装时直接跳过了安装信息摘要页面的解决方法/index.html","11c7ed23f770070f00cd2836524a72fc"],["/GCD（JAVA）/index.html","a6bcd82e4ef13bfaa4196ee2a17aa3eb"],["/Hexo-GitHub搭建个人博客/index.html","385b493e085212fad35cc3d40b99a32b"],["/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","c98e2cab04b361a8c6fc47bf3ecac696"],["/LeetCode46-全排列（dfs算法）/index.html","560447869ffc01123214a13d44fd0b5d"],["/Python150题day01/index.html","827592fb02376d9d565de6bb4a93cf8b"],["/Python150题day02/index.html","7d1440a0abd547d605f254bcafeda84e"],["/Python150题day03/index.html","6447254217f2bb2f5ba608e2e5a990c6"],["/Python150题day04/index.html","24e00b783d0a10f7c5e69727d28e1fe3"],["/Python150题day05/index.html","5fce67d093725602fdb9894b037ecc45"],["/Tomcat部署项目后，验证码不显示问题/index.html","1bf720a83e9d365367a17d5e69b73edd"],["/about/index.html","9fa068c8ee0a5d12d69e38064dbdedc3"],["/archives/2023/04/index.html","deba3b5eea0c149c1176a5ab321cb62a"],["/archives/2023/04/page/2/index.html","64c84253a12a46e83278cfea587574c7"],["/archives/2023/05/index.html","b3046c38e7ca4b7f3ef8c94484b74c41"],["/archives/2023/05/page/2/index.html","9d0c54e25c3bebb33ef089ed7e587647"],["/archives/2023/05/page/3/index.html","edb8b4cb7e8afc34b06c233f30817275"],["/archives/2023/05/page/4/index.html","c86d17077e8d86797d82a768bf0ae353"],["/archives/2023/05/page/5/index.html","fc0bfef6c6ed50a5ce605767f0a635d6"],["/archives/2023/05/page/6/index.html","76bb0d50365bcac22cee85331b4b97f1"],["/archives/2023/06/index.html","0c307c96c1aa734f59eb31ca2579293e"],["/archives/2023/07/index.html","bf6b9c99ced83916689990e4f077b45a"],["/archives/2023/07/page/2/index.html","946d431ff00ddefe61487559a0d8c91a"],["/archives/2023/09/index.html","2eb9cf9be635828a4eb3ced26e16ff56"],["/archives/2023/10/index.html","1267dab7d1b75e78fa74e70f0fa7107a"],["/archives/2023/index.html","c91eea2ce1f8d1bd48d2c4eee5cb98c1"],["/archives/2023/page/10/index.html","3bd6943f83cc0750d0184178836d3bd9"],["/archives/2023/page/2/index.html","beefcdadf234db047a5ecec7aa9a9d43"],["/archives/2023/page/3/index.html","93dd7678e3aaa7fe7445f3bd67bb11c3"],["/archives/2023/page/4/index.html","920c61d3ae7ad00567450868e1c0e165"],["/archives/2023/page/5/index.html","d5465be303bc77d2bee46bab50e60932"],["/archives/2023/page/6/index.html","2855a1e73a3a16db786cdcf39d240552"],["/archives/2023/page/7/index.html","a868454c505c08870f77adab6d664344"],["/archives/2023/page/8/index.html","f6dc277a45100fc9fcf723f9bdc41e74"],["/archives/2023/page/9/index.html","27fb2a4a657bc7cd3b34405bc9266caa"],["/archives/index.html","abd22ba18d2ab0adf3e110d5c197cc7f"],["/archives/page/10/index.html","355af40dd665d42919f09a0a6d8b53bf"],["/archives/page/2/index.html","5872980ee570e4ea59156f941594d672"],["/archives/page/3/index.html","e1ae55c053db58f9bd91d4c3245a93ea"],["/archives/page/4/index.html","f7408397ccf6cdb27da240bd38d612f7"],["/archives/page/5/index.html","7316c77c5b27d1af84da0a43a28b50f3"],["/archives/page/6/index.html","7dd3d68a12a6c1b58344ce745eef4dc9"],["/archives/page/7/index.html","ac92162febef37eb78198fc78b5c5708"],["/archives/page/8/index.html","dffa977dd6080bfb00611a8fef364487"],["/archives/page/9/index.html","637fb42d0892b6f0a0ee90a15acc1eb8"],["/categories/index.html","16942d964f4a39fe42214df5055457f9"],["/categories/java/index.html","571a8eb47e7e35702fd6550c72e3fdcd"],["/categories/java/page/2/index.html","ccf33cfe9fd65667faa80c18831000ca"],["/categories/java/page/3/index.html","bdb6536f335d3de0fce1ebf1d5658146"],["/categories/java/page/4/index.html","65460de76fe011ef1904962d3046551a"],["/categories/java/page/5/index.html","b2c2d89b35acd188ea72a0c5e635f13c"],["/categories/java/page/6/index.html","61b8be33ae19c485ee3125f5b7c6e18d"],["/categories/java/算法模拟题/index.html","eeb6ab316cbec4ded87dee900c0e5c28"],["/categories/java/算法模拟题/page/2/index.html","6384b54b1328088c744af54db3754ee4"],["/categories/java/蓝桥杯真题/2014年省赛/index.html","07d719af53955be8746a8d188a9f9b24"],["/categories/java/蓝桥杯真题/2016年省赛/index.html","5f69d59b0e778a29db3e4e408d8e9a8c"],["/categories/java/蓝桥杯真题/2017年国赛/index.html","f6645437e118e6b720579d19b26a18c6"],["/categories/java/蓝桥杯真题/2017年省赛/index.html","e756b02b08af5a189f6c4c192b09ca1d"],["/categories/java/蓝桥杯真题/2019年国赛/index.html","6653d02d16d57c34d7b80e472945af61"],["/categories/java/蓝桥杯真题/2019年省赛/index.html","b2ebcb09c6a1d593bf414773b12c36dc"],["/categories/java/蓝桥杯真题/2020年国赛/index.html","63c64c33e451a090629ee4e512b26745"],["/categories/java/蓝桥杯真题/2020年省赛/index.html","04611cf5b7e2665602cd7c1790730aca"],["/categories/java/蓝桥杯真题/2020年省赛/page/2/index.html","cee39a2245289f7cca8dadfbaf606ec5"],["/categories/java/蓝桥杯真题/2021年模拟赛/index.html","576a636bf21b191b178ca7365b8d0281"],["/categories/java/蓝桥杯真题/2021年省赛/index.html","4bda145b6484659befb14980fbcedde5"],["/categories/java/蓝桥杯真题/2022年国赛/index.html","695add8c63bb71c4cd18a15efe71b52e"],["/categories/java/蓝桥杯真题/2022年省赛/index.html","b89259fab50e6533643ff2e10d8d6415"],["/categories/java/蓝桥杯真题/2022年省赛/page/2/index.html","473f2597fceba0864d01c81efccc458e"],["/categories/java/蓝桥杯真题/index.html","fd0e5678583d30ee2c022a392a3f2a66"],["/categories/java/蓝桥杯真题/page/2/index.html","bd078ba1ed49f0b3d525779222a26b0d"],["/categories/java/蓝桥杯真题/page/3/index.html","44a42064a64f437ab842f211ec232d4b"],["/categories/java/蓝桥杯真题/page/4/index.html","e1f6a725e18985f15d0319483bd880c5"],["/categories/java/蓝桥杯真题/page/5/index.html","fb79d7956c7de2478b3102ae5ed31bea"],["/categories/python/index.html","477c6076769bea9266e6db269ff8a4d7"],["/categories/python/page/2/index.html","53b9270aa0dd65d77e029c7d476cdaac"],["/categories/python/page/3/index.html","aa514e821ca17feaee49e5d9944a84bb"],["/categories/python/入门150题专栏/index.html","b6189dc10b5380b2cc9d1a938bc5c62a"],["/categories/python/算法模拟题/index.html","902a5cf7a404f45dfa9b4f88717fcae8"],["/categories/python/蓝桥杯真题/2012年省赛/index.html","89d2775d0ab67019d2ac2d5222ebf07b"],["/categories/python/蓝桥杯真题/2015年省赛/index.html","f1ae2f6299c4a1c545c92883f519f368"],["/categories/python/蓝桥杯真题/2017年省赛/index.html","f1e87a99326381d3b2d558979334dac4"],["/categories/python/蓝桥杯真题/2019年国赛/index.html","236a46609e5075d61227a3e657834e9a"],["/categories/python/蓝桥杯真题/2019年省赛/index.html","4878f5b2b1827d74cc346415ee69351f"],["/categories/python/蓝桥杯真题/2020年省赛/index.html","e9d621cc477ceb749cd7d536653d5e5b"],["/categories/python/蓝桥杯真题/2021年省赛/index.html","e63b7373084d4bdd241d863a6fdab41e"],["/categories/python/蓝桥杯真题/2022年省赛/index.html","37dcbbb7c04e7095b37a57c905833d3f"],["/categories/python/蓝桥杯真题/2023年省赛/index.html","005a7d5518c587f41fc760aaeb1faa1e"],["/categories/python/蓝桥杯真题/index.html","ccf0832999ec86e675003cf5d15010b3"],["/categories/python/蓝桥杯真题/page/2/index.html","e58e223db3cd2f00ce7d3aebe48aee9d"],["/categories/python/蓝桥杯真题/page/3/index.html","07888f51880ded7f471a94733a284d21"],["/categories/资源教程/index.html","07e3bcf78551581962c114ea40d58f44"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","0b7559b4c0c7d9f33a9d259120c93635"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","a68537741902cb2fda0d785da264567a"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/k倍区间（JAVA）/index.html","5a6a3d8a1dd09c222d9a68302107a4b9"],["/link/index.html","446c48ca028744ac325b89bca6caf952"],["/page/10/index.html","2d3659f9533a2e4f574d4a8f0acc18c9"],["/page/2/index.html","f7bb0a5f0141d80d8fca40def3958577"],["/page/3/index.html","35173a629a5fc672fde13017dffb6460"],["/page/4/index.html","b810763b167cb20395cab1d2bf21f151"],["/page/5/index.html","44e89d89516bf1a5c29675727fe03fbb"],["/page/6/index.html","12572cce601392241d2b6e3748dd7715"],["/page/7/index.html","b599f1b8555cb7f657b3cd4f9cc3a772"],["/page/8/index.html","e3acf4f456e09c47ed31460eb927de41"],["/page/9/index.html","6dc2b153fdda155ae8a9d84c77379562"],["/sw-register.js","64bb1895e7e836cfc3aff28481990b7f"],["/tags/GCD/index.html","ce56202da5eadabac28f741e28294773"],["/tags/dfs算法/index.html","c267e2b9506272f3c8c20d4c29ea1ccd"],["/tags/index.html","1f91002d40e744a4dfb9331e5c8d26dc"],["/tags/java/index.html","007417396723675e71d5e4dafc2bff1e"],["/tags/java/page/2/index.html","2a3868c835a56fc59cb4d766a7db29b8"],["/tags/java/page/3/index.html","9ab11ab56b4af4547ed302052c25ba4e"],["/tags/java/page/4/index.html","7b756fe1a68a7294999dc0cac48f4a13"],["/tags/java/page/5/index.html","1bf7065c65dbd0a4219deb0b0aeb383d"],["/tags/java/page/6/index.html","4fb9327e8b95ea9ed139dae6aaeb0712"],["/tags/python/index.html","d18ce1c7b0f68cd4353046816b901790"],["/tags/python/page/2/index.html","c1456cee153133b46a1456d3aed6d265"],["/tags/python/page/3/index.html","b94da6e6c1193def14424f4f30bb3ef7"],["/tags/random类/index.html","f69ac6d32b07b521bd01d861e92858b2"],["/tags/二分法/index.html","d784ace9a7e07594ac9bd69c97256056"],["/tags/入门150题专栏/index.html","64d3de43841f0de5f8fab5c8c374fe20"],["/tags/冒泡排序/index.html","a9a6c5b96b5b85daade6fe7000f2f0ed"],["/tags/力扣/index.html","30a36343826f96c9f69e36700195eefa"],["/tags/动态规划/index.html","dd5f8987cd7520d8c6bf968b2336fb61"],["/tags/字符串/index.html","eade836de3b7b8509cd589d83f467161"],["/tags/并查集/index.html","8ed0ae0865f5dccdfe261dc9098dd54b"],["/tags/搜索/index.html","f8a5c020f7f54ee6f67774176dc93f57"],["/tags/暴力/index.html","ba8a358ccc48e119fc915b66045bae0c"],["/tags/构造/index.html","fa7142256899b1020eef2ddd6e556f2a"],["/tags/枚举/index.html","7f737e4df5b5f1d3111356844d6ec1c0"],["/tags/算法/index.html","8ad45a537704406bb8695fef8d056160"],["/tags/算法模拟题/index.html","bbd18fac3a90e1148df86f578da91364"],["/tags/线段树/index.html","68534ca01fc7eec2c328ef6cc1149ac6"],["/tags/结构体/index.html","cec0950096e1f872e7d7cefce53c6297"],["/tags/蓝桥杯/index.html","6f0bcdc1edb869be5398b6364a8a63ab"],["/tags/蓝桥杯/page/2/index.html","91613e6c4b2dab9f2b7fc2c0515d4ef2"],["/tags/蓝桥杯/page/3/index.html","f8828dcfad7f9841f03a79050df48b21"],["/tags/蓝桥杯/page/4/index.html","93a7db1a00a7117c870fe5f302197b21"],["/tags/蓝桥杯/page/5/index.html","9a8e7deaf93a5d70a5b99a966871069e"],["/tags/蓝桥杯/page/6/index.html","002dacc836806da9543dd6f6ee377311"],["/tags/蓝桥杯/page/7/index.html","824d22e809e557158a05ecef480c4959"],["/tags/蓝桥杯真题/index.html","a1ea9b4a35858c3b0d055d9c2c397641"],["/tags/资源教程/index.html","2e7307087087010119fad42bdf2d1b0c"],["/tags/递归/index.html","29dec1c280d85e8cd060f6e948f73ed9"],["/tags/链表/index.html","23185c5914c7fea9967938f91185c1a6"],["/test/index.html","34bb1bd4ae4c8c71188fa3abe1963faf"],["/typora/index.html","8cd0f0b5c7b68bb4a1daac7b57040728"],["/七段码（JAVA）/index.html","b1febf74d09604e63b9acd25e471749c"],["/作物杂交（JAVA）/index.html","7a4ab6b9f7079b57f3ad24be374c3cbe"],["/全排列的价值（JAVA）/index.html","6c15a7c60747f249158c4cf5d2dad9ce"],["/包子凑数（JAVA）/index.html","dc423846313b14768a2610385756fcc5"],["/双向排序（JAVA）/index.html","9ef2a9168c99186af5204953b4f2db15"],["/取球博弈（JAVA）/index.html","04c9a3df08533124fe9c7411c5e9fcbe"],["/合根植物（JAVA）/index.html","5aa4b9007d5341a1dcc0abac2c5f2834"],["/四平方和（JAVA）/index.html","22dde0a4c5c6d2d2a7bd1066f4e1dc23"],["/回文日期（JAVA）-1/index.html","e3fd2e1ef0c3ee5cc3b457ceac223983"],["/回文日期（JAVA）/index.html","5b06a0a4bbf5b60f0d848f88251fe29d"],["/山（JAVA）/index.html","ae6582b46fafcd6d71cb140bf91cea6a"],["/左移右移（JAVA）/index.html","e8a7c8a408ec34550d780d362d55d125"],["/成绩排序（java）/index.html","4d2408c06709caba1e2f00593ba8d8db"],["/数位排序（JAVA）/index.html","c3ed46dd325fbfc49d8660d87382160c"],["/数字三角形（JAVA）/index.html","dbcf6ec900f1a0ae4bf116b869eb0da0"],["/数字加密和解密/index.html","fe7345ff94bbbe1af1038e4959c0a23a"],["/数组切分（JAVA）/index.html","08eb00895565807e0a4eac8fcc25e05d"],["/方格填数（JAVA）/index.html","ab4cfbabff3d69996772cbe68b3426c0"],["/最优清零方案（JAVA）/index.html","82e2d35a3e84323b5a86bb741f780637"],["/最少刷题数（JAVA）/index.html","853958a8df0bec0af81ee295021353ff"],["/本质上升序列（JAVA）/index.html","333dba96dc07f741d26db92ee976d8dc"],["/杨辉三角形（JAVA）/index.html","d9429d7dec1b7d01ebe16f1b2e98a5a3"],["/案例2-1 商品入库（java）/index.html","faa55938dd55af15dd9aeed16c0406d1"],["/案例2-2-小明都可以买什么/index.html","6befab0c604d9342b634a8ca6b7de225"],["/案例3-1-基于控制台的购书系统/index.html","2f95ca23956ba33a7799cd13e587380e"],["/案例4-7-经理与员工工资案例/index.html","b58027bee856ca0827bc0e59b40c1678"],["/求和（JAVA）/index.html","e94f67a3966b16e9852d53d705c69af8"],["/求阶乘（JAVA）/index.html","a94c19c9d15e1c53a23fff0489fe9b54"],["/牌型种数（JAVA）/index.html","8c9dfd9fa2fdb8e48a3a630901c3c915"],["/猜字母（JAVA）/index.html","ba4e89cbce2486f6f1b89dedbff17f20"],["/猜数字（python）/index.html","6979d42d0218904749e52c7c4a4976fe"],["/砝码称重（JAVA）/index.html","d45c0678c9c4ecfe86c6b7f00e63c34a"],["/等差数列（JAVA）/index.html","1c7420b01c2626566575f14fd865a105"],["/蓝桥杯--单词分析（python）/index.html","e76cdc5e949313c3bf755a4a47cad79c"],["/蓝桥杯--回文日期（python）/index.html","89f746aa62e51304f67611fc7fa0addd"],["/蓝桥杯--字母数（python）/index.html","f46d06408de01d07b17407aed49d7689"],["/蓝桥杯--成绩分析（python）/index.html","f849b611dfab8408993a42ecfebc26ad"],["/蓝桥杯--成绩统计（python）/index.html","2e1eb6525a465dc905c817a98a5396a1"],["/蓝桥杯--排序（python）/index.html","e360a0a75bb70ad6793ad6b228ed22ea"],["/蓝桥杯--数位排序（python）/index.html","576649bd73c1b54dfda274a9dcf02559"],["/蓝桥杯--猜生日（python）/index.html","7bfab8fd264fa4a84a8eecb9aaa49885"],["/蓝桥杯--猴子吃桃（python）/index.html","765b5f6038ba1e6f7801f23cb6cf1658"],["/蓝桥杯--石头剪刀布（python）/index.html","d36a586119540244c8a0c3ad080431e9"],["/蓝桥杯--移动距离（python）/index.html","830ca318447eb8f3adbb658755b9e462"],["/蓝桥杯--空间（python）/index.html","f38f80ada826cb6a04e5c64b0bf84018"],["/蓝桥杯--等差数列（python）/index.html","b788ae4abefd8a62713e8fcaab3bbe31"],["/蓝桥杯--纸张尺寸（python）/index.html","6fcae4f0906e5f7b30057fa30a87d216"],["/蓝桥杯--结构体之时间设计（python）/index.html","51bec8b1da5d624cbd6532bda675eb75"],["/蓝桥杯--货物摆放（python）/index.html","9cf9bd2f5aeb8e6a868f0f53716d2028"],["/蓝桥杯--质数（python）/index.html","0ffc91696f67e452cd641a5f7dc45cb1"],["/蓝桥杯--购物单（python）/index.html","ab9b56ccfe49e48703572fae90928d56"],["/蓝桥杯--跑步锻炼（python）/index.html","fd0fb2cb8bb14be3ed5bda193ff079ca"],["/蓝桥杯--迷宫（python）/index.html","6ffaca5df90f6e16b690c124bae4502b"],["/蓝桥杯--递增序列（python）/index.html","7bebfa5a7fe7cddf85b1c2d5669e53c4"],["/蓝桥杯--链表之节点删除（python）/index.html","19bff4d734fd075b6267900227ff4242"],["/蓝桥杯--门牌制作（python）/index.html","e3e43256701cf043a836868d2e2ecb5f"],["/蓝桥杯-592门牌制作/index.html","b13c5e12173bad79cb33cbfdb9b04b4a"],["/蓝桥杯-单词分析（java）/index.html","0d1cb9156e7a99d68f8f76524e059565"],["/蓝桥杯-字符统计/index.html","6d4db5c333173427c7afe26387087759"],["/蓝桥杯-山（java）/index.html","c1088c0a700526e7f299d2eae85d5519"],["/蓝桥杯-成绩统计(java)/index.html","0aff59209ef875dfd35f7ce2e94ba0f9"],["/蓝桥杯-数列求值/index.html","e43eab9f0c87e1a4eac7096b2374c3c7"],["/蓝桥杯-数字三角形（java）/index.html","d3f23847b2c09c25404c267377eab332"],["/蓝桥杯-既约分数/index.html","eef09f11e8d0279919cd913a03105969"],["/蓝桥杯-时间显示/index.html","e992f6935269a5e4b8cc6dbf8ea2ffd9"],["/蓝桥杯-最少刷题数/index.html","b8872f773808753c9cc275a2f5cac558"],["/蓝桥杯-特别数的和/index.html","c10467038a8c01829f165571d8a4b8be"],["/蓝桥杯-蛇形填数/index.html","d8f8b0a6c6f0d8180b814be506d589a6"],["/蓝桥杯-跳跃（dp）/index.html","fff5a22db6b37bdbd4efe33c15deb73f"],["/蓝桥杯-链表数据求和操作/index.html","6154cf209054625b7a97395bd500dcb1"],["/蓝桥杯-阶乘计算（二分）/index.html","8c57e2b0dcb5f0c0a5daa267472ffac8"],["/蓝肽子序列（JAVA）/index.html","d862600c27e588cdbb492a69a0694738"],["/计算球体积/index.html","198cbe3f9e7d06d7f6aa37343f8e7985"],["/计算矩阵边缘元素之和（java算法优化）/index.html","2ce56a1696013838f733831dbd6c76f7"],["/质数拆分（JAVA）/index.html","01ab4bafbdcb35f923034f7a5791b588"],["/路径（JAVA）/index.html","6c43b2f91f74be737258e319bd35c1cb"],["/重合次数（JAVA）/index.html","20c8d5a0fe3bfb290ec5dd7c6de86a9f"],["/闹钟定时程序（python）/index.html","b13ce5dff701136b1bbb13d7df40d516"],["/青蛙过河（JAVA）/index.html","3e44d9a0e45ef7ea427b28f47bee9145"],["/验证码（random类）/index.html","08fa09d37ee9c6a477b21348efe1dfc5"]];
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
