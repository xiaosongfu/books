jobs:
  my_job:
    name: test
    runs-on: ubuntu-18.04
    steps:
      - name: xx
        uses: actions/checkout@v1
      - name: yy
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: zz
        run: ./gradlew build


---

## Customizing when workflow runs are triggered

Set your workflow to run on push events to the master and release/* branches

on:
  push:
    branches:
    - master
    - release/*
Set your workflow to run on pull_request events that target the master branch

on:
  pull_request:
    branches:
    - master

Set your workflow to run every day of the week from Monday to Friday at 2:00 UTC

on:
  schedule:
  - cron: "0 2 * * 1-5"

For more information, see "[Events that trigger workflows.](https://help.github.com/articles/events-that-trigger-workflows)"


## Running your jobs on different operating systems

GitHub Actions provides hosted runners for Linux, Windows, and macOS.

To set the operating system for your job, specify the operating system using runs-on:

jobs:
  my_job:
    name: deploy to staging
    runs-on: ubuntu-18.04
The available virtual machine types are:

* `ubuntu-latest`, `ubuntu-18.04`, or `ubuntu-16.04`
* `windows-latest`, `windows-2019`, or `windows-2016`
* `macOS-latest` or `macOS-10.14`

For more information, see "[Virtual environments for GitHub Actions.](https://help.github.com/articles/virtual-environments-for-github-actions)"

## Using an action

Actions are reusable units of code that can be built and distributed by anyone on GitHub. You can find a variety of actions in GitHub Marketplace, and also in the official Actions repository.

To use an action, you must specify the repository that contains the action. We also recommend that you specify a Git tag to ensure you are using a released version of the action.

- name: Setup Node
  uses: actions/setup-node@v1
  with:
    node-version: '10.x'

For more information, see "[Workflow syntax for GitHub Actions.](https://help.github.com/articles/workflow-syntax-for-github-actions#jobsjob_idstepsuses)"

## Running a command

You can run commands on the job's virtual machine.

- name: Install Dependencies
  run: npm install

For more information, see "[Workflow syntax for GitHub Actions.](https://help.github.com/articles/workflow-syntax-for-github-actions#jobsjob_idstepsrun)"

## Running a job across a matrix of operating systems and runtime versions

You can automatically run a job across a set of different values, such as different versions of code libraries or operating systems.

For example, this job uses a matrix strategy to run across 3 versions of Node and 3 operating systems:

jobs:
  test:
    name: Test on node ${{ matrix.node_version }} and ${{ matrix.os }}
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        node_version: ['8', '10', '12']
        os: [ubuntu-latest, windows-latest, macOS-latest]

    steps:
    - uses: actions/checkout@v1
    - name: Use Node.js ${{ matrix.node_version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node_version }}

    - name: npm install, build and test
      run: |
        npm install
        npm run build --if-present
        npm test

For more information, see "[Workflow syntax for GitHub Actions.](https://help.github.com/articles/workflow-syntax-for-github-actions#jobsjob_idstrategy)"

## Running steps or jobs conditionally

GitHub Actions supports conditions on steps and jobs using data present in your workflow context.

For example, to run a step only as part of a push and not in a pull_request, you can specify a condition in the if: property based on the event name:

steps:
- run: npm publish
  if: github.event == 'push'

For more information, see "[Contexts and expression syntax for GitHub Actions.](https://help.github.com/articles/contexts-and-expression-syntax-for-github-actions)"