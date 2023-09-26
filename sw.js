/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CentOS7安装时直接跳过了安装信息摘要页面的解决方法/index.html","e0ce424cfbf670fc6ada22b8a30bc347"],["/GCD（JAVA）/index.html","9506e252b5c2ffc00aeee7c2fe7688fa"],["/Hexo-GitHub搭建个人博客/index.html","90d73b29c60e824498ecd3efb8476f2e"],["/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","222001a5b473d195259565bd83a9f651"],["/LeetCode46-全排列（dfs算法）/index.html","e465f1419aa4a605202fd62c27c2b7fb"],["/Python150题day01/index.html","457bd36e15f100e9f76a34ff1b66db68"],["/Python150题day02/index.html","cfb88d89672b2befa0a52afa1b9c922b"],["/Python150题day03/index.html","dfacf8fc928631de76e27114bb728011"],["/Python150题day04/index.html","06a4a8c1eed9a9b1c5d8a86dcce3d04e"],["/Python150题day05/index.html","c859aff235c17451a42a1f136ba04636"],["/Tomcat部署项目后，验证码不显示问题/index.html","2133b86bc764f484771ced4a18ffde54"],["/about/index.html","82cffc5cc9b22c6cac86043f353d1cdd"],["/archives/2023/04/index.html","3c40d523da3770a4e92c7f096984bef7"],["/archives/2023/04/page/2/index.html","9d7d8ca554598b0acd537f9e31339dc5"],["/archives/2023/05/index.html","d7d010621cd70edbfc829796ae3399eb"],["/archives/2023/05/page/2/index.html","730d77e2ca747d7bc83b1a76099b54b4"],["/archives/2023/05/page/3/index.html","53f16d69b6851bc5f15c731460b851ae"],["/archives/2023/05/page/4/index.html","e2f702271b9362cf99165573053d7e85"],["/archives/2023/05/page/5/index.html","ff012813ff547fe1d6147a8847f15bdf"],["/archives/2023/05/page/6/index.html","3f3d80f3ba1e8565c5e154e848a41faa"],["/archives/2023/06/index.html","1dd5523c5472f89e51964461e7060335"],["/archives/2023/07/index.html","51126167045fee8e809641552def3cdd"],["/archives/2023/07/page/2/index.html","1d18b1a81905f7824b4ef014056365a7"],["/archives/2023/09/index.html","22ebfaf5de0678c3f388ee969dd0f3f7"],["/archives/2023/index.html","70ab322207b1db40342ac05b404a17db"],["/archives/2023/page/10/index.html","675340bca92e9c19b03b464057d4849d"],["/archives/2023/page/2/index.html","ce2ffc18bf8aa3e76d4d21c893a53731"],["/archives/2023/page/3/index.html","4b1a05131d42f9e192f5a2f25845cf1e"],["/archives/2023/page/4/index.html","ffb18e1ccdf608380ba89732d6dc9e49"],["/archives/2023/page/5/index.html","5622529d388ecc3f67fec02fc39cb289"],["/archives/2023/page/6/index.html","d150426055479ec9345b25e76a36ec3a"],["/archives/2023/page/7/index.html","9363b04c3d3d8c33c0d196e9a13191ba"],["/archives/2023/page/8/index.html","14fad53f977bdb097a50449759a57ddd"],["/archives/2023/page/9/index.html","fc0ae597b58d26012d03255a5e65ac8e"],["/archives/index.html","0769316ad8968acfbe37c32a66e47aa3"],["/archives/page/10/index.html","b6006274b6446a40a7d16f90572b67ce"],["/archives/page/2/index.html","dba6e6838dbfee6341dc989800b8d273"],["/archives/page/3/index.html","117c6d3693852d30ed93c4e9834a2884"],["/archives/page/4/index.html","add35e2b81060259b3e6f10b16e92501"],["/archives/page/5/index.html","342f89f7dd624752efd39970acc4f9de"],["/archives/page/6/index.html","53af24b496cba87bcc1cb65d3a7be33c"],["/archives/page/7/index.html","cbbb500daa852bbaeab0e56fec929304"],["/archives/page/8/index.html","f075ccfcc3733d772935a6d05432d802"],["/archives/page/9/index.html","8033fa36d53f2ec406c894c9c6301cab"],["/categories/index.html","ea747acf9a4c117d64b2cfeb0eef10c9"],["/categories/java/index.html","a23287f7ee493381ed07d07246630328"],["/categories/java/page/2/index.html","38e1784a9abb251613c83600eba357d8"],["/categories/java/page/3/index.html","eb3e79d72d9b1a5a3c34ed4567c92152"],["/categories/java/page/4/index.html","fe1da4110cbb8f8b7bd000e29952b17e"],["/categories/java/page/5/index.html","3611b7312de16bebba117645d1731332"],["/categories/java/page/6/index.html","0f3f26fe880da0dd6d0c5c36a79bcbd8"],["/categories/java/算法模拟题/index.html","241f85ecd2b8b16c3f8e4e94b29f7bdc"],["/categories/java/蓝桥杯/index.html","c351e0fba1ec4d6d4d170a55b884c9b7"],["/categories/java/蓝桥杯真题/2014年省赛/index.html","12e400bb8ff4d0e5de7da1ce1880ea6a"],["/categories/java/蓝桥杯真题/2016年省赛/index.html","e853c6af313e3e20c977c7c72cdb35b1"],["/categories/java/蓝桥杯真题/2017年国赛/index.html","ec7ebb2c86cb730b175fcf7f029dc97d"],["/categories/java/蓝桥杯真题/2017年省赛/index.html","5bd6d6868358b33af28d46d9bf8d9d4e"],["/categories/java/蓝桥杯真题/2019年国赛/index.html","e85a5cf51d2bf65be810a90a277a409b"],["/categories/java/蓝桥杯真题/2019年省赛/index.html","68c8f5b9580c05038e8175bff7e01eca"],["/categories/java/蓝桥杯真题/2020年国赛/index.html","ddd7ddaa329f52ad369b2609f6ccbf4d"],["/categories/java/蓝桥杯真题/2020年省赛/index.html","53ba7985a1b3c53e46787e4f80c1eed9"],["/categories/java/蓝桥杯真题/2020年省赛/page/2/index.html","41ccd8c02840c62a3d4167761068a724"],["/categories/java/蓝桥杯真题/2021年模拟赛/index.html","b9f369ae85f5e26dc3c5dca532724a51"],["/categories/java/蓝桥杯真题/2021年省赛/index.html","b38dbd2fd360959b84d4f629b2526983"],["/categories/java/蓝桥杯真题/2022年国赛/index.html","1633de0c14f619aa44e1ec3c3d787eac"],["/categories/java/蓝桥杯真题/2022年省赛/index.html","e029867c2050cf81a8766d5fe04c80de"],["/categories/java/蓝桥杯真题/2022年省赛/page/2/index.html","f50958652d4e5b15c0932888499a6078"],["/categories/java/蓝桥杯真题/index.html","b99c667870d34de6bf9301f71734ed90"],["/categories/java/蓝桥杯真题/page/2/index.html","6b0bfbd5e78d2057f6ef615762d7ee79"],["/categories/java/蓝桥杯真题/page/3/index.html","02cdff38e9611b6184b377d62879404a"],["/categories/java/蓝桥杯真题/page/4/index.html","29674b37cad574f1c8d6630a531539ae"],["/categories/java/蓝桥杯真题/page/5/index.html","e27e09dfc8dff2e000c8f6c5a043e041"],["/categories/python/index.html","3798a2182a79582d3efffd7d28193bcf"],["/categories/python/page/2/index.html","0b1c90db9a1527c1d01e519d5c7c078b"],["/categories/python/page/3/index.html","5d2f3ea22227aa9a872d555bdee4bb6c"],["/categories/python/入门150题专栏/index.html","ed9e75d8982a40f74cd6f4d7584482c8"],["/categories/python/算法模拟题/index.html","eff484b44e011fd7018aa097e0ba0bf4"],["/categories/python/蓝桥杯真题/2012年省赛/index.html","01e8b3331e97c683d51480716fafbaba"],["/categories/python/蓝桥杯真题/2015年省赛/index.html","f3f2e2eeecc8c098a6ca343f722260dc"],["/categories/python/蓝桥杯真题/2017年省赛/index.html","c73ba896c6d3ed023f311222b703b709"],["/categories/python/蓝桥杯真题/2019年国赛/index.html","707ed1d0ca3f3d2d6c32f1836ebe51c8"],["/categories/python/蓝桥杯真题/2019年省赛/index.html","64190b29986cf2d49a1a1ef27461b834"],["/categories/python/蓝桥杯真题/2020年省赛/index.html","8a8d95f0793a498a79d2181549e6c4f4"],["/categories/python/蓝桥杯真题/2021年省赛/index.html","ee13d84a5bae71c5236909fd95a5b95e"],["/categories/python/蓝桥杯真题/2022年省赛/index.html","ef3cdfa876922e1021edd55c4ed48833"],["/categories/python/蓝桥杯真题/2023年省赛/index.html","43ce523b77267a10512b2d68e96fe0d9"],["/categories/python/蓝桥杯真题/index.html","ee50bb11f9779ecf796783a1eaec00c0"],["/categories/python/蓝桥杯真题/page/2/index.html","4824a486e8d7a25e1f166487abb5e020"],["/categories/python/蓝桥杯真题/page/3/index.html","17a8388f16280980abb595d7100983ba"],["/categories/算法模拟题/index.html","a922d91e485c484f95e7a42317ad2711"],["/categories/资源教程/index.html","3f052ebf3d19e8e258b928e6663b350e"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","d2affebb4be1459352bf7fb0efd61b92"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","5861023d692d85c35c3b968ed30c9b9e"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/k倍区间（JAVA）/index.html","142e787c16e3a36debefea612366e1f7"],["/link/index.html","931b79ce01e565f0e682ac24b290de9b"],["/page/10/index.html","b953872d3458522305cf81fe53b2961d"],["/page/2/index.html","bbfe782c1e8d9e184eceb2ad3f4bdeed"],["/page/3/index.html","46fd1dcd2b8deeb73236a6639332553d"],["/page/4/index.html","1042d754f907c657722c7c551ee23d3c"],["/page/5/index.html","3499edbc73cb07d2ad3e5dc8ba0a1741"],["/page/6/index.html","7d28d98c472a96cc0d026329cd268bd2"],["/page/7/index.html","2dd2941882bc38981a7dd08f1b839650"],["/page/8/index.html","8773c515a82bdb7e656442727c6b5d2f"],["/page/9/index.html","e5cd2b8cd39240edfdc5f6294fb947e8"],["/sw-register.js","f4ecfd57e783c02f2da981f225c766a6"],["/tags/GCD/index.html","630caee70dd59d6a16745adc493ad6d8"],["/tags/dfs算法/index.html","c816907cf903025a701e8340576ba0d9"],["/tags/index.html","30afbb96257041d7a5342105158be703"],["/tags/java/index.html","d7e49c8c1ad810f73490b3d91264c1f1"],["/tags/java/page/2/index.html","0dc6426e61d151077810512db15f31ea"],["/tags/java/page/3/index.html","d416f612ef9b56c0ed0cdbea6b6a2cef"],["/tags/java/page/4/index.html","421f95a07b585c81eccd6d3a357b7e66"],["/tags/java/page/5/index.html","4e656af13b0cf0ecb7cc60bfbefee834"],["/tags/java/page/6/index.html","8693e301aff722f995e192c11402aab6"],["/tags/python/index.html","4c68c395101fdf628d35d9a21a83687f"],["/tags/python/page/2/index.html","5cd0418ea2186213696e60d2e7588a63"],["/tags/python/page/3/index.html","8f4281ff009c3543beb8129ffe1d4242"],["/tags/random类/index.html","3022c0fd8e5d4c82dd35f088a85079b4"],["/tags/二分法/index.html","9f2434f71afd38d6f4064609ecd45608"],["/tags/入门150题专栏/index.html","246e885600408eab652d781821214b6c"],["/tags/冒泡排序/index.html","fb12c138a4d2116420582d56e9ba53cf"],["/tags/力扣/index.html","cbf1083d0e0f050bbb05557cdcdc0bd8"],["/tags/动态规划/index.html","c2d7a709eb0174465d8a3a7856295658"],["/tags/字符串/index.html","2d4fee8b7673bc0cee6ff6d1ca3fc86a"],["/tags/并查集/index.html","f216628c8c8b425858592f344cf6b59f"],["/tags/搜索/index.html","9956ba452e6303f2af2309e6635d9afd"],["/tags/暴力/index.html","b60063e705e3498aa15dc6a0238337be"],["/tags/构造/index.html","b3855253e87cc2adf750139200a7c7b9"],["/tags/枚举/index.html","24f3b901cdadcc698c5b8537902c01f4"],["/tags/算法/index.html","4e57cece2fc48dcac7cf2eaaef3e623f"],["/tags/算法模拟题/index.html","e68e6fa5180cfed7ec5f5226ed2dab34"],["/tags/算法模拟题a/index.html","dcd154204ccc20d78c11bceda10a5e0c"],["/tags/线段树/index.html","795364eba7cec8c49f5aac6f17a128ca"],["/tags/结构体/index.html","a629476ca8160cbf1a6d66c734b94d77"],["/tags/蓝桥杯/index.html","698ba632c8b0e9315f073d14fa215029"],["/tags/蓝桥杯/page/2/index.html","a68292e07fb05156d634ea7d878f235e"],["/tags/蓝桥杯/page/3/index.html","00ef302bd281329cf5327bdfd0c0c6be"],["/tags/蓝桥杯/page/4/index.html","7989b9794e3f341590431bcdb56a189a"],["/tags/蓝桥杯/page/5/index.html","36d36d70cd8eb8a0b8932d8b3ed5049f"],["/tags/蓝桥杯/page/6/index.html","c0a59220070f08415b1e8c19cdab0847"],["/tags/蓝桥杯/page/7/index.html","208c51cd2029e6decfb42311a16e4421"],["/tags/资源教程/index.html","10df336272d5996af3b03c178373220a"],["/tags/递归/index.html","1d0e298513d95e08a1001becc84e591a"],["/tags/链表/index.html","b2b85fa7ce36c3df6d4ff526bf84c981"],["/typora/index.html","d0c2985e2065463049e3f53478811701"],["/七段码（JAVA）/index.html","36facb2296a5620cd95dca0d878b07ef"],["/作物杂交（JAVA）/index.html","8a0d9debe0206196002eb0130c5b281d"],["/全排列的价值（JAVA）/index.html","7b46a3de2fc61fc778696c9a47a98e78"],["/包子凑数（JAVA）/index.html","7ba238d7b7dc16a440c496cce3099b7a"],["/双向排序（JAVA）/index.html","b9764038307652b32fcf5e57ea368341"],["/取球博弈（JAVA）/index.html","1fb968d6cfe6287d800ab122f89c72a3"],["/合根植物（JAVA）/index.html","45dde028db0024f34e0eb34afa5476bb"],["/四平方和（JAVA）/index.html","48b77b4d40490805b6b1b75536a52aa1"],["/回文日期（JAVA）-1/index.html","b6d8ae06e1537e214f2f2be943b5e6c6"],["/回文日期（JAVA）/index.html","0f9d26353f170811adc20ac073cf62ef"],["/山（JAVA）/index.html","fd0e6e07545b0262d9e4dc4804e4e811"],["/左移右移（JAVA）/index.html","54bd059d89559b57c145a41805f3e9fc"],["/成绩排序（java）/index.html","4650adc1bab774a635142f3946f9495f"],["/数位排序（JAVA）/index.html","3434a86b9604e688e9b7d8adee803898"],["/数字三角形（JAVA）/index.html","a8cd5a1c548015a7c281e6959e4cb258"],["/数字加密和解密/index.html","9e4f95dd89480c1f65a2c99af88701f5"],["/数组切分（JAVA）/index.html","c41c4c74b6962bd230a5e5cd92cb03f4"],["/方格填数（JAVA）/index.html","755fbbd70e01715747f3e6cffecd8116"],["/最优清零方案（JAVA）/index.html","41bca5690e60da39cb59aab04d583d23"],["/最少刷题数（JAVA）/index.html","2d94c354f5bcb93073a38f16e32c8ff0"],["/本质上升序列（JAVA）/index.html","4c009fe8cfafc870cd25b547a5958a0b"],["/杨辉三角形（JAVA）/index.html","e89bb37e1a6806209584e9a348ffd1ef"],["/案例2-1 商品入库（java）/index.html","6b848c7876b87a667f0740b09a9a4e3b"],["/案例2-2-小明都可以买什么/index.html","c783a52acb2d9735ef54cbce841b4e8f"],["/案例3-1-基于控制台的购书系统/index.html","5ccc9f7d391466b7169823eb62f7715a"],["/案例4-7-经理与员工工资案例/index.html","cd782b12bb2dc5191ae9329b3cb042d2"],["/求和（JAVA）/index.html","ea43343c5f417d0faeeafc33c73bec55"],["/求阶乘（JAVA）/index.html","ab146bd031f370313fc4471fff1c5dd9"],["/牌型种数（JAVA）/index.html","b646f0a38c5ae0edb0705d0f798a9d4f"],["/猜字母（JAVA）/index.html","4efdd9f5e826a8138892c66090dab223"],["/猜数字（python）/index.html","d6b10bd8b453855a6f1bd0a29274736f"],["/砝码称重（JAVA）/index.html","4d5fffaa7c0ac2f10949deebbabea363"],["/等差数列（JAVA）/index.html","69f72a624a546cd847eaf465dd8cfe32"],["/蓝桥杯--单词分析（python）/index.html","80e5c49d3489808a0ecbc0aa46cd4066"],["/蓝桥杯--回文日期（python）/index.html","7a9a98413ee127c328e5a3e6995c2b02"],["/蓝桥杯--字母数（python）/index.html","d91bfc9635d3de72f4813c202a6d5eb2"],["/蓝桥杯--成绩分析（python）/index.html","e9a25c07cef7538420897a659a659ff8"],["/蓝桥杯--成绩统计（python）/index.html","9f7bde47da09d19e03f3f46d935fab13"],["/蓝桥杯--排序（python）/index.html","45677230850383c0422bbb2552813b51"],["/蓝桥杯--数位排序（python）/index.html","5338ae6ae640d9a7e2f8abc6a7eeeec8"],["/蓝桥杯--猜生日（python）/index.html","5412ce80bc7aa42568ab4a3f621c8159"],["/蓝桥杯--猴子吃桃（python）/index.html","9695ce296058d970e450c9457016c2e7"],["/蓝桥杯--石头剪刀布（python）/index.html","0a1e6c55501d530b9cbc3f9082a2a822"],["/蓝桥杯--移动距离（python）/index.html","b75b6c0fb3dd0242b2912e4a7e76c465"],["/蓝桥杯--空间（python）/index.html","7dc2a5e1fce5e57f7a1db5ad94e5eb49"],["/蓝桥杯--等差数列（python）/index.html","5fd60c9a1e80f528f9b510f6acd033fc"],["/蓝桥杯--纸张尺寸（python）/index.html","7e8d9c5d86ae3c361b1debb8cb578465"],["/蓝桥杯--结构体之时间设计（python）/index.html","fa5b72072d31fface9a86de645afa2a2"],["/蓝桥杯--货物摆放（python）/index.html","4b865182ef54157d70186ad9baed2bc7"],["/蓝桥杯--质数（python）/index.html","83f93d0041413d84029d41f6742257e9"],["/蓝桥杯--购物单（python）/index.html","5263a5345e1d47ae9e4178a9af8383fe"],["/蓝桥杯--跑步锻炼（python）/index.html","c0cc3a0460975913cf6ab4367f664329"],["/蓝桥杯--迷宫（python）/index.html","4d28f27f7273c4029eb4197c9fed30c0"],["/蓝桥杯--递增序列（python）/index.html","6e07ef429984f6cc9129d688e0de4da8"],["/蓝桥杯--链表之节点删除（python）/index.html","919aa8f8896a5dfa559a2e75758336af"],["/蓝桥杯--门牌制作（python）/index.html","8c469acd3b63ea11f2b2d9714837adfa"],["/蓝桥杯-592门牌制作/index.html","a4869e890906a2624ab232d861c66630"],["/蓝桥杯-单词分析（java）/index.html","224747a6ad286478d2cf62bdcd523a51"],["/蓝桥杯-字符统计/index.html","72d28fc66e8ad2c739751da7237f6358"],["/蓝桥杯-山（java）/index.html","c97df331c8056f3e328cb48d6f138a8a"],["/蓝桥杯-成绩统计(java)/index.html","b80b17df788847c2631cd9075cc2d3ac"],["/蓝桥杯-数列求值/index.html","4e307d08a602350c2970016fdd24dfd4"],["/蓝桥杯-数字三角形（java）/index.html","c4771292a17c1a0bfa94b5fb8bc06d33"],["/蓝桥杯-既约分数/index.html","6b7b2890228d23e53deb5b9ed42b2396"],["/蓝桥杯-时间显示/index.html","0cb864b72473da7ddf39387df0768753"],["/蓝桥杯-最少刷题数/index.html","2ca496a9d5693c4d719d6d92d0fdb968"],["/蓝桥杯-特别数的和/index.html","141af62a83345f5adcd94e9b58ac6f06"],["/蓝桥杯-蛇形填数/index.html","ca09f3a7aa13751d06dba81a564778f7"],["/蓝桥杯-跳跃（dp）/index.html","13cdedd1d6d83e3ecae33de0eb478c2a"],["/蓝桥杯-链表数据求和操作/index.html","20769af52df65147143eebe4408a82b7"],["/蓝桥杯-阶乘计算（二分）/index.html","8deec54098384e832bc784ead96150b0"],["/蓝肽子序列（JAVA）/index.html","b386bba74b091cc2f8221240144c3dc6"],["/计算球体积/index.html","9e511013c97082da7fd2c6d25b411289"],["/计算矩阵边缘元素之和（java算法优化）/index.html","85d911026ef20a27d8c1a50665b2f9ae"],["/质数拆分（JAVA）/index.html","f2a18da7180e136f90f6f66ea583f29c"],["/路径（JAVA）/index.html","3b885fbffbad3c24d72d0c0e9a59385c"],["/重合次数（JAVA）/index.html","3838c7c8828835c813dec14d4240fa19"],["/闹钟定时程序（python）/index.html","805b97dc5f628eae53f2661f504a8c4a"],["/青蛙过河（JAVA）/index.html","43e7ece16547f6a3b3233f03c358f4d4"],["/验证码（random类）/index.html","19691de17c7279170ff82e6b21ec9eb4"]];
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
