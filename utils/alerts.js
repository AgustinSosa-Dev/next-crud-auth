import Swal from "sweetalert2";
import swal from "sweetalert";

function successAlert() {
  Swal.fire({
    title: "<strong>Good Job <u>example</u></strong>",
    icon: "success",
    html:
      "You can use <b>bold text</b>, " +
      '<a href="//sweetalert2.github.io">links</a> ' +
      "and other HTML tags",
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: "Thumbs down",
  });
}

function infoAlert() {
  swal({
    title: "Good job!",
    text: "Employee Modified Successfully.",
    icon: "info",
    timer: 5000,
  });
}

function deletedSuccessfullyAlert() {
  Swal.fire("Good job!", "You clicked the button!", "success");
}

function updatedSuccessfullyAlert() {
  swal({
    title: "Perfect!",
    text: "Employee updated successfully",
    icon: "info",
    timer: 3000,
  });
}

export {
  successAlert,
  infoAlert,
  deletedSuccessfullyAlert,
  updatedSuccessfullyAlert,
};
