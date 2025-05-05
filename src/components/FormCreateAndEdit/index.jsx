import styles from "./style.module.css";

import { ToolBar } from "../ToolBar";
import { useState, useRef } from "react";
import { useInsertPost } from "../../hooks/useInsertPost";
import { useAuthValue } from "../../context/useAuthContext";

import { marked } from "marked";

export const FormCreateAndEdit = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");

  const textareaRef = useRef();
  const { insertPost } = useInsertPost("posts");
  const { user } = useAuthValue();

  const renderText = () => {
    return { __html: marked(body) };
  };

  const insertText = (before, after) => {
    const textArea = textareaRef.current;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const previousText = textArea.value;
    const beforeText = previousText.slice(0, start);
    const selectText = previousText.slice(start, end);
    const afterText = previousText.slice(end);

    const newText = `${beforeText}${before}${selectText}${after}${afterText}`;

    setBody(newText);

    textArea.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      new URL(image);
    } catch (error) {
      console.log(error.message);
      setError("A imagem precisa ser uma URL");
    }

    if ((!title, !body, !image, !tags)) {
      setError("Preencha todos os campos!");
      return;
    }

    const tagsArray = tags.split(", ").map((tag) => tag.trim().toLowerCase());

    console.log(tagsArray);

    if (error) return;

    const objConfig = {
      title,
      body,
      image,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };

    await insertPost(objConfig);
  };

  return (
    <section className={styles.formCreateAndEdit}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Criar Postagem</h2>

        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.title_image}>
              <label>
                <strong>Título</strong>
                <input
                  type="text"
                  name="displayName"
                  placeholder="Crie um título"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>

              <label>
                <strong>Imagem</strong>
                <input
                  type="text"
                  name="email"
                  placeholder="URL da imagem"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </label>
            </div>

            <ToolBar insertText={insertText} />

            <textarea
              className={styles.textarea}
              placeholder="Digite seu contéudo"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              ref={textareaRef}
            ></textarea>

            <label>
              <strong>Tags</strong>
              <input
                type="text"
                name="tags"
                placeholder="Crie tags separadas por vírgula"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />
            </label>

            <button type="submit">Criar</button>
          </div>

          <div
            className={styles.right}
            dangerouslySetInnerHTML={renderText()}
          />
        </div>
      </form>
    </section>
  );
};
