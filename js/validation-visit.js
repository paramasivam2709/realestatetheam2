$(document).ready(function () {
    $('#send_message').click(function (e) {

        e.preventDefault();

        var error = false;
        var name = $('#name').val();
        var email = $('#email').val();
        var date = $('input[name="date"]').val();
        var time = $('#time').val();
        var message = $('#message').val();

        // Remove error class on click
        $('#name,#email,#message,input[name="date"],#time').click(function () {
            $(this).removeClass("error_input");
        });

        // Validation
        if (name.length == 0) {
            error = true;
            $('#name').addClass("error_input");
        }

        if (email.length == 0 || email.indexOf('@') == -1) {
            error = true;
            $('#email').addClass("error_input");
        }

        if (date.length == 0) {
            error = true;
            $('input[name="date"]').addClass("error_input");
        }

        if (time.length == 0) {
            error = true;
            $('#time').addClass("error_input");
        }

        if (message.length == 0) {
            error = true;
            $('#message').addClass("error_input");
        }

        // If no errors → submit with AJAX
        if (!error) {
            window.location.href = "404.html";
        }
    });
});
