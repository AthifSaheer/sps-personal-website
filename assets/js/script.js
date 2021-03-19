
$(document).ready(function() {
    $("#submit-form").validate({
        rules:{
            firstname:{
                required:true,
                minlenght:3,
            },
            lastname:{
                required:true,
            },
            email:{
                required:true,
                email:true,
            },
            message:{
                required:true,
                minlenght:12,
            }
        },
        message:{
            firstname:{
                required:"uniq want",
                minlenght:"min 3 word",
            },
        }
    })
})
