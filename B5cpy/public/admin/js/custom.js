$(document).ready(function () {
  // $("a.btn-delete").on("click", () => {
  //   e.preventDefault();
  //   // return confirm("Are you sure want to delete this item?");
  //   //User swal
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire({
  //         title: "Deleted!",
  //         text: "Your file has been deleted.",
  //         icon: "success",
  //       });
  //     }
  //   });
  // });
});

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
    url: `/admin/news/changeStatus/${id}`,
    dataType: "json",
    success: function (response) {
      const newStatusClass = response.status === 'active' ? 'badge-success' : 'badge-danger';

      // Update the status text and class
      $(`#status-${id}`).html(`
        <a href="javascript:void(0);" onclick="handleUpdateStatus('${id}', '${response.status}')">
          <span class="badge ${newStatusClass}">${response.status}</span>
        </a>
      `);
    },
    error: function (error) {
      console.error('Error updating status:', error);
      alert('Error updating status. Please try again.');
    }
  });
};