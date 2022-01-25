const paragraphs = document.querySelector('.paragraphs');
const allParagraphs = paragraphs.querySelectorAll('p');

const styles = getComputedStyle(document.body);
const bgColor = styles.backgroundColor;

for (p of allParagraphs) {
    p.style.backgroundColor = bgColor;
    p.style.color = "white";
}
