const SUPABASE_URL = "https://ckxqnxbdrhyknibwydep.supabase.co";
const SUPABASE_ANON_KEY =
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNreHFueGJkcmh5a25pYnd5ZGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3NTU2MzYsImV4cCI6MjA5NTMzMTYzNn0.8mYmj0KLFopES15-XhuvImLN_pJxoPEcRweM48vOjBA";
const WAITLIST_TABLE = "waitlist";

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const waitlistForm = document.getElementById("waitlistForm");
const submitButton = document.getElementById("submitButton");
const formMessage = document.getElementById("formMessage");

menuButton.addEventListener("click", () => {
 navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (event) => {
 if (event.target.matches("a")) {
 navLinks.classList.remove("open");
 }
});

waitlistForm.addEventListener("submit", async (event) => {
 event.preventDefault();

 const formData = new FormData(waitlistForm);
 const signup = {
 name: cleanText(formData.get("name")),
 email: cleanText(formData.get("email")).toLowerCase(),
 business_type: cleanText(formData.get("business")),
 source: "github-pages-homepage",
 };

 if (!signup.name || !isValidEmail(signup.email) || !signup.business_type) {
 showMessage("Please enter a valid name, email, and business type.", true);
 return;
 }

 setLoading(true);
 showMessage("Saving your spot...", false);

 try {
 const response = await fetch(`${SUPABASE_URL}/rest/v1/${WAITLIST_TABLE}`, {
 method: "POST",
 headers: {
 apikey: SUPABASE_ANON_KEY,
 Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
 "Content-Type": "application/json",
 Prefer: "return=minimal",
 },
 body: JSON.stringify(signup),
 });

 if (!response.ok) {
 const errorText = await response.text();

 if (errorText.includes("duplicate") || response.status === 409) {
 showMessage("You are already on the early access list.", false);
 waitlistForm.reset();
 return;
 }

 throw new Error(errorText || `Supabase returned ${response.status}`);
 }

 waitlistForm.reset();
 showMessage("You're on the early access list. We'll be in touch soon.", false);
 } catch (error) {
 console.error("Waitlist signup failed:", error);
 showMessage(
 "Could not save yet. Check your Supabase table and Row Level Security policy.",
 true,
 );
 } finally {
 setLoading(false);
 }
});

function cleanText(value) {
 return String(value || "").trim();
}

function isValidEmail(email) {
 return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setLoading(isLoading) {
 submitButton.disabled = isLoading;
 submitButton.textContent = isLoading ? "Saving..." : "Request early access";
}

function showMessage(message, isError) {
 formMessage.textContent = message;
 formMessage.classList.toggle("error", isError);
}
