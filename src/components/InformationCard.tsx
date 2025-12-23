import { GlobeIcon } from "lucide-react";
import Button from "./Inputs/Button";

const InformationCard = ({
  title,
  subtitle,
  description,
  websiteLink,
  websiteLabel,
  color,
}: {
  title?: string;
  subtitle?: string;
  description?: string;
  websiteLink?: string;
  websiteLabel?: string;
  color?: string;
}) => {
  return (
    <article className="relative overflow-hidden p-4 rounded-2xl shadow-sm border-2 border-neutral-800 hover:border-white/20 bg-neutral-900 transition-all duration-150">
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: color }}
      />
      <header className="relative space-y-1 mb-4">
        <h1 className="text-xl font-semibold text-neutral-200">{title}</h1>
        <p className="text-sm text-neutral-400">{subtitle}</p>
      </header>
      <main className="mb-4">
        <p className="text-neutral-300 leading-relaxed">{description}</p>
      </main>
      <footer className="flex justify-between gap-2">
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-neutral-200 space-x-2 hover:text-white transition-colors"
        >
          <GlobeIcon className="w-5 h-5" />
          <span className="text-sm">{websiteLabel}</span>
        </a>
        <Button type="button" width="w-fit" baseText="View details" />
      </footer>
    </article>
  );
};

export default InformationCard;
