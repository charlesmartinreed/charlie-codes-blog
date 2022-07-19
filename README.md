# Notes and TODOS

- Use `classnames` package for easy toggling of, you guessed it, classnames

  ```javascript
  import styles from "./alert.module.css";
  import cn from "classnames";
  export default function Alert({ children, type }) {
  return (
    <div className={{cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
    })}}>
    {children}
    </div>
    );
    }
  ```

- Next.js uses PostCSS as a compiler. Create `postcss.config.js` at the top-level to customize the configuration.
