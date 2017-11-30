var Vue = require('../vue.js');
var Vm =require('./Vm.js');
var Sub={
    template:`
    <div>
     最后是沉稳阶段11
     <button @click="callDaddy">呼叫父亲</button>
    </div>
    `,
    // created(){
    //     console.log('子组件出过年了')
    // },
    methods:{
        callDaddy:function(){
          vm.$emit('123456','a',1);
          console.log('收到孩子的求救信号');
        }
    }
}