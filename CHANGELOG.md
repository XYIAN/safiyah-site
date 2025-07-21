# Changelog

## [1.5.3] - 2024-06-09

### Changed

- Removed all unused variables and imports across the codebase
- Cleaned up all linter warnings (except Next.js <img> warning)
- Verified build and linter are error-free

## [1.5.2] - 2024-06-09

### Changed

- Moved all static assets (backgrounds, icons) to the root public directory for best Next.js/Netlify compatibility
- Updated all image references in codebase to use root public paths (e.g., /bg1.png, /main-icon.png)
- Improved section backgrounds to be more transparent and purple, especially for mobile

## [1.5.1] - 2024-06-09

### Fixed

- Made /links a client component and fixed icon usage for Next.js/Netlify compatibility
- Ensured header is always fixed and not affected by background animation
- Polished layout and centering for both Netlify and localhost compatibility
- Ran local production build to verify all changes

## [1.5.0] - 2024-06-09

### Added

- Glossy, glassmorphic Hero section for a more professional look
- Links page with PrimeReact Cards and Buttons for LinkedIn and Email
- Certifications & Education page with reusable list components and PrimeReact Cards
- PrimeFlex installed and integrated for robust, responsive layouts

### Changed

- All main layouts and sections now use PrimeFlex utilities for spacing, alignment, and responsiveness
- Improved SEO and link sharing metadata for all main pages
- Header and Hero section layout and spacing fixed for both mobile and desktop

### Fixed

- Version number now matches release state
- Header no longer cut off and has proper padding
- Hero section always uses a column layout for better focus and centering
