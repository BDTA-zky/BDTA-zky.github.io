/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CentOS7安装时直接跳过了安装信息摘要页面的解决方法/index.html","df879c510de11e72ed695b27a80f55f7"],["/GCD（JAVA）/index.html","0dae112cc027a537c61ad1ed1babddcb"],["/Hexo-GitHub搭建个人博客/index.html","0299e1e3fb31e64f19f392284952e8f9"],["/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","95e1a16ff22dee95d74cb20ff5627563"],["/LeetCode46-全排列（dfs算法）/index.html","c8e9ef5c1d996a8086f891efadcb8578"],["/Python150题day01/index.html","f0857623af5bb61a9645051ccbd631b8"],["/Python150题day02/index.html","fb6bbe331188e4f148c0a3c4979e4bc4"],["/Python150题day03/index.html","71a80796b3a740c1e64ed9f0dcb6d4cd"],["/Python150题day04/index.html","4c27089df787491d57b2b9ae89028706"],["/Python150题day05/index.html","6b85b966ab985043309bca24fe1c80d1"],["/Python150题day06/index.html","774c4e3c6088ff1a072dba31298f1eb2"],["/Python150题day07/index.html","836aa7067052c53a33383aa633a6fb45"],["/Python150题day08/index.html","e73c387ebd66dc4944268de079663a85"],["/Python150题day09/index.html","c45073aadfde1755ba0e97d1edf59f0c"],["/Python150题day10/index.html","c1d7dba73622e39f828a6c61cea26166"],["/Python150题day11/index.html","1637ccd85ffcee6b3e26c128d1d0575b"],["/Python150题day12/index.html","f9b95e9d6b90b3496ccac48c96c3a0de"],["/Python150题day13/index.html","ad79dc9ab8b697b76d7610260f4a1f9d"],["/Python150题day14/index.html","0dad3ba9dc9699bc17bc0f957b623644"],["/Python150题day15/index.html","cf9c6f3b50b8048e953d66a316684cb2"],["/Python150题day16/index.html","09e749de7bc3ec88faaa2ab801a27cbd"],["/Python150题day17/index.html","5a8c1cb765994d0054adda7de1443e0a"],["/Python150题day18/index.html","19ae0c2bc4954764992d6fa7807a0183"],["/Python150题day19/index.html","4bc57b640b81a11800525b79cdeb6970"],["/Python150题day20/index.html","cf1df144ff484bd71c7418c1094ed702"],["/Tomcat部署项目后，验证码不显示问题/index.html","5a16069cddfa2618173a9ce7209f7b2e"],["/about/index.html","716f3bd3c0e5264aa8794e95427929df"],["/archives/2023/04/index.html","ac19caf1ceb0fddec3f85ed0451bfbb7"],["/archives/2023/04/page/2/index.html","bb4a22a06d76a7259d1e48afd0a9fc4b"],["/archives/2023/05/index.html","ec12923716738d67aee86d1d527acb96"],["/archives/2023/05/page/2/index.html","cad6af8f7e82bb9282e2d48b2847d9c7"],["/archives/2023/05/page/3/index.html","2a6fe24dacfc81cfc14cf0cb8d3c3e2c"],["/archives/2023/05/page/4/index.html","602ad2295d210ad50183ec228b693ac5"],["/archives/2023/05/page/5/index.html","bcc97ce3cecb25968c0d452dc878d302"],["/archives/2023/05/page/6/index.html","6dff5d0c4464af177aaf92f2bd96bc0b"],["/archives/2023/06/index.html","2b7f20b8f902fd568a889ba88870a726"],["/archives/2023/07/index.html","21e0fcc594c5748aeb51b0f689be548a"],["/archives/2023/07/page/2/index.html","4340ccd33309c52653326bd143889214"],["/archives/2023/09/index.html","52b8e2d8249c4bec42275e822599d814"],["/archives/2023/12/index.html","9295f2bd58a0a2846f1a51c4ed1fa6d7"],["/archives/2023/12/page/2/index.html","d975ba49a2123e0a89dca31fbe40fdd2"],["/archives/2023/index.html","2b71582e22006bfac04a6a5d7bdca762"],["/archives/2023/page/10/index.html","66ac35056907dc6e02968b7037a19cf2"],["/archives/2023/page/11/index.html","151788ca7093bad0e8c580c9b60f14d4"],["/archives/2023/page/2/index.html","6b4e7dc38579e00377db6bc3ca27bf97"],["/archives/2023/page/3/index.html","8bebb833e3a66ed24c4cc84a76a7e843"],["/archives/2023/page/4/index.html","7f8a5aee8bddbc597b2de880f0efe083"],["/archives/2023/page/5/index.html","f6eebbd3248aac00823f435296e19d6b"],["/archives/2023/page/6/index.html","3e06452501785ee65997e440676bd0a2"],["/archives/2023/page/7/index.html","f41285cd5b14bfa6a0b21ca31d581ccc"],["/archives/2023/page/8/index.html","bc204d958d901c93ebb32b3f45b066df"],["/archives/2023/page/9/index.html","63fb0c70e34c75b37a606c53e69bb4e1"],["/archives/2024/01/index.html","795c9066a571bdf4aeef21e0ac108e01"],["/archives/2024/index.html","63ac8eb65faf955f526d020ad28dec19"],["/archives/index.html","e36bc73981c12bb5b2d081023a05f350"],["/archives/page/10/index.html","19fc785b73ad8a7f9868bfdb458f85b9"],["/archives/page/11/index.html","ebff935f9d70055619693bd88c47d5e1"],["/archives/page/12/index.html","b4aac833d237607562e47b0a168c9e44"],["/archives/page/2/index.html","288e7f936b7fdb05ddea36d670a0d0e3"],["/archives/page/3/index.html","bce9be98fa5e21192fb3a5e2e142ace8"],["/archives/page/4/index.html","26a9a6f52ea41be31db8db9297b4776d"],["/archives/page/5/index.html","d4fba7dcd74b4b918865818971439a04"],["/archives/page/6/index.html","235f66e5db084490cb7be273c2fd3784"],["/archives/page/7/index.html","8edd8a30f3ebc2288cc67a322d3e286c"],["/archives/page/8/index.html","97d32180e01b0a2a329998dbe23455e6"],["/archives/page/9/index.html","7e7dabac1d01176b555ec6a81c59b0c9"],["/categories/index.html","2b5dbc0e5dc1d43384c5697e6c45dca1"],["/categories/java/index.html","385689fd82a373c9c5fa33856709f430"],["/categories/java/page/2/index.html","6a218bd9f197017bc8bf8c747b59e172"],["/categories/java/page/3/index.html","bfcaa5e38b22750ff88f351f444d8d43"],["/categories/java/page/4/index.html","6ba2c4a5b7f9b5ebcde89f8bc041c0db"],["/categories/java/page/5/index.html","524f6917bd9a70918eb04dfba89780d8"],["/categories/java/page/6/index.html","5e0e7eecfc885bb445a234f8794bf7bb"],["/categories/java/算法模拟题/index.html","cfe8fe3f20228b7b0ba1bb18947955b6"],["/categories/java/算法模拟题/page/2/index.html","87a1f707dc14f3c0a1d31b6368aebafb"],["/categories/java/蓝桥杯真题/2014年省赛/index.html","fff1a8c2d7cf3a1d6b749ebd2654b678"],["/categories/java/蓝桥杯真题/2016年省赛/index.html","4db8a3561bf6dce2a5fdc3ed8a961b02"],["/categories/java/蓝桥杯真题/2017年国赛/index.html","423c93b25cff7d719fc329fa91467bc1"],["/categories/java/蓝桥杯真题/2017年省赛/index.html","6ad4a415ffba28833baeabfdd4745919"],["/categories/java/蓝桥杯真题/2019年国赛/index.html","0d7415f17952f004cfed8cb87dfdb08e"],["/categories/java/蓝桥杯真题/2019年省赛/index.html","30361bb67560479288d34cf4862763de"],["/categories/java/蓝桥杯真题/2020年国赛/index.html","8aaf701721ed9d61ef1c1b3a994fc278"],["/categories/java/蓝桥杯真题/2020年省赛/index.html","dfcbcf169a2947b0b36e1e4b975902d3"],["/categories/java/蓝桥杯真题/2020年省赛/page/2/index.html","192f1c7c06388c93c8985e1017ce83a7"],["/categories/java/蓝桥杯真题/2021年模拟赛/index.html","dbaceece1aae17aeb3fc47665971ca25"],["/categories/java/蓝桥杯真题/2021年省赛/index.html","a52d130d1317f667e833cc1f52a1b107"],["/categories/java/蓝桥杯真题/2022年国赛/index.html","6279395d151c872afaf4819d0ce39447"],["/categories/java/蓝桥杯真题/2022年省赛/index.html","5a5f368860bde9bf2c3f4baa59efeb10"],["/categories/java/蓝桥杯真题/2022年省赛/page/2/index.html","2c1912cb7ff07a5c7be626cf745f001e"],["/categories/java/蓝桥杯真题/index.html","5dcd05af8aa8ab2369ff2c0c5850693e"],["/categories/java/蓝桥杯真题/page/2/index.html","c8147c30c453ad8017a61f59d97252ba"],["/categories/java/蓝桥杯真题/page/3/index.html","62cbae3ed8e90cdf8763685f29b4dd75"],["/categories/java/蓝桥杯真题/page/4/index.html","57eb2689a44ef33f7ca2ae6e4e429756"],["/categories/java/蓝桥杯真题/page/5/index.html","063e8a6745f83fb1ab0a1f7ce5cb7bc9"],["/categories/python/index.html","d07d385524c3c4bd8f9ba4bb8d957c9a"],["/categories/python/page/2/index.html","85e3a808b350cb2f49d05319a43f8e54"],["/categories/python/page/3/index.html","4ad81f8cc0b27eba048b05dfd19d6446"],["/categories/python/page/4/index.html","a847cce420ee61bb07edccd49c31db39"],["/categories/python/page/5/index.html","df4e59c88ff02ce30a602c2d48129afd"],["/categories/python/入门150题专栏/index.html","5c2740484d109e42075ced90bf07895a"],["/categories/python/入门150题专栏/page/2/index.html","832228c89e55a2af79a993cb406616c5"],["/categories/python/算法模拟题/index.html","fdcf5596e78d84563b0bf6d3b8dc4cff"],["/categories/python/蓝桥杯真题/2012年省赛/index.html","cf623c4b2562c473731b1065d90b72d5"],["/categories/python/蓝桥杯真题/2015年省赛/index.html","e9f4a6d1514cc3b725cb94c5b7ac3143"],["/categories/python/蓝桥杯真题/2017年省赛/index.html","a00650e410470c90f0a96aeff88a1296"],["/categories/python/蓝桥杯真题/2019年国赛/index.html","7003b6785b7d3523d92ba7d20ab7c851"],["/categories/python/蓝桥杯真题/2019年省赛/index.html","16a4678d2fd7cefab8113d938c640a76"],["/categories/python/蓝桥杯真题/2020年省赛/index.html","689cd6b6700115c0df936791d206a722"],["/categories/python/蓝桥杯真题/2021年省赛/index.html","935034739fe3c73c8bddd37004a7556b"],["/categories/python/蓝桥杯真题/2022年省赛/index.html","ff073c482b17e8f68b17d77a53f129f2"],["/categories/python/蓝桥杯真题/2023年省赛/index.html","c24d13fbf2c4903196da4fc09f5d3de0"],["/categories/python/蓝桥杯真题/index.html","b7860640c76992c5842c9c3cb5cbc2af"],["/categories/python/蓝桥杯真题/page/2/index.html","4057dba5bb64c40d4db7929ce06cf0e2"],["/categories/python/蓝桥杯真题/page/3/index.html","0dd185c7eab9ab87cb13705cb2f8594c"],["/categories/资源教程/index.html","f4e59f363853d0b82a4f80f9ae55aa6b"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","c92b6c1da979d18449e3f46f8af29de9"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","fd3f1679bcfd95b102ccb845c94e9dae"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/k倍区间（JAVA）/index.html","63146a24d535496202ce934994146cd3"],["/link/index.html","40e6fada4c0580d528cd12b83e3cb27b"],["/page/10/index.html","a36d1cc6842819e0d47d0ff6c1c3808b"],["/page/11/index.html","1c0078a46011d92a749ab850fa818468"],["/page/12/index.html","af41e39a1c695f8216df72929756512a"],["/page/2/index.html","6482e8ec9da291996188386503ea2e5e"],["/page/3/index.html","2c7e4d8f61cb4ea0fe7e1613872687f0"],["/page/4/index.html","b0cc420069a5b077596cc475965fc19e"],["/page/5/index.html","152e9d668f65fc19093fc9c9034f0ecc"],["/page/6/index.html","bad975b2ca7af6a5ad0765ef51caefa0"],["/page/7/index.html","818415773a396d88ebd93de38b8c4fa3"],["/page/8/index.html","a419b6f9376b3389fbf12dfca235d0c5"],["/page/9/index.html","0196f105406b4da46f6d51968e942929"],["/sw-register.js","ea624a28dddec16255d903fbfd488da7"],["/tags/GCD/index.html","24aaac763caacddf9868668576a99ff2"],["/tags/KNN/index.html","1f4c8dd0b9fd7adc043d60baf9d07ee3"],["/tags/SVM/index.html","69a2d80498eb8c59abbe43ea2e89fd0a"],["/tags/dfs算法/index.html","0583bd4c14e0a501d7a86b1b29ef84de"],["/tags/index.html","8b1ec555f017b681086bf2fa402052ef"],["/tags/java/index.html","3420411f1080b7da00343b96ecdb62e0"],["/tags/java/page/2/index.html","b2fc05f10c9d7914a7246d48643d4a98"],["/tags/java/page/3/index.html","7981c8379cbf79e6fac464866f02265b"],["/tags/java/page/4/index.html","a8f1ebae73e19e5db205738c4d90be6e"],["/tags/java/page/5/index.html","ecfd70303c9f530e18aebd062b6b799d"],["/tags/java/page/6/index.html","c43bfd096802a0a15c9cabb339991e9f"],["/tags/python/index.html","4c155695d2424e82f6dd7a8ede88024c"],["/tags/python/page/2/index.html","5a3500b131e34cea88b15c9b87d3aaf4"],["/tags/python/page/3/index.html","7d1496bf50e87afe87e767b899307301"],["/tags/python/page/4/index.html","27c4eae06e09f3d9fb9366827ac157ae"],["/tags/python/page/5/index.html","f8a2387405b3a85edf401b832ccfd3c2"],["/tags/random类/index.html","eafc4daca9ce41ec8cb1b6eca58fc11b"],["/tags/二分法/index.html","87d563e8e757e765413495c0c74829df"],["/tags/入门150题专栏/index.html","f4c715727a55b48db431a0b1f3a72770"],["/tags/入门150题专栏/page/2/index.html","dd870ea84a5ec26f78c9e076101836c8"],["/tags/冒泡排序/index.html","5d2115ddf249055ea82258029df160ce"],["/tags/力扣/index.html","0c0ca231ddbff478fa6823664068a883"],["/tags/动态规划/index.html","42fc7ba319ceba1c797367ddb49a0c01"],["/tags/字符串/index.html","c7e4454d3aa6fff0af56fc59a3441243"],["/tags/并查集/index.html","4f71bb1e3e70c77e19c28fce8e2d4310"],["/tags/搜索/index.html","29538b9505db943608a0274d85d9cac5"],["/tags/数据挖掘/index.html","0a0af66a5de7740178799d73b3606c2c"],["/tags/暴力/index.html","8c8c87a35085b91acf2e13fc8307689c"],["/tags/构造/index.html","d431b24afccf23a7fb973dbc126d7d2b"],["/tags/枚举/index.html","b7330aff3305a9a89bff4640cd3b4c0c"],["/tags/算法/index.html","0f6bcc5833c9603772cbcf125661d8ed"],["/tags/算法模拟题/index.html","3fa1bc5e232523398ee3d132da486b04"],["/tags/线段树/index.html","40f74cf898bc7e594731927a843163b1"],["/tags/结构体/index.html","853c5a0c57b70784d03f8aae2c281bc4"],["/tags/蓝桥杯/index.html","26aabfacb7c65c8a9be846f22a8161f5"],["/tags/蓝桥杯/page/2/index.html","90486ad4ed4c7c015097203740af278d"],["/tags/蓝桥杯/page/3/index.html","b1d47ea4d07086b2fe4c0e666242e68a"],["/tags/蓝桥杯/page/4/index.html","a594da362ccd6986bb59f6add085e213"],["/tags/蓝桥杯/page/5/index.html","4d76ba9b739533c6531b636027037e97"],["/tags/蓝桥杯/page/6/index.html","1f4e83b8f94a53edd010e3c75c470814"],["/tags/蓝桥杯/page/7/index.html","941272c7f80c994bf35820f9863268fb"],["/tags/蓝桥杯真题/index.html","1cfb674d2c99c9367a3d596209b5f521"],["/tags/资源教程/index.html","66c303bf77972ed4b148b311a70c4801"],["/tags/递归/index.html","af9d5668ccc2b3dcd38fa16f6eedcb03"],["/tags/链表/index.html","82873897a7d8a5988996e3ffcdd97202"],["/typora/index.html","96b60877e86462da032a3684d2abb362"],["/七段码（JAVA）/index.html","7b20d4c7095acde6b8ee4776cf82349d"],["/作物杂交（JAVA）/index.html","db2b151faa62116e028cf29f7e18c52c"],["/全排列的价值（JAVA）/index.html","342e0c2408eeab29c7cb19457ea3a031"],["/包子凑数（JAVA）/index.html","5cf38d2c6d6eec44ed0517f022e4119f"],["/双向排序（JAVA）/index.html","7fb814b7f61238607bf48fc864f19c67"],["/取球博弈（JAVA）/index.html","bcca6cc3aa0948ff4b4c0f39969dd98c"],["/合根植物（JAVA）/index.html","5b1e11caff4a5cc31c6dc61152f5e025"],["/四平方和（JAVA）/index.html","81247316a49eff2af6776f69ed9e461a"],["/回文日期（JAVA）-1/index.html","bf0a1876d5be3d6669042736df57f5aa"],["/回文日期（JAVA）/index.html","a72ceb2961e195cb40902042d38002f3"],["/山（JAVA）/index.html","13626b468fc1ce65b9488f1cd7727c8a"],["/左移右移（JAVA）/index.html","e3fa5085ed0f98c0fda729648a1fbc92"],["/成绩排序（java）/index.html","44625bbfe2f386ef4025f173cec2bc45"],["/数位排序（JAVA）/index.html","58596c28288999352780b0ba6d2f8af3"],["/数字三角形（JAVA）/index.html","2800001e740bcc19f70523ab7ff727af"],["/数字加密和解密/index.html","02dc63f7b88b6c6800773945822dd2b7"],["/数组切分（JAVA）/index.html","9a4fd01526f69829dcad707b48064b2a"],["/方格填数（JAVA）/index.html","6d8a3963a934c138f88c05224ba698b7"],["/最优清零方案（JAVA）/index.html","9681e358d8ce198e2e116ea4c3d6e68e"],["/最少刷题数（JAVA）/index.html","759a15253fff5a4bc61de35476f1dbc7"],["/本质上升序列（JAVA）/index.html","2a577e34cab8e41cc3d87a87a8f353f8"],["/杨辉三角形（JAVA）/index.html","404e1fc60f74d06eee773310a2058e30"],["/案例2-1 商品入库（java）/index.html","fab332016aa4226408d9af5e667f7a72"],["/案例2-2-小明都可以买什么/index.html","d1386a403b872551c26265e9b376bc91"],["/案例3-1-基于控制台的购书系统/index.html","9ffa6041492b4863c51dbccda04094a1"],["/案例4-7-经理与员工工资案例/index.html","0f67f4fd4931c083addab5f4bb7a79da"],["/求和（JAVA）/index.html","f37690feb157e92afdee8305d71c0271"],["/求阶乘（JAVA）/index.html","e562d4ea46d2e3d78a9de4724e4dc4aa"],["/牌型种数（JAVA）/index.html","391bfbb88ff33abcd03e9b4f095b01d3"],["/猜字母（JAVA）/index.html","dfac6a7ee6fa5e50dba251bf2bdc6cae"],["/猜数字（python）/index.html","b35eabccf75e93a9fa6c5d828e3da892"],["/砝码称重（JAVA）/index.html","3c102a46d6fa09de0ae58cadadba4f23"],["/等差数列（JAVA）/index.html","9be9d5a39d26551375b54a8fa9b85d01"],["/糖尿病预测分析：探索Pima印第安人数据集中的奥秘/index.html","92d9aa370e2fb0d56d5068f186f6249b"],["/蓝桥杯--单词分析（python）/index.html","e8e8221d5f70a1a0d89d56e3d7216722"],["/蓝桥杯--回文日期（python）/index.html","c5d7775b033d8f058ae7151aee8949da"],["/蓝桥杯--字母数（python）/index.html","4bf822a7137d072fc21e64f52c1748a2"],["/蓝桥杯--成绩分析（python）/index.html","c0b82247c5268077e39b5cf289a5501d"],["/蓝桥杯--成绩统计（python）/index.html","93eb1d5500e3cf25d834c28ce6e405ce"],["/蓝桥杯--排序（python）/index.html","abc6d48148d212d64750515cec9e01cd"],["/蓝桥杯--数位排序（python）/index.html","a48c801760e0cfa3d39c72d0297f2a42"],["/蓝桥杯--猜生日（python）/index.html","1e5501304a7c6f62181b7dec58efaca2"],["/蓝桥杯--猴子吃桃（python）/index.html","39ee7e4005b9be5e12fe89da37e0af47"],["/蓝桥杯--石头剪刀布（python）/index.html","8cc3300c3b1de842dfb74d98c92af139"],["/蓝桥杯--移动距离（python）/index.html","ac8f82b288317526a845895afdaa591e"],["/蓝桥杯--空间（python）/index.html","91e55ff22aea547824644cd8e243673b"],["/蓝桥杯--等差数列（python）/index.html","4b45342bda225e0d98d13d7ff7e7562d"],["/蓝桥杯--纸张尺寸（python）/index.html","d88ea7844d5c08ab44470bca25314831"],["/蓝桥杯--结构体之时间设计（python）/index.html","5645c5f64186c2e47d46ad553c2c20f4"],["/蓝桥杯--货物摆放（python）/index.html","4659d0d06ca953c8741a074e155d27b0"],["/蓝桥杯--质数（python）/index.html","325edd9b762e759d610fbc08473f3522"],["/蓝桥杯--购物单（python）/index.html","450b51a91c978a9eb90a1c8649b2ace1"],["/蓝桥杯--跑步锻炼（python）/index.html","d2ee159907e515a7e6ca22e5ce453915"],["/蓝桥杯--迷宫（python）/index.html","e9c92b42c13730a182027d40cb3824e1"],["/蓝桥杯--递增序列（python）/index.html","0128717720adb7047a8f862a4a5a2163"],["/蓝桥杯--链表之节点删除（python）/index.html","86dfd44a15d1942f89a45d393654bf2d"],["/蓝桥杯--门牌制作（python）/index.html","b30d56ae5f9c2e0ae480fb91b2e1e66c"],["/蓝桥杯-592门牌制作/index.html","e794fcb2d44923b0009d07eca2e46ce2"],["/蓝桥杯-单词分析（java）/index.html","5c6f46b9b3fc1761f46d00bb46cf7738"],["/蓝桥杯-字符统计/index.html","f5cc7aebc55b4df5ad5eeaccdc2e58de"],["/蓝桥杯-山（java）/index.html","1d580601a75f6b8c0640271e781e0740"],["/蓝桥杯-成绩统计(java)/index.html","61753ef035065d94bbe9d584d62f734b"],["/蓝桥杯-数列求值/index.html","a6e8bee864a338ac04f6c4511e61b296"],["/蓝桥杯-数字三角形（java）/index.html","0a95118bfe0a70fdc54f201dc52126f3"],["/蓝桥杯-既约分数/index.html","0a4f61286bd838376bb72a0d9fc43c24"],["/蓝桥杯-时间显示/index.html","1ce6fd6d31ed3ac01576d6e9a3df40f1"],["/蓝桥杯-最少刷题数/index.html","424905ff115dd7128a7bad3c34b46566"],["/蓝桥杯-特别数的和/index.html","09c040c81ee96fb00a7f9d164957ba2f"],["/蓝桥杯-蛇形填数/index.html","960c2211b51e0cbdf2dfb28cb60d3a4b"],["/蓝桥杯-跳跃（dp）/index.html","726f90d34a51b9b3cc297f47d4483fee"],["/蓝桥杯-链表数据求和操作/index.html","0548678530ca8f97dc4e97cf2d8ea19d"],["/蓝桥杯-阶乘计算（二分）/index.html","678b95ae7641199f31a5d28616ba6402"],["/蓝肽子序列（JAVA）/index.html","b4f612ca62ffcfda9e2093d0ac3b8a49"],["/解密垃圾邮件分类：基于SVM的数据挖掘项目/index.html","caa6e96c00edb8bef43580830e661400"],["/计算球体积/index.html","111e1fb4b3a33db39dfce6462002c68b"],["/计算矩阵边缘元素之和（java算法优化）/index.html","ee1ae056a7bcfefd436bae909a459de8"],["/质数拆分（JAVA）/index.html","cfa7fe342a0f55588dadc2378c9e29f3"],["/路径（JAVA）/index.html","c51c6268ed75c97c4fb93b3fa59c37b2"],["/重合次数（JAVA）/index.html","244bcb6cb71f98f0cc638c03ae99b5ba"],["/闹钟定时程序（python）/index.html","ab7df1ec7f4d4687c8bbf360c342bb64"],["/青蛙过河（JAVA）/index.html","9c64b78bc0b441a45d954b950db384c7"],["/验证码（random类）/index.html","e56d8e22d609a43fe883a31f52337b65"]];
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
