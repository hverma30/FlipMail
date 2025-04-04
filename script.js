const emailListContainer = document.getElementById("email-list");
const emailDetailsContainer = document.getElementById("email-details");
const searchInput = document.getElementById("search");
const inboxButton = document.getElementById("inbox-btn");
const trashButton = document.getElementById("trash-btn");

// Load state from localStorage or initialize new state
const savedState = JSON.parse(localStorage.getItem("emailAppState"));
const state = savedState || {
    emails: [
        {
          "id": "a1b2c3d4s5f6g7h8",
          "sender": "john.doe@example.com",
          "title": "Meeting Reminder",
          "time": "2025-02-21T09:30:00Z",
          "email_body": "Hi Team,\n\nJust a reminder about our meeting scheduled for 10:00 AM. Please be on time.\n\nBest,\nJohn",
          "status": "unread"
        },
        {
          "id": "a1b2c3c4e5f6g7h8",
          "sender": "jane.smith@example.com",
          "title": "Project Update",
          "time": "2025-02-20T14:15:00Z",
          "email_body": "Hello,\n\nHere’s the latest update on the project. Let me know if you have any questions.\n\nThanks,\nJane",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f6gah8",
          "sender": "marketing@company.com",
          "title": "Exclusive Offer for You!",
          "time": "2025-02-19T18:00:00Z",
          "email_body": "Hi there,\n\nWe have an exclusive offer just for you! Get 20% off on your next purchase. Hurry, offer ends soon!\n\nCheers,\nMarketing Team",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f6s7h8",
          "sender": "hr@company.com",
          "title": "Annual Leave Policy Update",
          "time": "2025-02-18T10:00:00Z",
          "email_body": "Dear Employees,\n\nPlease review the updated annual leave policy and let us know if you have any questions.\n\nBest,\nHR Team",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f6s7h81",  
          "sender": "support@service.com",
          "title": "Your Ticket Has Been Resolved",
          "time": "2025-02-17T16:30:00Z",
          "email_body": "Hello,\n\nYour support ticket #12345 has been resolved. Let us know if you need any further assistance.\n\nBest,\nSupport Team",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f6g7h8",
          "sender": "events@organization.org",
          "title": "Upcoming Webinar on Data Science",
          "time": "2025-02-16T12:00:00Z",
          "email_body": "Hi,\n\nJoin our upcoming webinar on Data Science Trends in 2025. Register now!\n\nRegards,\nEvent Team",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f6c7h8",
          "sender": "alex.brown@example.com",
          "title": "Re: Feedback on Report",
          "time": "2025-02-15T15:45:00Z",
          "email_body": "Hi,\n\nThanks for your feedback. I have made the necessary changes as per your suggestions.\n\nBest,\nAlex",
          "status": "unread"
        },
        {
          "id": "a1bcc3d4e5f6g7h8",
          "sender": "newsletter@technews.com",
          "title": "This Week’s Top Tech News",
          "time": "2025-02-14T08:00:00Z",
          "email_body": "Hi,\n\nHere are the top tech news stories for this week. Stay updated!\n\nCheers,\nTech News Team",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f6c7h87",
          "sender": "finance@company.com",
          "title": "Salary Slip - February 2025",
          "time": "2025-02-13T11:20:00Z",
          "email_body": "Dear Employee,\n\nYour salary slip for February 2025 is attached. Let us know if you have any queries.\n\nBest,\nFinance Team",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f6gch8",
          "sender": "admin@office.com",
          "title": "Office Maintenance Notice",
          "time": "2025-02-12T09:00:00Z",
          "email_body": "Hello,\n\nPlease note that office maintenance is scheduled for this weekend. Expect temporary disruptions.\n\nThanks,\nAdmin Team",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f6gsh8",
          "sender": "noreply@bank.com",
          "title": "Your Monthly Account Statement",
          "time": "2025-02-11T13:45:00Z",
          "email_body": "Dear Customer,\n\nYour monthly account statement is now available. Please log in to view it.\n\nRegards,\nYour Bank",
          "status": "unread"
        },
        {
          "id": "a1b2c6d4e5f6g7h8",
          "sender": "michael.jordan@example.com",
          "title": "Re: Collaboration Proposal",
          "time": "2025-02-10T14:30:00Z",
          "email_body": "Hi,\n\nI am interested in collaborating on this project. Let's discuss further.\n\nBest,\nMichael",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f637h8",
          "sender": "sales@shop.com",
          "title": "Your Order Has Been Shipped!",
          "time": "2025-02-09T18:20:00Z",
          "email_body": "Hi,\n\nYour order #98765 has been shipped. Track your package here.\n\nThanks,\nSales Team",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f6g5h8",
          "sender": "reminders@calendar.com",
          "title": "Upcoming Appointment",
          "time": "2025-02-08T07:30:00Z",
          "email_body": "Hello,\n\nThis is a reminder for your upcoming appointment scheduled for tomorrow.\n\nBest,\nCalendar Team",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f3g7h8",
          "sender": "charity@helpinghands.org",
          "title": "Thank You for Your Donation",
          "time": "2025-02-07T19:15:00Z",
          "email_body": "Dear Donor,\n\nThank you for your generous donation. Your support makes a difference!\n\nBest Regards,\nHelping Hands Team",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f647h8",
          "sender": "security@service.com",
          "title": "Suspicious Login Attempt Detected",
          "time": "2025-02-06T22:10:00Z",
          "email_body": "Hi,\n\nWe detected a suspicious login attempt on your account. If this wasn’t you, please reset your password immediately.\n\nRegards,\nSecurity Team",
          "status": "unread"
        },
        {
          "id": "a1b4c3d4e5f6g7h8",
          "sender": "travel@agency.com",
          "title": "Your Trip Itinerary",
          "time": "2025-02-05T17:00:00Z",
          "email_body": "Hello,\n\nHere is your trip itinerary for your upcoming vacation. Have a great trip!\n\nBest,\nTravel Agency",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f6g7h8",
          "sender": "lucas.white@example.com",
          "title": "Re: Request for Information",
          "time": "2025-02-04T15:00:00Z",
          "email_body": "Hi,\n\nPlease find attached the requested information. Let me know if you need anything else.\n\nRegards,\nLucas",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f6g738",
          "sender": "rewards@loyalty.com",
          "title": "You've Earned Reward Points!",
          "time": "2025-02-03T09:30:00Z",
          "email_body": "Hi,\n\nYou’ve earned 500 reward points! Redeem them now for exclusive benefits.\n\nCheers,\nLoyalty Team",
          "status": "unread"
        },
        {
          "id": "a1b2c3d4e5f6g7h8",
          "sender": "info@conference2025.com",
          "title": "Early Bird Registration Open",
          "time": "2025-02-02T10:45:00Z",
          "email_body": "Hello,\n\nEarly bird registration for Conference 2025 is now open. Reserve your spot today!\n\nRegards,\nConference Team",
          "status": "unread"
        }
    ],
    trash: [],
    isViewingTrash: false,
    currentlyOpenedEmailId: null
};

// Function to highlight active section
function setActiveSection(section) {
    document.getElementById("inbox-btn").classList.remove("active");
    document.getElementById("trash-btn").classList.remove("active");

    document.getElementById(section).classList.add("active");
}

// Function to display Inbox
function showInbox() {
    state.isViewingTrash = false;
    setActiveSection("inbox-btn"); // Highlight Inbox
    renderEmails(searchInput.value);
    clearEmailView();
}

// Function to display Trash
function showTrash() {
    state.isViewingTrash = true;
    setActiveSection("trash-btn"); // Highlight Trash
    renderEmails(searchInput.value);
    clearEmailView();
}

// Attach event listeners
document.getElementById("inbox-btn").addEventListener("click", showInbox);
document.getElementById("trash-btn").addEventListener("click", showTrash);

// Highlight Inbox by Default when Page Loads
window.addEventListener("DOMContentLoaded", () => {
    setActiveSection("inbox-btn"); // Highlight Inbox initially
    renderEmails(); // Load emails
});



// Save state to localStorage
function saveState() {
    localStorage.setItem("emailAppState", JSON.stringify(state));
}

// Render Emails
function renderEmails(filterText = "") {
    emailListContainer.innerHTML = "";
    const emailSource = state.isViewingTrash ? state.trash : state.emails;

    emailSource
        .filter(email =>
            email.sender.toLowerCase().includes(filterText.toLowerCase()) ||
            email.title.toLowerCase().includes(filterText.toLowerCase()) ||
            email.email_body.toLowerCase().includes(filterText.toLowerCase())
        )
        .forEach(email => {
            const emailItem = document.createElement("div");
            emailItem.classList.add("email-item");

            if (email.id === state.currentlyOpenedEmailId) {
                emailItem.classList.add("visited");
            } else if (email.status === "unread") {
                emailItem.classList.add("unread");
            } else {
                emailItem.classList.add("read");
            }

            emailItem.innerHTML = `<strong>${email.sender}</strong> - ${email.title} <br> ${formatTime(email.time)}`;
            emailItem.addEventListener("click", () => openEmail(email));
            emailListContainer.appendChild(emailItem);
        });
}

// Open Email
function openEmail(email) {
    // Check if the current URL already has the correct emailId
    if (window.location.search !== `?emailId=${email.id}`) {
        history.pushState(null, "", `?emailId=${email.id}`);
    }

    state.currentlyOpenedEmailId = email.id; // Track the opened email

    if (!state.isViewingTrash) {
        email.status = "read"; // Mark as read when opened
    }

    emailDetailsContainer.innerHTML = `
        <h2>${email.title}</h2>
        <p><strong>From:</strong> ${email.sender}</p>
        <p><strong>Time:</strong> ${formatTime(email.time)}</p>
        <p>${email.email_body.replace(/\n/g, "<br>")}</p>
    `;

    // Show appropriate button based on whether the email is in the Trash
    if (state.isViewingTrash) {
        // Show "Undo Delete" button when viewing Trash
        const undoButton = document.createElement("button");
        undoButton.textContent = "Undo Delete";
        undoButton.classList.add("undo-btn");
        undoButton.addEventListener("click", () => undoDelete(email.id));
        emailDetailsContainer.appendChild(undoButton);
    } else {
        // Show "Delete Email" button when viewing Inbox
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Email";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", () => deleteEmail(email.id));
        emailDetailsContainer.appendChild(deleteButton);
    }

    renderEmails(searchInput.value);
}


// Function to load email from URL on page refresh
function loadEmailFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const emailId = urlParams.get("emailId");

    if (emailId) {
        const email = [...state.emails, ...state.trash].find(e => e.id === emailId);
        if (email) {
            openEmail(email); // Open the email if found
            return;
        }
    }

    // If no email is selected, show an empty right panel
    emailDetailsContainer.innerHTML = `<p style="text-align: center; color: gray;">No email selected</p>`;
}

// Load email on page refresh
window.addEventListener("load", loadEmailFromURL);




// Delete Email
function deleteEmail(emailId) {
    const emailIndex = state.emails.findIndex(email => email.id === emailId);
    if (emailIndex !== -1) {
        const deletedEmail = state.emails.splice(emailIndex, 1)[0];
        deletedEmail.status = "deleted";
        state.trash.push(deletedEmail);
        state.currentlyOpenedEmailId = null;
        emailDetailsContainer.innerHTML = "";
        saveState();
        renderEmails(searchInput.value);
    }
}

// Undo Delete
function undoDelete(emailId) {
    const emailIndex = state.trash.findIndex(email => email.id === emailId);
    if (emailIndex !== -1) {
        const restoredEmail = state.trash.splice(emailIndex, 1)[0];
        
        // Do NOT reset status, just move back to inbox
        state.emails.push(restoredEmail);

        state.currentlyOpenedEmailId = null;
        emailDetailsContainer.innerHTML = "";

        saveState();
        renderEmails(searchInput.value);
    }
}

// Handle Inbox and Trash View
inboxButton.addEventListener("click", () => {
    state.isViewingTrash = false;
    state.currentlyOpenedEmailId = null;
    renderEmails(searchInput.value);
    emailDetailsContainer.innerHTML = "";
    saveState();
});

trashButton.addEventListener("click", () => {
    state.isViewingTrash = true;
    state.currentlyOpenedEmailId = null;
    renderEmails(searchInput.value);
    emailDetailsContainer.innerHTML = "";
    saveState();
});

// Search Functionality
searchInput.addEventListener("input", () => {
    renderEmails(searchInput.value);
});

// Format Time
function formatTime(isoString) {
    const date = new Date(isoString);
    return date.toLocaleString();
}

// Initialize Emails from Saved State
renderEmails();
