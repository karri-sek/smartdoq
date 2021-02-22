import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout/';
import ThreeD from '../components/ThreeD';
import PDFLogo from '../components/PDFLogo';
import Video from '../components/Video';
import Degree from '../components/Degree';
import PrismicLogo from '../components/PrismicLogo';
import OverlayModel from '../components/overlayModel';
import VideoOverlay from '../components/videoOverlay';
import ThreeDOverlay from '../components/threeDOverlay';
import PdfCarousel from '../components/pdfCarousel';
import Wrapper from '../components/wrapper';
import DegreeOverlay from '../components/DegreeOverlay';
import EmptyOverlayModel from '../components/emptyOverlayModel';
import Metadata from '../components/metadata';
import LeftMenu from '../components/menu/leftMenu';
import RightMenu from '../components/menu/rightMenu';
import LogoDesc from '../components/LogoDesc';
import '../globalStyles.css';
import '../portret.css';
import '../socialIcons.css';
import '../hamburgers.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    getWebsiteHeaderData,
    getPDFSlice,
    getPDFDocuments,
    getVideoMapSlice,
    getSocialUrls,
    getMenuData,
    getWebsiteMeta,
    showRightMenu,
    menuStyle,
} from '../utils/index';
const FooterLine = styled.img`
    left: 5%;
    bottom: 7%;
    width: 78%;
    height: 0.3%;
    position: absolute;
    outline: none;
    @media (orientation: portrait) {
        bottom: 8%;
        width: 70%;
    }
`;

export default function Home(props) {
    const { data } = props;
    const websiteHeaderData = getWebsiteHeaderData(data);
    const pdfSlice = getPDFSlice(data);
    const pdfDocuments = getPDFDocuments(data);
    const videoMapSlice = getVideoMapSlice(data);
    const socialURLs = getSocialUrls(data);
    const menuData = getMenuData(data);
    const websiteMeta = getWebsiteMeta(data);

    const [open, setOpen] = React.useState(false);
    const [openVideOverlay, setVideoOverlay] = React.useState(false);
    const [openthreeDOverlay, setThreeDOverlay] = React.useState(false);
    const [showEmptyOverlay, setShowEmptyOverlay] = React.useState(false);
    const [openPdfOverlay, setPdfOverlay] = React.useState(false);
    const [openDegreeOverlay, setOpenDegreeOverlay] = React.useState(false);
    return (
        <>
            <Layout>
                <Metadata websiteMeta={websiteMeta} uid={data.prismicBlogpost.uid} />
                <Wrapper bgurl={websiteHeaderData.backgroundImage}>
                    {!open && (
                        <LeftMenu
                            src={menuData.menu_left_icon.url}
                            type="image"
                            style={menuStyle(menuData, 'left')}
                            onClick={() => setOpen(!open)}
                        />
                    )}
                    {showRightMenu(menuData) && !showEmptyOverlay && !open && (
                        <RightMenu
                            src={menuData.menu_right_icon.url}
                            type="image"
                            style={menuStyle(menuData, 'right')}
                            onClick={() => setShowEmptyOverlay(!showEmptyOverlay)}
                        />
                    )}
                    <LogoDesc logo={websiteHeaderData.logoImage} desc={websiteHeaderData.logoDescription} />
                    <div className="controlFlex">
                        <ThreeD
                            src={videoMapSlice.three_d_model_image.url}
                            type="image"
                            value=""
                            className="img-fluid box"
                            onClick={() => setThreeDOverlay(!openthreeDOverlay)}
                        />
                        <PDFLogo
                            src={pdfSlice.pdf_image.url}
                            type="image"
                            value=""
                            className="img-fluid box"
                            onClick={() => setPdfOverlay(!openPdfOverlay)}
                        />
                        <Video
                            src={videoMapSlice.video_image.url}
                            type="image"
                            value=""
                            className="img-fluid box"
                            onClick={() => setVideoOverlay(!openVideOverlay)}
                        />
                        {/* 360 degree which is not embed html*/}
                        <Degree
                            src={videoMapSlice.three_sixty_degree_image.url}
                            type="image"
                            value=""
                            className="img-fluid box"
                            onClick={() => setOpenDegreeOverlay(!openDegreeOverlay)}
                        />
                    </div>
                    <PrismicLogo
                        src={websiteHeaderData.footerImage}
                        type="image"
                        value=""
                        onClick={() => window.open(websiteHeaderData.footerLink)}
                        className="img-fluid"
                    />
                    <FooterLine src={websiteHeaderData.footerLineImage} className="img-fluid" />
                </Wrapper>

                {openDegreeOverlay && (
                    <DegreeOverlay
                        removeOverlay={() => {
                            setOpenDegreeOverlay(!openDegreeOverlay);
                        }}
                        data={videoMapSlice}
                    />
                )}
                {open && <OverlayModel removeOverlay={() => setOpen(!open)} socialURLs={socialURLs} />}

                {showEmptyOverlay && (
                    <EmptyOverlayModel
                        menuData={menuData}
                        removeOverlay={() => setShowEmptyOverlay(!showEmptyOverlay)}
                    />
                )}

                {openthreeDOverlay && (
                    <ThreeDOverlay data={videoMapSlice} removeOverlay={() => setThreeDOverlay(!openthreeDOverlay)} />
                )}
                {openVideOverlay && (
                    <VideoOverlay data={videoMapSlice} removeOverlay={() => setVideoOverlay(!openVideOverlay)} />
                )}
                {openPdfOverlay && (
                    <PdfCarousel
                        pdfSlice={pdfSlice}
                        documents={pdfDocuments}
                        removeOverlay={() => setPdfOverlay(!openPdfOverlay)}
                    />
                )}
            </Layout>
        </>
    );
}

export const pageQuery = graphql`
    query($uid: String) {
        prismicBlogpost(uid: { eq: $uid }) {
            uid
            data {
                website_main_logo {
                    alt
                    url
                }
                name {
                    html
                    text
                }
                website_background_image {
                    alt
                    url
                }
                footer_line_image {
                    alt
                    url
                }
                footer_image {
                    alt
                    url
                }
                footer_image_url {
                    url
                }
                logo_description {
                    text
                }
                body {
                    ... on PrismicBlogpostBodyPdfslice {
                        primary {
                            pdf_image {
                                url
                            }
                            document_1 {
                                url
                            }
                            document_2 {
                                url
                            }
                            document_3 {
                                url
                            }
                            document_image_1 {
                                url
                            }
                            document_image_2 {
                                url
                            }
                            document_image_3 {
                                url
                            }
                        }
                    }
                    ... on PrismicBlogpostBodyVideoMapSlice {
                        primary {
                            three_sixty_degree_url {
                                url
                            }
                            three_sixty_degree_image {
                                url
                                alt
                            }
                            video_url {
                                embed_url
                                html
                            }
                            image_video {
                                url
                            }
                            video_image {
                                url
                                alt
                            }
                            three_d_model_image {
                                url
                                alt
                            }
                            three_d_model_embed_url {
                                html
                                embed_url
                            }
                            image_video_1 {
                                url
                            }
                            video_url_1 {
                                embed_url
                                html
                            }
                            video_url_2 {
                                embed_url
                                html
                            }
                            toggle_the_moving_of_the_x_button_to_the_left
                        }
                    }
                    ... on PrismicBlogpostBodySocial {
                        primary {
                            instagram_url {
                                url
                            }
                            instagram_icon {
                                url
                                alt
                            }
                            facebook_url {
                                url
                            }
                            facebook_icon {
                                url
                                alt
                            }
                            linkedin_url {
                                url
                            }
                            linked_in_icon {
                                url
                                alt
                            }
                            whatsapp_url {
                                url
                            }
                            whatsapp_icon {
                                url
                                alt
                            }
                            mail_url {
                                url
                            }
                            mail_icon {
                                url
                            }
                            phone_number {
                                text
                            }
                            phone_icon {
                                url
                            }
                            location_url {
                                url
                            }
                            location_icon {
                                url
                            }
                            website_url {
                                url
                            }
                            website_icon {
                                url
                            }
                        }
                    }
                    ... on PrismicBlogpostBodyMenu {
                        primary {
                            show_right_menu
                            menu_left_icon {
                                url
                            }
                            menu_right_icon_bg_color
                            menu_right_icon {
                                url
                            }
                            menu_right_image_url_1 {
                                url
                            }
                            menu_right_image_1 {
                                url
                            }
                            menu_right_image_url_2 {
                                url
                            }
                            menu_right_image_2 {
                                url
                            }
                            menu_right_image_url_3 {
                                url
                            }
                            menu_right_image_3 {
                                url
                            }
                        }
                    }
                    ... on PrismicBlogpostBodyWebsitemeta {
                        primary {
                            title {
                                text
                            }
                            description {
                                text
                            }
                            meta_link_share_image {
                                url
                            }
                        }
                    }
                    ... on PrismicBlogpostBodySlider {
                        slice_type
                        items {
                            slide_image {
                                alt
                                copyright
                                url
                            }
                            slide_description {
                                html
                                text
                                raw
                            }
                            slide_caption
                            __typename
                        }
                    }
                    ... on PrismicBlogpostBodyVideo {
                        slice_type
                        items {
                            video {
                                embed_url
                                html
                            }
                            video_title {
                                text
                            }
                            __typename
                        }
                    }
                }
            }
        }
    }
`;
