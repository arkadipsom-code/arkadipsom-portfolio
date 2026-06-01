# WorkspaceOS (My Portfolio) 

A clean, modern, and interactive website portfolio that looks and acts just like a computer desktop. Built using modern web tools, it provides a fun, spatial way to explore my work, skills, and background.

**[Click Here to Open the Live Portfolio!](https://arkadipsom-portfolio.vercel.app/)**

---

## Features 

* **Moving Windows:** Just like a real computer, you can open different pages as separate windows, drag them around your screen, expand them to full screen, or close them when you are done.
* **Working Typing Terminal (`console.sh`):** If you like using keyboards over mice, you can open the built-in mini-terminal widget and type simple commands like `profile`, `projects`, or `skills` to open up those pages instantly.
* **Live Desktop Widgets:** The desktop has a live clock that counts exactly how many seconds you have spent hanging out on the website, along with an interactive mini-calendar grid.
* **Color Themes:** You can change the website's background wallpaper look instantly! Swap between three clean dark theme settings: Space Navy, Deep Charcoal, or Dark Emerald.
* **Two Worlds Combined:** The portfolio is uniquely designed to showcase two fields side-by-side: my technical analytical background in **Civil Engineering** along with modern **Software Development** and **Machine Learning** projects.

---

## Built With

* **React 19** – The main engine used to create the interactive layout blocks.
* **Vite** – Used to make the website load incredibly fast.
* **Tailwind CSS v4** – Used to design the smooth animations, layouts, and frosted-glass window effects.
* **Lucide React** – Clean and beautiful minimalist line-art icons.
* **Formspree** – Handles the contact form so visitor messages get sent straight to my inbox.

---

## Project Organization

Here is a simple look at how the website's files are arranged:

```text
public/
  ├── favicon.svg          # Website browser tab icon
  ├── icons.svg            # Social media icons (GitHub, Discord, X, etc.)
  └── resume.pdf           # Downloadable copy of my resume
src/
  ├── components/
  │    ├── core/
  │    │    ├── Desktop.jsx          # Controls the main desktop layout and theme colors
  │    │    ├── TopBar.jsx           # The top menu bar with the clock and settings
  │    │    ├── Dock.jsx             # The bottom app launch bar
  │    │    ├── Window.jsx           # Controls the draggable window boxes
  │    │    └── DashboardWidgets.jsx # Runs the clock, calendar, and typing terminal
  │    └── folders/
  │         ├── FolderGrid.jsx       # Arranges the folder icons on the screen
  │         └── FolderIcon.jsx       # Clicking actions for the folder icons
  ├── data/                          # The text files containing the actual portfolio information
  │    ├── experiences.json
  │    ├── profile.json
  │    ├── projects.json
  │    └── skills.json
  ├── hooks/
  │    └── useTime.jsx               # Keeps the clock ticking accurately
  └── views/                         # What shows up inside each opened window
       ├── ProfileView.jsx           # About Me section
       ├── ProjectView.jsx           # My project showcase
       ├── SkillsView.jsx            # My skills and tools grid
       ├── ExperiencesView.jsx       # My work history timeline
       └── ContactView.jsx           # Message submission form
