'use client';

import { OppiaLogo } from '@/components/icons/oppia/OppiaLogo';
import { MenuButton } from './MenuButton';
import { LanguageButton } from './LanguageButton';
import { DiscoverLink } from './DiscoverLink';

interface NavbarTopBarProps {
  isMenuOpen: boolean;
  showMenuContent: boolean;
  onToggleMenu: () => void;
}

export function NavbarTopBar({
  isMenuOpen,
  showMenuContent,
  onToggleMenu,
}: NavbarTopBarProps) {
  return (
    <div className={`flex items-center justify-between w-full shrink-0 ${isMenuOpen ? 'mb-0' : ''}`}>
      <MenuButton
        isOpen={showMenuContent}
        onToggle={onToggleMenu}
      />
      <div className="absolute pr-8 left-1/2 -translate-x-1/2">
        <OppiaLogo width={140} height={40} className="h-8 w-auto" priority />
      </div>
      <div className="flex items-center gap-4">
        <DiscoverLink />
        <LanguageButton />
      </div>
    </div>
  );
}

