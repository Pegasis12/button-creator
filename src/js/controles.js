export default function initCreator() {
  const controles = document.getElementById('controles');
  const cssText = document.querySelector('[data-text]');
  const btn = document.querySelector('[data-button]');
  const reset = document.querySelector('[data-reset]');

  reset.addEventListener('click', resetDados);

  function resetDados() {
    localStorage.clear(); //apaga dados do localstorage
    window.location.reload(); //da reload na pagina
  }

  controles.addEventListener('change', handleChange);

  const handleStyle = {
    nome(value) {
      btn.innerText = value;
    },

    textTransform(value) {
      btn.style.textTransform = value;
    },

    fontFamily(value) {
      btn.style.fontFamily = value;
    },

    paddingTop(value) {
      btn.style.paddingTop = value + 'px';
    },

    paddingBottom(value) {
      btn.style.paddingBottom = value + 'px';
    },

    paddingLeft(value) {
      btn.style.paddingLeft = value + 'px';
    },

    paddingRight(value) {
      btn.style.paddingRight = value + 'px';
    },

    backgroundColor(value) {
      btn.style.backgroundColor = value;
    },

    color(value) {
      btn.style.color = value;
    },

    borderStyle(value) {
      btn.style.borderStyle = value;
    },

    borderTop(value) {
      btn.style.borderTop = value + 'px';
    },

    borderBottom(value) {
      btn.style.borderBottom = value + 'px';
    },

    borderLeft(value) {
      btn.style.borderLeft = value + 'px';
    },

    borderRight(value) {
      btn.style.borderRight = value + 'px';
    },

    borderColor(value) {
      btn.style.borderColor = value;
    },

    borderRadius(value) {
      btn.style.borderRadius = value + 'px';
    },

    fontSize(value) {
      btn.style.fontSize = value + 'px';
    },

    fontWeight(value) {
      btn.style.fontWeight = value;
    },
  };

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    handleStyle[name](value);

    console.log(value);
    saveValue(name, value);
    showCss();
  }

  function showCss() {
    cssText.innerHTML =
      "<span class='block mb-2'>" +
      btn.style.cssText.split('; ').join(';</span><span class="block mb-2">');
  }

  function saveValue(name, value) {
    //recebendo os argumentos de name e value
    localStorage[name] = value; //setando as mesmas propriedades para localstorage com os mesmos valores
  }

  function setValues() {
    const properties = Object.keys(localStorage); //pega tds as propiedades de localstorage
    properties.forEach((propertie) => {
      //retorna um tipo de array, usamos foreach para acessar
      handleStyle[propertie](localStorage[propertie]); //handlestyle recebe o nome da propriedade e o valor da mesma e executa o metodo cm base nos mesmos dados
      controles.elements[propertie].value = localStorage[propertie]; //faz com que o valor do elemento de controle receba os valores de localstorage
    });
    showCss();
  }

  setValues();
}
