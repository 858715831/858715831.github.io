(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{410:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"解决百度无法收录搭建在github上的静态博客的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决百度无法收录搭建在github上的静态博客的问题"}},[s._v("#")]),s._v(" 解决百度无法收录搭建在GitHub上的静态博客的问题")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("如果你正在寻找本博客的搭建文档，博主建议您查看这个仓库的"),t("a",{attrs:{href:"https://github.com/xugaoyi/vuepress-theme-vdoing",target:"_blank",rel:"noopener noreferrer"}},[s._v("README"),t("OutboundLink")],1),s._v("。")])]),s._v(" "),t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),t("p",[s._v("由于GitHub禁止百度爬虫访问，造成托管在GitHub Pages上的博客无法被百度收录。相关问题可以通过百度站长平台的"),t("code",[s._v("抓取诊断")]),s._v("再现，每次都是403 Forbidden的错误。")]),s._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("p",[s._v("同时将博客同时同步托管到GitHub Pages和"),t("a",{attrs:{href:"https://dev.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("coding pages"),t("OutboundLink")],1),s._v("上，解决百度不收录问题。最后发现在国内使用coding pages打开速度特别快，而且还会被百度收录，因此我把coding pages的站点作为主站点，原本在github pages的作为分站点。")]),s._v(" "),t("p",[s._v("步骤：")]),s._v(" "),t("p",[s._v("1、注册"),t("a",{attrs:{href:"https://dev.tencent.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("coding"),t("OutboundLink")],1),s._v("账号，创建仓库，把代码推送到coding仓库，并开启pages服务。")]),s._v(" "),t("blockquote",[t("p",[s._v("git 操作部分和使用github的差不多，不了解git操作的可以看我的另一篇文章："),t("a",{attrs:{href:"https://xugaoyi.com/pages/9a7ee40fc232253e/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git使用手册"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("2、我的博客项目使用vuepress搭建的，使用的是如下自动部署脚本，同时将代码推送到github和conding。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# github")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'b.xugaoyi.com'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CNAME\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" git@github.com:xugaoyi/blog.git master:gh-pages "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布到github")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# coding")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xugaoyi.com'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CNAME\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-A")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" git@git.dev.tencent.com:xugaoyi/xugaoyi.git master "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布到coding")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退回开始所在目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" docs/.vuepress/dist\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br")])]),t("blockquote",[t("p",[s._v("因为我想给两个平台上绑定不同的自定义域名，因此我分开创建了CNAME文件。")])]),s._v(" "),t("p",[s._v("3、有自定义域名的，也可以在coding pages绑定自定义域名，域名DNS解析中添加CNAME记录指向coding pages的站点地址即可。（没有自定义域名的可忽略，同时把自动部署脚本中的创建CNAME文件的脚本去掉）")]),s._v(" "),t("p",[s._v("最后，使用百度站长的抓取诊断，发现抓取成功啦，再使用百度站长的"),t("a",{attrs:{href:"https://ziyuan.baidu.com/linksubmit/index",target:"_blank",rel:"noopener noreferrer"}},[s._v("链接提交"),t("OutboundLink")],1),s._v("功能，把链接提交给百度，过一段时间就可能在百度搜索中搜索到啦。")]),s._v(" "),t("h3",{attrs:{id:"如何知道百度有没有收录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何知道百度有没有收录"}},[s._v("#")]),s._v(" 如何知道百度有没有收录？")]),s._v(" "),t("p",[s._v("在百度搜索框中使用site:<链接地址>，如：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("site:xugaoyi.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"相关文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关文章"}},[s._v("#")]),s._v(" 相关文章")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://xugaoyi.com/pages/f44d2f9ad04ab8d3/",target:"_blank",rel:"noopener noreferrer"}},[s._v("《GitHub Actions 定时运行代码：每天定时百度链接推送》"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);