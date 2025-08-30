const watermarkImageLabel = 'Image de démonstration';

watermakImages()

function watermakImages() {
    watermarkImg(document.querySelectorAll('img.watermarked'), watermarkImageLabel)
    watermarkImg(document.querySelectorAll('img.watermarked-dark'), watermarkImageLabel, '#000')    
}

function watermarkImg(elements, text, textColor = '#fff') {
    if (!elements) {
        return;
    }
    elements.forEach((el) => {
        watermark([el.src])
            .image(watermark.text.center(text, '48px Josefin Slab', textColor, 0.8))
            .then(function (img) {
                el.src = img.src;
            });
    })
}