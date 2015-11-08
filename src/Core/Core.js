/**
 * JavaScript 核心方法
 * Created by ziki on 2015/11/8.
 */
var Core = (function(){

    this.Object = (function (){

        /*
        * 对象复制
        * @param {object} elem 需要被复制的对象
        * @param {boolean} isDeep 是否深拷贝
        * */
        function copy(obj, isDeep){
            var o = {};
            for(var k in obj){
                if(isDeep && obj[k] instanceof Object){
                    o[k] = copy(obj[k], isDeep);
                }
                else{
                    o[k] = obj[k];
                }
            }

            return o;
        }

        return{
            copy: copy
        }

    })();

})();