export const productMixin = {
    data(){

    }
    ,
    created : function(){

    },
    methods:{
        getRateForStationary: function(milesec){
            
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