// Небольшой js фреймворк для работы с css
// Эккерт Игорь
//
function change(identifier) {

  if (identifier) {
    if (window === this) {
      return new change(identifier);
    }

    // выбор по id или классу

    if (identifier[0] === '#') {
      this.e = [document.getElementById(identifier.slice(1, identifier.length))];
      return this;
    } else if (identifier[0] === '.') {
      this.e = document.getElementsByClassName(identifier.slice(1, identifier.length));
      return this;
    }
  }
};

change.prototype = {
  // Задать аттрибут со значением value
  value: function(newVal) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].value = newVal;
    }
    return this;
  },

  // Задать html содержание элемента
  htmlContent: function(html) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].innerHTML = html;
    }
    return this;
  },

  // Показать элементы
  show: function() {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.display = '';
    }
    return this;
  },

  // Display в hidden
  hide: function() {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.display = 'none';
    }
    return this;
  },

  // Задать цвет элементов
  color: function(color) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.color = color;
    }
    return this;
  },

  // Задать фонововый цвет элементов
  bg: function(bgColor) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.backgroundColor = bgColor;
    }
    return this;
  },

  // Задать высоту элементов
  height: function(height) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.height = height + 'px';
    }
    return this;
  },

  // Задать ширину элементов
  width: function(width) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.width = width + 'px';
    }
    return this;
  },

  // Задать размер шрифта элементов
  fontSize: function(size) {
    for (var i = 0; i < this.e.length; i++) {
      this.e[i].style.fontSize = size + 'px';
    }
    return this;
  },
};
