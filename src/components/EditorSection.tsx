import { editorSection } from "../data";

const EditorSection = () => {
  return (
    <section className="editor">
      <h2>Designed for the future</h2>
      <div className="editor__info full-width-split-screen">
        <img
          src="./images/illustration-editor-mobile.svg"
          alt=""
          className="mobile"
        />
        <img
          src="./images/illustration-editor-desktop.svg"
          alt=""
          className="desktop"
        />
        <div>
          {editorSection.map((el) => (
            <div className="editor__desc" key={el.id}>
              <h3>{el.title}</h3>
              <p>{el.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default EditorSection;
