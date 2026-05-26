setupNavigation();
 setupTabs();
 renderEmailList();
 renderLeadBoard();
 selectEmail(selectedEmail.id);
 renderFollowups();
 calculateRoi();
 setupDemoActions();

 if (elements.emailList) {
 setupTabs();
 renderEmailList();
 renderLeadBoard();
 selectEmail(selectedEmail.id);
 renderFollowups();
 calculateRoi();
 setupDemoActions();
 }

 setupWaitlistForm();
function setupNavigation() {
 if (!elements.menuButton || !elements.navLinks) {
 return;
 }

 elements.menuButton.addEventListener("click", () => {
 tab.classList.add("active");
 document.getElementById(tab.dataset.panel).classList.add("active");
 document.getElementById(tab.dataset.panel)?.classList.add("active");
 });
function renderEmailList() {
 if (!elements.emailList) {
 return;
 }

 elements.emailList.innerHTML = demoEmails
function selectEmail(emailId) {
 if (!elements.draftText) {
 return;
 }

 selectedEmail = demoEmails.find((email) => email.id === emailId) || demoEmails[0];
function setupDemoActions() {
 elements.generateReply.addEventListener("click", () => {
 elements.generateReply?.addEventListener("click", () => {
 elements.draftText.value = buildReply(selectedEmail);

 elements.copyReply.addEventListener("click", async () => {
 elements.copyReply?.addEventListener("click", async () => {
 try {

 elements.addFollowup.addEventListener("click", () => {
 elements.addFollowup?.addEventListener("click", () => {
 const followups = getFollowups();

 elements.clearFollowups.addEventListener("click", () => {
 elements.clearFollowups?.addEventListener("click", () => {
 saveFollowups([]);

 [elements.replyTone, elements.replyGoal].forEach((control) => {
 [elements.replyTone, elements.replyGoal].filter(Boolean).forEach((control) => {
 control.addEventListener("change", () => {

 [elements.monthlyLeads, elements.leadValue, elements.savedRate].forEach((input) => {
 [elements.monthlyLeads, elements.leadValue, elements.savedRate].filter(Boolean).forEach((input) => {
 input.addEventListener("input", calculateRoi);
function buildReply(email) {
 const tone = elements.replyTone.value;
 const goal = elements.replyGoal.value;
 const tone = elements.replyTone?.value || "professional";
 const goal = elements.replyGoal?.value || "book";
 const greeting = tone === "friendly" ? `Hi ${email.customer},` : `Hello ${email.customer},`;
function renderLeadBoard() {
 if (!elements.leadBoard) {
 return;
 }

 elements.leadBoard.innerHTML = demoEmails
function renderFollowups() {
 if (!elements.followupList) {
 return;
 }

 const followups = getFollowups();
 follow: "Check back again in 2 business days if there is no response.",
 }[elements.replyGoal.value];
 }[elements.replyGoal?.value || "book"];
}
function updateStats() {
 if (!elements.hotLeadCount || !elements.replyCount) {
 return;
 }

 const hotLeads = demoEmails.filter((email) => email.score >= 88).length;
function calculateRoi() {
 if (!elements.monthlyLeads || !elements.leadValue || !elements.savedRate) {
 return;
 }

 const leads = Number(elements.monthlyLeads.value || 0);
function showDemoMessage(message) {
 if (!elements.demoMessage) {
 return;
 }

 elements.demoMessage.textContent = message;
function setupWaitlistForm() {
 if (!elements.waitlistForm) {
 return;
 }

 elements.waitlistForm.addEventListener("submit", async (event) => {
 showFormMessage(
 "Jacob your a retard it could not save yet. Check your Supabase table, columns, and Row Level Security policy.",
 "Could not save yet. Check your Supabase table, columns, and public insert grant.",
 true,
function setLoading(isLoading) {
 if (!elements.submitButton) {
 return;
 }

 elements.submitButton.disabled = isLoading;
function showFormMessage(message, isError) {
 if (!elements.formMessage) {
 return;
 }

 elements.formMessage.textContent = message;
