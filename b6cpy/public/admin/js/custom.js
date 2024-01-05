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

