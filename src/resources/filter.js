export default class Filter {
    constructor(arr){
        this.data = Object.values(arr);
    }

    query(params={}){
        return new Promise((res,rej)=>{
            let keys = Object.keys(params);
            if(keys.length == 0){
                res(this.data);
            }
            if(typeof this.data === 'undefined'){
                rej(new Error('Error: Data not passed to Filter object in constructor.'));
            }

            res(this.data.filter(record=>{
                return test(record);
            }))
            
        });

        function test(record){
            const similarity = (s1, s2)=>{
                    var longer = s1;
                    var shorter = s2;
                    if (s1.length < s2.length) {
                        longer = s2;
                        shorter = s1;
                    }
                    var longerLength = longer.length;
                    if (longerLength == 0) {
                        return 1.0;
                    }
                    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
                    function editDistance(s1, s2) {
                        s1 = s1.toLowerCase();
                        s2 = s2.toLowerCase();
                        
                        var costs = new Array();
                        for (var i = 0; i <= s1.length; i++) {
                            var lastValue = i;
                            for (var j = 0; j <= s2.length; j++) {
                            if (i == 0)
                                costs[j] = j;
                            else {
                                if (j > 0) {
                                var newValue = costs[j - 1];
                                if (s1.charAt(i - 1) != s2.charAt(j - 1))
                                    newValue = Math.min(Math.min(newValue, lastValue),
                                    costs[j]) + 1;
                                costs[j - 1] = lastValue;
                                lastValue = newValue;
                                }
                            }
                            }
                            if (i > 0)
                            costs[s2.length] = lastValue;
                        }
                        return costs[s2.length];
                        }
            }
            
            for(let key in params){
                let param = params[key];
                let recVal = record[key];
                let pass;
                console.log('hiii',key)
                if(key === 'event_name' || key=== 'admin_notes'){
                    pass = similarity(param,recVal)>.40;
                    console.log(pass)

                }else{
                    pass = param === recVal;
                }



                if(!pass) return false;
                
            }

            return true;

            
        }
    }
}