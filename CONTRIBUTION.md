# CONTRIBUTION

> Please keep the following guidelines when working on this project.

## Naming conventions

- **React**
    - **Component folders**: PascalCase
    - **Components files (`.jsx`)**: PascalCase
    - **Component Function**: PascalCase
    - *All these three things must be the same for a specific component.*
- **JavaScript (`.js`) files**: using camelCase.
- **CSS (`.css`) files**: kebab-case.
- **Other Folders**: All folders, **except for folders containing React components** must be named in kebab-case. You guys will mostly not need to create these though.

## Dos

- Whenever creating a new feature branch, always create it from being on the `main` branch.
- Follow the defined folder and file structure.
- Use correct naming conventions.
- Work or touch *only* in the following folders & files:
    - `components` folder
    - `App.jsx`
- Write stylesheets separately in its own file.


## Donts

### `main` branch 

- **Never** work on the `main` branch.
- **Never** push anything to the `main` branch.
- **Never** merge other branches into to the `main` branch.

### `Folders & files`

- **Do not** touch anything except the `components` folder and `App.jsx`.

### CSS

- **Do not** write inline CSS.
- **Do not** use element selectors when writing CSS. Use class selectors.

## Workflow

Following is the step-by-step workflow when a task is assigned.

### Get Updates

1. `cd` into your local repo or open VS Code.
2. Switch to the `main` branch: `git checkout main`.
    - Just to be safe, verify if you are on the `main` branch by running `git branch`.
3. Run `git pull`: This will ensure you are up to date with the `main` branch.

### Branch Setup 

4. Create your new feature branch and switch to it using `git checkout -b <branch_name>`.
    - Follow the same branch naming convention `feature/<feature-name>-<your-name>`: Eg: `feature/navbar-sarbajit`.

### Working

5. Go to the `components` folder and create a new folder for the component you are working on. 
    - Keep in mind the naming conventions mentioned earlier.
6. Create the `.jsx` component file inside your component folder.
7. Create a `.css` file for the component you are working on.
8. Import the `.css` file into you `.jsx` file.
9. Define the functional component.
    ```jsx
    function ComponentName() {
        return (
            
        );
    };

    export default ComponentName;
    ```
10. Work on the `.jsx` and `.css` files.
11. Go to `App.jsx` and import your component to check rendering.

### Wrapping up with `git`

12. Go through `git add .` and `git commit` cycles however you like.
13. When the work is done, push your branch, `git push origin <branch_name>`.
14. Come to the GitHub url from the browser.
15. Send a PR!
16. ~~Go have a beer!~~






