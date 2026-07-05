"use client"

import { useEffect } from 'react'
import { getCalApi } from "@calcom/embed-react";
import { ArrowRight } from "lucide-react"
import { useTranslations } from 'next-intl';

interface CTAProps {
  variant?: 'default' | 'navbar'
}

export function CTA({ variant = 'default' }: CTAProps) {
  const t = useTranslations("hero")

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "30min" });
      cal("ui", { "theme": "dark", "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  const isNavbar = variant === 'navbar'

  const buttonStyles = isNavbar
    ? "px-3 h-8 text-xs border bg-brand text-zinc-900 hover:bg-brand-600 border-zinc-900 rounded-full cursor-pointer flex items-center font-medium transition-all"
    : "px-4 h-9 text-xs lg:text-base border bg-brand text-zinc-900 hover:bg-brand-600 border-zinc-900 rounded-full cursor-pointer flex items-center font-medium transition-all"

  return (
    <div>
      <button
        data-cal-namespace="30min"
        data-cal-link="aymkh/30min"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"dark"}'
        className={buttonStyles}
      >
        <span>{t("cta")}</span>

        {!isNavbar && <ArrowRight className="hidden w-4 h-4 ml-2 lg:inline-block" />}
      </button>
    </div>
  )
}