// console.log('start');
class A {
  constructor () {
    console.log('constuc this', this);
  }
  start () {
    // console.log('this', this);
    // setTimeout(() => {
    //   console.log('this', this);
    // },0)
    const x = setTimeout(() => {
      console.log('this', this);
    },0)
    const y  = setTimeout(function() {
      console.log('this', this);
    },0)
  }
}

const b = new A()
b.start()

class Observer {
  constructor () {
      this.obj = {}
  }
  $on (name,func) {
      if (!this.obj[name]) {
          this.obj[name] = []
      }
      this.obj[name].push(func)
  }
  $off (name, func) {
    if (!this.obj[name]) {
      return new Error('事件无效')
    }
    // 要删除事件，若无第二个参数则删除该事件的订阅和发布
    if (!func) {
      // 移除事件
      delete this.obj[name]
    } else {
      this.obj[name] = this.obj[name].filter(item => item !== func)
      // const index = this.obj[name].findIndex(el => el === func)
      // if (index === -1) {
      //   return new Error('无该绑定事件')
      // }
      // this.obj[name].splice(index, 1)

      if (this.obj[name].length === 0) {
        delete this.obj[name]
      }
    }
  }
  $emit (name, params) {
    if (!this.obj[name]) {
      return new Error('该事件未注册')
    }
    this.obj[name].forEach(f => f(params))
  }
}

const bus = new Observer();

const handler = function(name) { 

print(`hello ${name}`); 

};

bus.$on('customEvent', handler);

bus.$on('customEvent', handler.bind(this));

bus.$emit('customEvent', 'shopee');

bus.$off('customEvent', handler);

bus.$emit('customEvent', 'team');
