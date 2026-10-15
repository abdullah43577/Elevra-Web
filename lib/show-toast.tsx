import { AlertTriangle, CheckCircle2, Info, Loader2, XCircle } from "lucide-react";
import { createElement, ReactNode } from "react";
import { toast } from "sonner";

type ToastType = "error" | "success" | "warning" | "info" | "loading";

const toastConfig: Record<ToastType, { icon: ReactNode; style: React.CSSProperties }> = {
  success: {
    icon: createElement(CheckCircle2, {
      className: "h-5 w-5 text-success",
    }),
    style: {
      background: "var(--success-muted)",
      border: "1px solid var(--line)",
      color: "var(--foreground)",
    },
  },
  error: {
    icon: createElement(XCircle, { className: "h-5 w-5 text-danger" }),
    style: {
      background: "var(--danger-muted)",
      border: "1px solid var(--line)",
      color: "var(--foreground)",
    },
  },
  warning: {
    icon: createElement(AlertTriangle, { className: "h-5 w-5 text-amber" }),
    style: {
      background: "var(--amber-muted)",
      border: "1px solid var(--line)",
      color: "var(--foreground)",
    },
  },
  info: {
    icon: createElement(Info, { className: "h-5 w-5 text-royal" }),
    style: {
      background: "var(--royal-muted)",
      border: "1px solid var(--line)",
      color: "var(--foreground)",
    },
  },
  loading: {
    icon: createElement(Loader2, {
      className: "h-5 w-5 animate-spin text-foreground-muted",
    }),
    style: {
      background: "var(--surface)",
      border: "1px solid var(--line)",
      color: "var(--foreground)",
    },
  },
};

export const showToast = (type: ToastType, message: string) => {
  toast.dismiss();

  const config = toastConfig[type];

  switch (type) {
    case "error":
      toast.error(message, { icon: config.icon, style: config.style });
      break;
    case "success":
      toast.success(message, { icon: config.icon, style: config.style });
      break;
    case "warning":
      toast.warning(message, { icon: config.icon, style: config.style });
      break;
    case "info":
      toast.info(message, { icon: config.icon, style: config.style });
      break;
    case "loading":
      toast.loading(message, { icon: config.icon, style: config.style });
      break;
    default:
      toast(message);
  }
};
