import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <div className="">
    <footer className="py-6 md:px-8 md:py-0 flex justify-center">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"  
            className="font-medium underline underline-offset-4"
          >
            Santosh Patil
          </a>
          . The source code is available on{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
    </div>
  )
}
