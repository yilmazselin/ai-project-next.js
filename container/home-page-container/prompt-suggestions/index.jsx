"use client";
import { Tag } from "@/components/tag";
import { SUGGESTIONS } from "./constants";
import styles from "./styles.module.scss";
import { useHomepage } from "../use-homepage";

function PromptSuggestions() {
  const {copyPrompt} = useHomepage();

  return (
    <div className={styles.promptSuggestions}>
      <h3 className={styles.title}>
        Nothing in mind? Try one of these prompts:
      </h3>
      <div className={styles.suggestions}>
        {SUGGESTIONS.map(({ title, id }) => (
          <Tag key={id} title={title} onClick={copyPrompt} />
        ))}
      </div>
    </div>
  );
}

export { PromptSuggestions };