function get_table() {
  let table = document.querySelector('.table');
  let count = table.childNodes.length;
  for (let i = 0; i < count - 2; i++) {
    table.removeChild(table.lastChild);
  }
  let rows = document.getElementById('max_tasks').value;

  for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      let td = document.createElement('td');
      let textarea = document.createElement('textarea');
      td.appendChild(textarea);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function save_data() {
  let count = document.getElementById('max_tasks').value;
  let lang = document.getElementById('language').value;

  localStorage.setItem('rows', count);
  localStorage.setItem('lang', lang);
}

function get_data_cells() {
  let rows = document.getElementById('max_tasks').value;
  let col = 7;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < col; j++) {
      const id = `item${i}_${j}`;
      let textarea = document.getElementById(id);
      textarea.value = localStorage.getItem(id);
    }
  }
}

function init() {
  rows = localStorage.getItem('rows');
  lang = localStorage.getItem('lang');

  console.log(rows);

  document.getElementById('max_tasks').value = rows;

  let lang_input = document.getElementById('language');
  for (let i = 0; i < lang_input.options.length; i++) {
    const element = lang_input.options[i];
    if (element.value === lang) {
      element.setAttribute('selected', 'selected');
      switch_lang();
      break;
    }
  }

  get_table();
  get_data_cells();
}

function clear() {
  localStorage.clear();
  document.getElementById('max_tasks').value = 5;
}

function switch_lang() {
  let label_lang = document.querySelector('.label_lang');
  let title = document.querySelector('.title');
  let max_tasks = document.querySelector('.max_tasks');
  let sbm_button = document.querySelector('.submit');
  let clear_button = document.querySelector('.clear');
  let header_table = document.querySelector('.table_header');

  let lang = document.getElementById('lang').value;

  if (lang === 'rus') {
    title.innerText = 'Составить планы на неделю';
    label_lang.innerText = 'Выберите язык расписания:';
    max_tasks.innerText = 'Максимальное количество задач в день:';
    sbm_button.innerText = 'Отправить';
    clear_button.innerText = 'Очистить';

    let russian_header_table = [
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье',
    ];
    header_table.childNodes.forEach((elem, index) => {
      elem.innerText = russian_header_table[(index - 1) / 2];
    });
  } else if (lang === 'eng') {
    title.innerText = 'Create plans for a week';
    label_lang.innerText = 'Choose language for a schedule:';
    max_tasks.innerText = 'Max number of task for a day:';
    sbm_button.innerText = 'Send';
    clear_button.innerText = 'Clear';

    let english_header_table = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    header_table.childNodes.forEach((elem, index) => {
      elem.innerText = english_header_table[(index - 1) / 2];
    });
  }
}
