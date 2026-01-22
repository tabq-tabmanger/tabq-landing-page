import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/utils";
import { ArrowRightIcon, CalendarIcon, CloudIcon, GithubIcon, HistoryIcon, LayoutGridIcon, LinkIcon, SearchIcon, ShieldCheckIcon, WaypointsIcon } from "lucide-react";
import { Icons } from "@/components/global/icons";
import Link from "next/link";
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Integrations } from "./integrations";
import { Label } from "./label";

export const CARDS = [
    {
        Icon: LayoutGridIcon,
        name: "Organize workspaces",
        description: "Create separate spaces for Work, Personal, Study, and more.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <Card className="absolute top-10 left-10 origin-top rounded-none rounded-tl-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_100%)] group-hover:scale-105 border border-border border-r-0">
                <CardHeader>
                    <CardTitle>
                        Create workspaces
                    </CardTitle>
                    <CardDescription>
                        Organize your tabs into beautiful workspaces.
                    </CardDescription>
                </CardHeader>
                <CardContent className="-mt-4">
                    <Label>
                        Workspace name
                    </Label>
                    <Input
                        type="text"
                        placeholder="e.g. Work, Personal..."
                        className="w-full focus-visible:ring-0 focus-visible:ring-transparent"
                    />
                </CardContent>
            </Card>
        ),
    },
    {
        Icon: SearchIcon,
        name: "Quick search",
        description: "Instantly find any tab or collection with keyboard shortcuts.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <Command className="absolute right-10 top-10 w-[70%] origin-to translate-x-0 border border-border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10 p-2">
                <Input placeholder="Search tabs and collections..." />
                <div className="mt-1 cursor-pointer">
                    <div className="px-4 py-2 hover:bg-muted rounded-md">Work / AI Tools</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">Work / Developer Resources</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">Personal / Social Media</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">Study / Research Papers</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">Finance / Banking</div>
                    <div className="px-4 py-2 hover:bg-muted rounded-md">Personal / Entertainment</div>
                </div>
            </Command>
        ),
    },
    {
        Icon: WaypointsIcon,
        name: "Smart collections",
        description: "Group related sites into beautiful card collections.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2 max-w-full overflow-hidden",
        background: (
            <Integrations className="absolute right-2 pl-28 md:pl-0 top-4 h-[300px] w-[600px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
        ),
    },
    {
        Icon: HistoryIcon,
        name: "Search anywhere",
        description: "Search your saved collections and browsing history from any page. Never lose a tab again.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-1",
        background: (
            <div className="absolute right-4 top-10 flex flex-col gap-2 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
                <div className="rounded-lg border border-border bg-neutral-900 p-2 w-[180px]">
                    <Input placeholder="Search..." className="h-8 text-xs" />
                    <div className="mt-2 space-y-1 text-xs">
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-muted text-neutral-400">
                            <WaypointsIcon className="h-3 w-3" />
                            <span>Collections</span>
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-muted text-neutral-400">
                            <HistoryIcon className="h-3 w-3" />
                            <span>History</span>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        Icon: LinkIcon,
        name: "Page aliases",
        description: "Create custom shortcuts to jump to any page instantly. Type an alias and go.",
        href: "#",
        cta: "Learn more",
        className: "col-span-3 lg:col-span-2",
        background: (
            <div className="absolute right-10 top-10 flex flex-col gap-3 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
                <div className="space-y-2">
                    <div className="flex items-center gap-3 rounded-lg border border-border bg-neutral-900 px-4 py-2">
                        <code className="text-sm text-blue-400">gh</code>
                        <span className="text-neutral-600">→</span>
                        <span className="text-xs text-neutral-400">github.com</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-border bg-neutral-900 px-4 py-2">
                        <code className="text-sm text-blue-400">mail</code>
                        <span className="text-neutral-600">→</span>
                        <span className="text-xs text-neutral-400">gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-border bg-neutral-900 px-4 py-2">
                        <code className="text-sm text-blue-400">docs</code>
                        <span className="text-neutral-600">→</span>
                        <span className="text-xs text-neutral-400">docs.google.com</span>
                    </div>
                </div>
            </div>
        ),
    },
    {
        Icon: GithubIcon,
        name: "GitHub Gist sync",
        description: "Sign in with GitHub and sync your data securely via Gist. You own your data.",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="absolute right-4 top-10 flex flex-col items-center gap-2 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
                <div className="flex items-center gap-2 rounded-lg border border-border bg-neutral-900 px-4 py-3">
                    <GithubIcon className="h-6 w-6 text-neutral-300" />
                    <span className="text-sm text-neutral-300">Login with GitHub</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-neutral-500">
                    <CloudIcon className="h-4 w-4" />
                    <span>Sync via Gist</span>
                </div>
            </div>
        ),
    },
    {
        Icon: CloudIcon,
        name: "Google Drive sync",
        description: "Sign in with Google and store your data in your own Google Drive. Privacy guaranteed.",
        className: "col-span-3 lg:col-span-2",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="absolute right-10 top-10 flex flex-col items-center gap-3 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
                <div className="flex items-center gap-3 rounded-lg border border-border bg-neutral-900 px-5 py-3">
                    <Icons.google className="h-6 w-6" />
                    <span className="text-sm text-neutral-300">Login with Google</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                    <CloudIcon className="h-4 w-4" />
                    <span>Sync to Google Drive</span>
                </div>
            </div>
        ),
    },
    {
        Icon: ShieldCheckIcon,
        name: "You own your data",
        description: "No matter which sync method you choose, your data is always stored in your own account. We never access your data.",
        className: "col-span-3 lg:col-span-2",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="absolute right-10 top-10 flex flex-col gap-2 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
                <div className="flex items-center gap-2 rounded-md border border-green-900/50 bg-green-950/30 px-3 py-2 text-green-400">
                    <ShieldCheckIcon className="h-5 w-5" />
                    <span className="text-sm">Your data, your control</span>
                </div>
                <div className="text-xs text-neutral-500 max-w-[200px]">
                    Zero-knowledge · Open source · Full transparency
                </div>
            </div>
        ),
    },
    {
        Icon: CalendarIcon,
        name: "More sync options coming",
        description: "New sync providers are in development and will be released in v0.3.0+. Stay tuned!",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="absolute right-4 top-10 flex flex-col items-center gap-2 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
                <div className="rounded-full border border-amber-900/50 bg-amber-950/30 px-3 py-1 text-xs text-amber-400">
                    Coming in v0.3.0+
                </div>
                <div className="text-xs text-neutral-500 text-center">
                    More sync options<br/>coming soon
                </div>
            </div>
        ),
    },
];

const BentoGrid = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
                className,
            )}
        >
            {children}
        </div>
    );
};

const BentoCard = ({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) => (
    <div
        key={name}
        className={cn(
            "group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
            "bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
            className,
        )}
    >
        <div>{background}</div>
        <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
            <Icon className="h-12 w-12 origin-left text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
            <h3 className="text-xl font-semibold text-neutral-300">
                {name}
            </h3>
            <p className="max-w-lg text-neutral-400">{description}</p>
        </div>

        <div
            className={cn(
                "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
            )}
        >
            <Link href={href} className={buttonVariants({ size: "sm", variant: "ghost", className: "cursor-pointer" })}>
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
        </div>
        <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
);

export { BentoCard, BentoGrid };
