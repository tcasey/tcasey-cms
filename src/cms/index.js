import CMS from 'netlify-cms'

// import HomePagePreview from './preview-templates/HomePagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProjectPagePreview from './preview-templates/ProjectPagePreview'

// import FooterPreview from './preview-templates/FooterPreview'
// import NavbarPreview from './preview-templates/NavbarPreview'

// CMS.registerPreviewTemplate('home', HomePagePreview)
// CMS.registerPreviewTemplate('footer', FooterPreview)
// CMS.registerPreviewTemplate('navbar', NavbarPreview)
CMS.registerPreviewTemplate('bio', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('projects', ProjectPagePreview)
