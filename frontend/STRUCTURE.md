# Frontend File Structure

## CSS Files (Organized by Function)

All CSS files are located in the `css/` folder:

- **common.css** - Global styles, header, footer, navigation, container, and common utilities
- **sections.css** - Hero section, features, home section, courses, about, and contact sections
- **forms.css** - General form styles (inputs, labels, buttons, textarea)
- **auth.css** - Authentication-specific styles (login/signup forms)
- **utils.css** - Utility classes, message notifications, loading spinners, animations

## JavaScript Files (Organized by Function)

All JavaScript files are located in the `js/` folder:

- **api.js** - API helper functions (apiCall, token management, message display)
- **login.js** - Login form handler
- **signup.js** - Signup form handler
- **contact.js** - Contact form handler

## HTML Files

Each HTML file loads only the CSS and JS files it needs:

### Pages with Authentication:
- **login.html** - Uses: common.css, auth.css, forms.css, utils.css + api.js, login.js
- **signup.html** - Uses: common.css, auth.css, forms.css, utils.css + api.js, signup.js

### Pages with Forms:
- **contact.html** - Uses: common.css, sections.css, forms.css, utils.css + api.js, contact.js

### Static Pages:
- **index.html** - Uses: common.css, sections.css
- **home.html** - Uses: common.css, sections.css
- **course.html** - Uses: common.css, sections.css
- **about.html** - Uses: common.css, sections.css

## Benefits of This Structure

1. **Modularity** - Each CSS/JS file has a specific purpose
2. **Maintainability** - Easy to find and update specific styles/scripts
3. **Performance** - Only load what's needed on each page
4. **Readability** - All files are under 100 lines (except api.js which is a shared utility)
5. **Scalability** - Easy to add new features without cluttering existing files

## File Size Summary

- **CSS Files**: All under 200 lines
- **JS Files**: All under 50 lines (except api.js ~70 lines as shared utility)
- **HTML Files**: All under 75 lines

## Note

The old `style.css` file is still in the root directory but is no longer used. You can safely delete it if desired.

