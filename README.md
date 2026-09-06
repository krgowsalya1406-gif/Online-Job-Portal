<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JobFlow — Online Job Portal</title>

<style>
/* =========================================================
   RESET
========================================================= */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:Inter,Segoe UI,Arial,sans-serif;
    background:#070707;
    color:#fff;
    overflow-x:hidden;
}

button,
input,
select,
textarea{
    font:inherit;
}

button{
    cursor:pointer;
}

a{
    color:inherit;
    text-decoration:none;
}

/* =========================================================
   VARIABLES
========================================================= */
:root{
    --bg:#070707;
    --card:#101010;
    --card2:#151515;
    --line:#282828;
    --muted:#929292;
    --white:#fff;
    --accent:#b8ff4d;
    --accent2:#75e6ff;
    --danger:#ff667a;
}

/* =========================================================
   BACKGROUND
========================================================= */
body::before{
    content:"";
    position:fixed;
    width:600px;
    height:600px;
    left:-250px;
    top:-250px;
    background:radial-gradient(circle,rgba(184,255,77,.09),transparent 65%);
    pointer-events:none;
    z-index:-2;
}

body::after{
    content:"";
    position:fixed;
    width:600px;
    height:600px;
    right:-250px;
    bottom:-250px;
    background:radial-gradient(circle,rgba(117,230,255,.07),transparent 65%);
    pointer-events:none;
    z-index:-2;
}

/* =========================================================
   NAVBAR
========================================================= */
.navbar{
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:1000;
    height:76px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 6%;
    background:rgba(7,7,7,.78);
    backdrop-filter:blur(20px);
    border-bottom:1px solid rgba(255,255,255,.07);
}

.logo{
    display:flex;
    align-items:center;
    gap:10px;
    font-size:21px;
    font-weight:800;
    letter-spacing:-.5px;
}

.logo-mark{
    width:34px;
    height:34px;
    display:grid;
    place-items:center;
    border-radius:10px;
    color:#000;
    background:var(--accent);
    font-weight:900;
}

.nav-links{
    display:flex;
    align-items:center;
    gap:25px;
}

.nav-links a{
    color:#aaa;
    font-size:14px;
    transition:.25s;
}

.nav-links a:hover{
    color:#fff;
}

.nav-actions{
    display:flex;
    align-items:center;
    gap:10px;
}

.nav-btn{
    border:1px solid var(--line);
    background:#111;
    color:#fff;
    padding:10px 15px;
    border-radius:10px;
    font-size:13px;
}

.nav-btn.primary{
    background:var(--accent);
    color:#000;
    border-color:var(--accent);
    font-weight:700;
}

.menu-btn{
    display:none;
    border:1px solid var(--line);
    background:#111;
    color:#fff;
    width:40px;
    height:40px;
    border-radius:10px;
}

/* =========================================================
   HERO
========================================================= */
.hero{
    min-height:100vh;
    padding:160px 6% 90px;
    display:grid;
    grid-template-columns:1.15fr .85fr;
    gap:70px;
    align-items:center;
}

.badge{
    display:inline-flex;
    align-items:center;
    gap:8px;
    padding:8px 13px;
    border:1px solid #292929;
    border-radius:999px;
    background:#101010;
    color:#bbb;
    font-size:12px;
    margin-bottom:25px;
}

.badge-dot{
    width:7px;
    height:7px;
    border-radius:50%;
    background:var(--accent);
    box-shadow:0 0 15px var(--accent);
}

.hero h1{
    font-size:clamp(48px,7vw,92px);
    line-height:.94;
    letter-spacing:-5px;
    max-width:850px;
}

.hero h1 span{
    color:var(--accent);
}

.hero-description{
    max-width:650px;
    color:#999;
    font-size:17px;
    line-height:1.8;
    margin:28px 0;
}

.hero-buttons{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
}

.btn{
    border:none;
    padding:14px 20px;
    border-radius:12px;
    font-weight:700;
    transition:.25s;
}

.btn:hover{
    transform:translateY(-3px);
}

.btn-main{
    background:var(--accent);
    color:#000;
}

.btn-dark{
    background:#111;
    color:#fff;
    border:1px solid var(--line);
}

.hero-visual{
    position:relative;
    min-height:520px;
    display:grid;
    place-items:center;
}

.dashboard-card{
    width:min(100%,480px);
    border:1px solid #292929;
    border-radius:28px;
    background:linear-gradient(145deg,#151515,#0c0c0c);
    padding:20px;
    box-shadow:0 40px 100px rgba(0,0,0,.5);
    transform:rotate(3deg);
}

.dashboard-top{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:25px;
}

.dashboard-top h3{
    font-size:18px;
}

.status{
    color:var(--accent);
    font-size:11px;
    border:1px solid #344525;
    background:#11170d;
    padding:7px 10px;
    border-radius:999px;
}

.search-demo{
    border:1px solid #282828;
    background:#0b0b0b;
    padding:15px;
    border-radius:14px;
    display:flex;
    gap:10px;
    margin-bottom:15px;
}

.search-demo span{
    color:#777;
}

.job-mini{
    display:flex;
    align-items:center;
    gap:12px;
    padding:14px;
    background:#111;
    border:1px solid #222;
    border-radius:14px;
    margin-top:10px;
}

.job-icon{
    width:42px;
    height:42px;
    display:grid;
    place-items:center;
    background:#1c1c1c;
    border-radius:12px;
}

.job-info{
    flex:1;
}

.job-info h4{
    font-size:14px;
}

.job-info p{
    font-size:11px;
    color:#777;
    margin-top:4px;
}

.salary{
    color:var(--accent);
    font-size:12px;
}

.float-card{
    position:absolute;
    padding:15px;
    border:1px solid #292929;
    background:#101010;
    border-radius:16px;
    box-shadow:0 20px 50px #000;
}

.float-card.one{
    top:40px;
    right:0;
}

.float-card.two{
    bottom:50px;
    left:0;
}

.float-card strong{
    display:block;
    font-size:20px;
}

.float-card small{
    color:#777;
}

/* =========================================================
   SECTIONS
========================================================= */
section{
    padding:100px 6%;
}

.section-heading{
    max-width:700px;
    margin-bottom:45px;
}

.eyebrow{
    color:var(--accent);
    text-transform:uppercase;
    letter-spacing:3px;
    font-size:11px;
    font-weight:800;
    margin-bottom:14px;
}

.section-heading h2{
    font-size:clamp(34px,5vw,60px);
    letter-spacing:-2px;
    line-height:1;
}

.section-heading p{
    color:#858585;
    margin-top:18px;
    line-height:1.7;
}

/* =========================================================
   FEATURE CARDS
========================================================= */
.features{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:16px;
}

.feature{
    min-height:210px;
    padding:25px;
    background:#0f0f0f;
    border:1px solid #242424;
    border-radius:20px;
    transition:.3s;
}

.feature:hover{
    transform:translateY(-7px);
    border-color:#444;
}

.feature-icon{
    font-size:28px;
    margin-bottom:35px;
}

.feature h3{
    margin-bottom:10px;
}

.feature p{
    color:#777;
    font-size:14px;
    line-height:1.6;
}

/* =========================================================
   SCREENSHOT GALLERY
========================================================= */
.gallery{
    background:#0a0a0a;
}

.gallery-filter{
    display:flex;
    flex-wrap:wrap;
    gap:9px;
    margin-bottom:30px;
}

.filter-btn{
    padding:10px 15px;
    border-radius:999px;
    background:#111;
    border:1px solid #292929;
    color:#999;
}

.filter-btn.active,
.filter-btn:hover{
    color:#000;
    background:var(--accent);
    border-color:var(--accent);
}

.screenshot-grid{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:20px;
}

.screen-card{
    overflow:hidden;
    border:1px solid #242424;
    background:#101010;
    border-radius:20px;
    transition:.35s;
}

.screen-card:hover{
    transform:translateY(-7px);
    border-color:#454545;
}

.screen-image{
    height:230px;
    background:
        linear-gradient(135deg,#191919,#0b0b0b);
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    overflow:hidden;
}

.screen-image img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
}

.placeholder{
    text-align:center;
    color:#555;
    font-size:14px;
}

.placeholder b{
    display:block;
    color:#999;
    font-size:28px;
    margin-bottom:8px;
}

.screen-content{
    padding:18px;
}

.screen-content h3{
    font-size:17px;
    margin-bottom:7px;
}

.screen-content p{
    color:#777;
    font-size:13px;
    line-height:1.5;
}

.view-btn{
    margin-top:14px;
    border:1px solid #2a2a2a;
    background:#151515;
    color:#fff;
    padding:9px 13px;
    border-radius:9px;
    font-size:12px;
}

/* =========================================================
   WORKFLOW
========================================================= */
.workflow{
    display:grid;
    grid-template-columns:repeat(5,1fr);
    gap:0;
}

.step{
    position:relative;
    padding:25px;
    border-top:1px solid #292929;
}

.step-number{
    width:38px;
    height:38px;
    display:grid;
    place-items:center;
    background:var(--accent);
    color:#000;
    border-radius:50%;
    font-weight:800;
    margin-bottom:20px;
}

.step h3{
    font-size:16px;
    margin-bottom:8px;
}

.step p{
    color:#777;
    font-size:13px;
    line-height:1.6;
}

/* =========================================================
   RESUME BUILDER
========================================================= */
.resume-area{
    display:grid;
    grid-template-columns:.8fr 1.2fr;
    gap:25px;
}

.resume-form,
.resume-preview{
    background:#101010;
    border:1px solid #272727;
    border-radius:22px;
    padding:25px;
}

.resume-form h3,
.resume-preview h3{
    margin-bottom:20px;
}

.form-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:12px;
}

.form-group{
    margin-bottom:13px;
}

.form-group.full{
    grid-column:1/-1;
}

.form-group label{
    display:block;
    color:#888;
    font-size:11px;
    margin-bottom:7px;
}

.form-group input,
.form-group textarea,
.form-group select{
    width:100%;
    border:1px solid #292929;
    background:#090909;
    color:#fff;
    border-radius:10px;
    padding:11px;
    outline:none;
}

.form-group textarea{
    min-height:85px;
    resize:vertical;
}

.resume-preview{
    background:#f4f4f4;
    color:#111;
}

.resume-paper{
    background:#fff;
    min-height:500px;
    padding:35px;
    border-radius:5px;
}

.resume-paper h1{
    font-size:28px;
    margin-bottom:4px;
}

.resume-paper .role{
    color:#555;
    margin-bottom:18px;
}

.resume-section{
    margin-top:18px;
}

.resume-section h4{
    font-size:12px;
    text-transform:uppercase;
    border-bottom:1px solid #ddd;
    padding-bottom:6px;
    margin-bottom:8px;
}

.resume-section p{
    font-size:12px;
    line-height:1.6;
    color:#555;
}

/* =========================================================
   APPLICATIONS
========================================================= */
.application-table{
    overflow:auto;
    border:1px solid #262626;
    border-radius:18px;
}

table{
    width:100%;
    border-collapse:collapse;
    min-width:700px;
}

th,
td{
    padding:17px;
    text-align:left;
    border-bottom:1px solid #222;
}

th{
    color:#777;
    font-size:11px;
    text-transform:uppercase;
}

td{
    font-size:13px;
}

.status-pill{
    display:inline-block;
    padding:6px 9px;
    border-radius:999px;
    font-size:10px;
}

.pending{
    background:#332d17;
    color:#ffd75e;
}

.shortlisted{
    background:#15331e;
    color:#6dff9a;
}

.interview{
    background:#182c39;
    color:#75e6ff;
}

/* =========================================================
   RECRUITER
========================================================= */
.recruiter-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:15px;
    margin-bottom:25px;
}

.stat-card{
    padding:22px;
    border:1px solid #252525;
    background:#101010;
    border-radius:17px;
}

.stat-card span{
    color:#777;
    font-size:12px;
}

.stat-card strong{
    display:block;
    font-size:32px;
    margin-top:8px;
}

/* =========================================================
   CTA
========================================================= */
.cta{
    text-align:center;
    padding:130px 6%;
}

.cta-box{
    max-width:950px;
    margin:auto;
    padding:70px 30px;
    border:1px solid #2b2b2b;
    border-radius:30px;
    background:
        radial-gradient(circle at center,rgba(184,255,77,.08),transparent 50%),
        #101010;
}

.cta h2{
    font-size:clamp(38px,6vw,70px);
    letter-spacing:-3px;
}

.cta p{
    color:#777;
    max-width:600px;
    margin:18px auto 25px;
    line-height:1.7;
}

/* =========================================================
   FOOTER
========================================================= */
footer{
    padding:35px 6%;
    border-top:1px solid #1e1e1e;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#666;
    font-size:12px;
}

/* =========================================================
   MODAL
========================================================= */
.modal{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.88);
    backdrop-filter:blur(15px);
    display:none;
    align-items:center;
    justify-content:center;
    padding:25px;
    z-index:2000;
}

.modal.show{
    display:flex;
}

.modal-box{
    width:min(1000px,100%);
    max-height:90vh;
    overflow:auto;
    background:#101010;
    border:1px solid #333;
    border-radius:22px;
    padding:20px;
}

.modal-header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:15px;
}

.close{
    width:38px;
    height:38px;
    border-radius:10px;
    border:1px solid #333;
    background:#171717;
    color:#fff;
}

.modal-image{
    min-height:450px;
    background:#080808;
    border-radius:15px;
    overflow:hidden;
    display:grid;
    place-items:center;
}

.modal-image img{
    max-width:100%;
    max-height:70vh;
    object-fit:contain;
}

.modal-description{
    color:#777;
    line-height:1.6;
    margin-top:15px;
}

/* =========================================================
   TOAST
========================================================= */
.toast{
    position:fixed;
    right:25px;
    bottom:25px;
    padding:14px 18px;
    border:1px solid #303030;
    background:#151515;
    border-radius:12px;
    color:#fff;
    transform:translateY(100px);
    opacity:0;
    transition:.3s;
    z-index:3000;
}

.toast.show{
    transform:translateY(0);
    opacity:1;
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media(max-width:1000px){

    .nav-links{
        display:none;
    }

    .menu-btn{
        display:block;
    }

    .hero{
        grid-template-columns:1fr;
    }

    .hero-visual{
        min-height:420px;
    }

    .features{
        grid-template-columns:repeat(2,1fr);
    }

    .screenshot-grid{
        grid-template-columns:repeat(2,1fr);
    }

    .workflow{
        grid-template-columns:repeat(2,1fr);
    }

    .resume-area{
        grid-template-columns:1fr;
    }

    .recruiter-grid{
        grid-template-columns:repeat(2,1fr);
    }
}

@media(max-width:650px){

    .navbar{
        padding:0 4%;
    }

    .nav-actions .nav-btn{
        display:none;
    }

    section{
        padding:75px 5%;
    }

    .hero{
        padding:130px 5% 70px;
    }

    .hero h1{
        letter-spacing:-3px;
    }

    .hero-description{
        font-size:15px;
    }

    .features,
    .screenshot-grid,
    .workflow,
    .recruiter-grid{
        grid-template-columns:1fr;
    }

    .form-grid{
        grid-template-columns:1fr;
    }

    .form-group.full{
        grid-column:auto;
    }

    .dashboard-card{
        transform:none;
    }

    .float-card{
        display:none;
    }

    footer{
        flex-direction:column;
        gap:10px;
    }
}
</style>
</head>

<body>

<!-- =====================================================
     NAVBAR
===================================================== -->

<header class="navbar">

    <a href="#home" class="logo">
        <span class="logo-mark">J</span>
        JobFlow
    </a>

    <nav class="nav-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#screenshots">Screenshots</a>
        <a href="#resume">Resume Builder</a>
        <a href="#applications">Applications</a>
        <a href="#recruiter">Recruiter</a>
    </nav>

    <div class="nav-actions">
        <button class="nav-btn" onclick="showToast('Login page opened')">
            Login
        </button>

        <button class="nav-btn primary" onclick="showToast('Create account page opened')">
            Create Account
        </button>

        <button class="menu-btn" onclick="showToast('Navigation menu')">
            ☰
        </button>
    </div>

</header>


<!-- =====================================================
     HERO
===================================================== -->

<section class="hero" id="home">

    <div>

        <div class="badge">
            <span class="badge-dot"></span>
            Full-Stack Recruitment Platform
        </div>

        <h1>
            Find your next
            <span>opportunity.</span>
        </h1>

        <p class="hero-description">
            A modern online job portal connecting talented candidates
            with companies through intelligent job discovery,
            professional profiles, resume building and application tracking.
        </p>

        <div class="hero-buttons">

            <button class="btn btn-main"
                    onclick="document.getElementById('screenshots').scrollIntoView()">
                Explore Platform →
            </button>

            <button class="btn btn-dark"
                    onclick="document.getElementById('resume').scrollIntoView()">
                Build Resume
            </button>

        </div>

    </div>


    <div class="hero-visual">

        <div class="dashboard-card">

            <div class="dashboard-top">
                <h3>Find your dream job</h3>
                <span class="status">● Online</span>
            </div>

            <div class="search-demo">
                🔎
                <span>Search Full Stack Developer...</span>
            </div>

            <div class="job-mini">
                <div class="job-icon">💻</div>

                <div class="job-info">
                    <h4>Full Stack Developer</h4>
                    <p>TechNova · Remote</p>
                </div>

                <span class="salary">₹8L</span>
            </div>

            <div class="job-mini">
                <div class="job-icon">⚡</div>

                <div class="job-info">
                    <h4>Frontend Engineer</h4>
                    <p>Pixel Labs · Chennai</p>
                </div>

                <span class="salary">₹6L</span>
            </div>

            <div class="job-mini">
                <div class="job-icon">🚀</div>

                <div class="job-info">
                    <h4>Software Engineer</h4>
                    <p>FutureStack · Bangalore</p>
                </div>

                <span class="salary">₹10L</span>
            </div>

        </div>

        <div class="float-card one">
            <strong>1,248</strong>
            <small>Active Jobs</small>
        </div>

        <div class="float-card two">
            <strong>94%</strong>
            <small>Profile Match</small>
        </div>

    </div>

</section>


<!-- =====================================================
     FEATURES
===================================================== -->

<section id="features">

    <div class="section-heading">
        <div class="eyebrow">Platform</div>

        <h2>
            Everything a modern job portal needs.
        </h2>

        <p>
            Designed for both job seekers and recruiters with a
            complete recruitment workflow.
        </p>
    </div>


    <div class="features">

        <div class="feature">
            <div class="feature-icon">🔎</div>
            <h3>Smart Job Search</h3>
            <p>
                Search opportunities using role, location,
                salary, experience and job type filters.
            </p>
        </div>

        <div class="feature">
            <div class="feature-icon">📄</div>
            <h3>Resume Builder</h3>
            <p>
                Create a professional resume with a structured
                resume-building workflow.
            </p>
        </div>

        <div class="feature">
            <div class="feature-icon">📊</div>
            <h3>Application Tracking</h3>
            <p>
                Track every application from submission to
                interview and final result.
            </p>
        </div>

        <div class="feature">
            <div class="feature-icon">🏢</div>
            <h3>Recruiter Dashboard</h3>
            <p>
                Recruiters can publish jobs, manage applicants
                and schedule interviews.
            </p>
        </div>

    </div>

</section>


<!-- =====================================================
     SCREENSHOT GALLERY
===================================================== -->

<section class="gallery" id="screenshots">

    <div class="section-heading">

        <div class="eyebrow">Product Screens</div>

        <h2>
            Explore the complete user journey.
        </h2>

        <p>
            Replace the placeholder images with screenshots from
            your actual Online Job Portal project.
        </p>

    </div>


    <div class="gallery-filter">

        <button class="filter-btn active"
                onclick="filterScreens('all',this)">
            All
        </button>

        <button class="filter-btn"
                onclick="filterScreens('candidate',this)">
            Candidate
        </button>

        <button class="filter-btn"
                onclick="filterScreens('recruiter',this)">
            Recruiter
        </button>

        <button class="filter-btn"
                onclick="filterScreens('system',this)">
            System
        </button>

    </div>


    <div class="screenshot-grid">


        <!-- LOGIN -->

        <div class="screen-card" data-category="candidate">

            <div class="screen-image">

                <img
                    src="images/login.png"
                    alt="Login Page"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>🔐</b>
                    login.png
                </div>

            </div>

            <div class="screen-content">
                <h3>01 — Login</h3>
                <p>Secure candidate and recruiter authentication.</p>

                <button class="view-btn"
                        onclick="openImage('images/login.png','Login','Secure user authentication screen.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- CREATE ACCOUNT -->

        <div class="screen-card" data-category="candidate">

            <div class="screen-image">

                <img
                    src="images/create-account.png"
                    alt="Create Account"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>📝</b>
                    create-account.png
                </div>

            </div>

            <div class="screen-content">
                <h3>02 — Create Account</h3>
                <p>Create a Job Seeker or Recruiter account.</p>

                <button class="view-btn"
                        onclick="openImage('images/create-account.png','Create Account','Registration screen.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- HOME -->

        <div class="screen-card" data-category="system">

            <div class="screen-image">

                <img
                    src="images/home.png"
                    alt="Home"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>🏠</b>
                    home.png
                </div>

            </div>

            <div class="screen-content">
                <h3>03 — Home</h3>
                <p>Landing page with job discovery and featured jobs.</p>

                <button class="view-btn"
                        onclick="openImage('images/home.png','Home','Job portal landing page.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- FIND JOBS -->

        <div class="screen-card" data-category="candidate">

            <div class="screen-image">

                <img
                    src="images/find-jobs.png"
                    alt="Find Jobs"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>🔎</b>
                    find-jobs.png
                </div>

            </div>

            <div class="screen-content">
                <h3>04 — Find Jobs</h3>
                <p>Search and filter suitable job opportunities.</p>

                <button class="view-btn"
                        onclick="openImage('images/find-jobs.png','Find Jobs','Job search and filtering interface.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- JOB DETAILS -->

        <div class="screen-card" data-category="candidate">

            <div class="screen-image">

                <img
                    src="images/job-details.png"
                    alt="Job Details"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>💼</b>
                    job-details.png
                </div>

            </div>

            <div class="screen-content">
                <h3>05 — Job Details</h3>
                <p>Complete job information with Apply and Save options.</p>

                <button class="view-btn"
                        onclick="openImage('images/job-details.png','Job Details','Detailed job information page.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- PROFILE -->

        <div class="screen-card" data-category="candidate">

            <div class="screen-image">

                <img
                    src="images/profile.png"
                    alt="Profile"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>👤</b>
                    profile.png
                </div>

            </div>

            <div class="screen-content">
                <h3>06 — My Profile</h3>
                <p>Professional profile with skills, education and experience.</p>

                <button class="view-btn"
                        onclick="openImage('images/profile.png','My Profile','Candidate profile.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- RESUME -->

        <div class="screen-card" data-category="candidate">

            <div class="screen-image">

                <img
                    src="images/resume-builder.png"
                    alt="Resume Builder"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>📑</b>
                    resume-builder.png
                </div>

            </div>

            <div class="screen-content">
                <h3>07 — Resume Builder</h3>
                <p>Create and customize a professional resume.</p>

                <button class="view-btn"
                        onclick="openImage('images/resume-builder.png','Resume Builder','Professional resume creation workflow.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- APPLY -->

        <div class="screen-card" data-category="candidate">

            <div class="screen-image">

                <img
                    src="images/apply-job.png"
                    alt="Apply Job"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>📤</b>
                    apply-job.png
                </div>

            </div>

            <div class="screen-content">
                <h3>08 — Apply for Job</h3>
                <p>Submit resume and application details.</p>

                <button class="view-btn"
                        onclick="openImage('images/apply-job.png','Apply for Job','Online job application form.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- APPLICATIONS -->

        <div class="screen-card" data-category="candidate">

            <div class="screen-image">

                <img
                    src="images/my-applications.png"
                    alt="My Applications"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>📊</b>
                    my-applications.png
                </div>

            </div>

            <div class="screen-content">
                <h3>09 — My Applications</h3>
                <p>Track application status and recruitment progress.</p>

                <button class="view-btn"
                        onclick="openImage('images/my-applications.png','My Applications','Application tracking dashboard.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- SAVED JOBS -->

        <div class="screen-card" data-category="candidate">

            <div class="screen-image">

                <img
                    src="images/saved-jobs.png"
                    alt="Saved Jobs"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>❤️</b>
                    saved-jobs.png
                </div>

            </div>

            <div class="screen-content">
                <h3>10 — Saved Jobs</h3>
                <p>Save interesting opportunities for later.</p>

                <button class="view-btn"
                        onclick="openImage('images/saved-jobs.png','Saved Jobs','Bookmarked jobs.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- NOTIFICATIONS -->

        <div class="screen-card" data-category="system">

            <div class="screen-image">

                <img
                    src="images/notifications.png"
                    alt="Notifications"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>🔔</b>
                    notifications.png
                </div>

            </div>

            <div class="screen-content">
                <h3>11 — Notifications</h3>
                <p>Application updates and job alerts.</p>

                <button class="view-btn"
                        onclick="openImage('images/notifications.png','Notifications','Job and application notifications.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- MESSAGES -->

        <div class="screen-card" data-category="system">

            <div class="screen-image">

                <img
                    src="images/messages.png"
                    alt="Messages"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>💬</b>
                    messages.png
                </div>

            </div>

            <div class="screen-content">
                <h3>12 — Messages</h3>
                <p>Communication between candidates and recruiters.</p>

                <button class="view-btn"
                        onclick="openImage('images/messages.png','Messages','Recruiter communication screen.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- RECRUITER DASHBOARD -->

        <div class="screen-card" data-category="recruiter">

            <div class="screen-image">

                <img
                    src="images/recruiter-dashboard.png"
                    alt="Recruiter Dashboard"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>🏢</b>
                    recruiter-dashboard.png
                </div>

            </div>

            <div class="screen-content">
                <h3>13 — Recruiter Dashboard</h3>
                <p>Manage jobs, applicants, interviews and hiring.</p>

                <button class="view-btn"
                        onclick="openImage('images/recruiter-dashboard.png','Recruiter Dashboard','Recruitment management dashboard.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- POST JOB -->

        <div class="screen-card" data-category="recruiter">

            <div class="screen-image">

                <img
                    src="images/post-job.png"
                    alt="Post Job"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>📢</b>
                    post-job.png
                </div>

            </div>

            <div class="screen-content">
                <h3>14 — Post a Job</h3>
                <p>Recruiters can publish new job openings.</p>

                <button class="view-btn"
                        onclick="openImage('images/post-job.png','Post a Job','Recruiter job posting interface.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- MANAGE JOBS -->

        <div class="screen-card" data-category="recruiter">

            <div class="screen-image">

                <img
                    src="images/manage-jobs.png"
                    alt="Manage Jobs"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>⚙️</b>
                    manage-jobs.png
                </div>

            </div>

            <div class="screen-content">
                <h3>15 — Manage Jobs</h3>
                <p>Manage active, closed and published jobs.</p>

                <button class="view-btn"
                        onclick="openImage('images/manage-jobs.png','Manage Jobs','Recruiter job management.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- APPLICANTS -->

        <div class="screen-card" data-category="recruiter">

            <div class="screen-image">

                <img
                    src="images/applicants.png"
                    alt="Applicants"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>👥</b>
                    applicants.png
                </div>

            </div>

            <div class="screen-content">
                <h3>16 — Applicants</h3>
                <p>Review candidate profiles and application status.</p>

                <button class="view-btn"
                        onclick="openImage('images/applicants.png','Applicants','Candidate management screen.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- CANDIDATE PROFILE -->

        <div class="screen-card" data-category="recruiter">

            <div class="screen-image">

                <img
                    src="images/candidate-profile.png"
                    alt="Candidate Profile"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>👤</b>
                    candidate-profile.png
                </div>

            </div>

            <div class="screen-content">
                <h3>17 — Candidate Profile</h3>
                <p>Recruiters can view candidate details and resume.</p>

                <button class="view-btn"
                        onclick="openImage('images/candidate-profile.png','Candidate Profile','Candidate information and resume.')">
                    View Screenshot
                </button>
            </div>

        </div>


        <!-- INTERVIEW -->

        <div class="screen-card" data-category="recruiter">

            <div class="screen-image">

                <img
                    src="images/interview.png"
                    alt="Interview"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='block';">

                <div class="placeholder" style="display:none">
                    <b>📅</b>
                    interview.png
                </div>

            </div>

            <div class="screen-content">
                <h3>18 — Interview Scheduling</h3>
                <p>Schedule interviews with shortlisted candidates.</p>

                <button class="view-btn"
                        onclick="openImage('images/interview.png','Interview Scheduling','Interview scheduling interface.')">
                    View Screenshot
                </button>
            </div>

        </div>

    </div>

</section>


<!-- =====================================================
     WORKFLOW
===================================================== -->

<section>

    <div class="section-heading">

        <div class="eyebrow">Candidate Journey</div>

        <h2>
            From profile to placement.
        </h2>

    </div>


    <div class="workflow">

        <div class="step">
            <div class="step-number">01</div>
            <h3>Create Account</h3>
            <p>Register as a candidate and create your profile.</p>
        </div>

        <div class="step">
            <div class="step-number">02</div>
            <h3>Build Resume</h3>
            <p>Create a professional resume using the resume builder.</p>
        </div>

        <div class="step">
            <div class="step-number">03</div>
            <h3>Find Jobs</h3>
            <p>Search for jobs matching your skills and interests.</p>
        </div>

        <div class="step">
            <div class="step-number">04</div>
            <h3>Apply</h3>
            <p>Submit your resume and application.</p>
        </div>

        <div class="step">
            <div class="step-number">05</div>
            <h3>Get Hired</h3>
            <p>Track interviews and application results.</p>
        </div>

    </div>

</section>


<!-- =====================================================
     RESUME BUILDER
===================================================== -->

<section id="resume">

    <div class="section-heading">

        <div class="eyebrow">Resume Builder</div>

        <h2>
            Build a resume that gets noticed.
        </h2>

        <p>
            Interactive demo section for your portfolio.
            Enter details and see them update in the preview.
        </p>

    </div>


    <div class="resume-area">


        <div class="resume-form">

            <h3>Resume Information</h3>

            <div class="form-grid">

                <div class="form-group">

                    <label>FULL NAME</label>

                    <input
                        id="resumeName"
                        value="KR Kaushalya"
                        oninput="updateResume()">

                </div>


                <div class="form-group">

                    <label>PROFESSION</label>

                    <input
                        id="resumeRole"
                        value="Full Stack Developer"
                        oninput="updateResume()">

                </div>


                <div class="form-group full">

                    <label>ABOUT</label>

                    <textarea
                        id="resumeAbout"
                        oninput="updateResume()">Passionate developer interested in building modern and user-friendly web applications.</textarea>

                </div>


                <div class="form-group">

                    <label>EMAIL</label>

                    <input
                        id="resumeEmail"
                        value="yourmail@example.com"
                        oninput="updateResume()">

                </div>


                <div class="form-group">

                    <label>LOCATION</label>

                    <input
                        id="resumeLocation"
                        value="India"
                        oninput="updateResume()">

                </div>


                <div class="form-group full">

                    <label>SKILLS</label>

                    <input
                        id="resumeSkills"
                        value="HTML, CSS, JavaScript, Node.js, MongoDB"
                        oninput="updateResume()">

                </div>

            </div>

            <button class="btn btn-main"
                    onclick="downloadResume()">
                Download Resume
            </button>

        </div>


        <div class="resume-preview">

            <h3>Live Preview</h3>

            <div class="resume-paper">

                <h1 id="previewName">
                    KR Kaushalya
                </h1>

                <div class="role" id="previewRole">
                    Full Stack Developer
                </div>

                <p id="previewContact">
                    yourmail@example.com · India
                </p>


                <div class="resume-section">

                    <h4>Profile</h4>

                    <p id="previewAbout">
                        Passionate developer interested in building
                        modern and user-friendly web applications.
                    </p>

                </div>


                <div class="resume-section">

                    <h4>Skills</h4>

                    <p id="previewSkills">
                        HTML, CSS, JavaScript, Node.js, MongoDB
                    </p>

                </div>


                <div class="resume-section">

                    <h4>Projects</h4>

                    <p>
                        Online Job Portal — Full-stack recruitment
                        platform with candidate and recruiter workflows.
                    </p>

                </div>


                <div class="resume-section">

                    <h4>Education</h4>

                    <p>
                        Computer Science & Engineering
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- =====================================================
     MY APPLICATIONS
===================================================== -->

<section id="applications">

    <div class="section-heading">

        <div class="eyebrow">Application Tracking</div>

        <h2>
            My Applications.
        </h2>

        <p>
            A centralized dashboard to track every job application.
        </p>

    </div>


    <div class="application-table">

        <table>

            <thead>

                <tr>
                    <th>Position</th>
                    <th>Company</th>
                    <th>Applied</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>

            </thead>


            <tbody>

                <tr>
                    <td>Full Stack Developer</td>
                    <td>TechNova</td>
                    <td>20 Aug 2026</td>
                    <td>
                        <span class="status-pill shortlisted">
                            Shortlisted
                        </span>
                    </td>
                    <td>
                        <button class="view-btn"
                                onclick="showToast('Application opened')">
                            View
                        </button>
                    </td>
                </tr>


                <tr>
                    <td>Frontend Developer</td>
                    <td>Pixel Labs</td>
                    <td>18 Aug 2026</td>
                    <td>
                        <span class="status-pill pending">
                            Pending
                        </span>
                    </td>
                    <td>
                        <button class="view-btn"
                                onclick="showToast('Application opened')">
                            View
                        </button>
                    </td>
                </tr>


                <tr>
                    <td>Software Engineer</td>
                    <td>FutureStack</td>
                    <td>15 Aug 2026</td>
                    <td>
                        <span class="status-pill interview">
                            Interview
                        </span>
                    </td>
                    <td>
                        <button class="view-btn"
                                onclick="showToast('Interview details opened')">
                            View
                        </button>
                    </td>
                </tr>

            </tbody>

        </table>

    </div>

</section>


<!-- =====================================================
     RECRUITER DASHBOARD
===================================================== -->

<section id="recruiter">

    <div class="section-heading">

        <div class="eyebrow">Recruiter</div>

        <h2>
            Hiring, simplified.
        </h2>

        <p>
            Recruiters can manage jobs, candidates and interviews
            from one centralized dashboard.
        </p>

    </div>


    <div class="recruiter-grid">

        <div class="stat-card">
            <span>ACTIVE JOBS</span>
            <strong>24</strong>
        </div>

        <div class="stat-card">
            <span>APPLICATIONS</span>
            <strong>684</strong>
        </div>

        <div class="stat-card">
            <span>SHORTLISTED</span>
            <strong>96</strong>
        </div>

        <div class="stat-card">
            <span>INTERVIEWS</span>
            <strong>38</strong>
        </div>

    </div>


    <div class="application-table">

        <table>

            <thead>

                <tr>
                    <th>Candidate</th>
                    <th>Position</th>
                    <th>Experience</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>

            </thead>


            <tbody>

                <tr>
                    <td>Candidate 01</td>
                    <td>Full Stack Developer</td>
                    <td>2 Years</td>
                    <td>
                        <span class="status-pill shortlisted">
                            Shortlisted
                        </span>
                    </td>
                    <td>
                        <button class="view-btn"
                                onclick="showToast('Candidate profile opened')">
                            View
                        </button>
                    </td>
                </tr>


                <tr>
                    <td>Candidate 02</td>
                    <td>Frontend Developer</td>
                    <td>1 Year</td>
                    <td>
                        <span class="status-pill pending">
                            Review
                        </span>
                    </td>
                    <td>
                        <button class="view-btn"
                                onclick="showToast('Candidate profile opened')">
                            View
                        </button>
                    </td>
                </tr>


                <tr>
                    <td>Candidate 03</td>
                    <td>Software Engineer</td>
                    <td>3 Years</td>
                    <td>
                        <span class="status-pill interview">
                            Interview
                        </span>
                    </td>
                    <td>
                        <button class="view-btn"
                                onclick="showToast('Interview opened')">
                            View
                        </button>
                    </td>
                </tr>

            </tbody>

        </table>

    </div>

</section>


<!-- =====================================================
     CTA
===================================================== -->

<section class="cta">

    <div class="cta-box">

        <div class="eyebrow">
            Online Job Portal
        </div>

        <h2>
            Find. Apply. Grow.
        </h2>

        <p>
            A complete recruitment ecosystem built to make
            job discovery and hiring simpler.
        </p>

        <div class="hero-buttons"
             style="justify-content:center">

            <button class="btn btn-main"
                    onclick="showToast('Live Demo clicked')">
                🚀 Live Demo
            </button>

            <button class="btn btn-dark"
                    onclick="showToast('GitHub link clicked')">
                💻 GitHub
            </button>

        </div>

    </div>

</section>


<!-- =====================================================
     FOOTER
===================================================== -->

<footer>

    <span>
        © 2026 JobFlow — Online Job Portal
    </span>

    <span>
        Full-Stack Web Application
    </span>

</footer>


<!-- =====================================================
     SCREENSHOT MODAL
===================================================== -->

<div class="modal" id="imageModal">

    <div class="modal-box">

        <div class="modal-header">

            <div>
                <h3 id="modalTitle">
                    Screenshot
                </h3>
            </div>

            <button class="close"
                    onclick="closeModal()">
                ✕
            </button>

        </div>


        <div class="modal-image">

            <img
                id="modalImg"
                src=""
                alt="Project Screenshot">

        </div>


        <p
            class="modal-description"
            id="modalDescription">
        </p>

    </div>

</div>


<!-- =====================================================
     TOAST
===================================================== -->

<div class="toast" id="toast">
    Done!
</div>


<script>

/* =========================================================
   SCREENSHOT FILTER
========================================================= */

function filterScreens(category, button){

    const cards =
        document.querySelectorAll(".screen-card");

    const buttons =
        document.querySelectorAll(".filter-btn");

    buttons.forEach(btn =>
        btn.classList.remove("active")
    );

    button.classList.add("active");

    cards.forEach(card => {

        if(category === "all"){
            card.style.display = "block";
        }

        else if(card.dataset.category === category){
            card.style.display = "block";
        }

        else{
            card.style.display = "none";
        }

    });

}


/* =========================================================
   IMAGE MODAL
========================================================= */

function openImage(image,title,description){

    const modal =
        document.getElementById("imageModal");

    const img =
        document.getElementById("modalImg");

    const titleElement =
        document.getElementById("modalTitle");

    const descriptionElement =
        document.getElementById("modalDescription");

    img.src = image;

    titleElement.textContent = title;

    descriptionElement.textContent =
        description;

    modal.classList.add("show");

}


function closeModal(){

    document
        .getElementById("imageModal")
        .classList.remove("show");

}


document
    .getElementById("imageModal")
    .addEventListener("click",function(e){

        if(e.target === this){
            closeModal();
        }

    });


/* =========================================================
   RESUME BUILDER
========================================================= */

function updateResume(){

    const name =
        document.getElementById("resumeName").value;

    const role =
        document.getElementById("resumeRole").value;

    const about =
        document.getElementById("resumeAbout").value;

    const email =
        document.getElementById("resumeEmail").value;

    const location =
        document.getElementById("resumeLocation").value;

    const skills =
        document.getElementById("resumeSkills").value;


    document.getElementById("previewName")
        .textContent = name || "Your Name";

    document.getElementById("previewRole")
        .textContent = role || "Your Profession";

    document.getElementById("previewAbout")
        .textContent = about || "Your profile summary";

    document.getElementById("previewContact")
        .textContent =
        `${email || "email@example.com"} · ${location || "Location"}`;

    document.getElementById("previewSkills")
        .textContent =
        skills || "Add your skills";

}


/* =========================================================
   DOWNLOAD RESUME
========================================================= */

function downloadResume(){

    const name =
        document.getElementById("resumeName").value;

    const role =
        document.getElementById("resumeRole").value;

    const about =
        document.getElementById("resumeAbout").value;

    const email =
        document.getElementById("resumeEmail").value;

    const location =
        document.getElementById("resumeLocation").value;

    const skills =
        document.getElementById("resumeSkills").value;


    const resumeHTML = `

        <html>

        <head>

        <title>${name} Resume</title>

        <style>

        body{
            font-family:Arial;
            padding:50px;
            color:#222;
        }

        h1{
            font-size:35px;
            margin-bottom:5px;
        }

        h2{
            font-size:16px;
            color:#555;
        }

        h3{
            margin-top:30px;
            border-bottom:1px solid #ddd;
            padding-bottom:8px;
        }

        p{
            line-height:1.7;
        }

        </style>

        </head>

        <body>

        <h1>${name}</h1>

        <h2>${role}</h2>

        <p>${email} · ${location}</p>

        <h3>PROFILE</h3>

        <p>${about}</p>

        <h3>SKILLS</h3>

        <p>${skills}</p>

        <h3>PROJECT</h3>

        <p>
        Online Job Portal — Full-stack recruitment
        platform connecting candidates and recruiters.
        </p>

        <h3>EDUCATION</h3>

        <p>
        Computer Science & Engineering
        </p>

        </body>

        </html>

    `;


    const blob =
        new Blob([resumeHTML],{
            type:"text/html"
        });

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        `${name || "resume"}-resume.html`;

    link.click();

    URL.revokeObjectURL(url);

    showToast("Resume generated successfully!");

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message){

    const toast =
        document.getElementById("toast");

    toast.textContent =
        message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    },2500);

}


/* =========================================================
   ESCAPE MODAL
========================================================= */

document.addEventListener("keydown",function(e){

    if(e.key === "Escape"){
        closeModal();
    }

});


/* =========================================================
   INITIALIZE
========================================================= */

updateResume();

</script>

</body>
</html>
