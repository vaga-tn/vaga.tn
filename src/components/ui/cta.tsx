"use client"
import { useEffect } from 'react'
import { getCalApi } from "@calcom/embed-react";
import { ArrowRight } from "lucide-react"
import { useTranslations } from 'next-intl';


export function CTA() {

  const t = useTranslations("hero")

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  return (
    <div>
      <button
        data-cal-namespace="30min"
        data-cal-link="aymkh/30min"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
        className="flex items-center px-4 py-2 border rounded-full cursor-pointer bg-brand text-zinc-900 hover:bg-brand-600 border-zinc-900 h-9"
      >
        {t("cta")}
        <ArrowRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  )
}