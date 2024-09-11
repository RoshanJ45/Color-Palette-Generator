const colorPalette = document.getElementById('colorPalette');
    const generateBtn = document.getElementById('generateBtn');


    function generateRandomColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor.padStart(6, '0')}`;
    }


    function generatePalette() {
        colorPalette.innerHTML = '';


        for (let i = 0; i < 6; i++) {
            const color = generateRandomColor();
            const colorBox = document.createElement('div');
            colorBox.classList.add('color-box');
            colorBox.style.backgroundColor = color;


            const colorCode = document.createElement('span');
            colorCode.classList.add('color-code');
            colorCode.textContent = color;


            colorBox.appendChild(colorCode);
            colorPalette.appendChild(colorBox);


            colorBox.addEventListener('click', () => {
                navigator.clipboard.writeText(color).then(() => {
                    alert(`Copied: ${color}`);
                });
            });
        }
    }


    generatePalette();


    generateBtn.addEventListener('click', generatePalette);