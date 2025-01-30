import { IGoogleSingnInButtonProps } from "./GoogleSignInButton.props";

export const GoogleSignInButton: React.FC<IGoogleSingnInButtonProps> = ( {onClick}) => {

    return <div id="google-login-button" onClick={onClick}></div>;
};