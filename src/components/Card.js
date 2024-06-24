import { CardWrap, CardStyled, MainContentWrapperStyled, IntroductionWrapperStyled } from '../styled/StyledCard'
import { ImageWrapperStyled, ImageLayer } from '../styled/ImageStyled'
import { HeadingStyled } from '../styled/Headings'
import Introduction from './Introduction'
import About from './About'
import Email from './Email'
import location from '../assets/profile_final_2.png'
import { Button } from '../styled/UserInputSection'
import { Tilt } from 'react-tilt'

const Card = (props) => {
    var src = {
        img_src: props.image_src
    };
    if (document.querySelector("#image") == null || document.querySelector("#image").files.length === 0) {
        src.img_src = location
    }

    // card JSX element
    const cardWithStylesJSX = (
        <CardStyled className="card" id="card" colors={props.colors}>
            <ImageWrapperStyled>
                <ImageLayer image_src={src.img_src} />
            </ImageWrapperStyled>
            <MainContentWrapperStyled>
                <IntroductionWrapperStyled>
                    <Introduction name={props.name} occupation={props.occupation} website={props.website} colors={props.colors} />
                    <About about={props.about} services={props.services} colors={props.colors} />
                    <Email email={props.email} colors={props.colors} />
                </IntroductionWrapperStyled>
            </MainContentWrapperStyled>
        </CardStyled>
    );

    return (
        <>
            <CardWrap id="cardwrap">
                <HeadingStyled>Preview</HeadingStyled>
                { props.breakpoint <= 43 ? cardWithStylesJSX : <Tilt className="Tilt" options={{ max: 20, scale: 1.01, perspective: 1100, speed: 500, reverse: false, transition: true }}>{cardWithStylesJSX}</Tilt> }
                <Button className="for-mobile download_btn" disabled={props.downloadable ? false : true} title={props.downloadable ? "" : "Please fill out all fields"} onClick={() => { props.download_fun() }}><div className="content">Download<i className={props.download_state ? "fas fa-circle-notch load" : "fas fa-download"}></i>{!props.downloadable && <div className="warn">Please fill out all the fields</div>}</div></Button>
            </CardWrap>
        </>
    )
}

Card.defaultProps = {
    name: "Jafar Sadiq A",
    email: "ajafarsadiq2002@gmail.com",
    occupation: "Machine Learning Engineer",
    linkedin: "https://www.linkedin.com/in/jafar-sadiq-a-b7168420b/",
    about: "Hey, myself Jafar and I work as an AI Engineer with expertise in machine learning, full-stack development, and data analysis, having developed innovative AI platforms and web applications.",
    services: "I offer professional services including AI and machine learning development, full-stack web development, data analysis and visualization, and project consultation.",
    twitter: "https://twitter.com/jafarsadiq2002",
    github: "https://github.com/ajafarsadiq2002",
    instagram: "https://instagram.com/_.starlight_dreamer._",
    image_src: location
}

export default Card
