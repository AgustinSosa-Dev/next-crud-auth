import * as Component from "./styled/Components";

const LeftPanel = () => {
  return (
    <>
      <Component.Subtitle className="pb-3">
        To know the corresponding validation criteria:
      </Component.Subtitle>
      <Component.Subtitle className=" pb-24">
        Please, place the mouse pointer over the form icons.
      </Component.Subtitle>
      <Component.Title className="uppercase pb-24 tracking-[.25em]">
        welcome back!
      </Component.Title>
      <Component.Paragraph>
        To keep connected with us please login with your personal info.
      </Component.Paragraph>
    </>
  );
};

export default LeftPanel;
