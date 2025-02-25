# ... existing sphinx configuration ...

# SEO Configuration
html_title = "Nigeria States and Regions API Documentation"
html_short_title = "Nigeria API Docs"

# Meta tags for SEO
html_meta = {
    'description': 'Official API documentation for Nigeria states and regions, providing comprehensive data about all 36 states, FCT, and 6 geopolitical zones including population, coordinates, languages, and local government areas',
    'keywords': 'Nigeria API, Nigerian states, geopolitical zones, LGAs, state capitals, Nigerian demographics, population data, state coordinates, Nigerian languages, state industries, Nigeria documentation, African API',
    'author': 'Nigeria API Documentation Team',
    'robots': 'index, follow',
    'viewport': 'width=device-width, initial-scale=1.0',
    'language': 'en-NG'
}

# Open Graph metadata for social sharing
ogp_site_url = 'https://nigeriaapidocs.readthedocs.io/'
ogp_site_name = 'Nigeria States API Documentation'
ogp_description_length = 300
ogp_type = 'website'
ogp_image = '_static/nigeria-api-logo.png'

# Twitter Card metadata
html_meta.update({
    'twitter:card': 'summary_large_image',
    'twitter:site': '@NigeriaAPI',
    'twitter:title': 'Nigeria States and Regions API Documentation',
    'twitter:description': 'Complete API documentation for Nigerian states, regions, and demographic data',
    'twitter:image': 'https://nigeriaapidocs.readthedocs.io/static/nigeria-api-logo.png'
})
# ... existing configuration ...

# Schema.org JSON-LD
html_js_files = ['schema.js']

# ... existing configuration ...


# Additional SEO settings
html_baseurl = 'https://nigeriaapidocs.readthedocs.io'
html_canonical_url = 'https://nigeriaapidocs.readthedocs.io'
sitemap_url_scheme = '{link}'
html_theme = 'sphinx_rtd_theme'

# Generate sitemap
html_static_path = ['_static']
html_extra_path = ['robots.txt', 'sitemap.xml']
# html_additional_files = ['_static/google45135a5f9da3b347.html']

# html_meta.update({
#     'google-site-verification': 'google45135a5f9da3b347.html'
# })

extensions = [
    # ... your existing extensions ...
     'sphinx.ext.autodoc',
    'sphinx_sitemap',
    'sphinxext.opengraph',
    'sphinx_rtd_theme'
]