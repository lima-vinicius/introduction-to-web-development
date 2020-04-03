<p>
    <img width="350px" src="https://skywell.software/wp-content/uploads/2019/01javascript-vs-html-vs-css-1024x683.jpg" alt="HTML, CSS and Javascript logo"/>
    <img width="300px" src="https://pplware.sapo.pt/wp-content/uploads/2016/05/nodejs_04_thumbjpg" alt="Node logo"/>
</p>

# Introduction to web development 
This project aims at the practical application of the contents studied on web development through the WorkshopDev given by Rocketseat.

### Project brief

### First Steps

Initially, clone the repository:

```
git clone https://github.com/viniciuslima-99/introduction-to-web-development.git
```

## Technology

### Front-end

* **[HTML5](https://developer.mozilla.org/docs/Web/HTML/HTML5)** -  HyperText Markup Language(HTML) is a markup language for the World Wide Web and is a key Internet technology, originally proposed by Opera Software. It is the fifth version of the HTML language.
* **[CSS3](https://developer.mozilla.org/docs/Web/CSS)** - Cascading Style Sheets (CSS) is a mechanism for adding style to a web document. It is the third version.
* **[Javascript](https://developer.mozilla.org/docs/Web/JavaScript)** - JavaScript is a structured interpreted programming language, high-level script with weak dynamic typing and multi-paradigm.

### Back-end

* **[Node](https://nodejs.org/en/)** - An asynchronous event driven JavaScript runtime, designed to build scalable network applications.

## GitHub

### Branches
They can be:
+ master
+ feature
+ bugfix
+ hotfix

Their names must follow this template: `feature/branch-name`

### Commits
Must begin with the name of the branch you developed on, following the model: _“Feature(name-of-feature) : What was done…”._

Must be simple and show briefly what you just did.

- Ex: `git commit -m “Feature(issue_name) : Added ...”`
- Ex: `git commit -m “Bugfix(issue_name) : Changed ...”`
- Ex: `git commit -m “Hotfix(issue_name) : Fix ...”`

### Pull Requests
First, proceed with _rebase_:
1. _commit_ the changes on your branch
2. Go to the original branch (master) with `git checkout master`
3. Run `git pull`
4. Go back to your branch with `git checkout "your-branch"`
5. Run `git rebase master`
6. Follow the steps to conclude the _rebase_, solving conflicts and running `git add .` and then `git rebase --continue`
7. When finished rebasing, run `git push -f origin "your-branch"`. Now your Pull Request can be opened on GitHub.

Use this template for the pull request body:
```
### Issue Name
**What I did:**

- First thing I did...

- Second thing I did...

**How to test:**

- First step to execute the project...

- Second step to execute the project...

```

```markdown
Made with `markdown` and love by Vinícius Lima
```