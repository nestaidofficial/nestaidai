'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { createPortal } from 'react-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { LucideIcon } from 'lucide-react';
import {
  Users,
  Star,
  FileText,
  Shield,
  Handshake,
  Leaf,
  HelpCircle,
  CalendarDays,
  MapPin,
  CreditCard,
  Smartphone,
  BrainCircuit,
} from 'lucide-react';

type LinkItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
  comingSoon?: boolean;
};

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F6F6F3] border-b border-black/10">
      <nav className="flex h-14 w-full max-w-6xl mx-auto items-center justify-between px-8 gap-8">

        {/* Logo — left */}
        <div className="flex shrink-0 items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity rounded-md px-2 py-1">
            <Image
              src="/logomain.jpg"
              alt="Nestaid"
              width={200}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Nav links — center */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium hover:bg-white focus:bg-white data-[state=open]:bg-white">
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background p-1 pr-1.5">
                  <ul className="bg-popover grid w-[620px] grid-cols-2 gap-3 rounded-md border p-3 shadow">
                    {productLinks.map((item, i) => (
                      <li key={i}>
                        <ListItem {...item} />
                      </li>
                    ))}
                  </ul>
                  <div className="p-2">
                    <p className="text-muted-foreground text-sm">
                      Interested?{' '}
                      <Link href="https://calendly.com/rahulchettri601/nestaid-demo-call" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:underline">
                        Book a free demo
                      </Link>
                    </p>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-sm font-medium hover:bg-white focus:bg-white data-[state=open]:bg-white">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-background p-1 pr-1.5 pb-1.5">
                  <div className="grid w-[480px] grid-cols-2 gap-2">
                    <ul className="bg-popover space-y-2 rounded-md border p-2 shadow">
                      {companyLinks.map((item, i) => (
                        <li key={i}>
                          <ListItem {...item} />
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-2 p-3">
                      {companyLinks2.map((item, i) => (
                        <li key={i}>
                          <NavigationMenuLink
                            href={item.href}
                            className="flex p-2 hover:bg-white flex-row rounded-md items-center gap-x-2"
                          >
                            <item.icon className="text-foreground size-4" />
                            <span className="text-sm font-medium">{item.title}</span>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/pricing"
                    className="px-4 py-2 text-sm font-medium hover:bg-accent rounded-md transition-colors"
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Button — right */}
        <div className="flex shrink-0 items-center justify-end">
          <div className="hidden md:flex">
            <Button variant="default" size="default" className="text-sm px-5" asChild>
              <Link href="https://calendly.com/rahulchettri601/nestaid-demo-call" target="_blank" rel="noopener noreferrer">Book a Free Demo</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <MenuToggleIcon open={open} className="size-5" duration={300} />
            </Button>
          </div>
        </div>
      </nav>

      

      <MobileMenu open={open} className="flex flex-col justify-between gap-2 overflow-y-auto">
        <NavigationMenu className="max-w-full">
          <div className="flex w-full flex-col gap-y-2">
            <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wide px-1">
              Product
            </span>
            {productLinks.map((link) => (
              <ListItem key={link.title} {...link} />
            ))}
            <span className="mt-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide px-1">
              Company
            </span>
            {companyLinks.map((link) => (
              <ListItem key={link.title} {...link} />
            ))}
            {companyLinks2.map((link) => (
              <ListItem key={link.title} {...link} />
            ))}
          </div>
        </NavigationMenu>
        <div className="flex flex-col gap-2">
          <Button variant="default" className="w-full" asChild>
            <Link href="https://calendly.com/rahulchettri601/nestaid-demo-call" target="_blank" rel="noopener noreferrer">Book a Free Demo</Link>
          </Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<'div'> & {
  open: boolean;
};

function MobileMenu({ open, children, className, ...props }: MobileMenuProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!open || !mounted) return null;

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        'bg-[#F6F6F3]/95 supports-[backdrop-filter]:bg-[#F6F6F3]/80 backdrop-blur-lg',
        'fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-y border-black/10 md:hidden',
      )}
    >
      <div
        data-slot={open ? 'open' : 'closed'}
        className={cn(
          'data-[slot=open]:animate-in data-[slot=open]:zoom-in-97 ease-out',
          'size-full p-4',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

function ListItem({
  title,
  description,
  icon: Icon,
  className,
  href,
  comingSoon,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & LinkItem) {
  return (
    <NavigationMenuLink
      className={cn(
        'w-full flex flex-row gap-x-2 rounded-sm p-2',
        'hover:bg-white hover:text-foreground',
        'focus:bg-white focus:text-foreground',
        'data-[active=true]:bg-white/50 data-[active=true]:text-foreground',
        'transition-colors',
        className,
      )}
      asChild
      {...props}
    >
      <Link href={href ?? '#'}>
        <div className="bg-background/40 flex aspect-square size-10 items-center justify-center rounded-md border shadow-sm flex-shrink-0">
          <Icon className="size-4" style={{ color: '#F4C6AC' }} />
        </div>
        <div className="flex flex-col items-start justify-center flex-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium leading-tight">{title}</span>
            {comingSoon && (
              <span className="inline-flex items-center bg-black text-white text-[10px] font-medium px-2.5 py-1 rounded-full leading-none whitespace-nowrap">
                Coming Soon
              </span>
            )}
          </div>
          {description && (
            <span className="text-muted-foreground text-[10px] leading-snug">{description}</span>
          )}
        </div>
      </Link>
    </NavigationMenuLink>
  );
}

const productLinks: LinkItem[] = [
  {
    title: 'Client & Caregiver Management',
    href: '/management',
    description: 'Manage profiles, care plans, and credentials in one place',
    icon: Users,
  },
  {
    title: 'Smart Scheduling',
    href: '/scheduling',
    description: 'Assign shifts, match caregivers, and avoid conflicts in real time',
    icon: CalendarDays,
  },
  {
    title: 'Electronic Visit Verification (EVV)',
    href: '#features',
    description: 'GPS-based check-ins for Medicaid compliance and accurate visits',
    icon: MapPin,
    comingSoon: true,
  },
  {
    title: 'AI Onboarding',
    href: '/ai-onboarding',
    description: 'Use AI to collect responses, run intake interviews, and help match the right caregiver to each client',
    icon: CreditCard,
  },
  {
    title: 'Custom Integrations',
    href: '#features',
    description: 'Works with your existing home care software and fits your workflow',
    icon: Smartphone,
  },
  {
    title: 'AI Agents & Automation',
    href: '#how-it-works',
    description: 'Automate scheduling, call handling, and daily operations',
    icon: BrainCircuit,
  },
];

const companyLinks: LinkItem[] = [
  {
    title: 'About Us',
    href: '/about',
    description: 'Learn more about our story and team',
    icon: Users,
  },
  {
    title: 'Customer Stories',
    href: '#',
    description: "See how we've helped our clients succeed",
    icon: Star,
  },
  {
    title: 'Partnerships',
    href: '#',
    icon: Handshake,
    description: 'Collaborate with us for mutual growth',
  },
];

const companyLinks2: LinkItem[] = [
  {
    title: 'Terms of Service',
    href: '/terms',
    icon: FileText,
  },
  {
    title: 'Privacy Policy',
    href: '/privacy',
    icon: Shield,
  },
  {
    title: 'Blog',
    href: '#',
    icon: Leaf,
  },
  {
    title: 'Help Center',
    href: '#',
    icon: HelpCircle,
  },
];

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  const onScroll = React.useCallback(() => {
    setScrolled(window.scrollY > threshold);
  }, [threshold]);

  React.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  React.useEffect(() => {
    onScroll();
  }, [onScroll]);

  return scrolled;
}
