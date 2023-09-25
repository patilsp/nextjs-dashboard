import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Nav } from "@/components/main-nav"
import { Icons } from "@/components/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/site-header"
import { buttonVariants } from "@/registry/new-york/ui/button"
import { Separator } from "@/registry/new-york/ui/separator"
import Dashboard from "@/app/dashboard/page"

export default function IndexPage() {
  return (
    <div className="container relative">
      <section className="md:block">
      <div className="overflow-hidden rounded-lg border bg-background shadow mt-4">
          <Dashboard />
        </div>
      </section>
    </div>
  )
}
