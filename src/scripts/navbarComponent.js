function navbarSectionComponent() {
    return {
        sections: {
            "Home": {
                "Icon": "fa-solid fa-house",
                "TooltipMessage": "Home",
                "Link": "#mainSection"
            },

            "Intro": {
                "Icon": "fa-solid fa-user",
                "TooltipMessage": "About Me",
                "Link": "#aboutMeSection"
            },

            "TechSkills": {
                "Icon": "fa-solid fa-code",
                "TooltipMessage": "Technical Skills",
                "Link": "#technicalSkillSection"
            },

            "Projects": {
                "Icon": "fa-solid fa-folder-open",
                "TooltipMessage": "My Projects",
                "Link": "#projectSection"
            },

            "Education": {
                "Icon": "fa-solid fa-graduation-cap",
                "TooltipMessage": "Education and Certificates",
                "Link": "#educationSection"
            },

            "Contacts": {
                "Icon": "fa-solid fa-phone-flip",
                "TooltipMessage": "Contact Me",
                "Link": "#contactSection"
            }
        }
    }
}