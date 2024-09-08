function openTab(tabId) {
    // esconde todas as abas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => 
    {
        content.style.display = 'none';
    });

    // exibe a aba selecionada
    const selectedTab = document.getElementById(tabId);
    if (selectedTab)
    {
        selectedTab.style.display = 'block';
    }

    }
   // define a aba padrão ao carregar a página
   document.addEventListener('DOMContentLoaded', () => 
   {
   openTab('inicio');
   });