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

---

<p>这里将介绍 Dart 主要功能，从变量和运算符到类和库，假设您已经知道如何使用其他语言编程。</p>

<p>学习更多 Dart 核心库, 参考
<a href="/guides/libraries/library-tour">Dart 库概览</a>.
想了解更多有关语言功能的详细信息,
参考 <a href="/guides/language/spec">Dart 编程语言规范</a>.</p>

<div class="alert alert-info">
  <p><strong>提示:</strong>
使用 DartPad 可以体验 Dart 的大部分语言功能
(<a href="/tools/dartpad">learn more</a>).</p>

  <p><strong><a href="https://dartpad.dartlang.org" target="_blank">Open DartPad</a></strong></p>
</div>

<h2 id="一个简单的-dart-程序">
<a id="一个简单的-dart-程序" class="anchor" href="#%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84-dart-%E7%A8%8B%E5%BA%8F" aria-hidden="true"><span class="octicon octicon-link"></span></a>一个简单的 Dart 程序</h2>
<p>下面的代码用到了很多 Dart 的基本功能：</p>

<?code-excerpt "misc/test/language_tour/basic_test.dart"?>
<pre class="prettyprint lang-dart">// 定义一个函数
printInteger(int aNumber) {
  print('The number is $aNumber.'); // 打印到控制台。
}

// 应用从这里开始执行。
main() {
  var number = 42; // 声明并初始化一个变量。
  printInteger(number); // 调用函数。
}</pre>

<p>以下是此程序使用的代码，这些代码适用于所有（或几乎所有）的 Dart 
应用：</p>

<dl>
  <dt><code>// <em>代码注释。</em> </code></dt>
  <dd>
    <p>单行注释。
Dart 同样支持多行注释和文档注释。
有关更多信息，参考 <a href="#comments">注释</a>.</p>
  </dd>
  <dt><code class="highlighter-rouge">int</code></dt>
  <dd>
    <p>数据类型。 一些其他 <a href="#built-in-types">内置类型</a>
包括 <code class="highlighter-rouge">String</code>, <code class="highlighter-rouge">List</code>, 和 <code class="highlighter-rouge">bool</code>。</p>
  </dd>
  <dt><code class="highlighter-rouge">42</code></dt>
  <dd>
    <p>字面量. 字面量是一种编译型常量。</p>
  </dd>
  <dt><code class="highlighter-rouge">print()</code></dt>
  <dd>
    <p>便利输出方式。</p>
  </dd>
  <dt>
<code class="highlighter-rouge">'...'</code> (or <code class="highlighter-rouge">"..."</code>)</dt>
  <dd>
    <p>字符串常量。</p>
  </dd>
  <dt>
<code>$<em>variableName</em></code> (或 <code>${<em>expression</em>}</code>)</dt>
  <dd>
    <p>字符串插值： 包括字符串文字内部的变量或表达式的字符串。 
有关更多信息，参考
<a href="#strings">Strings</a>.</p>
  </dd>
  <dt><code class="highlighter-rouge">main()</code></dt>
  <dd>
    <p>程序开始执行函数，该函数是特定的、<em>必须的</em>、顶级函数。
有关更多信息，参考
<a href="#the-main-function">The main() function</a>.</p>
  </dd>
  <dt><code class="highlighter-rouge">var</code></dt>
  <dd>
    <p>定义变量，通过这种方式定义变量不需要指定变量类型。</p>
  </dd>
</dl>

<div class="alert alert-info">
  <p><strong>提示：</strong>
本站的代码遵循 Dart 风格指南中的约定。
<a href="/guides/language/effective-dart/style">Dart 风格指南</a>.</p>
</div>

<h2 id="重要的概念">
<a id="重要的概念" class="anchor" href="#%E9%87%8D%E8%A6%81%E7%9A%84%E6%A6%82%E5%BF%B5" aria-hidden="true"><span class="octicon octicon-link"></span></a>重要的概念</h2>

<p>在学习 Dart 语言时, 应该基于以下事实和概念：</p>

<ul>
  <li>
    <p>任何保存在变量中的都是一个 <em>对象</em> ， 并且所有的对象都是对应一个 <em>类</em> 的实例。
无论是数字，函数和 <code class="highlighter-rouge">null</code> 都是对象。所有对象继承自 <a href="https://api.dartlang.org/stable/dart-core/Object-class.html">Object</a> 类。</p>
  </li>
  <li>
    <p>尽管 Dart 是强类型的，但是 Dart 可以推断类型，所以类型注释是可选的。 
在上面的代码中， <code class="highlighter-rouge">number</code> 被推断为 <code class="highlighter-rouge">int</code> 类型。 
如果要明确说明不需要任何类型，
<a href="/guides/language/effective-dart/design#do-annotate-with-object-instead-of-dynamic-to-indicate-any-object-is-allowed">需要使用特殊类型 <code class="highlighter-rouge">dynamic</code></a> 。</p>
  </li>
  <li>
    <p>Dart 支持泛型，如 <code class="highlighter-rouge">List &lt;int&gt;</code> （整数列表）或 <code class="highlighter-rouge">List &lt;dynamic&gt;</code> （任何类型的对象列表）。</p>
  </li>
  <li>
    <p>Dart 支持顶级函数（例如 <code class="highlighter-rouge">main（）</code> ），
同样函数绑定在类或对象上（分别是 <em>静态函数</em> 和 <em>实例函数</em> ）。
以及支持函数内创建函数 （ <em>嵌套</em> 或 <em>局部函数</em> ） 。</p>
  </li>
  <li>
    <p>类似地， Dart 支持顶级 <em>变量</em> ，
同样变量绑定在类或对象上（静态变量和实例变量）。 
实例变量有时称为字段或属性。</p>
  </li>
  <li>
    <p>与 Java 不同，Dart 没有关键字 “public” ， “protected” 和 “private” 。 
如果标识符以下划线（\ _）开头，则它相对于库是私有的。 
有关更多信息，参考 <a href="#%E5%BA%93%E5%92%8C%E5%8F%AF%E8%A7%81%E6%80%A7">库和可见性</a>。</p>
  </li>
  <li>
    <p><em>标识符</em> 以字母或下划线（\ _）开头，后跟任意字母和数字组合。</p>
  </li>
  <li>
    <p>Dart 语法中包含 <em>表达式（ expressions ）</em>（有运行时值）和 <em>语句（ statements ）</em>（没有运行时值）。
例如，<a href="#conditional-expressions">条件表达式</a>
<code class="highlighter-rouge">condition ? expr1 : expr2</code> 的值可能是 <code class="highlighter-rouge">expr1</code> 或 <code class="highlighter-rouge">expr2</code> 。
将其与 <a href="#if-%E5%92%8C-else">if-else 语句</a> 相比较，if-else 语句没有值。
一条语句通常包含一个或多个表达式，相反表达式不能直接包含语句。</p>
  </li>
  <li>
    <p>Dart 工具提示两种类型问题：<em>警告_和_错误</em>。 
警告只是表明代码可能无法正常工作，但不会阻止程序的执行。 
错误可能是编译时错误或者运行时错误。 
编译时错误会阻止代码的执行;
运行时错误会导致代码在执行过程中引发 [异常]（#exception）。</p>
  </li>
</ul>

<h2 id="关键字">
<a id="关键字" class="anchor" href="#%E5%85%B3%E9%94%AE%E5%AD%97" aria-hidden="true"><span class="octicon octicon-link"></span></a>关键字</h2>

<p>Dart 语言关键字列表。</p>

<table class="table table-striped nowrap">
  <tbody>
    <tr>
      <td>
<a href="#%E6%8A%BD%E8%B1%A1%E7%B1%BB">abstract</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td>
<a href="#%E9%87%8D%E8%A6%81%E7%9A%84%E6%A6%82%E5%BF%B5">dynamic</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td>
<a href="#%E9%9A%90%E5%BC%8F%E6%8E%A5%E5%8F%A3">implements</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td>
<a href="#%E5%AF%BC%E5%85%A5%E5%BA%93%E7%9A%84%E4%B8%80%E9%83%A8%E5%88%86">show</a> <sup title="contextual keyword" alt="contextual keyword">1</sup>
</td>
    </tr>
    <tr>
      <td>
<a href="#%E7%B1%BB%E5%9E%8B%E5%88%A4%E5%AE%9A%E8%BF%90%E7%AE%97%E7%AC%A6">as</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td><a href="#if-%E5%92%8C-else">else</a></td>
      <td>
<a href="#%E4%BD%BF%E7%94%A8%E5%BA%93">import</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td>
<a href="#%E7%B1%BB%E5%8F%98%E9%87%8F%E5%92%8C%E6%96%B9%E6%B3%95">static</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
    </tr>
    <tr>
      <td><a href="#assert">assert</a></td>
      <td><a href="#%E6%9E%9A%E4%B8%BE%E7%B1%BB%E5%9E%8B">enum</a></td>
      <td><a href="#for-%E5%BE%AA%E7%8E%AF">in</a></td>
      <td><a href="#%E6%89%A9%E5%B1%95%E7%B1%BB%E7%BB%A7%E6%89%BF">super</a></td>
    </tr>
    <tr>
      <td>
<a href="#%E5%BC%82%E6%AD%A5%E6%94%AF%E6%8C%81">async</a> <sup title="contextual keyword" alt="contextual keyword">1</sup>
</td>
      <td>
<a href="/guides/libraries/create-library-packages">export</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td>
<a href="https://stackoverflow.com/questions/28595501/was-the-interface-keyword-removed-from-dart">interface</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td><a href="#switch-%E5%92%8C-case">switch</a></td>
    </tr>
    <tr>
      <td>
<a href="#%E5%BC%82%E6%AD%A5%E6%94%AF%E6%8C%81">await</a> <sup title="limited reserved word" alt="limited reserved word">3</sup>
</td>
      <td><a href="#%E6%89%A9%E5%B1%95%E7%B1%BB%E7%BB%A7%E6%89%BF">extends</a></td>
      <td><a href="#%E7%B1%BB%E5%9E%8B%E5%88%A4%E5%AE%9A%E8%BF%90%E7%AE%97%E7%AC%A6">is</a></td>
      <td>
<a href="#%E7%94%9F%E6%88%90%E5%99%A8">sync</a> <sup title="contextual keyword" alt="contextual keyword">1</sup>
</td>
    </tr>
    <tr>
      <td><a href="#break-%E5%92%8C-continue">break</a></td>
      <td>
<a href="https://stackoverflow.com/questions/24929659/what-does-external-mean-in-dart">external</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td>
<a href="#%E5%BA%93%E5%92%8C%E5%8F%AF%E8%A7%81%E6%80%A7">library</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td><a href="#%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0">this</a></td>
    </tr>
    <tr>
      <td><a href="#switch-%E5%92%8C-case">case</a></td>
      <td>
<a href="#%E5%B7%A5%E5%8E%82%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0">factory</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td>
<a href="#%E4%B8%BA%E7%B1%BB%E6%B7%BB%E5%8A%A0%E5%8A%9F%E8%83%BDmixins">mixin</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td><a href="#throw">throw</a></td>
    </tr>
    <tr>
      <td><a href="#catch">catch</a></td>
      <td><a href="#booleans">false</a></td>
      <td><a href="#%E4%BD%BF%E7%94%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0">new</a></td>
      <td><a href="#booleans">true</a></td>
    </tr>
    <tr>
      <td><a href="#%E5%AE%9E%E4%BE%8B%E5%8F%98%E9%87%8F">class</a></td>
      <td><a href="#final-%E5%92%8C-const">final</a></td>
      <td><a href="#%E9%BB%98%E8%AE%A4%E5%80%BC">null</a></td>
      <td><a href="#catch">try</a></td>
    </tr>
    <tr>
      <td><a href="#final-%E5%92%8C-const">const</a></td>
      <td><a href="#finally">finally</a></td>
      <td>
<a href="#catch">on</a> <sup title="contextual keyword" alt="contextual keyword">1</sup>
</td>
      <td>
<a href="#typedefs">typedef</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
    </tr>
    <tr>
      <td><a href="#break-%E5%92%8C-continue">continue</a></td>
      <td><a href="#for-%E5%BE%AA%E7%8E%AF">for</a></td>
      <td>
<a href="#%E9%87%8D%E5%86%99%E8%BF%90%E7%AE%97%E7%AC%A6">operator</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td><a href="#%E5%8F%98%E9%87%8F">var</a></td>
    </tr>
    <tr>
      <td>
<a href="/guides/language/sound-problems#the-covariant-keyword">covariant</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td>
<a href="#%E5%87%BD%E6%95%B0">Function</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td>
<a href="/guides/libraries/create-library-packages#organizing-a-library-package">part</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td><a href="https://medium.com/dartlang/dart-2-legacy-of-the-void-e7afb5f44df0">void</a></td>
    </tr>
    <tr>
      <td><a href="#switch-%E5%92%8C-case">default</a></td>
      <td>
<a href="#getters-%E5%92%8C-setters">get</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td><a href="#catch">rethrow</a></td>
      <td><a href="#while-%E5%92%8C-do-while">while</a></td>
    </tr>
    <tr>
      <td>
<a href="#%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD%E5%BA%93">deferred</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td>
<a href="#%E5%AF%BC%E5%85%A5%E5%BA%93%E7%9A%84%E4%B8%80%E9%83%A8%E5%88%86">hide</a> <sup title="contextual keyword" alt="contextual keyword">1</sup>
</td>
      <td><a href="#%E5%87%BD%E6%95%B0">return</a></td>
      <td><a href="#%E4%B8%BA%E7%B1%BB%E6%B7%BB%E5%8A%A0%E5%8A%9F%E8%83%BDmixins">with</a></td>
    </tr>
    <tr>
      <td><a href="#while-%E5%92%8C-do-while">do</a></td>
      <td><a href="#if-%E5%92%8C-else">if</a></td>
      <td>
<a href="#getters-%E5%92%8C-setters">set</a> <sup title="built-in-identifier" alt="built-in-identifier">2</sup>
</td>
      <td>
<a href="#%E7%94%9F%E6%88%90%E5%99%A8">yield</a> <sup title="limited reserved word" alt="limited reserved word">3</sup>
</td>
    </tr>
  </tbody>
</table>

<p>避免使用这些单词作为标识符。 
但是，如有必要，标有上标的关键字可以用作标识符：</p>

<ul>
  <li>
    <p>带有 <strong>1</strong> 上标的单词为 <strong>上下文关键字</strong>，
仅在特定位置具有含义。 
他们在任何地方都是有效的标识符。</p>
  </li>
  <li>
    <p>带有 <strong>2</strong> 上标的单词为 <strong>内置标识符</strong>，
为了简化将 JavaScript 代码移植到 Dart 的工作，
这些关键字在大多数地方都是有效的标识符，
但它们不能用作类或类型名称，也不能用作 import 前缀。</p>
  </li>
  <li>
    <p>带有 <strong>3</strong> 上标的单词是与 Dart 1.0 发布后添加的<a href="#%E5%BC%82%E6%AD%A5%E6%94%AF%E6%8C%81">异步支持</a>相关的更新，作为限制类保留字。<br>
不能在标记为 <code class="highlighter-rouge">async</code> ，<code class="highlighter-rouge">async*</code> 或 <code class="highlighter-rouge">sync*</code> 的任何函数体中使用 <code class="highlighter-rouge">await</code> 或 <code class="highlighter-rouge">yield</code> 作为标识符。</p>
  </li>
</ul>

<p>关键字表中的剩余单词都是<strong>保留字</strong>。
不能将保留字用作标识符。</p>

<h2 id="变量">
<a id="变量" class="anchor" href="#%E5%8F%98%E9%87%8F" aria-hidden="true"><span class="octicon octicon-link"></span></a>变量</h2>
<p>创建一个变量并进行初始化:</p>

<?code-excerpt "misc/lib/language_tour/variables.dart (var-decl)"?>
<pre class="prettyprint lang-dart">var name = 'Bob';</pre>

<p>变量仅存储对象引用，这里的变量是 <code class="highlighter-rouge">name</code> 存储了一个 <code class="highlighter-rouge">String</code> 类型的对象引用。
“Bob” 是这个 <code class="highlighter-rouge">String</code> 类型对象的值。</p>

<p><code class="highlighter-rouge">name</code> 变量的类型被推断为 <code class="highlighter-rouge">String</code> 。
但是也可以通过指定类型的方式，来改变变量类型。 
如果对象不限定为单个类型，可以指定为 <code class="highlighter-rouge">对象类型</code> 或 <code class="highlighter-rouge">动态类型</code>，
参考 <a href="/guides/language/effective-dart/design#do-annotate-with-object-instead-of-dynamic-to-indicate-any-object-is-allowed">设计指南</a>。</p>

<?code-excerpt "misc/lib/language_tour/variables.dart (type-decl)"?>
<pre class="prettyprint lang-dart">dynamic name = 'Bob';</pre>

<p>另一种方式是显式声明可以推断出的类型：</p>

<?code-excerpt "misc/lib/language_tour/variables.dart (static-types)"?>
<pre class="prettyprint lang-dart">String name = 'Bob';</pre>

<div class="alert alert-info">
  <p><strong>提示：</strong>
本页局部变量遵守
<a href="/guides/language/effective-dart/design#types">风格建议指南</a>
使用 <code class="highlighter-rouge">var</code>。 没有使用指定类型的方式。</p>
</div>

<h3 id="默认值">
<a id="默认值" class="anchor" href="#%E9%BB%98%E8%AE%A4%E5%80%BC" aria-hidden="true"><span class="octicon octicon-link"></span></a>默认值</h3>

<p>未初始化的变量默认值是 <code class="highlighter-rouge">null</code>。即使变量是数字
类型默认值也是 null，因为在 Dart 中一切都是对象，数字类型
也不例外。</p>

<?code-excerpt "misc/test/language_tour/variables_test.dart (var-null-init)"?>
<pre class="prettyprint lang-dart">int lineCount;
assert(lineCount == null);</pre>

<div class="alert alert-info">
  <p><strong>提示：</strong>
在生产环境代码中 <code class="highlighter-rouge">assert()</code> 函数会被忽略，不会被调用。
在开发过程中, <code>assert(<em>condition</em>)</code>
会在非 <code class="highlighter-rouge">true</code> 的条件下抛出异常.有关更多信息，参考
 <a href="#assert">Assert</a>.</p>
</div>

<h3 id="final-和-const">
<a id="final-和-const" class="anchor" href="#final-%E5%92%8C-const" aria-hidden="true"><span class="octicon octicon-link"></span></a>Final 和 const</h3>

<p>使用过程中从来不会被修改的变量， 可以使用 <code class="highlighter-rouge">final</code> 或 <code class="highlighter-rouge">const</code>, 而不是 <code class="highlighter-rouge">var</code> 或者其他类型，
final 变量的值只能被设置一次；
const 变量在编译时就已经固定 (Const 变量
是隐式 final 的类型.) 最高级 final 变量或类变量在第一次使用时被初始化。</p>

<div class="alert alert-info">
  <p><strong>提示：</strong>
实例变量可以是 <code class="highlighter-rouge">final</code> 类型但不能是 <code class="highlighter-rouge">const</code> 类型。
必须在构造函数体执行之前初始化 final 实例变量 —— 
在变量声明中，参数构造函数中或构造函数的<a href="#initializer-list">初始化列表</a>中进行初始化。</p>
</div>

<p>创建和设置一个 final 变量：</p>

<?code-excerpt "misc/lib/language_tour/variables.dart (final)"?>
<pre class="prettyprint lang-dart">final name = 'Bob'; // Without a type annotation
final String nickname = 'Bobby';</pre>

<p>final 不能被修改:</p>

<?code-excerpt "misc/lib/language_tour/variables.dart (cant-assign-to-final)"?>
<pre class="prettyprint lang-dart fails-sa">name = 'Alice'; // Error: 一个 final 变量只能被设置一次。</pre>

<p>如果需要在<strong>编译时</strong>就固定变量的值，可以使用 <code class="highlighter-rouge">const</code> 类型变量。
如果 const 变量是类级别的，需要标记为 <code class="highlighter-rouge">static const</code>。
在这些地方可以使用在编译时就已经固定不变的值，字面量的数字和字符串，
固定的变量，或者是用于计算的固定数字：</p>

<?code-excerpt "misc/lib/language_tour/variables.dart (const)"?>
<pre class="prettyprint lang-dart">const bar = 1000000; // 压力单位 (dynes/cm2)
const double atm = 1.01325 * bar; // 标准气压</pre>

<p>const 关键字不仅可以用于声明常量变量。 
还可以用来创建常量值，以及声明创建常量值的构造函数。
任何变量都可以拥有常量值。</p>

<?code-excerpt "misc/lib/language_tour/variables.dart (const-vs-final)"?>
<pre class="prettyprint lang-dart">var foo = const [];
final bar = const [];
const baz = []; // Equivalent to `const []`</pre>

<p>声明 <code class="highlighter-rouge">const</code> 的初始化表达式中 <code class="highlighter-rouge">const</code> 可以被省略。
比如上面的 <code class="highlighter-rouge">baz</code>。 有关更多信息，参考 <a href="/guides/language/effective-dart/usage#dont-use-const-redundantly">DON’T use const redundantly</a>。</p>

<p>非 final ， 非 const 的变量是可以被修改的，即使这些变量
曾经引用过 const 值。</p>

<?code-excerpt "misc/lib/language_tour/variables.dart (reassign-to-non-final)"?>
<pre class="prettyprint lang-dart">foo = [1, 2, 3]; // 曾经引用过 const [] 常量值。</pre>

<p>const 变量的值不可以修改：</p>

<?code-excerpt "misc/lib/language_tour/variables.dart (cant-assign-to-const)"?>
<pre class="prettyprint lang-dart fails-sa">baz = [42]; // Error: 常量变量不能赋值修改。</pre>

<p>更多关于使用 <code class="highlighter-rouge">const</code> 创建常量值，参考
<a href="#lists">Lists</a>， <a href="#maps">Maps</a>， 和 <a href="#classes">Classes</a>。</p>

<h2 id="内建类型">
<a id="内建类型" class="anchor" href="#%E5%86%85%E5%BB%BA%E7%B1%BB%E5%9E%8B" aria-hidden="true"><span class="octicon octicon-link"></span></a>内建类型</h2>

<p>Dart 语言支持以下内建类型：</p>

<ul>
  <li>numbers</li>
  <li>strings</li>
  <li>booleans</li>
  <li>lists (也被称为 <em>arrays</em>)</li>
  <li>maps</li>
  <li>runes (用于在字符串中表示 Unicode 字符)</li>
  <li>symbols</li>
</ul>

<p>这些类型都可以被初始化为字面量。
例如, <code class="highlighter-rouge">'this is a string'</code> 是一个字符串的字面量，
<code class="highlighter-rouge">true</code> 是一个布尔的字面量。</p>

<p>因为在 Dart 所有的变量终究是一个对象（一个类的实例），
所以变量可以使用 <em>构造行数</em> 进行初始化。
一些内建类型拥有自己的构造函数。
例如， 通过 <code class="highlighter-rouge">Map()</code> 来构造一个 map 变量。</p>

<h3 id="numbers">
<a id="numbers" class="anchor" href="#numbers" aria-hidden="true"><span class="octicon octicon-link"></span></a>Numbers</h3>

<p>Dart 语言的 numbers 有两种类型:</p>

<dl>
  <dt><a href="https://api.dartlang.org/stable/dart-core/int-class.html">int</a></dt>
  <dd>
    <p>整数值不大于64位，
具体取决于平台。
在 Dart VM 上， 值的范围从
-2<sup>63</sup> 到 2<sup>63</sup> - 1.
Dart 被编译为 JavaScript 时，使用
<a href="https://stackoverflow.com/questions/2802957/number-of-bits-in-javascript-numbers/2803010#2803010">JavaScript numbers,</a>
值的范围从 -2<sup>53</sup> 到 2<sup>53</sup> - 1.</p>
  </dd>
  <dt><a href="https://api.dartlang.org/stable/dart-core/double-class.html">double</a></dt>
  <dd>
    <p>64位（双精度）浮点数，依据 IEEE 754 标准。</p>
  </dd>
</dl>

<p><code class="highlighter-rouge">int</code> 和 <code class="highlighter-rouge">double</code> 都是 <a href="https://api.dartlang.org/stable/dart-core/num-class.html"><code class="highlighter-rouge">num</code>.</a> 的亚类型。
num 类型包括基本运算 +， -， /， 和 *，
以及 <code class="highlighter-rouge">abs()</code>，<code class="highlighter-rouge"> ceil()</code>，
和 <code class="highlighter-rouge">floor()</code>， 等函数方法。
（按位运算符，例如»，定义在 int 类中。）
如果 num 及其亚类型找不到你想要的方法，
尝试查找使用 <a href="https://api.dartlang.org/stable/dart-math">dart:math</a> 库。</p>

<p>整数类型不包含小数点。
下面是定义整数类型字面量的例子:</p>

<?code-excerpt "misc/lib/language_tour/built_in_types.dart (integer-literals)"?>
<pre class="prettyprint lang-dart">var x = 1;
var hex = 0xDEADBEEF;</pre>
<p>如果一个数字包含小数点，那么就是小数类型。 
下面是定义小数类型字面量的例子:</p>

<?code-excerpt "misc/lib/language_tour/built_in_types.dart (double-literals)"?>
<pre class="prettyprint lang-dart">var y = 1.1;
var exponents = 1.42e5;</pre>

<p>从 Dart 2.1 开始，必要的时候 int 字面量会自动转换成 double 类型。</p>

<?code-excerpt "misc/lib/language_tour/built_in_types.dart (int-to-double)"?>
<pre class="prettyprint lang-dart">double z = 1; // 相当于 double z = 1.0.</pre>

<aside class="alert alert-info">
  <p><strong>版本提示：</strong>
  在 2.1 之前，在 double 上下文中使用 int 字面量是错误的。</p>
</aside>

<p>以下是将字符串转换为数字的方法，反之亦然：</p>

<?code-excerpt "misc/test/language_tour/built_in_types_test.dart (number-conversion)"?>
<pre class="prettyprint lang-dart">// String -&gt; int
var one = int.parse('1');
assert(one == 1);

// String -&gt; double
var onePointOne = double.parse('1.1');
assert(onePointOne == 1.1);

// int -&gt; String
String oneAsString = 1.toString();
assert(oneAsString == '1');

// double -&gt; String
String piAsString = 3.14159.toStringAsFixed(2);
assert(piAsString == '3.14');</pre>

<p>int 特有的传统按位运算操作，移位（&lt;&lt;， &gt;&gt;），按位与（&amp;）以及 按位或（|）。
例如：</p>

<?code-excerpt "misc/test/language_tour/built_in_types_test.dart (bit-shifting)"?>
<pre class="prettyprint lang-dart">assert((3 &lt;&lt; 1) == 6); // 0011 &lt;&lt; 1 == 0110
assert((3 &gt;&gt; 1) == 1); // 0011 &gt;&gt; 1 == 0001
assert((3 | 4) == 7); // 0011 | 0100 == 0111</pre>

<p>数字类型字面量是编译时常量。
在算术表达式中，只要参与计算的因子是编译时常量， 
那么算术表达式的结果也是编译时常量。</p>

<?code-excerpt "misc/lib/language_tour/built_in_types.dart (const-num)"?>
<pre class="prettyprint lang-dart">const msPerSecond = 1000;
const secondsUntilRetry = 5;
const msUntilRetry = secondsUntilRetry * msPerSecond;</pre>

<h3 id="strings">
<a id="strings" class="anchor" href="#strings" aria-hidden="true"><span class="octicon octicon-link"></span></a>Strings</h3>

<p>Dart 字符串是一组 UTF-16 单元序列。
字符串通过单引号或者双引号创建。</p>

<?code-excerpt "misc/lib/language_tour/built_in_types.dart (quoting)"?>
<pre class="prettyprint lang-dart">var s1 = 'Single quotes work well for string literals.';
var s2 = "Double quotes work just as well.";
var s3 = 'It\'s easy to escape the string delimiter.';
var s4 = "It's even easier to use the other delimiter.";</pre>

<p>字符串可以通过 <code class="highlighter-rouge">${</code><em><code class="highlighter-rouge">expression</code></em><code class="highlighter-rouge">}</code> 的方式内嵌表达式。
如果表达式是一个标识符，则 {} 可以省略。
在 Dart 中通过调用就对象的 <code class="highlighter-rouge">toString()</code> 方法来得到对象相应的字符串。</p>

<?code-excerpt "misc/test/language_tour/built_in_types_test.dart (string-interpolation)"?>
<pre class="prettyprint lang-dart">var s = 'string interpolation';

assert('Dart has $s, which is very handy.' ==
    'Dart has string interpolation, ' +
        'which is very handy.');
assert('That deserves all caps. ' +
        '${s.toUpperCase()} is very handy!' ==
    'That deserves all caps. ' +
        'STRING INTERPOLATION is very handy!');</pre>

<div class="alert alert-info">
  <p><strong>提示：</strong>
<code class="highlighter-rouge">==</code> 运算符用来测试两个对象是否相等。
在字符串中，如果两个字符串包含了相同的编码序列，那么这两个字符串相等。
units.</p>
</div>

<p>可以使用 <code class="highlighter-rouge">+</code> 运算符来把多个字符串连接为一个，也可以把多个字面量字符串写在一起来实现字符串连接：</p>

<?code-excerpt "misc/test/language_tour/built_in_types_test.dart (adjacent-string-literals)"?>
<pre class="prettyprint lang-dart">var s1 = 'String '
    'concatenation'
    " works even over line breaks.";
assert(s1 ==
    'String concatenation works even over '
    'line breaks.');

var s2 = 'The + operator ' + 'works, as well.';
assert(s2 == 'The + operator works, as well.');</pre>

<p>使用连续三个单引号或者三个双引号实现多行字符串对象的创建：</p>

<?code-excerpt "misc/lib/language_tour/built_in_types.dart (triple-quotes)"?>
<pre class="prettyprint lang-dart">var s1 = '''
You can create
multi-line strings like this one.
''';

var s2 = """This is also a
multi-line string.""";</pre>

<p>使用 <code class="highlighter-rouge">r</code> 前缀，可以创建 “原始 raw” 字符串：</p>

<?code-excerpt "misc/lib/language_tour/built_in_types.dart (raw-strings)"?>
<pre class="prettyprint lang-dart">var s = r"In a raw string, even \n isn't special.";</pre>

<p>参考 <a href="#runes">Runes</a> 来了解如何在字符串中表达 Unicode 
字符。</p>

<p>一个编译时常量的字面量字符串中，如果存在插值表达式，表达式内容也是编译时常量，
那么该字符串依旧是编译时常量。
插入的常量值类型可以是 null，数值，字符串或布尔值。</p>

<?code-excerpt "misc/lib/language_tour/built_in_types.dart (string-literals)"?>
<pre class="prettyprint lang-dart">// const 类型数据
const aConstNum = 0;
const aConstBool = true;
const aConstString = 'a constant string';

// 非 const 类型数据
var aNum = 0;
var aBool = true;
var aString = 'a string';
const aConstList = [1, 2, 3];

const validConstString = '$aConstNum $aConstBool $aConstString'; //const 类型数据
// const invalidConstString = '$aNum $aBool $aString $aConstList'; //非 const 类型数据</pre>

<p>更多关于 string 的使用, 参考
<a href="/guides/libraries/library-tour#strings-and-regular-expressions">字符串和正则表达式</a>.</p>

<h3 id="booleans">
<a id="booleans" class="anchor" href="#booleans" aria-hidden="true"><span class="octicon octicon-link"></span></a>Booleans</h3>

<p>Dart 使用 <code class="highlighter-rouge">bool</code> 类型表示布尔值。 
Dart 只有字面量 <code class="highlighter-rouge">true</code> and <code class="highlighter-rouge">false</code> 是布尔类型，
这两个对象都是编译时常量。</p>

<p>Dart 的类型安全意味着不能使用
<code>if (<em>nonbooleanValue</em>)</code> 或者
<code>assert (<em>nonbooleanValue</em>)</code>。
而是应该像下面这样，明确的进行值检查：</p>

<?code-excerpt "misc/test/language_tour/built_in_types_test.dart (no-truthy)"?>
<pre class="prettyprint lang-dart">// 检查空字符串。
var fullName = '';
assert(fullName.isEmpty);

// 检查 0 值。
var hitPoints = 0;
assert(hitPoints &lt;= 0);

// 检查 null 值。
var unicorn;
assert(unicorn == null);

// 检查 NaN 。
var iMeantToDoThis = 0 / 0;
assert(iMeantToDoThis.isNaN);</pre>

<h3 id="lists">
<a id="lists" class="anchor" href="#lists" aria-hidden="true"><span class="octicon octicon-link"></span></a>Lists</h3>

<p>几乎每种编程语言中最常见的集合可能是 <em>array</em> 或有序的对象集合。
在 Dart 中的 <em>array</em> 就是 <a href="https://api.dartlang.org/stable/dart-core/List-class.html">List</a> 对象，
通常称之为 <em>lists</em> 。</p>

<p>Dart 中的 list 字面量非常像 JavaScript 中的 array 字面量。 
下面是一个 Dart list 的示例：</p>

<?code-excerpt "misc/lib/language_tour/built_in_types.dart (list-literal)"?>
<pre class="prettyprint lang-dart">var list = [1, 2, 3];</pre>

<aside class="alert alert-info">
  <p><strong>提示：</strong>
 分析器推断 <code class="highlighter-rouge">list</code> 的类型为 <code class="highlighter-rouge">List&lt;int&gt;</code> 。 
  如果尝试将非整数对象添加到此 list 中，
  则分析器或运行时会引发错误。 
  有关更多信息，请阅读
  <a href="/guides/language/sound-dart#type-inference">类型推断。</a></p>
</aside>

<p>Lists 的下标索引从 0 开始，第一个元素的索引是 0。
list.length - 1 是最后一个元素的索引。 
访问 list 的长度和元素与 
JavaScript 中的用法一样：</p>

<?code-excerpt "misc/test/language_tour/built_in_types_test.dart (list-indexing)"?>
<pre class="prettyprint lang-dart">var list = [1, 2, 3];
assert(list.length == 3);
assert(list[1] == 2);

list[1] = 1;
assert(list[1] == 1);</pre>

<p>在 list 字面量之前添加 const 关键字，可以定义 list 类型的编译时常量：</p>

<?code-excerpt "misc/lib/language_tour/built_in_types.dart (const-list)"?>
<pre class="prettyprint lang-dart">var constantList = const [1, 2, 3];
// constantList[1] = 1; // 取消注释会引起错误。</pre>

<p>List 类型包含了很多 lists 的操作函数。 
更多信息参考 <a href="#generics">泛型</a> 和
<a href="/guides/libraries/library-tour#collections">集合</a>.</p>

<h3 id="maps">
<a id="maps" class="anchor" href="#maps" aria-hidden="true"><span class="octicon octicon-link"></span></a>Maps</h3>

<p>通常来说， map 是用来关联 keys 和 values 的对象。
keys 和 values 可以是任何类型的对象。在一个 map 对象中一个 <em>key</em> 只能出现一次。
但是 <em>value</em> 可以出现多次。 Dart 中 map 通过 map 字面量 和 <a href="https://api.dartlang.org/stable/dart-core/Map-class.html">Map</a> 类型来实现。</p>

<p>下面是使用 map 字面量的两个简单例子：</p>

<?code-excerpt "misc/lib/language_tour/built_in_types.dart (map-literal)"?>
<pre class="prettyprint lang-dart">var gifts = {
  // Key:    Value
  'first': 'partridge',
  'second': 'turtledoves',
  'fifth': 'golden rings'
};

var nobleGases = {
  2: 'helium',
  10: 'neon',
  18: 'argon',
};</pre>

<aside class="alert alert-info">
  <p><strong>提示：</strong>
  分析器会将 <code class="highlighter-rouge">gifts</code> 的类型推断为 <code class="highlighter-rouge">Map&lt;String, String&gt;</code>，
  <code class="highlighter-rouge">nobleGases</code> 的类型推断为 <code class="highlighter-rouge">Map&lt;int, String&gt;</code> 。 
  如果尝试在上面的 map 中添加错误类型，那么分析器或者运行时会引发错误。 
  有关更多信息，请阅读<a href="/guides/language/sound-dart#type-inference">类型推断。</a>。</p>
</aside>

<p>以上 map 对象也可以使用 Map 构造函数创建：</p>

<?code-excerpt "misc/lib/language_tour/built_in_types.dart (map-constructor)"?>
<pre class="prettyprint lang-dart">var gifts = Map();
gifts['first'] = 'partridge';
gifts['second'] = 'turtledoves';
gifts['fifth'] = 'golden rings';

var nobleGases = Map();
nobleGases[2] = 'helium';
nobleGases[10] = 'neon';
nobleGases[18] = 'argon';</pre>

<aside class="alert alert-info">
  <p><strong>提示:</strong>
这里为什么只有 <code class="highlighter-rouge">Map()</code> ，而不是使用 <code class="highlighter-rouge">new Map()</code>。
因为在 Dart 2 中，<code class="highlighter-rouge">new</code> 关键字是可选的。
有关更多信息，参考 <a href="#%E4%BD%BF%E7%94%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0">构造函数的使用</a>。</p>
</aside>

<p>类似 JavaScript ，添加 key-value 对到已有的 map 中：</p>

<?code-excerpt "misc/lib/language_tour/built_in_types.dart (map-add-item)"?>
<pre class="prettyprint lang-dart">var gifts = {'first': 'partridge'};
gifts['fourth'] = 'calling birds'; // Add a key-value pair</pre>

<p>类似 JavaScript ，从一个 map 中移除一个 value：</p>

<?code-excerpt "misc/test/language_tour/built_in_types_test.dart (map-retrieve-item)"?>
<pre class="prettyprint lang-dart">var gifts = {'first': 'partridge'};
assert(gifts['first'] == 'partridge');</pre>

<p>如果 map 中不包含所要查找的 key，那么 map 返回 null：</p>

<?code-excerpt "misc/test/language_tour/built_in_types_test.dart (map-missing-key)"?>
<pre class="prettyprint lang-dart">var gifts = {'first': 'partridge'};
assert(gifts['fifth'] == null);</pre>

<p>使用 <code class="highlighter-rouge">.length</code> 函数获取当前 map 中的 key-value 对数量：</p>

<?code-excerpt "misc/test/language_tour/built_in_types_test.dart (map-length)"?>
<pre class="prettyprint lang-dart">var gifts = {'first': 'partridge'};
gifts['fourth'] = 'calling birds';
assert(gifts.length == 2);</pre>

<p>创建 map 类型运行时常量，要在 map 字面量前加上关键字 <code class="highlighter-rouge">const</code>。
add <code class="highlighter-rouge">const</code> before the map literal:</p>

<?code-excerpt "misc/lib/language_tour/built_in_types.dart (const-map)"?>
<pre class="prettyprint lang-dart">final constantMap = const {
  2: 'helium',
  10: 'neon',
  18: 'argon',
};

// constantMap[2] = 'Helium'; // 取消注释会引起错误。</pre>

<p>更名多关于 map 的内容，参考
<a href="#generics">Generics</a> and
<a href="/guides/libraries/library-tour#maps">Maps</a>.</p>

<h3 id="runes">
<a id="runes" class="anchor" href="#runes" aria-hidden="true"><span class="octicon octicon-link"></span></a>Runes</h3>

<p>在 Dart 中，runes 用来表示字符串中的 UTF-32 编码字符。</p>

<p>Unicode 定义了一个全球的书写系统编码，
系统中使用的所有字母，数字和符号都对应唯一的数值编码。
由于 Dart 字符串是一系列 UTF-16 编码单元，
因此要在字符串中表示32位 Unicode 值需要特殊语法支持。</p>

<p>表示 Unicode 编码的常用方法是，
<code class="highlighter-rouge">\uXXXX</code>, 这里 XXXX 是一个4位的16进制数。
例如，心形符号 (♥) 是 <code class="highlighter-rouge">\u2665</code>。
对于特殊的非 4 个数值的情况，
把编码值放到大括号中即可。
例如，emoji 的笑脸   (�) 是 <code class="highlighter-rouge">\u{1f600}</code>。</p>

<p><a href="https://api.dartlang.org/stable/dart-core/String-class.html">String</a>
类有一些属性可以获得 rune 数据。
属性 <code class="highlighter-rouge">codeUnitAt</code> 和 <code class="highlighter-rouge">codeUnit</code> 返回16位编码数据。
属性 <code class="highlighter-rouge">runes</code> 获取字符串中的 runes 。</p>

<p>下面是示例演示了 runes、 16-bit code units、
和 32-bit code points 之间的关系。
点击运行按钮 <img alt="" src="/assets/red-run-50a66e01c7e7a877dbc06e799d5bc4b73c4dace2926ec17b4493d8c3e939c59a.png">
查看 runes 结果。</p>

<iframe src="https://dartpad.dartlang.org/embed-inline.html?id=589bc5c95318696cefe5&amp;verticalRatio=65" width="100%" height="333px" style="border: 1px solid #ccc;">
</iframe>

<div class="alert alert-warning">
  <p><strong>提示：</strong>
谨慎使用 list 方式操作 runes。
这种方法很容易引发崩溃，
具体原因取决于特定的语言，字符集和操作。
有关更多信息，参考
<a href="http://stackoverflow.com/questions/21521729/how-do-i-reverse-a-string-in-dart">How do I reverse a String in Dart?</a> on Stack Overflow.</p>
</div>

<h3 id="symbols">
<a id="symbols" class="anchor" href="#symbols" aria-hidden="true"><span class="octicon octicon-link"></span></a>Symbols</h3>

<p>一个 Symbol 对象表示 Dart 程序中声明的运算符或者标识符。 
你也许永远都不需要使用 Symbol ，但要按名称引用标识符的 API 时， Symbol 就非常有用了。
因为代码压缩后会改变标识符的名称，但不会改变标识符的符号。
通过字面量 Symbol ，也就是标识符前面添加一个 <code class="highlighter-rouge">#</code> 号，来获取标识符的 Symbol 。</p>

<pre><code class="language-nocode">#radix
#bar
</code></pre>

<p>Symbol 字面量是编译时常量。</p>

<h2 id="函数">
<a id="函数" class="anchor" href="#%E5%87%BD%E6%95%B0" aria-hidden="true"><span class="octicon octicon-link"></span></a>函数</h2>

<p>Dart 是一门真正面向对象的语言，
甚至其中的函数也是对象，并且有它的类型 
<a href="https://api.dartlang.org/stable/dart-core/Function-class.html">Function</a> 。
这也意味着函数可以被赋值给变量或者作为参数传递给其他函数。
也可以把 Dart 类的实例当做方法来调用。
有关更多信息，参考 <a href="#callable-classes">Callable classes</a>.</p>

<p>已下是函数实现的示例：</p>

<?code-excerpt "misc/lib/language_tour/functions.dart (function)"?>
<pre class="prettyprint lang-dart">bool isNoble(int atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}</pre>

<p>虽然在 Effective Dart 中推荐
<a href="/guides/language/effective-dart/design#prefer-type-annotating-public-fields-and-top-level-variables-if-the-type-isnt-obvious">公共API中声明类型</a>,
但是省略了类型声明，函数依旧是可以正常使用的：</p>

<?code-excerpt "misc/lib/language_tour/functions.dart (function-omitting-types)"?>
<pre class="prettyprint lang-dart">isNoble(atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}</pre>

<p>如果函数中只有一句表达式，可以使用简写语法：</p>

<?code-excerpt "misc/lib/language_tour/functions.dart (function-shorthand)"?>
<pre class="prettyprint lang-dart">bool isNoble(int atomicNumber) =&gt; _nobleGases[atomicNumber] != null;</pre>

<p><code>=&gt; <em>expr</em></code> 语法是
<code>{ return <em>expr</em>; }</code> 的简写。 <code class="highlighter-rouge">=&gt;</code> 符号
有时也被称为 <em>箭头</em> 语法。</p>

<div class="alert alert-info">
  <p><strong>提示：</strong>
在箭头 (=&gt;) 和冒号 (;) 之间只能使用一个 <em>表达式</em>—不能是 <em>语句</em>。
例如：不能使用 <a href="#if-%E5%92%8C-else">if
语句</a> ，但是可以是用 
<a href="#conditional-expressions">条件表达式</a>.</p>
</div>

<p>函数有两种参数类型: required 和 optional。
required 类型参数在参数最前面， 随后是 optional 类型参数。
命名的可选参数也可以标记为 “@ required” 。
参考下一章节，了解更多细节。</p>

<h3 id="可选参数">
<a id="可选参数" class="anchor" href="#%E5%8F%AF%E9%80%89%E5%8F%82%E6%95%B0" aria-hidden="true"><span class="octicon octicon-link"></span></a>可选参数</h3>

<p>可选参数可以是命名参数或者位置参数，但一个参数只能选择其中一种方式修饰。</p>

<h4 id="命名可选参数">命名可选参数</h4>

<p>调用函数时，可以使用指定命名参数
<code><em>paramName</em>: <em>value</em></code>。 例如：</p>

<?code-excerpt "misc/lib/language_tour/functions.dart (use-named-parameters)"?>
<pre class="prettyprint lang-dart">enableFlags(bold: true, hidden: false);</pre>

<p>定义函数是，使用
<code>{<em>param1</em>, <em>param2</em>, …}</code>
来指定命名参数：</p>

<?code-excerpt "misc/lib/language_tour/functions.dart (specify-named-parameters)"?>
<pre class="prettyprint lang-dart">/// Sets the [bold] and [hidden] flags ...
void enableFlags({bool bold, bool hidden}) {...}</pre>

<p><a href="https://flutter.io">Flutter</a> 创建实例的表达式可能很复杂，
因此窗口小部件构造函数仅使用命名参数。 
这样创建实例的表达式更易于阅读。</p>

<p>使用 <a href="https://pub.dartlang.org/documentation/meta/latest/meta/required-constant.html">@required</a> 注释表示参数是 <em>required</em> 性质的命名参数，
该方式可以在任何 Dart 代码中使用（不仅仅是Flutter）。</p>

<?code-excerpt "misc/lib/language_tour/functions.dart (required-named-parameters)" replace="/@required/[!$&!]/g"?>
<pre class="prettyprint lang-dart">const Scrollbar({Key key, <span class="highlight">@required</span> Widget child})</pre>

<p>此时 <code class="highlighter-rouge">Scrollbar</code> 是一个构造函数， 当 <code class="highlighter-rouge">child</code> 参数缺少是，分析器会提示错误。</p>

<p><a href="https://pub.dartlang.org/documentation/meta/latest/meta/required-constant.html">Required</a> 被定义在 <a href="https://pub.dartlang.org/packages/meta">meta</a> package。 无论是直接引入（import）
<code class="highlighter-rouge">package:meta/meta.dart</code> ，或者引入了其他 package，而这个 package 输出（export）了
<code class="highlighter-rouge">meta</code>，比如 Flutter 的 <code class="highlighter-rouge">package:flutter/material.dart</code>。</p>

<h4 id="位置可选参数">位置可选参数</h4>

<p>将参数放到 <code class="highlighter-rouge">[]</code> 中来标记参数是可选的：</p>

<?code-excerpt "misc/test/language_tour/functions_test.dart (optional-positional-parameters)"?>
<pre class="prettyprint lang-dart">String say(String from, String msg, [String device]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  return result;
}</pre>

<p>下面是不使用可选参数调用上面方法
的示例：</p>

<?code-excerpt "misc/test/language_tour/functions_test.dart (call-without-optional-param)"?>
<pre class="prettyprint lang-dart">assert(say('Bob', 'Howdy') == 'Bob says Howdy');</pre>

<p>下面是使用可选参数调用上面方法的示例：</p>

<?code-excerpt "misc/test/language_tour/functions_test.dart (call-with-optional-param)"?>
<pre class="prettyprint lang-dart">assert(say('Bob', 'Howdy', 'smoke signal') ==
    'Bob says Howdy with a smoke signal');</pre>

<p><a id="default-parameters"></a></p>
<h4 id="默认参数值">默认参数值</h4>

<p>在定义方法的时候，可以使用 <code class="highlighter-rouge">=</code> 来定义可选参数的默认值。
默认值只能是编译时常量。 
如果没有提供默认值，则默认值为 null。</p>

<p>下面是设置可选参数默认值示例：</p>

<?code-excerpt "misc/lib/language_tour/functions.dart (named-parameter-default-values)"?>
<pre class="prettyprint lang-dart">/// 设置 [bold] 和 [hidden] 标志 ...
void enableFlags({bool bold = false, bool hidden = false}) {...}

// bold 值为 true; hidden 值为 false.
enableFlags(bold: true);</pre>

<div class="alert alert-info">
  <p><strong>不推荐：</strong>
旧版本代码中可能使用的是冒号 (<code class="highlighter-rouge">:</code>) 而不是 <code class="highlighter-rouge">=</code> 
来设置参数默认值。
原因是起初命名参数只支持 <code class="highlighter-rouge">:</code> 。
这种支持可能会被弃用。
建议
<strong><a href="/tools/pub/pubspec#sdk-constraints">使用 <code class="highlighter-rouge">=</code> 指定默认值。</a></strong></p>
</div>

<p>下面示例演示了如何为位置参数设置默认值：</p>

<?code-excerpt "misc/test/language_tour/functions_test.dart (optional-positional-param-default)"?>
<pre class="prettyprint lang-dart">String say(String from, String msg,
    [String device = 'carrier pigeon', String mood]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  if (mood != null) {
    result = '$result (in a $mood mood)';
  }
  return result;
}

assert(say('Bob', 'Howdy') ==
    'Bob says Howdy with a carrier pigeon');</pre>

<p>list 或 map 可以作为默认值传递。
下面的示例定义了一个方法 <code class="highlighter-rouge">doStuff()</code>，
并分别指定参数 <code class="highlighter-rouge">list</code> 和 <code class="highlighter-rouge">gifts</code>
的默认值。</p>

<?code-excerpt "misc/lib/language_tour/functions.dart (list-map-default-function-param)"?>
<pre class="prettyprint lang-dart">void doStuff(
    {List&lt;int&gt; list = const [1, 2, 3],
    Map&lt;String, String&gt; gifts = const {
      'first': 'paper',
      'second': 'cotton',
      'third': 'leather'
    }}) {
  print('list:  $list');
  print('gifts: $gifts');
}</pre>

<h3 id="main-函数">
<a id="main-函数" class="anchor" href="#main-%E5%87%BD%E6%95%B0" aria-hidden="true"><span class="octicon octicon-link"></span></a>main() 函数</h3>

<p>任何应用都必须有一个顶级 <code class="highlighter-rouge">main()</code> 函数，作为应用服务的入口。
<code class="highlighter-rouge">main()</code> 函数返回值为空，参数为一个可选的 <code class="highlighter-rouge">List&lt;String&gt;</code> 。</p>

<p>下面是 web 应用的 <code class="highlighter-rouge">main()</code> 函数：</p>

<?code-excerpt "misc/test/language_tour/browser_test.dart (simple-web-main-function)"?>
<pre class="prettyprint lang-dart">void main() {
  querySelector('#sample_text_id')
    ..text = 'Click me!'
    ..onClick.listen(reverseText);
}</pre>

<div class="alert alert-info">
  <p><strong>提示：</strong></p>

  <p>以上代码中的 <code class="highlighter-rouge">..</code> 语法为 <a href="#cascade-notation-">级联调用</a> （cascade）。 
使用级联调用， 可以简化在一个对象上执行的多个操作。</p>
</div>

<p>下面是一个命令行应用的 <code class="highlighter-rouge">main()</code> 方法，并且使用了输入参数：</p>

<?code-excerpt "misc/test/language_tour/functions_test.dart (main-args)"?>
<pre class="prettyprint lang-dart">// 这样运行应用： dart args.dart 1 test
void main(List&lt;String&gt; arguments) {
  print(arguments);

  assert(arguments.length == 2);
  assert(int.parse(arguments[0]) == 1);
  assert(arguments[1] == 'test');
}</pre>

<p>使用 <a href="https://pub.dartlang.org/packages/args">args library</a> 可以定义和解析命令行参数。</p>

<h3 id="函数是一等对象">
<a id="函数是一等对象" class="anchor" href="#%E5%87%BD%E6%95%B0%E6%98%AF%E4%B8%80%E7%AD%89%E5%AF%B9%E8%B1%A1" aria-hidden="true"><span class="octicon octicon-link"></span></a>函数是一等对象</h3>

<p>一个函数可以作为另一个函数的参数。 例如：</p>

<?code-excerpt "misc/lib/language_tour/functions.dart (function-as-param)"?>
<pre class="prettyprint lang-dart">void printElement(int element) {
  print(element);
}

var list = [1, 2, 3];

// 将 printElement 函数作为参数传递。
list.forEach(printElement);</pre>

<p>同样可以将一个函数赋值给一个变量，例如：</p>

<?code-excerpt "misc/test/language_tour/functions_test.dart (function-as-var)"?>
<pre class="prettyprint lang-dart">var loudify = (msg) =&gt; '!!! ${msg.toUpperCase()} !!!';
assert(loudify('hello') == '!!! HELLO !!!');</pre>

<p>示例中使用了匿名函数。
下一章节会有更多介绍。</p>

<h3 id="匿名函数">
<a id="匿名函数" class="anchor" href="#%E5%8C%BF%E5%90%8D%E5%87%BD%E6%95%B0" aria-hidden="true"><span class="octicon octicon-link"></span></a>匿名函数</h3>

<p>多数函数是有名字的， 比如 <code class="highlighter-rouge">main()</code> 和 <code class="highlighter-rouge">printElement()</code>。
也可以创建没有名字的函数，这种函数被称为 <em>匿名函数</em>，
有时候也被称为 <em>lambda</em> 或者 <em>closure</em> 。
匿名函数可以被复制到一个变量中，
举个例子，在一个集合中可以添加或者删除一个匿名函数。</p>

<p>匿名函数和命名函数看起来类似— 
在括号之间可以定义一些参数或可选参数，参数使用逗号分割。</p>

<p>后面大括号中的代码为函数体：</p>

<p><code>
([[<em>Type</em>] <em>param1</em>[, …]]) { <br>
  <em>codeBlock</em>; <br>
}; <br>
</code></p>

<p>下面例子中定义了一个包含一个无类型参数 <code class="highlighter-rouge">item</code> 的匿名函数。
list 中的每个元素都会调用这个函数，打印元素位置和值的字符串。</p>

<?code-excerpt "misc/test/language_tour/functions_test.dart (anonymous-function)"?>
<pre class="prettyprint lang-dart">var list = ['apples', 'bananas', 'oranges'];
list.forEach((item) {
  print('${list.indexOf(item)}: $item');
});</pre>

<p>点击运行按钮 <img alt="" src="/assets/red-run-50a66e01c7e7a877dbc06e799d5bc4b73c4dace2926ec17b4493d8c3e939c59a.png"> 执行代码。</p>

<iframe src="https://dartpad.dartlang.org/embed-inline.html?id=5d70bc1889d055c7a18d35d77874af88&amp;verticalRatio=60" width="100%" height="250px" style="border: 1px solid #ccc;">
</iframe>

<p>如果函数只有一条语句， 
可以使用箭头简写。粘贴下面代码到 DartPad 中
并点击运行按钮，验证两个函数是等价性。</p>

<?code-excerpt "misc/test/language_tour/functions_test.dart (anon-func)"?>
<pre class="prettyprint lang-dart">list.forEach(
    (item) =&gt; print('${list.indexOf(item)}: $item'));</pre>

<h3 id="词法作用域">
<a id="词法作用域" class="anchor" href="#%E8%AF%8D%E6%B3%95%E4%BD%9C%E7%94%A8%E5%9F%9F" aria-hidden="true"><span class="octicon octicon-link"></span></a>词法作用域</h3>

<p>Dart 是一门词法作用域的编程语言，就意味着变量的作用域是固定的，
简单说变量的作用域在编写代码的时候就已经确定了。
花括号内的是变量可见的作用域。</p>

<p>下面示例关于多个嵌套函数的变量作用域：</p>

<?code-excerpt "misc/test/language_tour/functions_test.dart (nested-functions)"?>
<pre class="prettyprint lang-dart">bool topLevel = true;

void main() {
  var insideMain = true;

  void myFunction() {
    var insideFunction = true;

    void nestedFunction() {
      var insideNestedFunction = true;

      assert(topLevel);
      assert(insideMain);
      assert(insideFunction);
      assert(insideNestedFunction);
    }
  }
}</pre>

<p>注意 <code class="highlighter-rouge">nestedFunction()</code> 可以访问所有的变量， 
一直到顶级作用域变量。</p>

<h3 id="词法闭包">
<a id="词法闭包" class="anchor" href="#%E8%AF%8D%E6%B3%95%E9%97%AD%E5%8C%85" aria-hidden="true"><span class="octicon octicon-link"></span></a>词法闭包</h3>

<p><em>闭包</em> 即一个函数对象，不管该汗水对象在何处被调用，
该函数都可以访问其作用域内的变量。</p>

<p>函数可以封闭定义到它作用域内的变量。 接下来的示例中，
<code class="highlighter-rouge">makeAdder()</code> 捕获了变量 <code class="highlighter-rouge">addBy</code>。 
无论在什么时候执行返回函数，函数都会使用捕获的 <code class="highlighter-rouge">addBy</code> 变量。</p>

<?code-excerpt "misc/test/language_tour/functions_test.dart (function-closure)"?>
<pre class="prettyprint lang-dart">/// 返回一个函数，该函数将函数的参与与 [addBy]
相加。
Function makeAdder(num addBy) {
  return (num i) =&gt; addBy + i;
}

void main() {
  // 创建一个加 2 的函数。
  var add2 = makeAdder(2);

  // 创建一个加 4 的函数。
  var add4 = makeAdder(4);

  assert(add2(3) == 5);
  assert(add4(3) == 7);
}</pre>

<h3 id="测试函数是否相等">
<a id="测试函数是否相等" class="anchor" href="#%E6%B5%8B%E8%AF%95%E5%87%BD%E6%95%B0%E6%98%AF%E5%90%A6%E7%9B%B8%E7%AD%89" aria-hidden="true"><span class="octicon octicon-link"></span></a>测试函数是否相等</h3>

<p>下面是顶级函数，静态方法和示例方法相等性的测试示例：</p>

<?code-excerpt "misc/lib/language_tour/function_equality.dart"?>
<pre class="prettyprint lang-dart">void foo() {} // 顶级函数

class A {
  static void bar() {} // 静态方法
  void baz() {} // 示例方法
}

void main() {
  var x;

  // 比较顶级函数。
  x = foo;
  assert(foo == x);

  // 比较静态方法。
  x = A.bar;
  assert(A.bar == x);

  // 比较实例方法。
  var v = A(); // A的1号实例
  var w = A(); // A的2号实例
  var y = w;
  x = w.baz;

  // 两个闭包引用的同一实例（2号）,
  // 所以它们相等。
  assert(y.baz == x);

  // 两个闭包引用的非同一个实例，
  // 所以它们不相等。
  assert(v.baz != w.baz);
}</pre>

<h3 id="返回值">
<a id="返回值" class="anchor" href="#%E8%BF%94%E5%9B%9E%E5%80%BC" aria-hidden="true"><span class="octicon octicon-link"></span></a>返回值</h3>

<p>所有函数都会返回一个值。 如果没有明确指定返回值，
函数体会被隐式的添加 <code class="highlighter-rouge">return null;</code> 语句。</p>

<?code-excerpt "misc/test/language_tour/functions_test.dart (implicit-return-null)"?>
<pre class="prettyprint lang-dart">foo() {}

assert(foo() == null);</pre>

<h2 id="运算符">
<a id="运算符" class="anchor" href="#%E8%BF%90%E7%AE%97%E7%AC%A6" aria-hidden="true"><span class="octicon octicon-link"></span></a>运算符</h2>

<p>下表是 Dart 定义的运算符。
多数运算符可以被重载，详情参考
<a href="#%E9%87%8D%E5%86%99%E8%BF%90%E7%AE%97%E7%AC%A6">重写运算符</a>。</p>

<table class="table table-striped">
  <thead>
    <tr>
      <th>Description</th>
      <th>Operator</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>unary postfix</td>
      <td>
<code><em>expr</em>++</code>    <code><em>expr</em>--</code>    <code class="highlighter-rouge">()</code>    <code class="highlighter-rouge">[]</code>    <code class="highlighter-rouge">.</code>    <code class="highlighter-rouge">?.</code>
</td>
    </tr>
    <tr>
      <td>unary prefix</td>
      <td>
<code>-<em>expr</em></code>    <code>!<em>expr</em></code>    <code>~<em>expr</em></code>    <code>++<em>expr</em></code>    <code>--<em>expr</em></code>   </td>
    </tr>
    <tr>
      <td>multiplicative</td>
      <td>
<code class="highlighter-rouge">*</code>    <code class="highlighter-rouge">/</code>    <code class="highlighter-rouge">%</code>    <code class="highlighter-rouge">~/</code>
</td>
    </tr>
    <tr>
      <td>additive</td>
      <td>
<code class="highlighter-rouge">+</code>    <code class="highlighter-rouge">-</code>
</td>
    </tr>
    <tr>
      <td>shift</td>
      <td>
<code class="highlighter-rouge">&lt;&lt;</code>    <code class="highlighter-rouge">&gt;&gt;</code>
</td>
    </tr>
    <tr>
      <td>bitwise AND</td>
      <td><code class="highlighter-rouge">&amp;</code></td>
    </tr>
    <tr>
      <td>bitwise XOR</td>
      <td><code class="highlighter-rouge">^</code></td>
    </tr>
    <tr>
      <td>bitwise OR</td>
      <td><code class="highlighter-rouge">|</code></td>
    </tr>
    <tr>
      <td>relational and type test</td>
      <td>
<code class="highlighter-rouge">&gt;=</code>    <code class="highlighter-rouge">&gt;</code>    <code class="highlighter-rouge">&lt;=</code>    <code class="highlighter-rouge">&lt;</code>    <code class="highlighter-rouge">as</code>    <code class="highlighter-rouge">is</code>    <code class="highlighter-rouge">is!</code>
</td>
    </tr>
    <tr>
      <td>equality</td>
      <td>
<code class="highlighter-rouge">==</code>    <code class="highlighter-rouge">!=</code>   </td>
    </tr>
    <tr>
      <td>logical AND</td>
      <td><code class="highlighter-rouge">&amp;&amp;</code></td>
    </tr>
    <tr>
      <td>logical OR</td>
      <td><code class="highlighter-rouge">||</code></td>
    </tr>
    <tr>
      <td>if null</td>
      <td><code class="highlighter-rouge">??</code></td>
    </tr>
    <tr>
      <td>conditional</td>
      <td><code><em>expr1</em> ? <em>expr2</em> : <em>expr3</em></code></td>
    </tr>
    <tr>
      <td>cascade</td>
      <td><code class="highlighter-rouge">..</code></td>
    </tr>
    <tr>
      <td>assignment</td>
      <td>
<code class="highlighter-rouge">=</code>    <code class="highlighter-rouge">*=</code>    <code class="highlighter-rouge">/=</code>    <code class="highlighter-rouge">~/=</code>    <code class="highlighter-rouge">%=</code>    <code class="highlighter-rouge">+=</code>    <code class="highlighter-rouge">-=</code>    <code class="highlighter-rouge">&lt;&lt;=</code>    <code class="highlighter-rouge">&gt;&gt;=</code>    <code class="highlighter-rouge">&amp;=</code>    <code class="highlighter-rouge">^=</code>    <code class="highlighter-rouge">|=</code>    <code class="highlighter-rouge">??=</code>
</td>
    </tr>
  </tbody>
</table>

<p>创建表达式的时候会用到运算符。 
下面是一些运算符表达式的实例：</p>

<?code-excerpt "misc/test/language_tour/operators_test.dart (expressions)" replace="/,//g"?>
<pre class="prettyprint lang-dart">a++
a + b
a = b
a == b
c ? a : b
a is T</pre>

<p>在 <a href="#operators">运算符表</a> 中，
每一行的运算符优先级，由上到下依次排列，第一行优先级最高，最后一行优先级最低。
例如
<code class="highlighter-rouge">%</code> 运算符优先级高于 <code class="highlighter-rouge">==</code> ，
而 <code class="highlighter-rouge">==</code> 高于 <code class="highlighter-rouge">&amp;&amp;</code>。
根据优先级规则，那么意味着以下两行代码执行的方式相同：</p>

<?code-excerpt "misc/test/language_tour/operators_test.dart (precedence)"?>
<pre class="prettyprint lang-dart">// 括号可以提高可读性。
if ((n % i == 0) &amp;&amp; (d % i == 0)) ...

// 可读性差，但是是等效的。
if (n % i == 0 &amp;&amp; d % i == 0) ...</pre>

<div class="alert alert-warning">
  <p><strong>警告：</strong>
对于有两个操作数的运算符，运算符的功能由左边的操作数决定。
例如,
如果有两个操作数 Vector 和 Point，
<code class="highlighter-rouge">aVector + aPoint</code> 使用的是 Vector 中定义的 + 运算符。</p>
</div>

<h3 id="算术运算符">
<a id="算术运算符" class="anchor" href="#%E7%AE%97%E6%9C%AF%E8%BF%90%E7%AE%97%E7%AC%A6" aria-hidden="true"><span class="octicon octicon-link"></span></a>算术运算符</h3>

<p>Dart 支持常用的运算运算符，如下表所示：</p>

<table class="table table-striped">
  <thead>
    <tr>
      <th>Operator</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="highlighter-rouge">+</code></td>
      <td>Add</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">–</code></td>
      <td>Subtract</td>
    </tr>
    <tr>
      <td><code>-<em>expr</em></code></td>
      <td>Unary minus, also known as negation (reverse the sign of the expression)</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">*</code></td>
      <td>Multiply</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">/</code></td>
      <td>Divide</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">~/</code></td>
      <td>Divide, returning an integer result</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">%</code></td>
      <td>Get the remainder of an integer division (modulo)</td>
    </tr>
  </tbody>
</table>

<p>示例：</p>

<?code-excerpt "misc/test/language_tour/operators_test.dart (arithmetic)"?>
<pre class="prettyprint lang-dart">assert(2 + 3 == 5);
assert(2 - 3 == -1);
assert(2 * 3 == 6);
assert(5 / 2 == 2.5); // 结果是双浮点型
assert(5 ~/ 2 == 2); // 结果是整型
assert(5 % 2 == 1); // 余数

assert('5/2 = ${5 ~/ 2} r ${5 % 2}' == '5/2 = 2 r 1');</pre>

<p>Dart 还支持前缀和后缀，自增和自减运算符。</p>

<table class="table table-striped">
  <thead>
    <tr>
      <th>Operator</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>++<em>var</em></code></td>
      <td>
<code><em>var</em> = <em>var</em> + 1</code> (expression value is <code><em>var</em> + 1</code>)</td>
    </tr>
    <tr>
      <td><code><em>var</em>++</code></td>
      <td>
<code><em>var</em> = <em>var</em> + 1</code> (expression value is <code><em>var</em></code>)</td>
    </tr>
    <tr>
      <td><code>--<em>var</em></code></td>
      <td>
<code><em>var</em> = <em>var</em> – 1</code> (expression value is <code><em>var</em> – 1</code>)</td>
    </tr>
    <tr>
      <td><code><em>var</em>--</code></td>
      <td>
<code><em>var</em> = <em>var</em> – 1</code> (expression value is <code><em>var</em></code>)</td>
    </tr>
  </tbody>
</table>

<p>示例：</p>

<?code-excerpt "misc/test/language_tour/operators_test.dart (increment-decrement)"?>
<pre class="prettyprint lang-dart">var a, b;

a = 0;
b = ++a; // a自加后赋值给b。
assert(a == b); // 1 == 1

a = 0;
b = a++; // a先赋值给b后，a自加。
assert(a != b); // 1 != 0

a = 0;
b = --a; // a自减后赋值给b。
assert(a == b); // -1 == -1

a = 0;
b = a--; // a先赋值给b后，a自减。
assert(a != b); // -1 != 0</pre>

<h3 id="关系运算符">
<a id="关系运算符" class="anchor" href="#%E5%85%B3%E7%B3%BB%E8%BF%90%E7%AE%97%E7%AC%A6" aria-hidden="true"><span class="octicon octicon-link"></span></a>关系运算符</h3>

<p>下表列出了关系运算符及含义：</p>

<table class="table table-striped">
  <thead>
    <tr>
      <th>Operator</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="highlighter-rouge">==</code></td>
      <td>Equal; see discussion below</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">!=</code></td>
      <td>Not equal</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">&gt;</code></td>
      <td>Greater than</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">&lt;</code></td>
      <td>Less than</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">&gt;=</code></td>
      <td>Greater than or equal to</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">&lt;=</code></td>
      <td>Less than or equal to</td>
    </tr>
  </tbody>
</table>

<p>要测试两个对象x和y是否表示相同的事物，
使用 <code class="highlighter-rouge">==</code> 运算符。 (在极少数情况下，
要确定两个对象是否完全相同，需要使用 <a href="https://api.dartlang.org/stable/dart-core/identical.html">identical()</a> 函数。)
下面给出 <code class="highlighter-rouge">==</code> 运算符的工作原理：</p>

<ol>
  <li>
    <p>如果 <em>x</em> 或 <em>y</em> 可以 null，都为 null 时返回 true ，其中一个为 null 时返回 false。</p>
  </li>
  <li>
    <p>结果为函数 <code><em>x</em>.==(<em>y</em>)</code> 的返回值。
(如上所见,
<code class="highlighter-rouge">==</code> 运算符执行的是第一个运算符的函数。
我们甚至可以重写很多运算符，包括 <code class="highlighter-rouge">==</code>，
运算符的重写，参考 
<a href="#%E9%87%8D%E5%86%99%E8%BF%90%E7%AE%97%E7%AC%A6">重写运算符</a>。）</p>
  </li>
</ol>

<p>这里列出了每种关系运算符的示例：</p>

<?code-excerpt "misc/test/language_tour/operators_test.dart (relational)"?>
<pre class="prettyprint lang-dart">assert(2 == 2);
assert(2 != 3);
assert(3 &gt; 2);
assert(2 &lt; 3);
assert(3 &gt;= 3);
assert(2 &lt;= 3);</pre>

<h3 id="类型判定运算符">
<a id="类型判定运算符" class="anchor" href="#%E7%B1%BB%E5%9E%8B%E5%88%A4%E5%AE%9A%E8%BF%90%E7%AE%97%E7%AC%A6" aria-hidden="true"><span class="octicon octicon-link"></span></a>类型判定运算符</h3>

<p><code class="highlighter-rouge">as</code>， <code class="highlighter-rouge">is</code>， 和 <code class="highlighter-rouge">is!</code> 运算符用于在运行时处理类型检查：</p>

<table class="table table-striped">
  <thead>
    <tr>
      <th>Operator</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="highlighter-rouge">as</code></td>
      <td>Typecast (也被用于<a href="#%E6%8C%87%E5%AE%9A%E5%BA%93%E5%89%8D%E7%BC%80">指定库前缀</a>)</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">is</code></td>
      <td>True if the object has the specified type</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">is!</code></td>
      <td>False if the object has the specified type</td>
    </tr>
  </tbody>
</table>

<p>例如， <code class="highlighter-rouge">obj is Object</code> 总是 true。
但是只有 <code class="highlighter-rouge">obj</code> 实现了 <code class="highlighter-rouge">T</code> 的接口时， <code class="highlighter-rouge">obj is T</code> 才是 true。</p>

<p>使用 <code class="highlighter-rouge">as</code> 运算符将对象强制转换为特定类型。 
通常，可以认为是 <code class="highlighter-rouge">is</code> 类型判定后，被判定对象调用函数的一种缩写形式。
请考虑以下代码：</p>

<?code-excerpt "misc/lib/language_tour/classes/employee.dart (emp is Person)"?>
<pre class="prettyprint lang-dart">if (emp is Person) {
  // Type check
  emp.firstName = 'Bob';
}</pre>

<p>使用 <code class="highlighter-rouge">as</code> 运算符进行缩写：</p>

<?code-excerpt "misc/lib/language_tour/classes/employee.dart (emp as Person)"?>
<pre class="prettyprint lang-dart">(emp as Person).firstName = 'Bob';</pre>

<div class="alert alert-info">
  <p><strong>提示：</strong>
以上代码并不是等价的。
如果 <code class="highlighter-rouge">emp</code> 为 null 或者不是 Person 对象，
那么第一个 <code class="highlighter-rouge">is</code> 的示例，后面将不回执行；
第二个 <code class="highlighter-rouge">as</code> 的示例会抛出异常。</p>
</div>

<h3 id="赋值运算符">
<a id="赋值运算符" class="anchor" href="#%E8%B5%8B%E5%80%BC%E8%BF%90%E7%AE%97%E7%AC%A6" aria-hidden="true"><span class="octicon octicon-link"></span></a>赋值运算符</h3>

<p>使用 <code class="highlighter-rouge">=</code> 为变量赋值。
使用 <code class="highlighter-rouge">??=</code> 运算符时，只有当被复制变量为 null 时才会赋值给变量。</p>

<?code-excerpt "misc/test/language_tour/operators_test.dart (assignment)"?>
<pre class="prettyprint lang-dart">// 将值赋值给变量a
a = value;
// 如果b为空时，将变量赋值给b，否则，b的值保持不变。
b ??= value;</pre>

<p>复合赋值运算符（如 <code class="highlighter-rouge">+=</code> ）将算术运算符和赋值运算符组合在了一起。</p>

<table class="table">
  <tbody>
    <tr>
      <td><code class="highlighter-rouge">=</code></td>
      <td><code class="highlighter-rouge">–=</code></td>
      <td><code class="highlighter-rouge">/=</code></td>
      <td><code class="highlighter-rouge">%=</code></td>
      <td><code class="highlighter-rouge">&gt;&gt;=</code></td>
      <td><code class="highlighter-rouge">^=</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">+=</code></td>
      <td><code class="highlighter-rouge">*=</code></td>
      <td><code class="highlighter-rouge">~/=</code></td>
      <td><code class="highlighter-rouge">&lt;&lt;=</code></td>
      <td><code class="highlighter-rouge">&amp;=</code></td>
      <td><code class="highlighter-rouge">|=</code></td>
    </tr>
  </tbody>
</table>

<p>以下说明复合赋值运算符的作用：</p>

<table class="table">
  <thead>
    <tr>
      <th> </th>
      <th>Compound assignment</th>
      <th>Equivalent expression</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>For an operator <em>op</em>:</strong></td>
      <td><code>a <em>op</em>= b</code></td>
      <td><code>a = a <em>op</em> b</code></td>
    </tr>
    <tr>
      <td><strong>Example:</strong></td>
      <td><code class="highlighter-rouge">a += b</code></td>
      <td><code class="highlighter-rouge">a = a + b</code></td>
    </tr>
  </tbody>
</table>

<p>以下示例使用赋值和复合赋值运算符：</p>

<?code-excerpt "misc/test/language_tour/operators_test.dart (op-assign)"?>
<pre class="prettyprint lang-dart">var a = 2; // 使用 = 复制
a *= 3; // 复制并做乘法运算： a = a * 3
assert(a == 6);</pre>

<h3 id="逻辑运算符">
<a id="逻辑运算符" class="anchor" href="#%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97%E7%AC%A6" aria-hidden="true"><span class="octicon octicon-link"></span></a>逻辑运算符</h3>

<p>逻辑操作符可以反转或组合布尔表达式。</p>

<table class="table table-striped">
  <thead>
    <tr>
      <th>Operator</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>!<em>expr</em></code></td>
      <td>inverts the following expression (changes false to true, and vice versa)</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">||</code></td>
      <td>logical OR</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">&amp;&amp;</code></td>
      <td>logical AND</td>
    </tr>
  </tbody>
</table>

<p>下面是关于逻辑表达式的示例：</p>

<?code-excerpt "misc/lib/language_tour/operators.dart (op-logical)"?>
<pre class="prettyprint lang-dart">if (!done &amp;&amp; (col == 0 || col == 3)) {
  // ...Do something...
}</pre>

<h3 id="按位和移位运算符">
<a id="按位和移位运算符" class="anchor" href="#%E6%8C%89%E4%BD%8D%E5%92%8C%E7%A7%BB%E4%BD%8D%E8%BF%90%E7%AE%97%E7%AC%A6" aria-hidden="true"><span class="octicon octicon-link"></span></a>按位和移位运算符</h3>

<p>在 Dart 中，可以单独操作数字的某一位。
通常情况下整数类型使用按位和移位运算符来操作。</p>

<table class="table table-striped">
  <thead>
    <tr>
      <th>Operator</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="highlighter-rouge">&amp;</code></td>
      <td>AND</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">|</code></td>
      <td>OR</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">^</code></td>
      <td>XOR</td>
    </tr>
    <tr>
      <td><code>~<em>expr</em></code></td>
      <td>Unary bitwise complement (0s become 1s; 1s become 0s)</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">&lt;&lt;</code></td>
      <td>Shift left</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">&gt;&gt;</code></td>
      <td>Shift right</td>
    </tr>
  </tbody>
</table>

<p>下面是关于按位和移位运算符的示例：</p>

<?code-excerpt "misc/test/language_tour/operators_test.dart (op-bitwise)"?>
<pre class="prettyprint lang-dart">final value = 0x22;
final bitmask = 0x0f;

assert((value &amp; bitmask) == 0x02); // AND
assert((value &amp; ~bitmask) == 0x20); // AND NOT
assert((value | bitmask) == 0x2f); // OR
assert((value ^ bitmask) == 0x2d); // XOR
assert((value &lt;&lt; 4) == 0x220); // Shift left
assert((value &gt;&gt; 4) == 0x02); // Shift right</pre>

<h3 id="条件表达式">
<a id="条件表达式" class="anchor" href="#%E6%9D%A1%E4%BB%B6%E8%A1%A8%E8%BE%BE%E5%BC%8F" aria-hidden="true"><span class="octicon octicon-link"></span></a>条件表达式</h3>

<p>Dart有两个运算符，有时可以替换 <a href="#if-%E5%92%8C-else">if-else</a> 表达式，
让表达式更简洁：</p>

<dl>
  <dt><code><em>condition</em> ? <em>expr1</em> : <em>expr2</em></code></dt>
  <dd>如果条件为 true, 执行 <em>expr1</em> (并返回它的值)：
否则, 执行并返回 <em>expr2</em> 的值。</dd>
  <dt><code><em>expr1</em> ?? <em>expr2</em></code></dt>
  <dd>如果 <em>expr1</em> 是 non-null， 返回 <em>expr1</em> 的值；
否则, 执行并返回 <em>expr2</em> 的值。</dd>
</dl>

<p>如果赋值是根据布尔值，
考虑使用
 <code class="highlighter-rouge">?:</code>。</p>

<?code-excerpt "misc/lib/language_tour/operators.dart (if-then-else-operator)"?>
<pre class="prettyprint lang-dart">var visibility = isPublic ? 'public' : 'private';</pre>

<p>如果赋值是基于判定是否为 null，
考虑使用
 <code class="highlighter-rouge">??</code>。</p>

<?code-excerpt "misc/test/language_tour/operators_test.dart (if-null)"?>
<pre class="prettyprint lang-dart">String playerName(String name) =&gt; name ?? 'Guest';</pre>

<p>下面给出了其他两种实现方式，
但并不简洁：</p>

<?code-excerpt "misc/test/language_tour/operators_test.dart (if-null-alt)"?>
<pre class="prettyprint lang-dart">// Slightly longer version uses ?: operator.
String playerName(String name) =&gt; name != null ? name : 'Guest';

// Very long version uses if-else statement.
String playerName(String name) {
  if (name != null) {
    return name;
  } else {
    return 'Guest';
  }
}</pre>

<p><a id="cascade"></a></p>
<h3 id="级联运算符-">
<a id="级联运算符-" class="anchor" href="#%E7%BA%A7%E8%81%94%E8%BF%90%E7%AE%97%E7%AC%A6-" aria-hidden="true"><span class="octicon octicon-link"></span></a>级联运算符 (..)</h3>

<p>级联运算符 (<code class="highlighter-rouge">..</code>) 可以实现对同一个对像进行一系列的操作。
除了调用函数，
还可以访问同一对象上的字段属性。
这通常可以节省创建临时变量的步骤，
同时编写出更流畅的代码。</p>

<p>考虑一下代码：</p>

<?code-excerpt "misc/test/language_tour/browser_test.dart (cascade-operator)"?>
<pre class="prettyprint lang-dart">querySelector('#confirm') // 获取对象。
  ..text = 'Confirm' // 调用成员变量。
  ..classes.add('important')
  ..onClick.listen((e) =&gt; window.alert('Confirmed!'));</pre>

<p>第一句调用函数 <code class="highlighter-rouge">querySelector()</code> ， 返回获取到的对象。
获取的对象依次执行级联运算符后面的代码，
代码执行后的返回值会被忽略。</p>

<p>上面的代码等价于：</p>

<?code-excerpt "misc/test/language_tour/browser_test.dart (cascade-operator-example-expanded)"?>
<pre class="prettyprint lang-dart">var button = querySelector('#confirm');
button.text = 'Confirm';
button.classes.add('important');
button.onClick.listen((e) =&gt; window.alert('Confirmed!'));</pre>

<p>级联运算符可以嵌套，例如：</p>

<?code-excerpt "misc/lib/language_tour/operators.dart (nested-cascades)"?>
<pre class="prettyprint lang-dart">final addressBook = (AddressBookBuilder()
      ..name = 'jenny'
      ..email = 'jenny@example.com'
      ..phone = (PhoneNumberBuilder()
            ..number = '415-555-0100'
            ..label = 'home')
          .build())
    .build();</pre>

<p>在返回对象的函数中谨慎使用级联操作符。
例如，下面的代码是错误的：</p>

<?code-excerpt "misc/lib/language_tour/operators.dart (cannot-cascade-on-void)" plaster="none"?>
<pre class="prettyprint lang-dart">var sb = StringBuffer();
sb.write('foo')
  ..write('bar'); // Error: 'void' 没哟定义 'write' 函数。</pre>

<p><code class="highlighter-rouge">sb.write()</code> 函数调用返回 void，
不能在 <code class="highlighter-rouge">void</code> 对象上创建级联操作。</p>

<div class="alert alert-info">
  <p><strong>提示：</strong>
严格的来讲，
“两个点” 的级联语法不是一个运算符。
它只是一个 Dart 的特殊语法。</p>
</div>

<h3 id="其他运算符">
<a id="其他运算符" class="anchor" href="#%E5%85%B6%E4%BB%96%E8%BF%90%E7%AE%97%E7%AC%A6" aria-hidden="true"><span class="octicon octicon-link"></span></a>其他运算符</h3>

<p>大多数剩余的运算符，已在示例中使用过：</p>

<table class="table table-striped">
  <thead>
    <tr>
      <th>Operator</th>
      <th>Name</th>
      <th>Meaning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="highlighter-rouge">()</code></td>
      <td>Function application</td>
      <td>Represents a function call</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">[]</code></td>
      <td>List access</td>
      <td>Refers to the value at the specified index in the list</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">.</code></td>
      <td>Member access</td>
      <td>Refers to a property of an expression; example: <code class="highlighter-rouge">foo.bar</code> selects property <code class="highlighter-rouge">bar</code> from expression <code class="highlighter-rouge">foo</code>
</td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">?.</code></td>
      <td>Conditional member access</td>
      <td>Like <code class="highlighter-rouge">.</code>, but the leftmost operand can be null; example: <code class="highlighter-rouge">foo?.bar</code> selects property <code class="highlighter-rouge">bar</code> from expression <code class="highlighter-rouge">foo</code> unless <code class="highlighter-rouge">foo</code> is null (in which case the value of <code class="highlighter-rouge">foo?.bar</code> is null)</td>
    </tr>
  </tbody>
</table>

<p>更多关于 <code class="highlighter-rouge">.</code>, <code class="highlighter-rouge">?.</code> 和  <code class="highlighter-rouge">..</code> 运算符介绍，参考
<a href="#classes">Classes</a>.</p>

<h2 id="控制流程语句">
<a id="控制流程语句" class="anchor" href="#%E6%8E%A7%E5%88%B6%E6%B5%81%E7%A8%8B%E8%AF%AD%E5%8F%A5" aria-hidden="true"><span class="octicon octicon-link"></span></a>控制流程语句</h2>

<p>你可以通过下面任意一种方式来控制 Dart 程序流程：</p>

<ul>
  <li>
    <p><code class="highlighter-rouge">if</code> and <code class="highlighter-rouge">else</code></p>
  </li>
  <li>
    <p><code class="highlighter-rouge">for</code> loops</p>
  </li>
  <li>
    <p><code class="highlighter-rouge">while</code> and <code class="highlighter-rouge">do</code>-<code class="highlighter-rouge">while</code> loops</p>
  </li>
  <li>
    <p><code class="highlighter-rouge">break</code> and <code class="highlighter-rouge">continue</code></p>
  </li>
  <li>
    <p><code class="highlighter-rouge">switch</code> and <code class="highlighter-rouge">case</code></p>
  </li>
  <li>
    <p><code class="highlighter-rouge">assert</code></p>
  </li>
</ul>

<p>使用 <code class="highlighter-rouge">try-catch</code> 和 <code class="highlighter-rouge">throw</code> 也可以改变程序流程， 
详见 <a href="#exceptions">Exceptions</a>。</p>

<h3 id="if-和-else">
<a id="if-和-else" class="anchor" href="#if-%E5%92%8C-else" aria-hidden="true"><span class="octicon octicon-link"></span></a>If 和 else</h3>

<p>Dart 支持 <code class="highlighter-rouge">if - else</code> 语句，其中 <code class="highlighter-rouge">else</code> 是可选的， 
比如下面的例子， 另参考 <a href="#conditional-expressions">conditional expressions</a>.</p>

<?code-excerpt "misc/lib/language_tour/control_flow.dart (if-else)"?>
<pre class="prettyprint lang-dart">if (isRaining()) {
  you.bringRainCoat();
} else if (isSnowing()) {
  you.wearJacket();
} else {
  car.putTopDown();
}</pre>

<p>和 JavaScript 不同， Dart 的判断条件必须是布尔值，不能是其他类型。
更多信息，参考 <a href="#booleans">Booleans</a> 。</p>

<h3 id="for-循环">
<a id="for-循环" class="anchor" href="#for-%E5%BE%AA%E7%8E%AF" aria-hidden="true"><span class="octicon octicon-link"></span></a>For 循环</h3>

<p>进行迭代操作，可以使用标准 <code class="highlighter-rouge">for</code> 语句。 例如：</p>

<?code-excerpt "misc/test/language_tour/control_flow_test.dart (for)"?>
<pre class="prettyprint lang-dart">var message = StringBuffer('Dart is fun');
for (var i = 0; i &lt; 5; i++) {
  message.write('!');
}</pre>

<p>闭包在 Dart 的 <code class="highlighter-rouge">for</code> 循环中会捕获循环的 index 索引值， 来避免 JavaScript 中常见的陷阱。
请思考示例代码：
<?code-excerpt "misc/test/language_tour/control_flow_test.dart (for-and-closures)"?></p>
<pre class="prettyprint lang-dart">var callbacks = [];
for (var i = 0; i &lt; 2; i++) {
  callbacks.add(() =&gt; print(i));
}
callbacks.forEach((c) =&gt; c());</pre>

<p>和期望一样，输出的是 <code class="highlighter-rouge">0</code> 和 <code class="highlighter-rouge">1</code>。 
但是示例中的代码在 JavaScript 中会连续输出两个 <code class="highlighter-rouge">2</code> 。</p>

<p>I如果要迭代一个实现了 Iterable 接口的对象， 
可以使用 <a href="https://api.dartlang.org/stable/dart-core/Iterable/forEach.html">forEach()</a> 方法， 
如果不需要使用当前计数值，
使用 <code class="highlighter-rouge">forEach()</code> 是非常棒的选择；</p>

<?code-excerpt "misc/lib/language_tour/control_flow.dart (forEach)"?>
<pre class="prettyprint lang-dart">candidates.forEach((candidate) =&gt; candidate.interview());</pre>

<p>实现了 Iterable 的类（比如， List 和 Set）同样也支持使用 <code class="highlighter-rouge">for-in</code> 进行迭代操作
<a href="/guides/libraries/library-tour#iteration">iteration</a> ：</p>

<?code-excerpt "misc/test/language_tour/control_flow_test.dart (collection)"?>
<pre class="prettyprint lang-dart">var collection = [0, 1, 2];
for (var x in collection) {
  print(x); // 0 1 2
}</pre>

<h3 id="while-和-do-while">
<a id="while-和-do-while" class="anchor" href="#while-%E5%92%8C-do-while" aria-hidden="true"><span class="octicon octicon-link"></span></a>While 和 do-while</h3>

<p><code class="highlighter-rouge">while</code> 循环在执行前判断执行条件：</p>

<?code-excerpt "misc/lib/language_tour/control_flow.dart (while)"?>
<pre class="prettyprint lang-dart">while (!isDone()) {
  doSomething();
}</pre>

<p><code class="highlighter-rouge">do</code>-<code class="highlighter-rouge">while</code> 循环在执行<code class="highlighter-rouge">后</code>判断执行条件：</p>

<?code-excerpt "misc/lib/language_tour/control_flow.dart (do-while)"?>
<pre class="prettyprint lang-dart">do {
  printLine();
} while (!atEndOfPage());</pre>

<h3 id="break-和-continue">
<a id="break-和-continue" class="anchor" href="#break-%E5%92%8C-continue" aria-hidden="true"><span class="octicon octicon-link"></span></a>Break 和 continue</h3>

<p>使用 <code class="highlighter-rouge">break</code> 停止程序循环：</p>

<?code-excerpt "misc/lib/language_tour/control_flow.dart (while-break)"?>
<pre class="prettyprint lang-dart">while (true) {
  if (shutDownRequested()) break;
  processIncomingRequests();
}</pre>

<p>使用 <code class="highlighter-rouge">continue</code> 跳转到下一次迭代：</p>

<?code-excerpt "misc/lib/language_tour/control_flow.dart (for-continue)"?>
<pre class="prettyprint lang-dart">for (int i = 0; i &lt; candidates.length; i++) {
  var candidate = candidates[i];
  if (candidate.yearsExperience &lt; 5) {
    continue;
  }
  candidate.interview();
}</pre>

<p>如果对象实现了 <a href="https://api.dartlang.org/stable/dart-core/Iterable-class.html">Iterable</a> 接口 （例如，list 或者 set）。
那么上面示例完全可以用另一种方式来实现：</p>

<?code-excerpt "misc/lib/language_tour/control_flow.dart (where)"?>
<pre class="prettyprint lang-dart">candidates
    .where((c) =&gt; c.yearsExperience &gt;= 5)
    .forEach((c) =&gt; c.interview());</pre>

<h3 id="switch-和-case">
<a id="switch-和-case" class="anchor" href="#switch-%E5%92%8C-case" aria-hidden="true"><span class="octicon octicon-link"></span></a>Switch 和 case</h3>

<p>在 Dart 中 switch 语句使用 <code class="highlighter-rouge">==</code> 比较整数，字符串，或者编译时常量。
比较的对象必须都是同一个类的实例（并且不可以是子类），
类必须没有对 <code class="highlighter-rouge">==</code> 重写。
<a href="#%E6%9E%9A%E4%B8%BE%E7%B1%BB%E5%9E%8B">枚举类型</a> 可以用于 <code class="highlighter-rouge">switch</code> 语句。</p>

<div class="alert alert-info">
  <p><strong>提示：</strong>
在 Dart 中 Switch 语句仅适用于有限的情况下，
例如在 interpreter 或 scanner 中。</p>
</div>
<p>在 <code class="highlighter-rouge">case</code> 语句中，每个非空的 <code class="highlighter-rouge">case</code> 语句结尾需要跟一个 <code class="highlighter-rouge">break</code> 语句。 
除 <code class="highlighter-rouge">break</code> 以外，还有可以使用 <code class="highlighter-rouge">continue</code>, <code class="highlighter-rouge">throw</code>，者 <code class="highlighter-rouge">return</code>。</p>

<p>当没有 <code class="highlighter-rouge">case</code> 语句匹配时，执行 <code class="highlighter-rouge">default</code> 代码：</p>

<?code-excerpt "misc/lib/language_tour/control_flow.dart (switch)"?>
<pre class="prettyprint lang-dart">var command = 'OPEN';
switch (command) {
  case 'CLOSED':
    executeClosed();
    break;
  case 'PENDING':
    executePending();
    break;
  case 'APPROVED':
    executeApproved();
    break;
  case 'DENIED':
    executeDenied();
    break;
  case 'OPEN':
    executeOpen();
    break;
  default:
    executeUnknown();
}</pre>

<p>下面的 <code class="highlighter-rouge">case</code> 程序示例中缺省了 <code class="highlighter-rouge">break</code> 语句，导致错误：</p>

<?code-excerpt "misc/lib/language_tour/control_flow.dart (switch-break-omitted)" plaster="none"?>
<pre class="prettyprint lang-dart">var command = 'OPEN';
switch (command) {
  case 'OPEN':
    executeOpen();
    // ERROR: 丢失 break

  case 'CLOSED':
    executeClosed();
    break;
}</pre>

<p>但是， Dart 支持空 <code class="highlighter-rouge">case</code> 语句，
允许程序以 fall-through 的形式执行。</p>

<?code-excerpt "misc/lib/language_tour/control_flow.dart (switch-empty-case)"?>
<pre class="prettyprint lang-dart">var command = 'CLOSED';
switch (command) {
  case 'CLOSED': // Empty case falls through.
  case 'NOW_CLOSED':
    // Runs for both CLOSED and NOW_CLOSED.
    executeNowClosed();
    break;
}</pre>

<p>在非空 <code class="highlighter-rouge">case</code> 中实现 fall-through 形式，
可以使用 <code class="highlighter-rouge">continue</code> 语句结合 <code class="highlighter-rouge">lable</code> 的方式实现:</p>

<?code-excerpt "misc/lib/language_tour/control_flow.dart (switch-continue)"?>
<pre class="prettyprint lang-dart">var command = 'CLOSED';
switch (command) {
  case 'CLOSED':
    executeClosed();
    continue nowClosed;
  // Continues executing at the nowClosed label.

  nowClosed:
  case 'NOW_CLOSED':
    // Runs for both CLOSED and NOW_CLOSED.
    executeNowClosed();
    break;
}</pre>

<p><code class="highlighter-rouge">case</code> 语句可以拥有局部变量，
这些局部变量只能在这个语句的作用域中可见。</p>

<h3 id="assert">
<a id="assert" class="anchor" href="#assert" aria-hidden="true"><span class="octicon octicon-link"></span></a>Assert</h3>

<p>如果 <code class="highlighter-rouge">assert</code> 语句中的布尔条件为 false ， 那么正常的程序执行流程会被中断。
在本章中包含部分 assert 的使用，
下面是一些示例：</p>

<?code-excerpt "misc/test/language_tour/control_flow_test.dart (assert)"?>
<pre class="prettyprint lang-dart">// 确认变量值不为空。
assert(text != null);

// 确认变量值小于100。
assert(number &lt; 100);

// 确认 URL 是否是 https 类型。
assert(urlString.startsWith('https'));</pre>

<div class="alert alert-info">
  <p><strong>提示：</strong>
assert 语句只在开发环境中有效，
在生产环境是无效的；
Flutter 中的 assert 只在 <a href="https://flutter.io/debugging/#debug-mode-assertions">debug 模式</a> 中有效。
开发用的工具，例如 <a href="https://webdev.dartlang.org/tools/dartdevc">dartdevc</a>
默认是开启 assert 功能。
其他的一些工具， 例如 <a href="/dart-vm/tools/dart-vm">dart</a> 和 <a href="https://webdev.dartlang.org/tools/dart2js">dart2js,</a>
支持通过命令行开启 assert ： <code class="highlighter-rouge">--enable-asserts</code>。</p>
</div>

<p>assert 的第二个参数可以为其添加一个字符串消息。</p>

<?code-excerpt "misc/test/language_tour/control_flow_test.dart (assert-with-message)"?>
<pre class="prettyprint lang-dart">assert(urlString.startsWith('https'),
    'URL ($urlString) should start with "https".');</pre>

<p>assert 的第一个参数可以是解析为布尔值的任何表达式。
如果表达式结果为 true ， 则断言成功，并继续执行。
如果表达式结果为 false ， 则断言失败，并抛出异常
(<a href="https://api.dartlang.org/stable/dart-core/AssertionError-class.html">AssertionError</a>) 。</p>

<h2 id="异常">
<a id="异常" class="anchor" href="#%E5%BC%82%E5%B8%B8" aria-hidden="true"><span class="octicon octicon-link"></span></a>异常</h2>

<p>Dart 代码可以抛出和捕获异常。 
异常表示一些未知的错误情况。
如果异常没有被捕获， 则异常会抛出，
导致抛出异常的代码终止执行。</p>

<p>和 Java 有所不同， Dart 中的所有异常是非检查异常。
方法不会声明它们抛出的异常，
也不要求捕获任何异常。</p>

<p>Dart 提供了 <a href="https://api.dartlang.org/stable/dart-core/Exception-class.html">Exception</a> 和 <a href="https://api.dartlang.org/stable/dart-core/Error-class.html">Error</a> 类型，
以及一些子类型。 
当然也可以定义自己的异常类型。
但是，此外 Dart 程序可以抛出任何非 null 对象， 不仅限 Exception 和 Error 对象。</p>

<h3 id="throw">
<a id="throw" class="anchor" href="#throw" aria-hidden="true"><span class="octicon octicon-link"></span></a>Throw</h3>

<p>下面是关于抛出或者 <em>引发</em> 异常的示例：</p>

<?code-excerpt "misc/lib/language_tour/exceptions.dart (throw-FormatException)"?>
<pre class="prettyprint lang-dart">throw FormatException('Expected at least 1 section');</pre>

<p>也可以抛出任意的对象：</p>

<?code-excerpt "misc/lib/language_tour/exceptions.dart (out-of-llamas)"?>
<pre class="prettyprint lang-dart">throw 'Out of llamas!';</pre>

<div class="alert alert-info">
  <p><strong>提示：</strong> 高质量的生产环境代码通常会实现 <a href="https://api.dartlang.org/stable/dart-core/Error-class.html">Error</a> 或 <a href="https://api.dartlang.org/stable/dart-core/Exception-class.html">Exception</a> 类型的异常抛出。</p>
</div>

<p>因为抛出异常是一个表达式，
所以可以在 =&gt; 语句中使用，也可以在其他使用表达式的地方抛出异常：</p>

<?code-excerpt "misc/lib/language_tour/exceptions.dart (throw-is-an-expression)"?>
<pre class="prettyprint lang-dart">void distanceTo(Point other) =&gt; throw UnimplementedError();</pre>

<h3 id="catch">
<a id="catch" class="anchor" href="#catch" aria-hidden="true"><span class="octicon octicon-link"></span></a>Catch</h3>

<p>捕获异常可以避免异常继续传递（除非重新抛出（ rethrow ）异常）。 
可以通过捕获异常的机会来处理该异常：</p>

<?code-excerpt "misc/lib/language_tour/exceptions.dart (try)"?>
<pre class="prettyprint lang-dart">try {
  breedMoreLlamas();
} on OutOfLlamasException {
  buyMoreLlamas();
}</pre>

<p>通过指定多个 catch 语句，可以处理可能抛出多种类型异常的代码。
与抛出异常类型匹配的第一个 catch 语句处理异常。 
如果 catch 语句未指定类型，
则该语句可以处理任何类型的抛出对象：</p>

<?code-excerpt "misc/lib/language_tour/exceptions.dart (try-catch)"?>
<pre class="prettyprint lang-dart">try {
  breedMoreLlamas();
} on OutOfLlamasException {
  // 一个特殊的异常
  buyMoreLlamas();
} on Exception catch (e) {
  // 其他任何异常
  print('Unknown exception: $e');
} catch (e) {
  // 没有指定的类型，处理所有异常
  print('Something really unknown: $e');
}</pre>

<p>如上述代码所示，捕获语句中可以同时使用 <code class="highlighter-rouge">on</code> 和 <code class="highlighter-rouge">catch</code> ，也可以单独分开使用。
使用 <code class="highlighter-rouge">on</code> 来指定异常类型，
使用 <code class="highlighter-rouge">catch</code> 来 捕获异常对象。</p>

<p><code class="highlighter-rouge">catch()</code> 函数可以指定1到2个参数，
第一个参数为抛出的异常对象， 
第二个为堆栈信息 ( 一个 <a href="https://api.dartlang.org/stable/dart-core/StackTrace-class.html">StackTrace</a> 对象 )。</p>

<?code-excerpt "misc/lib/language_tour/exceptions.dart (try-catch-2)" replace="/\(e.*?\)/[!$&!]/g"?>
<pre class="prettyprint lang-dart">try {
  // ···
} on Exception catch <span class="highlight">(e)</span> {
  print('Exception details:\n $e');
} catch <span class="highlight">(e, s)</span> {
  print('Exception details:\n $e');
  print('Stack trace:\n $s');
}</pre>

<p>如果仅需要部分处理异常，
那么可以使用关键字 <code class="highlighter-rouge">rethrow</code> 将异常重新抛出。</p>

<?code-excerpt "misc/test/language_tour/exceptions_test.dart (rethrow)" replace="/rethrow;/[!$&!]/g"?>
<pre class="prettyprint lang-dart">void misbehave() {
  try {
    dynamic foo = true;
    print(foo++); // Runtime error
  } catch (e) {
    print('misbehave() partially handled ${e.runtimeType}.');
    <span class="highlight">rethrow;</span> // Allow callers to see the exception.
  }
}

void main() {
  try {
    misbehave();
  } catch (e) {
    print('main() finished handling ${e.runtimeType}.');
  }
}</pre>

<h3 id="finally">
<a id="finally" class="anchor" href="#finally" aria-hidden="true"><span class="octicon octicon-link"></span></a>Finally</h3>

<p>不管是否抛出异常， <code class="highlighter-rouge">finally</code> 中的代码都会被执行。
如果 <code class="highlighter-rouge">catch</code> 没有匹配到异常，
异常会在 <code class="highlighter-rouge">finally</code> 执行完成后，再次被抛出：</p>

<?code-excerpt "misc/lib/language_tour/exceptions.dart (finally)"?>
<pre class="prettyprint lang-dart">try {
  breedMoreLlamas();
} finally {
  // Always clean up, even if an exception is thrown.
  cleanLlamaStalls();
}</pre>

<p>任何匹配的 <code class="highlighter-rouge">catch</code> 执行完成后，再执行 <code class="highlighter-rouge">finally</code> ：</p>

<?code-excerpt "misc/lib/language_tour/exceptions.dart (try-catch-finally)"?>
<pre class="prettyprint lang-dart">try {
  breedMoreLlamas();
} catch (e) {
  print('Error: $e'); // Handle the exception first.
} finally {
  cleanLlamaStalls(); // Then clean up.
}</pre>

<p>更多详情，请参考
<a href="/guides/libraries/library-tour#exceptions">Exceptions</a> 章节。</p>

<h2 id="类">
<a id="类" class="anchor" href="#%E7%B1%BB" aria-hidden="true"><span class="octicon octicon-link"></span></a>类</h2>

<p>Dart 是一种基于类和 mixin 继承机制的面向对象的语言。
每个对象都是一个类的实例，所有的类都继承于 <a href="https://api.dartlang.org/stable/dart-core/Object-class.html">Object.</a> 。
基于 * Mixin 继承* 意味着每个类（除 Object 外） 都只有一个超类，
一个类中的代码可以在其他多个继承类中重复使用。</p>

<h3 id="使用类的成员变量">
<a id="使用类的成员变量" class="anchor" href="#%E4%BD%BF%E7%94%A8%E7%B1%BB%E7%9A%84%E6%88%90%E5%91%98%E5%8F%98%E9%87%8F" aria-hidden="true"><span class="octicon octicon-link"></span></a>使用类的成员变量</h3>

<p>对象的由函数和数据（即方法和实例变量）组成。 
方法的调用要通过对象来完成：
调用的方法可以访问其对象的其他函数和数据。</p>

<p>使用 (<code class="highlighter-rouge">.</code>) 来引用实例对象的变量和方法：</p>

<?code-excerpt "misc/test/language_tour/classes_test.dart (object-members)"?>
<pre class="prettyprint lang-dart">var p = Point(2, 2);

// 为实例的变量 y 设置值。
p.y = 3;

// 获取变量 y 的值。
assert(p.y == 3);

// 调用 p 的 distanceTo() 方法。
num distance = p.distanceTo(Point(4, 4));</pre>

<p>使用 <code class="highlighter-rouge">?.</code> 来代替 <code class="highlighter-rouge">.</code> ，
可以避免因为左边对象可能为 null ，
导致的异常：</p>

<?code-excerpt "misc/test/language_tour/classes_test.dart (safe-member-access)"?>
<pre class="prettyprint lang-dart">// 如果 p 为 non-null，设置它变量 y 的值为 4。
p?.y = 4;</pre>

<h3 id="使用构造函数">
<a id="使用构造函数" class="anchor" href="#%E4%BD%BF%E7%94%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0" aria-hidden="true"><span class="octicon octicon-link"></span></a>使用构造函数</h3>

<p>通过 <em>构造函数</em> 创建对象。
构造函数的名字可以是 <code><em>ClassName</em></code> 或者
<code><em>ClassName</em>.<em>identifier</em></code>。例如，
以下代码使用 <code class="highlighter-rouge">Point</code> 和 <code class="highlighter-rouge">Point.fromJson()</code> 构造函数创建 <code class="highlighter-rouge">Point</code> 对象：</p>

<?code-excerpt "misc/test/language_tour/classes_test.dart (object-creation)" replace="/ as .*?;/;/g"?>
<pre class="prettyprint lang-dart">var p1 = Point(2, 2);
var p2 = Point.fromJson({'x': 1, 'y': 2});</pre>

<p>以下代码具有相同的效果，
但是构造函数前面的的 <code class="highlighter-rouge">new</code> 关键字是可选的：</p>

<?code-excerpt "misc/test/language_tour/classes_test.dart (object-creation-new)" replace="/ as .*?;/;/g"?>
<pre class="prettyprint lang-dart">var p1 = new Point(2, 2);
var p2 = new Point.fromJson({'x': 1, 'y': 2});</pre>

<aside class="alert alert-info">
  <p><strong>版本提示：</strong> 在 Dart 2 中 <code class="highlighter-rouge">new</code> 关键字变成了可选的。</p>
</aside>

<p>一些类提供了<a href="#%E5%B8%B8%E9%87%8F%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0">常量构造函数</a>。
使用常量构造函数，在构造函数名之前加 <code class="highlighter-rouge">const</code> 关键字，来创建编译时常量时：</p>

<?code-excerpt "misc/test/language_tour/classes_test.dart (const)"?>
<pre class="prettyprint lang-dart">var p = const ImmutablePoint(2, 2);</pre>

<p>构造两个相同的编译时常量会产生一个唯一的，
标准的实例：</p>

<?code-excerpt "misc/test/language_tour/classes_test.dart (identical)"?>
<pre class="prettyprint lang-dart">var a = const ImmutablePoint(1, 1);
var b = const ImmutablePoint(1, 1);

assert(identical(a, b)); // 它们是同一个实例。</pre>

<p>在 <em>常量上下文</em> 中， 构造函数或者字面量前的 <code class="highlighter-rouge">const</code> 可以省略。
例如，下面代码创建了一个 const 类型的 map 对象：</p>

<?code-excerpt "misc/test/language_tour/classes_test.dart (const-context-withconst)" replace="/pointAndLine1/pointAndLine/g"?>
<pre class="prettyprint lang-dart">// 这里有很多的 const 关键字。
const pointAndLine = const {
  'point': const [const ImmutablePoint(0, 0)],
  'line': const [const ImmutablePoint(1, 10), const ImmutablePoint(-2, 11)],
};</pre>

<p>保留第一个 <code class="highlighter-rouge">const</code> 关键字，其余的全部省略：</p>

<?code-excerpt "misc/test/language_tour/classes_test.dart (const-context-noconst)" replace="/pointAndLine2/pointAndLine/g"?>
<pre class="prettyprint lang-dart">// 仅有一个 const ，由该 const 建立常量上下文。
const pointAndLine = {
  'point': [ImmutablePoint(0, 0)],
  'line': [ImmutablePoint(1, 10), ImmutablePoint(-2, 11)],
};</pre>

<p>如果常量构造函数在常量上下文之外，
且省略了 <code class="highlighter-rouge">const</code> 关键字，
此时创建的对象是非常量对象：</p>

<?code-excerpt "misc/test/language_tour/classes_test.dart (nonconst-const-constructor)"?>
<pre class="prettyprint lang-dart">var a = const ImmutablePoint(1, 1); // 创建一个常量对象
var b = ImmutablePoint(1, 1); // 创建一个非常量对象

assert(!identical(a, b)); // 两者不是同一个实例!</pre>

<aside class="alert alert-info">
  <p><strong>版本提示：</strong> 在 Dart 2 中，一个常量上下文中的 <code class="highlighter-rouge">const</code> 关键字可以被省略。</p>
</aside>

<h3 id="获取对象的类型">
<a id="获取对象的类型" class="anchor" href="#%E8%8E%B7%E5%8F%96%E5%AF%B9%E8%B1%A1%E7%9A%84%E7%B1%BB%E5%9E%8B" aria-hidden="true"><span class="octicon octicon-link"></span></a>获取对象的类型</h3>

<p>使用对象的 <code class="highlighter-rouge">runtimeType</code> 属性，
可以在运行时获取对象的类型，
<code class="highlighter-rouge">runtimeType</code> 属性回返回一个 <a href="https://api.dartlang.org/stable/dart-core/Type-class.html">Type</a> 对象。</p>

<?code-excerpt "misc/test/language_tour/classes_test.dart (runtimeType)"?>
<pre class="prettyprint lang-dart">print('The type of a is ${a.runtimeType}');</pre>

<p>到目前为止，我们已经解了如何_使用_类。 
本节的其余部分将介绍如何_实现_一个类。</p>

<h3 id="实例变量">
<a id="实例变量" class="anchor" href="#%E5%AE%9E%E4%BE%8B%E5%8F%98%E9%87%8F" aria-hidden="true"><span class="octicon octicon-link"></span></a>实例变量</h3>

<p>下面是声明实例变量的示例：</p>

<?code-excerpt "misc/lib/language_tour/classes/point_with_main.dart (class)"?>
<pre class="prettyprint lang-dart">class Point {
  num x; // 声明示例变量 x，初始值为 null 。
  num y; // 声明示例变量 y，初始值为 null 。
  num z = 0; // 声明示例变量 z，初始值为 0 。
}</pre>

<p>未初始化实例变量的默认人值为 “null” 。</p>

<p>所有实例变量都生成隐式 <em>getter</em> 方法。 
非 final 的实例变量同样会生成隐式 <em>setter</em> 方法。
有关更多信息，参考 <a href="#getters-%E5%92%8C-setters">Getters 和 setters</a>.</p>

<?code-excerpt "misc/lib/language_tour/classes/point_with_main.dart (class+main)" replace="/(num .*?;).*/$1/g" plaster="none"?>
<pre class="prettyprint lang-dart">class Point {
  num x;
  num y;
}

void main() {
  var point = Point();
  point.x = 4; // Use the setter method for x.
  assert(point.x == 4); // Use the getter method for x.
  assert(point.y == null); // Values default to null.
}</pre>

<p>如果在声明时进行了示例变量的初始化，
那么初始化值会在示例创建时赋值给变量，
该赋值过程在构造函数及其初始化列表执行之前。</p>

<h3 id="构造函数">
<a id="构造函数" class="anchor" href="#%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0" aria-hidden="true"><span class="octicon octicon-link"></span></a>构造函数</h3>

<p>通过创建一个与其类同名的函数来声明构造函数
（另外，还可以附加一个额外的可选标识符，如 <a href="#named-constructors">命名构造函数</a> 中所述）。 
下面通过最常见的构造函数形式，
即生成构造函数，
创建一个类的实例：</p>

<?code-excerpt "misc/lib/language_tour/classes/point_alt.dart (constructor-long-way)" plaster="none"?>
<pre class="prettyprint lang-dart">class Point {
  num x, y;

  Point(num x, num y) {
    // 还有更好的方式来实现下面代码，敬请关注。
    this.x = x;
    this.y = y;
  }
}</pre>

<p>使用 <code class="highlighter-rouge">this</code> 关键字引用当前实例。</p>

<div class="alert alert-info">
  <p><strong>提示：</strong>
近当存在命名冲突时，使用 <code class="highlighter-rouge">this</code> 关键字。 否则，按照 Dart 风格应该省略 <code class="highlighter-rouge">this</code> 。</p>
</div>

<p>通常模式下，会将构造函数传入的参数的值赋值给对应的实例变量，
Dart 自身的语法糖精简了这些代码：</p>

<?code-excerpt "misc/lib/language_tour/classes/point.dart (constructor-initializer)" plaster="none"?>
<pre class="prettyprint lang-dart">class Point {
  num x, y;

  // 在构造函数体执行前，
  // 语法糖已经设置了变量 x 和 y。
  Point(this.x, this.y);
}</pre>

<h4 id="默认构造函数">默认构造函数</h4>

<p>在没有声明构造函数的情况下， Dart 会提供一个默认的构造函数。
默认构造函数没有参数并会调用父类的无参构造函数。</p>

<h4 id="构造函数不被继承">构造函数不被继承</h4>

<p>子类不会继承父类的构造函数。
子类不声明构造函数，那么它就只有默认构造函数 (匿名，没有参数) 。</p>

<h4 id="命名构造函数">命名构造函数</h4>

<p>使用命名构造函数可为一个类实现多个构造函数，
也可以使用命名构造函数来更清晰的表明函数意图：</p>

<?code-excerpt "misc/lib/language_tour/classes/point.dart (named-constructor)" replace="/Point\.\S*/[!$&!]/g" plaster="none"?>
<pre class="prettyprint lang-dart">class Point {
  num x, y;

  Point(this.x, this.y);

  // 命名构造函数
  <span class="highlight">Point.origin()</span> {
    x = 0;
    y = 0;
  }
}</pre>

<p>切记，构造函数不能够被继承，
这意味着父类的命名构造函数不会被子类继承。 
如果希望使用父类中定义的命名构造函数创建子类，
就必须在子类中实现该构造函数。</p>

<h4 id="调用父类非默认构造函数">调用父类非默认构造函数</h4>

<p>默认情况下，子类的构造函数会自动调用父类的默认构造函数（匿名，无参数）。
父类的构造函数在子类构造函数体开始执行的位置被调用。
如果提供了一个 <a href="#initializer-list">initializer list</a> （初始化参数列表），
则初始化参数列表在父类构造函数执行之前执行。 
总之，执行顺序如下：</p>

<ol>
  <li>initializer list （初始化参数列表）</li>
  <li>superclass’s no-arg constructor （父类的无名构造函数）</li>
  <li>main class’s no-arg constructor （主类的无名构造函数）</li>
</ol>

<p>如果父类中没有匿名无参的构造函数， 
则需要手工调用父类的其他构造函数。 
在当前构造函数冒号 (<code class="highlighter-rouge">:</code>) 之后，函数体之前，声明调用父类构造函数。</p>

<p>下面的示例中，Employee 类的构造函数调用了父类 Person 的命名构造函数。 
点击运行按钮<img alt="" src="/assets/red-run-50a66e01c7e7a877dbc06e799d5bc4b73c4dace2926ec17b4493d8c3e939c59a.png"> 执行示例代码。</p>

<iframe src="https://dartpad.dartlang.org/embed-inline.html?id=e57aa06401e6618d4eb8&amp;verticalRatio=80" width="100%" height="500px" style="border: 1px solid #ccc;">
</iframe>

<p>由于父类的构造函数参数在构造函数执行之前执行，
所以参数可以是一个表达式或者一个方法调用：</p>

<?code-excerpt "misc/lib/language_tour/classes/employee.dart (method-then-constructor)"?>
<pre class="prettyprint lang-dart">class Employee extends Person {
  Employee() : super.fromJson(getDefaultData());
  // ···
}</pre>

<div class="alert alert-warning">
  <p><strong>警告：</strong>
调用父类构造函数的参数无法访问 this 。 
例如，参数可以为静态函数但是不能是实例函数。</p>

</div>

<h4 id="初始化列表">初始化列表</h4>

<p>除了调用超类构造函数之外，
还可以在构造函数体执行之前初始化实例变量。
各参数的初始化用逗号分隔。</p>

<?code-excerpt "misc/lib/language_tour/classes/point_alt.dart (initializer-list)"?>
<pre class="prettyprint lang-dart">// 在构造函数体执行之前，
// 通过初始列表设置实例变量。
Point.fromJson(Map&lt;String, num&gt; json)
    : x = json['x'],
      y = json['y'] {
  print('In Point.fromJson(): ($x, $y)');
}</pre>

<div class="alert alert-warning">
  <p><strong>警告：</strong>
初始化程序的右侧无法访问 <code class="highlighter-rouge">this</code> 。</p>
</div>

<p>在开发期间，
可以使用 <code class="highlighter-rouge">assert</code> 来验证输入的初始化列表。</p>

<?code-excerpt "misc/lib/language_tour/classes/point_alt.dart (initializer-list-with-assert)" replace="/assert\(.*?\)/[!$&!]/g"?>
<pre class="prettyprint lang-dart">Point.withAssert(this.x, this.y) : <span class="highlight">assert(x &gt;= 0)</span> {
  print('In Point.withAssert(): ($x, $y)');
}</pre>

<p>使用初始化列表可以很方便的设置 final 字段。
下面示例演示了，如何使用初始化列表初始化设置三个 final 字段。
点击运行按钮 <img alt="" src="/assets/red-run-50a66e01c7e7a877dbc06e799d5bc4b73c4dace2926ec17b4493d8c3e939c59a.png"> 执行示例代码。</p>

<iframe src="https://dartpad.dartlang.org/embed-inline.html?id=7a9764702c0608711e08&amp;verticalRatio=85" width="100%" height="420px" style="border: 1px solid #ccc;">
</iframe>

<h4 id="重定向构造函数">重定向构造函数</h4>

<p>有时构造函数的唯一目的是重定向到同一个类中的另一个构造函数。 
重定向构造函数的函数体为空，
构造函数的调用在冒号 (:) 之后。</p>

<?code-excerpt "misc/lib/language_tour/classes/point_redirecting.dart"?>
<pre class="prettyprint lang-dart">class Point {
  num x, y;

  // 类的主构造函数。
  Point(this.x, this.y);

  // 指向主构造函数
  Point.alongXAxis(num x) : this(x, 0);
}</pre>

<h4 id="常量构造函数">常量构造函数</h4>

<p>如果该类生成的对象是固定不变的，
那么就可以把这些对象定义为编译时常量。
为此，需要定义一个 <code class="highlighter-rouge">const</code> 构造函数，
并且声明所有实例变量为 <code class="highlighter-rouge">final</code>。</p>

<?code-excerpt "misc/lib/language_tour/classes/immutable_point.dart"?>
<pre class="prettyprint lang-dart">class ImmutablePoint {
  static final ImmutablePoint origin =
      const ImmutablePoint(0, 0);

  final num x, y;

  const ImmutablePoint(this.x, this.y);
}</pre>

<p>常量构造函数创建的实例并不总是常量。
更多内容，查看 <a href="#%E4%BD%BF%E7%94%A8%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0">使用构造函数</a> 章节。</p>

<h4 id="工厂构造函数">工厂构造函数</h4>

<p>当执行构造函数并不总是创建这个类的一个新实例时，则使用 <code class="highlighter-rouge">factory</code> 关键字。
例如，一个工厂构造函数可能会返回一个 cache 中的实例，
或者可能返回一个子类的实例。</p>

<p>以下示例演示了从缓存中返回对象的工厂构造函数：</p>

<?code-excerpt "misc/lib/language_tour/classes/logger.dart"?>
<pre class="prettyprint lang-dart">class Logger {
  final String name;
  bool mute = false;

  // 从命名的 _ 可以知，
  // _cache 是私有属性。
  static final Map&lt;String, Logger&gt; _cache =
      &lt;String, Logger&gt;{};

  factory Logger(String name) {
    if (_cache.containsKey(name)) {
      return _cache[name];
    } else {
      final logger = Logger._internal(name);
      _cache[name] = logger;
      return logger;
    }
  }

  Logger._internal(this.name);

  void log(String msg) {
    if (!mute) print(msg);
  }
}</pre>

<div class="alert alert-info">
  <p><strong>提示：</strong>
工厂构造函数无法访问 this。</p>
</div>

<p>工厂构造函的调用方式与其他构造函数一样：</p>

<?code-excerpt "misc/lib/language_tour/classes/logger.dart (logger)"?>
<pre class="prettyprint lang-dart">var logger = Logger('UI');
logger.log('Button clicked');</pre>

<h3 id="方法">
<a id="方法" class="anchor" href="#%E6%96%B9%E6%B3%95" aria-hidden="true"><span class="octicon octicon-link"></span></a>方法</h3>

<p>方法是为对象提供行为的函数。</p>

<h4 id="实例方法">实例方法</h4>

<p>对象的实例方法可以访问 <code class="highlighter-rouge">this</code> 和实例变量。
以下示例中的 <code class="highlighter-rouge">distanceTo()</code> 方法就是实例方法：</p>

<?code-excerpt "misc/lib/language_tour/classes/point.dart (class-with-distanceTo)" plaster="none"?>
<pre class="prettyprint lang-dart">import 'dart:math';

class Point {
  num x, y;

  Point(this.x, this.y);

  num distanceTo(Point other) {
    var dx = x - other.x;
    var dy = y - other.y;
    return sqrt(dx * dx + dy * dy);
  }
}</pre>

<h4 id="getters-和-setters">Getters 和 setters</h4>

<p>getters 和 setters 是用于对象属性读和写的特殊方法。 
回想之前的例子，每个实例变量都有一个隐式 getter ，通常情况下还会有一个 setter 。
使用 <code class="highlighter-rouge">get</code> 和 <code class="highlighter-rouge">set</code> 关键字实现 getters 和 setters ，能够为实例创建额外的属性。</p>

<?code-excerpt "misc/lib/language_tour/classes/rectangle.dart"?>
<pre class="prettyprint lang-dart">class Rectangle {
  num left, top, width, height;

  Rectangle(this.left, this.top, this.width, this.height);

  // 定义两个计算属性： right 和 bottom。
  num get right =&gt; left + width;
  set right(num value) =&gt; left = value - width;
  num get bottom =&gt; top + height;
  set bottom(num value) =&gt; top = value - height;
}

void main() {
  var rect = Rectangle(3, 4, 20, 15);
  assert(rect.left == 3);
  rect.right = 12;
  assert(rect.left == -8);
}</pre>

<p>最开始实现 getters 和 setters 也许是直接返回成员变量；
随着需求变化，getters 和 setters 可能需要进行计算处理而使用方法来实现；
但是，调用对象的代码不需要做任何的修改。</p>

<div class="alert alert-info">
  <p><strong>提示：</strong>
类似 (++) 之类操作符不管是否定义了 getter 方法，都能够正确的执行。 
为了避免一些问题，操作符只调用一次 getter 方法，
然后把值保存到一个临时的变量中。</p>
</div>

<h4 id="抽象方法">抽象方法</h4>

<p>实例方法， getter， 和 setter 方法可以是抽象的， 
只定义接口不进行实现，而是留给其他类去实现。 
抽象方法只存在于 <a href="#%E6%8A%BD%E8%B1%A1%E7%B1%BB">抽象类</a> 中。</p>

<p>定义一个抽象函数，使用分号 (;) 来代替函数体：</p>

<?code-excerpt "misc/lib/language_tour/classes/doer.dart"?>
<pre class="prettyprint lang-dart">abstract class Doer {
  // 定义实例变量和方法 ...

  void doSomething(); // 定义一个抽象方法。
}

class EffectiveDoer extends Doer {
  void doSomething() {
    // 提供方法实现，所以这里的方法就不是抽象方法了...
  }
}</pre>

<p>调用抽象方法会导致运行时错误。</p>

<h3 id="抽象类">
<a id="抽象类" class="anchor" href="#%E6%8A%BD%E8%B1%A1%E7%B1%BB" aria-hidden="true"><span class="octicon octicon-link"></span></a>抽象类</h3>

<p>使用 <code class="highlighter-rouge">abstract</code> 修饰符来定义 <em>抽象类</em> — 抽象类不能实例化。
抽象类通常用来定义接口，以及部分实现。
如果希望抽象类能够被实例化，那么可以通过定义一个
<a href="#%E5%B7%A5%E5%8E%82%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0">工厂构造函数</a> 来实现。</p>

<p>抽象类通常具有 <a href="#abstract-methods">抽象方法</a>。
下面是一个声明具有抽象方法的抽象类示例：</p>

<?code-excerpt "misc/lib/language_tour/classes/misc.dart (abstract)"?>
<pre class="prettyprint lang-dart">// 这个类被定义为抽象类，
// 所以不能被实例化。
abstract class AbstractContainer {
  // 定义构造行数，字段，方法...

  void updateChildren(); // 抽象方法。
}</pre>

<h3 id="隐式接口">
<a id="隐式接口" class="anchor" href="#%E9%9A%90%E5%BC%8F%E6%8E%A5%E5%8F%A3" aria-hidden="true"><span class="octicon octicon-link"></span></a>隐式接口</h3>

<p>每个类都隐式的定义了一个接口，接口包含了该类所有的实例成员及其实现的接口。
如果要创建一个 A 类，A 要支持 B 类的 API ，但是不需要继承 B 的实现，
那么可以通过 A 实现 B 的接口。</p>

<p>一个类可以通过 <code class="highlighter-rouge">implements</code> 关键字来实现一个或者多个接口， 
并实现每个接口要求的 API。
例如：</p>

<?code-excerpt "misc/lib/language_tour/classes/impostor.dart"?>
<pre class="prettyprint lang-dart">// person 类。 隐式接口里面包含了 greet() 方法声明。
class Person {
  // 包含在接口里，但只在当前库中可见。
  final _name;

  // 不包含在接口里，因为这是一个构造函数。
  Person(this._name);

  // 包含在接口里。
  String greet(String who) =&gt; 'Hello, $who. I am $_name.';
}

// person 接口的实现。
class Impostor implements Person {
  get _name =&gt; '';

  String greet(String who) =&gt; 'Hi $who. Do you know who I am?';
}

String greetBob(Person person) =&gt; person.greet('Bob');

void main() {
  print(greetBob(Person('Kathy')));
  print(greetBob(Impostor()));
}</pre>

<p>下面示例演示一个类如何实现多个接口：
Here’s an example of specifying that a class implements multiple
interfaces:</p>

<?code-excerpt "misc/lib/language_tour/classes/misc.dart (point_interfaces)"?>
<pre class="prettyprint lang-dart">class Point implements Comparable, Location {...}</pre>

<h3 id="扩展类继承">
<a id="扩展类继承" class="anchor" href="#%E6%89%A9%E5%B1%95%E7%B1%BB%E7%BB%A7%E6%89%BF" aria-hidden="true"><span class="octicon octicon-link"></span></a>扩展类（继承）</h3>

<p>使用 <code class="highlighter-rouge">extends</code> 关键字来创建子类， 
使用 <code class="highlighter-rouge">super</code> 关键字来引用父类：</p>

<?code-excerpt "misc/lib/language_tour/classes/extends.dart" replace="/extends|super/[!$&!]/g"?>
<pre class="prettyprint lang-dart">class Television {
  void turnOn() {
    _illuminateDisplay();
    _activateIrSensor();
  }
  // ···
}

class SmartTelevision <span class="highlight">extends</span> Television {
  void turnOn() {
    <span class="highlight">super</span>.turnOn();
    _bootNetworkInterface();
    _initializeMemory();
    _upgradeApps();
  }
  // ···
}</pre>

<h4 id="重写类成员">重写类成员</h4>

<p>子类可以重写实例方法，getter 和 setter。
可以使用 <code class="highlighter-rouge">@override</code> 注解指出想要重写的成员：</p>

<?code-excerpt "misc/lib/language_tour/metadata/television.dart (override)" replace="/@override/[!$&!]/g"?>
<pre class="prettyprint lang-dart">class SmartTelevision extends Television {
  <span class="highlight">@override</span>
  void turnOn() {...}
  // ···
}</pre>

<p>To narrow the type of a method parameter or instance variable in code that is
<a href="/guides/language/sound-dart">type safe</a>,
you can use the <a href="/guides/language/sound-problems#the-covariant-keyword"><code class="highlighter-rouge">covariant</code> keyword</a>.</p>

<h4 id="重写运算符">重写运算符</h4>

<p>下标的运算符可以被重写。
例如，想要实现两个向量对象相加，可以重写 <code class="highlighter-rouge">+</code> 方法。</p>

<table class="table">
  <tbody>
    <tr>
      <td><code class="highlighter-rouge">&lt;</code></td>
      <td><code class="highlighter-rouge">+</code></td>
      <td><code class="highlighter-rouge">|</code></td>
      <td><code class="highlighter-rouge">[]</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">&gt;</code></td>
      <td><code class="highlighter-rouge">/</code></td>
      <td><code class="highlighter-rouge">^</code></td>
      <td><code class="highlighter-rouge">[]=</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">&lt;=</code></td>
      <td><code class="highlighter-rouge">~/</code></td>
      <td><code class="highlighter-rouge">&amp;</code></td>
      <td><code class="highlighter-rouge">~</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">&gt;=</code></td>
      <td><code class="highlighter-rouge">*</code></td>
      <td><code class="highlighter-rouge">&lt;&lt;</code></td>
      <td><code class="highlighter-rouge">==</code></td>
    </tr>
    <tr>
      <td><code class="highlighter-rouge">–</code></td>
      <td><code class="highlighter-rouge">%</code></td>
      <td><code class="highlighter-rouge">&gt;&gt;</code></td>
      <td> </td>
    </tr>
  </tbody>
</table>

<div class="alert alert-info">
  <p><strong>提示：</strong> 你可能会被提示 <code class="highlighter-rouge">!=</code> 运算符为非可重载运算符。
  因为 <code class="highlighter-rouge">e1 != e2</code> 表达式仅仅是 <code class="highlighter-rouge">!(e1 == e2)</code> 的语法糖。</p>
</div>

<p>下面示例演示一个类重写 <code class="highlighter-rouge">+</code> 和 <code class="highlighter-rouge">-</code> 操作符：</p>

<?code-excerpt "misc/lib/language_tour/classes/vector.dart"?>
<pre class="prettyprint lang-dart">class Vector {
  final int x, y;

  Vector(this.x, this.y);

  Vector operator +(Vector v) =&gt; Vector(x + v.x, y + v.y);
  Vector operator -(Vector v) =&gt; Vector(x - v.x, y - v.y);

  // 运算符 == 和 hashCode 部分没有列出。 有关详情，请参考下面的注释。
  // ···
}

void main() {
  final v = Vector(2, 3);
  final w = Vector(2, 2);

  assert(v + w == Vector(4, 5));
  assert(v - w == Vector(0, 1));
}</pre>

<p>如果要重写 <code class="highlighter-rouge">==</code> 操作符，需要重写对象的 <code class="highlighter-rouge">hashCode</code> getter 方法。
重写 <code class="highlighter-rouge">==</code> 和 <code class="highlighter-rouge">hashCode</code> 的实例，参考
<a href="/guides/libraries/library-tour#implementing-map-keys">Implementing map keys</a>.</p>

<p>有关重写的更多介绍，请参考
<a href="#%E6%89%A9%E5%B1%95%E7%B1%BB%E7%BB%A7%E6%89%BF">扩展类（继承）</a>.</p>

<h4 id="nosuchmethod">noSuchMethod()</h4>

<p>当代码尝试使用不存在的方法或实例变量时，
通过重写 <code class="highlighter-rouge">noSuchMethod()</code> 方法，来实现检测和应对处理：</p>

<?code-excerpt "misc/lib/language_tour/classes/no_such_method.dart" replace="/noSuchMethod(?!,)/[!$&!]/g"?>
<pre class="prettyprint lang-dart">class A {
  // 如果不重写 noSuchMethod，访问
  // 不存在的实例变量时会导致 NoSuchMethodError 错误。
  @override
  void <span class="highlight">noSuchMethod</span>(Invocation invocation) {
    print('You tried to use a non-existent member: ' +
        '${invocation.memberName}');
  }
}</pre>

<p>除非符合下面的任意一项条件，
否则没有实现的方法不能够被调用：</p>

<ul>
  <li>
    <p>receiver 具有 <code class="highlighter-rouge">dynamic</code> 的静态类型 。</p>
  </li>
  <li>
    <p>receiver 具有静态类型，用于定义为实现的方法 (可以是抽象的),
并且 receiver 的动态类型具有 <code class="highlighter-rouge">noSuchMethod()</code> 的实现，
该实现与 <code class="highlighter-rouge">Object</code> 类中的实现不同。</p>
  </li>
</ul>

<p>有关更多信息，参考
<a href="https://github.com/dart-lang/sdk/blob/master/docs/language/informal/nosuchmethod-forwarding.md">noSuchMethod forwarding specification.</a></p>

<p><a id="enums"></a></p>
<h3 id="枚举类型">
<a id="枚举类型" class="anchor" href="#%E6%9E%9A%E4%B8%BE%E7%B1%BB%E5%9E%8B" aria-hidden="true"><span class="octicon octicon-link"></span></a>枚举类型</h3>

<p>枚举类型也称为 <em>enumerations</em> 或 <em>enums</em> ，
是一种特殊的类，用于表示数量固定的常量值。</p>

<h4 id="使用枚举">使用枚举</h4>

<p>使用 <code class="highlighter-rouge">enum</code> 关键字定义一个枚举类型：</p>

<?code-excerpt "misc/lib/language_tour/classes/enum.dart (enum)"?>
<pre class="prettyprint lang-dart">enum Color { red, green, blue }</pre>

<p>枚举中的每个值都有一个 <code class="highlighter-rouge">index</code> getter 方法，
该方法返回值所在枚举类型定义中的位置（从 0 开始）。
例如，第一个枚举值的索引是 0 ，
第二个枚举值的索引是 1。</p>

<?code-excerpt "misc/lib/language_tour/classes/enum.dart (index)"?>
<pre class="prettyprint lang-dart">assert(Color.red.index == 0);
assert(Color.green.index == 1);
assert(Color.blue.index == 2);</pre>

<p>使用枚举的 <code class="highlighter-rouge">values</code> 常量，
获取所有枚举值列表（ list ）。</p>

<?code-excerpt "misc/lib/language_tour/classes/enum.dart (values)"?>
<pre class="prettyprint lang-dart">List&lt;Color&gt; colors = Color.values;
assert(colors[2] == Color.blue);</pre>

<p>可以在 <a href="#switch-%E5%92%8C-case">switch 语句</a> 中使用枚举，
如果不处理所有枚举值，会收到警告：</p>

<?code-excerpt "misc/lib/language_tour/classes/enum.dart (switch)"?>
<pre class="prettyprint lang-dart">var aColor = Color.blue;

switch (aColor) {
  case Color.red:
    print('Red as roses!');
    break;
  case Color.green:
    print('Green as grass!');
    break;
  default: // 没有这个，会看到一个警告。
    print(aColor); // 'Color.blue'
}</pre>

<p>枚举类型具有以下限制：</p>

<ul>
  <li>枚举不能被子类化，混合或实现。</li>
  <li>枚举不能被显式实例化。</li>
</ul>

<p>有关更多信息，参考
<a href="/guides/language/spec">Dart Language Specification</a>.</p>

<h3 id="为类添加功能mixins">
<a id="为类添加功能mixins" class="anchor" href="#%E4%B8%BA%E7%B1%BB%E6%B7%BB%E5%8A%A0%E5%8A%9F%E8%83%BDmixins" aria-hidden="true"><span class="octicon octicon-link"></span></a>为类添加功能：mixins</h3>

<p>mixins 是复用类代码的一种途径，
复用的类可以在不同层级，之间可以不存在继承关系。</p>

<p>通过 <code class="highlighter-rouge">with</code> 后面跟一个或多个混入的名称，来 <em>使用</em> mixin，
下面的示例演示了两个使用 mixin 的类：</p>

<?code-excerpt "misc/lib/language_tour/classes/orchestra.dart (Musician and Maestro)" replace="/(with.*) \{/[!$1!] {/g"?>
<pre class="prettyprint lang-dart">class Musician extends Performer <span class="highlight">with Musical</span> {
  // ···
}

class Maestro extends Person
    <span class="highlight">with Musical, Aggressive, Demented</span> {
  Maestro(String maestroName) {
    name = maestroName;
    canConduct = true;
  }
}</pre>

<p>通过创建一个继承自 Object 且没有构造函数的类，来 <em>实现</em> 一个 mixin 。
如果 mixin 不希望作为常规类被使用，使用关键字 <code class="highlighter-rouge">mixin</code> 替换 <code class="highlighter-rouge">class</code> 。
例如：</p>

<?code-excerpt "misc/lib/language_tour/classes/orchestra.dart (Musical)"?>
<pre class="prettyprint lang-dart">mixin Musical {
  bool canPlayPiano = false;
  bool canCompose = false;
  bool canConduct = false;

  void entertainMe() {
    if (canPlayPiano) {
      print('Playing piano');
    } else if (canConduct) {
      print('Waving hands');
    } else {
      print('Humming to self');
    }
  }
}</pre>

<p>指定只有某些类型可以使用的 mixin - 
比如，mixin 可以调用 mixin 自身没有定义的方法 - 
使用 <code class="highlighter-rouge">on</code> 来指定可以使用 mixin 的父类类型：</p>

<?code-excerpt "misc/lib/language_tour/classes/orchestra.dart (mixin-on)"?>
<pre class="prettyprint lang-dart">mixin MusicalPerformer on Musician {
  // ···
}</pre>

<!-- Previous code snippet reveals an issue we expect to be fixed in 2.1.1:
  https://github.com/dart-lang/sdk/issues/35011
-->

<aside class="alert alert-info">
  <p><strong>版本提示：</strong> <code class="highlighter-rouge">mixin</code> 关键字在 Dart 2.1 中被引用支持。
  早期版本中的代码通常使用 <code class="highlighter-rouge">abstract class</code> 代替。
  更多有关 mixin 在 2.1 中的变更信息，请参见
  <a href="https://github.com/dart-lang/sdk/blob/master/CHANGELOG.md">Dart SDK changelog</a> 和 <a href="https://github.com/dart-lang/language/blob/master/accepted/2.1/super-mixins/feature-specification.md#dart-2-mixin-declarations">2.1 mixin specification</a> 。</p>
</aside>

<div class="alert alert-info">
  <p><strong>提示：</strong> 对 mixins 的一些限制正在被移除。 关于更多详情，参考
  <a href="https://github.com/dart-lang/sdk/blob/master/docs/language/informal/mixin-declaration.md">proposed mixin specification.</a></p>

</div>

<p>有关 Dart 中 mixins 的理论演变，参考
<a href="/articles/language/mixins">A Brief History of Mixins in Dart</a>.</p>

<h3 id="类变量和方法">
<a id="类变量和方法" class="anchor" href="#%E7%B1%BB%E5%8F%98%E9%87%8F%E5%92%8C%E6%96%B9%E6%B3%95" aria-hidden="true"><span class="octicon octicon-link"></span></a>类变量和方法</h3>

<p>使用 <code class="highlighter-rouge">static</code> 关键字实现类范围的变量和方法。</p>

<h4 id="静态变量">静态变量</h4>

<p>静态变量（类变量）对于类级别的状态是非常有用的：</p>

<?code-excerpt "misc/lib/language_tour/classes/misc.dart (static-field)"?>
<pre class="prettyprint lang-dart">class Queue {
  static const initialCapacity = 16;
  // ···
}

void main() {
  assert(Queue.initialCapacity == 16);
}</pre>

<p>静态变量只到它们被使用的时候才会初始化。</p>

<div class="alert alert-info">
  <p><strong>提示：</strong>
代码准守<a href="/guides/language/effective-dart/style#identifiers">风格推荐指南</a>
中的命名规则， 使用 <code class="highlighter-rouge">lowerCamelCase</code> 来命名常量。</p>
</div>

<h4 id="静态方法">静态方法</h4>

<p>静态方法（类方法）不能在实例上使用，因此它们不能访问 <code class="highlighter-rouge">this</code> 。
例如：</p>

<?code-excerpt "misc/lib/language_tour/classes/point_with_distance_method.dart"?>
<pre class="prettyprint lang-dart">import 'dart:math';

class Point {
  num x, y;
  Point(this.x, this.y);

  static num distanceBetween(Point a, Point b) {
    var dx = a.x - b.x;
    var dy = a.y - b.y;
    return sqrt(dx * dx + dy * dy);
  }
}

void main() {
  var a = Point(2, 2);
  var b = Point(4, 4);
  var distance = Point.distanceBetween(a, b);
  assert(2.8 &lt; distance &amp;&amp; distance &lt; 2.9);
  print(distance);
}</pre>

<div class="alert alert-info">
  <p><strong>提示：</strong>
对于常见或广泛使用的工具和函数，
应该考虑使用顶级函数而不是静态方法。</p>
</div>

<p>静态函数可以当做编译时常量使用。
例如，可以将静态方法作为参数传递给常量构造函数。</p>

<h2 id="泛型">
<a id="泛型" class="anchor" href="#%E6%B3%9B%E5%9E%8B" aria-hidden="true"><span class="octicon octicon-link"></span></a>泛型</h2>

<p>在 API 文档中你会发现基础数组类型 <a href="https://api.dartlang.org/stable/dart-core/List-class.html">List</a> 的实际类型是 <code class="highlighter-rouge">List&lt;E&gt;</code> 。
&lt;…&gt; 符号将 List 标记为 <em>泛型</em> (或 <em>参数化</em>) 类型。
这种类型具有形式化的参数。
通常情况下，使用一个字母来代表类型参数， 例如 E, T, S, K, 和 V 等。</p>

<h3 id="为什么使用泛型">
<a id="为什么使用泛型" class="anchor" href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E4%BD%BF%E7%94%A8%E6%B3%9B%E5%9E%8B" aria-hidden="true"><span class="octicon octicon-link"></span></a>为什么使用泛型</h3>

<p>在类型安全上通常需要泛型支持，
它的好处不仅仅是保证代码的正常运行：</p>

<ul>
  <li>正确指定泛型类型可以提高代码质量。</li>
  <li>使用泛型可以减少重复的代码。</li>
</ul>

<p>如果想让 List 仅仅支持字符串类型，
可以将其声明为 <code class="highlighter-rouge">List&lt;String&gt;</code> （读作“字符串类型的 list ”）。
那么，当一个非字符串被赋值给了这个 list 时，开发工具就能够检测到这样的做法可能存在错误。 
例如：</p>

<?code-excerpt "misc/lib/language_tour/generics/misc.dart (why-generics)"?>
<pre class="prettyprint lang-dart fails-sa">var names = List&lt;String&gt;();
names.addAll(['Seth', 'Kathy', 'Lars']);
names.add(42); // 错误</pre>

<p>另外一个使用泛型的原因是减少重复的代码。 
泛型可以在多种类型之间定义同一个实现，
同时还可以继续使用检查模式和静态分析工具提供的代码分析功能。
例如，假设你创建了一个用于缓存对象的接口：</p>

<?code-excerpt "misc/lib/language_tour/generics/cache.dart (ObjectCache)"?>
<pre class="prettyprint lang-dart">abstract class ObjectCache {
  Object getByKey(String key);
  void setByKey(String key, Object value);
}</pre>

<p>后来发现需要一个相同功能的字符串类型接口，因此又创建了另一个接口：</p>

<?code-excerpt "misc/lib/language_tour/generics/cache.dart (StringCache)"?>
<pre class="prettyprint lang-dart">abstract class StringCache {
  String getByKey(String key);
  void setByKey(String key, String value);
}</pre>

<p>后来，又发现需要一个相同功能的数字类型接口 … 
这里你应该明白了。</p>

<p>泛型可以省去创建所有这些接口的麻烦。
通过创建一个带有泛型参数的接口，来代替上述接口：</p>

<?code-excerpt "misc/lib/language_tour/generics/cache.dart (Cache)"?>
<pre class="prettyprint lang-dart">abstract class Cache&lt;T&gt; {
  T getByKey(String key);
  void setByKey(String key, T value);
}</pre>

<p>在上面的代码中，T 是一个备用类型。
这是一个类型占位符，在开发者调用该接口的时候会指定具体类型。</p>

<h3 id="使用集合字面量">
<a id="使用集合字面量" class="anchor" href="#%E4%BD%BF%E7%94%A8%E9%9B%86%E5%90%88%E5%AD%97%E9%9D%A2%E9%87%8F" aria-hidden="true"><span class="octicon octicon-link"></span></a>使用集合字面量</h3>

<p>list 和 map 字面量也是可以参数化的。
参数化字面量和之前的字面量定义类似，
对于 list 只需要在声明语句前加 <code>&lt;<em>type</em>&gt;</code> 前缀，
对于 map 只需要在声明语句前加 <code>&lt;<em>keyType</em>, <em>valueType</em>&gt;</code> 前缀，
下面是参数化字面量的示例：</p>

<?code-excerpt "misc/lib/language_tour/generics/misc.dart (collection-literals)"?>
<pre class="prettyprint lang-dart">var names = &lt;String&gt;['Seth', 'Kathy', 'Lars'];
var pages = &lt;String, String&gt;{
  'index.html': 'Homepage',
  'robots.txt': 'Hints for web robots',
  'humans.txt': 'We are people, not machines'
};</pre>

<h3 id="使用泛型类型的构造函数">
<a id="使用泛型类型的构造函数" class="anchor" href="#%E4%BD%BF%E7%94%A8%E6%B3%9B%E5%9E%8B%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0" aria-hidden="true"><span class="octicon octicon-link"></span></a>使用泛型类型的构造函数</h3>

<p>在调用构造函数的时，在类名字后面使用尖括号（<code class="highlighter-rouge">&lt;...&gt;</code>）来指定泛型类型。
例如：</p>

<?code-excerpt "misc/test/language_tour/generics_test.dart (constructor-1)"?>
<pre class="prettyprint lang-dart">var names = List&lt;String&gt;();
names.addAll(['Seth', 'Kathy', 'Lars']);
var nameSet = Set&lt;String&gt;.from(names);</pre>

<p>下面代码创建了一个 key 为 integer， value 为 View 的 map 对象：</p>

<?code-excerpt "misc/test/language_tour/generics_test.dart (constructor-2)"?>
<pre class="prettyprint lang-dart">var views = Map&lt;int, View&gt;();</pre>

<h3 id="运行时中的泛型集合">
<a id="运行时中的泛型集合" class="anchor" href="#%E8%BF%90%E8%A1%8C%E6%97%B6%E4%B8%AD%E7%9A%84%E6%B3%9B%E5%9E%8B%E9%9B%86%E5%90%88" aria-hidden="true"><span class="octicon octicon-link"></span></a>运行时中的泛型集合</h3>

<p>Dart 中泛型类型是 <em>固化的</em>，也就是说它们在运行时是携带着类型信息的。 
例如，
在运行时检测集合的类型：</p>

<?code-excerpt "misc/test/language_tour/generics_test.dart (generic-collections)"?>
<pre class="prettyprint lang-dart">var names = List&lt;String&gt;();
names.addAll(['Seth', 'Kathy', 'Lars']);
print(names is List&lt;String&gt;); // true</pre>

<div class="alert alert-info">
  <p><strong>提示：</strong>
相反，Java中的泛型会被 <em>擦除</em> ，也就是说在运行时泛型类型参数的信息是不存在的。 
在Java中，可以测试对象是否为 List 类型，
但无法测试它是否为 <code class="highlighter-rouge">List&lt;String&gt;</code> 。</p>
</div>

<h3 id="限制泛型类型">
<a id="限制泛型类型" class="anchor" href="#%E9%99%90%E5%88%B6%E6%B3%9B%E5%9E%8B%E7%B1%BB%E5%9E%8B" aria-hidden="true"><span class="octicon octicon-link"></span></a>限制泛型类型</h3>

<p>使用泛型类型的时候，
可以使用 <code class="highlighter-rouge">extends</code> 实现参数类型的限制。</p>

<?code-excerpt "misc/lib/language_tour/generics/base_class.dart" replace="/extends SomeBaseClass(?=. \{)/[!$&!]/g"?>
<pre class="prettyprint lang-dart">class Foo&lt;T <span class="highlight">extends SomeBaseClass</span>&gt; {
  // Implementation goes here...
  String toString() =&gt; "Instance of 'Foo&lt;$T&gt;'";
}

class Extender extends SomeBaseClass {...}</pre>

<p>可以使用 <code class="highlighter-rouge">SomeBaseClass</code> 或其任意子类作为通用参数：</p>

<?code-excerpt "misc/test/language_tour/generics_test.dart (SomeBaseClass-ok)" replace="/Foo.\w+./[!$&!]/g"?>
<pre class="prettyprint lang-dart">var someBaseClassFoo = <span class="highlight">Foo&lt;SomeBaseClass&gt;</span>();
var extenderFoo = <span class="highlight">Foo&lt;Extender&gt;</span>();</pre>

<p>也可以不指定泛型参数：</p>

<?code-excerpt "misc/test/language_tour/generics_test.dart (no-generic-arg-ok)" replace="/expect\((.*?).toString\(\), .(.*?).\);/print($1); \/\/ $2/g"?>
<pre class="prettyprint lang-dart">var foo = Foo();
print(foo); // Instance of 'Foo&lt;SomeBaseClass&gt;'</pre>

<p>指定任何非 <code class="highlighter-rouge">SomeBaseClass</code> 类型会导致错误：</p>

<?code-excerpt "misc/lib/language_tour/generics/misc.dart (Foo-Object-error)" replace="/Foo.\w+./[!$&!]/g"?>
<pre class="prettyprint lang-dart fails-sa">var foo = <span class="highlight">Foo&lt;Object&gt;</span>();</pre>

<h3 id="使用泛型函数">
<a id="使用泛型函数" class="anchor" href="#%E4%BD%BF%E7%94%A8%E6%B3%9B%E5%9E%8B%E5%87%BD%E6%95%B0" aria-hidden="true"><span class="octicon octicon-link"></span></a>使用泛型函数</h3>

<p>最初，Dart 的泛型只能用于类。
新语法_泛型方法_，允许在方法和函数上使用类型参数：</p>

<!-- https://dartpad.dartlang.org/a02c53b001977efa4d803109900f21bb -->
<!-- https://gist.github.com/a02c53b001977efa4d803109900f21bb -->
<?code-excerpt "misc/test/language_tour/generics_test.dart (method)" replace="/<T.(?=\()|T/[!$&!]/g"?>
<pre class="prettyprint lang-dart"><span class="highlight">T</span> first<span class="highlight">&lt;T&gt;</span>(List&lt;<span class="highlight">T</span>&gt; ts) {
  // Do some initial work or error checking, then...
  <span class="highlight">T</span> tmp = ts[0];
  // Do some additional checking or processing...
  return tmp;
}</pre>

<p>这里的 <code class="highlighter-rouge">first</code> (<code class="highlighter-rouge">&lt;T&gt;</code>) 
泛型可以在如下地方使用参数 <code class="highlighter-rouge">T</code> ：</p>

<ul>
  <li>函数的返回值类型 (<code class="highlighter-rouge">T</code>).</li>
  <li>参数的类型 (<code class="highlighter-rouge">List&lt;T&gt;</code>).</li>
  <li>局部变量的类型 (<code class="highlighter-rouge">T tmp</code>).</li>
</ul>

<p>关于泛型的更多信息，参考
<a href="https://github.com/dart-lang/sdk/blob/master/pkg/dev_compiler/doc/GENERIC_METHODS.md">使用泛型函数</a></p>

<h2 id="库和可见性">
<a id="库和可见性" class="anchor" href="#%E5%BA%93%E5%92%8C%E5%8F%AF%E8%A7%81%E6%80%A7" aria-hidden="true"><span class="octicon octicon-link"></span></a>库和可见性</h2>

<p><code class="highlighter-rouge">import</code> 和 <code class="highlighter-rouge">library</code> 指令可以用来创建一个模块化的，可共享的代码库。
库不仅提供了 API ，而且对代码起到了封装的作用：
以下划线 (_) 开头的标识符仅在库内可见。
<em>每个 Dart 应用程序都是一个库</em> ，虽然没有使用 <code class="highlighter-rouge">library</code> 指令。</p>

<p>库可以通过包来分发。有关 pub（集成在SDK中的包管理器）的信息，请参考 
<a href="/tools/pub">Pub Package 和 Asset Manager</a>。</p>

<h3 id="使用库">
<a id="使用库" class="anchor" href="#%E4%BD%BF%E7%94%A8%E5%BA%93" aria-hidden="true"><span class="octicon octicon-link"></span></a>使用库</h3>

<p>通过 <code class="highlighter-rouge">import</code> 指定一个库命名空间中的内如如何在另一个库中使用。
例如，Dart Web应用程序通常使用 <a href="https://api.dartlang.org/stable/dart-html">dart:html</a> 库，它们可以像这样导入：</p>

<?code-excerpt "misc/test/language_tour/browser_test.dart (dart-html-import)"?>
<pre class="prettyprint lang-dart">import 'dart:html';</pre>

<p><code class="highlighter-rouge">import</code> 参数只需要一个指向库的 URI。
对于内置库，URI 拥有自己特殊的<code class="highlighter-rouge">dart:</code> 方案。
对于其他的库，使用系统文件路径或者 <code class="highlighter-rouge">package:</code> 方案 。
<code class="highlighter-rouge">package:</code> 方案指定由包管理器（如 pub 工具）提供的库。例如：</p>

<?code-excerpt "misc/test/language_tour/browser_test.dart (package-import)"?>
<pre class="prettyprint lang-dart">import 'package:test/test.dart';</pre>

<div class="alert alert-info">
  <p><strong>提示：</strong>
<em>URI</em> 代表统一资源标识符。
<em>URL</em>（统一资源定位符）是一种常见的URI。</p>
</div>

<h4 id="指定库前缀">指定库前缀</h4>

<p>如果导入两个存在冲突标识符的库，
则可以为这两个库，或者其中一个指定前缀。
例如，如果 library1 和 library2 都有一个 Element 类，
那么可以通过下面的方式处理：</p>

<?code-excerpt "misc/lib/language_tour/libraries/import_as.dart" replace="/(lib\d)\.dart/package:$1\/$&/g"?>
<pre class="prettyprint lang-dart">import 'package:lib1/lib1.dart';
import 'package:lib2/lib2.dart' as lib2;

// 使用 lib1 中的 Element。
Element element1 = Element();

// 使用 lib2 中的 Element。
lib2.Element element2 = lib2.Element();</pre>

<h4 id="导入库的一部分">导入库的一部分</h4>

<p>如果你只使用库的一部分功能，则可以选择需要导入的
内容。例如：</p>

<?code-excerpt "misc/lib/language_tour/libraries/show_hide.dart" replace="/(lib\d)\.dart/package:$1\/$&/g"?>
<pre class="prettyprint lang-dart">// Import only foo.
import 'package:lib1/lib1.dart' show foo;

// Import all names EXCEPT foo.
import 'package:lib2/lib2.dart' hide foo;</pre>

<p><a id="deferred-loading"></a></p>

<h4 id="延迟加载库">延迟加载库</h4>

<p><em>Deferred loading</em> (也称之为 <em>lazy loading</em>)
可以让应用在需要的时候再加载库。
下面是一些使用延迟加载库的场景：</p>

<ul>
  <li>减少 APP 的启动时间。</li>
  <li>执行 A/B 测试，例如 尝试各种算法的
不同实现。</li>
  <li>加载很少使用的功能，例如可选的屏幕和对话框。</li>
</ul>

<p>要延迟加载一个库，需要先使用 <code class="highlighter-rouge">deferred as</code> 来导入：</p>

<?code-excerpt "misc/lib/language_tour/libraries/greeter.dart (import)" replace="/hello\.dart/package:greetings\/$&/g"?>
<pre class="prettyprint lang-dart">import 'package:greetings/hello.dart' deferred as hello;</pre>

<p>当需要使用的时候，使用库标识符调用
<code class="highlighter-rouge">loadLibrary()</code> 函数来加载库：</p>

<?code-excerpt "misc/lib/language_tour/libraries/greeter.dart (loadLibrary)"?>
<pre class="prettyprint lang-dart">Future greet() async {
  await hello.loadLibrary();
  hello.printGreeting();
}</pre>

<p>在前面的代码，使用 <code class="highlighter-rouge">await</code> 关键字暂停代码执行一直到库加载完成。
关于 <code class="highlighter-rouge">async</code> 和 <code class="highlighter-rouge">await</code> 的更多信息请参考 <a href="#%E5%BC%82%E6%AD%A5%E6%94%AF%E6%8C%81">异步支持</a>。</p>

<p>在一个库上你可以多次调用 <code class="highlighter-rouge">loadLibrary()</code> 函数。但是该库只是载入一次。</p>

<p>使用延迟加载库的时候，请注意一下问题：</p>

<ul>
  <li>延迟加载库的常量在导入的时候是不可用的。
只有当库加载完毕的时候，库中常量才可以使用。</li>
  <li>在导入文件的时候无法使用延迟库中的类型。
如果你需要使用类型，则考虑把接口类型移动到另外一个库中，
让两个库都分别导入这个接口库。</li>
  <li>Dart 隐含的把 <code class="highlighter-rouge">loadLibrary()</code> 函数导入到使用
<code>deferred as <em>的命名空间</em></code> 中。
<code class="highlighter-rouge">loadLibrary()</code> 方法返回一个 <a href="/guides/libraries/library-tour#future">Future</a>。</li>
</ul>

<aside class="alert alert-warning">
  <p><strong>Dart VM difference:</strong>
The Dart VM allows access to members of deferred libraries
even before the call to <code class="highlighter-rouge">loadLibrary()</code>.
This behavior might change, so
<strong>don’t depend on the current VM behavior.</strong>
For details, see <a href="https://github.com/dart-lang/sdk/issues/33118">issue #33118.</a></p>
</aside>

<h3 id="实现库">
<a id="实现库" class="anchor" href="#%E5%AE%9E%E7%8E%B0%E5%BA%93" aria-hidden="true"><span class="octicon octicon-link"></span></a>实现库</h3>

<p>有关如何实现库包的建议，请参考 
<a href="/guides/libraries/create-library-packages">Create Library Packages</a>
这里面包括：</p>

<ul>
  <li>如何组织库的源文件。</li>
  <li>如何使用 <code class="highlighter-rouge">export</code> 命令。</li>
  <li>何时使用 <code class="highlighter-rouge">part</code> 命令。</li>
  <li>何时使用 <code class="highlighter-rouge">library</code> 命令。</li>
</ul>

<p><a id="asynchrony"></a></p>
<h2 id="异步支持">
<a id="异步支持" class="anchor" href="#%E5%BC%82%E6%AD%A5%E6%94%AF%E6%8C%81" aria-hidden="true"><span class="octicon octicon-link"></span></a>异步支持</h2>

<p>Dart 库中包含许多返回 Future 或 Stream 对象的函数.
这些函数在设置完耗时任务（例如 I/O 曹组）后，
就立即返回了，不会等待耗任务完成。
使用 <code class="highlighter-rouge">async</code> 和 <code class="highlighter-rouge">await</code> 关键字实现异步编程。
可以让你像编写同步代码一样实现异步操作。</p>

<p><a id="await"></a></p>
<h3 id="处理-future">
<a id="处理-future" class="anchor" href="#%E5%A4%84%E7%90%86-future" aria-hidden="true"><span class="octicon octicon-link"></span></a>处理 Future</h3>

<p>可以通过下面两种方式，获得 Future 执行完成的结果：</p>

<ul>
  <li>使用 <code class="highlighter-rouge">async</code> 和 <code class="highlighter-rouge">await</code>.</li>
  <li>使用 Future API，具体描述，参考
<a href="/guides/libraries/library-tour#future">in the library tour</a>.</li>
</ul>

<p>使用 <code class="highlighter-rouge">async</code> 和 <code class="highlighter-rouge">await</code> 关键字的代码是异步的。
虽然看起来有点想同步代码。
例如，下面的代码使用 <code class="highlighter-rouge">await</code>
等待异步函数的执行结果。</p>

<?code-excerpt "misc/lib/language_tour/async.dart (await-lookUpVersion)"?>
<pre class="prettyprint lang-dart">await lookUpVersion();</pre>

<p>要使用 <code class="highlighter-rouge">await</code> ，
代码必须在_异步函数_（使用 <code class="highlighter-rouge">async</code> 标记的函数）中：</p>

<?code-excerpt "misc/lib/language_tour/async.dart (checkVersion)" replace="/async|await/[!$&!]/g"?>
<pre class="prettyprint lang-dart">Future checkVersion() <span class="highlight">async</span> {
  var version = <span class="highlight">await</span> lookUpVersion();
  // Do something with version
}</pre>

<aside class="alert alert-info">
  <p><strong>提示：</strong>
虽然异步函数可能会执行耗时的操作，
但它不会等待这些操作。
相反，异步函数只有在遇到第一个 await 表达式（<a href="https://github.com/dart-lang/sdk/blob/master/docs/newsletter/20170915.md#synchronous-async-start">details</a>）时才会执行。
也就是说，它返回一个 Future 对象，
仅在await表达式完成后才恢复执行。</p>
</aside>

<p>使用 <code class="highlighter-rouge">try</code>， <code class="highlighter-rouge">catch</code>， 和 <code class="highlighter-rouge">finally</code>
来处理代码中使用 <code class="highlighter-rouge">await</code> 导致的错误。</p>

<?code-excerpt "misc/lib/language_tour/async.dart (try-catch)"?>
<pre class="prettyprint lang-dart">try {
  version = await lookUpVersion();
} catch (e) {
  // React to inability to look up the version
}</pre>

<p>在一个一步函数中可以多次使用 <code class="highlighter-rouge">await</code> 。
例如，下面代码中等待了三次函数结果：</p>

<?code-excerpt "misc/lib/language_tour/async.dart (repeated-await)"?>
<pre class="prettyprint lang-dart">var entrypoint = await findEntrypoint();
var exitCode = await runExecutable(entrypoint, args);
await flushThenExit(exitCode);</pre>

<p>在 <code>await <em>表达式</em></code> 中，
<code><em>表达式</em></code>的值通常是一个 Future 对象；
如果不是，这是表达式的值会被自动包装成一个 Future 对象。
Future 对象指明返回一个对象的承诺（promise）。 
<code>await <em>表达式</em></code> 执行的结果为这个返回的对象。
await 表达式会阻塞代码的执行，直到需要的对象返回为止。</p>

<p><strong>如果在使用 <code class="highlighter-rouge">await</code> 导致编译时错误，
确认 <code class="highlighter-rouge">await</code> 是否在一个异步函数中。</strong>
例如，在应用的 <code class="highlighter-rouge">main()</code> 函数中使用 <code class="highlighter-rouge">await</code> ，
<code class="highlighter-rouge">main()</code> 函数的函数体必须被标记为 <code class="highlighter-rouge">async</code> ：</p>

<?code-excerpt "misc/lib/language_tour/async.dart (main)" replace="/async|await/[!$&!]/g"?>
<pre class="prettyprint lang-dart">Future main() <span class="highlight">async</span> {
  checkVersion();
  print('In main: version is ${<span class="highlight">await</span> lookUpVersion()}');
}</pre>

<p><a id="async"></a></p>
<h3 id="声明异步函数">
<a id="声明异步函数" class="anchor" href="#%E5%A3%B0%E6%98%8E%E5%BC%82%E6%AD%A5%E5%87%BD%E6%95%B0" aria-hidden="true"><span class="octicon octicon-link"></span></a>声明异步函数</h3>

<p>函数体被 <code class="highlighter-rouge">async</code> 标示符标记的函数，即是一个_异步函数_。
将 <code class="highlighter-rouge">async</code> 关键字添加到函数使其返回Future。
例如，考虑下面的同步函数，它返回一个 String ：</p>

<?code-excerpt "misc/lib/language_tour/async.dart (sync-lookUpVersion)"?>
<pre class="prettyprint lang-dart">String lookUpVersion() =&gt; '1.0.0';</pre>

<p>例如，将来的实现将非常耗时，将其更改为异步函数，返回值是 Future 。</p>

<?code-excerpt "misc/lib/language_tour/async.dart (async-lookUpVersion)"?>
<pre class="prettyprint lang-dart">Future&lt;String&gt; lookUpVersion() async =&gt; '1.0.0';</pre>

<p>注意，函数体不需要使用Future API。
如有必要， Dart 会创建 Future 对象。</p>

<p>如果函数没有返回有效值，
需要设置其返回类型为 <code class="highlighter-rouge">Future&lt;void&gt;</code> 。</p>

<p><a id="await-for"></a></p>
<h3 id="处理-stream">
<a id="处理-stream" class="anchor" href="#%E5%A4%84%E7%90%86-stream" aria-hidden="true"><span class="octicon octicon-link"></span></a>处理 Stream</h3>

<p>当需要从 Stream 中获取数据值时，
可以通过一下两种方式：</p>

<ul>
  <li>使用 <code class="highlighter-rouge">async</code> 和 一个 <em>异步玄幻</em> （<code class="highlighter-rouge">await for</code>）。</li>
  <li>使用 Stream API, 更多详情，参考
<a href="/guides/libraries/library-tour#stream">in the library tour</a>。</li>
</ul>

<aside class="alert alert-warning">
  <p><strong>提示：</strong>
在使用 <code class="highlighter-rouge">await for</code> 前，确保代码清晰，
并且确实希望等待所有流的结果。
例如，通常不应该使用 <code class="highlighter-rouge">await for</code> 的UI事件侦听器，
因为UI框架会发送无穷无尽的事件流。</p>
</aside>

<p>一下是异步for循环的使用形式：</p>

<?code-excerpt "misc/lib/language_tour/async.dart (await-for)"?>
<pre class="prettyprint lang-dart">await for (varOrType identifier in expression) {
  // Executes each time the stream emits a value.
}</pre>

<p>上面 <code><em>表达式</em></code> 返回的值必须是 Stream 类型。 
执行流程如下：</p>

<ol>
  <li>等待，直到流发出一个值。</li>
  <li>执行 for 循环体，将变量设置为该发出的值</li>
  <li>重复1和2，直到关闭流。</li>
</ol>

<p>使用  break<code class="highlighter-rouge"> 或者 </code>return<code class="highlighter-rouge"> 语句可以停止接收 stream 的数据，
这样就跳出了 for 循环，
并且从 stream 上取消注册。
**如果在实现异步 for 循环时遇到编译时错误，
请检查确保 </code>await for<code class="highlighter-rouge"> 处于异步函数中。**
例如，要在应用程序的 </code>main()<code class="highlighter-rouge"> 函数中使用异步 fo r循环，
</code>main()<code class="highlighter-rouge"> 函数体必须标记为 </code>async` ：</p>

<?code-excerpt "misc/lib/language_tour/async.dart (number_thinker)" replace="/async|await for/[!$&!]/g"?>
<pre class="prettyprint lang-dart">Future main() <span class="highlight">async</span> {
  // ...
  <span class="highlight">await for</span> (var request in requestServer) {
    handleRequest(request);
  }
  // ...
}</pre>

<p>有关异步编程的更多信息，请参考
<a href="/guides/libraries/library-tour#dartasync---asynchronous-programming">dart:async</a> 
部分。
同时也可参考文章
<a href="/articles/language/await-async">Dart Language Asynchrony Support: Phase 1</a>
和
<a href="/articles/language/beyond-async">Dart Language Asynchrony Support: Phase 2</a>,
以及 <a href="/guides/language/spec">Dart language specification</a>.</p>

<p><a id="generator"></a></p>
<h2 id="生成器">
<a id="生成器" class="anchor" href="#%E7%94%9F%E6%88%90%E5%99%A8" aria-hidden="true"><span class="octicon octicon-link"></span></a>生成器</h2>

<p>当您需要延迟生成( lazily produce )一系列值时，
可以考虑使用_生成器函数_。
Dart 内置支持两种生成器函数：</p>

<ul>
  <li>
<strong>Synchronous</strong> 生成器： 返回一个 <strong><a href="https://api.dartlang.org/stable/dart-core/Iterable-class.html">Iterable</a></strong> 对象。</li>
  <li>
<strong>Asynchronous</strong> 生成器： 返回一个 <strong><a href="https://api.dartlang.org/stable/dart-async/Stream-class.html">Stream</a></strong> 对象。</li>
</ul>

<p>通过在函数体标记 <code class="highlighter-rouge">sync*</code>，
可以实现一个<strong>同步</strong>生成器函数。
使用 <code class="highlighter-rouge">yield</code> 语句来传递值：</p>

<?code-excerpt "misc/test/language_tour/async_test.dart (sync-generator)"?>
<pre class="prettyprint lang-dart">Iterable&lt;int&gt; naturalsTo(int n) sync* {
  int k = 0;
  while (k &lt; n) yield k++;
}</pre>

<p>通过在函数体标记 <code class="highlighter-rouge">async*</code>，
可以实现一个<strong>异步</strong>生成器函数。
使用 <code class="highlighter-rouge">yield</code> 语句来传递值：</p>

<?code-excerpt "misc/test/language_tour/async_test.dart (async-generator)"?>
<pre class="prettyprint lang-dart">Stream&lt;int&gt; asynchronousNaturalsTo(int n) async* {
  int k = 0;
  while (k &lt; n) yield k++;
}</pre>

<p>如果生成器是递归的，可以使用 <code class="highlighter-rouge">yield*</code> 来提高其性能：</p>

<?code-excerpt "misc/test/language_tour/async_test.dart (recursive-generator)"?>
<pre class="prettyprint lang-dart">Iterable&lt;int&gt; naturalsDownFrom(int n) sync* {
  if (n &gt; 0) {
    yield n;
    yield* naturalsDownFrom(n - 1);
  }
}</pre>

<p>有关生成器的更多信息，请参考文章
<a href="/articles/language/beyond-async">Dart Language Asynchrony Support: Phase 2</a> 。</p>

<h2 id="可调用类">
<a id="可调用类" class="anchor" href="#%E5%8F%AF%E8%B0%83%E7%94%A8%E7%B1%BB" aria-hidden="true"><span class="octicon octicon-link"></span></a>可调用类</h2>

<p>通过实现类的 call() 方法，
能够让类像函数一样被调用。</p>

<p>在下面的示例中，<code class="highlighter-rouge">WannabeFunction</code> 类定义了一个 call() 函数，
函数接受三个字符串参数，函数体将三个字符串拼接，字符串间用空格分割，并在结尾附加了一个感叹号。
单击运行按钮 <img alt="" src="/assets/red-run-50a66e01c7e7a877dbc06e799d5bc4b73c4dace2926ec17b4493d8c3e939c59a.png"> 执行代码。</p>

<iframe src="https://dartpad.dartlang.org/embed-inline.html?id=405379bacf30335f3aed&amp;verticalRatio=73" width="100%" height="240px" style="border: 1px solid #ccc;">
</iframe>

<p>有关把类当做方法使用的更多信息，请参考
<a href="/articles/language/emulating-functions">Emulating Functions in Dart</a> 。</p>

<h2 id="isolates">
<a id="isolates" class="anchor" href="#isolates" aria-hidden="true"><span class="octicon octicon-link"></span></a>Isolates</h2>

<p>大多数计算机中，甚至在移动平台上，都在使用多核CPU。
为了有效利用多核性能，开发者一般使用共享内存数据来保证多线程的正确执行。
然而，
多线程共享数据通常会导致很多潜在的问题，并导致代码运行出错。</p>

<p>所有 Dart 代码都在<em>隔离区</em>（ isolates ）内运行，而不是线程。
每个隔离区都有自己的内存堆，确保每个隔离区的状态都不会被其他隔离区访问。</p>

<p>有关更多信息，请参考
<a href="https://api.dartlang.org/stable/dart-isolate">dart:isolate library documentation.</a> 。</p>

<h2 id="typedefs">
<a id="typedefs" class="anchor" href="#typedefs" aria-hidden="true"><span class="octicon octicon-link"></span></a>Typedefs</h2>

<p>在 Dart 中，函数也是对象，就想字符和数字对象一样。
使用 <em>typedef</em> ，或者 <em>function-type alias</em> 为函数起一个别名，
别名可以用来声明字段及返回值类型。
当函数类型分配给变量时，typedef会保留类型信息。</p>

<p>请考虑以下代码，代码中未使用 typedef ：</p>

<?code-excerpt "misc/lib/language_tour/typedefs/sorted_collection_1.dart"?>
<pre class="prettyprint lang-dart">class SortedCollection {
  Function compare;

  SortedCollection(int f(Object a, Object b)) {
    compare = f;
  }
}

// Initial, broken implementation. // broken ？
int sort(Object a, Object b) =&gt; 0;

void main() {
  SortedCollection coll = SortedCollection(sort);

  // 虽然知道 compare 是函数，
  // 但是函数是什么类型 ？
  assert(coll.compare is Function);
}</pre>

<p>当把  <code class="highlighter-rouge">f</code> 赋值给 <code class="highlighter-rouge">compare</code> 的时候，类型信息丢失了。
<code class="highlighter-rouge">f</code> 的类型是 <code class="highlighter-rouge">(Object, </code><code class="highlighter-rouge">Object)</code> → <code class="highlighter-rouge">int</code> (这里 → 代表返回值类型)，
但是 <code class="highlighter-rouge">compare</code> 得到的类型是 Function 。如果我们使用显式的名字并保留类型信息，
这样开发者和工具都可以使用这些信息：</p>

<?code-excerpt "misc/lib/language_tour/typedefs/sorted_collection_2.dart"?>
<pre class="prettyprint lang-dart">typedef Compare = int Function(Object a, Object b);

class SortedCollection {
  Compare compare;

  SortedCollection(this.compare);
}

// Initial, broken implementation.
int sort(Object a, Object b) =&gt; 0;

void main() {
  SortedCollection coll = SortedCollection(sort);
  assert(coll.compare is Function);
  assert(coll.compare is Compare);
}</pre>

<aside class="alert alert-info">
  <p><strong>提示：</strong>
目前，typedefs 只能使用在函数类型上，
我们希望将来这种情况有所改变。</p>
</aside>

<p>由于 typedefs 只是别名，
他们还提供了一种方式来判断任意函数的类型。例如：</p>

<?code-excerpt "misc/lib/language_tour/typedefs/misc.dart (compare)"?>
<pre class="prettyprint lang-dart">typedef Compare&lt;T&gt; = int Function(T a, T b);

int sort(int a, int b) =&gt; a - b;

void main() {
  assert(sort is Compare&lt;int&gt;); // True!
}</pre>

<h2 id="元数据">
<a id="元数据" class="anchor" href="#%E5%85%83%E6%95%B0%E6%8D%AE" aria-hidden="true"><span class="octicon octicon-link"></span></a>元数据</h2>

<p>使用元数据可以提供有关代码的其他信息。
元数据注释以字符 <code class="highlighter-rouge">@</code> 开头，
后跟对编译时常量 (如 <code class="highlighter-rouge">deprecated</code>) 的引用或对常量构造函数的调用。</p>

<p>对于所有 Dart 代码有两种可用注解：<code class="highlighter-rouge">@deprecated</code> 和 <code class="highlighter-rouge">@override</code>。
关于 <code class="highlighter-rouge">@override</code> 的使用，
参考 <a href="#%E6%89%A9%E5%B1%95%E7%B1%BB%E7%BB%A7%E6%89%BF">扩展类（继承）</a>。
下面是使用 <code class="highlighter-rouge">@deprecated</code> 注解的示例：</p>

<?code-excerpt "misc/lib/language_tour/metadata/television.dart (deprecated)" replace="/@deprecated/[!$&!]/g"?>
<pre class="prettyprint lang-dart">class Television {
  /// _Deprecated: Use [turnOn] instead._
  <span class="highlight">@deprecated</span>
  void activate() {
    turnOn();
  }

  /// Turns the TV's power on.
  void turnOn() {...}
}</pre>

<p>可以自定义元数据注解。
下面的示例定义了一个带有两个参数的 @todo 注解：</p>

<?code-excerpt "misc/lib/language_tour/metadata/todo.dart"?>
<pre class="prettyprint lang-dart">library todo;

class Todo {
  final String who;
  final String what;

  const Todo(this.who, this.what);
}</pre>

<p>使用 @todo 注解的示例：</p>

<?code-excerpt "misc/lib/language_tour/metadata/misc.dart"?>
<pre class="prettyprint lang-dart">import 'todo.dart';

@Todo('seth', 'make this do something')
void doSomething() {
  print('do something');
}</pre>

<p>元数据可以在 library、 class、 typedef、 type parameter、
constructor、 factory、 function、 field、 parameter 或者 variable
声明之前使用，也可以在 import 或者 export 指令之前使用。
使用反射可以在运行时获取元数据信息。</p>

<h2 id="注释">
<a id="注释" class="anchor" href="#%E6%B3%A8%E9%87%8A" aria-hidden="true"><span class="octicon octicon-link"></span></a>注释</h2>

<p>Dart 支持单行注释、多行注释和文档注释。</p>

<h3 id="单行注释">
<a id="单行注释" class="anchor" href="#%E5%8D%95%E8%A1%8C%E6%B3%A8%E9%87%8A" aria-hidden="true"><span class="octicon octicon-link"></span></a>单行注释</h3>

<p>单行注释以 <code class="highlighter-rouge">//</code> 开始。 
所有在 <code class="highlighter-rouge">//</code> 和改行结尾之间的内容被编译器忽略。</p>

<?code-excerpt "misc/lib/language_tour/comments.dart (single-line-comments)"?>
<pre class="prettyprint lang-dart">void main() {
  // TODO: refactor into an AbstractLlamaGreetingFactory?
  print('Welcome to my Llama farm!');
}</pre>

<h3 id="多行注释">
<a id="多行注释" class="anchor" href="#%E5%A4%9A%E8%A1%8C%E6%B3%A8%E9%87%8A" aria-hidden="true"><span class="octicon octicon-link"></span></a>多行注释</h3>

<p>多行注释以  <code class="highlighter-rouge">/*</code>  开始， 以 <code class="highlighter-rouge">*/</code> 结尾。
所有在 <code class="highlighter-rouge">/*</code> 和 <code class="highlighter-rouge">*/</code> 之间的内容被编译器忽略
（不会忽略文档注释）。
多行注释可以嵌套。</p>

<?code-excerpt "misc/lib/language_tour/comments.dart (multi-line-comments)"?>
<pre class="prettyprint lang-dart">void main() {
  /*
   * This is a lot of work. Consider raising chickens.

  Llama larry = Llama();
  larry.feed();
  larry.exercise();
  larry.clean();
   */
}</pre>

<h3 id="文档注释">
<a id="文档注释" class="anchor" href="#%E6%96%87%E6%A1%A3%E6%B3%A8%E9%87%8A" aria-hidden="true"><span class="octicon octicon-link"></span></a>文档注释</h3>

<p>文档注释可以是多行注释，也可以是单行注释，
文档注释以 <code class="highlighter-rouge">///</code> 或者 <code class="highlighter-rouge">/**</code> 开始。
在连续行上使用 <code class="highlighter-rouge">///</code> 与多行文档注释具有相同的效果。</p>

<p>在文档注释中，除非用中括号括起来，否则Dart 编译器会忽略所有文本。
使用中括号可以引用类、 方法、 字段、 顶级变量、 函数、 和参数。
括号中的符号会在已记录的程序元素的词法域中进行解析。</p>

<p>下面是一个引用其他类和成员的文档注释：</p>

<?code-excerpt "misc/lib/language_tour/comments.dart (doc-comments)"?>
<pre class="prettyprint lang-dart">/// A domesticated South American camelid (Lama glama).
///
/// 自从西班牙时代以来，
/// 安第斯文化就将骆驼当做肉食类和运输类动物。
class Llama {
  String name;

  /// 喂养骆驼 [Food].
  ///
  /// 典型的美洲驼每周吃一捆干草。
  void feed(Food food) {
    // ...
  }

  /// 使用 [activity] 训练骆驼
  /// [timeLimit] 分钟。
  void exercise(Activity activity, int timeLimit) {
    // ...
  }
}</pre>

<p>在生成的文档中，<code class="highlighter-rouge">[Food]</code> 会成为一个链接，
指向 Food 类的 API 文档。</p>

<p>解析 Dart 代码并生成 HTML 文档，可以使用 SDK 中的
<a href="https://github.com/dart-lang/dartdoc#dartdoc">documentation generation tool.</a>
关于生成文档的实例，请参考 <a href="https://api.dartlang.org/stable">Dart API
documentation.</a>
关于文档结构的建议，请参考 
<a href="/guides/language/effective-dart/documentation">Guidelines for Dart Doc Comments.</a></p>

<h2 id="总结">
<a id="总结" class="anchor" href="#%E6%80%BB%E7%BB%93" aria-hidden="true"><span class="octicon octicon-link"></span></a>总结</h2>

<p>本页概述了 Dart 语言中常用的功能。
还有更多特性有待实现，但我们希望它们不会破坏现有代码。
有关更多信息，请参考
<a href="/guides/language/spec">Dart Language Specification</a> 和
<a href="/guides/language/effective-dart">Effective Dart</a>.</p>

<p>要了解更多关于 Dart 核心库的内容，请参考
<a href="/guides/libraries/library-tour">A Tour of the Dart Libraries</a>.</p>