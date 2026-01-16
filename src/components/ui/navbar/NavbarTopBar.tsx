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
      <div className="absolute left-1/2 -translate-x-1/2">
        <OppiaLogo width={100} height={28} className="h-7 w-auto" priority />
      </div>
      <div className="flex items-center gap-4">
        <DiscoverLink />
        <LanguageButton />
      </div>
    </div>
  );
}

