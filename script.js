// Contract templates and form configurations
const contractTemplates = {
    nda: {
        title: "Non-Disclosure Agreement",
        fields: [
            { name: "disclosingParty", label: "Disclosing Party (Company Name)", type: "text", required: true },
            { name: "receivingParty", label: "Receiving Party (Company/Individual Name)", type: "text", required: true },
            { name: "effectiveDate", label: "Effective Date", type: "date", required: true },
            { name: "confidentialInfo", label: "Description of Confidential Information", type: "textarea", required: true },
            { name: "termLength", label: "Term Length", type: "select", options: ["1 year", "2 years", "3 years", "5 years", "Indefinite"], required: true }
        ],
        template: (data) => `
            <h2>NON-DISCLOSURE AGREEMENT</h2>
            <p><strong>Date:</strong> ${data.effectiveDate}</p>
            
            <p>This Non-Disclosure Agreement (the "Agreement") is entered into as of ${data.effectiveDate} by and between:</p>
            
            <p><strong>${data.disclosingParty}</strong> (the "Disclosing Party")</p>
            <p>and</p>
            <p><strong>${data.receivingParty}</strong> (the "Receiving Party")</p>
            
            <h3>1. CONFIDENTIAL INFORMATION</h3>
            <p>The Disclosing Party may disclose confidential information including but not limited to: ${data.confidentialInfo}</p>
            
            <h3>2. NON-DISCLOSURE</h3>
            <p>The Receiving Party agrees to maintain the confidentiality of the Confidential Information and not to disclose it to any third party without the prior written consent of the Disclosing Party.</p>
            
            <h3>3. TERM</h3>
            <p>This Agreement shall remain in effect for ${data.termLength} from the effective date.</p>
            
            <h3>4. RETURN OF MATERIALS</h3>
            <p>Upon termination of this Agreement, the Receiving Party shall return all Confidential Information to the Disclosing Party.</p>
            
            <h3>5. DIGITAL SIGNATURE</h3>
            <p>This Agreement may be executed electronically and digital signatures shall be deemed to be original signatures for all purposes. Each party acknowledges that their digital signature constitutes a valid and legally binding signature.</p>
        `
    },
    
    tos: {
        title: "Website Terms of Service & Privacy Policy",
        fields: [
            { name: "companyName", label: "Company Name", type: "text", required: true },
            { name: "websiteUrl", label: "Website URL", type: "text", required: true },
            { name: "serviceDescription", label: "Description of Services", type: "textarea", required: true },
            { name: "contactEmail", label: "Contact Email", type: "email", required: true },
            { name: "jurisdiction", label: "Governing Jurisdiction", type: "select", options: ["California", "New York", "Delaware", "Texas", "Other"], required: true }
        ],
        template: (data) => `
            <h2>TERMS OF SERVICE & PRIVACY POLICY</h2>
            <p><strong>Effective Date:</strong> ${new Date().toLocaleDateString()}</p>
            
            <h3>1. ACCEPTANCE OF TERMS</h3>
            <p>By accessing and using ${data.websiteUrl} (the "Website"), you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h3>2. DESCRIPTION OF SERVICE</h3>
            <p>${data.companyName} provides the following services: ${data.serviceDescription}</p>
            
            <h3>3. PRIVACY POLICY</h3>
            <p>We collect, use, and protect your personal information in accordance with applicable privacy laws. For questions about our privacy practices, contact us at ${data.contactEmail}.</p>
            
            <h3>4. GOVERNING LAW</h3>
            <p>This agreement shall be governed by and construed in accordance with the laws of ${data.jurisdiction}.</p>
            
            <h3>5. CONTACT INFORMATION</h3>
            <p>For questions about these terms, please contact us at ${data.contactEmail}.</p>
            
            <h3>6. DIGITAL SIGNATURE</h3>
            <p>By accessing and using this website, you acknowledge that your digital signature and acceptance of these terms constitutes a valid and legally binding agreement. Digital signatures shall be deemed to be original signatures for all purposes.</p>
        `
    },
    
    employment: {
        title: "Employment Contract",
        fields: [
            { name: "companyName", label: "Company Name", type: "text", required: true },
            { name: "employeeName", label: "Employee Full Name", type: "text", required: true },
            { name: "jobTitle", label: "Job Title", type: "text", required: true },
            { name: "startDate", label: "Start Date", type: "date", required: true },
            { name: "salary", label: "Annual Salary", type: "text", required: true },
            { name: "employmentType", label: "Employment Type", type: "select", options: ["Full-time", "Part-time", "Contract"], required: true }
        ],
        template: (data) => `
            <h2>EMPLOYMENT AGREEMENT</h2>
            <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            
            <p>This Employment Agreement (the "Agreement") is entered into between:</p>
            <p><strong>${data.companyName}</strong> (the "Company")</p>
            <p>and</p>
            <p><strong>${data.employeeName}</strong> (the "Employee")</p>
            
            <h3>1. POSITION AND DUTIES</h3>
            <p>The Employee shall serve as ${data.jobTitle} and shall perform such duties as may be assigned by the Company.</p>
            
            <h3>2. EMPLOYMENT TYPE</h3>
            <p>This is a ${data.employmentType} employment position.</p>
            
            <h3>3. COMPENSATION</h3>
            <p>The Employee shall receive an annual salary of ${data.salary}, payable in accordance with the Company's standard payroll practices.</p>
            
            <h3>4. START DATE</h3>
            <p>The Employee's employment shall commence on ${data.startDate}.</p>
            
            <h3>5. TERMINATION</h3>
            <p>Either party may terminate this Agreement with written notice in accordance with applicable law.</p>
            
            <h3>6. DIGITAL SIGNATURE</h3>
            <p>This Agreement may be executed electronically and digital signatures shall be deemed to be original signatures for all purposes. Each party acknowledges that their digital signature constitutes a valid and legally binding signature.</p>
        `
    },
    
    contractor: {
        title: "Independent Contractor Agreement",
        fields: [
            { name: "companyName", label: "Company Name", type: "text", required: true },
            { name: "contractorName", label: "Contractor Full Name", type: "text", required: true },
            { name: "services", label: "Description of Services", type: "textarea", required: true },
            { name: "paymentAmount", label: "Payment Amount", type: "text", required: true },
            { name: "paymentTerms", label: "Payment Terms", type: "select", options: ["Net 30", "Net 15", "Upon completion", "Monthly"], required: true },
            { name: "startDate", label: "Start Date", type: "date", required: true }
        ],
        template: (data) => `
            <h2>INDEPENDENT CONTRACTOR AGREEMENT</h2>
            <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
            
            <p>This Independent Contractor Agreement (the "Agreement") is entered into between:</p>
            <p><strong>${data.companyName}</strong> (the "Company")</p>
            <p>and</p>
            <p><strong>${data.contractorName}</strong> (the "Contractor")</p>
            
            <h3>1. SERVICES</h3>
            <p>The Contractor shall provide the following services: ${data.services}</p>
            
            <h3>2. COMPENSATION</h3>
            <p>The Company shall pay the Contractor ${data.paymentAmount} for the services rendered, payable ${data.paymentTerms}.</p>
            
            <h3>3. INDEPENDENT CONTRACTOR STATUS</h3>
            <p>The Contractor is an independent contractor and not an employee of the Company.</p>
            
            <h3>4. TERM</h3>
            <p>This Agreement shall commence on ${data.startDate} and shall continue until terminated by either party.</p>
            
            <h3>5. TERMINATION</h3>
            <p>Either party may terminate this Agreement with written notice.</p>
            
            <h3>6. DIGITAL SIGNATURE</h3>
            <p>This Agreement may be executed electronically and digital signatures shall be deemed to be original signatures for all purposes. Each party acknowledges that their digital signature constitutes a valid and legally binding signature.</p>
        `
    },
    
    safe: {
        title: "SAFE Investment Contract",
        fields: [
            { name: "companyName", label: "Company Name", type: "text", required: true },
            { name: "investorName", label: "Investor Name", type: "text", required: true },
            { name: "investmentAmount", label: "Investment Amount ($)", type: "text", required: true },
            { name: "valuationCap", label: "Valuation Cap ($)", type: "text", required: true },
            { name: "discountRate", label: "Discount Rate (%)", type: "select", options: ["15%", "20%", "25%", "30%"], required: true },
            { name: "investmentDate", label: "Investment Date", type: "date", required: true }
        ],
        template: (data) => `
            <h2>SIMPLE AGREEMENT FOR FUTURE EQUITY</h2>
            <p><strong>Date:</strong> ${data.investmentDate}</p>
            
            <p>This Simple Agreement for Future Equity (the "SAFE") is entered into between:</p>
            <p><strong>${data.companyName}</strong> (the "Company")</p>
            <p>and</p>
            <p><strong>${data.investorName}</strong> (the "Investor")</p>
            
            <h3>1. INVESTMENT</h3>
            <p>The Investor hereby invests ${data.investmentAmount} in the Company.</p>
            
            <h3>2. VALUATION CAP</h3>
            <p>The Valuation Cap is ${data.valuationCap}.</p>
            
            <h3>3. DISCOUNT RATE</h3>
            <p>The Discount Rate is ${data.discountRate}.</p>
            
            <h3>4. CONVERSION</h3>
            <p>This SAFE will convert into equity of the Company upon a Qualified Financing or Liquidity Event.</p>
            
            <h3>5. GOVERNING LAW</h3>
            <p>This SAFE shall be governed by the laws of the state in which the Company is incorporated.</p>
            
            <h3>6. DIGITAL SIGNATURE</h3>
            <p>This SAFE may be executed electronically and digital signatures shall be deemed to be original signatures for all purposes. Each party acknowledges that their digital signature constitutes a valid and legally binding signature.</p>
        `
    }
};

// Current state
let currentContract = null;
let formData = {};

// DOM elements
const contractSelection = document.querySelector('.contract-selection');
const contractForm = document.getElementById('contractForm');
const contractPreview = document.getElementById('contractPreview');
const formFields = document.getElementById('formFields');
const formTitle = document.getElementById('formTitle');
const previewContent = document.getElementById('previewContent');

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Link sharing: check for ?share= param
    const urlParams = new URLSearchParams(window.location.search);
    const shareParam = urlParams.get('share');
    if (shareParam) {
        try {
            const shareData = JSON.parse(atob(shareParam));
            if (shareData.contract && contractTemplates[shareData.contract]) {
                currentContract = shareData.contract;
                formData = shareData.data || {};
                // Generate contract content
                const template = contractTemplates[currentContract];
                const contractContent = template.template(formData);
                previewContent.innerHTML = contractContent;
                // Fill signature
                document.getElementById('signatureName').value = '';
                document.getElementById('signatureDate').value = '';
                // Show preview only
                contractSelection.style.display = 'none';
                contractForm.style.display = 'none';
                contractPreview.style.display = 'block';
                // Enable signature inputs for recipient
                document.getElementById('signatureName').readOnly = false;
                document.getElementById('signatureDate').readOnly = false;
                // Show download/share/back buttons
                document.getElementById('downloadBtn').style.display = '';
                document.getElementById('shareBtn').style.display = '';
                document.getElementById('backToFormBtn').style.display = '';
                return;
            }
        } catch (e) {
            // Invalid share param, ignore
        }
    }
    // Contract button clicks
    document.querySelectorAll('.contract-btn').forEach(btn => {
        btn.addEventListener('click', () => selectContract(btn.dataset.contract));
    });
    
    // Back buttons
    document.getElementById('backBtn').addEventListener('click', showContractSelection);
    document.getElementById('backToFormBtn').addEventListener('click', showContractForm);
    
    // Preview button
    document.getElementById('previewBtn').addEventListener('click', previewContract);
    
    // Download and share buttons
    document.getElementById('downloadBtn').addEventListener('click', downloadContract);
    document.getElementById('shareBtn').addEventListener('click', shareContract);
    
    // Disclaimer tab
    document.getElementById('disclaimerTab').addEventListener('click', showDisclaimer);
    document.getElementById('closeDisclaimer').addEventListener('click', hideDisclaimer);
    
    // Close disclaimer when clicking outside
    document.getElementById('disclaimerModal').addEventListener('click', function(e) {
        if (e.target === this) {
            hideDisclaimer();
        }
    });
});

// Select contract and show form
function selectContract(contractType) {
    currentContract = contractType;
    const template = contractTemplates[contractType];
    
    formTitle.textContent = template.title;
    generateForm(template.fields);
    
    showContractForm();
}

// Generate form fields
function generateForm(fields) {
    formFields.innerHTML = '';
    
    fields.forEach(field => {
        const formGroup = document.createElement('div');
        formGroup.className = 'form-group';
        
        const label = document.createElement('label');
        label.textContent = field.label;
        if (field.required) label.innerHTML += ' *';
        
        let input;
        
        if (field.type === 'select') {
            input = document.createElement('select');
            input.name = field.name;
            field.options.forEach(option => {
                const optionEl = document.createElement('option');
                optionEl.value = option;
                optionEl.textContent = option;
                input.appendChild(optionEl);
            });
        } else if (field.type === 'textarea') {
            input = document.createElement('textarea');
            input.rows = 4;
            input.name = field.name;
        } else {
            input = document.createElement('input');
            input.type = field.type;
            input.name = field.name;
        }
        
        if (field.required) input.required = true;
        
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        formFields.appendChild(formGroup);
    });
}

// Show contract form
function showContractForm() {
    contractSelection.style.display = 'none';
    contractPreview.style.display = 'none';
    contractForm.style.display = 'block';
}

// Show contract selection
function showContractSelection() {
    contractSelection.style.display = 'block';
    contractForm.style.display = 'none';
    contractPreview.style.display = 'none';
    currentContract = null;
    formData = {};
}

// Preview contract
function previewContract() {
    // Collect form data
    formData = {};
    const inputs = formFields.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        formData[input.name] = input.value;
    });
    
    // Generate contract content
    const template = contractTemplates[currentContract];
    const contractContent = template.template(formData);
    
    previewContent.innerHTML = contractContent;
    
    // Show preview
    contractForm.style.display = 'none';
    contractPreview.style.display = 'block';
}

// Download contract as PDF
function downloadContract() {
    const signatureName = document.getElementById('signatureName').value;
    const signatureDate = document.getElementById('signatureDate').value;
    
    // Add signature to contract if provided
    let signatureSection = '';
    if (signatureName && signatureDate) {
        signatureSection = `
            <div style="margin-top: 2rem; border-top: 1px solid #ccc; padding-top: 1rem;">
                <p><strong>Digitally Signed by:</strong> ${signatureName}</p>
                <p><strong>Date:</strong> ${signatureDate}</p>
                <p><em>This digital signature has the same legal effect as a handwritten signature.</em></p>
            </div>
        `;
    }
    
    const fullContract = previewContent.innerHTML + signatureSection;
    
    // Create a new window with the contract content
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>${contractTemplates[currentContract].title}</title>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; margin: 2rem; }
                    h2 { color: #2c2c2c; border-bottom: 2px solid #8b7355; padding-bottom: 0.5rem; }
                    h3 { color: #8b7355; margin-top: 1.5rem; }
                </style>
            </head>
            <body>
                ${fullContract}
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Share contract link
function shareContract() {
    const signatureName = document.getElementById('signatureName').value;
    const signatureDate = document.getElementById('signatureDate').value;
    
    // Create a shareable link (in a real app, this would save to a database)
    const shareData = {
        contract: currentContract,
        data: formData,
        signature: signatureName && signatureDate ? { name: signatureName, date: signatureDate } : null,
        timestamp: new Date().toISOString()
    };
    
    const shareUrl = `${window.location.origin}${window.location.pathname}?share=${btoa(JSON.stringify(shareData))}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Contract link copied to clipboard! Share this link with the other party.');
    }).catch(() => {
        prompt('Copy this link to share your contract:', shareUrl);
    });
}

// Show disclaimer modal
function showDisclaimer() {
    document.getElementById('disclaimerModal').style.display = 'flex';
}

// Hide disclaimer modal
function hideDisclaimer() {
    document.getElementById('disclaimerModal').style.display = 'none';
} 