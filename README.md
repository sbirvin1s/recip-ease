# Recip<img src='./recip-ease.png' height='32' width='32'>Ease 

<img src="https://img.shields.io/github/license/sbirvin1s/recip-ease?style=flat-square"/>

> A web app intended to focus users on sufficiently fueling their bodies with the proper nutrients each day. 
<br/>

> Flex Goal: Allow users to simplify the creation of grocery lists by saving recipes entered by users and creating a grocery list based on ingredients and serving amounts

<p align="center">
  <a href="https://www.youtube.com/shorts/RRbkwgZDHXY">
    <img 
      src="https://res.cloudinary.com/dsfj56bcp/image/upload/v1675808835/Screenshot_2023-02-07_144251_y7flw9.png"
      alt="Updated Demo Video
      heigh="422"
      width="195"
    />
  </a>
</p>

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

#### Start with the dev branch
All feature branches are created off the latest code state of a project. This guide assumes this is maintained and updated in the `dev` branch.

```jsx
git checkout dev
git fetch origin
git reset --hard origin/main
```
This switches the repo to the `dev` branch, pulls the latest commits and resets the repo's local copy of `dev` to match the latest version.

#### Create a new-branch
Use a separate branch for each feature or issue you work on. After creating a branch, check it out locally so that any changes you make will be on that branch.

```jsx
git checkout -b new-feature
```

This checks out a branch called new-feature based on `dev`, and the `-b` flag tells Git to create the branch if it doesn’t already exist.

#### Update, add, commit, and push changes
On this branch, edit, stage, and commit changes in the usual fashion, building up the feature with as many commits as necessary. Work on the feature and make commits like you would any time you use Git. When ready, push your commits, updating the feature branch on Github.

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

#### Submitting Features
To avoid breaking merge conflicts all feature branches must be merged into an updated copy of the 'dev' branch on your local machine prior to submitting a pull request to merge a new feature branch into the `dev` branch.

```jsx
git checkout dev
git pull origin
git checkout new-feature
git merge dev
```

Once you handle any merge conflicts or issues with your feature code and the potential changes made to the `dev` branch, you can commit your code and push to Github where you will open a pull request against the `dev` branch. After code review, if your code is approved, your feature branch will be merged into the dev branch.


#### Code Reviews
All code submitted to this repo will require a code review prior to being merged and final approval authority/merging pull requests will be the responsibility of the branch's code owner. In the event of code being merged without proper approval, the repo will be subject to rollback and the code removed.


Additional workflow information can be found here: [Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow)

---

## Dependencies
<div>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/nodemon?style=flat-square"/>
 <br/>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/webpack?style=flat-square" />
 <br/>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/react?style=flat-square" />
 <br/>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/axios?style=flat-square"/>
 <br/>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/express?style=flat-square" />
 <br/>
<img src="https://img.shields.io/github/package-json/dependency-version/sbirvin1s/recip-ease/styled-components?style=flat-square" />

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
