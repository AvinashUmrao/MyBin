const parents = document.querySelectorAll('.parent-cb');
const container = document.querySelector('.checkbox-container');

parents.forEach(parent => {
  parent.addEventListener('change', () => {
    const children = document.getElementById(parent.dataset.target);
    const checkboxes = children.querySelectorAll('input[type="checkbox"]');

    if (parent.checked) 
    {
      children.style.display = 'block';

      container.scrollTo({
        top: children.offsetTop,
        behavior: 'smooth'
      });
    } 
      else 
    {
      children.style.display = 'none';
      checkboxes.forEach(child => child.checked = false);
    }
    
  });
});