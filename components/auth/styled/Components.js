import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  with: 100vw;
  height: 100vh;
  background-color: #fff;
`;

export const Container = styled.div`
  position: relative;
  border-radius: 25px;
  box-shadow: 2px 7px 13px 15px rgba(20, 19, 19, 0.51);
  -webkit-box-shadow: 2px 7px 13px 15px rgba(20, 19, 19, 0.51);
  -moz-box-shadow: 2px 7px 13px 15px rgba(20, 19, 19, 0.51);
  overflow: hidden;
  width: 70vw;
  max-width: 90vh;
  min-height: 90vh;
  margin: auto;
`;

export const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(100%);` : null}
`;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  margin-left: 12px;

  ${(props) =>
    props.signinIn !== true
      ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
      : null};
`;

export const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
  ${(props) =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  font-weight: bold;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
  ${(props) => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  transform: translateX(-20%);
  ${(props) => (props.signinIn !== true ? `transform: translateX(0);` : null)}
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);
  ${(props) => (props.signinIn !== true ? `transform: translateX(20%);` : null)}
`;

export const Title = styled.h1`
  font-weight: bold;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0.9px;
  margin: 20px 0 30px;
  color: rgba(0, 0, 0, 0.8);
`;

export const TitleLevel3 = styled.h3`
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
  text-transform: capitalize;
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;

export const Button = styled.button`
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    border: 1px solid #ff4b2b;
    background: rgba(255, 0, 0, 0.4);
    color: #ffffff;
    cursor: not-allowed;
  }
`;

export const SignInButton = styled.button`
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
  border-radius: 20px;

  transition: 2s ease-in-out
  border-radius: 20px;
  border: 1px solid #000;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const SignUpButton = styled.button`
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);

  border-radius: 20px;
  border: 1px solid #000;
  background-color: #ff4b2b;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;
export const SocialButton = styled.button`
  width: 2.45em;
  height: 2.45em;
  padding: 0;
  margin: 1.5rem;
  border: #888 solid 1px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
`;
