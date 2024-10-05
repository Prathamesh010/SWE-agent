import MacBar from "../MacBar";
import workspaceLogo from "../../assets/panel_icons/workspace.png";
import "../../static/logPanel.css";
import { Button } from "react-bootstrap";
import { Clipboard } from "react-bootstrap-icons";
import { copyToClipboard } from "../utils/utils";

const LogPanel = ({ logs, logsRef, isComputing }) => {
  const handleCopy = async () => {
    const contentToCopy = document.getElementById("logContent").innerText;
    await copyToClipboard(contentToCopy);
  };

  return (
    <div id="logPanel" className="logPanel">
      <MacBar logo={workspaceLogo} title="Log file" dark={true} />
      <div className="scrollableDiv" ref={logsRef}>
        <div className="innerDiv">
          <pre id="logContent">{logs}</pre>
          <div style={{ clear: "both", marginTop: "1em" }} />
        </div>
        {!isComputing && logs && (
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <Button
              variant="light"
              onClick={handleCopy}
              style={{ marginBottom: 20, marginRight: 20 }}
            >
              <Clipboard /> Copy to clipboard
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogPanel;
