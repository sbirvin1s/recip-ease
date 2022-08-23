# Recip<img src='./recip-ease.png' height='32' width='32'>Ease 

<img src="https://img.shields.io/github/license/sbirvin1s/recip-ease?style=flat-square"/>

> A web app intended to simplify the creation of grocery lists by parsing recipes and creating a grocery list based on ingredients and serving amounts

---

## Table of Contents

1. [Styling](#pencil2-styling)
1. [Git Workflow](#computer-how-can-i-contribute)
1. [Requirements](#requirements)
1. [Development](#development)


---
## :pencil2: Styling

> **Note:** This repo requires that you use the styling outlined in the following guide: [AirBnb Style Guide](https://github.com/airbnb/javascript)
---

## :computer: How can I contribute?

#### Start with the main branch
All feature branches are created off the latest code state of a project. This guide assumes this is maintained and updated in the `main` branch.

```jsx
git checkout main
git fetch origin
git reset --hard origin/main
```
This switches the repo to the `main` branch, pulls the latest commits and resets the repo's local copy of `main` to match the latest version.

#### Create a new-branch
Use a separate branch for each feature or issue you work on. After creating a branch, check it out locally so that any changes you make will be on that branch.

```jsx
git checkout -b new-feature
```

This checks out a branch called new-feature based on `main`, and the `-b` flag tells Git to create the branch if it doesn’t already exist.

#### Update, add, commit, and push changes
On this branch, edit, stage, and commit changes in the usual fashion, building up the feature with as many commits as necessary. Work on the feature and make commits like you would any time you use Git. When ready, push your commits, updating the feature branch on Bitbucket.

```jsx
git status
git add <some-file>
git commit
```

#### Push feature branch to remote
It’s a good idea to push the feature branch up to the central repository. This serves as a convenient backup, when collaborating with other developers, this would give them access to view commits to the new branch.

```jsx
git push -u origin new-feature
```

#### Code Reviews
All code submitted to this repo will require a code review prior to being merged and final approval authority/merging pull requests will be the responsibility of the branch's code owner. In the event of code being merged without proper approval, the repo will be subject to rollback and the code removed.


Additional workflow information can be found here: [Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)

---

## Requirements
<div>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/nodemon?style=flat-square"/>
 <br/>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/webpack?style=flat-square" />
 <br/>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/babel?style=flat-square"/>
 <br/>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/react?style=flat-square" />
 <br/>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/axios?style=flat-square"/>
 <br/>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/express?style=flat-square" />
 <br/>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/mongoose?style=flat-square" />
 <br/>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/styled-components?style=flat-square" />
 <br/>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/@mui/material?style=flat-square" />
</div>
 ---

## Development

### Installing Dependencies
From within the root directory:

> ![npm](./npm.png)
>```sh
>npm install
>```

<br/>

> ![yarn](./yarn.png)
>```sh
> yarn install
>```
