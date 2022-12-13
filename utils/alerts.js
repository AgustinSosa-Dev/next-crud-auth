import Swal from "sweetalert2";
import { HiHandThumbUp } from "react-icons/hi";

function successEmployeeAlert() {
  Swal.fire("Excellent!", "Employee added successfully!", "success", 3000);
}

function updatedEmployeeAlert() {
  Swal.fire("Great!", "Employee updated successfully!", "info");
}

const successfullyRegisteredUser = () => {
  Swal.fire({
    title: "<strong><u>Successful</u> registration</strong>",
    icon: "success",
    html:
      "You can use <b>bold text</b>, " +
      '<a href="//sweetalert2.github.io">links</a> ' +
      "and other HTML tags",
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: "<HiHandThumbUp></HiHandThumbUp> Great!",
    confirmButtonAriaLabel: "Thumbs up, great!",
  });
};

const deletedSuccessfullyAlert = async () => {
  const swalWithTaildwind = Swal.mixin({
    customClass: {
      cancelButton:
        "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-12 rounded-full",
    },
    buttonsStyling: false,
  });
  swalWithTaildwind
    .fire({
      title: "Cancelled",
      text: "Your imaginary file is safe :)",
      icon: "error",
      cancelButtonText: "Ok",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithTaildwind.fire(
          "Cancelled",
          "Your imaginary file is safe :)",
          "error"
        );
      } else {
        null;
      }
    });
};

function infoAlert() {
  Swal.fire({
    title: "Good job!",
    text: "Employee Modified Successfully.",
    icon: "info",
    timer: 5000,
  });
}

// function deletedSuccessfullyAlert() {
//   Swal.fire("Good job!", "You clicked the button!", "success");
// }

function updatedSuccessfullyAlert() {
  Swal.fire({
    title: "Perfect!",
    text: "Employee updated successfully",
    icon: "info",
    timer: 3000,
  });
}

export {
  successEmployeeAlert,
  updatedEmployeeAlert,
  infoAlert,
  deletedSuccessfullyAlert,
};
