import FooterMinimal from "./FooterMinimal";


const Footer = (props) => {
    if (props.type === 'minimal'){
        return (
            <FooterMinimal/>
        )
    }
}


export default Footer;