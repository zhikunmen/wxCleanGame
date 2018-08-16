
module superslot{
   export  class ArrayUtil {
		/**
		 *  合并数组 并返回新数组 [ arrA[0], arrB[0] ]; 
		 * @param arrA
		 * @param arrB
		 * @return 
		 * 
		 */		
	public static mergeArray(arrA: Array<any>, arrB: Array<any>): Array<any> {
        var arrC: Array<any> = new Array();
        var len: number;
        if(arrA.length >= arrB.length){
            len = arrA.length;
        }
        else{
            len = arrB.length;
        }
        for (var i: number = 0; i < len; i++) {
            if(arrA[i]) arrC.push(arrA[i]);
            if(arrB[i]) arrC.push(arrB[i]);
        }
        return arrC;
    }
    /**
     删除某数据 
     arr 指定数组（可以是Array,也可以是Vector）
     value
    */
    public static removeByValue(arr:any, value:any):any{
        var len:number = arr.length;
        for(var i:number = 0; i<len; i++){
			if (arr[i] == value) {
                arr.splice(i, 1);
                return arr;
			}
        }
	if(arr){
		return arr;
	}else{
		return [];
	}
    }
    /**
     * 倒序删除
     */
    public static removeValue(arr:any, value:any):any{
         var len:number = arr.length;
            for(var i:number = len-1; i>=0; i--){
                if (arr[i] == value || (arr[i].cardId && arr[i].cardId == value)) { //这里为了兼容jiangxi-ningdu
                    arr.splice(i, 1);
                    return arr;
                }
            }
	    if(arr){
		    return arr;
	    }else{
		    return [];
	    }
    }
    /**		
     元素是否在数组中
    */
     public static isInArray(element:any,arr: Array<any>): boolean {
        var bool: boolean = false;
        for (var i: number = 0; i < arr.length; i++) {
            if (arr[i] == element) {
                return true
            }
        }
        return bool;
    }
     public static numberResolveToArray(value:number,arr:Array<number>):Array<number>{
         var result: Array<number> = [];
         var index: number = 0;
         for(var i: number = 0;i < arr.length;i++) {
             while(value >= arr[i]) {
                 result.push(arr[i]);
                 value = value - arr[i];
             }

             if(value == 0) {
                 break;
             }
         }

         return result;
     }
     
    /**深度复制数组*/
     public static deepcopy(obj: any[]) {
         var out = [],i = 0,len = obj.length;
         for(;i < len;i++) {
             if(obj[i] instanceof Array) {
                 out[i] = this.deepcopy(obj[i]);
             }
             else out[i] = obj[i];
         }
         return out;
     }
     
     /**翻转一个数组，但不影响原数组*/
     public static reverse(source:any[]):any[]{
         var arr:any[] = [];
         var len:number = source.length;
         for(var i:number = 0 ; i< len;i++){
             arr.unshift(source[i]);
         }
         return arr;
     }
}

}