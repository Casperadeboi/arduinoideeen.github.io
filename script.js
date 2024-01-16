document.addEventListener('DOMContentLoaded', function () {
    // Functie om een tabblad te tonen
    function showTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(function (tab) {
            tab.style.display = 'none';
        });
        document.getElementById(tabId).style.display = 'block';
    }

    // Open standaard het tabblad 'ArduinoIdeeën.nl' bij het laden van de pagina
    showTab('content-tab7');

    // Voeg event listeners toe voor alle tabbladen
    for (let i = 1; i <= 7; i++) {
        const tabId = 'tab' + i;
        document.getElementById(tabId).addEventListener('click', function () {
            const contentTabId = 'content-tab' + i;
            showTab(contentTabId);
        });
    }
});
