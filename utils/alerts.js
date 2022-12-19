import Swal from "sweetalert2";

function successEmployeeAlert() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Employee added successfully!",
    showConfirmButton: false,
    timer: 4000,
  });
}

function updatedEmployeeAlert() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Employee updated successfully!",
    showConfirmButton: false,
    timer: 4000,
  });
}

function deletedEmployeeAlert() {
  Swal.fire({
    icon: "success",
    title: "Employee deleted successfully!",
    showConfirmButton: true,
    timer: 4000,
  });
}

const cancelledEmployeeAlert = async () => {
  const swalWithTaildwind = Swal.mixin({
    customClass: {
      cancelButton:
        "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mx-12 rounded-full",
    },
    buttonsStyling: false,
  });
  swalWithTaildwind.fire({
    title: "Cancelled",
    text: "Your employee is safe",
    icon: "error",
    cancelButtonText: "Ok",
  });
};

export {
  successEmployeeAlert,
  updatedEmployeeAlert,
  deletedEmployeeAlert,
  cancelledEmployeeAlert,
};
