import toast from "react-hot-toast";

export const notify = (
  message: string,
  type: "success" | "error" | "warn" = "success"
) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "warn":
      toast(message, { icon: "⚠️" });
      break;
    default:
      break;
  }
};
