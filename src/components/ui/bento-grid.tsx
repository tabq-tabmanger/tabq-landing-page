import { buttonVariants } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/utils";
import { ArrowRightIcon, CalendarIcon, CloudIcon, GithubIcon, LayoutGridIcon, SearchIcon, ShieldCheckIcon, WaypointsIcon } from "lucide-react";
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
        Icon: GithubIcon,
        name: "GitHub Gist 同步",
        description: "使用 GitHub 登录，数据通过 Gist 安全同步，完全由您掌控。",
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
        name: "Google Drive 同步",
        description: "使用 Google 登录，数据存储在您的 Google Drive，隐私有保障。",
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
        name: "数据完全由您掌控",
        description: "无论选择哪种同步方式，您的数据始终存储在您自己的账户中，我们不会访问您的任何数据。",
        className: "col-span-3 lg:col-span-2",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="absolute right-10 top-10 flex flex-col gap-2 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
                <div className="flex items-center gap-2 rounded-md border border-green-900/50 bg-green-950/30 px-3 py-2 text-green-400">
                    <ShieldCheckIcon className="h-5 w-5" />
                    <span className="text-sm">您的数据，您做主</span>
                </div>
                <div className="text-xs text-neutral-500 max-w-[200px]">
                    端到端加密 · 零知识架构 · 开源透明
                </div>
            </div>
        ),
    },
    {
        Icon: CalendarIcon,
        name: "更多同步方式 Coming Soon",
        description: "新的同步器正在开发中，将在 v0.3.0+ 版本发布，敬请期待！",
        className: "col-span-3 lg:col-span-1",
        href: "#",
        cta: "Learn more",
        background: (
            <div className="absolute right-4 top-10 flex flex-col items-center gap-2 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105">
                <div className="rounded-full border border-amber-900/50 bg-amber-950/30 px-3 py-1 text-xs text-amber-400">
                    Coming in v0.3.0+
                </div>
                <div className="text-xs text-neutral-500 text-center">
                    更多同步选项<br/>即将推出
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
