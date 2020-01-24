$(document).ready(function() {
    $.noConflict();


    var table = $('#example').DataTable({
        responsive: true,
        columnDefs: [
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: 2, targets: -1 }
        ],
        "sAjaxSource": "/users",
        "sAjaxDataProp": "",
        "order": [[ 0, "asc" ]],
        "aoColumns": [
            { "mData": "name"},
            { "mData": "lastName" },
            { "mData": "type" },
            { "mData": "numberOfPlaces" },
            {
                mData: null,
                className: "center",
                defaultContent: '<button class="show_position btn btn-primary">Show</button>'
            }
        ]
    })


    // Edit record
    $('#example').on('click', 'button.show_position', function (e) {
        e.preventDefault();
        ajax_get_positions();
    } );




    function ajax_get_positions() {

        var search = {}
        search["id"] = $("#id").val();

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/search",
            data: JSON.stringify(search),
            dataType: 'json',
            cache: false,
            timeout: 600000,
            success: function (data) {


                var pos = {lat: 34.779, lng: -98.808};
                var map = new google.maps.Map(
                    document.getElementById('map'), {zoom: 4, center: pos});

                for(var i=0; i<data.length; i++){
                    var xxx = data[i].lat;
                    var yyy = data[i].lng;
                    var pos = {lat: parseInt(xxx), lng: parseInt(yyy)};
                    new google.maps.Marker({position: pos, map: map});
                }




                console.log("SUCCESS : ", JSON.stringify(data));

            },
            error: function (e) {
                console.log("ERROR : ", e);

            }
        });

    }



    $('a[href^="#"]').on('click', function(event) {

        var target = $(this.getAttribute('href'));

        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }

    });



} );
