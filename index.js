const cafeMenu = {
    "Tatlılar": ["Cheesecake", "Tiramisu", "Brownie"],
    "Soğuk İçecekler": ["Limonata", "Kola", "Meyve Suyu"],
    "Sıcak İçecekler": ["Kahve", "Çay", "Sıcak Çikolata"]
};

const restaurantMenu = {
    "Izgara": ["Tavuk Izgara", "Köfte", "Biftek"],
    "Kahvaltı": ["Menemen", "Sucuklu Yumurta", "Peynir Tabağı"],
    "Çorbalar": ["Mercimek Çorbası", "Tarhana Çorbası", "Domates Çorbası"],
    "Sulu Yemekler": ["Karnıyarık", "Taze Fasulye", "Etli Nohut"]
};

function updateMenuOptions() {
    const businessType = document.getElementById('business-type').value;
    const menuOptions = document.getElementById('menu-options');
    const categoriesDiv = document.getElementById('categories');
    
    categoriesDiv.innerHTML = '';  // Önceki seçenekleri temizle
    
    if (businessType) {
        menuOptions.classList.remove('hidden');
        const menu = businessType === 'cafe' ? cafeMenu : restaurantMenu;
        
        for (const category in menu) {
            const categoryDiv = document.createElement('div');
            const categoryLabel = document.createElement('label');
            categoryLabel.innerText = category;
            categoryDiv.appendChild(categoryLabel);
            
            menu[category].forEach(item => {
                const itemDiv = document.createElement('div');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = item;
                checkbox.id = item;
                
                const label = document.createElement('label');
                label.setAttribute('for', item);
                label.innerText = item;
                
                itemDiv.appendChild(checkbox);
                itemDiv.appendChild(label);
                categoryDiv.appendChild(itemDiv);
            });
            
            categoriesDiv.appendChild(categoryDiv);
        }
    } else {
        menuOptions.classList.add('hidden');
    }
}

function generateMenu() {
    const selectedItems = [];
    const checkboxes = document.querySelectorAll('#categories input[type="checkbox"]:checked');
    
    checkboxes.forEach(checkbox => {
        selectedItems.push(checkbox.value);
    });

    const menuDisplay = document.getElementById('menu-display');
    const selectedItemsList = document.getElementById('selected-items');
    
    selectedItemsList.innerHTML = '';  // Önceki menü öğelerini temizle
    
    selectedItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerText = item;
        selectedItemsList.appendChild(listItem);
    });
    
    menuDisplay.classList.remove('hidden');
}
