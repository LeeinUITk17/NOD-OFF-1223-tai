

const handleDelete = (link) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      document.location.href = link;
    }
  });
};
const handleUpdateStatus = (id, status) => {
  
  $.ajax({
    type: "GET",
    url: `/admin/news/changeStatus/${id}/${status}`,
    dataType: "json",
    success: function (response) {
      const newStatus = response.status;
      const newStatusClass = newStatus === 'active' ? 'badge-success' : 'badge-danger';

     
      $(`#status-${id}`).html(`
        <a href="/changeStatus/${id}/${newStatus}">
          <span class="badge ${newStatusClass}">${newStatus}</span>
        </a>
      `);
    },
    error: function (error) {
      console.error('Error updating status:', error);
      
      $(`#status-${id}`).html(`<span class="badge badge-danger">Error updating status</span>`);
    }
  });
};

jQuery(document).ready(function($)  {
  $('#selectAllCheckbox').change(() => {  
    $('input[name="selectedItems"]').prop('checked', $('#selectAllCheckbox').prop('checked'));
  });

  $('input[name="selectedItems"]').change(() => {
    const allCheckboxesChecked = !$('input[name="selectedItems"]:not(:checked)').length;
    $('#selectAllCheckbox').prop('checked', allCheckboxesChecked);
  });

  $('.dropdown-menu a').click(function() {
    const action = $(this).data('action');
    
    const selectedCheckboxes = $('input[name="selectedItems"]:checked');

    if (selectedCheckboxes.length > 0) {
      const selectedItems = selectedCheckboxes.map(function() {
        return $(this).val();
      }).get();

      console.log("Action: " + action);
      console.log("Selected Items: " + selectedItems.join(', '));

      $.ajax({
        type: "post",
        url: "/admin/news/changeStatusTool",
        contentType: "application/json", 
        data: JSON.stringify({
            action: action,
            selectedItems: selectedItems
        }),
        success: function(response) {
            console.log(response);
        },
        error: function(error) {
            console.error(error);
        }
    });    
    } else {
      console.log("No checkboxes selected.");
    }
  });
});
