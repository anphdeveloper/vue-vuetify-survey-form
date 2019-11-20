export const productMixin = {
    data(){

    }
    ,
    created : function(){

    },
    methods:{
        getRateForStationary: function(age, productNumber){
            
        },
        getRateForTooth: function(age, productNumber){
            
        },
        getRateForOutpatient: function(age, productNumber){
            
        },
        getRateForPrevention: function(age, productNumber){
            
        }
    }
}

export const tableMixin = {
    data(){

    }
    ,
    created : function(){

    },
    methods:{
        addMarkWord: function(str, keyword){
            if (keyword === '' || keyword === ' ')
                return str;
            let regex = new RegExp( keyword, "gi");
            return str.replace(regex, str=>'<mark>'+ str +'</mark>');
        }
    }
}