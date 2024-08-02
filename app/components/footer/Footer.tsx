import Link from 'next/link';

const Footer = () => {
  const links = [
    {
      title: 'ABOUT',
      links: [
        'Our Story',
        'Blog',
        'Careers',
        'Media Center',
        'Corporate Responsibility',
      ],
    },
    {
      title: 'COMMUNITY',
      links: [
        'Diversity & Inclusion',
        'Events',
        'Partnerships',
        'Community Programs',
        'Volunteer Opportunities',
      ],
    },
    {
      title: 'HOST',
      links: [
        'Host Your Home',
        'Host an Experience',
        'Responsible Hosting',
        'Resource Center',
        'Community Center',
      ],
    },
    {
      title: 'SUPPORT',
      links: [
        'Help Center',
        'Safety Information',
        'Cancellation Options',
        'Supporting People',
        'Report a Neighborhood Concern',
      ],
    },
  ];

  return (
    <footer className='bg-gray-200 text-gray-700'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8 px-6 py-12 md:px-32 md:py-16'>
        {links.map((section) => (
          <div key={section.title} className='space-y-4 text-sm'>
            <h5 className='font-semibold text-lg'>{section.title}</h5>
            {section.links.map((item) => (
              <Link href='#'
                    key={item}
                    className='block hover:text-blue-600 transform transition-transform duration-300 ease-in-out hover:translate-x-2'
                    >
                  {item}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
