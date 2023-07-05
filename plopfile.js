module.exports = function (plop) {
  plop.setGenerator('cp', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.jsx',
        templateFile: 'plop-templates/component.jsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/{{kebabCase name}}.module.css',
        templateFile: 'plop-templates/component.css.hbs',
      },
    ],
  });

  plop.setGenerator('pg', {
    description: 'Create a new page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}/{{kebabCase name}}.jsx',
        templateFile: 'plop-templates/component.jsx.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}/{{kebabCase name}}.module.css',
        templateFile: 'plop-templates/component.css.hbs',
      },
    ],
  });
};
