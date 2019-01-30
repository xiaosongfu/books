<div id="toc">
  <div class="content">
    <header class="h4 text-uppercase">
      目录
      <a title="Back to top" class="back-to-top float-right mr-3">
        <i class="fas fa-angle-up"></i>
      </a>
    </header>
    <ul class="section-nav">
<li class="toc-entry toc-h2"><a href="#一个简单的-dart-程序">一个简单的 Dart 程序</a></li>
<li class="toc-entry toc-h2"><a href="#重要的概念">重要的概念</a></li>
<li class="toc-entry toc-h2"><a href="#关键字">关键字</a></li>
<li class="toc-entry toc-h2"><a href="#变量">变量</a>
<ul>
<li class="toc-entry toc-h3"><a href="#默认值">默认值</a></li>
<li class="toc-entry toc-h3"><a href="#final-和-const">Final 和 const</a></li>
</ul>
</li>
<li class="toc-entry toc-h2"><a href="#内建类型">内建类型</a>
<ul>
<li class="toc-entry toc-h3"><a href="#numbers">Numbers</a></li>
<li class="toc-entry toc-h3"><a href="#strings">Strings</a></li>
<li class="toc-entry toc-h3"><a href="#booleans">Booleans</a></li>
<li class="toc-entry toc-h3"><a href="#lists">Lists</a></li>
<li class="toc-entry toc-h3"><a href="#maps">Maps</a></li>
<li class="toc-entry toc-h3"><a href="#runes">Runes</a></li>
<li class="toc-entry toc-h3"><a href="#symbols">Symbols</a></li>
</ul>
</li>
<li class="toc-entry toc-h2"><a href="#函数">函数</a>
<ul>
<li class="toc-entry toc-h3"><a href="#可选参数">可选参数</a></li>
<li class="toc-entry toc-h3"><a href="#main-函数">main() 函数</a></li>
<li class="toc-entry toc-h3"><a href="#函数是一等对象">函数是一等对象</a></li>
<li class="toc-entry toc-h3"><a href="#匿名函数">匿名函数</a></li>
<li class="toc-entry toc-h3"><a href="#词法作用域">词法作用域</a></li>
<li class="toc-entry toc-h3"><a href="#词法闭包">词法闭包</a></li>
<li class="toc-entry toc-h3"><a href="#测试函数是否相等">测试函数是否相等</a></li>
<li class="toc-entry toc-h3"><a href="#返回值">返回值</a></li>
</ul>
</li>
<li class="toc-entry toc-h2"><a href="#运算符">运算符</a>
<ul>
<li class="toc-entry toc-h3"><a href="#算术运算符">算术运算符</a></li>
<li class="toc-entry toc-h3"><a href="#关系运算符">关系运算符</a></li>
<li class="toc-entry toc-h3"><a href="#类型判定运算符">类型判定运算符</a></li>
<li class="toc-entry toc-h3"><a href="#赋值运算符">赋值运算符</a></li>
<li class="toc-entry toc-h3"><a href="#逻辑运算符">逻辑运算符</a></li>
<li class="toc-entry toc-h3"><a href="#按位和移位运算符">按位和移位运算符</a></li>
<li class="toc-entry toc-h3"><a href="#条件表达式">条件表达式</a></li>
<li class="toc-entry toc-h3"><a href="#级联运算符-">级联运算符 (..)</a></li>
<li class="toc-entry toc-h3"><a href="#其他运算符">其他运算符</a></li>
</ul>
</li>
<li class="toc-entry toc-h2"><a href="#控制流程语句">控制流程语句</a>
<ul>
<li class="toc-entry toc-h3"><a href="#if-和-else">If 和 else</a></li>
<li class="toc-entry toc-h3"><a href="#for-循环">For 循环</a></li>
<li class="toc-entry toc-h3"><a href="#while-和-do-while">While 和 do-while</a></li>
<li class="toc-entry toc-h3"><a href="#break-和-continue">Break 和 continue</a></li>
<li class="toc-entry toc-h3"><a href="#switch-和-case">Switch 和 case</a></li>
<li class="toc-entry toc-h3"><a href="#assert">Assert</a></li>
</ul>
</li>
<li class="toc-entry toc-h2"><a href="#异常">异常</a>
<ul>
<li class="toc-entry toc-h3"><a href="#throw">Throw</a></li>
<li class="toc-entry toc-h3"><a href="#catch">Catch</a></li>
<li class="toc-entry toc-h3"><a href="#finally">Finally</a></li>
</ul>
</li>
<li class="toc-entry toc-h2"><a href="#类">类</a>
<ul>
<li class="toc-entry toc-h3"><a href="#使用类的成员变量">使用类的成员变量</a></li>
<li class="toc-entry toc-h3"><a href="#使用构造函数">使用构造函数</a></li>
<li class="toc-entry toc-h3"><a href="#获取对象的类型">获取对象的类型</a></li>
<li class="toc-entry toc-h3"><a href="#实例变量">实例变量</a></li>
<li class="toc-entry toc-h3"><a href="#构造函数">构造函数</a></li>
<li class="toc-entry toc-h3"><a href="#方法">方法</a></li>
<li class="toc-entry toc-h3"><a href="#抽象类">抽象类</a></li>
<li class="toc-entry toc-h3"><a href="#隐式接口">隐式接口</a></li>
<li class="toc-entry toc-h3"><a href="#扩展类继承">扩展类（继承）</a></li>
<li class="toc-entry toc-h3"><a href="#枚举类型">枚举类型</a></li>
<li class="toc-entry toc-h3"><a href="#为类添加功能mixins">为类添加功能：mixins</a></li>
<li class="toc-entry toc-h3"><a href="#类变量和方法">类变量和方法</a></li>
</ul>
</li>
<li class="toc-entry toc-h2"><a href="#泛型">泛型</a>
<ul>
<li class="toc-entry toc-h3"><a href="#为什么使用泛型">为什么使用泛型</a></li>
<li class="toc-entry toc-h3"><a href="#使用集合字面量">使用集合字面量</a></li>
<li class="toc-entry toc-h3"><a href="#使用泛型类型的构造函数">使用泛型类型的构造函数</a></li>
<li class="toc-entry toc-h3"><a href="#运行时中的泛型集合">运行时中的泛型集合</a></li>
<li class="toc-entry toc-h3"><a href="#限制泛型类型">限制泛型类型</a></li>
<li class="toc-entry toc-h3"><a href="#使用泛型函数">使用泛型函数</a></li>
</ul>
</li>
<li class="toc-entry toc-h2"><a href="#库和可见性">库和可见性</a>
<ul>
<li class="toc-entry toc-h3"><a href="#使用库">使用库</a></li>
<li class="toc-entry toc-h3"><a href="#实现库">实现库</a></li>
</ul>
</li>
<li class="toc-entry toc-h2"><a href="#异步支持">异步支持</a>
<ul>
<li class="toc-entry toc-h3"><a href="#处理-future">处理 Future</a></li>
<li class="toc-entry toc-h3"><a href="#声明异步函数">声明异步函数</a></li>
<li class="toc-entry toc-h3"><a href="#处理-stream">处理 Stream</a></li>
</ul>
</li>
<li class="toc-entry toc-h2"><a href="#生成器">生成器</a></li>
<li class="toc-entry toc-h2"><a href="#可调用类">可调用类</a></li>
<li class="toc-entry toc-h2"><a href="#isolates">Isolates</a></li>
<li class="toc-entry toc-h2"><a href="#typedefs">Typedefs</a></li>
<li class="toc-entry toc-h2"><a href="#元数据">元数据</a></li>
<li class="toc-entry toc-h2"><a href="#注释">注释</a>
<ul>
<li class="toc-entry toc-h3"><a href="#单行注释">单行注释</a></li>
<li class="toc-entry toc-h3"><a href="#多行注释">多行注释</a></li>
<li class="toc-entry toc-h3"><a href="#文档注释">文档注释</a></li>
</ul>
</li>
<li class="toc-entry toc-h2"><a href="#总结">总结</a></li>
</ul>
  </div>
</div>