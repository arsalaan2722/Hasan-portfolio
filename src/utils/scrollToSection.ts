export function scrollToSection(elementId: string) {
  const cleanId = elementId.startsWith('#') ? elementId.substring(1) : elementId;
  const element = document.getElementById(cleanId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
