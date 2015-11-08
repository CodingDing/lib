/**
 * JavaScript ���ķ���
 * Created by ziki on 2015/11/8.
 */
var Core = (function(){

    this.Object = (function (){

        /*
        * ������
        * @param {object} elem ��Ҫ�����ƵĶ���
        * @param {boolean} isDeep �Ƿ����
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