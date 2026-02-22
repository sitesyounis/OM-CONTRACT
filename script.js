const GEMINI_API_KEY = AIzaSyBeNOz9FkqW1WIr80SAAk8dQWOoPJqTDCM;

const CONTRACT_CONTEXT = `
SULTANATE OF OMAN
STANDARD CONTRACT FOR BUILDING AND CIVIL ENGINEERING WORKS
May 2019 (Rev. 01)

This document is the Standard Contract for Building and Civil Engineering Works in the Sultanate of Oman.
It includes:
- Form of Letter of Tender
- Appendix to the Letter of Tender
- Form of Contract Agreement
- Appendix A to the Contract Agreement (Data)
- Appendix B to the Contract Agreement (Summary of Contract Value)
- Conditions of Contract (General Conditions)
- Small and Medium Enterprises Content Annex
- Form of Advance Payment Bond
- Form of Performance Bond

Key Clauses and Definitions:
1.1 Definitions:
- 'Contract' means the Contract Agreement and documents listed therein.
- 'Employer' means the Governmental Authority named in Appendix A.
- 'Contractor' means the person named in Appendix A.
- 'Engineer' means the person appointed by the Employer.
- 'Works' means the Works to be executed and completed by the Contractor.
- 'Time for Completion' means the time for completing the Works as stated in Appendix A.
- 'Accepted Contract Amount' means the amount accepted in the Letter of Acceptance.

4.1 Contractor's General Obligations: The Contractor shall design (to the extent specified), execute and complete the Works and remedy any defects.
4.2 Performance Bond: The Contractor shall obtain a Performance Bond for proper performance.
4.4 Subcontractors: The Contractor shall not subcontract the whole of the Works.
4.21 Progress Reports: Monthly progress reports shall be prepared by the Contractor.

8.2 Time for Completion: The Contractor shall complete the Works within the Time for Completion.
8.7 Delay Penalties: If the Contractor fails to comply with the Time for Completion, they shall pay delay penalties.

11.1 Defects Liability: The Contractor is responsible for completing outstanding work and remedying defects.
13.1 Right to Vary: The Engineer may initiate Variations at any time prior to issuing the Taking-Over Certificate.
14.1 Contract Price: The Contract Price shall be agreed or determined under Clause 12.3.
14.2 Advance Payment: The Employer shall make an interest-free advance payment for mobilisation.
14.3 Interim Payment Certificates: The Contractor shall submit monthly Statements for payment.

15. Termination by Employer: The Employer may terminate the Contract for default (e.g., failure to provide Performance Bond, abandonment of works).
16. Suspension and Termination by Contractor: The Contractor may suspend work or terminate if the Employer fails to pay or the Engineer fails to certify.

21. Force Majeure: Exceptional events beyond a Party's control (e.g., war, rebellion, natural catastrophes).
22. Claims and Dispute Resolution: Procedures for Contractor's claims and settlement of disputes (Amicable Settlement, Litigation, Arbitration).
`;

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function appendMessage(role, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}`;
    
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
    avatar.textContent = role === 'user' ? 'U' : 'AI';
    
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.textContent = content;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'message assistant loading';
    loadingDiv.id = 'loading-indicator';
    loadingDiv.innerHTML = `
        <div class="avatar">AI</div>
        <div class="bubble">
            <div class="loading-dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    `;
    chatMessages.appendChild(loadingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeLoading() {
    const loadingDiv = document.getElementById('loading-indicator');
    if (loadingDiv) loadingDiv.remove();
}

async function askGemini(question) {
    if (GEMINI_API_KEY === AIzaSyBeNOz9FkqW1WIr80SAAk8dQWOoPJqTDCM) {
        return "Please add your Gemini API Key to script.js to start using the assistant.";
    }

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    const prompt = `You are an expert AI Assistant specialized in the Sultanate of Oman Standard Contract for Building and Civil Engineering Works (May 2019).
        
    Context from the document:
    ${CONTRACT_CONTEXT}
    
    Rules:
    1. Only answer questions based on the provided document context.
    2. If the answer is not in the document, politely say: "I'm sorry, but I couldn't find information regarding that specific topic in the Oman Standard Contract (May 2019)."
    3. Be professional, precise, and helpful.
    4. You can answer in both English and Arabic.
    
    User Question: ${question}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            return data.candidates[0].content.parts[0].text;
        } else {
            throw new Error('Invalid response from API');
        }
    } catch (error) {
        console.error('Error:', error);
        return "I encountered an error. Please check your API key and internet connection.";
    }
}

async function handleSend() {
    const text = userInput.value.trim();
    if (!text) return;

    appendMessage('user', text);
    userInput.value = '';
    userInput.disabled = true;
    sendBtn.disabled = true;

    showLoading();
    const response = await askGemini(text);
    removeLoading();

    appendMessage('assistant', response);
    userInput.disabled = false;
    sendBtn.disabled = false;
    userInput.focus();
}

sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSend();
});
