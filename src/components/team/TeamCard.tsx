'use client';

import type { TeamMember } from '@/types/team';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { XformerlyTwitter } from '@/components/icons/social-media/X';
import { LinkedIn } from '@/components/icons/social-media/Linkedin';
import { GitHub } from '@/components/icons/social-media/Github';
import { InstagramIcon } from '@/components/icons/social-media/InstagramIcon';
import { TelegramIcon } from '@/components/icons/social-media/TelegramIcon';
import { VerifiedCheckIcon } from '@/components/icons/social-media/VerifiedCheckIcon';

interface TeamCardProps {
  /** Team member data to display */
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const router = useRouter();
  const profileHref = `/team/${member.slug}`;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => router.push(profileHref)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          router.push(profileHref);
        }
      }}
      className="team-card-item relative block shrink-0 w-full max-w-[250px] max-[389px]:max-w-[230px] md:w-[280px] md:min-w-[280px] md:max-w-[280px] cursor-pointer"
    >
      <div
        data-momentum-hover-element=""
        className="w-full relative transition-transform duration-300 ease-in-out hover:-translate-y-0.5"
      >
        <div
          data-momentum-hover-target=""
          className="text-white rounded-lg md:rounded-xl w-full relative overflow-hidden border border-white/15 shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-[border-color,box-shadow] duration-300 ease-in-out p-2.5 md:p-3.5"
        >
          <div className="pointer-events-none pt-[150%]" />
          <div className="absolute top-2.5 left-2.5 right-2.5 bottom-2.5 md:top-3.5 md:left-3.5 md:right-3.5 md:bottom-3.5 z-0 overflow-hidden rounded-lg md:rounded-[1em]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              priority
              style={{ objectPosition: 'center top' }}
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end gap-1 md:gap-1.5 z-10 pointer-events-none px-2.5 pb-2 md:px-3.5 md:pb-3.5">
            <div className="flex items-center justify-start gap-1">
              <h3 className="m-0 mb-0.5 text-[15px] md:text-lg font-medium leading-none">{member.name}</h3>
              <VerifiedCheckIcon className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" />
            </div>
            <p className="opacity-67 m-0 text-[11px] md:text-xs font-normal leading-none">{member.role}</p>
            <div className="mt-1.5 md:mt-2.5 flex flex-col gap-1.5 pointer-events-auto">
              <div className="flex gap-1.5 md:gap-2">
                {member.socialLinks.twitter && (
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white/70 hover:text-white transition-colors"
                    aria-label={`${member.name} Twitter`}
                  >
                    <XformerlyTwitter className="h-3 w-3 md:h-3.5 md:w-3.5" />
                  </a>
                )}
                {member.socialLinks.linkedin && (
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white/70 hover:text-white transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <LinkedIn className="h-3 w-3 md:h-3.5 md:w-3.5" />
                  </a>
                )}
                {member.socialLinks.github && (
                  <a
                    href={member.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white/70 hover:text-white transition-colors"
                    aria-label={`${member.name} GitHub`}
                  >
                    <GitHub className="h-3 w-3 md:h-3.5 md:w-3.5" />
                  </a>
                )}
                {member.socialLinks.instagram && (
                  <a
                    href={member.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white/70 hover:text-white transition-colors"
                    aria-label={`${member.name} Instagram`}
                  >
                    <InstagramIcon className="h-3 w-3 md:h-3.5 md:w-3.5" />
                  </a>
                )}
                {member.socialLinks.telegram && (
                  <a
                    href={member.socialLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-white/70 hover:text-white transition-colors"
                    aria-label={`${member.name} Telegram`}
                  >
                    <TelegramIcon className="h-3 w-3 md:h-3.5 md:w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
