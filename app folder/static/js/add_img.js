function add_uploads() {
    var uploads = d3.select('#uploads');
    var input = uploads.append('input')
        .attr('class', 'uploads')
        .attr('type', 'file')
        .attr('name', 'files[]')
        .attr('multiple', 'true')
        .attr('autocomplete', 'off')
        .text('new')
}

$(document).on('change', '.uploads', add_uploads)