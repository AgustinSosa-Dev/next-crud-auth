import swal from "sweetalert";

export function successAlert() {
  swal({
    title: "Great!",
    text: "Employee added successfully",
    icon: "success",
    timer: 3000,
  });
}

export function infoAlert() {
  swal({
    title: "Good job!",
    text: "Employee Modified Successfully.",
    icon: "info",
    timer: 5000,
  });
}

export function deletedSuccessfullyAlert() {
  swal({
    title: "Excellent!",
    text: "Employee deleted successfully",
    icon: "success",
    timer: 3000,
  });
}

export function updatedSuccessfullyAlert() {
  swal({
    title: "Perfect!",
    text: "Employee updated successfully",
    icon: "info",
    timer: 3000,
  });
}
