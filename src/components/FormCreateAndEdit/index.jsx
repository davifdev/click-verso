import styles from "./style.module.css";

import { useState, useRef } from "react";
import { useInsertPost } from "../../hooks/useInsertPost";
import { useAuthValue } from "../../context/useAuthContext";
import { useNavigate } from "react-router-dom";

export const FormCreateAndEdit = () => {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const textareaRef = useRef();
  const { insertPost, response } = useInsertPost("posts");
  const { user } = useAuthValue();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      new URL(image);
    } catch (error) {
      console.log(error.message);
      setErrorMsg("A imagem precisa ser uma URL");
      return;
    }

    if ((!title, !body, !image, !tags)) {
      setErrorMsg("Preencha todos os campos!");
      return;
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    if (errorMsg) return;

    const objConfig = {
      title,
      body,
      image,
      tagsArray,
      description,
      uid: user.uid,
      createdBy: user.displayName,
    };

    await insertPost(objConfig);

    navigate("/");
  };

  return (
    <section className={styles.formCreateAndEdit}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>Criar Postagem</h2>
        <div className={styles.title_image}>
          <label>
            <strong>Título</strong>
            <input
              type="text"
              name="displayName"
              placeholder="Crie um título"
              value={title}
              required
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

        <textarea
          className={styles.textarea}
          placeholder="Digite seu contéudo..."
          value={body}
          required
          onChange={(e) => setBody(e.target.value)}
          ref={textareaRef}
        ></textarea>

        <label>
          <strong>Descrição</strong>
          <input
            type="text"
            name="tags"
            placeholder="Escreva uma descrição para o seu post"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <strong>Tags</strong>
          <input
            type="text"
            name="tags"
            placeholder="Crie tags separadas por vírgula"
            value={tags}
            required
            onChange={(e) => setTags(e.target.value)}
          />
        </label>

        {errorMsg && <p className={styles.error_message}>{errorMsg}</p>}
        {response.error && (
          <p className={styles.error_message}>{response.error}</p>
        )}

        {response.loading && (
          <button type="submit" disabled>
            Aguarde...
          </button>
        )}
        {!response.loading && <button type="submit">Criar</button>}
      </form>
    </section>
  );
};
