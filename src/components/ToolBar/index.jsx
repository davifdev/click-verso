import styles from "./style.module.css";

export const ToolBar = ({ insertText }) => {
  return (
    <div className={styles.toolbar}>
      <button type="button" onClick={() => insertText("# ", "")}>h1</button>
      <button type="button" onClick={() => insertText("## ", "")}>h2</button>
      <button type="button" onClick={() => insertText("**", "**")}>b</button>
      <button type="button" onClick={() => insertText("*", "*")}>em</button>
      <button type="button" onClick={() => insertText("```", "```")}>code</button>
      <button type="button" onClick={() => insertText("", "<br/>")}>br</button>
      <button type="button" onClick={() => insertText("- ", "")}>li</button>
      <button type="button" onClick={() => insertText("\n--- \n", "")}>hr</button>
      <button type="button" onClick={() => insertText("![","]()")}>img</button>
    </div>
  );
};
