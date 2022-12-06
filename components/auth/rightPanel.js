import * as Component from "./styled/Components";

const RightPanel = () => {
  return (
    <>
      <Component.Subtitle className="pb-3">
        To know the corresponding validation criteria:
      </Component.Subtitle>
      <Component.Subtitle className="pb-24">
        Please, place the mouse pointer over the form icons.
      </Component.Subtitle>
      <Component.Title className="uppercase tracking-[.25em] pb-24">
        Welcome!
      </Component.Title>
      <Component.Subtitle className="pb-24">
        Creating an account is free...
        <br />
        <br />
        And it will only take you a couple of seconds.
      </Component.Subtitle>
      <Component.Paragraph>
        Enter Your personal details and start journey with us
      </Component.Paragraph>
    </>
  );
};

export default RightPanel;
