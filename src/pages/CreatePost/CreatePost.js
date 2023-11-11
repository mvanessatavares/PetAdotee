import styles from "./CreatePost.module.css";

import { useState, useEffect } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../contexts/AuthContext";
import { useFetch } from "../../hooks/useFetch";

const url = "http://localhost:3000/post"

const CreatePost = () => {
  const [post, setPost] = useState([])
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("posts");

  const {data: items, httpConfig, loading, error} = useFetch(url)


console.log(post)


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    console.log(tagsArray);

    console.log({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if(formError) return

    
    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    //httpConfig(animais, "POST")

   
    navigate("/adote");
    
  };

  return (
    <div className={styles.create_post}>
      <h2>Adcionar animal</h2>
      <p>Adcione o animal que deseja divulgar para a adoção!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="text"
            required
            placeholder="Escreva o nome do PET"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira o URL da imagem"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Informações do PET:</span>
          <textarea
            name="body"
            required
            placeholder="Insira todas as informações desejada"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        
        <label>
          <span>Tags do tipo gato ou cachorro:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira a tag correspondente ao animal separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}

          />
        </label>
        {!response.loading && <button className="btn">Postar!</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde.. .
          </button>
        )}
        {(response.error || formError) && (
          <p className="error">{response.error || formError}</p>
        )}
      </form>
      <ul>
    
            {post &&
             post.map((post)=>(
                <li key={post.id}>
                    <h3>{post.title} - {post.body}</h3>
                    <img src={post.image} alt={post.title} />
                </li>
              
            ))}
        </ul>
    </div>
  );
};

export default CreatePost;