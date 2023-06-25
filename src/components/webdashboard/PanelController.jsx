import SidePanel from "./SidePanel/SidePanel";
import MainPanel from "./MainPanel/MainPanel";
export default function PanelController(props) {
  return (
    <>
      <SidePanel mobile={props.mobile} />
      <MainPanel mobile={props.mobile}>{props.children}</MainPanel>
    </>
  );
}
