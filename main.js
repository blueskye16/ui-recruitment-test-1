/* import $ from 'jquery';
const api_key = 'api_key='; */

document.addEventListener('DOMContentLoaded', function () {
  addProject(6);
  assignGradients();
  addTasks(2);
});

function addProject(projectCount) {
  const projectsContainer = document.getElementById('project-container');
  const projectText = [
    'Project 1',
    'Project 2',
    'Project 3',
    'Project 4',
    'Project 5',
    'Project 6',
  ];

  for (let i = 0; i < projectCount; i++) {
    const projectContainerText = document.createElement('p');
    const projectItemContainer = document.createElement('div');
    const projectItem = document.createElement('div');
    const projectItemText = document.createElement('span');
    const projectItemDecoration1 = document.createElement('div');
    const projectItemDecoration2 = document.createElement('div');

    const classProjectItem = [
      'relative',
      'border',
      'border-gray-400',
      'rounded-lg',
      'w-16',
      'h-16',
      'flex',
      'items-center',
      'justify-center',
      'bg-gradient-to-r',
      'from-red-500',
      'via-orange-400',
      'to-yellow-300',
      'overflow-hidden',
      'project-gradient',
    ];

    const classProjectDecoration = [
      'absolute',
      'w-16',
      'h-16',
      'border-14',
      'border-white',
      'opacity-20',
    ];

    projectItem.classList.add(...classProjectItem);

    projectItemDecoration1.classList.add(
      ...classProjectDecoration,
      ...randomDecorationShape('top')
    );
    projectItemDecoration2.classList.add(
      ...classProjectDecoration,
      ...randomDecorationShape('bottom')
    );

    projectItemText.textContent = i + 1;
    projectItem.append(
      projectItemDecoration1,
      projectItemDecoration2,
      projectItemText
    );

    projectContainerText.classList.add(
      'text-center',
      'text-xs',
      'pt-1',
      'text-gray-400'
    );
    projectContainerText.textContent = projectText[i];

    projectItemContainer.append(projectItem, projectContainerText);

    projectsContainer.appendChild(projectItemContainer);
  }
}

function randomDecorationShape(direction) {
  const choosenRandomNumber = randomNumber(6, 9);

  if (direction == 'top') {
    const topDecoration = [
      `-top-${choosenRandomNumber}`,
      `-left-${choosenRandomNumber}`,
      randomRounded(),
    ];
    return topDecoration;
  } else if (direction == 'bottom') {
    const bottomDecoration = [
      `-bottom-${choosenRandomNumber}`,
      `-right-${choosenRandomNumber}`,
      randomRounded(),
    ];
    return bottomDecoration;
  }
}

function randomRounded() {
  const random = randomNumber(1, 2);
  if (random == 1) {
    const rounded = [`rounded-lg`];
    return rounded;
  } else {
    const rounded = [`rounded-full`];
    return rounded;
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function assignGradients() {
  const gradients = [
    'bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300',
    'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600',
    'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500',
    'bg-gradient-to-r from-sky-500 via-teal-500 to-indigo-500',
    'bg-gradient-to-r from-gray-400 via-brown-500 to-teal-600',
    'bg-gradient-to-r from-lime-400 via-emerald-500 to-cyan-600',
  ];

  const projectDivs = document.querySelectorAll('.grid .project-gradient');

  projectDivs.forEach((div, index) => {
    const gradient = gradients[index % gradients.length];
    div.classList.add(...gradient.split(' '));
  });
}

function addTasks(count) {
  const taskContainer = document.getElementById('task-container');
  const status = ['Done', 'Progress', 'Pending'];

  for (let i = 0; i < count; i++) {
    const randomStatus = Math.floor(Math.random() * 3);

    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('mt-4', 'flex', 'items-center');

    const taskInputCheckbox = document.createElement('input');
    taskInputCheckbox.type = 'checkbox';
    taskInputCheckbox.classList.add('w-4', 'h-4', 'cursor-pointer');

    const taskLabel = document.createElement('label');
    taskLabel.classList.add('ml-2', 'text-xs');
    taskLabel.textContent = 'Lorem ipsum dolor sit amet.';

    const taskButton = document.createElement('button');
    taskButton.classList.add(
      'w-14',
      'h-6.5',
      'text-xs',
      'ml-auto',
      'p-1',
      'rounded-xl',
      'flex',
      'items-center',
      'justify-center'
    );
    taskButton.innerText = status[randomStatus];

    if (status[randomStatus] === 'Done') {
      taskButton.classList.add('bg-green-300');
    } else if (status[randomStatus] === 'Progress') {
      taskButton.classList.add('bg-blue-300');
    } else if (status[randomStatus] === 'Pending') {
      taskButton.classList.add('bg-orange-300');
    }

    taskItemContainer.appendChild(taskInputCheckbox);
    taskItemContainer.appendChild(taskLabel);
    taskItemContainer.appendChild(taskButton);

    taskContainer.appendChild(taskItemContainer);
  }
}
