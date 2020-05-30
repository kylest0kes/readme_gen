const prompts = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is the URL to your project?",
        name: "url"
      },
      {
        type: "input",
        message: "What is your project name?",
        name: "projectname"
      },
      {
        type: "input",
        message: "Please write a short desciption about your project.",
        name: "description"
      },
      {
        type: "list", 
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
      },
      {
        type: "input", 
        message: "What command should be run to install dependencies?",
        default: "npm i",
        name: "installcommand"
      },
      {
        type: "input", 
        message: "What command should be run to run tests?",
        default: "npm test",
        name: "testcommand"
      },
      {
        type: "input", 
        message: "What does the user need to know about using the repo?",
        name: "usage"
      },
      {
        type: "input", 
        message: "What does the user need to know about contributing to the repo?",
        name: "contribution"
      },
];

module.exports = {
    prompts: prompts,
}