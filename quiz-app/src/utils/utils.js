
export const confirmAlertConfig = (title, text, yesButton, noButton) => {
  return {
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#2ecc70",
    cancelButtonColor: "#e74d3c",
    confirmButtonText: yesButton,
    cancelButtonText: noButton,
    iconColor: "#f39c12",
  };
};
