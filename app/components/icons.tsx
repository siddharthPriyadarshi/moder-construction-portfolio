import type { JSX } from "react";

type IconProps = { className?: string };

const base = "h-6 w-6";

export function IconBolt({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconShieldCheck({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M12 3 4.5 5.5V11c0 4.6 3.1 8.4 7.5 9.8 4.4-1.4 7.5-5.2 7.5-9.8V5.5L12 3Z" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHandshake({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M3 11h3l3.2-2.7a2 2 0 0 1 2.5 0L15 11" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 11h-3l-3-2.4M7 13.5l2.7 2.4a1.7 1.7 0 0 0 2.4-.1l.4-.5 1 .9a1.6 1.6 0 0 0 2.2-.1l2.8-2.7M3 11v4M21 11v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLeaf({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" strokeLinejoin="round" />
      <path d="M5 19c0-5 3-9 8-11" strokeLinecap="round" />
    </svg>
  );
}

export function IconFactory({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M3 21V11l6 4v-4l6 4v-4l6 4v6H3Z" strokeLinejoin="round" />
      <path d="M7 21v-4M13 21v-4" />
    </svg>
  );
}

export function IconMountain({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="m3 19 6-10 4 6 2-3 6 7H3Z" strokeLinejoin="round" />
      <circle cx="8" cy="6" r="1.6" />
    </svg>
  );
}

export function IconBuilding({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M5 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16M13 21v-9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9" strokeLinejoin="round" />
      <path d="M8 8h0M8 12h0M8 16h0" strokeLinecap="round" />
      <path d="M3 21h18" strokeLinecap="round" />
    </svg>
  );
}

export function IconWrench({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L4 16.7 7.3 20l5.3-5.3a4 4 0 0 0 5.1-5.4l-2.6 2.6-2.1-2.1 2.7-2.5Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconGear({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18 6l-1.5 1.5M7.5 16.5 6 18M18 18l-1.5-1.5M7.5 7.5 6 6" strokeLinecap="round" />
    </svg>
  );
}

export function IconDroplet({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11Z" strokeLinejoin="round" />
    </svg>
  );
}

export function IconLandmark({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M4 10h16M5 10v9M9 10v9M15 10v9M19 10v9M3 21h18M12 3l8 4H4l8-4Z" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export function IconTarget({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPhone({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path
        d="M6.6 10.8c1.3 2.6 3.5 4.7 6.1 6.1l2-2a1 1 0 0 1 1-.25 8.4 8.4 0 0 0 2.7.43 1 1 0 0 1 1 1V19a1 1 0 0 1-1 1A15 15 0 0 1 4 6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1 8.4 8.4 0 0 0 .43 2.7 1 1 0 0 1-.25 1l-2 2Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMail({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPin({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
      <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function IconCheck({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d="m4 12 5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowUpRight({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const SEGMENT_ICONS = [
  IconFactory,
  IconMountain,
  IconBolt,
  IconLeaf,
  IconBuilding,
  IconWrench,
  IconGear,
  IconDroplet,
  IconLandmark,
];

export const VALUE_ICONS: Record<string, (props: IconProps) => JSX.Element> = {
  innovation: IconBolt,
  integrity: IconShieldCheck,
  "customer-focus": IconHandshake,
  safety: IconTarget,
};
