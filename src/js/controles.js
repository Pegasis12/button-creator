export default function initCreator() {}
const controles = document.getElementById('controles');
const cssText = document.querySelector('[data-text]');
const btn = document.querySelector('[data-button]');

controles.addEventListener('change', handleChange);

const handleStyle = {
  nome(value) {
    btn.innerText = value;
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

  borderStyle() {
    btn.style.borderStyle = value;
  },
};

function handleChange(event) {
  handleStyle[event.target.name](event.target.value);
}
