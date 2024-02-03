import {
    FaPlaystation,
    FaXbox,
    FaWindows,
    FaLinux,
    FaApple,
} from 'react-icons/fa';
import { BsNintendoSwitch } from 'react-icons/bs';

export default function PlatformBadgeList({ platforms }) {
    const platformIcons = {
        playstation: <FaPlaystation />,
        pc: <FaWindows />,
        xbox: <FaXbox />,
        max: <FaApple />,
        linux: <FaLinux />,
        nintendo: <BsNintendoSwitch />,
    };

    return (
        <div className='flex gap-2 pb-2'>
            {platforms.map((platform) => {
                const icon = platformIcons[platform.platform.slug];
                return icon ? (
                    <span
                        key={platform.platform.id}
                        role='img'
                        aria-label={`Playable on ${platform.platform.name}`}
                    >
                        {icon}
                    </span>
                ) : null;
            })}
        </div>
    );
}
