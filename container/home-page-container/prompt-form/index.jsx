"use client"
import { useHomepage } from "../use-homepage";
import styles from "./styles.module.scss";

function PromptForm() {
    const {prompt, setPrompt, generateImage} = useHomepage();

    const handlePromptChange  = (event) => {
        setPrompt(event.target.value)   
    }

    const handleFormSubmit = (event) => {
      event.preventDefault();
      generateImage();
    }

  return (
    <div className={styles.promptForm}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <textarea
          className={styles.promptTextarea}
          rows={2}
          type="text"
          required
          value={prompt}
          onChange={handlePromptChange}
          placeholder="An orchestra of characters playing instruments on fire in a chapel + surrounded by ghosts made out of chiseled marble"
        />
        <button className={styles.generateButton} type="submit">
            Generate
        </button>
      </form>
    </div>
  );
}

export { PromptForm };
