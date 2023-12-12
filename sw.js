/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CentOS7安装时直接跳过了安装信息摘要页面的解决方法/index.html","e201d27048bb0318ec1151cdf6ec0522"],["/GCD（JAVA）/index.html","a8c93e3986ba47ce0fe856635ed0a5b9"],["/Hexo-GitHub搭建个人博客/index.html","9b2c2d38812b20929d31a10fd139a59a"],["/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","1e3925f8c970784835e7f0b604c2c70d"],["/LeetCode46-全排列（dfs算法）/index.html","7ea54b4fe22aa79696393b3aea68f65d"],["/Python150题day01/index.html","2ec57dd945cc9c6c9d3d81a54ae9b896"],["/Python150题day02/index.html","634a070621a17caccc535e6b7bf2dd91"],["/Python150题day03/index.html","88a5593b277b55d7ed080862e8aba907"],["/Python150题day04/index.html","c19ae44b3c95674602b3379f3887fedb"],["/Python150题day05/index.html","fb06ff2a21bd269ac9a6ad967d10345f"],["/Python150题day06/index.html","ce1f4eb23034052b99ed55bc292560ca"],["/Tomcat部署项目后，验证码不显示问题/index.html","3f36c0941d2960d9091e4d1bff5bffa0"],["/about/index.html","2509ea86bf101a1ff1db36ebc528ff30"],["/archives/2023/04/index.html","3d38aeeba7fca7cf5656b8c74d97c84b"],["/archives/2023/04/page/2/index.html","1fb3810fe879fca0c8fcda2cae4452ab"],["/archives/2023/05/index.html","b44898f78f7acf44b298a9cd85680392"],["/archives/2023/05/page/2/index.html","82c4860468dc4c1073450eb495b58eb2"],["/archives/2023/05/page/3/index.html","9e453749ca1f3a662500f4c5d2e1b5e2"],["/archives/2023/05/page/4/index.html","0b148efd94e88fea24f684e6bbbaa755"],["/archives/2023/05/page/5/index.html","4a50e659193b4ac4d329af1338452f80"],["/archives/2023/05/page/6/index.html","4ed62a7af17df31b8ddee1c876daac37"],["/archives/2023/06/index.html","5e83d8b5468cd9dd043d1e1218a80628"],["/archives/2023/07/index.html","b4cde50c24c101f61cc45e560bf5397e"],["/archives/2023/07/page/2/index.html","48fcfb546058528d7a497dca21d9db86"],["/archives/2023/09/index.html","4bd2217e34ad675d29f43ba7457c8e5a"],["/archives/2023/10/index.html","dd637832eb4fc4b2c54dad6851d87d97"],["/archives/2023/12/index.html","45a23e92c29d653bcb9ebdf098a60f97"],["/archives/2023/index.html","74d56246e35dd44ee3449f66f0e3281d"],["/archives/2023/page/10/index.html","79abe64e7dc083b3306f18ca47d40355"],["/archives/2023/page/2/index.html","4b02e452bcb305da5bc29bd9e63be37b"],["/archives/2023/page/3/index.html","14221f48f1a1969901f6ea5ef7c6d58f"],["/archives/2023/page/4/index.html","671087f454643939aa858c0b34453b35"],["/archives/2023/page/5/index.html","7500a0b23bd84eef705fbe06d8903193"],["/archives/2023/page/6/index.html","62ce95bb230dfa964661ac74fb8c35b1"],["/archives/2023/page/7/index.html","702964e868893185af1be36e8693a780"],["/archives/2023/page/8/index.html","11b8d87614032ddd7862650308e482bf"],["/archives/2023/page/9/index.html","b8a943bd2ecad3f2f054c4c2567c2e72"],["/archives/index.html","eeebb7068de74fc2de583cd296fc3aaf"],["/archives/page/10/index.html","5682a3d610ecc2d246a74a54b842a7ad"],["/archives/page/2/index.html","eddbd0e711891d033db7776dafc0d0e0"],["/archives/page/3/index.html","485d47e0cfc14fd48e5788d9d22296e7"],["/archives/page/4/index.html","9c7c98326262c6a14f205e03b5d96671"],["/archives/page/5/index.html","682c2fc08b3d3a6bf9ccf8a8a4ee9692"],["/archives/page/6/index.html","c70cae2343c4cfb4ad6988170903a518"],["/archives/page/7/index.html","e9e2b49bb5e526cbf7fcf9d6b83516bf"],["/archives/page/8/index.html","c689b0f653d8d718c326dd17c1d95584"],["/archives/page/9/index.html","6c6901eba8041ca3247acb7dcf950f15"],["/categories/index.html","b2762fd1d5660fa851ff35b7af84b66c"],["/categories/java/index.html","9bdea28a260124d3633823006ab65fa0"],["/categories/java/page/2/index.html","9b3590fdd98f413384f561f7ce7c06cb"],["/categories/java/page/3/index.html","6be80c827c535dc746b6fcab5855f29e"],["/categories/java/page/4/index.html","acf988c838d57cbea72942497b0045ce"],["/categories/java/page/5/index.html","d8cdca3a6218435195115cc0f0b8e8db"],["/categories/java/page/6/index.html","bb83cc521b7e8c1091fedf729506b95d"],["/categories/java/算法模拟题/index.html","fbbd2146650f9c5f97a18f7e40d4bea1"],["/categories/java/算法模拟题/page/2/index.html","5371d096fae5a6ae2fe8e57fd117c9ef"],["/categories/java/蓝桥杯真题/2014年省赛/index.html","c1555788adfc271b19fbe58c09cac5c0"],["/categories/java/蓝桥杯真题/2016年省赛/index.html","4a7889692fd5899efb17962c386cfce5"],["/categories/java/蓝桥杯真题/2017年国赛/index.html","b75e111592598563ae5df2fdead780fa"],["/categories/java/蓝桥杯真题/2017年省赛/index.html","2e8434b799b04fa265ed6efcbf52bc6d"],["/categories/java/蓝桥杯真题/2019年国赛/index.html","7927b07160c413d43eca3596b4ecb888"],["/categories/java/蓝桥杯真题/2019年省赛/index.html","247562d42f5d2c890c52f4f148c5753a"],["/categories/java/蓝桥杯真题/2020年国赛/index.html","be9edc32b6169e89a6f0b5f3b7d10e17"],["/categories/java/蓝桥杯真题/2020年省赛/index.html","30641d74109b67ad55c1fc6dc9f5bfd2"],["/categories/java/蓝桥杯真题/2020年省赛/page/2/index.html","1b1cec9eee57117f06f46d5538c52b35"],["/categories/java/蓝桥杯真题/2021年模拟赛/index.html","4b7e9203e8ec7883c485eeb5adf80850"],["/categories/java/蓝桥杯真题/2021年省赛/index.html","6eb74a16e172bb8bf89e407d472664e6"],["/categories/java/蓝桥杯真题/2022年国赛/index.html","5c16f463eb7fdf563c77eaa1dc1aa164"],["/categories/java/蓝桥杯真题/2022年省赛/index.html","0fef9dc27b7d4f045aa3eb4d141123cf"],["/categories/java/蓝桥杯真题/2022年省赛/page/2/index.html","3b42f8796ec538ecd0054a0cc369b2eb"],["/categories/java/蓝桥杯真题/index.html","85517a68658f706a33c22791e7336b88"],["/categories/java/蓝桥杯真题/page/2/index.html","91e982ffd07b443fd072c8bab4326570"],["/categories/java/蓝桥杯真题/page/3/index.html","9a38029e56b2d592337a2575ae30b82c"],["/categories/java/蓝桥杯真题/page/4/index.html","5204ab2c6a4858717d1b4e0e4fdbadf6"],["/categories/java/蓝桥杯真题/page/5/index.html","79c449023b1ad849677d5f433314ce45"],["/categories/python/index.html","436c8e6679e83fbd77ff5d6328d7ff5a"],["/categories/python/page/2/index.html","f9f1b5b8f4d4af3d341f68cbd3042b79"],["/categories/python/page/3/index.html","a821156cfd622bc8e8fa6ebd4ecb8880"],["/categories/python/page/4/index.html","caf8b8a096c6b94b9971a3f482933fac"],["/categories/python/入门150题专栏/index.html","1877f22195b9fdb6c7dd28c91ad8403d"],["/categories/python/算法模拟题/index.html","88a7501207a74a6371122690afe409f6"],["/categories/python/蓝桥杯真题/2012年省赛/index.html","0c8228e4a03672182c9f029691cdeccd"],["/categories/python/蓝桥杯真题/2015年省赛/index.html","68b48d221ddccbc4d048ba0d9fe238f8"],["/categories/python/蓝桥杯真题/2017年省赛/index.html","9e9bba44b4aaa135f5eb7caffa31260e"],["/categories/python/蓝桥杯真题/2019年国赛/index.html","48f11cd4892e24607fba50caaeb90126"],["/categories/python/蓝桥杯真题/2019年省赛/index.html","a5ffdf77be401d4f8f1f59e04844dd8b"],["/categories/python/蓝桥杯真题/2020年省赛/index.html","92a3e2fc87069280d88cc20bea40ad6d"],["/categories/python/蓝桥杯真题/2021年省赛/index.html","580c1cc459400228ca9170fadb802e74"],["/categories/python/蓝桥杯真题/2022年省赛/index.html","1d186206d9544709eadc1f88b1b79f86"],["/categories/python/蓝桥杯真题/2023年省赛/index.html","774512904953f42999d05d157020bee2"],["/categories/python/蓝桥杯真题/index.html","534ecc318839963a532d19207299eb80"],["/categories/python/蓝桥杯真题/page/2/index.html","eadf0bf727183e20c02c73752b4f4500"],["/categories/python/蓝桥杯真题/page/3/index.html","7d70e266fe66ef9f6222461a12606335"],["/categories/资源教程/index.html","bae5d60d8e2dbc98ae6ccf2176e2bd2f"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","27aa862b4b263f6f4bd56a61048d822a"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c6e09842419c98fce293e7ac54564139"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/k倍区间（JAVA）/index.html","1b41a0b381ffce43bb8907576c32b05e"],["/link/index.html","d37396c5addf1d08b2e2a450475bcf35"],["/page/10/index.html","f71b11ba16e97a1c34a6b8e273628f93"],["/page/2/index.html","295b05078a0fb61c423b33c86f627cf3"],["/page/3/index.html","c636981d2a1425a70e26132bb0f0b638"],["/page/4/index.html","ed80698ae9974e7d9611efa2ce9576b3"],["/page/5/index.html","dff206589bf307f3bbdec05adb553054"],["/page/6/index.html","5722e0f3ac5900c8836b2667a301134d"],["/page/7/index.html","e3991b6e7eb73564fc4bc8382f83d681"],["/page/8/index.html","8343322cfd09ac5118ab322d4818d027"],["/page/9/index.html","35c5783374d36ffbfb22af3b68be703f"],["/sw-register.js","190c997930212c597e92a5781f65901d"],["/tags/GCD/index.html","1808c65cd7eb39c735061af9e1f10e3f"],["/tags/dfs算法/index.html","556a5f97328cce9cb0a010ee2e3af9dd"],["/tags/index.html","80b0580a3e881d0b7e9bc4bd42b1ea92"],["/tags/java/index.html","3dfb2e13ec668c79104a5c991c0d50a9"],["/tags/java/page/2/index.html","d8d9f8728003f15459104ff54fe77103"],["/tags/java/page/3/index.html","493e426b3e8f56a5d4ed0ce6b5926e1b"],["/tags/java/page/4/index.html","e4c8259de7b1b7c72ef51759ceb4a833"],["/tags/java/page/5/index.html","9435e896037d93cc4857109111de985f"],["/tags/java/page/6/index.html","dc5d63e61b6ffce30666b82c60836f70"],["/tags/python/index.html","46495149b9341515e967a72bf4a0179c"],["/tags/python/page/2/index.html","cbfd59d11ef407c752ae8c28905c3fdb"],["/tags/python/page/3/index.html","5ca0c9c35f8aae37f3abf0ddbf52243c"],["/tags/python/page/4/index.html","65c35815b03b1875a1a6fca7960b3a9f"],["/tags/random类/index.html","c8ed3772b827bc141b83abb7cff7c141"],["/tags/二分法/index.html","4c51220298ba2b4cc65b40a33ade8d86"],["/tags/入门150题专栏/index.html","b4f8905a6f400420073c8615dd24601a"],["/tags/冒泡排序/index.html","1f09c1c4bad1558fd492b39a094cbbf9"],["/tags/力扣/index.html","10c93604a7ef5b5747a9e0872dc3c576"],["/tags/动态规划/index.html","6c6a7014676e11a3f32588934a1219ef"],["/tags/字符串/index.html","1beb72e7899f8c45ecd866b3acaabdfa"],["/tags/并查集/index.html","c86802252a89938c33509c51740d93ef"],["/tags/搜索/index.html","42ed47e9224f30cff5a689b361564f1c"],["/tags/暴力/index.html","5ab4bbdc20d3c9843d6d92d7059cd92a"],["/tags/构造/index.html","fc4d9fa8a955f029273f7f0b61d8e9fc"],["/tags/枚举/index.html","7b97c060d674569e6147205aaaae085c"],["/tags/算法/index.html","e1a2f4d1ed3e394c5a174b4d120af498"],["/tags/算法模拟题/index.html","172fda6fc6494f8ed2a5d5d04b08c1e5"],["/tags/线段树/index.html","cdf40c5aaf91015f16016a2d909e9c4e"],["/tags/结构体/index.html","259b410f2e9ab604467dd08fe0941318"],["/tags/蓝桥杯/index.html","ca085cba01d0677f9a31fda6b208c9f9"],["/tags/蓝桥杯/page/2/index.html","3c1b0149a71e8293bd13127862d8458c"],["/tags/蓝桥杯/page/3/index.html","2e42e2719c8f158a997f0741cb446967"],["/tags/蓝桥杯/page/4/index.html","789aed3ca9ac63de4a444237f70e9c7d"],["/tags/蓝桥杯/page/5/index.html","2fa9fd4c032849be403d4863bb1cad7b"],["/tags/蓝桥杯/page/6/index.html","3167c18e587070b35b1617f8faac39e3"],["/tags/蓝桥杯/page/7/index.html","271e1e37cb5bc14c38b6f3be81e915ee"],["/tags/蓝桥杯真题/index.html","663f0667afc7329d1cbaeffc36564bce"],["/tags/资源教程/index.html","3ad79ae9aeb0d18043e43cca41a51772"],["/tags/递归/index.html","da2dfc8e5f1308fbd7b9ac8fc525e8d9"],["/tags/链表/index.html","09858b7ad0094051b5014bf4aaede525"],["/test/index.html","8156b3ba777d51ebd8d708ec4db3d005"],["/typora/index.html","14aa541b4c9bae7cda37b7894422370e"],["/七段码（JAVA）/index.html","27eaa1afa65f0e0d8b710fc622fbb0eb"],["/作物杂交（JAVA）/index.html","e4479ffcf6b951f4d5128ae39da5dc3a"],["/全排列的价值（JAVA）/index.html","1ce7091b3b45e7a76bccc4116cde75f3"],["/包子凑数（JAVA）/index.html","6ebd7c9508b73eb29c896bcd63b68275"],["/双向排序（JAVA）/index.html","0b68cfe169ca2d9c05674b5b2e1a2757"],["/取球博弈（JAVA）/index.html","a18c4e5c3315d93023306f6b1c8c6669"],["/合根植物（JAVA）/index.html","b83dea2aaebe832c48482004ec32880b"],["/四平方和（JAVA）/index.html","46dad420b86ad6e53fd321150efcf09a"],["/回文日期（JAVA）-1/index.html","c40228d92020465bd4f4461b3b708724"],["/回文日期（JAVA）/index.html","924505c83d9acd97abf5c6f8352d27f7"],["/山（JAVA）/index.html","54dd82c3314d21165f9d3de2899fc679"],["/左移右移（JAVA）/index.html","d535af3da7c3eb6c4b73d2efbc28460f"],["/成绩排序（java）/index.html","01d7b24c49da86016445993df4995f6d"],["/数位排序（JAVA）/index.html","ccafb521e989cdb7d732c4883e8eec56"],["/数字三角形（JAVA）/index.html","97993844433a2b588b8e239b3cdc8743"],["/数字加密和解密/index.html","64f77bc54f744a8b7ee452651b900869"],["/数组切分（JAVA）/index.html","6f7d287d35210b5d59fe6d3cf5eaea97"],["/方格填数（JAVA）/index.html","7f1a7af5f09fdc20e4f4d0f95e87bbc8"],["/最优清零方案（JAVA）/index.html","eae1ce18f0956415cf967b6c8a80c0b2"],["/最少刷题数（JAVA）/index.html","c7d4826901ebd49f319a81deee42c213"],["/本质上升序列（JAVA）/index.html","809518842c99d4d85b0c228070abf616"],["/杨辉三角形（JAVA）/index.html","67ef16753952997e468fc1673e0c1298"],["/案例2-1 商品入库（java）/index.html","e50f35f993583fec74c9e02caeee796c"],["/案例2-2-小明都可以买什么/index.html","baba816d7deb85831e9f40a3436b7b9f"],["/案例3-1-基于控制台的购书系统/index.html","da21bc782f88987ae6c307dc07ff7822"],["/案例4-7-经理与员工工资案例/index.html","2a2e43957eaab238658da1ce29662a52"],["/求和（JAVA）/index.html","c68ad34e766555d2f2eb99f1c92e8594"],["/求阶乘（JAVA）/index.html","e0c838d678d81d66c5730adea1c98355"],["/牌型种数（JAVA）/index.html","f15bc5211837ad7476277db41df95c76"],["/猜字母（JAVA）/index.html","50e787d0a6860d03c1cef7ed8ecccd2b"],["/猜数字（python）/index.html","afac3cf2d0292689a81f140aac9fb062"],["/砝码称重（JAVA）/index.html","e85fe26f5aef5466a3f9634dd2ef488e"],["/等差数列（JAVA）/index.html","c3eb567fac306321016f03dfecfe9176"],["/蓝桥杯--单词分析（python）/index.html","3db7b75df7e31422e466d55cfc388fb2"],["/蓝桥杯--回文日期（python）/index.html","b49b24960b87b9ba028a6e055d2d5350"],["/蓝桥杯--字母数（python）/index.html","8071cc4212a088c3f8f27f772fba634d"],["/蓝桥杯--成绩分析（python）/index.html","fa9905f9945c99a0d40f6e555f426279"],["/蓝桥杯--成绩统计（python）/index.html","8b93cc32a2c908db2c9a9fd6e3a904c3"],["/蓝桥杯--排序（python）/index.html","db1796c3f8918325a7ce528902ff8883"],["/蓝桥杯--数位排序（python）/index.html","aa7dfb313376c94449754a63812446bf"],["/蓝桥杯--猜生日（python）/index.html","63ae14efd2c78649f20b0b12d5430cb7"],["/蓝桥杯--猴子吃桃（python）/index.html","22a25e6f1bba432c078aee792dea394d"],["/蓝桥杯--石头剪刀布（python）/index.html","f27f4c4df18cce62d33392dc8cb3e357"],["/蓝桥杯--移动距离（python）/index.html","338016586cbacd8483c789bfd95ae7ec"],["/蓝桥杯--空间（python）/index.html","a1f4827fb80140c8a2d080e85aeb6abc"],["/蓝桥杯--等差数列（python）/index.html","d532e30e98f7589e675ba385e5fac8d9"],["/蓝桥杯--纸张尺寸（python）/index.html","2d32295699dd67772afeaea1f4b5f271"],["/蓝桥杯--结构体之时间设计（python）/index.html","fcd35380eba6a1b65e7149bd8770359d"],["/蓝桥杯--货物摆放（python）/index.html","a1b89648145db6a569df33b841997361"],["/蓝桥杯--质数（python）/index.html","7171c32a5f068aa24ea50ad3bc70c0ae"],["/蓝桥杯--购物单（python）/index.html","a847121af4d706f295220ed15022dd4f"],["/蓝桥杯--跑步锻炼（python）/index.html","501085a621b90f9759d59d5b67213575"],["/蓝桥杯--迷宫（python）/index.html","0c02b3fcac3e5098a99e3ff4762c958f"],["/蓝桥杯--递增序列（python）/index.html","b65d51509284a93c810967a3a0d9ab3c"],["/蓝桥杯--链表之节点删除（python）/index.html","57e58c34811a620219fce64248408c43"],["/蓝桥杯--门牌制作（python）/index.html","953561aa6389c02e9d5dbfd73d75a3db"],["/蓝桥杯-592门牌制作/index.html","d843c8a242d849cfea8814c7843b0db8"],["/蓝桥杯-单词分析（java）/index.html","e8311cbf5ac26dc21342a03d95bfb7bc"],["/蓝桥杯-字符统计/index.html","5e9404884ba52c227a6f9946f0efe558"],["/蓝桥杯-山（java）/index.html","da8f3d1e8cee341b59af83d043f813cc"],["/蓝桥杯-成绩统计(java)/index.html","72ac75fea05a73808296f4875268decc"],["/蓝桥杯-数列求值/index.html","aab08e1a0c6e71a1443bc86688f8b833"],["/蓝桥杯-数字三角形（java）/index.html","573c2b5d5c5974619152991d72384c63"],["/蓝桥杯-既约分数/index.html","890546e3520a5b4f6dfcfe25d6972b6c"],["/蓝桥杯-时间显示/index.html","0829d04a36449b21c38bd996547df0ea"],["/蓝桥杯-最少刷题数/index.html","21cadae09f875374f7573ffdfc3d6bba"],["/蓝桥杯-特别数的和/index.html","a72d4bf3b50595810c4469b820d2e56f"],["/蓝桥杯-蛇形填数/index.html","aca611b3f3688f1204558a94f31100e4"],["/蓝桥杯-跳跃（dp）/index.html","023a7724706f6c1a55363d4514656150"],["/蓝桥杯-链表数据求和操作/index.html","471d1225b18d1bf539289a814aca797f"],["/蓝桥杯-阶乘计算（二分）/index.html","e5b7369f12c43a68ad0ef194f10b0f6f"],["/蓝肽子序列（JAVA）/index.html","152ac5e3547f87a37bf056d07f422f93"],["/计算球体积/index.html","6381458bb776e898b5e4e14677b440d4"],["/计算矩阵边缘元素之和（java算法优化）/index.html","621648cbf017e2fc4a1f5027f8ef735e"],["/质数拆分（JAVA）/index.html","a320db7830c7a2fa6a5174669d98d3ad"],["/路径（JAVA）/index.html","03f39c21c4baacdfd0bc79b4cbf61d67"],["/重合次数（JAVA）/index.html","34f0fefaa39a31914dbd812959f86e73"],["/闹钟定时程序（python）/index.html","b8e1a2bd986fc665da5aeda7573851dd"],["/青蛙过河（JAVA）/index.html","43601c31b5dcffe826706e925bcdda0a"],["/验证码（random类）/index.html","1af8cf07ee6a3e1fd0fefe2b161a30d7"]];
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
