export default function initCreator() {}
const controles = document.getElementById('controles');
const cssText = document.querySelector('[data-text]');
const btn = document.querySelector('[data-button]');

controles.addEventListener('change', handleChange);

const handleStyle = {
  nome(value) {
    btn.innerText = value;
  },
};

function handleChange(event) {
  handleStyle[event.target.name](event.target.value);
}
