(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{398:function(v,_,t){"use strict";t.r(_);var a=t(4),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h3",{attrs:{id:"eden和surivior比例"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#eden和surivior比例"}},[v._v("#")]),v._v(" Eden和surivior比例")]),v._v(" "),_("p",[v._v("默认8:1,实际动态调整")]),v._v(" "),_("h3",{attrs:{id:"标量替换"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标量替换"}},[v._v("#")]),v._v(" 标量替换")]),v._v(" "),_("p",[v._v("对象没有逃逸时，把对象肢解成基数据类型，存在栈帧的局部变量表里，不用在堆创建对象了")]),v._v(" "),_("h3",{attrs:{id:"对象是不是都分配在堆中"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对象是不是都分配在堆中"}},[v._v("#")]),v._v(" 对象是不是都分配在堆中")]),v._v(" "),_("p",[v._v("是，HotSpot JVM没有真的实现栈上分配，实现效果是标量替换导致的")]),v._v(" "),_("h3",{attrs:{id:"为什么永久代要被元空间取代"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么永久代要被元空间取代"}},[v._v("#")]),v._v(" 为什么永久代要被元空间取代")]),v._v(" "),_("ul",[_("li",[v._v("为永久代"),_("strong",[v._v("不好设置大小")]),v._v("，有时就是会加载很多类，就是容易OOM，元空间存在与本地内存而不是虚拟机中，只大小仅仅受到本地内存限制")]),v._v(" "),_("li",[v._v("对永久代进行"),_("strong",[v._v("调优困难")]),v._v("，内存小了，要经常FullGC，经常判断类和常量是不是垃圾，FullGC时耗费很多时间且STW")])]),v._v(" "),_("blockquote",[_("p",[v._v("根本原因还是内存太小，受限制太大")])]),v._v(" "),_("p",[v._v("为什么字符串常量池放堆里\n开发时经常会创建大量字符串，永久代回收频率太低，导致永久代空间不足，放堆里可以及时回收")]),v._v(" "),_("p",[v._v("HotSpot方法区的变化")]),v._v(" "),_("ul",[_("li",[v._v("jdk1.6：静态变量放永久代")]),v._v(" "),_("li",[v._v("jdk1.7：有永久代，慢慢“去永久代”，放堆")]),v._v(" "),_("li",[v._v("jdk1.8：放元空间，字符串常量表、静态变量放堆\n修改是变量的引用名，不是对象实例，对象实例都在堆里")])]),v._v(" "),_("p",[v._v("方法区要不要回收")]),v._v(" "),_("ul",[_("li",[v._v("官方没有明说，但是存在不支持垃圾回收的jvm")]),v._v(" "),_("li",[v._v("主要回收常量和类型（费力不讨好）")])]),v._v(" "),_("p",[v._v("为什么费力不讨好")]),v._v(" "),_("ul",[_("li",[v._v("该类是实例及派生类实例都回收")]),v._v(" "),_("li",[v._v("该类的类加载器")]),v._v(" "),_("li",[v._v("该类的java.lang.Class对象没有在任何地方引用，无法通过反射获取")])])])}),[],!1,null,null,null);_.default=s.exports}}]);