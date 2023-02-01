export const scrollToSection = async (goTo) => {
    await document.querySelector(`#${goTo}`).scrollIntoView({ behavior: "smooth", block: 'start' });
}