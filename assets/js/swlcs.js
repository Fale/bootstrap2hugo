$(function() {
    $("button#comment-submit").click(function(){
        event.preventDefault(); 
        $.ajax({
            type: "POST",
            url: "{{ .Site.Params.Swlcs }}",
            dataType: 'json',
            //data: formToJson($("form#comment-form")),
            data: JSON.stringify( { "resource": $('#resource').val(), "name": $('#name').val(), "email": $('#email').val(), "body": $('#body').val() } ),
            contentType: 'application/json;charset=UTF-8',
            success : function(result) {
                // you can see the result from the console
                // tab of the developer tools
                console.log(result);
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
       });
    });
});
