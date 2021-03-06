/*
*1.定时器  返回值是个数字,表示第几个定时器
* 永久定时器
* window.setInterval(fn,1000)
* window.clearInterval(1)
* window.clearInterval()不穿参数表示把所有的setInterval的定时器都清除掉
* 一次定时器
* window.setTimeout(ff,1000)
* window.clearTimeout(1)
* window.clearTimeout()不穿参数表示把所有的setTimeout的定时器都清除掉
* 注意:清除定时器实际原理是阻止定时器中的函数执行
*
*2.预解释(变量提声)
*是一个过程,作用域形成之后代码执行之前,将所有带var和function关键字的提前的声明或定义,带var的只声明,带function既声明又定义,遇到到已经声明过的变量不需要重新声明但是需要重新定义(变量和函数重名时候要注意的问题)
*特殊情况
*1).=右边不进行预解释
*2).自执行函数不进行预解释
*3).匿名函数当做参数不进行预解释
*4).return出的内容执行但是不进行预解释,return后面的代码不执行但是预解释
*5).if()条件不管怎样都进行预解释 ,条件成立先进行给函数赋值
*6).块级作用域下不予许变量和函数重名
*
*3.作用域(栈内存)
* 私有作用域
* 1).预解释
* 2).给形参赋值
* 3).代码执行
*
* 4.闭包:是一种保护机制,一个函数执行形成一个私有作用域,来保护里面私有变量不受外界的干扰
*
* 5.私有变量
* 1).私有作用域下声明过的(带var 和function关键字的)
* 2).形参
*
* 6.作用域链
* 当遇到变量时候先看是不是自己私有变量不是的话往上一级作用域找,没有继续找...找到window下还没有就报错了,这个查找过程就叫做作用域链
*
* 7.上一级作用域:看当前这个作用域的地址是在哪个作用域下定义的,这作用域就是他的上一级
*
* 8.作用域销毁机制
* 私有作用域:返回一个引用数据类型,而且被外界占用了,此时这个作用域就不会销毁
*
* 9.this
* 1).看函数执行前面有没有点,有点的话点前面是谁就是谁,没有就是window
* 2).自执行函数this永远是window
* 3).函数当做参数的时候this永远是window
* 4).给元素绑定事件时候给给谁绑的this就是谁
* 5).构造函数中this是当前实例
*
* 10.单例模式
* 11.构造函数
* 12.原型原型链
*
* */