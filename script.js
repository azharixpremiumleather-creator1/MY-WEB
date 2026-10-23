const courses = [
{name:"Web Development",category:"Development",icon:"⌘",duration:"4 months",months:4,level:"Beginner",price:18000,description:"Build responsive websites with HTML, CSS, JavaScript and practical projects."},
{name:"Python Programming",category:"Development",icon:"{ }",duration:"3 months",months:3,level:"Beginner",price:15000,description:"Learn Python fundamentals, automation basics and problem-solving."},
{name:"Front-End Development",category:"Development",icon:"</>",duration:"3 months",months:3,level:"Beginner",price:16000,description:"Create polished interfaces using HTML, CSS, JavaScript and modern workflows."},
{name:"Full-Stack Development",category:"Development",icon:"⌘",duration:"6 months",months:6,level:"Intermediate",price:35000,description:"Explore front-end, back-end, APIs, databases and deployment concepts."},
{name:"WordPress Website Design",category:"Development",icon:"W",duration:"2 months",months:2,level:"Beginner",price:10000,description:"Build and manage websites using WordPress, themes and plugins."},
{name:"Graphic Design",category:"Design",icon:"✳",duration:"3 months",months:3,level:"Beginner",price:14000,description:"Learn design principles, layouts, branding and social media creatives."},
{name:"UI/UX Design",category:"Design",icon:"◈",duration:"3 months",months:3,level:"Beginner",price:18000,description:"Practice user research, wireframes, prototypes and interface design."},
{name:"Video Editing",category:"Design",icon:"▶",duration:"2 months",months:2,level:"Beginner",price:12000,description:"Learn editing workflow, transitions, audio cleanup and short-form videos."},
{name:"Microsoft Office",category:"Office Skills",icon:"▦",duration:"2 months",months:2,level:"Beginner",price:8000,description:"Build practical skills in Word, Excel, PowerPoint and document formatting."},
{name:"Computer Fundamentals",category:"Office Skills",icon:"▣",duration:"1 month",months:1,level:"Beginner",price:5000,description:"Understand computer basics, files, internet use and everyday digital skills."},
{name:"Advanced Excel",category:"Office Skills",icon:"▤",duration:"2 months",months:2,level:"Intermediate",price:10000,description:"Work with formulas, charts, data cleanup, pivot tables and reports."},
{name:"Cybersecurity Basics",category:"IT & Security",icon:"⛨",duration:"3 months",months:3,level:"Beginner",price:20000,description:"Explore online safety, security fundamentals, threats and defensive practices."},
{name:"Networking Fundamentals",category:"IT & Security",icon:"⌁",duration:"3 months",months:3,level:"Beginner",price:18000,description:"Learn network concepts, IP addressing, devices and troubleshooting."},
{name:"Digital Marketing",category:"Marketing",icon:"↗",duration:"2 months",months:2,level:"Beginner",price:13000,description:"Explore SEO, content planning, social media and campaign fundamentals."},
{name:"Data Analytics & AI Basics",category:"Data & AI",icon:"◉",duration:"4 months",months:4,level:"Beginner",price:25000,description:"Get started with data literacy, spreadsheets, visualization and AI concepts."}
];
const grid=document.getElementById("courseGrid"),search=document.getElementById("search"),category=document.getElementById("category"),duration=document.getElementById("duration"),count=document.getElementById("courseCount"),empty=document.getElementById("emptyState"),courseSelect=document.getElementById("courseSelect");
const formatPrice=n=>"Rs. "+n.toLocaleString("en-PK");
function renderCourses(){
 const q=search.value.trim().toLowerCase(),cat=category.value,dur=duration.value;
 const filtered=courses.filter(c=>{
  const text=[c.name,c.category,c.description,c.level].join(" ").toLowerCase().includes(q);
  const catMatch=cat==="all"||c.category===cat;
  const durMatch=dur==="all"||(dur==="short"&&c.months<=2)||(dur==="medium"&&c.months>=3&&c.months<=4)||(dur==="long"&&c.months>=5);
  return text&&catMatch&&durMatch;
 });
 count.textContent=filtered.length;empty.hidden=filtered.length>0;
 grid.innerHTML=filtered.map(c=>`<article class="course-card"><div class="card-top"><div class="course-icon" aria-hidden="true">${c.icon}</div><span class="level">${c.level}</span></div><h3>${c.name}</h3><p>${c.description}</p><div class="meta"><span>${c.duration}</span><span>${c.category}</span></div><div class="card-bottom"><div><span class="price-label">Sample course fee</span><div class="price">${formatPrice(c.price)} <small>/ course</small></div></div><button class="ask-btn" data-course="${c.name}">Ask about it ↗</button></div></article>`).join("");
 grid.querySelectorAll("[data-course]").forEach(btn=>btn.addEventListener("click",()=>{courseSelect.value=btn.dataset.course;document.getElementById("contact").scrollIntoView({behavior:"smooth"});}));
}
courses.forEach(c=>{const o=document.createElement("option");o.value=c.name;o.textContent=c.name;courseSelect.appendChild(o)});
[search,category,duration].forEach(el=>el.addEventListener("input",renderCourses));renderCourses();
const menuToggle=document.getElementById("menuToggle"),nav=document.getElementById("nav");
menuToggle.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("contactForm").addEventListener("submit",e=>{
 e.preventDefault();const d=new FormData(e.currentTarget);
 const subject=encodeURIComponent("AZHARIX course inquiry: "+d.get("course"));
 const body=encodeURIComponent(`Name: ${d.get("name")}\nEmail: ${d.get("email")}\nCourse: ${d.get("course")}\n\nMessage:\n${d.get("message")||""}`);
 // Replace with your real academy email before publishing.
 window.location.href=`mailto:hello@azharix.example?subject=${subject}&body=${body}`;
});