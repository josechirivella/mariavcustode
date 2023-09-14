import {ref} from "vue";
import {marked} from "marked";

export function markdownToHTML(content: string) {
  const markdown = ref(content);
  const result = ref('');

  result.value = marked(markdown.value);

  return result;
}
