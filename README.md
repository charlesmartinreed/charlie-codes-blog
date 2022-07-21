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

- **Static-site generation** means the HTML is generated at build time and _reused_ on each request. In DEVELOPMENT mode, all pages use static site generation.
- **Server-side rendering** _generates the HTML on each request_
- Fast sites prefer SSG because the page only has to be built once before being served by the CDN.
- Obviously server-side rendering is necessary in scenarios when data is frequently updated or content changes according to the request itself, such as a live-blog or anything that leverages real time communication.
- The `SWR package` is a react hook for data fetching created by the team behind Next.js.