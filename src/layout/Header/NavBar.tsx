import { mainRoutes } from '@/router'
import {
    Package2,
    Settings,
} from "lucide-react"

import SvgIcon from "@/components/SvgIcon"
import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
    ToggleGroup,
    ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useLocation } from 'react-router-dom';
// 获取当前路由

export default function NavBar() {
    let location = useLocation();
    console.log("code line-16 \n\r😒 location:\n\r", location);
    return (
        <aside className="fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-14 bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 py-4">
                <a
                    href="/"
                    className="flex items-center justify-center gap-2 text-lg font-semibold rounded-full group h-9 w-9 shrink-0 bg-primary text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Package2 className="w-4 h-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                </a>
                {
                    mainRoutes.map((item) => {
                        return <Tooltip key={item.path}>
                            <TooltipTrigger asChild>
                                <a
                                    href={item.path}
                                    className={["flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8 hover:text-blue-400 hover:bg-gray-400/70 hover:scale-110", item.path == location.pathname ? 'bg-gray-400/70' : ''].join(' ')}
                                >
                                    <SvgIcon name={item.meta.icon}></SvgIcon>
                                    <span className="sr-only">{item.meta.title}</span>
                                    {/* <Home className="w-5 h-5" /> */}
                                </a>
                            </TooltipTrigger>
                            <TooltipContent side="right">{item.meta.title}</TooltipContent>
                        </Tooltip>
                    })
                }

            </nav>
            <nav className="flex flex-col items-center gap-4 px-2 py-4 mt-auto">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <a
                            href="#"
                            className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
                        >
                            <Settings className="w-5 h-5" />
                            <span className="sr-only">Settings</span>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent side="right">Settings</TooltipContent>
                </Tooltip>
            </nav>
        </aside >
    )
}
