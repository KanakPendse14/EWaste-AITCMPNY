// Define objects for models and credits
const models = {
    phone: ["Motorola T189", "IPhone 4s", "Samsung Galaxi III", "Huawei C28000", "Nokia2220"],
    laptop: ["Apple", "Hp", "Dell", "Fujitsu"]
};

const credits = {
    Palladium: 120,
    Gold: 100,
    Silver: 10,
    Copper: 5,
    Magnesium: 3,
    Aluminum: 2,
    Iron: 1,
    Zinc: 0.5
};

// Function to populate the model dropdown based on device selection
function populateModelDropdown() {
    const deviceSelect = document.getElementById("deviceSelect");
    const modelSelect = document.getElementById("modelSelect");
    const selectedDevice = deviceSelect.value;

    // Clear the existing options
    modelSelect.innerHTML = "";

    // Populate the model dropdown based on the selected device
    models[selectedDevice].forEach(model => {
        const option = document.createElement("option");
        option.value = model;
        option.textContent = model;
        modelSelect.appendChild(option);
    });
}

// Function to calculate and display credits
function calculateCredits() {
    const modelSelect = document.getElementById("modelSelect");
    const selectedModel = modelSelect.value;
    const deviceSelect = document.getElementById("deviceSelect");
    const selectedDevice = deviceSelect.value;

    // Get the element weights for the selected model
    const elementWeights = getElementWeights(selectedModel);

    // Calculate total credits
    let totalCredits = 0;
    for (const element in elementWeights) {
        const weight = elementWeights[element];
        const creditPerGram = credits[element];
        const elementCredits = weight * creditPerGram;
        totalCredits += elementCredits;
    }

    // Create and populate the credit table
    const creditTable = document.getElementById("creditTable");
    creditTable.innerHTML = "";
    
    const table = document.createElement("table");
    table.classList.add("credits-table");
    const headingRow = table.insertRow();
    const headingCell = headingRow.insertCell(0);
    headingCell.colSpan = 3;
    headingCell.textContent = `${selectedModel} | ${selectedDevice}`;
    
    const headerRow = table.insertRow();
    const elementNameHeader = headerRow.insertCell(0);
    elementNameHeader.textContent = "Element Name";
    const weightHeader = headerRow.insertCell(1);
    weightHeader.textContent = "Weight (grams)";
    const creditsPerGramHeader = headerRow.insertCell(2);
    creditsPerGramHeader.textContent = "Credits per gram";
    
    for (const element in elementWeights) {
        const weight = elementWeights[element];
        const creditPerGram = credits[element];
        
        const row = table.insertRow();
        const elementNameCell = row.insertCell(0);
        elementNameCell.textContent = element;
        const weightCell = row.insertCell(1);
        weightCell.textContent = weight;
        const creditsPerGramCell = row.insertCell(2);
        creditsPerGramCell.textContent = creditPerGram.toFixed(2);
    }

    const totalRow = table.insertRow();
    const totalLabelCell = totalRow.insertCell(0);
    totalLabelCell.colSpan = 2;
    totalLabelCell.textContent = "Total Credits";
    const totalCreditsCell = totalRow.insertCell(1);
    totalCreditsCell.textContent = totalCredits.toFixed(2);

    creditTable.appendChild(table);
    creditTable.style.display = "block";
}

// Function to get element weights for a model (simulated data)
function getElementWeights(model) {
    const simulatedData = {
        "Motorola T189": {
            Magnesium: 0.88,
            Aluminum: 0.2558,
            Copper: 0.456,
            Iron: 0.1234,
            Zinc: 0.233,
            Gold: 0.012,
            Silver: 0.44,
            Palladium: 0.231
        },
        "IPhone 4s": {
            Magnesium: 0.8,
            Aluminum: 0.369,
            Copper: 0.384,
            Iron: 0.144,
            Zinc: 0.008,
            Gold: 0.034,
            Silver: 0.34,
            Palladium: 0.015
        },
        "Samsung Galaxi III": {
            Magnesium: 0.87,
            Aluminum: 0.22,
            Copper: 0.22,
            Iron: 0.18,
            Zinc: 0.005,
            Gold: 0.08,
            Silver: 0.45,
            Palladium: 0.02
        },
        "Huawei C28000": {
            Magnesium: 0.12,
            Aluminum: 0.088,
            Copper: 0.045,
            Iron: 0.09,
            Zinc: 0.0012,
            Gold: 0.2026,
            Silver: 3.541,
            Palladium: 0.0334
        },
        "Nokia2220": {
            Magnesium: 0.074,
            Aluminum: 0.01,
            Copper: 0.025,
            Iron: 0.014,
            Zinc: 0.3,
            Gold: 0.1964,
            Silver: 1.437,
            Palladium: 0.0539
        },
        "Apple": {
            Magnesium: 59,
            Aluminum: 103,
            Copper: 69,
            Iron: 121,
            Zinc: 0.7,
            Gold: 0.09,
            Silver: 0.3,
            Palladium: 0.02
        },
        "Hp": {
            Magnesium: 116,
            Aluminum: 143,
            Copper: 85,
            Iron: 141,
            Zinc: 1,
            Gold: 0.13,
            Silver: 0.5,
            Palladium: 0.03
        },
        "Dell": {
            Magnesium: 13,
            Aluminum: 12,
            Copper: 8,
            Iron: 19,
            Zinc: 0.1,
            Gold: 0.009,
            Silver: 0.03,
            Palladium: 0.001
        },
        "Fujitsu": {
            Magnesium: 17,
            Aluminum: 31,
            Copper: 21,
            Iron: 35,
            Zinc: 0.2,
            Gold: 0.02,
            Silver: 0.2,
            Palladium: 0.005
        }
        // Define element weights for other models here
    };

    return simulatedData[model];
}

// Event listeners
document.getElementById("deviceSelect").addEventListener("change", populateModelDropdown);
document.getElementById("checkCreditsBtn").addEventListener("click", calculateCredits);

// Initial population of model dropdown
populateModelDropdown();
