jQuery(document).ready(function (e) {
    var data = [
        [0, 4, "night"],
        [5, 11, "morning"],
        [12, 17, "afternoon"],
        [18, 22, "evening"],
        [23, 24, "night"]
    ];

    var hr = new Date().getHours();

    for (var i = 0; i < data.length; i++) {
        if (hr >= data[i][0] && hr <= data[i][1]) {
            if (jQuery.inArray(data[i][2], bp_gm_values.greeting)) {
                greeting_time = data[i][2];
                bpgm_message = bp_gm_values.greeting[greeting_time]['message'];
                bpgm_message = bpgm_message + ' ' + bp_gm_values.user_name + ' !';
                bpgm_icon = bp_gm_values.greeting[greeting_time]['icon'];

                jQuery('.bpgm-message').text(bpgm_message);
                jQuery('.bpgm-right').html(bpgm_icon);
            }
        }
    }
});

jQuery(window).load(function () {
    // jQuery('.bpgm-container').show();
});