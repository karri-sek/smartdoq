const videoMapSlice = 'PrismicBlogpostBodyVideoMapSlice'
const pdfBodyName = 'PrismicBlogpostBodyPdfslice'
const socialSliceName = 'PrismicBlogpostBodySocial'
const menuSliceName = 'PrismicBlogpostBodyMenu'
const websiteMeta = 'PrismicBlogpostBodyWebsitemeta'

export const getWebsiteHeaderData = data => {
  const websiteData = data.prismicBlogpost.data
  let logoUrl = websiteData.website_main_logo.url;
  logoUrl = logoUrl.substring(0, logoUrl.indexOf('?auto'))

  return {
    backgroundImage: websiteData.website_background_image.url,
    logoImage: logoUrl,
    name: websiteData.name,
    logoDescription: websiteData.logo_description.text,
    footerLineImage: websiteData.footer_line_image.url,
    footerImage: websiteData.footer_image.url,
    footerLink: websiteData.footer_image_url?websiteData.footer_image_url.url:'none'
  }
}

export const getVideoMapSlice = data => {
  console.log("")
  return data.prismicBlogpost.data.body
    .filter(item => item['__typename'] === videoMapSlice)
    .map(i => i.primary)[0]
  //return embedVideo && embedVideo.embed_video_url ? embedVideo.embed_video_url.html: null;
}

export const getPDFSlice = data => {
  return data.prismicBlogpost.data.body
    .filter(item => item['__typename'] === pdfBodyName)
    .map(i => i.primary)[0];
}

export const getPDFDocuments = data => {
  let documents = data.prismicBlogpost.data.body
    .filter(item => item['__typename'] === pdfBodyName)
    .map(i => i.primary)[0]
  var result = []
  documents &&
    Object.keys(documents).map(k => {
      if (documents[k] && documents[k].name && documents[k].name.indexOf('.pdf') > 0) {
        result.push(documents[k])
      }
    })
  return result
}

export const getMenuData = data => {
  return data.prismicBlogpost.data.body
    .filter(item => item['__typename'] === menuSliceName)
    .map(i => i.primary)[0]
}

export const getSocialUrls = data => {
  return data.prismicBlogpost.data.body
    .filter(item => item['__typename'] === socialSliceName)
    .map(i => i.primary)[0]
}

export const getWebsiteMeta = data => {
  return data.prismicBlogpost.data.body
    .filter(item => item['__typename'] === websiteMeta)
    .map(i => i.primary)[0]
}

export const showRightMenu = menuData => {
  if(menuData.show_right_menu === null){
    return true;
  }else{
    return menuData.show_right_menu;
  }
}

export const menuStyle = (menuData, place)=>{
  const bgColor = (place ==='left')? menuData.menu_left_icon_bgcolor: menuData.menu_right_icon_bgcolor;
  const bgImageURL = (place ==='left')? menuData.menu_left_icon.url: menuData.menu_right_icon.url;
 return { 
        backgroundColor: amendMenuBGColor(bgColor), 
        backgroundImage: getImageURL(bgImageURL)
    }
}
export const getImageURL = (url) => url.substring(0, url.indexOf('?auto'))
export const amendMenuBGColor = ccode =>  ccode === '#FFFFFF'? 'none': ccode;
