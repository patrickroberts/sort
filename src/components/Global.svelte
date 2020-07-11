<style>
:global(:root) {
  --no-hue: 180;
  --no-saturation: 100%;
  --no-lightness: 45%;
  --no-color: hsl(var(--no-hue), var(--no-saturation), var(--no-lightness));
}

:global(html, body) {
  position: relative;
  width: 100%;
  height: 100%;
}

:global(body) {
  color: #333;
  margin: 0;
  padding: 2em;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

:global(input, button, select) {
  font-family: inherit;
  font-size: inherit;
  padding: 0.4em;
  margin: 0 0 0.5em 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 2px;
}

:global(button) {
  color: #333;
  background-color: #f4f4f4;
  outline: none;
}

:global(button:active) {
  background-color: #ddd;
}

:global(button:focus) {
  border-color: #666;
}

:global(input[type="checkbox"], label, select) {
  cursor: pointer;
}

:global(.fixed) {
  position: fixed;
  padding: 0.5rem;
  background-color: whitesmoke;
  border: 1px lightgray solid;
  border-radius: 0.25rem;
  user-select: none;
  transition: opacity 0.5s;
}

:global(.fixed:not(:hover)) {
  opacity: 0.75;
}

:global(.fixed button) {
  background-color: white;
  margin-bottom: 0;
}

@media (prefers-color-scheme: dark) {
  :global(:root) {
    --no-saturation: 75%;
    --no-lightness: 30%;
  }

  :global(body) {
    background-color: #222;
  }

  :global(.fixed:not(:hover)) {
    opacity: 0.5;
  }
}
</style>
