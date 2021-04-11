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
      if (this.obj[name]) {
          this.obj[name] = this.obj[name].filter(item => item !== func)
      }
  }
  $emit (name, params) {
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
