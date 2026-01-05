import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalBri() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#f08645" },
          dark: { "cal-brand": "#f08645" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      namespace="30min"
      calLink="bri-nandi-s22uhs/30min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "dark" }}
    />
  );
}
