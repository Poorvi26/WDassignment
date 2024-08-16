**Cypress Test**

A suite of automation tests written with JavaScript and automated with Cypress JS framework

**Project technologies** -

JavaScript as programming language

Node.js as runtime environment

Cypress as automation framework

**Setup and installation**

Download and Install nodejs - https://nodejs.org/en/download/prebuilt-installer

Download and Install vscode - https://code.visualstudio.com/download

Open terminal and then execute below command

npm -i init ---> To create package.json file

**To install Cypress** - 

npm install cypress --save -dev

Start cypress

npx cypress open

Configure for new project

Or

After Installation open project WDAssignment

**Running the project** -

npx cypress run

Run using chrome browser - npx cypress run -- browser chrome

Run using headed mode - npx cypress run -- browser chrome --headed

**Setting up GIT**

To set up Git for this project:

1. **Initialize Git Repository**:
    ```bash
    git init
    ```
2. **Add Files to Git**:
    ```bash
    git add .
    ```

3. **Commit Changes**:
    ```bash
    git commit -m "Initial commit"
    ```

4. **Connect to Remote Repository**:
    Create a new repository on GitHub and connect your local repository to it:
    ```bash
    git remote add origin https://github.com/poorvi26/WDAssignment.git
    ```

5. **Push Changes to Remote Repository**:
    ```bash
    git push -u origin master
    ```


**Project Structure**

WDAssignment
   -cypress
    -e2e
      -SearchPropertymap.cy.cy - Contain main spec file 
    -fixtures
      -credentials.json - It contains credentials
    -support
      - commands.js - Login commands
      - e2e.js - imports
    
