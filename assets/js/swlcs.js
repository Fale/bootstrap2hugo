$(function() {
    $("button#comment-submit").click(function(){
        event.preventDefault(); 
        $.ajax({
            type: "POST",
            url: "{{ .Site.Params.Swlcs }}",
            dataType: 'json',
            data: JSON.stringify( { "resource": $('#resource').val(), "name": $('#name').val(), "email": $('#email').val(), "body": $('#body').val() } ),
            contentType: 'application/json;charset=UTF-8',
            success : function(result) {
                $("form#comment-form").hide();
                $( "section#comments" ).prepend( "<p>Thanks a lot for your comment! If the moderation is enabled, the comment has been added to the moderation queue. Otherwise, it will appear in a few minutes on the page.</p>" );
            },
            error: function(xhr, resp, text) {
                console.log(xhr, resp, text);
            }
       });
    });
});
