import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = ({ children, themeToggler, themeMode }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const pages = {
    landings: {
      title: 'Services',
      id: 'landing-pages',
      children: {
        web: {
          groupTitle: 'Web',
          pages: [
            {
              title: 'Quick Consultation',
              href: 'coming-soon',
            },
            {
              title: 'In Clinic Appointment',
              href: 'coming-soon',
            },
            {
              title: 'Online Consultation ',
              href: 'coming-soon',
            },
          ],
        },
      },
    },
    pages: {
      title: 'More',
      id: 'supported-pages',
      children: {
        career: {
          groupTitle: 'Career',
          pages: [
            {
              title: 'Lising',
              href: '/career-listing',
            },
            {
              title: 'Lising Minimal',
              href: '/career-listing-minimal',
            },
            {
              title: 'Opening',
              href: '/career-opening',
            },
          ],
        },

        contact: {
          groupTitle: 'Contact',
          pages: [
            {
              title: 'Reach View',
              href: '/contact-page',
            },
            {
              title: 'Sidebar Map',
              href: '/contact-sidebar-map',
            },
            {
              title: 'Cover',
              href: '/contact-page-cover',
            },
          ],
        },
        blog: {
          groupTitle: 'Blog',
          pages: [
            {
              title: 'Newsroom',
              href: '/blog-newsroom',
            },
            {
              title: 'Reach View',
              href: '/blog-reach-view',
            },
            {
              title: 'Search',
              href: '/blog-search',
            },
            {
              title: 'Article',
              href: '/blog-article',
            },
          ],
        },
        portfolio: {
          groupTitle: 'Portfolio',
          pages: [
            {
              title: 'Basic',
              href: '/portfolio-page',
            },
            {
              title: 'Masonry',
              href: '/portfolio-masonry',
            },
            {
              title: 'Grid View',
              href: '/portfolio-grid',
            },
            {
              title: 'Parallax Effect',
              href: '/agency',
            },
          ],
        },
      },
    },
    account: {
      title: 'Account',
      id: 'account',
      children: {
        settings: {
          groupTitle: 'Settings',
          pages: [
            {
              title: 'General',
              href: '/account/?pid=general',
            },
            {
              title: 'Security',
              href: '/account/?pid=security',
            },
            {
              title: 'Notifications',
              href: '/account/?pid=notifications',
            },
            {
              title: 'Billing',
              href: '/account/?pid=billing',
            },
          ],
        },
        signup: {
          groupTitle: 'Sign up',
          pages: [
            {
              title: 'Simple',
              href: '/signup-simple',
            },
            {
              title: 'Cover',
              href: '/signup-cover',
            },
          ],
        },
        signin: {
          groupTitle: 'Sign in',
          pages: [
            {
              title: 'Simple',
              href: '/signin-simple',
            },
            {
              title: 'Cover',
              href: '/signin-cover',
            },
          ],
        },
        password: {
          groupTitle: 'Password reset',
          pages: [
            {
              title: 'Simple',
              href: '/password-reset-simple',
            },
            {
              title: 'Cover',
              href: '/password-reset-cover',
            },
          ],
        },
        error: {
          groupTitle: 'Error',
          pages: [
            {
              title: 'Simple',
              href: '/not-found',
            },
            {
              title: 'Cover',
              href: '/not-found-cover',
            },
          ],
        },
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const footer_links = {
    landings: {
      children: {
        services: {
          groupTitle: 'ONLINE AAROGYA',
          pages: [
            {
              title: 'About ',
              href: '/about ',
            },
            {
              title: 'Careers',
              href: '/careers',
            },
            {
              title: 'Terms of Use',
              href: '/terms-of-Use ',
            },
            {
              title: 'Privacy Policy',
              href: '/privacy-policy',
            },
            {
              title: 'Data Security',
              href: '/data-security ',
            },
            {
              title: 'Contact us',
              href: '/contact-us',
            }
      
        
          ],
        },
        apps: {
          groupTitle: '',
          pages: [
            {
              title: '',
              // href: '/desktop-app',
            },
            {
              title: '',
              // href: '/mobile-app',
            },
          ],
        },
        web: {
          groupTitle: 'CORPORATES ',
          pages: [
            {
              title: 'Corporates wellness',
              href: '#',
            },
          ],
        },
        company: {
          groupTitle: '',
          pages: [
            {
              title: '',
              // href: '/about',
            },
            {
              title: '',
            },
            {
              title: '',
              // href: '/pricing',
            },
            {
              title: '',
              // href: '/company-terms',
            },
            {
              title: '',
              // href: '/company-terms',
            },
            {
              title: '',
              // href: '/company-terms',
            },
          ],
        },
      },
    },
    pages: {
      title: 'More',
      id: 'supported-pages',
      children: {
        career: {
          groupTitle: 'FOR PATIENTS',
          pages: [
            {
              title: 'Search for doctors',
              href: '/doctor-search',
            },
            {
              title: 'Search for clinics',
              href: '/doctor-search',
            },
            {
              title: 'Order a Medicine',
              href: '/medicine-order',
            },
            {
              title: 'Book a Lab Test',
              href: '/book-lab-test',
            },
            {
              title: 'Care at home',
              href: '/care-at-home',
            },
            {
              title: 'Medifiles',
              href: '/medifiles',
            },
            {
              title: 'Packages',
              href: '/packages',
            },
        
          ],
        },
        helpCenter: {
          groupTitle: '',
          pages: [
            {
              title: '',
              // href: '/help-center',
            },
            {
              title: '',
              // href: '/help-center-article',
            },
            {
              title: '',
              // href: '/help-center-article',
            },
          ],
        },
        company: {
          groupTitle: '',
          pages: [
            {
              title: '',
              // href: '/about',
            },
            {
              title: '',
            },
            {
              title: '',
              // href: '/pricing',
            },
            {
              title: '',
              // href: '/company-terms',
            },
            {
              title: '',
              // href: '/company-terms',
            },
            {
              title: '',
              // href: '/company-terms',
            },
          ],
        },
        contact: {
          groupTitle: 'Contact',
          pages: [
            {
              title: 'Reach View',
              href: '/contact-page',
            },
            {
              title: 'Sidebar Map',
              href: '/contact-sidebar-map',
            },
            {
              title: 'Cover',
              href: '/contact-page-cover',
            },
          ],
        },
        blog: {
          groupTitle: ' ',
          pages: [
            {
              title: '',
              href: '#',
            },
          
          ],
        },
        portfolio: {
          groupTitle: 'FOR DOCTORS',
          pages: [
            {
              title: 'Online Aarogya Profile',
              href: '#',
            },
            {
              title: 'Online Doctor Consultation',
              href: '#',
            },
            {
              title: 'In-Clinic Consultation',
              href: '#',
            },
            {
              title: 'Join Us',
              href: '#',
            },
          ],
        },
      },
    },
    account: {
      title: 'Account',
      id: 'account',
      children: {
        settings: {
          groupTitle: 'Settings',
          pages: [
            {
              title: 'General',
              href: '/account/?pid=general',
            },
            {
              title: 'Security',
              href: '/account/?pid=security',
            },
            {
              title: 'Notifications',
              href: '/account/?pid=notifications',
            },
            {
              title: 'Billing',
              href: '/account/?pid=billing',
            },
          ],
        },
        signup: {
          groupTitle: 'Sign up',
          pages: [
            {
              title: 'Simple',
              href: '/signup-simple',
            },
            {
              title: 'Cover',
              href: '/signup-cover',
            },
          ],
        },
        signin: {
          groupTitle: 'Sign in',
          pages: [
            {
              title: 'Simple',
              href: '/signin-simple',
            },
            {
              title: 'Cover',
              href: '/signin-cover',
            },
          ],
        },
        password: {
          groupTitle: 'Password reset',
          pages: [
            {
              title: 'Simple',
              href: '/password-reset-simple',
            },
            {
              title: 'Cover',
              href: '/password-reset-cover',
            },
          ],
        },
        error: {
          groupTitle: 'Error',
          pages: [
            {
              title: 'Simple',
              href: '/not-found',
            },
            {
              title: 'Cover',
              href: '/not-found-cover',
            },
          ],
        },
      },
    },
  };

  return (
    <div
      style={{ overflow: 'hidden' }}
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        themeMode={themeMode}
        themeToggler={themeToggler}
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>{children}</main>
      <Footer pages={footer_links} themeMode={themeMode} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
