
const deleteBook = (id)=>{
    if (!confirm('Are you sure you want to delete this book?')) {
        return;
    }
    const origin = location.origin;
    $.ajax({
        url: `${origin}/book/${id}/delete`,
        method: 'GET',
        success: function (response) {
            $('#book-' + id).remove();
        }
    })
}
