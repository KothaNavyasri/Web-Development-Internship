// scripts.js

document.getElementById('generate-readme').addEventListener('click', () => {
    const template = document.getElementById('template').value;
    const profilePicture = document.getElementById('profile-picture').value;
    const bio = document.getElementById('bio').value;
    const socialLinks = document.getElementById('social-links').value.split(',').map(link => link.trim());
    const projects = document.getElementById('projects').value.split(',').map(project => project.trim());
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const interests = document.getElementById('interests').value.split(',').map(interest => interest.trim());

    let readmeContent = '';

    if (template === 'basic') {
        readmeContent = `
# Welcome to My GitHub Profile

![Profile Picture](${profilePicture})

## Bio
${bio}

## Social Media Links
${socialLinks.map(link => `- [${link}](${link})`).join('\n')}

## Projects
${projects.map(project => `- ${project}`).join('\n')}

## Skills
${skills.join(', ')}

## Personal Interests
${interests.join(', ')}
        `;
    } else if (template === 'projects') {
        readmeContent = `
# Projects Showcase

![Profile Picture](${profilePicture})

## Bio
${bio}

## Social Media Links
${socialLinks.map(link => `- [${link}](${link})`).join('\n')}

## Project Highlights
${projects.map(project => `- ${project}`).join('\n')}
        `;
    } else if (template === 'skills') {
        readmeContent = `
# Skills Highlight

![Profile Picture](${profilePicture})

## Bio
${bio}

## Social Media Links
${socialLinks.map(link => `- [${link}](${link})`).join('\n')}

## Skills
${skills.join(', ')}
        `;
    } else if (template === 'interests') {
        readmeContent = `
# Personal Interests

![Profile Picture](${profilePicture})

## Bio
${bio}

## Social Media Links
${socialLinks.map(link => `- [${link}](${link})`).join('\n')}

## Personal Interests
${interests.join(', ')}
        `;
    }

    document.getElementById('readme-output').innerText = readmeContent.trim();
});
