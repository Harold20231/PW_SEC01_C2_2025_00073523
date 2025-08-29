const btnToggleContent = document.getElementById('btn-toggle-content');
const btnChangeTitle = document.getElementById('btn-change-title');
const btnChangeColor = document.getElementById('btn-change-color');
const btnAddImage = document.getElementById('btn-add-image');

const columnContainer = document.querySelector('.column-container');
const mainTitle = document.getElementById('main-title');
const bookDescriptionTitle = document.querySelector('.book-description h2');
const bookDescriptionTexts = document.querySelectorAll('.book-description p');
const bookDataSection = document.querySelector('.book-data');

btnToggleContent.addEventListener('click', () => {
    if (columnContainer.style.display === 'grid' || columnContainer.style.display === '') {
        columnContainer.style.display = 'block';
        const columns = columnContainer.querySelectorAll('.column');
        columns.forEach(col => col.style.marginBottom = '20px');
    } else {
        columnContainer.style.display = 'grid';
        columnContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
        const columns = columnContainer.querySelectorAll('.column');
        columns.forEach(col => col.style.marginBottom = '0');
    }
});


btnChangeTitle.addEventListener('click', () => {
    const newTitle = prompt("Ingrese el nuevo título de la página:", mainTitle.textContent);
    if (newTitle) {
        mainTitle.textContent = newTitle;
        document.title = newTitle; 
    }
});


btnChangeColor.addEventListener('click', () => {
    const newColor = prompt("Ingrese el color (nombre o código HEX):", "#869fe4");
    if (newColor) {
        bookDescriptionTitle.style.color = newColor;
        bookDescriptionTexts.forEach(p => {
            p.style.color = newColor;
        });
    }
});


btnAddImage.addEventListener('click', () => {
    const imageUrl = prompt("Ingrese la URL de la imagen:");
    if (imageUrl) {
        let existingImg = bookDataSection.querySelector('img');
        if (existingImg) {
            existingImg.src = imageUrl;
        } else {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = "Imagen del libro";
            img.style.width = "100%";
            img.style.marginTop = "15px";
            img.style.borderRadius = "10px";
            bookDataSection.appendChild(img);
        }
    }
});