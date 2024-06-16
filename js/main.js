document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        emailjs.sendForm('service_htq2b8w', 'template_8bcwlgi', '#contact-form')
            .then(function(response) {
                alert('Thanks for your message, it will take 1-3 days to respond.');
                form.reset();
            }, function(error) {
                alert('Failed to send message. Please try again.');
            });
    });
});

function buyProduct(productName) {
    window.location.href = 'contact.html?product=' + encodeURIComponent(productName);
}

window.addEventListener('load', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productInput = document.getElementById('product');
    if (productInput && urlParams.has('product')) {
        productInput.value = urlParams.get('product');
    }
});
