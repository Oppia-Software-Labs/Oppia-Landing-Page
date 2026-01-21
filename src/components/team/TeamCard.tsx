import type { TeamMember } from '@/types/team';
import Image from 'next/image';
import { XIcon } from '@/components/icons/social-media/XIcon';
import { LinkedInIcon } from '@/components/icons/social-media/LinkedInIcon';
import { GitHubIcon } from '@/components/icons/social-media/GitHubIcon';
import { InstagramIcon } from '@/components/icons/social-media/InstagramIcon';
import { TelegramIcon } from '@/components/icons/social-media/TelegramIcon';
import { VerifiedCheckIcon } from '@/components/icons/social-media/VerifiedCheckIcon';
import { TEAM_CARD, TEAM_CARD_COLORS, SOCIAL_ICON, TEAM_SPACING } from '@/constants/team';

interface TeamCardProps {
  /** Team member data to display */
  member: TeamMember;
}

/**
 * TeamCard component displays a single team member's information
 * 
 * Features:
 * - Displays member image, name, role, and verified badge
 * - Shows social media links (Twitter, LinkedIn, GitHub, Instagram, Telegram)
 * - Includes momentum hover effects
 * - Responsive design with optimized images
 * 
 * @param props - Component props
 * @param props.member - Team member data object
 * 
 * @example
 * ```tsx
 * <TeamCard member={teamMembers[0]} />
 * ```
 */
export function TeamCard({ member }: TeamCardProps) {

    return (
      <div
      className="team-card-item relative flex-shrink-0"
      style={{ width: `${TEAM_CARD.WIDTH}px`, minWidth: `${TEAM_CARD.WIDTH}px`, maxWidth: `${TEAM_CARD.WIDTH}px` }}
      >
      <div 
        data-momentum-hover-element="" 
        className="w-full relative transition-transform duration-300 ease-in-out hover:-translate-y-0.5"
      >
        <div 
          data-momentum-hover-target="" 
          className="text-white rounded-[1.5em] w-full relative overflow-hidden border border-white/15 shadow-[0_4px_6px_rgba(0,0,0,0.3)] transition-[border-color,box-shadow] duration-300 ease-in-out p-5"
        >
          <div className="pointer-events-none pt-[150%]"></div>
          <div className="absolute top-5 left-5 right-5 bottom-5 z-0 overflow-hidden rounded-[1.2em]">
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
          <div 
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-end gap-2 z-[2] pointer-events-none"
            style={{ padding: `0 ${TEAM_CARD.PADDING.SIDES} ${TEAM_CARD.PADDING.BOTTOM} ${TEAM_CARD.PADDING.SIDES}` }}
          >
            <div className="flex items-center justify-start gap-1">
              <h3 className="m-0 mb-1 text-2xl font-medium leading-none">{member.name}</h3>
              <VerifiedCheckIcon className="w-6" />
              </div>
            <p className="opacity-67 m-0 text-base font-normal leading-none">{member.role}</p>
            <div className="mt-4 flex flex-col gap-2 pointer-events-auto">
              <div className="flex gap-3">
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <XIcon className="h-5 w-5" />
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedInIcon className="h-5 w-5" />
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a
                        href={member.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <GitHubIcon className="h-5 w-5" />
                      </a>
                    )}
                    {member.socialLinks.instagram && (
                      <a
                        href={member.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                        aria-label={`${member.name} Instagram`}
                      >
                        <InstagramIcon className="h-5 w-5" />
                      </a>
                    )}
                {member.socialLinks.telegram && (
                  <a
                    href={member.socialLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors"
                    aria-label={`${member.name} Telegram`}
                  >
                    <TelegramIcon className="h-5 w-5" />
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

