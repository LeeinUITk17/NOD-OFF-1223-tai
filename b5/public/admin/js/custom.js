
const handleDelete=(link)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
         document.location.href=link;
        }
      });
}
// const handleDelete = (link) => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!"
//   }).then((result) => {
//     if (result.isConfirmed) {
//       showAlert("Deleted successfully.", "success");
//       setTimeout(() => {
//         document.location.href = link;
//       }, 1000);
//     } else {
//       showAlert("Operation canceled.", "warning");
//     }
//   });
// };

// const showAlert = (msg, type) => {
//   const alertDiv = document.createElement("div");
//   alertDiv.className = `alert alert-${type} alert-dismissible`;

//   alertDiv.innerHTML = `
//     <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
//     <h5><i class="icon fas fa-check"></i> Alert!</h5>
//     ${msg}
//   `;

//   const alertContainer = document.getElementById("yourAlertContainer");

//   // If "yourAlertContainer" exists, append the alert to it; otherwise, append to the body
//   if (alertContainer) {
//     alertContainer.appendChild(alertDiv);
//   } else {
//     document.body.appendChild(alertDiv);
//   }
// };
