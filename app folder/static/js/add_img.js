function add_uploads() {
    var uploads = d3.select('#uploads');

    var all_uploads = $(".uploads").map(function() {
        return $(this).val();
    }).get();

    if (all_uploads[all_uploads.length - 1] != '') {
        var input = uploads.append('input')
        .attr('class', 'uploads')
        .attr('type', 'file')
        .attr('name', 'files[]')
        .attr('multiple', 'true')
        .attr('autocomplete', 'off')
        .text('new')
    }
}

$(document).on('change', '.uploads', add_uploads)